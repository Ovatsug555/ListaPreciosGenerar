import pandas as pd
import json
import os
import sys
import glob

# --- CORRECCIÓN CRÍTICA: OBLIGAR A USAR LA CARPETA CORRECTA ---
# Esto mueve la ejecución desde System32 a tu carpeta F:\...
carpeta_del_script = os.path.dirname(os.path.abspath(__file__))
os.chdir(carpeta_del_script)
# --------------------------------------------------------------

print(f"📂 Carpeta de trabajo fijada en: {os.getcwd()}")
print("--- BUSCANDO ARCHIVO EXCEL ---")

# Buscamos 'lista.xlsx' (o cualquier otro excel si cambiaste el nombre)
archivos = glob.glob("*.xlsx") + glob.glob("*.XLSX")

if not archivos:
    print("❌ ERROR: No encuentro ningún archivo Excel (.xlsx).")
    print("   Asegúrate de haber renombrado tu archivo a 'lista.xlsx'.")
    print("   Archivos que SÍ veo en esta carpeta:")
    for a in os.listdir():
        print(f"   - {a}")
    input("\nPresiona ENTER para salir...")
    sys.exit()

archivo_usar = archivos[0]
print(f"✅ ¡Encontrado! Procesando: '{archivo_usar}'")

try:
    # Leer Excel
    df = pd.read_excel(archivo_usar)
    
    # Limpiar columnas
    df.columns = df.columns.str.strip()
    
    # Verificar si están las columnas (ajusta si se llaman diferente)
    # NOTA: Pandas es sensible a mayúsculas. 'Artículo' lleva tilde.
    if 'Artículo' not in df.columns or 'Precio' not in df.columns:
        print(f"⚠️  OJO: No veo las columnas 'Artículo' y 'Precio'.")
        print(f"    Columnas detectadas: {df.columns.tolist()}")
    
    data = {}
    
    # Asegurar textos
    if 'Artículo' in df.columns:
        df['Artículo'] = df['Artículo'].astype(str)
        
        for index, row in df.iterrows():
            texto = row['Artículo']
            
            # Separar codigo y nombre
            partes = texto.strip().split(' ', 1)
            if len(partes) == 2:
                codigo, nombre = partes
            else:
                codigo = f"SIN_COD_{index}"
                nombre = texto
            
            # Precio
            try:
                precio = int(pd.to_numeric(str(row.get('Precio', 0)).replace('$','').replace(',',''), errors='coerce'))
            except:
                precio = 0
                
            if codigo:
                data[codigo] = {"nombre": nombre, "precio": precio}

    # Guardar JSON
    with open("listado_articulos.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

    print("\n" + "="*40)
    print(f"🎉 ¡ÉXITO TOTAL! JSON creado: listado_articulos.json")
    print(f"   Se procesaron {len(data)} artículos.")
    print("="*40)

except Exception as e:
    print(f"\n❌ Algo falló procesando el Excel:\n{e}")

input("\nPresiona ENTER para terminar...")