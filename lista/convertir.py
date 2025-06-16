import pandas as pd
import json

# Cambia el nombre si tu archivo se llama distinto
archivo = "20250522-1158-Listado-de-precios-de-articulos.XLSX"

# Leer el Excel
df = pd.read_excel(archivo)

# Separar código y nombre
df[['codigo', 'nombre']] = df['Artículo'].str.extract(r'([^\s]+)\s+(.+)')
df['precio'] = df['Precio']

# Crear el diccionario
data = {
    str(row['codigo']): {"nombre": str(row['nombre']), "precio": int(row['precio'])}
    for _, row in df.iterrows() if pd.notnull(row['codigo']) and pd.notnull(row['nombre']) and pd.notnull(row['precio'])
}

# Guardar como JSON
with open("listado_articulos.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("¡Listo! Archivo listado_articulos.json generado.")
