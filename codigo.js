// Simulación de base de datos de ropa con precios
const ropa = {
  //Lista Base de Datos local Buenos Aires
    "1279": {
        "nombre": "zapatilla de seguridad puntera PVC",
        "precio": 122000
    },
    "1609": {
        "nombre": "Zapato prusiano",
        "precio": 84100
    },
    "1709": {
        "nombre": "Botin prusiano",
        "precio": 86000
    },
    "22222001E": {
        "nombre": "bombacha elastizada",
        "precio": 54000
    },
    "2789": {
        "nombre": "Botin de seguridad puntera PVC",
        "precio": 128000
    },
    "561521003": {
        "nombre": "CHAQUETA ENTALLADA MUJER CON VIVOS Y CIERRE ML",
        "precio": 62500
    },
    "777": {
        "nombre": "servicio bordado",
        "precio": 1900
    },
    "ZZ": {
        "nombre": "mercaderia",
        "precio": 31300
    },
    "SIN_COD_8": {
        "nombre": "844134011",
        "precio": 20500
    },
    "3": {
        "nombre": "varios",
        "precio": 27300
    },
    "BLUSAS": {
        "nombre": "BLUSAS",
        "precio": 22000
    },
    "CAMISA": {
        "nombre": "HOMBREML CAMISA HOMBRE ML",
        "precio": 29000
    },
    "CHOMBAS": {
        "nombre": "CHOMBAS",
        "precio": 25000
    },
    "MONOS": {
        "nombre": "MONOS DAMA",
        "precio": 26000
    },
    "PANTALON": {
        "nombre": "DAMA PANTALON DAMA OFERTA",
        "precio": 28000
    },
    "REMERA": {
        "nombre": "HOMBRE REMERA HOMBRE",
        "precio": 15000
    },
    "SHORT": {
        "nombre": "VESTIR SHORT DAMA VESTIR",
        "precio": 25000
    },
    "VESTIDOS": {
        "nombre": "VESTIDOS",
        "precio": 28000
    },
    "711530002": {
        "nombre": "CAMISA MILA MC PAPER TOUCH",
        "precio": 57500
    },
    "911511002": {
        "nombre": "TRIKINI ALEXIA FANTASIA",
        "precio": 5990
    },
    "911511003": {
        "nombre": "TRAJE DE BAÑO ENTERO FLOR",
        "precio": 1680
    },
    "911511006": {
        "nombre": "TRAJE DE BAÑO ENTERO SIMIL COMPETICIÓN",
        "precio": 790
    },
    "911511007": {
        "nombre": "REMERA CRIS SURF NENE/A",
        "precio": 5990
    },
    "911511008": {
        "nombre": "TRIKINI ALEXIA",
        "precio": 14850
    },
    "911511009": {
        "nombre": "TRAJE DE BAÑO 2 PIEZAS",
        "precio": 4680
    },
    "911511010": {
        "nombre": "TRAJE DE BAÑO ENTERO SIMIL COMPETICIÓN",
        "precio": 5990
    },
    "911511011": {
        "nombre": "REMERA CRIS SURF ML NENE/A COMBINADA C/ESTAMPA",
        "precio": 6990
    },
    "911511013": {
        "nombre": "ENTERO PANDORA",
        "precio": 27300
    },
    "911511014": {
        "nombre": "ENTERO SIRA",
        "precio": 27300
    },
    "911511015": {
        "nombre": "ENTERO MINERVA",
        "precio": 28500
    },
    "911511016": {
        "nombre": "ENTERO NUBE",
        "precio": 28500
    },
    "911511017": {
        "nombre": "2 PIEZAS GEA",
        "precio": 28500
    },
    "911511018": {
        "nombre": "2 PIEZAS LUNA",
        "precio": 28500
    },
    "911511019": {
        "nombre": "ENTERO NALA",
        "precio": 35800
    },
    "912106019": {
        "nombre": "SHORT DE BAÑO ESTAMPADO",
        "precio": 31800
    },
    "912128001": {
        "nombre": "SHORT DE BAÑO CRIS N. MICROFIBRA CUADRILLE",
        "precio": 650
    },
    "912128002": {
        "nombre": "SHORT DE BAÑO CRIS N. MICROFIBRA HOJAS",
        "precio": 550
    },
    "912128004": {
        "nombre": "SHORT DE BAÑO CRIS N. MICROFIBRA",
        "precio": 31800
    },
    "912511000": {
        "nombre": "SHORT LYCRA NIÑO LISO",
        "precio": 1180
    },
    "912511001": {
        "nombre": "SHORT LYCRA NIÑO ESTAMPADO",
        "precio": 1250
    },
    "912511002": {
        "nombre": "SHORT APOLO",
        "precio": 21400
    },
    "913213142": {
        "nombre": "CAMPERA ALICURA N.SOFTSHELL",
        "precio": 73500
    },
    "941106003": {
        "nombre": "BANDANA FILTRO",
        "precio": 20900
    },
    "941106004": {
        "nombre": "SOMBRERO FILTRO UV",
        "precio": 20900
    },
    "951122001": {
        "nombre": "PIJAMA JUANI 2P M/L ESCOCES",
        "precio": 1200
    },
    "951140004": {
        "nombre": "PIJAMA DAMIAN RAYAS 2PZAS.LARGO",
        "precio": 1200
    },
    "951164001": {
        "nombre": "PIJAMA DAMIAN 2P M/L RAY.",
        "precio": 1200
    },
    "952221140": {
        "nombre": "CALZONCILLO CAMILO PACK X 3",
        "precio": 220
    },
    "U12106003": {
        "nombre": "PANTALÓN AIMAR",
        "precio": 87000
    },
    "911106018": {
        "nombre": "ENTERO DEL MANGA LARGA",
        "precio": 20600
    },
    "911106021": {
        "nombre": "ENTERO TIRAS AJUSTABLES",
        "precio": 4890
    },
    "911106023": {
        "nombre": "TANKINI",
        "precio": 19700
    },
    "911106026": {
        "nombre": "REMERA CRIS SURF NENE",
        "precio": 27300
    },
    "U11106009": {
        "nombre": "REMERA CARRERA MANGA LARGA",
        "precio": 48500
    },
    "911106027": {
        "nombre": "REMERA CRIS SURF BB",
        "precio": 27300
    },
    "911106028": {
        "nombre": "REMERA ML",
        "precio": 28300
    },
    "911106029": {
        "nombre": "REMERA ML BB",
        "precio": 28300
    },
    "911106030": {
        "nombre": "SHORT BAÑO MICRO",
        "precio": 31800
    },
    "911106038": {
        "nombre": "ENTERO 2 VOLADOS",
        "precio": 20600
    },
    "911106039": {
        "nombre": "ENTERO COMPETICION",
        "precio": 19700
    },
    "911106040": {
        "nombre": "ENTERO ML CRUZADO",
        "precio": 25700
    },
    "911106041": {
        "nombre": "2 PIEZAS CLASICO",
        "precio": 19700
    },
    "911106042": {
        "nombre": "ENTERO ESPALDA DESCUBIERTA",
        "precio": 19470
    },
    "811106196": {
        "nombre": "ENTERO TRIANGULO",
        "precio": 27390
    },
    "811106198": {
        "nombre": "2 PIEZAS TRIANGULO",
        "precio": 24750
    },
    "811106200": {
        "nombre": "BIKINI NUDO",
        "precio": 24156
    },
    "811106253": {
        "nombre": "TRAJE DE BAÑO CON ARGOLLA",
        "precio": 26840
    },
    "811106254": {
        "nombre": "TRIKINI MUJER",
        "precio": 30789
    },
    "811106255": {
        "nombre": "BIKINI ALTA CON ARGOLLA",
        "precio": 24156
    },
    "811106258": {
        "nombre": "2PIEZAS TRIANGULO LESS",
        "precio": 24750
    },
    "811106259": {
        "nombre": "BIJINI NUDO LESS",
        "precio": 24156
    },
    "711511000": {
        "nombre": "TOP DEPORTIVO NOA",
        "precio": 47500
    },
    "711517000": {
        "nombre": "MUSCULOSA DEPORTIVA EMMA",
        "precio": 32000
    },
    "712511001": {
        "nombre": "CALZA DEPORTIVA GRETA",
        "precio": 68500
    },
    "713106009": {
        "nombre": "CAMPERA NOGAL MUJER",
        "precio": 121000
    },
    "713106201": {
        "nombre": "TAPADO TRAFUL",
        "precio": 148500
    },
    "713211142": {
        "nombre": "CAMPERA CHOLILA M.SOFTSHELL",
        "precio": 105500
    },
    "711106013": {
        "nombre": "CAMISA EVA SUPLEX MINI RIPSTOP",
        "precio": 79500
    },
    "711106014": {
        "nombre": "CAMISA MERCEDES SPANDEX",
        "precio": 70500
    },
    "711106020": {
        "nombre": "CAMISA MILA",
        "precio": 77000
    },
    "711106021": {
        "nombre": "CAMPERA FLORIDA",
        "precio": 58000
    },
    "711106022": {
        "nombre": "CAMISA MILA PAPER TOUCH",
        "precio": 62000
    },
    "711106023": {
        "nombre": "CAMISA MILA MC SECADO RÁPIDO",
        "precio": 71500
    },
    "711108001": {
        "nombre": "CHALECO UNION",
        "precio": 54500
    },
    "711108002": {
        "nombre": "BUZO FLORIDA",
        "precio": 53500
    },
    "711106017": {
        "nombre": "REMERA CARRERA",
        "precio": 18810
    },
    "711141000": {
        "nombre": "BUZO LA ESTANCIA COMBINADO MUJER",
        "precio": 54500
    },
    "711141001": {
        "nombre": "BUZO FLORIDA LIVIANO",
        "precio": 53500
    },
    "711141002": {
        "nombre": "CHALECO UNION LIVIANO",
        "precio": 54500
    },
    "712106008": {
        "nombre": "BABUCHA ROSAS",
        "precio": 103000
    },
    "712106009": {
        "nombre": "SHORT ROJAS  MUJER",
        "precio": 72000
    },
    "712106012": {
        "nombre": "SHORT CATAMARCA",
        "precio": 30800
    },
    "712106013": {
        "nombre": "BABUCHA RUCA",
        "precio": 110500
    },
    "712106015": {
        "nombre": "CALZA DEPORTIVA GRETA LARGA",
        "precio": 79000
    },
    "412106003": {
        "nombre": "SHORT BAÑO ADULTO",
        "precio": 40500
    },
    "412106004": {
        "nombre": "SHORT BAÑO ESTAMPADO",
        "precio": 42100
    },
    "412128001": {
        "nombre": "SHORT DE BAÑO ADULTO CUADRILLE",
        "precio": 8520
    },
    "412128002": {
        "nombre": "SHORT DE BAÑO ADULTO HOJAS",
        "precio": 770
    },
    "412128003": {
        "nombre": "SHORT DE BAÑO ADULTO",
        "precio": 42100
    },
    "811511003": {
        "nombre": "TRAJE DE BAÑO ENTERTO TRIANGULO",
        "precio": 2860
    },
    "811511004": {
        "nombre": "TRAJE DE BAÑO 2 PIEZAS TRIANGULO",
        "precio": 2120
    },
    "811511005": {
        "nombre": "TRAJE DE BAÑO ENTERO CLASICO",
        "precio": 2720
    },
    "811511006": {
        "nombre": "TRAJE DE BAÑO 2 PIEZAS CLASICO",
        "precio": 1920
    },
    "811511008": {
        "nombre": "ENTERO AURORA",
        "precio": 48400
    },
    "811511009": {
        "nombre": "ENTERO FRIDA",
        "precio": 51400
    },
    "811511010": {
        "nombre": "ENTERO INDIA",
        "precio": 50400
    },
    "811511011": {
        "nombre": "DOS PIEZAS CIELO ALTA",
        "precio": 48400
    },
    "811511012": {
        "nombre": "DOS PIEZAS LUNA",
        "precio": 46300
    },
    "811511013": {
        "nombre": "DOS PIEZAS LUNA LESS",
        "precio": 46300
    },
    "811511014": {
        "nombre": "DOS PIEZAS CIELO",
        "precio": 45900
    },
    "311106015": {
        "nombre": "CAMISA  PUAN TECNICA M/LARGA 2 BOLSILLOS",
        "precio": 80500
    },
    "311106110": {
        "nombre": "REMERA CARRERA",
        "precio": 42000
    },
    "311108005": {
        "nombre": "CAMPERA CATALPA H MICROPOLAR",
        "precio": 65000
    },
    "311108009": {
        "nombre": "CHALECO CATALPA",
        "precio": 57000
    },
    "311108010": {
        "nombre": "BUZO CATALPA PESADO",
        "precio": 34320
    },
    "311106018": {
        "nombre": "CAMISA PUAN TECNICA M/C C/ BOLSILLO",
        "precio": 69500
    },
    "311141000": {
        "nombre": "BUZO LA ESTANCIA COMBINADO HOMBRE",
        "precio": 54500
    },
    "311141001": {
        "nombre": "CAMPERA CATALPA LIVIANA",
        "precio": 65000
    },
    "311141002": {
        "nombre": "BUZO CATALPA LIVIANO",
        "precio": 59500
    },
    "311108003": {
        "nombre": "BUZO CATALPA POLAR H.",
        "precio": 59500
    },
    "311141003": {
        "nombre": "CHALECO CATALPA LIVIANO",
        "precio": 57000
    },
    "312106017": {
        "nombre": "BABUCHA TAPALQUE",
        "precio": 108000
    },
    "312106019": {
        "nombre": "BERMUDA CARGO SAAVEDRA",
        "precio": 78000
    },
    "312106023": {
        "nombre": "PANTALÓN CARGO DESMONTABLE SOFSHELL",
        "precio": 89700
    },
    "312106024": {
        "nombre": "PANTALÓN EPECUÉN",
        "precio": 112500
    },
    "312106501": {
        "nombre": "SHORT CATAMARCA",
        "precio": 39500
    },
    "311106107": {
        "nombre": "CAMISA PUAN PAPER M/C",
        "precio": 57500
    },
    "311106108": {
        "nombre": "CAMISA PUAN PAPER M/L",
        "precio": 63000
    },
    "313106005": {
        "nombre": "CAMPERA NOGAL SOFTSHELL H.",
        "precio": 129000
    },
    "313211142": {
        "nombre": "CAMPERA CURRUHUE H.SOFTSHELL",
        "precio": 126000
    },
    "011106008": {
        "nombre": "ENTERO BB 2 VOLADOS",
        "precio": 14520
    },
    "011106009": {
        "nombre": "ENTERO BB CRUZADO",
        "precio": 14520
    },
    "011106010": {
        "nombre": "ENTERO BB ESPALDA DESCUBIERTA",
        "precio": 18480
    },
    "011511001": {
        "nombre": "TRAJE DE BAÑO ENTERO LOLI BB",
        "precio": 5620
    },
    "011511002": {
        "nombre": "TRAJE DE BAÑO BB PALI C/ VOLADOS EN COLA",
        "precio": 5620
    },
    "011511005": {
        "nombre": "REMERA CRIS SURF BB",
        "precio": 1440
    },
    "011511007": {
        "nombre": "TRAJE DE BAÑO BB PALI C/ VOLADOS EN COLA",
        "precio": 5620
    },
    "011511008": {
        "nombre": "TRAJE DE BAÑO ENTERO CLASICO CON VOLADOS",
        "precio": 5620
    },
    "011511009": {
        "nombre": "REMERA CRIS SURF ML BB/A COMBINADA C/ESTAMPA",
        "precio": 1560
    },
    "011511010": {
        "nombre": "ENTERO MINERVA BB",
        "precio": 26700
    },
    "011511011": {
        "nombre": "ENTERO NUBE BB",
        "precio": 26700
    },
    "011511012": {
        "nombre": "ENTERO NALA BB",
        "precio": 35000
    },
    "012106003": {
        "nombre": "BOMBI PACK X 4",
        "precio": 20933
    },
    "012106006": {
        "nombre": "SHORT LYCRA",
        "precio": 11660
    },
    "012128003": {
        "nombre": "SHORT MICROFIBRA BB",
        "precio": 1160
    },
    "012511009": {
        "nombre": "BOMBI CON VOLADOS EN COLA",
        "precio": 960
    },
    "012511010": {
        "nombre": "SHORT LYCRA BB LISO",
        "precio": 1180
    },
    "012511011": {
        "nombre": "SHORT LYCRA BB ESTAMPADO",
        "precio": 2180
    },
    "012537000": {
        "nombre": "PANTALÓN FRAN PLUSH",
        "precio": 300
    },
    "012544001": {
        "nombre": "RANITA JULI OSOS",
        "precio": 320
    },
    "012544002": {
        "nombre": "PANTALÓN CHUPIN",
        "precio": 270
    },
    "013106004": {
        "nombre": "CAMPERA CIRE ESTRELLAS",
        "precio": 550
    },
    "013106012": {
        "nombre": "CAMPERA CIRE BUHOS",
        "precio": 805
    },
    "013106013": {
        "nombre": "CAMPERA CIRE FLOR",
        "precio": 805
    },
    "013106014": {
        "nombre": "CAMPERA CIRE JUPITER",
        "precio": 950
    },
    "013106015": {
        "nombre": "CAMPERA CIRE DINOS",
        "precio": 950
    },
    "013106016": {
        "nombre": "CHALECO OTTO",
        "precio": 5430
    },
    "013106017": {
        "nombre": "CAMPERA CASTOR",
        "precio": 5990
    },
    "013141010": {
        "nombre": "CAMPERA APOLO",
        "precio": 2160
    },
    "013141011": {
        "nombre": "CHALECO ANGUS",
        "precio": 2070
    },
    "013544002": {
        "nombre": "ENTERITO PATO UNI",
        "precio": 1440
    },
    "013544005": {
        "nombre": "ENTERITO PATO ASTOR",
        "precio": 7250
    },
    "012128004": {
        "nombre": "CAMPERA RIE VOLADO",
        "precio": 3460
    },
    "012128005": {
        "nombre": "CAMPERA RIO COMBINADA",
        "precio": 9160
    },
    "012128006": {
        "nombre": "CHALECO SAN PABLO",
        "precio": 8140
    },
    "012139001": {
        "nombre": "SHORT MATEO RUSTICO",
        "precio": 730
    },
    "012139002": {
        "nombre": "PANTALÓN CHUPIN CON VOLADO",
        "precio": 400
    },
    "012139007": {
        "nombre": "PANTALÓN  CHUPIN EMA (CON VOLADO)",
        "precio": 370
    },
    "012139008": {
        "nombre": "PANTALÓN  CHUPIN ROSARIO",
        "precio": 2500
    },
    "011118006": {
        "nombre": "BUZO BONO",
        "precio": 1290
    },
    "011118013": {
        "nombre": "CANGURO RENATO",
        "precio": 11500
    },
    "011118014": {
        "nombre": "BUZO CHARLY",
        "precio": 18300
    },
    "011118015": {
        "nombre": "BUZO PRIMAVERA",
        "precio": 6440
    },
    "011118016": {
        "nombre": "BUZO LOS GARCIAS",
        "precio": 18900
    },
    "011118017": {
        "nombre": "BUZO MINI",
        "precio": 20000
    },
    "011118018": {
        "nombre": "BUZO VOLADOS",
        "precio": 12840
    },
    "011118019": {
        "nombre": "ENTERITO FRISA",
        "precio": 7920
    },
    "011118020": {
        "nombre": "BUZO CANGURO",
        "precio": 9410
    },
    "011122001": {
        "nombre": "VESTIDO CATA ROMBOS",
        "precio": 1200
    },
    "011122002": {
        "nombre": "REMERA SALVADOR ESCOTE V",
        "precio": 1200
    },
    "011122004": {
        "nombre": "BODIE FRANCHI",
        "precio": 560
    },
    "011122021": {
        "nombre": "BODIE ANDIE",
        "precio": 4990
    },
    "011122022": {
        "nombre": "BODIE ANDI  ARCO IRIS",
        "precio": 1520
    },
    "011122023": {
        "nombre": "BODIE ANDIE ESPACIO",
        "precio": 1460
    },
    "011122024": {
        "nombre": "BODIE ANDIE CACHORRO BOINA",
        "precio": 1520
    },
    "011122025": {
        "nombre": "ENTERITO PATO SOÑADORA",
        "precio": 4490
    },
    "011122026": {
        "nombre": "ENTERITO PATO MERCURIO",
        "precio": 4490
    },
    "011122029": {
        "nombre": "VESTIDO LEONOR",
        "precio": 3960
    },
    "011122035": {
        "nombre": "REMERA LOLITA",
        "precio": 7300
    },
    "011122036": {
        "nombre": "REMERA ELLIOT",
        "precio": 3990
    },
    "011122037": {
        "nombre": "REMERA BOLSILLO JIRAFAS",
        "precio": 2370
    },
    "011122038": {
        "nombre": "BODIE SKATE ADAM",
        "precio": 4990
    },
    "011122039": {
        "nombre": "REMERA SKATE MATEU",
        "precio": 3990
    },
    "011122040": {
        "nombre": "BODIE MARIPOSAS",
        "precio": 15000
    },
    "011122041": {
        "nombre": "REMERA MONARCA",
        "precio": 4250
    },
    "011122042": {
        "nombre": "REMERA MIL AMORES",
        "precio": 4250
    },
    "011122043": {
        "nombre": "ENTERITO PETIT",
        "precio": 6510
    },
    "011122044": {
        "nombre": "ENTERITO JUANA",
        "precio": 6510
    },
    "011122045": {
        "nombre": "BODIE ABRAZO",
        "precio": 4490
    },
    "011122046": {
        "nombre": "REMERA SONRISA",
        "precio": 7300
    },
    "011122047": {
        "nombre": "BODIE FRAN CONEJITOS",
        "precio": 7040
    },
    "011122049": {
        "nombre": "BODIE FRAN CORAZONES",
        "precio": 3600
    },
    "011122051": {
        "nombre": "BODIE MILA CRUZADO BOSQUE",
        "precio": 3990
    },
    "011122053": {
        "nombre": "BODIE FRANCO EMOJI",
        "precio": 7040
    },
    "011122054": {
        "nombre": "BODIE FRANCO SURFEANDO",
        "precio": 7040
    },
    "011122055": {
        "nombre": "BODIE FRAN VANS",
        "precio": 7320
    },
    "011122059": {
        "nombre": "REMERA MAGUI CONEJOS",
        "precio": 7400
    },
    "011122060": {
        "nombre": "REMERA MAGUI BONITA",
        "precio": 7480
    },
    "011122061": {
        "nombre": "REMERA MAGUI CARACOLA",
        "precio": 7480
    },
    "011122064": {
        "nombre": "REMERA MAITE",
        "precio": 7320
    },
    "011122065": {
        "nombre": "MUSCULOSA PURA",
        "precio": 6790
    },
    "011122067": {
        "nombre": "REMERA FRAN SURFEANDO",
        "precio": 7550
    },
    "011122068": {
        "nombre": "REMERA FRAN EMOJI",
        "precio": 7110
    },
    "011122069": {
        "nombre": "REMERA FRAN CABALLOS",
        "precio": 7870
    },
    "011122073": {
        "nombre": "VESTIDO BOSQUE",
        "precio": 9020
    },
    "011122074": {
        "nombre": "BODIE ANDI PAJAROS",
        "precio": 6120
    },
    "011122075": {
        "nombre": "BODIE ANDI CONEJOS",
        "precio": 6120
    },
    "011122076": {
        "nombre": "BODIE ANDIE AUTOS",
        "precio": 6120
    },
    "011122077": {
        "nombre": "BODIE ANDIE BEAGLE",
        "precio": 6120
    },
    "011122078": {
        "nombre": "REMERA CONEJOS",
        "precio": 5340
    },
    "011122079": {
        "nombre": "REMERA TRANSPORTE",
        "precio": 5340
    },
    "011122080": {
        "nombre": "BODIE ANDI PAJARITOS",
        "precio": 6170
    },
    "011122081": {
        "nombre": "BODIE ANDIE CONEJITOS",
        "precio": 6170
    },
    "011122082": {
        "nombre": "BODIE ANDIE AVIONES",
        "precio": 6170
    },
    "011122083": {
        "nombre": "BODIE ANDIE PERRITOS",
        "precio": 6170
    },
    "011122084": {
        "nombre": "BODIE ANDIE LOBITOS",
        "precio": 6170
    },
    "011122085": {
        "nombre": "ENTERITO PATO CONEJITOS",
        "precio": 8090
    },
    "011122086": {
        "nombre": "ENTERITO PATO AVIONES",
        "precio": 8090
    },
    "011122087": {
        "nombre": "ENTERITO PATO PERRITOS",
        "precio": 8090
    },
    "011122088": {
        "nombre": "ENTERITO LOBOS",
        "precio": 8090
    },
    "011122089": {
        "nombre": "BODIE ANDIE PACK X3",
        "precio": 13160
    },
    "011122090": {
        "nombre": "MEDIA POLERA",
        "precio": 5400
    },
    "012139009": {
        "nombre": "SHORT EMI (CON VOLADO)",
        "precio": 340
    },
    "012139010": {
        "nombre": "SHORT IKER",
        "precio": 2890
    },
    "012139011": {
        "nombre": "SHORT MATILDA",
        "precio": 3700
    },
    "012139020": {
        "nombre": "PANTALÓN ROMEO MUY ANGOSTO",
        "precio": 8280
    },
    "012139021": {
        "nombre": "PANTALÓN BATIK",
        "precio": 4150
    },
    "012139022": {
        "nombre": "SHORT",
        "precio": 2890
    },
    "012139023": {
        "nombre": "SHORT BATIK",
        "precio": 2250
    },
    "012140002": {
        "nombre": "SHORT MILÁN",
        "precio": 730
    },
    "012140006": {
        "nombre": "SHORT PATO FANTASIA JERSEY BB",
        "precio": 310
    },
    "012140007": {
        "nombre": "SHORT MILA FANTASIA JERSEY BB",
        "precio": 200
    },
    "012140009": {
        "nombre": "CALZA CAMI BAILARINA",
        "precio": 970
    },
    "01214008": {
        "nombre": "SHORT MATILDA BAILARINA",
        "precio": 770
    },
    "012141000": {
        "nombre": "PANTALÓN EROS",
        "precio": 4140
    },
    "012149001": {
        "nombre": "BOMBACHUDO IRIS",
        "precio": 1490
    },
    "012159000": {
        "nombre": "PANTALÓN  ALVARO",
        "precio": 345
    },
    "012159005": {
        "nombre": "CANGURO AMANDA",
        "precio": 18900
    },
    "012159006": {
        "nombre": "CANGURO FELIPE CON CAPUCHA",
        "precio": 20000
    },
    "012164001": {
        "nombre": "RANITA VAINILLA",
        "precio": 3220
    },
    "012164002": {
        "nombre": "RANITA BAMBU",
        "precio": 3220
    },
    "012164003": {
        "nombre": "RANITA JULI",
        "precio": 9870
    },
    "012180000": {
        "nombre": "BUZO MANGA RANGLAN",
        "precio": 3900
    },
    "012118000": {
        "nombre": "PANTALÓN FELIX",
        "precio": 250
    },
    "012118001": {
        "nombre": "PANTALÓN CHUPIN ROSARIO",
        "precio": 650
    },
    "012118002": {
        "nombre": "PANTALÓN PUÑO TUNDRA",
        "precio": 6440
    },
    "012118003": {
        "nombre": "PANTALÓN BOTIJA",
        "precio": 2280
    },
    "012118004": {
        "nombre": "CALZA MANDY",
        "precio": 5290
    },
    "012118018": {
        "nombre": "CALZA CONEJO",
        "precio": 3990
    },
    "012118050": {
        "nombre": "PANTALÓN CARGO UNISEX BEBE",
        "precio": 2280
    },
    "012118051": {
        "nombre": "PANTALÓN INTI",
        "precio": 8300
    },
    "012118052": {
        "nombre": "PANTALÓN FRIZA",
        "precio": 5590
    },
    "012122000": {
        "nombre": "BOMBACHON CATA FIBRANA FANT.",
        "precio": 250
    },
    "012122003": {
        "nombre": "SHORT LUNARES",
        "precio": 1460
    },
    "012122004": {
        "nombre": "PANTALÓN JOGGER HILARIO",
        "precio": 8770
    },
    "012122006": {
        "nombre": "RANITA JULI PAJARITOS",
        "precio": 4140
    },
    "012122007": {
        "nombre": "RANITA JULI CONEJITOS",
        "precio": 4140
    },
    "012122008": {
        "nombre": "RANITA JULI AVIONES",
        "precio": 4140
    },
    "012122009": {
        "nombre": "RANITA JULI PERROS",
        "precio": 4140
    },
    "012122010": {
        "nombre": "RANITA LOBITOS",
        "precio": 4140
    },
    "012122011": {
        "nombre": "CALZA CAMI LIBERTY",
        "precio": 5640
    },
    "012122012": {
        "nombre": "PANTALÓN CHUPIN",
        "precio": 5990
    },
    "012122013": {
        "nombre": "PANTALÓN CHUPIN ROSARIO",
        "precio": 5640
    },
    "011537000": {
        "nombre": "CAMPERA PLUSH SIN CAPUCHA",
        "precio": 23300
    },
    "011544001": {
        "nombre": "CANGURO VOLADOS NENA",
        "precio": 2950
    },
    "011544002": {
        "nombre": "BUZO NENE OSOS",
        "precio": 460
    },
    "011547000": {
        "nombre": "REMERA NENA CORAZON",
        "precio": 310
    },
    "011547001": {
        "nombre": "REMERA NENA CEIBO",
        "precio": 510
    },
    "012101000": {
        "nombre": "PANT. MANU  GAB. CAMOUF. FLOR.",
        "precio": 3900
    },
    "011122093": {
        "nombre": "REMERA PAJAROS PICAFLOR",
        "precio": 5640
    },
    "011122094": {
        "nombre": "REMERA GATITOS",
        "precio": 5640
    },
    "011122095": {
        "nombre": "REMERA FRAN DALMATA",
        "precio": 5640
    },
    "011122097": {
        "nombre": "REMERA FRAN AVIADOR",
        "precio": 5640
    },
    "011122098": {
        "nombre": "REMERA FRAN",
        "precio": 4580
    },
    "011122099": {
        "nombre": "BUZO CUELLO SMOKING",
        "precio": 12420
    },
    "011122100": {
        "nombre": "MUSCULOSA PURA",
        "precio": 6760
    },
    "011122101": {
        "nombre": "REMERA VOLADOS",
        "precio": 7410
    },
    "011122102": {
        "nombre": "BODIE RAYADO",
        "precio": 5850
    },
    "011122103": {
        "nombre": "REMERA RAYADA",
        "precio": 5980
    },
    "011122104": {
        "nombre": "BODIE HELADITOS",
        "precio": 8090
    },
    "011122105": {
        "nombre": "BODIE COCO",
        "precio": 8090
    },
    "011122106": {
        "nombre": "BODIE RUTA",
        "precio": 7430
    },
    "011122107": {
        "nombre": "BODIE SURF",
        "precio": 7430
    },
    "011122108": {
        "nombre": "BODIE MILA MARIPOSA",
        "precio": 7820
    },
    "011122109": {
        "nombre": "BODIE MILA FLOR",
        "precio": 7820
    },
    "011138000": {
        "nombre": "BODIE POLO GASPAR M/C PIQUE RAY.",
        "precio": 320
    },
    "011139000": {
        "nombre": "CANGURO GABI RUSTICO FLORES",
        "precio": 530
    },
    "011139001": {
        "nombre": "CANGURO GABI RUSTICO CAMOUF.",
        "precio": 410
    },
    "011139002": {
        "nombre": "CANGURO CON VOLADO",
        "precio": 20000
    },
    "011139003": {
        "nombre": "BUZO  PAJARITOS (ESTAMPA)",
        "precio": 1890
    },
    "011139004": {
        "nombre": "BUZO CON CAPUCHA",
        "precio": 1100
    },
    "011139007": {
        "nombre": "BUZO AZUL CAMELLITOS",
        "precio": 1000
    },
    "011139008": {
        "nombre": "BUZO AZUL PAJARITOS",
        "precio": 5900
    },
    "012101002": {
        "nombre": "PANTALÓN GABARDINA ELASTICO",
        "precio": 18900
    },
    "012102000": {
        "nombre": "PANTALÓN CORDEROY ELASTICO",
        "precio": 520
    },
    "012103141": {
        "nombre": "RANITA JULI INTERLOOK",
        "precio": 3220
    },
    "011108021": {
        "nombre": "CAMPERA MICROPOLAR",
        "precio": 9430
    },
    "011108022": {
        "nombre": "CHALECO MICROPOLAR",
        "precio": 8930
    },
    "011118002": {
        "nombre": "CANGURO NINA",
        "precio": 880
    },
    "011118003": {
        "nombre": "CANGURO PIPE",
        "precio": 880
    },
    "011118004": {
        "nombre": "CANGURO PUÑO ZUMBA",
        "precio": 2860
    },
    "011118005": {
        "nombre": "BUZO SAMY",
        "precio": 1290
    },
    "011139009": {
        "nombre": "BUZO AZUL ESTAMPA RAYUELA",
        "precio": 1600
    },
    "011139010": {
        "nombre": "BUZO AZUL ESTAMPA PLAZA",
        "precio": 7300
    },
    "011139011": {
        "nombre": "BUZO AZUL ESTAMPA PECES",
        "precio": 795
    },
    "011139013": {
        "nombre": "CANGURO JOAQUIN",
        "precio": 20000
    },
    "011139014": {
        "nombre": "BUZO CEREZAS",
        "precio": 4230
    },
    "011139015": {
        "nombre": "BUZO CIRCULOS",
        "precio": 6300
    },
    "011139016": {
        "nombre": "BUZO MASHA",
        "precio": 4240
    },
    "011139020": {
        "nombre": "CANGURO CONI/ PEDRO",
        "precio": 1740
    },
    "011139021": {
        "nombre": "BUZO PARAÍSO -BUZO MI MUNDO",
        "precio": 1460
    },
    "011139027": {
        "nombre": "CANGURO BATIK",
        "precio": 7830
    },
    "011139030": {
        "nombre": "BUZO BONITA",
        "precio": 9110
    },
    "011139031": {
        "nombre": "BUZO PALMERAS",
        "precio": 9110
    },
    "011139032": {
        "nombre": "BUZO BORDADO",
        "precio": 9520
    },
    "011140001": {
        "nombre": "BODIE SOFI M/C ENVIVADO",
        "precio": 2880
    },
    "011140002": {
        "nombre": "VESTIDO AMBAR FANTASIA",
        "precio": 990
    },
    "011140006": {
        "nombre": "BODIE GASPAR POLO M/C",
        "precio": 340
    },
    "011140012": {
        "nombre": "REMERA CAMI M/C",
        "precio": 260
    },
    "011140013": {
        "nombre": "BODIE POLO GASPAR M/L",
        "precio": 390
    },
    "011140015": {
        "nombre": "VESTIDO SAMI JERSEY FANT.",
        "precio": 450
    },
    "011140016": {
        "nombre": "REMERA FRAN  M/C SUBMARINO",
        "precio": 970
    },
    "011140022": {
        "nombre": "REMERA FRAN",
        "precio": 390
    },
    "011140023": {
        "nombre": "REMERA OLAS  BB",
        "precio": 2690
    },
    "011140040": {
        "nombre": "REMERA FRAN ESTAMPADA GRUAS",
        "precio": 270
    },
    "011140041": {
        "nombre": "REMERA FRAN ESTAMPADA TREN",
        "precio": 270
    },
    "011140046": {
        "nombre": "MUSCULOSA AMANDA (CON VOLADO EN RUEDO)",
        "precio": 2300
    },
    "011140047": {
        "nombre": "REMERA JULIA RAYUELA (CON MANGA MURCIELAGO)",
        "precio": 950
    },
    "011140048": {
        "nombre": "BODIE FRANCESCA LISO RAYUELA (C/ VOLADO HOMBRO)",
        "precio": 380
    },
    "011140050": {
        "nombre": "BODIE FRANCO LISO PECES",
        "precio": 970
    },
    "011140051": {
        "nombre": "BODIE FRANCO LISO MOTO",
        "precio": 370
    },
    "011140054": {
        "nombre": "REMERA SALVADOR ESCOTE V ESTAMPA MOTO",
        "precio": 3840
    },
    "011140055": {
        "nombre": "BODIE FRAN FLORCITAS",
        "precio": 7360
    },
    "011140056": {
        "nombre": "BODIE FRANCO SURF",
        "precio": 1060
    },
    "011140057": {
        "nombre": "BODIE FRAN MOÑOS",
        "precio": 8280
    },
    "011140058": {
        "nombre": "BODIE MASHA",
        "precio": 1060
    },
    "011140061": {
        "nombre": "REMERA LIA",
        "precio": 2690
    },
    "011140062": {
        "nombre": "VESTIDO VIOLETA",
        "precio": 1190
    },
    "011140063": {
        "nombre": "BODIE FRANCO",
        "precio": 1040
    },
    "011140064": {
        "nombre": "REMERA FRAN",
        "precio": 8420
    },
    "011140070": {
        "nombre": "REMERA MAGUI ASH",
        "precio": 1410
    },
    "011140072": {
        "nombre": "REMERA FRAN  MI PERRO ATHOS",
        "precio": 1490
    },
    "011140075": {
        "nombre": "REMERA ZOE LISA - FANTASIA",
        "precio": 8400
    },
    "011140076": {
        "nombre": "VESTIDO FORMITAS",
        "precio": 1190
    },
    "011140077": {
        "nombre": "VESTIDO CEBRITA PILAR",
        "precio": 1130
    },
    "011140078": {
        "nombre": "REMERA MAI FLORES",
        "precio": 1060
    },
    "011140079": {
        "nombre": "BODIE MAGNOLIA",
        "precio": 1100
    },
    "011140080": {
        "nombre": "REMERA MAGNOLIA",
        "precio": 1100
    },
    "011140081": {
        "nombre": "REMERA LUCAS C/ BOLSILLO",
        "precio": 11340
    },
    "011140082": {
        "nombre": "REMERA FRAN TABLAS",
        "precio": 950
    },
    "011140083": {
        "nombre": "REMERA FRAN FLASH",
        "precio": 880
    },
    "011140084": {
        "nombre": "BODIE FRAN CORAZONCITOS",
        "precio": 7040
    },
    "011140085": {
        "nombre": "BODIE FRAN AMOR",
        "precio": 7040
    },
    "011140089": {
        "nombre": "REMERA MAGUI SIENA",
        "precio": 6670
    },
    "011140090": {
        "nombre": "REMERA MAGUI BLANCA",
        "precio": 6670
    },
    "011149000": {
        "nombre": "VESTIDO ALBA MOÑO CON ELÁSTICO PLUMETI",
        "precio": 470
    },
    "011149010": {
        "nombre": "VESTIDO ALBA IRIS",
        "precio": 14800
    },
    "011151002": {
        "nombre": "BODIE FRANCISCA RAYADO CON VOLADO EN CUELLO",
        "precio": 800
    },
    "011151004": {
        "nombre": "ENTERITO RAYADO NENA CON VOLADO EN CUELLO",
        "precio": 1800
    },
    "011164005": {
        "nombre": "BODIE ANDY ESTAMPA NENE OSOS",
        "precio": 360
    },
    "011164008": {
        "nombre": "BODIE ANDY ESTAMPA BAMBI",
        "precio": 360
    },
    "011164009": {
        "nombre": "BODIE ANDY ESTAMPA PERRITO",
        "precio": 560
    },
    "011164015": {
        "nombre": "BODIE ANDI  LISA",
        "precio": 15000
    },
    "011164016": {
        "nombre": "BODIE ANDIE SIMÓN",
        "precio": 13300
    },
    "011164017": {
        "nombre": "BODIE ANDIE MI PERRO ZURY",
        "precio": 870
    },
    "011164018": {
        "nombre": "BODIE ANDIE MINI",
        "precio": 15000
    },
    "011164019": {
        "nombre": "REMERA MINI BRANDY",
        "precio": 4990
    },
    "011164020": {
        "nombre": "BODIE ANDIE PINKY",
        "precio": 4990
    },
    "011164021": {
        "nombre": "BODIE ROCK",
        "precio": 4990
    },
    "011164022": {
        "nombre": "BODIE JIRAFAS",
        "precio": 4990
    },
    "011164023": {
        "nombre": "BODIE ANDIE ALICE",
        "precio": 4990
    },
    "011164024": {
        "nombre": "BODIE JOGGIE",
        "precio": 4990
    },
    "011164025": {
        "nombre": "ENTERITO BRUNA",
        "precio": 6670
    },
    "011164026": {
        "nombre": "ENTERITO AMBER",
        "precio": 6670
    },
    "011166000": {
        "nombre": "VESTIDO IRENE (ESTAMPADO FIBRANA)",
        "precio": 490
    },
    "011508001": {
        "nombre": "VESTIDO ACHI FLOREADO",
        "precio": 42800
    },
    "011508002": {
        "nombre": "VESTIDO ACHI CORAZONES",
        "precio": 5640
    },
    "000173000": {
        "nombre": "PORTACHUPETE",
        "precio": 15730
    },
    "000173001": {
        "nombre": "CAMBIADOR",
        "precio": 7130
    },
    "000173002": {
        "nombre": "CONTENEDOR",
        "precio": 6950
    },
    "011106005": {
        "nombre": "CANGURO JUANI",
        "precio": 9430
    },
    "011106006": {
        "nombre": "CHALECO CRUZ",
        "precio": 4600
    },
    "011106007": {
        "nombre": "ENTERITO LACAR",
        "precio": 9780
    },
    "012106001": {
        "nombre": "CALZA CAMI BEBE LANILLA RAY.",
        "precio": 1520
    },
    "012106002": {
        "nombre": "CANGURO JUANI CON PIEL",
        "precio": 29900
    },
    "012500000": {
        "nombre": "PANTALÓN MANU DENIM UNISEX",
        "precio": 3990
    },
    "012500001": {
        "nombre": "PANTALÓN MANU DENIM UNISEX",
        "precio": 1980
    },
    "011140026": {
        "nombre": "REMERA FRAN ESTAMPADA ZAPATILLA",
        "precio": 300
    },
    "011140027": {
        "nombre": "BODIE REBECA (BRETEL Y VOLADO)",
        "precio": 450
    },
    "011140028": {
        "nombre": "REMERA MAGUI PAZ CON ESTAMPA AMOR",
        "precio": 350
    },
    "011140029": {
        "nombre": "REMERA MAGUI PAZ CON ESTAMPA FLAMENCOS",
        "precio": 1040
    },
    "011140030": {
        "nombre": "MUSCULOSA AMALIA VOLADO EN SISA",
        "precio": 210
    },
    "011140031": {
        "nombre": "BODIE MAGUI PARAISO",
        "precio": 1020
    },
    "011140032": {
        "nombre": "REMERA MAGUI MOÑOS",
        "precio": 970
    },
    "011140034": {
        "nombre": "REMERA FRAN ESTAMPADA CARTELES",
        "precio": 1040
    },
    "011140035": {
        "nombre": "BODIE ANDI CAMIONES",
        "precio": 270
    },
    "011140036": {
        "nombre": "BODIE ANDI AMOR",
        "precio": 280
    },
    "011140037": {
        "nombre": "BODIE FRANCO RAYADO",
        "precio": 8280
    },
    "011140038": {
        "nombre": "REMERA NENA PERRITO",
        "precio": 350
    },
    "011140039": {
        "nombre": "REMERA NENA BAMBI VOLADO HOMBRO",
        "precio": 450
    },
    "012500003": {
        "nombre": "SHORT LUNARES",
        "precio": 1460
    },
    "012508001": {
        "nombre": "CALZA CAMI MODAL FANT.",
        "precio": 2170
    },
    "012508002": {
        "nombre": "CALZA CAMI FANTASÍA FLORES",
        "precio": 350
    },
    "012508003": {
        "nombre": "CALZA CAMI FANTASÍA FRUTILLAS",
        "precio": 240
    },
    "012508004": {
        "nombre": "CALZA CAMI FLORES BAMBI",
        "precio": 260
    },
    "012508005": {
        "nombre": "CALZA CAMI FLORES",
        "precio": 260
    },
    "012508008": {
        "nombre": "POLLERA VOLADO BOSQUE",
        "precio": 8280
    },
    "012508009": {
        "nombre": "CALZA CAMI FLOREADA",
        "precio": 8230
    },
    "041141000": {
        "nombre": "GORRO ASTON (PACK X4)",
        "precio": 2030
    },
    "042412141": {
        "nombre": "BABERO BADANA",
        "precio": 580
    },
    "042412142": {
        "nombre": "BABERO BADANA CON BROCHE",
        "precio": 2640
    },
    "045106000": {
        "nombre": "MANTA PELUDA",
        "precio": 2270
    },
    "045106002": {
        "nombre": "MANTA CORDERITO",
        "precio": 4210
    },
    "045122000": {
        "nombre": "TOALLA OLI M.FANTASIA",
        "precio": 700
    },
    "045122005": {
        "nombre": "OSO AMANCIO",
        "precio": 5850
    },
    "045122009": {
        "nombre": "BABITAS PACK X 6",
        "precio": 12770
    },
    "045122010": {
        "nombre": "MUÑECO AMIGURUMIS",
        "precio": 9110
    },
    "045122011": {
        "nombre": "MANTA CONEJITOS",
        "precio": 7990
    },
    "045122012": {
        "nombre": "MANTA TRANSPORTE",
        "precio": 7990
    },
    "045122013": {
        "nombre": "MANTA BEAGLE",
        "precio": 7990
    },
    "045122014": {
        "nombre": "MANTA LOBITOS",
        "precio": 7990
    },
    "045122015": {
        "nombre": "MANTA BAMBULA",
        "precio": 7820
    },
    "045140000": {
        "nombre": "BABITA LUCIA PACK X 2 FANTASIA",
        "precio": 160
    },
    "045140001": {
        "nombre": "BABERO MARTU CHICO FANTASIA",
        "precio": 160
    },
    "045140004": {
        "nombre": "MANTA MILÁN",
        "precio": 790
    },
    "045164005": {
        "nombre": "ALMOHADITA DE APEGO",
        "precio": 1270
    },
    "045170000": {
        "nombre": "CAMBIADOR CRUZ",
        "precio": 345
    },
    "131106004": {
        "nombre": "CAMPERA CIRE ESTRELLAS",
        "precio": 1620
    },
    "911106043": {
        "nombre": "TOP ESTAMPADO",
        "precio": 5930
    },
    "911106044": {
        "nombre": "REMERA RUTA",
        "precio": 7660
    },
    "911106045": {
        "nombre": "REMERA SURF",
        "precio": 8000
    },
    "911122162": {
        "nombre": "REMERA HELADOS",
        "precio": 8190
    },
    "911122163": {
        "nombre": "REMERA ALPARGATA",
        "precio": 8190
    },
    "911122164": {
        "nombre": "REMERA LIBELULA",
        "precio": 8420
    },
    "911122165": {
        "nombre": "REMERA VOLADITOS",
        "precio": 7320
    },
    "911122166": {
        "nombre": "MUSCULOSA TUL",
        "precio": 13700
    },
    "911122167": {
        "nombre": "REMERA FRAN",
        "precio": 6080
    },
    "911122168": {
        "nombre": "VESTIDO TUL",
        "precio": 11450
    },
    "911122169": {
        "nombre": "VESTIDO MARIPOSA",
        "precio": 13780
    },
    "911122170": {
        "nombre": "VESTIDO NAVIDAD",
        "precio": 15640
    },
    "911122171": {
        "nombre": "VESTIDO LIBELULA",
        "precio": 18700
    },
    "911122172": {
        "nombre": "VESTIDO FLOR",
        "precio": 9390
    },
    "912106047": {
        "nombre": "BIKER FLOREADA",
        "precio": 5570
    },
    "912106048": {
        "nombre": "CALZA LIBELULA",
        "precio": 10170
    },
    "912106049": {
        "nombre": "CALZA FLOR",
        "precio": 10170
    },
    "912139031": {
        "nombre": "PANTALÓN ROSARIO MUY ANGOSTO",
        "precio": 8510
    },
    "911139025": {
        "nombre": "CANGURO RUSTICO",
        "precio": 13530
    },
    "911139026": {
        "nombre": "SHORT IKER",
        "precio": 16000
    },
    "911139027": {
        "nombre": "BUZO ALPARGATAS",
        "precio": 12330
    },
    "911139028": {
        "nombre": "BUZO RUTA",
        "precio": 11160
    },
    "U45173020": {
        "nombre": "TAMBUCHA LITORAL",
        "precio": 33120
    },
    "U44122002": {
        "nombre": "CINTO FRESNO GALÓN 35MM",
        "precio": 19500
    },
    "011122091": {
        "nombre": "REMERA MAITENA",
        "precio": 4260
    },
    "011122092": {
        "nombre": "REMERA MAITENA LISA",
        "precio": 5750
    },
    "U44134000": {
        "nombre": "CINTO TACHAS",
        "precio": 35700
    },
    "U80134001": {
        "nombre": "BILLETERA CON CIERRE",
        "precio": 52500
    },
    "U80134003": {
        "nombre": "TARJETERO OLMO",
        "precio": 24500
    },
    "U81101000": {
        "nombre": "BOLSO COLSA",
        "precio": 195500
    },
    "U81106000": {
        "nombre": "NECESSAIRE PATAGONIA",
        "precio": 43000
    },
    "U82106000": {
        "nombre": "MOCHILA EZEIZA",
        "precio": 116000
    },
    "U82106001": {
        "nombre": "MOCHILA MAR DEL PLATA",
        "precio": 135500
    },
    "U82106002": {
        "nombre": "BOLSO DE VIAJE PATAGONIA",
        "precio": 135500
    },
    "U82106003": {
        "nombre": "MOCHILA PATAGONIA",
        "precio": 125000
    },
    "U82106004": {
        "nombre": "VALIJA PATAGONIA CHICA",
        "precio": 217000
    },
    "U82106005": {
        "nombre": "VALIJA PATAGONIA GRANDE",
        "precio": 247000
    },
    "U82106006": {
        "nombre": "BOLSO DE MANO PATAGONIA",
        "precio": 74000
    },
    "U82116000": {
        "nombre": "RIÑONERA NARANJOS",
        "precio": 42800
    },
    "U82116001": {
        "nombre": "TERMERA ARENA LONA",
        "precio": 112500
    },
    "U82116002": {
        "nombre": "MORRAL ARIAS UNISEX",
        "precio": 32000
    },
    "U82116004": {
        "nombre": "MORRAL QUILA",
        "precio": 130000
    },
    "U82134000": {
        "nombre": "TERMERA ARENA GAMUZON",
        "precio": 158700
    },
    "U82134002": {
        "nombre": "MOCHILA CAUCE",
        "precio": 35500
    },
    "U82157000": {
        "nombre": "RIÑONERA HUELLA",
        "precio": 16500
    },
    "U82157001": {
        "nombre": "MOCHILA PLEGABLE TRAVESIA",
        "precio": 64000
    },
    "U82157002": {
        "nombre": "MOCHILA RODADA",
        "precio": 199500
    },
    "U89134001": {
        "nombre": "RIñONERA PALACIO",
        "precio": 98900
    },
    "441106010": {
        "nombre": "CINTO TIMBÓ",
        "precio": 22000
    },
    "844134016": {
        "nombre": "CINTO PAMPA",
        "precio": 24000
    },
    "844134017": {
        "nombre": "CINTO HERRADURA 30MM",
        "precio": 24000
    },
    "844134018": {
        "nombre": "CINTO TILO 40MM",
        "precio": 27000
    },
    "844134019": {
        "nombre": "CINTO MALVA",
        "precio": 27000
    },
    "U82106012": {
        "nombre": "RIÑONERA PEHUEN-CÓ",
        "precio": 89000
    },
    "U82106013": {
        "nombre": "RIÑONERA MONTE HERMOSO",
        "precio": 89000
    },
    "444134013": {
        "nombre": "CINTO RETAMO",
        "precio": 34500
    },
    "882116106": {
        "nombre": "BANDOLERA VALLE AZUL",
        "precio": 70000
    },
    "882116107": {
        "nombre": "CARTERA CRUZ DEL SUR",
        "precio": 86500
    },
    "U82116005": {
        "nombre": "NECESER SAN BENITO",
        "precio": 36500
    },
    "U00173507": {
        "nombre": "CANDADO PAMPERO",
        "precio": 10500
    },
    "U89134000": {
        "nombre": "FUNDA PORTA NOTEOOK",
        "precio": 19550
    },
    "982116000": {
        "nombre": "MOCHILA HORNERITO RAYAS",
        "precio": 1290
    },
    "982116001": {
        "nombre": "MOCHILA HORNERITO CAMUFLADA",
        "precio": 990
    },
    "982116002": {
        "nombre": "MOCHILA HORNERITO ESTAMPADA",
        "precio": 2880
    },
    "944106000": {
        "nombre": "CINTO LAPACHILLO LISO 30 SOGA",
        "precio": 8990
    },
    "944145000": {
        "nombre": "CINTO CHURQUI BORD.25 SUELA",
        "precio": 18000
    },
    "944145001": {
        "nombre": "CINTO QUEBRACHILLO 30 SUELA",
        "precio": 9500
    },
    "883134000": {
        "nombre": "RIÑONERA GUEMBÉ",
        "precio": 730
    },
    "889116001": {
        "nombre": "NECESSAIRE PICABUEY CAMUFLADO CHICO",
        "precio": 815
    },
    "889134100": {
        "nombre": "PORTALENTES RODEO CUERPO PACK X6",
        "precio": 265
    },
    "889134101": {
        "nombre": "LLAVERO NUEVO",
        "precio": 3710
    },
    "889134102": {
        "nombre": "NECESSAIRE CUERO PILCOMAYO",
        "precio": 78500
    },
    "889134103": {
        "nombre": "NECESSAIRE BURGOS",
        "precio": 89500
    },
    "889134123": {
        "nombre": "NECESAIRE MALVA",
        "precio": 68800
    },
    "889542000": {
        "nombre": "NESESSAIRE PICABUEY JARCKARD GRANDE",
        "precio": 1800
    },
    "889542001": {
        "nombre": "NESESSAIRE PICABUEY JARCKARD CHICO",
        "precio": 1610
    },
    "844106000": {
        "nombre": "CINTO ARRAYAN M.35 SOGA/SUELA",
        "precio": 21600
    },
    "844134013": {
        "nombre": "CINTO CANELO FLOTTER 30MM",
        "precio": 29900
    },
    "844134015": {
        "nombre": "CINTO JAZMIN 30MM",
        "precio": 19500
    },
    "844145000": {
        "nombre": "CINTO MAITEN LISO 40 SUELA",
        "precio": 28800
    },
    "844145001": {
        "nombre": "CINTO ACACIA M.35 SUELA",
        "precio": 3720
    },
    "844145002": {
        "nombre": "CINTO SUELA ALERCE 40MM",
        "precio": 26000
    },
    "844145004": {
        "nombre": "CINTO SANTA RITA 40 SUELA",
        "precio": 640
    },
    "844145006": {
        "nombre": "CINTO GARCÍA BICOLOR 40 SUELA",
        "precio": 660
    },
    "845134100": {
        "nombre": "LLAVERO ROSARIO M TRENZA PACK X 6",
        "precio": 3710
    },
    "880134000": {
        "nombre": "BILLETERA PUNA",
        "precio": 42500
    },
    "880134001": {
        "nombre": "BILLETERA YACANTO",
        "precio": 5180
    },
    "880145101": {
        "nombre": "FICHERO JAZMIN M. ANILINA",
        "precio": 31300
    },
    "880154000": {
        "nombre": "FICHERO ARAUCARIA M.GAMUZON",
        "precio": 9200
    },
    "881116050": {
        "nombre": "SOBRE MILAGROS",
        "precio": 6720
    },
    "881116051": {
        "nombre": "NECESEAIRE MILAGROS",
        "precio": 5400
    },
    "881134000": {
        "nombre": "CARTERA PILCOMAYO CUERO NAPA",
        "precio": 1690
    },
    "881134001": {
        "nombre": "CARTERA ANTARES CUERO NAPA",
        "precio": 1810
    },
    "881134007": {
        "nombre": "CARTERA CLAVELINA CUERO BLANDA",
        "precio": 1810
    },
    "881134008": {
        "nombre": "CARTERA CAMPÁNULA (VERSION MOLINO)",
        "precio": 2220
    },
    "881134010": {
        "nombre": "MALETÍN PORTA COMPUTADORA ANALÍA",
        "precio": 56120
    },
    "881134017": {
        "nombre": "BOLSO GONNET",
        "precio": 11520
    },
    "881134102": {
        "nombre": "MONEDERO RODEO CUERO PACK X6",
        "precio": 800
    },
    "881134104": {
        "nombre": "MONEDERO ROJAS TRIANGULO CUERO PACK X6",
        "precio": 800
    },
    "881134105": {
        "nombre": "ORGANIZADOR ITATI M CUERO",
        "precio": 47500
    },
    "881134106": {
        "nombre": "BILLETERA ROSARIO M CUERO COMB",
        "precio": 38900
    },
    "881134103": {
        "nombre": "MONEDERO RODEO CHICO PACK X6",
        "precio": 800
    },
    "881134107": {
        "nombre": "FICHERO CARMELA",
        "precio": 72500
    },
    "882101000": {
        "nombre": "TOTE AMAPOLA",
        "precio": 93700
    },
    "882106003": {
        "nombre": "CARTERA LA ESTANCIA - CHICA",
        "precio": 63000
    },
    "882106004": {
        "nombre": "CARTERA LA ESTANCIA - MEDIANA",
        "precio": 96000
    },
    "882106005": {
        "nombre": "TOTE LA ESTANCIA",
        "precio": 96000
    },
    "882106007": {
        "nombre": "MINI BANDOLERA MONTE HERMOSO",
        "precio": 49000
    },
    "882106008": {
        "nombre": "BANDOLERA MONTE HERMOSO",
        "precio": 57500
    },
    "882106009": {
        "nombre": "MOCHILA MONTE HERMOSO",
        "precio": 112500
    },
    "882106010": {
        "nombre": "BOLSO MONTE HERMOSO",
        "precio": 114000
    },
    "882106011": {
        "nombre": "BANDOLERA PEHUEN-CÓ",
        "precio": 70000
    },
    "882106012": {
        "nombre": "MOCHILA PEHUEN-CÓ",
        "precio": 100000
    },
    "882106013": {
        "nombre": "BOLSO PEHUEN-CÓ",
        "precio": 96000
    },
    "882106015": {
        "nombre": "CARTERA LAS DUNAS",
        "precio": 89500
    },
    "882106016": {
        "nombre": "TOTE LAS DUNAS",
        "precio": 114000
    },
    "882109000": {
        "nombre": "MOCHILA CALÉNDULA MATELASEADA",
        "precio": 2010
    },
    "882111154": {
        "nombre": "CARTERA GOLONDRINA GAMUZON",
        "precio": 5150
    },
    "882116004": {
        "nombre": "BOLSO IBIRAPITÁ PANAMA GASTADO",
        "precio": 893
    },
    "882116007": {
        "nombre": "MOCHILA HORNERO RAYAS",
        "precio": 1835
    },
    "882116008": {
        "nombre": "MOCHILA HORNERO CAMUFLADA",
        "precio": 19000
    },
    "882116009": {
        "nombre": "MOCHILA HORNERO ESTAMPADA",
        "precio": 3600
    },
    "882116010": {
        "nombre": "CARTERA BALDECITO",
        "precio": 4780
    },
    "882116012": {
        "nombre": "MOCHILA MOQUEHUE (LONGCHAMPS)",
        "precio": 19000
    },
    "882116013": {
        "nombre": "MOCHILA REGIMIENTO",
        "precio": 172500
    },
    "882116014": {
        "nombre": "TOTE PLAYERO DEL MAR",
        "precio": 22310
    },
    "882116015": {
        "nombre": "CARTERA MILAGROS",
        "precio": 14490
    },
    "882116103": {
        "nombre": "TOTE ALIANZA LONA MATELASEADO",
        "precio": 48760
    },
    "882134001": {
        "nombre": "CARTERA ROSARIO CUERO MAGIC",
        "precio": 1600
    },
    "882134004": {
        "nombre": "CARTERA ARROYO CUERO NAPA",
        "precio": 1650
    },
    "882134005": {
        "nombre": "MOCHILA PEHUANIA CUERO NAPA",
        "precio": 1560
    },
    "882134008": {
        "nombre": "CARTERA  MORON (CHICA DE COLGAR NAPA)",
        "precio": 2515
    },
    "882134009": {
        "nombre": "MOCHILA CHARATA CUERO",
        "precio": 16330
    },
    "882134010": {
        "nombre": "CARTERA SAUZALITO -CUERPO COMBINADO Y COLOCADO TORCIDO",
        "precio": 1608
    },
    "882134011": {
        "nombre": "CARTERA CARDO CUERO CON TACHAS",
        "precio": 54900
    },
    "882134013": {
        "nombre": "CARTERA LAVALLE CUERO",
        "precio": 4230
    },
    "882134014": {
        "nombre": "CARTERA FRUNCIDA CLARA (PK)",
        "precio": 3960
    },
    "882134015": {
        "nombre": "CATERA COMBINADA TIPO RECREO",
        "precio": 3070
    },
    "882134018": {
        "nombre": "CARTERA ROMERO",
        "precio": 4830
    },
    "882134019": {
        "nombre": "CARTERA LOS HORNOS",
        "precio": 105800
    },
    "882116104": {
        "nombre": "TOTE ANTONIA",
        "precio": 82600
    },
    "882116105": {
        "nombre": "TOTE AMALIA",
        "precio": 85800
    },
    "882134020": {
        "nombre": "CARTERA RINGUELET",
        "precio": 65000
    },
    "882134021": {
        "nombre": "CARTERA TOLOSA",
        "precio": 7120
    },
    "882134022": {
        "nombre": "MOCHILA SAN CARLOS",
        "precio": 9120
    },
    "882134023": {
        "nombre": "BOLSO MOQUEHUE FLOTER",
        "precio": 15720
    },
    "882134024": {
        "nombre": "CARTERA BOLSON FLOTER",
        "precio": 127000
    },
    "882134025": {
        "nombre": "MOCHILA FOGON FLOTER",
        "precio": 12820
    },
    "882134026": {
        "nombre": "MOCHILA MARISA",
        "precio": 127700
    },
    "882134027": {
        "nombre": "CARTERA VERA",
        "precio": 89000
    },
    "882134028": {
        "nombre": "CARTERA CAMILA",
        "precio": 57300
    },
    "882134029": {
        "nombre": "MOCHILA FOGON COMBINADA",
        "precio": 19000
    },
    "882134030": {
        "nombre": "MINI MORRAL MARGARITA",
        "precio": 30400
    },
    "882134031": {
        "nombre": "CARTERA CLARA",
        "precio": 19680
    },
    "882134032": {
        "nombre": "CARTERA BERLÍN",
        "precio": 89800
    },
    "882134101": {
        "nombre": "CARTERA SAUCE CUERO COMB",
        "precio": 2020
    },
    "882134103": {
        "nombre": "CARTERA CHAJARI C BROCHE CUERO",
        "precio": 1622
    },
    "882134104": {
        "nombre": "CARTERA VERA GRANDE",
        "precio": 91800
    },
    "882134105": {
        "nombre": "CARTERA JAZMIN",
        "precio": 91800
    },
    "882134106": {
        "nombre": "BOLSO DESCANSO",
        "precio": 17280
    },
    "882134107": {
        "nombre": "BOLSO CRIOLLO",
        "precio": 78200
    },
    "882134108": {
        "nombre": "CARTERA FLORINDA",
        "precio": 137100
    },
    "882134109": {
        "nombre": "BANDOLERA ALCORTA MATELASEADA",
        "precio": 80300
    },
    "882134110": {
        "nombre": "TOTE ALIANZA MATELASEADO",
        "precio": 60950
    },
    "882134111": {
        "nombre": "MOCHILA ARECO GAMUZADA",
        "precio": 90900
    },
    "882134118": {
        "nombre": "TOTE SILVESTRE",
        "precio": 132800
    },
    "882134119": {
        "nombre": "TOTE SILVESTRE CHICO",
        "precio": 113900
    },
    "882134120": {
        "nombre": "BANDOLERA MANZANILLA",
        "precio": 41500
    },
    "882134121": {
        "nombre": "BANDOLERA VIOLETA",
        "precio": 57300
    },
    "882134122": {
        "nombre": "MORRAL PRADO",
        "precio": 95500
    },
    "882134123": {
        "nombre": "MOCHILA CARMEN",
        "precio": 155700
    },
    "882134124": {
        "nombre": "TOTE AMAPOLA CUERO",
        "precio": 158700
    },
    "882134125": {
        "nombre": "MORRAL NILQUE",
        "precio": 132300
    },
    "882134126": {
        "nombre": "MINI MORRAL CUNCO",
        "precio": 66700
    },
    "882142000": {
        "nombre": "TOTE CARILÓ",
        "precio": 63000
    },
    "882144000": {
        "nombre": "MOCHILA HORNERITO CORDURA",
        "precio": 17280
    },
    "882144001": {
        "nombre": "MOCHILA HORNERO CORDURA",
        "precio": 1375
    },
    "882154001": {
        "nombre": "MORRAL NUEVO GAMUZA",
        "precio": 98700
    },
    "882154100": {
        "nombre": "CARTERA MAIPU GAMUZON",
        "precio": 1415
    },
    "882171000": {
        "nombre": "CARTERA ARPILLERA",
        "precio": 2500
    },
    "882171001": {
        "nombre": "CARTERA MALVON MIX YUTE",
        "precio": 1975
    },
    "844130000": {
        "nombre": "CINTO MAITEN LISO 40 C.CRUDO",
        "precio": 1090
    },
    "844130001": {
        "nombre": "CINTO YATAY BORD.25 C.CRUDO",
        "precio": 1010
    },
    "844134000": {
        "nombre": "CINTO YATAY BORD.ROMBO 25",
        "precio": 31000
    },
    "844134001": {
        "nombre": "CINTO JACARANDÁ CON OJALILLOS 40MM",
        "precio": 770
    },
    "844134002": {
        "nombre": "CINTO LAUREL 15MM",
        "precio": 3500
    },
    "844134003": {
        "nombre": "FAJA LENGA 40MM",
        "precio": 20000
    },
    "844134005": {
        "nombre": "CINTO SUELA CALA 25MM",
        "precio": 1640
    },
    "844134006": {
        "nombre": "CINTO SUELA PARAISO 35MM",
        "precio": 25800
    },
    "844134007": {
        "nombre": "RIÑONERA DIENTE DE LEÓN",
        "precio": 11270
    },
    "844134008": {
        "nombre": "CINTO GALA",
        "precio": 35900
    },
    "844134009": {
        "nombre": "FAJA CON RECORTE Y TACHAS",
        "precio": 59300
    },
    "844134010": {
        "nombre": "CINTO 15 CM",
        "precio": 17000
    },
    "000134000": {
        "nombre": "COLLAR PARA PERRO MENDIETA 15MM",
        "precio": 3270
    },
    "000134001": {
        "nombre": "COLLAR PARA PERRO MENDIETA 25MM",
        "precio": 3580
    },
    "000134002": {
        "nombre": "COLLAR PARA PERRO MENDIETA 40MM",
        "precio": 4800
    },
    "382221116": {
        "nombre": "MOCHILA IÑAMBU LONA",
        "precio": 2350
    },
    "811134107": {
        "nombre": "BILLETERA CABRAL H. NOBUK COMBINADO",
        "precio": 25300
    },
    "811134108": {
        "nombre": "BILLETERA NEUQUEN H. CUERO ANILINA",
        "precio": 25800
    },
    "444106000": {
        "nombre": "CINTO SAUCE COMB.40 SOGA",
        "precio": 29500
    },
    "444130000": {
        "nombre": "CINTO COIHUE LISO 40 C.CRUDO",
        "precio": 480
    },
    "444134000": {
        "nombre": "CINTO CHAÑAR 40 C/COSTURA",
        "precio": 2880
    },
    "444134001": {
        "nombre": "CINTO SAUCO GRANEADO 40MM",
        "precio": 2050
    },
    "444134002": {
        "nombre": "CINTO PASADOR METALICO CON FILETE",
        "precio": 2050
    },
    "444134003": {
        "nombre": "CINTO ALCORTA",
        "precio": 27400
    },
    "444134004": {
        "nombre": "CINTO BORDADO LARREA",
        "precio": 40000
    },
    "444134005": {
        "nombre": "CINTO HEBILLA FORRADO 35 MM",
        "precio": 24700
    },
    "444134006": {
        "nombre": "CINTO PASADOR CAMBIANDO 40 MM",
        "precio": 28000
    },
    "444134007": {
        "nombre": "CINTO HEBILLA NEGRA",
        "precio": 28600
    },
    "444134008": {
        "nombre": "CINTO LITRE ARRUGADO 40MM",
        "precio": 34500
    },
    "444134009": {
        "nombre": "CINTO CAVEN GRABADO 40MM",
        "precio": 29500
    },
    "444134010": {
        "nombre": "CINTO ARRAYAN COMBINADO 35MM",
        "precio": 26500
    },
    "444134011": {
        "nombre": "CINTO ALAMO 40MM",
        "precio": 34500
    },
    "444134012": {
        "nombre": "CINTO MOLLE 40MM",
        "precio": 34500
    },
    "444145000": {
        "nombre": "CINTO COIHUE LISO 40 ENGRASADO",
        "precio": 34500
    },
    "444145001": {
        "nombre": "CINTO ÑIRE BORDADO 35 SUELA",
        "precio": 40000
    },
    "444145002": {
        "nombre": "CINTO ROBLE GRABADO 35 SUELA",
        "precio": 900
    },
    "444145003": {
        "nombre": "CINTO CIPRES LISO 30 SUELA",
        "precio": 25000
    },
    "444145006": {
        "nombre": "CINTO FRESNO 40 SUELA (GRABADO)",
        "precio": 890
    },
    "444145007": {
        "nombre": "CINTO CEIBO 40 SUELA (CON PESPUNTE)",
        "precio": 1250
    },
    "444145008": {
        "nombre": "CINTO CALDÉN 35 SUELA",
        "precio": 35000
    },
    "444145009": {
        "nombre": "CINTO ALGARROBO BORDADO 35 SUELA",
        "precio": 790
    },
    "444145010": {
        "nombre": "CINTO CEDRO 35MM SUELA",
        "precio": 790
    },
    "444154000": {
        "nombre": "CINTO ACACIA SUELA FULONADA",
        "precio": 1240
    },
    "444173000": {
        "nombre": "CINTO CALAMUCHITA 35MM",
        "precio": 1470
    },
    "444533000": {
        "nombre": "CINTO ELASTIZADO BAMBU 35MM",
        "precio": 5890
    },
    "482421134": {
        "nombre": "MORRAL GUAYATA CUERO VACUNO",
        "precio": 3670
    },
    "482421136": {
        "nombre": "MORRAL CHARATA DESCARNE",
        "precio": 2145
    },
    "481115100": {
        "nombre": "BILLETERA ROJAS H VAQUETA PACK X 12",
        "precio": 835
    },
    "481116000": {
        "nombre": "BOLSO CAIMAN LONA",
        "precio": 6950
    },
    "481134101": {
        "nombre": "BILLETERA ROJAS H FLOTTER",
        "precio": 35500
    },
    "444145004": {
        "nombre": "CINTO TAPIAL H. 40 CUERO",
        "precio": 29500
    },
    "444145005": {
        "nombre": "CINTO CAVEN SUELA",
        "precio": 29500
    },
    "481134103": {
        "nombre": "BILLETERA ROJAS CON VOLANTE",
        "precio": 960
    },
    "481134104": {
        "nombre": "MORRAL ACASSUSO",
        "precio": 101000
    },
    "481331116": {
        "nombre": "BOLSO YABIRU LONA GDE",
        "precio": 87400
    },
    "481331144": {
        "nombre": "BOLSO CORMORAN CORDURA PLEG.",
        "precio": 29900
    },
    "481331146": {
        "nombre": "BOLSO CORMORAN PLEGABLE C.SEMITERM.",
        "precio": 154000
    },
    "481332146": {
        "nombre": "BOLSO BIGUA C.SEMITERMINADO",
        "precio": 38870
    },
    "482116001": {
        "nombre": "MOCHILA HORNERO LONA",
        "precio": 3300
    },
    "482116003": {
        "nombre": "BOLSO MARINERO",
        "precio": 23920
    },
    "482116004": {
        "nombre": "BOLSO ARIEL ( CILINDRO)",
        "precio": 137800
    },
    "482116005": {
        "nombre": "MORRAL POTRERILLOS",
        "precio": 8280
    },
    "482157002": {
        "nombre": "MOCHILA HORNERO RIPSTOP",
        "precio": 1130
    },
    "489011144": {
        "nombre": "NESESSAIRE PICABUEY CORDURA CHICO",
        "precio": 1190
    },
    "489116004": {
        "nombre": "NECESSAIRE PICABUEY LONA CHICO",
        "precio": 23900
    },
    "489134001": {
        "nombre": "PORTAFOLIO MACA C.SEMITERMINADO",
        "precio": 1093
    },
    "489144000": {
        "nombre": "NESESSAIRE PICABUEY CORDURA.CHICO",
        "precio": 421
    },
    "489144003": {
        "nombre": "NESESSAIRE PICABUEY CORDURA GDE.",
        "precio": 635
    },
    "489144004": {
        "nombre": "NECESSAIRE PICABUEY CORDURA GDE",
        "precio": 1780
    },
    "489911116": {
        "nombre": "PORTAFOLIO MACA LONA",
        "precio": 778
    },
    "471134000": {
        "nombre": "TERMERA OLMOS",
        "precio": 135500
    },
    "471154000": {
        "nombre": "TERMERA CABRERA GAMUZON",
        "precio": 2620
    },
    "471154001": {
        "nombre": "TERMERA CHAMPAQUI",
        "precio": 94800
    },
    "472134100": {
        "nombre": "PORTANAIPES",
        "precio": 4590
    },
    "478134100": {
        "nombre": "MATE PAMPERO BOCA ANCHA",
        "precio": 40000
    },
    "478134101": {
        "nombre": "MATE PAMPERO BOCA CHICA",
        "precio": 32000
    },
    "478134102": {
        "nombre": "JUEGO PARA ASADA PAMPERO CUERO",
        "precio": 1980
    },
    "478134103": {
        "nombre": "MATE CHAMPAQUÍ TRES PATAS",
        "precio": 40000
    },
    "478163100": {
        "nombre": "BOMBILLA PAMPERO",
        "precio": 10000
    },
    "480134000": {
        "nombre": "BILLETERA ALERCE H.COMB.LONA",
        "precio": 21900
    },
    "480141134": {
        "nombre": "BILLETERA CAUQUEN C/SOLAPA",
        "precio": 335
    },
    "480154000": {
        "nombre": "BILLETERA MISTOL H.GAMUZON",
        "precio": 2400
    },
    "441106009": {
        "nombre": "CINTO GALÓN SAUCE 35MM",
        "precio": 26500
    },
    "445134100": {
        "nombre": "LLAVERO PAMPERO PACK X 6",
        "precio": 3710
    },
    "445134101": {
        "nombre": "LLAVERO LORETO PACK X 6",
        "precio": 3710
    },
    "445134102": {
        "nombre": "LLAVERO TARTAGAL C MOSQUETON PACK X 6",
        "precio": 3710
    },
    "445173017": {
        "nombre": "MATE GRANDE",
        "precio": 5750
    },
    "445173018": {
        "nombre": "MATE MEDIANO",
        "precio": 4830
    },
    "445173020": {
        "nombre": "YERBERA",
        "precio": 6900
    },
    "445174000": {
        "nombre": "LLAVERO",
        "precio": 32500
    },
    "489116005": {
        "nombre": "NECESSAIRE PICABUEY LONA GRANDE",
        "precio": 26000
    },
    "489116006": {
        "nombre": "NECESSAIRE AMAPOLA",
        "precio": 24900
    },
    "442174000": {
        "nombre": "PASAPAÑUELO ALPACA",
        "precio": 29500
    },
    "442174001": {
        "nombre": "PASAPAÑUELO PENSAMIENTO",
        "precio": 29900
    },
    "045174000": {
        "nombre": "CUNEROS CHICOS",
        "precio": 22100
    },
    "045174001": {
        "nombre": "CUNEROS GRANDES",
        "precio": 5880
    },
    "844134012": {
        "nombre": "LONJA DE CUERO CRUDO",
        "precio": 26700
    },
    "843173010": {
        "nombre": "PULSERA TRENZADA GAMUZADA",
        "precio": 14500
    },
    "843173011": {
        "nombre": "BRAZALLETE CUERO Y APLIQUE",
        "precio": 28000
    },
    "843173012": {
        "nombre": "BRAZALETE CUERO APLIQUE CIRCULAR",
        "precio": 27500
    },
    "843173013": {
        "nombre": "PULSER FINA CUERO Y APLQIUE",
        "precio": 15500
    },
    "843173014": {
        "nombre": "PULSERA VIDRIO FACETADO",
        "precio": 13000
    },
    "843174000": {
        "nombre": "ESCLAVA ABIERTA CON DIJE",
        "precio": 24600
    },
    "843174001": {
        "nombre": "ESCLAVA CERRADA SIN DIJE",
        "precio": 18700
    },
    "442106005": {
        "nombre": "PAÑUELO ESTAMPADO",
        "precio": 21900
    },
    "442174002": {
        "nombre": "DIJE CRUZ GRANDE DE ALPACA BAÑADA EN PLATA",
        "precio": 23500
    },
    "441174003": {
        "nombre": "DIJE CRUZ CHICA DE ALPACA BAÑADA EN PLATA",
        "precio": 21000
    },
    "843174002": {
        "nombre": "BRAZALETE GOLPEADO CINCELADO",
        "precio": 33400
    },
    "843174003": {
        "nombre": "BRAZALETE EN V",
        "precio": 1050
    },
    "843174004": {
        "nombre": "BRAZALETE ANCHO",
        "precio": 39100
    },
    "843174005": {
        "nombre": "BRAZALETE GOLPEADO LISO",
        "precio": 33500
    },
    "843174006": {
        "nombre": "PULSERA FINA GOLPEADA BOMBEADA",
        "precio": 24400
    },
    "843174007": {
        "nombre": "ANILLO GRANDE",
        "precio": 23500
    },
    "843174008": {
        "nombre": "ANILLO CHICO",
        "precio": 22500
    },
    "843174009": {
        "nombre": "ROSARIO PULSERA",
        "precio": 14000
    },
    "843174010": {
        "nombre": "ESCLAVA CERRADA CON DIJE",
        "precio": 650
    },
    "843174011": {
        "nombre": "ANILLO GOLPEADO ABIERTO",
        "precio": 25000
    },
    "843174012": {
        "nombre": "ESCLAVA CHAPA GOLPEADA",
        "precio": 27200
    },
    "843174018": {
        "nombre": "ANILLO ALUMINIO Y CUERO",
        "precio": 33200
    },
    "843174019": {
        "nombre": "ANILLO CHICO ALPACA Y RESINA COLOR",
        "precio": 6210
    },
    "843174020": {
        "nombre": "ANILO GRANDE ALPACA Y RESINA COLOR",
        "precio": 9430
    },
    "843174021": {
        "nombre": "PULSERA DE AGUAYO Y ALPACA",
        "precio": 3450
    },
    "842130000": {
        "nombre": "TIENTOS EN HILOS TRENZADOS",
        "precio": 8500
    },
    "842134000": {
        "nombre": "GARGANTILLA  DE GAMUZA",
        "precio": 28000
    },
    "842154001": {
        "nombre": "TIENTO MULTI HILOS",
        "precio": 1380
    },
    "842154002": {
        "nombre": "TIENTO MULTIGAMUZA",
        "precio": 11800
    },
    "845173001": {
        "nombre": "PIEDRA ESPECIAL",
        "precio": 480
    },
    "845174000": {
        "nombre": "ARO CALADO",
        "precio": 4370
    },
    "845174001": {
        "nombre": "ARO GRANDE GOLPEADO",
        "precio": 23000
    },
    "843174013": {
        "nombre": "ESCLAVA ABIERTA ESPECIAL",
        "precio": 5880
    },
    "843174014": {
        "nombre": "PULSERA CALADA ESPECIAL",
        "precio": 24400
    },
    "843174017": {
        "nombre": "PULSERA ALUMINIO Y CUERO",
        "precio": 47200
    },
    "845174002": {
        "nombre": "ARO CHICO GOLPEADO",
        "precio": 20900
    },
    "845174003": {
        "nombre": "DIJE CHICO",
        "precio": 25500
    },
    "845174004": {
        "nombre": "DIJE GRANDE",
        "precio": 30500
    },
    "845174005": {
        "nombre": "DIJE GRANDE DOBLE",
        "precio": 24200
    },
    "845174006": {
        "nombre": "TUPUS RUANA",
        "precio": 6080
    },
    "845174007": {
        "nombre": "PRENDEDOR",
        "precio": 26500
    },
    "845174009": {
        "nombre": "PRENSA BILLETE ANCHO",
        "precio": 790
    },
    "845174010": {
        "nombre": "ADORNO ESCRITORIO",
        "precio": 880
    },
    "845174011": {
        "nombre": "DIJE GRANDE SILUETA",
        "precio": 32000
    },
    "845174015": {
        "nombre": "SEÑALADOR",
        "precio": 5520
    },
    "845174020": {
        "nombre": "ARGOLLA CRIOLLA MEDIANA",
        "precio": 82500
    },
    "845174021": {
        "nombre": "ARGOLLA CRIOLLA GRANDE",
        "precio": 84600
    },
    "845174022": {
        "nombre": "ARGOLLA PLATA CON BRISURA CHICA",
        "precio": 25600
    },
    "845174023": {
        "nombre": "ARGOLLA BRISURA MEDIANA",
        "precio": 29900
    },
    "845174024": {
        "nombre": "ARGOLLA CON BRISURA GRANDE",
        "precio": 35900
    },
    "845174027": {
        "nombre": "ARGOLLA COMUN FINITA GRANDE",
        "precio": 40900
    },
    "845174028": {
        "nombre": "ARO ZIRCON PLATA 925 CHICO",
        "precio": 30700
    },
    "845174029": {
        "nombre": "ARO ZIRCON PLATA 925 MEDIANO",
        "precio": 34400
    },
    "845174030": {
        "nombre": "ARO ZIRCON PLATA 925 GRANDE",
        "precio": 39100
    },
    "842173011": {
        "nombre": "ROSARIO SEMILLAS",
        "precio": 33500
    },
    "842174000": {
        "nombre": "GARGANTILLA CON DIJE",
        "precio": 1320
    },
    "842174001": {
        "nombre": "GARGANTILLA LISA",
        "precio": 26500
    },
    "842174002": {
        "nombre": "ROSARIO COLLAR",
        "precio": 29900
    },
    "842174016": {
        "nombre": "GARGANTILLA FINA CERRADA",
        "precio": 21900
    },
    "842174017": {
        "nombre": "DECENARIO COLLAR",
        "precio": 21500
    },
    "842174018": {
        "nombre": "DIJE DOBLE CON PIEDRA",
        "precio": 44500
    },
    "842174019": {
        "nombre": "DIJE PIEDRA ONIX Y ALPACA",
        "precio": 19600
    },
    "842174020": {
        "nombre": "COLLAR 5 ARGOLLAS",
        "precio": 39100
    },
    "842174021": {
        "nombre": "GARGANTILLA CON PIEDRAS",
        "precio": 950
    },
    "842174022": {
        "nombre": "DECENARIO COLLAR SEMILLAS",
        "precio": 21000
    },
    "842174023": {
        "nombre": "COLLAR DIJE DOBLE CON TIRAS DE GAMUZA",
        "precio": 36800
    },
    "842174024": {
        "nombre": "CADENA CHATA ACERO",
        "precio": 8100
    },
    "842174025": {
        "nombre": "COLLAR LARGO DE SEMILLAS CON DIJE GRANDE",
        "precio": 43500
    },
    "843154000": {
        "nombre": "PULSERA TIENTO GAMUZA",
        "precio": 15200
    },
    "U00174000": {
        "nombre": "BOMBILLA ALPACA",
        "precio": 24600
    },
    "U00174001": {
        "nombre": "HEBILLA CINTURON",
        "precio": 43000
    },
    "U42134000": {
        "nombre": "PASAPAÑUELO DE CUERO",
        "precio": 16000
    },
    "U43134000": {
        "nombre": "PULSERA TRENZAS CUERO",
        "precio": 25100
    },
    "U43154000": {
        "nombre": "TIENTO GAMUZA",
        "precio": 6500
    },
    "U43173000": {
        "nombre": "PULSERA PIEDRA VOLCANICA",
        "precio": 17100
    },
    "U45134005": {
        "nombre": "LLAVERO CUERO",
        "precio": 33500
    },
    "U45173084": {
        "nombre": "CUCHILLO TRENZADO 24 TIRAS",
        "precio": 172500
    },
    "U45173085": {
        "nombre": "CUCHILLO CIERVO Y ALPACA",
        "precio": 135700
    },
    "U45173086": {
        "nombre": "CUCHILLO MADERA Y ALPACA",
        "precio": 135700
    },
    "912122005": {
        "nombre": "PANTALÓN PIJAMA",
        "precio": 1200
    },
    "911122035": {
        "nombre": "MUSCULOSA PIJAMA",
        "precio": 870
    },
    "111118003": {
        "nombre": "BUZO FRISA CUELLO REDONDO M/L H.",
        "precio": 43500
    },
    "842174014": {
        "nombre": "CADENA DE ACERO QUIRUGICO FINA",
        "precio": 240
    },
    "842174015": {
        "nombre": "CADENA DE ACERO QUIRUGICO GRUESA",
        "precio": 9500
    },
    "111118004": {
        "nombre": "CHALECO DE FRIZA H. C/ CIERRE",
        "precio": 50000
    },
    "111118005": {
        "nombre": "CAMPERA DE FRIZA H.",
        "precio": 63500
    },
    "111118006": {
        "nombre": "BUZO MEDIO CIERRE FRIZA H.",
        "precio": 55500
    },
    "212500001": {
        "nombre": "BOMBACHA LISA DENIM HOMBRE",
        "precio": 59000
    },
    "212518001M": {
        "nombre": "BOMBACHA RIPSTOP",
        "precio": 43000
    },
    "412104001": {
        "nombre": "JEAN WORKER",
        "precio": 28000
    },
    "412104007": {
        "nombre": "JEAN RANGER PAMPERO",
        "precio": 29500
    },
    "812541002": {
        "nombre": "PANT. PEDRAZA M. CLASICO DENIM 9.5OZ",
        "precio": 1400
    },
    "91228001M": {
        "nombre": "BOMBACHA LISA NIÑO",
        "precio": 34000
    },
    "U11106010": {
        "nombre": "CAMISA CAIRO PAMPERO",
        "precio": 72000
    },
    "U11106011": {
        "nombre": "CHALECO REFLECTIVO",
        "precio": 31500
    },
    "U12106004": {
        "nombre": "PANTALÓN CAIRO DESMONTABLE",
        "precio": 97500
    },
    "U13122005": {
        "nombre": "CAMPERA SUREÑA C/ CAPUCHA",
        "precio": 178000
    },
    "U13122006": {
        "nombre": "CAMPERA RAIGAL PAMPERO",
        "precio": 130500
    },
    "111106301": {
        "nombre": "CAMPERA NEUQUEN",
        "precio": 189500
    },
    "U11106012": {
        "nombre": "CAMPERA REFLEX SOFTSHELL",
        "precio": 65000
    },
    "U11106013": {
        "nombre": "CHALECO TRIP",
        "precio": 76000
    },
    "U11106014": {
        "nombre": "CAMPERA TRIP",
        "precio": 130500
    },
    "U11122005": {
        "nombre": "REMERA CUELLO REDONDO",
        "precio": 19500
    },
    "U11122006": {
        "nombre": "REMERA CUELLO POLO",
        "precio": 26400
    },
    "U11505000": {
        "nombre": "BUZO CUELLO REDONDO",
        "precio": 42000
    },
    "U11505001": {
        "nombre": "BUZO CON CAPUCHA",
        "precio": 53000
    },
    "U11505002": {
        "nombre": "BUZO TRIP",
        "precio": 43000
    },
    "112142000": {
        "nombre": "PANTALÓN CARGO STRETCH",
        "precio": 100500
    },
    "U42135002": {
        "nombre": "BUFANDO OCHOS",
        "precio": 26800
    },
    "U42135003": {
        "nombre": "BUFANDA TRENZA",
        "precio": 26800
    },
    "U41135000": {
        "nombre": "GORRO OCHOS",
        "precio": 13500
    },
    "U41135001": {
        "nombre": "GORRO ARROZ",
        "precio": 13500
    },
    "913122201": {
        "nombre": "CANGURO MANU NIÑO HILO",
        "precio": 5900
    },
    "911540000": {
        "nombre": "SAQUITO LIMONERO",
        "precio": 1770
    },
    "813106000": {
        "nombre": "CAMPERA ANGOSTURA M.MATELASEE",
        "precio": 106500
    },
    "400122248": {
        "nombre": "SWEATER MERCEDARIO BOSA",
        "precio": 66500
    },
    "813106001": {
        "nombre": "CHALECO ANGOSTURA M.MATELASEE",
        "precio": 87500
    },
    "813106002": {
        "nombre": "CHALECO ANGOSTURA M.MATELASEE",
        "precio": 20720
    },
    "813106007": {
        "nombre": "CHALECO TRONADOR M. MATELASEADO",
        "precio": 75000
    },
    "813106008": {
        "nombre": "CAMPERA TRONADOR M. MATELASEE C/POLAR",
        "precio": 4940
    },
    "813106026": {
        "nombre": "CAMPERA MAINQUE MORLEY MUJER",
        "precio": 7800
    },
    "813106011": {
        "nombre": "CAMPERA TECA MODELO POLO MUJER",
        "precio": 15600
    },
    "813128003": {
        "nombre": "CHALECO MONTE (MUJER)",
        "precio": 2498
    },
    "821134109": {
        "nombre": "BOTINETA CASABINDO",
        "precio": 9900
    },
    "813107000": {
        "nombre": "CAMPERA LOMAS M",
        "precio": 1800
    },
    "812122201": {
        "nombre": "SWEATER SANTA ROSA M. RAYADO",
        "precio": 920
    },
    "812122202": {
        "nombre": "SWEATER SANTA ROSA M LISO",
        "precio": 2650
    },
    "813106018": {
        "nombre": "CHALECO LA POMA  VERANO MUJER",
        "precio": 2990
    },
    "813106023": {
        "nombre": "CHALECO CACHI MORLEY",
        "precio": 107700
    },
    "824134103": {
        "nombre": "SANDALIA LA VIÑA",
        "precio": 2620
    },
    "824134104": {
        "nombre": "SANDALIA CONCEPCION",
        "precio": 3230
    },
    "821134101": {
        "nombre": "SANDALIA MENDOZA",
        "precio": 1200
    },
    "821134103": {
        "nombre": "MOCASIN CALAFATE",
        "precio": 28980
    },
    "824134000": {
        "nombre": "BOTINETA PEHUENIA M.CUERO",
        "precio": 7640
    },
    "824134003": {
        "nombre": "BOTINETA HUARRUCA M. CUERO",
        "precio": 7270
    },
    "824134004": {
        "nombre": "BORCEGO YAMINUE M. CUERO",
        "precio": 6340
    },
    "824134006": {
        "nombre": "BOTINETA OLIVARES",
        "precio": 6560
    },
    "824134007": {
        "nombre": "OJOTA BALSA ( BIRKEN ALTA)",
        "precio": 1500
    },
    "824134008": {
        "nombre": "ZUECO TRADICION ( BIRKEN ALTA)",
        "precio": 1490
    },
    "824134009": {
        "nombre": "SANDALIA CONFORT SAVIA",
        "precio": 4500
    },
    "824134010": {
        "nombre": "SANDALIA TERRENO ( BIRKEN BAJA CRUZADA)",
        "precio": 2760
    },
    "824134011": {
        "nombre": "SANDALIA PAIS ( BIRKEN BAJA)",
        "precio": 1900
    },
    "824134012": {
        "nombre": "SANDALIA FRANCISCANA",
        "precio": 21290
    },
    "411514006": {
        "nombre": "SWEATER SALINAS",
        "precio": 9900
    },
    "411539001": {
        "nombre": "SWEATER ACONQUIJA H. 1/2CIERRE ALG/LANA",
        "precio": 79500
    },
    "411540001": {
        "nombre": "SWEATER MERCEDARIO H. V ALG./LANA",
        "precio": 66500
    },
    "411514107": {
        "nombre": "CHALECO CONDARCO",
        "precio": 66500
    },
    "411514111": {
        "nombre": "SWEATER MOLINO",
        "precio": 78000
    },
    "411514112": {
        "nombre": "SWEATER TAFÍ",
        "precio": 75500
    },
    "411135000": {
        "nombre": "SWEATER ACONCAGUA",
        "precio": 99000
    },
    "411135002": {
        "nombre": "CUELLO REDONDO PERICO HOMBRE",
        "precio": 3240
    },
    "411135004": {
        "nombre": "SWEATER POLICIAL URBANO",
        "precio": 34560
    },
    "411135005": {
        "nombre": "CUELLO SMOKING MANANTIALES",
        "precio": 16200
    },
    "411135006": {
        "nombre": "CUELLO SMOKING ESPARZA",
        "precio": 67800
    },
    "411135017": {
        "nombre": "SWEATER CHACO",
        "precio": 72900
    },
    "411122000": {
        "nombre": "SWEATER POCITOS",
        "precio": 20000
    },
    "411122024": {
        "nombre": "SWEATER SAN CARLOS MEDIO CIERRE",
        "precio": 86500
    },
    "411122059": {
        "nombre": "CAMPERA SAN CARLOS",
        "precio": 97500
    },
    "411122073": {
        "nombre": "SWEATER NEUQUEN MOLINADO",
        "precio": 21550
    },
    "411122074": {
        "nombre": "SWEATER BOSA TORREON",
        "precio": 13200
    },
    "411122075": {
        "nombre": "CUELLO SMOKING",
        "precio": 6600
    },
    "411122056": {
        "nombre": "SWEATER SAN FRANCISCO",
        "precio": 33800
    },
    "411122103": {
        "nombre": "BOSA RAYADO",
        "precio": 20000
    },
    "411122162": {
        "nombre": "SWEATER CENTENERA Bosa",
        "precio": 51100
    },
    "411122163": {
        "nombre": "SWEATER SAN IGNACIO",
        "precio": 79500
    },
    "411122084": {
        "nombre": "SWEATER ACONCAGUA VERANO",
        "precio": 19000
    },
    "411122164": {
        "nombre": "SWEATER SAN ESTEBAN",
        "precio": 33100
    },
    "411122165": {
        "nombre": "SWEATER SAN FELIPE",
        "precio": 31900
    },
    "411122166": {
        "nombre": "CHALECO CONDARCO",
        "precio": 63500
    },
    "411122167": {
        "nombre": "SWEATER NEUQUEN BOSA",
        "precio": 71000
    },
    "411122191": {
        "nombre": "CAMPERA ACONQUIJA",
        "precio": 87500
    },
    "411122121": {
        "nombre": "CAMPERA LA PAMPA",
        "precio": 128500
    },
    "411122226": {
        "nombre": "SWEATER BUENOS AIRES",
        "precio": 70500
    },
    "411122211": {
        "nombre": "SWEATER ACONCAGUA LISO",
        "precio": 90000
    },
    "411122146": {
        "nombre": "BOSA OLIVO",
        "precio": 51100
    },
    "411122147": {
        "nombre": "BOSA CLAROMECO",
        "precio": 20000
    },
    "411122148": {
        "nombre": "BOSA PINAR",
        "precio": 65200
    },
    "111105000": {
        "nombre": "REMERA TERMICA ML",
        "precio": 26500
    },
    "111108003": {
        "nombre": "BUZO MEDIO CIERRE POLAR H.",
        "precio": 55500
    },
    "111108004": {
        "nombre": "CHALECO DE POLAR C/ CIERRE H.",
        "precio": 50000
    },
    "111108005": {
        "nombre": "CAMPERA DE POLAR H.",
        "precio": 63500
    },
    "111122002": {
        "nombre": "REMERA M/ LARGA CUELLO O COLLARETA",
        "precio": 20500
    },
    "111138000": {
        "nombre": "CHOMBA M/LARGA (MICRO PIQUE PESCO)",
        "precio": 32000
    },
    "111514003": {
        "nombre": "CHOMBA ML JERSEY H.",
        "precio": 27000
    },
    "111514004": {
        "nombre": "CHOMBA MC JERSEY H.",
        "precio": 25500
    },
    "511118000": {
        "nombre": "BUZO CUELLO REDONDO FRIZA M.",
        "precio": 38400
    },
    "511118001": {
        "nombre": "CHALECO FRIZA C/ CIERRE M.",
        "precio": 43500
    },
    "511122003": {
        "nombre": "REMERA CUELLO REDONDO TIRA DE LIMPIEZA ML M",
        "precio": 18500
    },
    "511122004": {
        "nombre": "REMERA CUELLO REDONDO TIRA DE LIMPIEZA MC M",
        "precio": 17500
    },
    "511138000": {
        "nombre": "CHOMBA MC PIQUE M.",
        "precio": 480
    },
    "511138002": {
        "nombre": "CHOMBA M/C MICROPIQUE MUJER.",
        "precio": 26700
    },
    "511138003": {
        "nombre": "CHOMBA M/L MICROPIQUE MUJER.",
        "precio": 28300
    },
    "513118000": {
        "nombre": "MUJER CAMPERA CON CIERRE CUELLO ALTO (FRISA INVISIBLE)",
        "precio": 48700
    },
    "51218001M": {
        "nombre": "PANTALÓN CARGO DE TRABAJO MUJER",
        "precio": 52000
    },
    "612107001": {
        "nombre": "BOMBACHA MUJER ELASTIZADA",
        "precio": 52500
    },
    "61228101M": {
        "nombre": "BOMBACHA DE MUJER",
        "precio": 38500
    },
    "41210102M": {
        "nombre": "PANTALÓN CARGO SUMALAO",
        "precio": 75000
    },
    "41210103M": {
        "nombre": "PANTALÓN CARGO SUMALAO",
        "precio": 76400
    },
    "412506009": {
        "nombre": "PANTALÓN CHINO",
        "precio": 48500
    },
    "412541000": {
        "nombre": "PANT. BELGRANO H. P. ANG DENIM 9.5OZ",
        "precio": 42900
    },
    "11181001M": {
        "nombre": "MAMELUCO MANGA RANGLAN H.",
        "precio": 60000
    },
    "11181002M": {
        "nombre": "MAMELUCO MANGA RANGLAN H. DENIM",
        "precio": 105000
    },
    "111104000": {
        "nombre": "CAMISA DE TRABAJO H.M/L DENIM",
        "precio": 39500
    },
    "111104001": {
        "nombre": "MAMELUCO MANGA RANGLAN H.DENIM",
        "precio": 64000
    },
    "11213001M": {
        "nombre": "PANTALÓN CARGO DE TRABAJO H.",
        "precio": 30500
    },
    "112130101": {
        "nombre": "PANTALÓN CARGO DE TRABAJO H.",
        "precio": 600
    },
    "112152000M": {
        "nombre": "BERMUDA RIPSTOP",
        "precio": 52000
    },
    "11218001M": {
        "nombre": "PANTALÓN DE TRABAJO HOMBRE",
        "precio": 31500
    },
    "411106001": {
        "nombre": "BOSSA RULITO",
        "precio": 9900
    },
    "411106002": {
        "nombre": "CUELLO ALTO CON BOTON",
        "precio": 2940
    },
    "411106003": {
        "nombre": "SWEATER POLICIAL",
        "precio": 107500
    },
    "411106008": {
        "nombre": "BOSA GALVAN",
        "precio": 84500
    },
    "411122008": {
        "nombre": "CAMPERA POMA CON CIERRE",
        "precio": 98500
    },
    "411122010": {
        "nombre": "SWEATER PUEBLO CUELLO CONTRATONO",
        "precio": 960
    },
    "411122011": {
        "nombre": "CAMPERA FRONDA",
        "precio": 2660
    },
    "411122012": {
        "nombre": "SWEATER SIERRA ESC V",
        "precio": 20000
    },
    "412134102": {
        "nombre": "ZAPATO CHALTEN",
        "precio": 19900
    },
    "412122202": {
        "nombre": "SWETER NEUQUEN ESCOTE EN V",
        "precio": 71000
    },
    "411540005": {
        "nombre": "SWEATER RIO GRANDE",
        "precio": 95600
    },
    "413106000": {
        "nombre": "CAMPERA TRELEW H.MATELASEE",
        "precio": 144500
    },
    "413106001": {
        "nombre": "CHALECO CHALTEN H.ROMBOS",
        "precio": 650
    },
    "413106003": {
        "nombre": "CHALECO TRELEW H.MATELASEE",
        "precio": 112000
    },
    "413106004": {
        "nombre": "CHALECO TRONADOR H. MATELASEE C/POLAR",
        "precio": 4510
    },
    "413106005": {
        "nombre": "CAMPERA TRONADOR H. MATELASEE C/POLAR",
        "precio": 6150
    },
    "413106006": {
        "nombre": "CHALECO CATEDRAL H. MATELASEE C/TAFETA",
        "precio": 9900
    },
    "413106007": {
        "nombre": "CHALECO  LAUREL HOMBRE CANELON ANCHO",
        "precio": 11300
    },
    "413106008": {
        "nombre": "CAMPERA TILO HOMBRE CANELON ANCHO",
        "precio": 13900
    },
    "413106009": {
        "nombre": "CHALECO MAIMARA",
        "precio": 3500
    },
    "413106013": {
        "nombre": "CHALECO VALLE GRANDE VERANO HOMBRE",
        "precio": 3450
    },
    "413106014": {
        "nombre": "CHALECO ALTA MONTAÑA (POLO)",
        "precio": 119700
    },
    "413106015": {
        "nombre": "CAMPERA ALTA MONTAÑA (POLO)",
        "precio": 22320
    },
    "413128001": {
        "nombre": "CHALECO PICO ( CANELON FINO)",
        "precio": 19900
    },
    "421134007": {
        "nombre": "ZAPATO INCA",
        "precio": 6620
    },
    "421134101": {
        "nombre": "MOCASIN CHALTEN",
        "precio": 19900
    },
    "421134102": {
        "nombre": "ZAPATO CHALTEN NAUTICO",
        "precio": 6520
    },
    "413109001": {
        "nombre": "PARKA ROBLEDO C/CAPUCHA TRUCKER",
        "precio": 3400
    },
    "413122000": {
        "nombre": "SWEATER V CALAFATE H.ROMBOS",
        "precio": 690
    },
    "413122001": {
        "nombre": "CHALECO CALAFATE H.ROMBOS",
        "precio": 490
    },
    "424134000": {
        "nombre": "BOTA CHOS MALAL CUERO USX.",
        "precio": 17900
    },
    "424134002": {
        "nombre": "BOTA HUERQUEN H. CUERO",
        "precio": 30500
    },
    "424134006": {
        "nombre": "ZAPATILLA CARAHUNCO CUERO NOBUCK ENGRASADO",
        "precio": 6240
    },
    "424134007": {
        "nombre": "MOCASIN MONTECARLO (CON BASE TIPO ZAPATILLA)",
        "precio": 6580
    },
    "424134008": {
        "nombre": "ZAPATO GUARANI (PRUSIANO)",
        "precio": 9990
    },
    "424134009": {
        "nombre": "MOCASIN OBERA ( TIPO ALPARGATA)",
        "precio": 11900
    },
    "424134101": {
        "nombre": "MOCASIN CHALTEN",
        "precio": 19900
    },
    "811106005": {
        "nombre": "SWEATER BOSSA MUJER PUNTO SANTA CLARA",
        "precio": 2380
    },
    "811106006": {
        "nombre": "NUEVO PALPALA",
        "precio": 1950
    },
    "811106007": {
        "nombre": "SWEATER BELLA VISTA",
        "precio": 41900
    },
    "811106008": {
        "nombre": "POLERON MUJER",
        "precio": 2220
    },
    "811106009": {
        "nombre": "SWEATER MARITA",
        "precio": 2120
    },
    "811106261": {
        "nombre": "SACO ANTONIA",
        "precio": 64400
    },
    "811106262": {
        "nombre": "POLERA ANTONIA",
        "precio": 54200
    },
    "811106205": {
        "nombre": "SACON ARCOS",
        "precio": 27790
    },
    "811106206": {
        "nombre": "SACO ARIAS",
        "precio": 71900
    },
    "811106207": {
        "nombre": "BOSA AUSTRIA COMBINADO",
        "precio": 24390
    },
    "811106208": {
        "nombre": "POLERON CALDERON",
        "precio": 78500
    },
    "811106209": {
        "nombre": "CARDIGAN CARACAS RAYADO",
        "precio": 27240
    },
    "811106210": {
        "nombre": "CARDIGAN CARACAS LISO",
        "precio": 27240
    },
    "811106211": {
        "nombre": "POLERA ABALOS",
        "precio": 82500
    },
    "811135000": {
        "nombre": "PONCHO ZAPLA",
        "precio": 37000
    },
    "811122285": {
        "nombre": "SWEATER PUNA",
        "precio": 69000
    },
    "811152002": {
        "nombre": "SWEATER CERRILLOS",
        "precio": 3220
    },
    "811152003": {
        "nombre": "SACO GUACHIPAS",
        "precio": 2590
    },
    "811152004": {
        "nombre": "SWEATER IRUYA",
        "precio": 71500
    },
    "612102000": {
        "nombre": "BOMBACHA    ALUMINE       MUJER",
        "precio": 52700
    },
    "612124000": {
        "nombre": "BOMBACHA ALUMINE ANGOSTA",
        "precio": 82500
    },
    "612124002": {
        "nombre": "BOMBACHA MARTINA ANGOSTA",
        "precio": 98000
    },
    "612124003": {
        "nombre": "BOMBACHA MORA ANGOSTA",
        "precio": 68000
    },
    "412102000": {
        "nombre": "PANTALÓN TOMBO CORDEROY",
        "precio": 4350
    },
    "412112105": {
        "nombre": "PANTALÓN ARECO H.",
        "precio": 28680
    },
    "412506020": {
        "nombre": "PANTALÓN MONTECITOS CORDEROY",
        "precio": 112000
    },
    "412122203": {
        "nombre": "BERMUDA MORON",
        "precio": 68000
    },
    "412122204": {
        "nombre": "BERMUDA FRONTERA CARGO",
        "precio": 72000
    },
    "412122205": {
        "nombre": "BERMUDA ALSINA",
        "precio": 77000
    },
    "412122001": {
        "nombre": "PANTALÓN TIPO MONTANA MALARGUE",
        "precio": 4520
    },
    "412122002": {
        "nombre": "BERMUDA TIMBO  RECTA",
        "precio": 52100
    },
    "412122208": {
        "nombre": "PANTALÓN CALDEN PINZADO",
        "precio": 91200
    },
    "412122209": {
        "nombre": "PANTALÓN CARPINTERO ROBLE",
        "precio": 108500
    },
    "412122210": {
        "nombre": "PANTALÓN CARGO ALGARROBO",
        "precio": 115000
    },
    "412122212": {
        "nombre": "BOMBACHA OLMO CARGO DENIM",
        "precio": 99990
    },
    "412123101": {
        "nombre": "PANTALÓN ALVARADO H.C/PINZAS",
        "precio": 18380
    },
    "412124000": {
        "nombre": "PANTALÓN BAHIA POPLIN",
        "precio": 59300
    },
    "412124001": {
        "nombre": "BERMUDA ROMERILLO RECTA",
        "precio": 69000
    },
    "412124002": {
        "nombre": "PANTALÓN ROMULO CANVAS",
        "precio": 15000
    },
    "412525002": {
        "nombre": "PANTALÓN BAHIA RECTO",
        "precio": 76000
    },
    "412525003": {
        "nombre": "BERMUDA POTRERILLOS RECTA",
        "precio": 62900
    },
    "412525004": {
        "nombre": "BERMUDA RAWSON RECTA",
        "precio": 67000
    },
    "412529000": {
        "nombre": "BERMUDA TIMBÓ",
        "precio": 69000
    },
    "412529001": {
        "nombre": "PANTALÓN SANTOS 5 BOL DENIM",
        "precio": 13440
    },
    "412529002": {
        "nombre": "PANTALÓN SIMON 5 BOL DENIM ROTURA",
        "precio": 15600
    },
    "412529010": {
        "nombre": "PANTALÓN SANTOS H.DENIM C/LYCRA",
        "precio": 22900
    },
    "412533000": {
        "nombre": "PANTALÓN SANTOS",
        "precio": 13440
    },
    "412541013": {
        "nombre": "PANTALÓN ALVARO RECTO",
        "precio": 71500
    },
    "412541014": {
        "nombre": "PANTALÓN ALVARO H. DENIM C/LYCRA",
        "precio": 4660
    },
    "412541015": {
        "nombre": "PANTALÓN ROCA ANGOSTO",
        "precio": 75000
    },
    "412541016": {
        "nombre": "PANTALÓN ROCA DENIM C/LYCRA",
        "precio": 79500
    },
    "412541082": {
        "nombre": "PANTALÓN PEDRO ANGOSTO",
        "precio": 54900
    },
    "412541083": {
        "nombre": "PANTALÓN GERONIMO",
        "precio": 87600
    },
    "412542011": {
        "nombre": "PANTALÓN SANTOS",
        "precio": 51800
    },
    "412506012": {
        "nombre": "BOMBACHA ZENON",
        "precio": 86000
    },
    "412506015": {
        "nombre": "BOMBACHA ZENON corderoy",
        "precio": 117000
    },
    "412506016": {
        "nombre": "BOMBACHA ZENON ripstop",
        "precio": 105000
    },
    "412545000": {
        "nombre": "PANTALÓN SIMON MUY ANGOSTO",
        "precio": 80000
    },
    "412545001": {
        "nombre": "PANTALÓN ROMULO",
        "precio": 16200
    },
    "412545002": {
        "nombre": "PANTALÓN FELIPE ANGOSTO",
        "precio": 86500
    },
    "411101002": {
        "nombre": "CAMPERA CONCARAN H.GABARDINA",
        "precio": 6990
    },
    "212101005": {
        "nombre": "BOMBACHA OLIVERA FANTASIA",
        "precio": 9120
    },
    "212102000": {
        "nombre": "BOMBACHA OLIVERA CORDEROY",
        "precio": 4990
    },
    "212122000": {
        "nombre": "BOMBACHA  OLIVERA     HOMB   CORDEROY",
        "precio": 3840
    },
    "012104101": {
        "nombre": "BOMBACHA PAÑALERA BEBE DENIM",
        "precio": 2290
    },
    "012122018": {
        "nombre": "BOMBACHA PAÑALERA DENIM",
        "precio": 40500
    },
    "012280101": {
        "nombre": "BOMBACHA PAÑALERA BB GABARDINA",
        "precio": 3990
    },
    "012281101": {
        "nombre": "BOMBACHA PAÑALERA",
        "precio": 40500
    },
    "212281104": {
        "nombre": "BOMBACHA OLIVERA DENIM",
        "precio": 3840
    },
    "212285101": {
        "nombre": "BOMBACHA OLIVERA H.GABARDINA",
        "precio": 3840
    },
    "212287101": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 65500
    },
    "212122211": {
        "nombre": "BOMBACHA ZENÓN FANTASIA",
        "precio": 96000
    },
    "112541000": {
        "nombre": "PANTALÓN AMERICA INDUSTRIA",
        "precio": 60000
    },
    "411124024": {
        "nombre": "CAMPERA CONCARAN POPLIN",
        "precio": 6290
    },
    "411611101": {
        "nombre": "CAMPERA CONCARAN H.",
        "precio": 6290
    },
    "412104010": {
        "nombre": "PANTALÓN ALVARO 5 BOL DENIM",
        "precio": 3890
    },
    "412104013": {
        "nombre": "PANTALÓN CAMPO RECTO",
        "precio": 61000
    },
    "212124000": {
        "nombre": "BOMBACHA OLIVERA",
        "precio": 82500
    },
    "212124002": {
        "nombre": "BOMBACHA ZENON ANGOSTA",
        "precio": 34300
    },
    "212192101": {
        "nombre": "PANTALÓN BAHIA RECTO",
        "precio": 61000
    },
    "412500050": {
        "nombre": "PANTALÓN HERRADURA ANGOSTO",
        "precio": 87000
    },
    "412500051": {
        "nombre": "JOGGER HILARIO  DENIM",
        "precio": 19800
    },
    "412500052": {
        "nombre": "PANTALÓN ROCA ANGOSTO",
        "precio": 78000
    },
    "412500053": {
        "nombre": "PANTALÓN QUEBRACHO RECTO",
        "precio": 80500
    },
    "412500054": {
        "nombre": "PANTALÓN MATEO CARGO ANGOSTO",
        "precio": 99000
    },
    "412500055": {
        "nombre": "PANTALÓN ROCA CARGO ANGOSTO",
        "precio": 98000
    },
    "412500056": {
        "nombre": "PANTALÓN BOLIVAR CARGO CON PUñO",
        "precio": 99000
    },
    "412500057": {
        "nombre": "BOMBACHA ZENON",
        "precio": 93500
    },
    "412500058": {
        "nombre": "PANTALÓN ORIGEN",
        "precio": 86500
    },
    "412506000": {
        "nombre": "PANT. BAHIA H. GABARDINA",
        "precio": 8160
    },
    "412506001": {
        "nombre": "PANTALÓN BAHIA RECTO",
        "precio": 77500
    },
    "412506002": {
        "nombre": "PANTALÓN ARECO RECTO",
        "precio": 89500
    },
    "412506003": {
        "nombre": "PANTALÓN JUNIN CHINO CORTE AJUSTADO",
        "precio": 93500
    },
    "412506004": {
        "nombre": "PANTALÓN PERGAMINO 5 BOL CHUPIN",
        "precio": 19600
    },
    "412506005": {
        "nombre": "PANTALÓN ARENALES",
        "precio": 18900
    },
    "412506006": {
        "nombre": "PANTALÓN GERONIMO",
        "precio": 80700
    },
    "412506007": {
        "nombre": "PANTALÓN FELIPE ANGOSTO",
        "precio": 92000
    },
    "412506008": {
        "nombre": "PANTALÓN GARCIA MUY ANGOSTO",
        "precio": 86500
    },
    "882171003": {
        "nombre": "BOLSO VERANO",
        "precio": 6240
    },
    "911122196": {
        "nombre": "VESTIDO ISABELA",
        "precio": 52900
    },
    "812112101": {
        "nombre": "PANT. SANTINA CLASICO M.",
        "precio": 1670
    },
    "812112506": {
        "nombre": "PANT. CANDELARIA M.",
        "precio": 6820
    },
    "812122003": {
        "nombre": "PANTALÓN JACINTA AMPLIO",
        "precio": 25440
    },
    "812122004": {
        "nombre": "BOMBACHA MACACHA ANGOSTA",
        "precio": 67200
    },
    "812122011": {
        "nombre": "PANTALÓN JACINTA GABARDINA LIVIANA",
        "precio": 41000
    },
    "812122012": {
        "nombre": "BOMBACHA  CARDENAL     DENIM LIV",
        "precio": 5760
    },
    "812122013": {
        "nombre": "SHORT  PAMPA",
        "precio": 64100
    },
    "812122014": {
        "nombre": "BERMUDA PRADO",
        "precio": 4880
    },
    "812122015": {
        "nombre": "PANTALÓN DELTA RELAJADO",
        "precio": 80600
    },
    "812122016": {
        "nombre": "PANTALÓN LIBERTAD",
        "precio": 16680
    },
    "812122017": {
        "nombre": "PANTALÓN CHECA CAPRI",
        "precio": 59300
    },
    "812122018": {
        "nombre": "BERMUDA POCITOS",
        "precio": 14640
    },
    "812122210": {
        "nombre": "PANTALÓN BLANCA",
        "precio": 78200
    },
    "812122211": {
        "nombre": "BOMBACHA MARTINA FLOR ANGOSTA",
        "precio": 98000
    },
    "812122212": {
        "nombre": "BERMUDA MARGARITA",
        "precio": 67000
    },
    "812122213": {
        "nombre": "BERMUDA SALTO",
        "precio": 73000
    },
    "812122215": {
        "nombre": "PANTALÓN MARGARITA",
        "precio": 82000
    },
    "812122224": {
        "nombre": "PANTALÓN CARGO MONTE",
        "precio": 108000
    },
    "812122225": {
        "nombre": "BOMBACHA MARTINA DENIM",
        "precio": 104500
    },
    "812122226": {
        "nombre": "BOMBACHA CARGO",
        "precio": 115000
    },
    "812122228": {
        "nombre": "BERMUDA SAUCE DENIM",
        "precio": 74400
    },
    "812182507": {
        "nombre": "PANTALÓN BARRACAS RECTO",
        "precio": 60500
    },
    "812500017": {
        "nombre": "CAPRI YABIRU GABARDINA C/ LYCRA",
        "precio": 57600
    },
    "812500050": {
        "nombre": "PANTALÓN EMILIA AMPLIO",
        "precio": 76100
    },
    "812500051": {
        "nombre": "CALZA DOLORES   DENIM / LYCR",
        "precio": 4060
    },
    "812500052": {
        "nombre": "POLLERA PANTALÓN CAMPIÑA",
        "precio": 4560
    },
    "812500053": {
        "nombre": "PANTALÓN ANTONIA AMPLIO",
        "precio": 86900
    },
    "812500054": {
        "nombre": "BOMBACHA MORA DENIM",
        "precio": 85500
    },
    "812500055": {
        "nombre": "PANTALÓN CUMBRE CORDEROY",
        "precio": 103500
    },
    "812500056": {
        "nombre": "PANTALÓN LLANURA DENIM",
        "precio": 78500
    },
    "812500057": {
        "nombre": "PANTALÓN SENDERO DENIM",
        "precio": 80500
    },
    "812500058": {
        "nombre": "PANTALÓN ONELLI",
        "precio": 103000
    },
    "812506000": {
        "nombre": "PANTALÓN CANDELARIA ANGOSTO",
        "precio": 82000
    },
    "812506001": {
        "nombre": "PANTALÓN ALBARIZA ANGOSTO",
        "precio": 71500
    },
    "812506002": {
        "nombre": "PANT. ALBARIZA M. C/PUÑO TEJIDO",
        "precio": 66000
    },
    "812506003": {
        "nombre": "PANT. ALBARIZA M. GABARDINA",
        "precio": 13440
    },
    "812506004": {
        "nombre": "PANTALÓN SERENA OXFORD M.",
        "precio": 30300
    },
    "812506005": {
        "nombre": "PANTALÓN 5 BOLS ALBARIZA GBRD / LYCR",
        "precio": 1035
    },
    "812506006": {
        "nombre": "PANTALÓN CLARA CON RECORTE",
        "precio": 1090
    },
    "812506007": {
        "nombre": "CAPRI DESFLECADO",
        "precio": 18900
    },
    "812506009": {
        "nombre": "PANTALÓN SANTA ROSA ANGOSTO",
        "precio": 64000
    },
    "812506010": {
        "nombre": "PANTALÓN MEDRANO ANGOSTO",
        "precio": 20400
    },
    "812506011": {
        "nombre": "PANTALÓN DE LA CRUZ FANTASIA",
        "precio": 19680
    },
    "812506012": {
        "nombre": "CAPRI AZUCENA",
        "precio": 16080
    },
    "812506013": {
        "nombre": "PANTALÓN JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "812506014": {
        "nombre": "POLLERA USPALLATA GABARDINA",
        "precio": 17280
    },
    "812506015": {
        "nombre": "PANT. COLONIA GABRDINA C/LYCRA",
        "precio": 19900
    },
    "812506016": {
        "nombre": "PANTALÓN MEDRANO ANGOSTO",
        "precio": 58700
    },
    "812506018": {
        "nombre": "BERMUDA JAVIERA  ANGOSTA",
        "precio": 16800
    },
    "812506019": {
        "nombre": "PANTALÓN CHECA GABARDINA",
        "precio": 62900
    },
    "812506020": {
        "nombre": "BERMUDA CAYETANA",
        "precio": 66000
    },
    "812506022": {
        "nombre": "PANTALÓN JACINTA GABARDINA LIVIANA",
        "precio": 35280
    },
    "812506023": {
        "nombre": "PANTALÓN EMILIA AMPLIO",
        "precio": 69400
    },
    "812506024": {
        "nombre": "PANTALÓN EMILIA AMPLIO",
        "precio": 75600
    },
    "812506026": {
        "nombre": "PANTALÓN MAGDALENA CARGO",
        "precio": 66800
    },
    "812506027": {
        "nombre": "BERMUDA BALLESTER",
        "precio": 39800
    },
    "812506028": {
        "nombre": "PANTALÓN VALLECITO MUY ANGOSTO",
        "precio": 67200
    },
    "812124001": {
        "nombre": "PANTALÓN NINA RECTO DESFLECADO",
        "precio": 59000
    },
    "812124002": {
        "nombre": "PANTALÓN EMMA CINTURA ALTA",
        "precio": 25680
    },
    "812124003": {
        "nombre": "PANTALÓN DONA CARGO",
        "precio": 97000
    },
    "111138003": {
        "nombre": "CHOMBA M/CORTA  (MICRO PIQUE PESCO H.)",
        "precio": 28000
    },
    "111140000": {
        "nombre": "REMERA CUELLO REDONDO BASICA M/C H.",
        "precio": 19000
    },
    "211105507": {
        "nombre": "CHALECO CANVAS",
        "precio": 61000
    },
    "112541001": {
        "nombre": "JEAN CORDOBA STONE (CLASICO LYCRA 5 BOL)",
        "precio": 34000
    },
    "113106104": {
        "nombre": "CAMPERA BAJO CERO",
        "precio": 169000
    },
    "21224001M": {
        "nombre": "BOMBACHA ALFORZADA HOMBRE",
        "precio": 43000
    },
    "21228001A": {
        "nombre": "BOMBACHA LISA HOMBRE",
        "precio": 900
    },
    "21228001M": {
        "nombre": "BOMBACHA LISA HOMBRE",
        "precio": 38500
    },
    "11111001M": {
        "nombre": "CAMISA DE TRABAJO H.M/L",
        "precio": 30500
    },
    "32170002M": {
        "nombre": "PANTALÓN CARGO RIPSTOP",
        "precio": 60000
    },
    "312506001": {
        "nombre": "PANTALÓN CARGO ELASTIZADO",
        "precio": 57500
    },
    "31250601M": {
        "nombre": "PANTALÓN CARGO ELASTIZADO JOSE",
        "precio": 66000
    },
    "31217001M": {
        "nombre": "PANTALÓN CARGO CAZADOR II",
        "precio": 52000
    },
    "31233001A": {
        "nombre": "BERMUDA CARGO HOMBRE",
        "precio": 48500
    },
    "31233001M": {
        "nombre": "BERMUDA CARGO HOMBRE",
        "precio": 46900
    },
    "31233002M": {
        "nombre": "BERMUDA CARGO FIT ELASTIZADA",
        "precio": 52000
    },
    "211173508": {
        "nombre": "CAMISA AVENTURA PAPPER",
        "precio": 53000
    },
    "811154005": {
        "nombre": "SAQUITO LENGA",
        "precio": 4560
    },
    "811154006": {
        "nombre": "SWETER SARA",
        "precio": 1070
    },
    "811168001": {
        "nombre": "SWEATER COLOME FLAMA",
        "precio": 3070
    },
    "811166065": {
        "nombre": "REMERA DELFINA",
        "precio": 59000
    },
    "811152005": {
        "nombre": "SWEATER IRUYA RAYADO",
        "precio": 71500
    },
    "811166066": {
        "nombre": "CHALECO CARRANZA",
        "precio": 60500
    },
    "811166067": {
        "nombre": "RUANA LA CASETA",
        "precio": 46800
    },
    "811514106": {
        "nombre": "SWEATER ARROYO OCHOS",
        "precio": 6960
    },
    "811514107": {
        "nombre": "RUANA BELTRAN OCHOS",
        "precio": 103500
    },
    "811520128": {
        "nombre": "SWEATER COCHINOCA Bosa Combinado",
        "precio": 57300
    },
    "811122124": {
        "nombre": "EV RETA MANGA ANCHA",
        "precio": 15120
    },
    "811122125": {
        "nombre": "EV MONTE CALADO CUELLO APLICADO",
        "precio": 22900
    },
    "811122202": {
        "nombre": "SACO MARIANA",
        "precio": 50900
    },
    "811122203": {
        "nombre": "SWEATER ALINA",
        "precio": 65200
    },
    "811122204": {
        "nombre": "SWEATER SANTA INES",
        "precio": 72500
    },
    "811122205": {
        "nombre": "SWEATER RAYADO",
        "precio": 33100
    },
    "811122299": {
        "nombre": "SWEATER LURANA",
        "precio": 68000
    },
    "811122300": {
        "nombre": "SWEATER AMAICHA",
        "precio": 73500
    },
    "811122301": {
        "nombre": "RUANA MAITA",
        "precio": 99500
    },
    "811135005": {
        "nombre": "RUANA LA CASETA",
        "precio": 84900
    },
    "811135007": {
        "nombre": "SACO LARGO BRIÑAS CON LAZO",
        "precio": 7050
    },
    "811135008": {
        "nombre": "SWEATER ABALOS BOSA",
        "precio": 55000
    },
    "811135009": {
        "nombre": "POLERON AGONCILLO",
        "precio": 50000
    },
    "811135010": {
        "nombre": "POLERON BLANCA",
        "precio": 14160
    },
    "811135011": {
        "nombre": "PONCHO LUJAN",
        "precio": 25900
    },
    "811135012": {
        "nombre": "SWEATER CREMA MANGA ANCHA",
        "precio": 14160
    },
    "811135014": {
        "nombre": "POLERON CALDAS",
        "precio": 23640
    },
    "811135015": {
        "nombre": "MEDIO CIERE CAMPANA",
        "precio": 25430
    },
    "811135016": {
        "nombre": "MEDIO CIERRE CAMPANA",
        "precio": 25430
    },
    "811135018": {
        "nombre": "SACO TILCARA",
        "precio": 86200
    },
    "811135019": {
        "nombre": "SWEATER MAIMARA",
        "precio": 83000
    },
    "811135020": {
        "nombre": "POLERÓN PURMAMARCA",
        "precio": 90900
    },
    "812104000": {
        "nombre": "PANTALÓN CATALINA RELAJADO",
        "precio": 86000
    },
    "812101006": {
        "nombre": "PANTALÓN SAUCE GABARDINA",
        "precio": 77000
    },
    "812101007": {
        "nombre": "PANTALÓN ANDINA GABARDINA",
        "precio": 84500
    },
    "812101008": {
        "nombre": "PANTALÓN SENDERO ANCHO",
        "precio": 82000
    },
    "812101009": {
        "nombre": "SHORT LIRIO",
        "precio": 70000
    },
    "812101010": {
        "nombre": "BERMUDA SAUCE GABARDINA",
        "precio": 70000
    },
    "811529000": {
        "nombre": "CAMPERA DEFLECADA",
        "precio": 47900
    },
    "599541000": {
        "nombre": "PANTALÓN CAPITAL INDUSTRIA",
        "precio": 565000
    },
    "612282101": {
        "nombre": "BOMBACHA ALUMINE M.GABARDINA",
        "precio": 0
    },
    "612283101": {
        "nombre": "BOMBACHA CORONDA RECTA",
        "precio": 65000
    },
    "812124005": {
        "nombre": "PANTALÓN MAGDALENA CARGO",
        "precio": 81000
    },
    "812124007": {
        "nombre": "BOMBACHA MORA",
        "precio": 74000
    },
    "812506030": {
        "nombre": "PANTALÓN ANTONIA AMPLIO",
        "precio": 80600
    },
    "812506035": {
        "nombre": "PANTALÓN SAUCE DENIM",
        "precio": 87500
    },
    "812506036": {
        "nombre": "PANTALÓN CUMBRE DENIM",
        "precio": 91000
    },
    "812506037": {
        "nombre": "PANTALÓN ANDINA DENIM",
        "precio": 91000
    },
    "812506038": {
        "nombre": "PANTALÓN TRIGAL",
        "precio": 86500
    },
    "812506039": {
        "nombre": "PANTALÓN SENDERO CORDEROY",
        "precio": 103500
    },
    "812533004": {
        "nombre": "PANTALÓN LA MERCED",
        "precio": 2810
    },
    "812545000": {
        "nombre": "PANTALÓN JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "812545001": {
        "nombre": "SHORT AZUL PAIME",
        "precio": 9690
    },
    "812545002": {
        "nombre": "SHORT NEGRO VILLAFLOR",
        "precio": 9690
    },
    "812506041": {
        "nombre": "PANTALÓN CARHUÉ",
        "precio": 74500
    },
    "812513000": {
        "nombre": "PANTALÓN TREVELIN ANGOSTO",
        "precio": 64200
    },
    "812525001": {
        "nombre": "PANTALÓN VALLECITO MUY ANGOSTO",
        "precio": 67000
    },
    "812525002": {
        "nombre": "PANTALÓN MEDRANO ANGOSTO",
        "precio": 64500
    },
    "812525003": {
        "nombre": "BERMUDA CANDELARIA M.",
        "precio": 13440
    },
    "812525004": {
        "nombre": "SHORT NUEVO  MARIELA",
        "precio": 9970
    },
    "812525005": {
        "nombre": "POLLERA JEAN USPALLATA 5 BOL LOCAL/ROTURAS",
        "precio": 16800
    },
    "812525006": {
        "nombre": "BERMUDA VALLE VERDE DEFLECADA",
        "precio": 1950
    },
    "812525007": {
        "nombre": "SHORT LOS LAURELES",
        "precio": 1880
    },
    "812525008": {
        "nombre": "PANTALÓN GAIMAN EMBARAZADA",
        "precio": 2760
    },
    "812525009": {
        "nombre": "PANT. LAMARQUE CELESTE CHUPIN",
        "precio": 15730
    },
    "812529007": {
        "nombre": "PANTALÓN SERENA OXFORD",
        "precio": 58500
    },
    "812529008": {
        "nombre": "PANTALÓN ALBARIZA ANGOSTO",
        "precio": 67000
    },
    "812529009": {
        "nombre": "PANTALÓN ALBARIZA ANGOSTO",
        "precio": 64500
    },
    "812529010": {
        "nombre": "PANT. CARMEN BOL. PLAQUE DENIM C/LYCRA",
        "precio": 2390
    },
    "812529011": {
        "nombre": "PANT. ALBARIZA DENIM COLOR",
        "precio": 19440
    },
    "812529012": {
        "nombre": "PANT CALZA   DOLORES             C/ ELAST",
        "precio": 14500
    },
    "812529013": {
        "nombre": "PESCADOR  DEFLECADO",
        "precio": 3300
    },
    "812529016": {
        "nombre": "PANTALÓN 5 BOLS ALBARIZA DEFLECADO",
        "precio": 1510
    },
    "812529017": {
        "nombre": "PANT. ALLEN AZUL CHUPIN      S/BOLS. BLACK C/LYCRA",
        "precio": 18900
    },
    "812529018": {
        "nombre": "PANTALÓN FELICITAS ANGOSTO",
        "precio": 68000
    },
    "912101013": {
        "nombre": "BOMBACHA GABARDINA NIÑO  OLIVERA",
        "precio": 0
    },
    "912122009": {
        "nombre": "BOMBACHA ZELAYA INFANTIL DENIM",
        "precio": 3240
    },
    "912500007": {
        "nombre": "JARDINERO TILO DENIM",
        "precio": 115000
    },
    "912500009": {
        "nombre": "PANTALÓN NARANJO RAYADO",
        "precio": 55000
    },
    "912181507": {
        "nombre": "PANTALÓN NENA DELFINA GABARDINA",
        "precio": 7920
    },
    "912181508": {
        "nombre": "PANTALÓN NENE VICENTE GABARDINA",
        "precio": 40900
    },
    "912500003": {
        "nombre": "PANTALÓN MANZANARES ANGOSTO",
        "precio": 47000
    },
    "912506015": {
        "nombre": "PANTALÓN LIMONERO",
        "precio": 45800
    },
    "912506016": {
        "nombre": "PANTALÓN ALBARIñO",
        "precio": 21000
    },
    "912506017": {
        "nombre": "PANTALÓN BRUNO CHINO",
        "precio": 62500
    },
    "812529101": {
        "nombre": "SHORT ALBARIZA M. DENIM C/LYCRA",
        "precio": 2500
    },
    "912101012": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 46000
    },
    "912122014": {
        "nombre": "BOMBACHA ZELAYA DENIM",
        "precio": 48500
    },
    "912122015": {
        "nombre": "PANTALÓN NARANJO",
        "precio": 68000
    },
    "912122016": {
        "nombre": "PANTALÓN LIMA CARGO",
        "precio": 78000
    },
    "U11122002": {
        "nombre": "CAMPERA CLASICA",
        "precio": 138000
    },
    "812124008": {
        "nombre": "BOMBACHA MORA FANTASIA",
        "precio": 82000
    },
    "912122027": {
        "nombre": "PANTALÓN CEREZO",
        "precio": 56500
    },
    "812104001": {
        "nombre": "PANTALÓN CHALTEN",
        "precio": 102500
    },
    "812104002": {
        "nombre": "PANTALÓN CALAFATE",
        "precio": 102500
    },
    "812529019": {
        "nombre": "PANTALÓN ACONCAGUA",
        "precio": 102500
    },
    "812542001": {
        "nombre": "PANTALÓN PAMPA",
        "precio": 102500
    },
    "412104014": {
        "nombre": "PANTALÓN ANDES",
        "precio": 105000
    },
    "412529003": {
        "nombre": "PANTALÓN MOLINO",
        "precio": 105000
    },
    "412529004": {
        "nombre": "PANTALÓN DOMINGO",
        "precio": 105000
    },
    "121134004": {
        "nombre": "BOTIN HUEPIL",
        "precio": 68500
    },
    "123131002": {
        "nombre": "BOTA PETROLERA C/P",
        "precio": 135500
    },
    "121136010": {
        "nombre": "BOTIN FRANCES C/P",
        "precio": 145000
    },
    "U21131000": {
        "nombre": "BOTIN NAHUEN",
        "precio": 88000
    },
    "U21131001": {
        "nombre": "BORCEGUÍ NAHUEN",
        "precio": 87000
    },
    "U21131002": {
        "nombre": "BORCEGUÍ NAHUEN T",
        "precio": 90000
    },
    "U23136000": {
        "nombre": "BOTIN GUNEY",
        "precio": 73500
    },
    "U00173500": {
        "nombre": "CORDONES CLASICOS 120cm",
        "precio": 3000
    },
    "U00173501": {
        "nombre": "CORDON REFORZADOS FANTASÍA 120cm",
        "precio": 4000
    },
    "U00173502": {
        "nombre": "CORDONES REFORZADOS REFLEX 120cm",
        "precio": 5000
    },
    "813106065": {
        "nombre": "CAMPERA VALLE",
        "precio": 155000
    },
    "321173000": {
        "nombre": "ZAPATILLA YENU",
        "precio": 73000
    },
    "121131001": {
        "nombre": "BOTIN YAVU",
        "precio": 81000
    },
    "412122216": {
        "nombre": "BERMUDA ANDES CARGO",
        "precio": 82000
    },
    "812122229": {
        "nombre": "PANTALÓN CUMBRES RECTO BULL",
        "precio": 91000
    },
    "811520129": {
        "nombre": "SWEATER UQUÍA Bosa",
        "precio": 61500
    },
    "811520015": {
        "nombre": "SWEATER FUNES M-C",
        "precio": 3180
    },
    "811520016": {
        "nombre": "SWEATER LA ISLITA EV",
        "precio": 4220
    },
    "811520017": {
        "nombre": "SWEATER LA BARRA",
        "precio": 68000
    },
    "811520018": {
        "nombre": "SACO LARGO PURMAMARCA CON BOLSILLOS",
        "precio": 47000
    },
    "811520019": {
        "nombre": "SAQUITO CARNAVAL CON VOLADITO",
        "precio": 3660
    },
    "811540006": {
        "nombre": "SWEATER LAS GRUTAS",
        "precio": 87000
    },
    "811540007": {
        "nombre": "CHALECO SIERRA GRANDE",
        "precio": 71000
    },
    "811540008": {
        "nombre": "PONCHO RAWSON",
        "precio": 98500
    },
    "811540002": {
        "nombre": "CARDIGAN HUMAHUACA M. ALG./LANA",
        "precio": 71000
    },
    "811540004": {
        "nombre": "PONCHO PURMAMARCA M. ALG./LANA",
        "precio": 1495
    },
    "811514117": {
        "nombre": "CHALECO CARRANZA",
        "precio": 48400
    },
    "811122045": {
        "nombre": "PONCHO CARDON",
        "precio": 3040
    },
    "811122029": {
        "nombre": "SWEATER CADENA",
        "precio": 1440
    },
    "811122030": {
        "nombre": "SACO SIERRA MUJER",
        "precio": 71500
    },
    "811122098": {
        "nombre": "MANGA MORLEY VERANO",
        "precio": 34900
    },
    "811122100": {
        "nombre": "IRUYA COMBINADO",
        "precio": 10280
    },
    "811122121": {
        "nombre": "SACO ESPERANZA CALADO",
        "precio": 46600
    },
    "811122122": {
        "nombre": "EV FATIMA CALADO",
        "precio": 18030
    },
    "811122123": {
        "nombre": "MUSCULOSA PALMEIRAS MORLEY",
        "precio": 35000
    },
    "121131002": {
        "nombre": "BOTIN YAVU",
        "precio": 81000
    },
    "121131003": {
        "nombre": "ZAPATO YAVU",
        "precio": 79500
    },
    "121146012": {
        "nombre": "BORCEGUI LEÑADOR",
        "precio": 140000
    },
    "121154001": {
        "nombre": "ZAPATO MACHI",
        "precio": 82000
    },
    "024101000": {
        "nombre": "ZAPATILLA MARTI FANT.BB H.GAB.",
        "precio": 1160
    },
    "024101001": {
        "nombre": "ZAPATILLA JUANI BB",
        "precio": 23700
    },
    "024102001": {
        "nombre": "BOTA JUANI BASICA BB FANTASIA H.",
        "precio": 1930
    },
    "024105000": {
        "nombre": "ZAPATILLA OLI BASICA BB CANVAS",
        "precio": 1320
    },
    "024105001": {
        "nombre": "ZAPATILLAS OLI",
        "precio": 15900
    },
    "024105002": {
        "nombre": "FEDE- ZAPATILLA CON ABROJO",
        "precio": 680
    },
    "024105003": {
        "nombre": "ZAPATILLA MANU",
        "precio": 6250
    },
    "024105004": {
        "nombre": "ZAPATILLA MARTI",
        "precio": 22900
    },
    "024105007": {
        "nombre": "OLI- PANCHA BB COMBINADA ESCOCES",
        "precio": 1500
    },
    "024105008": {
        "nombre": "OLI- PANCHA BB COMBINADA PRINT",
        "precio": 2030
    },
    "024105009": {
        "nombre": "ELI- NAUTICO BB ACORDONADO CAMUFLADO",
        "precio": 1170
    },
    "024105010": {
        "nombre": "BOTITA INDI BB BASICA CIERRE",
        "precio": 2030
    },
    "024105014": {
        "nombre": "ZAPATILLA MARTI FANTASIA NEGRO",
        "precio": 1930
    },
    "024105015": {
        "nombre": "ZAPATILLA MARTI FANTASIA AZUL",
        "precio": 1930
    },
    "024105016": {
        "nombre": "ZAPATILLA EMI CAMUFLADO",
        "precio": 2770
    },
    "024105017": {
        "nombre": "ZAPATILLA EMI LUNARES",
        "precio": 2770
    },
    "024116000": {
        "nombre": "ZAPATILLA MARTI FANT.BB M.CANVAS",
        "precio": 1160
    },
    "024116001": {
        "nombre": "ZAPATILLA PAULI BB C/ ABROJO CANVAS",
        "precio": 1370
    },
    "024116002": {
        "nombre": "GUILLERMINA CARO BB S/PUNTERA CANVAS",
        "precio": 1160
    },
    "024116003": {
        "nombre": "GUILLERMINA CARO FANT. BB S/PUNTERA CANV",
        "precio": 1160
    },
    "024116005": {
        "nombre": "ZAPATILLA CAMI",
        "precio": 2030
    },
    "024119000": {
        "nombre": "BOTITA CORDON VINILICO JUSTI",
        "precio": 1930
    },
    "024119001": {
        "nombre": "ZAPATILLA JOAQUI",
        "precio": 2100
    },
    "024122003": {
        "nombre": "ZAPATILLA PAULI",
        "precio": 22900
    },
    "024122004": {
        "nombre": "SLACK VALE",
        "precio": 1930
    },
    "024122005": {
        "nombre": "GUILLERMINA CATA",
        "precio": 6290
    },
    "024122006": {
        "nombre": "GUILLERMINA MICA",
        "precio": 1290
    },
    "024122007": {
        "nombre": "GUILLERMINA MAGUI",
        "precio": 17100
    },
    "024124000": {
        "nombre": "ZAPATILLA OLI FANT.BB POPLIN",
        "precio": 1320
    },
    "024138001": {
        "nombre": "ZAPATILLA MARTI FANTASIA BB H.",
        "precio": 1930
    },
    "024139000": {
        "nombre": "CAYE - ZAPATILLA ACORDONADA",
        "precio": 1760
    },
    "024140001": {
        "nombre": "ZAPATILLA MARTI FANT.BB H.JERSEY",
        "precio": 5800
    },
    "024140004": {
        "nombre": "ZAPATILLA FELI",
        "precio": 21200
    },
    "024140005": {
        "nombre": "ZAPATILLA BENJA JEAN",
        "precio": 18900
    },
    "024140006": {
        "nombre": "ZAPATILLA FELI STP",
        "precio": 21500
    },
    "024140007": {
        "nombre": "ZAPATILLA EMI STP",
        "precio": 22900
    },
    "024164000": {
        "nombre": "ZAPATILLA MARTI FANTASIA BB M.",
        "precio": 780
    },
    "024164005": {
        "nombre": "MARTI- ZAPATILLA BB ACORDONADA ESTAMPADO BATIK",
        "precio": 1760
    },
    "024164006": {
        "nombre": "MARTI- ZAPATILLA BB ACORDONADA ESTAMPADO FLORES",
        "precio": 1760
    },
    "024164007": {
        "nombre": "ZAPATILLA MARTI FANTASIA BB CORDON",
        "precio": 6330
    },
    "024164008": {
        "nombre": "ZAPATILLA INDI FANTASIA FRANCIA",
        "precio": 2730
    },
    "024164009": {
        "nombre": "ZAPATILLA INDI FANTASIA FUCSIA",
        "precio": 2730
    },
    "024168000": {
        "nombre": "BOTA JUSTI EF",
        "precio": 2100
    },
    "024410116": {
        "nombre": "ZAPATILLA JUANI",
        "precio": 490
    },
    "024500000": {
        "nombre": "ELI - NAUTICO ACORDONADO",
        "precio": 1320
    },
    "0245000000": {
        "nombre": "ELI-  NAUTICO BB ACORDONADO LISO",
        "precio": 1170
    },
    "024500001": {
        "nombre": "ZAPATILLA JUANI",
        "precio": 780
    },
    "024512000": {
        "nombre": "ZAPATILLA CAMI FANT. BB  C/ABROJO POPLIN",
        "precio": 1760
    },
    "024610116": {
        "nombre": "ZAPATILLA MANU BASICA BB",
        "precio": 24700
    },
    "024610117": {
        "nombre": "ZAPATILLA FELI BASICA BB",
        "precio": 1180
    },
    "024620105": {
        "nombre": "ZAPATILLA EMI FANT.BB.H.CANVAS C/ABROJO",
        "precio": 19900
    },
    "024620117": {
        "nombre": "ZAPATILLA BENJA BASICA C/ABROJO BB",
        "precio": 1760
    },
    "024620118": {
        "nombre": "ZAPATILLA EMI C/ABROJO FANTASIA BB M.",
        "precio": 1300
    },
    "423116000": {
        "nombre": "ZAPATILLA MONSERRAT",
        "precio": 25900
    },
    "121146008": {
        "nombre": "BOTIN ALENKE",
        "precio": 119000
    },
    "121146011": {
        "nombre": "BORCEGUI LEÑADOR",
        "precio": 141000
    },
    "424106000": {
        "nombre": "ZUECO DEL MAR",
        "precio": 32000
    },
    "424106001": {
        "nombre": "ZAPATILLA PALERMO",
        "precio": 5120
    },
    "424116004": {
        "nombre": "ZAPATILLA COLON ADULTO HOMBRE",
        "precio": 30000
    },
    "424116005": {
        "nombre": "BOTA CAMINITO",
        "precio": 38200
    },
    "424121142": {
        "nombre": "OJOTA MARONI",
        "precio": 3090
    },
    "424523000": {
        "nombre": "OJOTA CABALLITO",
        "precio": 3470
    },
    "824116003": {
        "nombre": "ZUECO PRADERAS",
        "precio": 5990
    },
    "824121000": {
        "nombre": "BOTA DE LLUVIA MUJER REGINA",
        "precio": 27200
    },
    "824116000": {
        "nombre": "ZAPATILLA ROSADA ADULTO MUJER",
        "precio": 31000
    },
    "824116001": {
        "nombre": "ZAPATILLA ROSADA BAJA",
        "precio": 29500
    },
    "823116000": {
        "nombre": "ALPARGATA RECOLETA",
        "precio": 27800
    },
    "823116001": {
        "nombre": "ZAPATILLA FLORES",
        "precio": 26000
    },
    "824106000": {
        "nombre": "ZAPATILLA FLORESTA",
        "precio": 5510
    },
    "824523000": {
        "nombre": "OJOTA SANTA RITA",
        "precio": 2510
    },
    "824523001": {
        "nombre": "OJOTA SANTA RITA STP",
        "precio": 7000
    },
    "824523002": {
        "nombre": "OJOTA SAN TELMO",
        "precio": 2760
    },
    "922140000": {
        "nombre": "ZAPATILLA FERCHU ESTAMPADA",
        "precio": 1320
    },
    "922140001": {
        "nombre": "FERCHU-ZAPATILLA FANTASIA NIÑO CORDON",
        "precio": 30000
    },
    "922140002": {
        "nombre": "FERCHU-ZAPATILLA FANTASIA NIÑO CORDON",
        "precio": 1320
    },
    "921106000": {
        "nombre": "BOTA BASALÚ",
        "precio": 26600
    },
    "923134000": {
        "nombre": "ZAPATILLA MATI CON CORDON",
        "precio": 26600
    },
    "923134001": {
        "nombre": "ZAPATILLA MATI CON ABROJO",
        "precio": 38500
    },
    "923173000": {
        "nombre": "OJOTA RENO",
        "precio": 16000
    },
    "923519001": {
        "nombre": "SANDALIA VALEN UNISEX",
        "precio": 29000
    },
    "924101000": {
        "nombre": "ZAPATILLA FABI FANT.H.GAB.",
        "precio": 1320
    },
    "924105000": {
        "nombre": "ZAPATILLA FABI BASICA CANVAS",
        "precio": 1320
    },
    "924105003": {
        "nombre": "LAU- ZAPATILLA ACORDONADA PANAMA",
        "precio": 27700
    },
    "924105005": {
        "nombre": "LAU-  ZAPATILLA ACORDONADA LUNARES",
        "precio": 1280
    },
    "924105008": {
        "nombre": "ELI-  NAUTICO ESTAMPADO PRINT",
        "precio": 1170
    },
    "924105009": {
        "nombre": "ZAPATILLA FERCHU FANTASIA NIÑO CORDON",
        "precio": 1970
    },
    "924105010": {
        "nombre": "NAUTICO MARIAN CORDON NIÑO FANTASIA",
        "precio": 1760
    },
    "924105011": {
        "nombre": "BOTA JOSE CORDON NIÑO FANTASIA",
        "precio": 2260
    },
    "924105013": {
        "nombre": "ZAPATILLA NICO ABROJO NIÑO BUMPER FANTASIA",
        "precio": 5940
    },
    "924105014": {
        "nombre": "ZAPATILLA AGUS GLITTER",
        "precio": 2200
    },
    "924105019": {
        "nombre": "ZAPATIILLA IVI CAMUFLADO AZUL",
        "precio": 29900
    },
    "924106000": {
        "nombre": "ZAPATILLA TORI",
        "precio": 12210
    },
    "924106001": {
        "nombre": "ZAPATILLA ANITA",
        "precio": 37900
    },
    "924106002": {
        "nombre": "ZAPATILLA RAFA",
        "precio": 38700
    },
    "924106003": {
        "nombre": "ZAPATILLA RIO",
        "precio": 33000
    },
    "924106004": {
        "nombre": "SANDALIA CRUZ",
        "precio": 47000
    },
    "924106005": {
        "nombre": "SANDALIA ADRI",
        "precio": 45000
    },
    "924106006": {
        "nombre": "SANDALIA LUCA",
        "precio": 25600
    },
    "924106007": {
        "nombre": "SANDALIA DELIA",
        "precio": 35000
    },
    "924106011": {
        "nombre": "ZAPATILLA MIEL",
        "precio": 37900
    },
    "924116000": {
        "nombre": "GUILLERMINA TATI S/PUNTERA CANVAS",
        "precio": 1280
    },
    "924116002": {
        "nombre": "ZAPATILLA PATO C/ABROJO FANTASIA H. CANV",
        "precio": 1350
    },
    "924116007": {
        "nombre": "TATI- GUILLERMINA LISA",
        "precio": 22500
    },
    "924116009": {
        "nombre": "BEL- ZAPATILLA SIN CORDON NIÑA",
        "precio": 1760
    },
    "924116010": {
        "nombre": "FLOR- ZAPATILLA CON ABROJO NIÑA",
        "precio": 595
    },
    "924116050": {
        "nombre": "ZAPATILLA LU",
        "precio": 31800
    },
    "924116051": {
        "nombre": "GUILLERMINA TATI ESTAMPADA",
        "precio": 8890
    },
    "924119000": {
        "nombre": "BOTA JOSE",
        "precio": 40500
    },
    "924121000": {
        "nombre": "GABI - DEPORTIVO BÁSICO NIÑO",
        "precio": 1590
    },
    "924122001": {
        "nombre": "PATO - ZAPATILLA FANTASIA NIÑO ABROJO",
        "precio": 27700
    },
    "924122005": {
        "nombre": "PATO - ZAPATILLA FANTASIA NIÑA ABROJO",
        "precio": 1350
    },
    "924122012": {
        "nombre": "ZAPATILLA AGUS",
        "precio": 28600
    },
    "924122013": {
        "nombre": "ZAPATILLA LIS FANTASIA CAMUFLADO",
        "precio": 31900
    },
    "924122015": {
        "nombre": "ZAPATILLA ARI FANTASIA NEGRO",
        "precio": 29500
    },
    "924122016": {
        "nombre": "ZAPATILLA ARI FANTASIA MULTICOLOR",
        "precio": 2340
    },
    "924122017": {
        "nombre": "GUILLERMINA SOFI",
        "precio": 19400
    },
    "924122018": {
        "nombre": "GUILLERMINA AMPI",
        "precio": 1495
    },
    "924122019": {
        "nombre": "ZAPATILLA PAO",
        "precio": 28400
    },
    "924122021": {
        "nombre": "GUILERMINA SOFI ESTAMPADA",
        "precio": 4740
    },
    "924122022": {
        "nombre": "ZAPATILLA GERA",
        "precio": 32900
    },
    "924122023": {
        "nombre": "ZAPATILLA TOBI",
        "precio": 33300
    },
    "924136000": {
        "nombre": "BOTINETA DESCARNE MARI",
        "precio": 1790
    },
    "924138000": {
        "nombre": "ZAPATILLA FABI FANT.M.PIQUE",
        "precio": 1320
    },
    "924139000": {
        "nombre": "JOAQUI- ZAPATILLA ACORDONADA",
        "precio": 28400
    },
    "924140000": {
        "nombre": "ZAPATILLA FABI FANT.M.JERSEY",
        "precio": 5200
    },
    "924140002": {
        "nombre": "ZAPATILLA FERCHU FANTASIA M.JERSEY",
        "precio": 19700
    },
    "924140003": {
        "nombre": "ZAPATILLA FABI FANT. H. JERSEY",
        "precio": 28000
    },
    "924140005": {
        "nombre": "FLOR- ZAPATILLA CON ABROJO NIÑO",
        "precio": 595
    },
    "924140006": {
        "nombre": "FERCHU- ZAPATILLA ACORDONADA ESTAMPADO HOJAS",
        "precio": 1320
    },
    "924140007": {
        "nombre": "FERCHU- ZAPATILLA ACORDONADA ESTAMPADO PRINT",
        "precio": 2100
    },
    "924140008": {
        "nombre": "ZAPATILLA ANDI",
        "precio": 25900
    },
    "924140009": {
        "nombre": "ALPARGATA FABI ESTAMPADA",
        "precio": 23500
    },
    "924164003": {
        "nombre": "ELI-  NAUTICO ESTAMPADO BATIK",
        "precio": 1170
    },
    "924164009": {
        "nombre": "ZAPATILLA NICO FANTASIA NEGRO",
        "precio": 6900
    },
    "924164011": {
        "nombre": "BOTA ALFON FANTASIA CAMUFLADA",
        "precio": 2580
    },
    "924171000": {
        "nombre": "ZAPATO MARCE COLEGIAL ACORD.",
        "precio": 2690
    },
    "924171001": {
        "nombre": "ZAPATO CRIS COLEGIAL C/ABROJO",
        "precio": 2690
    },
    "924171002": {
        "nombre": "GUILLERMINA CLAU COLEGIAL",
        "precio": 2690
    },
    "924313116": {
        "nombre": "BOTA JOSE BASICA (NIÑOS)",
        "precio": 2260
    },
    "924314101": {
        "nombre": "BOTA JOSE BASICA FANTASIA",
        "precio": 2260
    },
    "924331121": {
        "nombre": "BOTA DE LLUVIA JULI BASICA",
        "precio": 5990
    },
    "924331122": {
        "nombre": "BOTA DE LLUVIA  JULI BASE NUEVA",
        "precio": 29000
    },
    "924500000": {
        "nombre": "ADRI - NAUTICOS JEAN",
        "precio": 850
    },
    "924511000": {
        "nombre": "ZAPATILLA PATO C/ABROJO FANT. M.",
        "precio": 2360
    },
    "924519000": {
        "nombre": "OJOTA ARCO IRIS",
        "precio": 4470
    },
    "924610116": {
        "nombre": "ZAPATILLA FRAN BASICA",
        "precio": 33000
    },
    "924610117": {
        "nombre": "ZAPATILLA ANDI BASICA",
        "precio": 1970
    },
    "924610118": {
        "nombre": "ZAPATILLA FERCHU FANTASIA M.",
        "precio": 2100
    },
    "924610119": {
        "nombre": "ZAPATILLA COLEGIAL ALE",
        "precio": 35000
    },
    "924620116": {
        "nombre": "ZAPATILLA AGUS C/ABROJO",
        "precio": 34500
    },
    "924620119": {
        "nombre": "ZAPATILLA FER COLEGIAL C/ABROJO",
        "precio": 36500
    },
    "924153000": {
        "nombre": "BOTITA NINO MODA TIZI",
        "precio": 3650
    },
    "924164000": {
        "nombre": "GUILLERMINA TATI FANT. S/PUNTERA INTERLO",
        "precio": 1680
    },
    "924164001": {
        "nombre": "BOTITA NINO MODA TIZI",
        "precio": 4290
    },
    "924620140": {
        "nombre": "ZAPATILLA PATO C/ABROJO FANTASIA M.",
        "precio": 2600
    },
    "924106012": {
        "nombre": "SANDALIA LARA",
        "precio": 36000
    },
    "924106013": {
        "nombre": "ZAPATILLA ARI",
        "precio": 35500
    },
    "U43165000": {
        "nombre": "MEDIA TUBO INDUSTRIA ALGODON",
        "precio": 4100
    },
    "943122001": {
        "nombre": "MEDIA CAÑA 3/4 COLEGIAL (PX3)",
        "precio": 12500
    },
    "943122002": {
        "nombre": "INFANTIL CAÑA INVISIBLE PAX3",
        "precio": 2500
    },
    "143106000": {
        "nombre": "MEDIA INVISIBLE MELANGE",
        "precio": 4900
    },
    "143122002": {
        "nombre": "MEDIA CAÑA 3/4 ALGODÓN TOALLA (PX3)",
        "precio": 6600
    },
    "143122003": {
        "nombre": "MEDIA CAÑA 3/4 CAMUFLADA (PX3)",
        "precio": 6700
    },
    "143122006": {
        "nombre": "MEDIA CAÑA 3/4 COMBINADA (PX3)",
        "precio": 5700
    },
    "143122007": {
        "nombre": "CAÑA INVISIBLE LISA SIMPLE TOALLA. ALGODÓN C LYCRA PAX3",
        "precio": 4900
    },
    "143122008": {
        "nombre": "CAÑA INVISIBLE RAYADA MUJER PAX3",
        "precio": 900
    },
    "143122009": {
        "nombre": "BALERINA MUJER",
        "precio": 4700
    },
    "143122108": {
        "nombre": "MEDIA TOALLA ALGODON CALA BAJA",
        "precio": 5200
    },
    "143122109": {
        "nombre": "MEDIA MUJER CAÑA BAJA ALGODON Y TOALLA PAX3",
        "precio": 4900
    },
    "143122110": {
        "nombre": "MEDIA CAÑA 3/4 SIN TOALLA - RAYAS puño morley",
        "precio": 5500
    },
    "143122111": {
        "nombre": "MEDIA CAÑA 3/4 SIN TOALLA - LISA puño morley",
        "precio": 5500
    },
    "143128000": {
        "nombre": "MEDIA TÉRMICA BÁSICA",
        "precio": 6700
    },
    "143128001": {
        "nombre": "MEDIA DE MICROFIBRA 3-4",
        "precio": 220
    },
    "143128003": {
        "nombre": "MEDIA CAÑA BAJA MICROFIBRA (PX3)",
        "precio": 5200
    },
    "143128004": {
        "nombre": "MEDIA MICROFIBRA PAMPERO PAX3",
        "precio": 18300
    },
    "143128005": {
        "nombre": "MEDIA CAÑA 3/4 MICROFIBRA (PX3)",
        "precio": 6400
    },
    "143128006": {
        "nombre": "MEDIA CAÑA BAJA CON HILO DE PLATA",
        "precio": 10900
    },
    "143128007": {
        "nombre": "MEDIA CAÑA 3/4 CON HILO DE PLATA",
        "precio": 14900
    },
    "143128010": {
        "nombre": "MEDIA CAÑA INVISIBLE MICROFIBRA (PX3)",
        "precio": 4900
    },
    "143513000": {
        "nombre": "MEDIA SUR",
        "precio": 4900
    },
    "143513001": {
        "nombre": "MEDIA NORTE",
        "precio": 4900
    },
    "143513002": {
        "nombre": "MEDIA CAÑA 3/4 BÁSICA (PX3)",
        "precio": 5700
    },
    "143513003": {
        "nombre": "MEDIA CAÑA INVISIBLE RAYAS (PX3)",
        "precio": 4950
    },
    "143513004": {
        "nombre": "MEDIA CALAFATE",
        "precio": 5700
    },
    "143513005": {
        "nombre": "MEDIA CAÑA INVISIBLE LUNARES (PX3)",
        "precio": 4950
    },
    "143513006": {
        "nombre": "MEDIA PENÍNSULA VALDÉS",
        "precio": 5700
    },
    "151128001": {
        "nombre": "CAMISETA TÉRMICA MANGA LARGA CON HILO DE PLATA",
        "precio": 38900
    },
    "152128000": {
        "nombre": "BÓXER CORTO CON HILO DE PLATA",
        "precio": 1770
    },
    "152128002": {
        "nombre": "BOXER MICROFIBRA",
        "precio": 15900
    },
    "152128003": {
        "nombre": "CALZA MICROFIBRA",
        "precio": 36600
    },
    "134000007": {
        "nombre": "GUANTE DOBLE FAZ ORO",
        "precio": 2000
    },
    "134000011": {
        "nombre": "GUANTE PINTOR",
        "precio": 2100
    },
    "134000012": {
        "nombre": "GUANTE ARMADOR",
        "precio": 2100
    },
    "134115000": {
        "nombre": "GUANTE MEDIO PASEO VAQUETA AMARILLO PAMP",
        "precio": 5700
    },
    "134122002": {
        "nombre": "GUANTE ECO MOTEADO",
        "precio": 1200
    },
    "134136000": {
        "nombre": "GUANTE AMERICANO DESCARNE PUÑO CORTO PAM",
        "precio": 4200
    },
    "134136005": {
        "nombre": "GUANTE DE CUERO SOLDADOR",
        "precio": 12500
    },
    "134533008": {
        "nombre": "GUANTE TERRYCLOTH INDUSTRIAL MOTEADO",
        "precio": 2900
    },
    "134533010": {
        "nombre": "GUANTE INDUSTRIAL MOTEADO",
        "precio": 1400
    },
    "136106012": {
        "nombre": "GUANTE PAMPERO TRACTOR",
        "precio": 10200
    },
    "136106014": {
        "nombre": "GUANTE PAMPERO NITRUR V",
        "precio": 4300
    },
    "136121007": {
        "nombre": "CHALECO REFLECTIVO CLASE 1",
        "precio": 4400
    },
    "136121008": {
        "nombre": "CHALECO REFLECTIVO CLASE 2",
        "precio": 4400
    },
    "111109007": {
        "nombre": "MAMELUCO BASICO TERMICO TRK.",
        "precio": 114000
    },
    "111109020": {
        "nombre": "MAMELUCO TRUCKER MAT. 200gr",
        "precio": 109000
    },
    "112109002": {
        "nombre": "PANTALÓN BASICO TERMICO TRK.",
        "precio": 58500
    },
    "111128001": {
        "nombre": "ROMPEVIENTO BAGUAL RIPSTOP",
        "precio": 59000
    },
    "113106102": {
        "nombre": "CAMPERÓN MINERO ANDES",
        "precio": 115500
    },
    "113106103": {
        "nombre": "CAMPERON  SOFSHELL SUR",
        "precio": 91500
    },
    "113101004": {
        "nombre": "CAMPERA ANORAK TERMICA GABARDINA",
        "precio": 102000
    },
    "113106003": {
        "nombre": "CHALECO CIRE FORRER TAFE",
        "precio": 53500
    },
    "113106005": {
        "nombre": "CAMPERA CIRE MADRYN",
        "precio": 69000
    },
    "113109009": {
        "nombre": "CAMPERA ANORAK TERMICA TRK.",
        "precio": 62500
    },
    "113109016": {
        "nombre": "CAMPERON TRUCKER CON POLAR MATELASEADO",
        "precio": 69500
    },
    "113118002": {
        "nombre": "CAMPERA COMBINADA FRISA/CIRE",
        "precio": 64500
    },
    "113211150": {
        "nombre": "CAMPERA SOFTSHELL 2020",
        "precio": 72500
    },
    "113211160": {
        "nombre": "CHALECO SOFTSHELL",
        "precio": 65000
    },
    "111118000": {
        "nombre": "BUZO BASICO H.FRIZA O",
        "precio": 44500
    },
    "111118001": {
        "nombre": "BUZO BÁSICO MEDIO CIERRE FRISA",
        "precio": 45000
    },
    "111118002": {
        "nombre": "CAMPERA DARACT FRISA Y CIRE",
        "precio": 64500
    },
    "111101001": {
        "nombre": "MAMELUCO GABARDINA TERMICO",
        "precio": 176500
    },
    "111157001": {
        "nombre": "ROMPEVIENTO TRENEL SILVER",
        "precio": 8880
    },
    "111157010": {
        "nombre": "ROMPEVIENTO CIRE EMBALSE",
        "precio": 31000
    },
    "111170000": {
        "nombre": "ROMPEVIENTO ESQUEL C/BOLSA SILVER",
        "precio": 31500
    },
    "U11105001": {
        "nombre": "REMERA TÉRMICA MICROFIBRA",
        "precio": 40500
    },
    "U12105001": {
        "nombre": "PANTALÓN TERMICO PRIMERA PIEL MICROFIBRA",
        "precio": 21500
    },
    "511106004": {
        "nombre": "CAMPERA DE SOFTSHELL AURA",
        "precio": 65500
    },
    "511106005": {
        "nombre": "CHALECO DE SOFTSHELL AURA",
        "precio": 58500
    },
    "113109001": {
        "nombre": "CAMPERA BASICA TRK. RQL",
        "precio": 64700
    },
    "113214110": {
        "nombre": "CAMPERA PEHUEN CON CANELON",
        "precio": 81300
    },
    "113211200": {
        "nombre": "CHALECO SALIN SOFTSHELL",
        "precio": 87400
    },
    "113211143": {
        "nombre": "CAMPERA SOFTSHELL FITZROY H.",
        "precio": 57500
    },
    "113211144": {
        "nombre": "CAMPERA CHUSCHA SOFTSHELL",
        "precio": 55200
    },
    "113211145": {
        "nombre": "CAMPERA ACONCAGUA SOFTSHELL H.",
        "precio": 227700
    },
    "113211146": {
        "nombre": "CAMPERA SOFTSHELL RECLUS CAPUCHA DESMONTABLE",
        "precio": 58190
    },
    "113106101": {
        "nombre": "CAMPERA MINERA C/REFLECTIVO UNISEX",
        "precio": 184000
    },
    "113107005": {
        "nombre": "CAMPERA CANELON FUJI",
        "precio": 117300
    },
    "111108006": {
        "nombre": "BUZO CACHI POLAR H.",
        "precio": 63900
    },
    "111106004": {
        "nombre": "CHOMBA PIQUE MAMBORETA",
        "precio": 12190
    },
    "111173000": {
        "nombre": "REMERA TECNICA DE BAMBÚ",
        "precio": 58200
    },
    "311105999": {
        "nombre": "REMERA TIMBO TÉRMICA AVANZADA ML H.",
        "precio": 25300
    },
    "311106000": {
        "nombre": "CAMISA PUELO H. M/C 2BOLS.SUPPLEX",
        "precio": 1650
    },
    "311106010": {
        "nombre": "REMERA DEPORTIVA 2",
        "precio": 2190
    },
    "311106012": {
        "nombre": "ROMPEVIENTO HUAYRA",
        "precio": 33000
    },
    "311106013": {
        "nombre": "BUZO RUNNING 2",
        "precio": 4150
    },
    "311140008": {
        "nombre": "REMERA CONDOR H.M/C",
        "precio": 400
    },
    "311140009": {
        "nombre": "REMERA PACU HOMBRE",
        "precio": 8900
    },
    "311140010": {
        "nombre": "REMERA CORVINA NEGRA HOMBRE",
        "precio": 8990
    },
    "311140011": {
        "nombre": "REMERA DORADO  HOMBRE",
        "precio": 3400
    },
    "311140012": {
        "nombre": "REMERA DORADO M/LARGO HOMBRE",
        "precio": 1580
    },
    "311140013": {
        "nombre": "REMERA SURUBI HOMBRE",
        "precio": 1580
    },
    "311140014": {
        "nombre": "REMERA TRUCHA HOMBRE",
        "precio": 1580
    },
    "311122000": {
        "nombre": "REMERA BASICA PETROHUE H.M/L",
        "precio": 1420
    },
    "313212106": {
        "nombre": "ROMPEVIENTOS EL BOLSON H.",
        "precio": 70900
    },
    "313108000": {
        "nombre": "CAMPERA HUAPI COMB. SOFTSHELL",
        "precio": 5280
    },
    "313108001": {
        "nombre": "CAMPERA CASTOR WINDSHELL H.",
        "precio": 8670
    },
    "313111141": {
        "nombre": "CHALECO LOS MOLINOS H.MICROPOLAR",
        "precio": 72500
    },
    "313122000": {
        "nombre": "CHALECO CARATAI PESCA H.GABARDINA",
        "precio": 1300
    },
    "313128000": {
        "nombre": "CAMPERA SUR SKY",
        "precio": 184000
    },
    "313106000": {
        "nombre": "PANTALÓN CARGO ANDINO SECADO RAPIDO",
        "precio": 141700
    },
    "313106001": {
        "nombre": "CAMPERA BATEA MAHUIDA 3 EN 1",
        "precio": 227700
    },
    "313211140": {
        "nombre": "CAMPERA SOFTSHELL CURRUHUE H",
        "precio": 105800
    },
    "313211141": {
        "nombre": "CAMPERA EL CHOCON H.MICROPOLAR",
        "precio": 63300
    },
    "341108000": {
        "nombre": "GORRO WINDSHELL ANATOMICO",
        "precio": 1090
    },
    "341108001": {
        "nombre": "GORRO WINDSHELL CON VISERA",
        "precio": 1100
    },
    "341141000": {
        "nombre": "GORRO CON VISERA",
        "precio": 21600
    },
    "341141001": {
        "nombre": "CUELLO DE POLAR",
        "precio": 16800
    },
    "341141002": {
        "nombre": "GORRO ANATOMICO POLAR",
        "precio": 21600
    },
    "342122000": {
        "nombre": "BUFF   MEDIDA 25X50",
        "precio": 470
    },
    "343108000": {
        "nombre": "GUANTES WINDSHELL",
        "precio": 18000
    },
    "313106012": {
        "nombre": "ROMPEVIENTO REFLECTIVO",
        "precio": 11730
    },
    "312106001": {
        "nombre": "PANTALÓN NEUQUEN SUPLEX DESMONTABLE",
        "precio": 6300
    },
    "312106002": {
        "nombre": "PANTALÓN AMBAI TÉRMICO AVANZADO H.",
        "precio": 25300
    },
    "312106009": {
        "nombre": "PANTALÓN RUNNING 2",
        "precio": 3470
    },
    "312106022": {
        "nombre": "PANTALÓN INACAHAUSI RIPSTOP",
        "precio": 89700
    },
    "312128002": {
        "nombre": "TRAJE DE BAÑO DUNA H. CINTURA",
        "precio": 890
    },
    "312131106": {
        "nombre": "PANT.QUEÑI H.SUPPLEX DESMONT.",
        "precio": 1420
    },
    "311152002": {
        "nombre": "CAMISA INTI SECADO RAPIDO",
        "precio": 3470
    },
    "311161106": {
        "nombre": "CAMISA PUELO H. M/L 2BOLS.SUPPLEX",
        "precio": 4890
    },
    "311161107": {
        "nombre": "CAMISA CARCARAÑA M/C 2 BOLS.",
        "precio": 4560
    },
    "311221140": {
        "nombre": "REMERA POLO BERMEJO H.M/C",
        "precio": 1320
    },
    "311222140": {
        "nombre": "REMERA BASICA CARDIEL H. M/C",
        "precio": 1140
    },
    "311411141": {
        "nombre": "BUZO SAN ROQUE H.MICROPOLAR 1/2 CIERRE",
        "precio": 53200
    },
    "311611106": {
        "nombre": "CAMPERA SOFTSHELL H.",
        "precio": 24290
    },
    "311711101": {
        "nombre": "CHALECO PESCA H.",
        "precio": 19000
    },
    "312530001": {
        "nombre": "BERMUDA ALGARROBO H. PAPER",
        "precio": 3470
    },
    "312118001": {
        "nombre": "PANTALÓN RECLUS SOFTSHELL",
        "precio": 110400
    },
    "511106003": {
        "nombre": "CHOMBA PIQUE PANAMBI",
        "precio": 12190
    },
    "711106010": {
        "nombre": "REMERA PEONIA TERMICA AVANZADA M M/L",
        "precio": 25300
    },
    "711140004": {
        "nombre": "REMERA POLO BERMEJO JERSEY M/C",
        "precio": 1260
    },
    "711152001": {
        "nombre": "CAMISA AURORA SECADO RAPIDO",
        "precio": 141700
    },
    "711161106": {
        "nombre": "CAMISA CARCARAÑA M. M/L 2BOLS.SUPPLEX",
        "precio": 3090
    },
    "711223140": {
        "nombre": "REMERA BASICA COCHICO M.M/C",
        "precio": 980
    },
    "711411141": {
        "nombre": "BUZO LACAR M.MICROPOLAR 1/2CIERRE",
        "precio": 53200
    },
    "713111141": {
        "nombre": "CHALECO YALCA M.MICROPOLAR",
        "precio": 72500
    },
    "713211140": {
        "nombre": "CAMPERA SOFTSHELL CHOLILA M",
        "precio": 105800
    },
    "713211141": {
        "nombre": "CAMPERA LIMAY M.MICROPOLAR",
        "precio": 63300
    },
    "713211145": {
        "nombre": "campera softshell aconcagua mujer",
        "precio": 227700
    },
    "713106200": {
        "nombre": "CAMPERA NOGAL M",
        "precio": 167900
    },
    "712131106": {
        "nombre": "PANTALÓN QUILLEN M.DESMONTABLE",
        "precio": 5990
    },
    "713106007": {
        "nombre": "TAPADO LAS GRUTAS",
        "precio": 131100
    },
    "911411141": {
        "nombre": "BUZO CADILLAL N.MICROPOLAR 1/2CIERRE",
        "precio": 2370
    },
    "911141002": {
        "nombre": "BUZO MICROPOLAR CATALPA 1 CARA",
        "precio": 2200
    },
    "911140100": {
        "nombre": "REMERA DORADO NIÑO",
        "precio": 2800
    },
    "136121010": {
        "nombre": "CHALECO REFLECTIVO MUNICIPAL C/CIERRE",
        "precio": 13500
    },
    "136517008": {
        "nombre": "PROTECTOR LUMBAR PAMPERO",
        "precio": 21000
    },
    "111108000": {
        "nombre": "CHALECO BASICO H.POLAR C/BOLS.",
        "precio": 31600
    },
    "111108001": {
        "nombre": "CAMPERA BASICA H.POLAR C/BOLS.",
        "precio": 40500
    },
    "111108002": {
        "nombre": "BUZO BÁSICO MEDIO CIERRE POLAR",
        "precio": 37000
    },
    "111109005": {
        "nombre": "CHALECO BASICO TERMICO TRK.",
        "precio": 46500
    },
    "911105999": {
        "nombre": "REMERA TÉRMICA AVANZADA N.",
        "precio": 950
    },
    "U00173503": {
        "nombre": "AURICULARES SHIELD",
        "precio": 43500
    },
    "U00173505": {
        "nombre": "PARAGUAS PG006",
        "precio": 16100
    },
    "U00173506": {
        "nombre": "PELOTA ASIA",
        "precio": 12400
    },
    "U00173991": {
        "nombre": "COOLER YUTE",
        "precio": 23900
    },
    "U00173992": {
        "nombre": "PELOTA TAHG",
        "precio": 19100
    },
    "U00173993": {
        "nombre": "BOTELLA JIM",
        "precio": 13500
    },
    "U00173994": {
        "nombre": "PARLANTE WIRELESS EARTH",
        "precio": 27100
    },
    "U00173995": {
        "nombre": "AURICULARES GALIO",
        "precio": 42500
    },
    "U00173996": {
        "nombre": "AURICULARES DEMO",
        "precio": 50000
    },
    "U00173997": {
        "nombre": "BOTELLA OLYMPIA",
        "precio": 33900
    },
    "U00173998": {
        "nombre": "CUADERNO GAZZETTE",
        "precio": 7800
    },
    "U00173999": {
        "nombre": "CUADERNO ONYX",
        "precio": 7100
    },
    "U06173157": {
        "nombre": "SILLA PASTOR",
        "precio": 108700
    },
    "U01173000": {
        "nombre": "JARRO OSLO",
        "precio": 41300
    },
    "U01173001": {
        "nombre": "COOLER CERRILLO",
        "precio": 107000
    },
    "U01173504": {
        "nombre": "JARRO CAMPSTER",
        "precio": 10800
    },
    "U01173507": {
        "nombre": "COCTAIL SET BARMAN",
        "precio": 40300
    },
    "U01545000": {
        "nombre": "Botella Hydra GO 750 ML",
        "precio": 37800
    },
    "U01545001": {
        "nombre": "Botella Hydra GO 1000 ML",
        "precio": 37800
    },
    "U01545002": {
        "nombre": "Botella Hydra GO 1200 ML",
        "precio": 37800
    },
    "U01545003": {
        "nombre": "BOTELLA ION",
        "precio": 12500
    },
    "U01545004": {
        "nombre": "BOTELLA RACKET",
        "precio": 13200
    },
    "U01545005": {
        "nombre": "BOTELLA KAI",
        "precio": 22300
    },
    "U01545006": {
        "nombre": "BOTELLA URANUS",
        "precio": 16000
    },
    "U01545007": {
        "nombre": "BOTELLA KUN",
        "precio": 30000
    },
    "U01545008": {
        "nombre": "BOTELLA FLUMEN",
        "precio": 35400
    },
    "U01545009": {
        "nombre": "BOTELLA ZEN",
        "precio": 32400
    },
    "U01545010": {
        "nombre": "BOTELLA DAIRY",
        "precio": 36700
    },
    "U01545011": {
        "nombre": "JARRO ZEIT",
        "precio": 15200
    },
    "U01545012": {
        "nombre": "JARRO TITAN",
        "precio": 43300
    },
    "U06173000": {
        "nombre": "SET DE ASADO PAMPA",
        "precio": 34500
    },
    "U06173001": {
        "nombre": "JARRO RETRO",
        "precio": 11100
    },
    "U06173002": {
        "nombre": "Jarro Daten",
        "precio": 37000
    },
    "U06173003": {
        "nombre": "JARRO EXPRESS CUP BLANCO CINTA AMARILLA",
        "precio": 2600
    },
    "U06173004": {
        "nombre": "BOTELLA RING",
        "precio": 11300
    },
    "U06173005": {
        "nombre": "BOTELLA GRID",
        "precio": 3600
    },
    "U06173006": {
        "nombre": "Jarro Mocca Blanco",
        "precio": 3000
    },
    "U06173007": {
        "nombre": "BOTELLA LIN",
        "precio": 7400
    },
    "U06173008": {
        "nombre": "Botella Circuit Plateada",
        "precio": 11500
    },
    "U06173009": {
        "nombre": "SPORT BOTTLE STREET",
        "precio": 8700
    },
    "U06173010": {
        "nombre": "Botella Island Blanca",
        "precio": 12000
    },
    "U06173011": {
        "nombre": "BOTELLA PERFORMANCE",
        "precio": 13400
    },
    "U06173012": {
        "nombre": "Botella Penguin",
        "precio": 9700
    },
    "U06173013": {
        "nombre": "SET YERBERA Y AZUCARERA",
        "precio": 12700
    },
    "U06173014": {
        "nombre": "Botella Fizzy",
        "precio": 3700
    },
    "U06173015": {
        "nombre": "JARRO PUELO",
        "precio": 19400
    },
    "U06173016": {
        "nombre": "DESPOLVILLADOR",
        "precio": 5300
    },
    "U06173017": {
        "nombre": "JARRO BAYO",
        "precio": 20700
    },
    "U06173018": {
        "nombre": "BOTELLA WAI",
        "precio": 26300
    },
    "U06173019": {
        "nombre": "MATE C/ASA",
        "precio": 8000
    },
    "U06173020": {
        "nombre": "MOCHILA INNOVA",
        "precio": 30400
    },
    "U06173021": {
        "nombre": "SET HERRAMIENTAS",
        "precio": 24190
    },
    "U06173022": {
        "nombre": "TABLA DE BAMBOO CON SET",
        "precio": 48750
    },
    "U06173023": {
        "nombre": "SET DE CARTA LOS AMIGOS",
        "precio": 11100
    },
    "U06173024": {
        "nombre": "COOLER LUNCH",
        "precio": 37500
    },
    "U06173025": {
        "nombre": "COOLER CALIFORNIA",
        "precio": 38200
    },
    "U06173026": {
        "nombre": "COOLER AURORA",
        "precio": 70100
    },
    "U06173027": {
        "nombre": "COOLER DAKOTA",
        "precio": 14300
    },
    "U06173028": {
        "nombre": "BOETELLA ACERO INOXIDABLE ATUEL",
        "precio": 0
    },
    "U06173029": {
        "nombre": "COOLER LINE",
        "precio": 6900
    },
    "U06173032": {
        "nombre": "CUADERNO ECO 2",
        "precio": 2860
    },
    "U06173033": {
        "nombre": "CUADERNO JOURNAL",
        "precio": 8700
    },
    "U06173034": {
        "nombre": "PARAGUA TAHG134",
        "precio": 17000
    },
    "U06173040": {
        "nombre": "GORRO ACRYLIC",
        "precio": 3900
    },
    "U06173043": {
        "nombre": "GORRO FLOW",
        "precio": 15900
    },
    "U06173044": {
        "nombre": "GORRA ONE",
        "precio": 4600
    },
    "U06173045": {
        "nombre": "CUADERNO ECO 1 GRIS",
        "precio": 1890
    },
    "U06173046": {
        "nombre": "BOTELLA TOMS ALUMINIO",
        "precio": 20400
    },
    "143128011": {
        "nombre": "MEDIA CAÑA INVISIBLE CON HILO DE PLATA",
        "precio": 7800
    },
    "143128012": {
        "nombre": "CAÑA INVISIBLE MICROFIBRA MOULINE",
        "precio": 900
    },
    "143128100": {
        "nombre": "MEDIA TÉRMICA TÉCNICA",
        "precio": 10200
    },
    "143128102": {
        "nombre": "MEDIA TECNICA MICROFIBRA CON TOALLA PAX3",
        "precio": 6900
    },
    "U06173047": {
        "nombre": "BOTELLA ALU",
        "precio": 12200
    },
    "U06173048": {
        "nombre": "BOTELLA ALUMINIUM",
        "precio": 3400
    },
    "U06173049": {
        "nombre": "BOTELLA OCEAN",
        "precio": 10500
    },
    "U06173050": {
        "nombre": "BOTELLA VITA",
        "precio": 7800
    },
    "U06173051": {
        "nombre": "MATERA LUNCHERA SUGAR",
        "precio": 43100
    },
    "U06173052": {
        "nombre": "MATERA LUNCHERA  TAHG",
        "precio": 29900
    },
    "U06173053": {
        "nombre": "COOLER FROZEN",
        "precio": 33000
    },
    "U06173054": {
        "nombre": "MOCHILA CIMA",
        "precio": 18000
    },
    "U06173055": {
        "nombre": "BOTELLA ATUEL DOBLE PARED ACERO INOX",
        "precio": 37000
    },
    "U06173056": {
        "nombre": "SET CUCHILLOS P/QUESO CON TABLA",
        "precio": 17280
    },
    "U06173057": {
        "nombre": "TERMO ATLAS 850ML",
        "precio": 89500
    },
    "U06173058": {
        "nombre": "BOTELLA TERMICA WAISSER",
        "precio": 44100
    },
    "U06173059": {
        "nombre": "JARRO ROAD",
        "precio": 17700
    },
    "U06173060": {
        "nombre": "JARRO TERMICO BRANCH",
        "precio": 39300
    },
    "U06173069": {
        "nombre": "BOLSO PLAYERO EASY TOTE",
        "precio": 18900
    },
    "U06173070": {
        "nombre": "SET DE VINO",
        "precio": 19200
    },
    "U06173071": {
        "nombre": "SILLA COOLER FUSION",
        "precio": 84600
    },
    "U06173072": {
        "nombre": "SILLA PLUS CAMPING",
        "precio": 79000
    },
    "U06173073": {
        "nombre": "SET MANICURE",
        "precio": 18500
    },
    "U06173074": {
        "nombre": "PORTA PASAPORTE PH",
        "precio": 42800
    },
    "U06173075": {
        "nombre": "DELANTAL FALDON",
        "precio": 10700
    },
    "U06173076": {
        "nombre": "DELANTAL PECHERA",
        "precio": 12000
    },
    "U06173077": {
        "nombre": "MOCHILA ESQUEL",
        "precio": 69000
    },
    "U06173078": {
        "nombre": "MOCHILA TRAFUL",
        "precio": 69000
    },
    "U06173079": {
        "nombre": "SILLA REPOSERA S/PATAS PALMAR",
        "precio": 59000
    },
    "U06173080": {
        "nombre": "BOLSO ESTANCO MERLO",
        "precio": 83900
    },
    "U06173081": {
        "nombre": "NECESER ESTANCO PUNA",
        "precio": 19000
    },
    "U06173082": {
        "nombre": "TOTE ESTANCO POMA",
        "precio": 85500
    },
    "U06173084": {
        "nombre": "MOCHILA BRAGADO",
        "precio": 51600
    },
    "U06173085": {
        "nombre": "MOCHILA TORDILLO",
        "precio": 119200
    },
    "U06173086": {
        "nombre": "MOCHILA ARRECIFE",
        "precio": 42000
    },
    "U06173087": {
        "nombre": "COOLER CLIFTON",
        "precio": 26300
    },
    "U06173088": {
        "nombre": "COOLER ANTARTIDA",
        "precio": 38400
    },
    "U06173091": {
        "nombre": "TERMO IVY 1.2 LTS",
        "precio": 80500
    },
    "U00106000": {
        "nombre": "PARAGUAS RAINY",
        "precio": 24000
    },
    "U00161003": {
        "nombre": "PARLANTE POLIFONIC",
        "precio": 33200
    },
    "U01173508": {
        "nombre": "JARRO BREEZE",
        "precio": 9700
    },
    "U01173509": {
        "nombre": "BOTELLA PASADENA",
        "precio": 41300
    },
    "U01173511": {
        "nombre": "JARRO HORIZON",
        "precio": 48200
    },
    "U01173512": {
        "nombre": "TERMO PRACTICO",
        "precio": 44200
    },
    "U06173177": {
        "nombre": "JARRO BREAK",
        "precio": 13800
    },
    "U41173000": {
        "nombre": "GORRO DAVIS",
        "precio": 19000
    },
    "U41173001": {
        "nombre": "GORRO TIGER",
        "precio": 21400
    },
    "U45104201": {
        "nombre": "DELANTAL GRILL DENIM",
        "precio": 32200
    },
    "U45104202": {
        "nombre": "DELANTAL BUFALO",
        "precio": 12320
    },
    "U45173133": {
        "nombre": "MOCHILA UP",
        "precio": 24000
    },
    "U45173134": {
        "nombre": "MOCHILA DIGMA",
        "precio": 12100
    },
    "U45173135": {
        "nombre": "MOCHILA DUAL",
        "precio": 42000
    },
    "U45173136": {
        "nombre": "MOCHILA HESSE",
        "precio": 34900
    },
    "U45173137": {
        "nombre": "BOLSO KOFFER",
        "precio": 34500
    },
    "U45173138": {
        "nombre": "RIÑONERA VECTOR",
        "precio": 22700
    },
    "U45173139": {
        "nombre": "SET CHICAGO",
        "precio": 35700
    },
    "U45173140": {
        "nombre": "FUNDA MATERA TAHG",
        "precio": 29900
    },
    "U45173141": {
        "nombre": "MATE SAN ROQUE",
        "precio": 31600
    },
    "U06173063": {
        "nombre": "MOCHILA OMEGA",
        "precio": 75400
    },
    "U06173064": {
        "nombre": "MOCHILA ONE GD",
        "precio": 47000
    },
    "U06173065": {
        "nombre": "MOCHILA PIODA",
        "precio": 32200
    },
    "U06173066": {
        "nombre": "MAERA CITY",
        "precio": 57900
    },
    "U06173067": {
        "nombre": "MATERA SOFIA",
        "precio": 43400
    },
    "U06173068": {
        "nombre": "MOCHILA MATERA LOURDES",
        "precio": 62200
    },
    "U06173061": {
        "nombre": "RIÑONERA FITZ",
        "precio": 30300
    },
    "U06173062": {
        "nombre": "MOCHILA WALKING L",
        "precio": 12600
    },
    "U45173142": {
        "nombre": "FUNDA YERBERA",
        "precio": 6700
    },
    "U45173143": {
        "nombre": "BOLSO DUOMO",
        "precio": 42400
    },
    "U45173149": {
        "nombre": "BOLSO EASY TOTE",
        "precio": 15900
    },
    "U45173150": {
        "nombre": "BOLSO SMASH",
        "precio": 73600
    },
    "U45173151": {
        "nombre": "MOCHILA FLIGHT",
        "precio": 143900
    },
    "U45173152": {
        "nombre": "TOTE CATEDRAL",
        "precio": 67700
    },
    "U6173018": {
        "nombre": "JARRO TERMICO MAIPO",
        "precio": 22000
    },
    "U89134023": {
        "nombre": "SET DE ASADO ROTI",
        "precio": 39600
    },
    "U89134024": {
        "nombre": "SET DE ASADO  FUEGO",
        "precio": 69100
    },
    "U89134025": {
        "nombre": "SET DE ASADO BRASA",
        "precio": 54700
    },
    "U89134026": {
        "nombre": "AURICULARES DEMO",
        "precio": 54800
    },
    "U89134027": {
        "nombre": "AURICULARES GALIO",
        "precio": 45000
    },
    "U91173003": {
        "nombre": "RESCUE MULTITOOL",
        "precio": 28900
    },
    "487161000": {
        "nombre": "TROLLEY ANDES PAMPERO",
        "precio": 24400
    },
    "443173000": {
        "nombre": "BOLSO TERMICO AURELIANA (EX MERCEDES)",
        "precio": 24320
    },
    "443173015": {
        "nombre": "BOLSO REMANSO",
        "precio": 1925
    },
    "682116000": {
        "nombre": "BOLSA SUPER NOVA",
        "precio": 7050
    },
    "682144000": {
        "nombre": "BOLSO CHAMPS",
        "precio": 58900
    },
    "682144001": {
        "nombre": "MOCHILA THELMA",
        "precio": 40600
    },
    "482173004": {
        "nombre": "TROLLEY GUESS LINE",
        "precio": 65000
    },
    "482173005": {
        "nombre": "BOLSO DENVER",
        "precio": 79900
    },
    "482173006": {
        "nombre": "MOCHILA LISA",
        "precio": 13800
    },
    "482173007": {
        "nombre": "BOLSO RUGBY",
        "precio": 51830
    },
    "441173002": {
        "nombre": "GORRO RUFINO",
        "precio": 21400
    },
    "441173003": {
        "nombre": "GORRO SANTA FE",
        "precio": 35300
    },
    "441173004": {
        "nombre": "SOMBRERO TIGRE (EX QUEQUEN)",
        "precio": 29700
    },
    "441173005": {
        "nombre": "SOMBRERO SERRANO (EX PAMPA)",
        "precio": 12260
    },
    "445173001": {
        "nombre": "PARAGUAS MANGO DE MADERA",
        "precio": 840
    },
    "445173006": {
        "nombre": "MOCHILA LANIN",
        "precio": 54860
    },
    "445173008": {
        "nombre": "LINTERNA AURA",
        "precio": 18060
    },
    "445173009": {
        "nombre": "LINTERNA MIRAMAR",
        "precio": 1830
    },
    "445173010": {
        "nombre": "ANOTADOR BIOY",
        "precio": 2920
    },
    "445173011": {
        "nombre": "SILLA PLEGABLE",
        "precio": 169000
    },
    "445173013": {
        "nombre": "COOLER FIESTA OUTDOOR (EX GLACIAR)",
        "precio": 161000
    },
    "445173014": {
        "nombre": "MOCHILA PARANA",
        "precio": 44380
    },
    "445545003": {
        "nombre": "PARAGUAS TANTI",
        "precio": 2190
    },
    "445545004": {
        "nombre": "PARAGUAS AMARILLO",
        "precio": 6540
    },
    "413108001": {
        "nombre": "CAMPERA MICROPOLAR H. DIFAPRO",
        "precio": 44890
    },
    "345173000": {
        "nombre": "JARRO TERMICO ALERCE",
        "precio": 17500
    },
    "382105200": {
        "nombre": "TOTE RAMADA",
        "precio": 123100
    },
    "382105201": {
        "nombre": "MOCHILA RAFAELA",
        "precio": 51890
    },
    "382105202": {
        "nombre": "MOCHILA BALCARCE",
        "precio": 40360
    },
    "311124000": {
        "nombre": "CAMPERA ROMPEVIENTO",
        "precio": 80800
    },
    "311128000": {
        "nombre": "CAMPERA ROMPEVIENTO FONTANA H.",
        "precio": 58900
    },
    "311108002": {
        "nombre": "CAMPERA VIEDMA",
        "precio": 67000
    },
    "480173000": {
        "nombre": "BILLETRA GAIA",
        "precio": 15800
    },
    "482173000": {
        "nombre": "MOCHILA ALFA",
        "precio": 16670
    },
    "482173001": {
        "nombre": "MOCHILA LIVE",
        "precio": 11890
    },
    "482173002": {
        "nombre": "Mochila Duomo Haka",
        "precio": 31300
    },
    "482173003": {
        "nombre": "Mochila New Step",
        "precio": 35900
    },
    "282105000": {
        "nombre": "MATERA FATIMA",
        "precio": 66800
    },
    "282105001": {
        "nombre": "Matera Ana",
        "precio": 39800
    },
    "282105002": {
        "nombre": "MATERA ARCE PU SIMIL CUERO",
        "precio": 59200
    },
    "282105003": {
        "nombre": "MATERA ROBLE PU SIMIL CARPINCHO",
        "precio": 59200
    },
    "271545000": {
        "nombre": "TERMO IGUAZU",
        "precio": 69000
    },
    "271545001": {
        "nombre": "JARRO CHALTEN",
        "precio": 13400
    },
    "271545002": {
        "nombre": "TERMO ORIGEN",
        "precio": 99000
    },
    "271545003": {
        "nombre": "MATE C/ BOMBILLA ORIGEN",
        "precio": 31600
    },
    "271545004": {
        "nombre": "Termo Ivy",
        "precio": 80500
    },
    "311108001": {
        "nombre": "CHALECO DEL PLATA POLAR H",
        "precio": 44700
    },
    "111138006": {
        "nombre": "CHOMBA TILCARA  PIQUE M/C",
        "precio": 36700
    },
    "111118100": {
        "nombre": "BUZO GOYA",
        "precio": 24600
    },
    "111118101": {
        "nombre": "BUZO TAFI",
        "precio": 32800
    },
    "111514010": {
        "nombre": "REMERA TOAY M/C",
        "precio": 10300
    },
    "111138002": {
        "nombre": "CHOMBA M/C MICROPIQUE HOMBRE",
        "precio": 5490
    },
    "21228001T": {
        "nombre": "BOMBACHA LISA HOMBRE",
        "precio": 1300
    },
    "136121501": {
        "nombre": "TRAJE DE LLUVIA (CON PANTALÓN) IMPORTADO",
        "precio": 48100
    },
    "111121002": {
        "nombre": "CAPA DE LLUVIA STORM",
        "precio": 40900
    },
    "111121005": {
        "nombre": "TRAJE DE LLUVIA ROYAL",
        "precio": 63500
    },
    "111121008": {
        "nombre": "PONCHO RESERO ROYAL",
        "precio": 72000
    },
    "111121010": {
        "nombre": "PONCHO LLUVIA LIVIANO PAMPERO",
        "precio": 17500
    },
    "111121011": {
        "nombre": "TRAJE LLUVIA PREMIUM MOTOSTYLE",
        "precio": 134000
    },
    "111122050": {
        "nombre": "REMERA BASICA ESCOTE REDONDO CORPORATIVA",
        "precio": 22500
    },
    "111122051": {
        "nombre": "POLO PIQUÉ CORPORATIVA M/C",
        "precio": 32500
    },
    "411118004": {
        "nombre": "CAMPERA CON CAPUCHA EL DIQUECITO",
        "precio": 1800
    },
    "411118005": {
        "nombre": "BUZO OCAMPO",
        "precio": 68000
    },
    "411118006": {
        "nombre": "CAMPERA BRANCA",
        "precio": 68700
    },
    "411118007": {
        "nombre": "CAMPERA MUÑOZ",
        "precio": 89000
    },
    "411118009": {
        "nombre": "CHALECO SELVA",
        "precio": 8760
    },
    "411118010": {
        "nombre": "BUZO VENCEJOS",
        "precio": 80000
    },
    "411118011": {
        "nombre": "CAMPERA BURGO",
        "precio": 108000
    },
    "411118012": {
        "nombre": "CAMPERA HALCONES",
        "precio": 9960
    },
    "411118013": {
        "nombre": "CAMPERA JILGUERO",
        "precio": 66300
    },
    "411122003": {
        "nombre": "POLO CRIOLLA",
        "precio": 725
    },
    "411122004": {
        "nombre": "REMERA LANTANA M.C. CON RECORTES",
        "precio": 360
    },
    "411122005": {
        "nombre": "REMERA CARDA M/L C/CARTERA ESC. RED.",
        "precio": 450
    },
    "411122006": {
        "nombre": "REMERA M/L BASICA",
        "precio": 2200
    },
    "411106103": {
        "nombre": "CHALECO LAGO MELIQUINA",
        "precio": 75000
    },
    "411108011": {
        "nombre": "CAMPERA LAGO TROMEN",
        "precio": 67700
    },
    "411106116": {
        "nombre": "BUZO CALAFATE",
        "precio": 143000
    },
    "411108012": {
        "nombre": "CHALECO FUTALAUFQUEN",
        "precio": 64600
    },
    "411108014": {
        "nombre": "CAMPERA CIPRES",
        "precio": 78000
    },
    "411108015": {
        "nombre": "CAMPERA CAIBO",
        "precio": 79990
    },
    "411108006": {
        "nombre": "BUZO MEDIO CIERRE CUELLO TEJIDO",
        "precio": 1060
    },
    "411108008": {
        "nombre": "BUZO PAMPERO POLAR",
        "precio": 46600
    },
    "411122001": {
        "nombre": "POLO RAYADA CHARCAO",
        "precio": 825
    },
    "411122031": {
        "nombre": "REMERA BASICA ESC REDONDO ML",
        "precio": 33500
    },
    "411108013": {
        "nombre": "BUZO LENGA",
        "precio": 54500
    },
    "411122032": {
        "nombre": "REMERA BASICA M.C. EL MORO",
        "precio": 640
    },
    "411122033": {
        "nombre": "REMERA M.C. CON RECORTES EST. EL NARANJO",
        "precio": 1990
    },
    "411122036": {
        "nombre": "REMERA M.L COMBINADA EL RODEO",
        "precio": 4880
    },
    "411122038": {
        "nombre": "POLO ESTAMPA RAYAS EL SOMBRERITO",
        "precio": 1300
    },
    "411122040": {
        "nombre": "REMERA RAYADA PICÚN LEUFÚ",
        "precio": 1800
    },
    "411122041": {
        "nombre": "REMERA TOTORAL",
        "precio": 1800
    },
    "411122042": {
        "nombre": "REMERA YATASTO",
        "precio": 4590
    },
    "411122043": {
        "nombre": "REMERA POMPEYA",
        "precio": 1800
    },
    "411122044": {
        "nombre": "REMERA QUEBRACHAL",
        "precio": 1800
    },
    "411122045": {
        "nombre": "REMERA TACOPAMPA",
        "precio": 1800
    },
    "411122046": {
        "nombre": "REMERA CHACHARRAMENDI",
        "precio": 1800
    },
    "411122047": {
        "nombre": "REMERA CUYUPAN",
        "precio": 1800
    },
    "411122048": {
        "nombre": "POLO BERMEJO",
        "precio": 1800
    },
    "411122050": {
        "nombre": "POLO ICHIGUALASTO",
        "precio": 2580
    },
    "411122051": {
        "nombre": "POLO DESPEÑADEROS",
        "precio": 2340
    },
    "411122089": {
        "nombre": "POLO MC CUELLO ROMBOS",
        "precio": 14000
    },
    "411122090": {
        "nombre": "POLO TITINA RAYADA CUELLO TEJIDO",
        "precio": 4760
    },
    "411122091": {
        "nombre": "POLO CONCEPCION -RAYADA CUELLO MIL RAYAS",
        "precio": 4760
    },
    "411122092": {
        "nombre": "REMERA BOREAL MANGA CORTA CON RECORTE",
        "precio": 2620
    },
    "411122093": {
        "nombre": "REMERA YATASTO - JERSEY RAYADO",
        "precio": 11900
    },
    "411122094": {
        "nombre": "REMERA RIVADAVIAV22",
        "precio": 11900
    },
    "411122096": {
        "nombre": "POLO SABIN CUELLO CONTRATONO",
        "precio": 9480
    },
    "411122097": {
        "nombre": "POLO ICHIGUALASTOV22",
        "precio": 5500
    },
    "411122098": {
        "nombre": "POLO PLUMERILLO RAYADO FINO",
        "precio": 17520
    },
    "411122099": {
        "nombre": "POLO ALMAFUERTE RAYADO ANCHO",
        "precio": 8160
    },
    "411122100": {
        "nombre": "REMERA HERNANDOV22",
        "precio": 6500
    },
    "411122060": {
        "nombre": "REMERA PIGUE CON CARTERA Y BOTONES",
        "precio": 29900
    },
    "411122061": {
        "nombre": "POLO SAAVEDRA CON PUÑOS Y CUELLO TEJIDO",
        "precio": 13680
    },
    "411122062": {
        "nombre": "POLO LOBERIA CON BOLSILLO",
        "precio": 2530
    },
    "411122063": {
        "nombre": "REMERA RIVADAVIA",
        "precio": 2330
    },
    "411122064": {
        "nombre": "POLO LUGONES PIQUÉ CON VIVOS",
        "precio": 3480
    },
    "411122065": {
        "nombre": "POLO QUINTANA JERSEY COMBINADA",
        "precio": 13680
    },
    "411122066": {
        "nombre": "REMERA ESTAMPA 1",
        "precio": 2380
    },
    "411122067": {
        "nombre": "REMERA ESTAMPA 2",
        "precio": 2380
    },
    "411122068": {
        "nombre": "REMERA ESTAMPA 3",
        "precio": 2380
    },
    "411122193": {
        "nombre": "REMERA MC RIO MALARGUE",
        "precio": 26200
    },
    "411122052": {
        "nombre": "POLO MANANTIALES",
        "precio": 2730
    },
    "411122054": {
        "nombre": "REMERA COLOMÉ",
        "precio": 990
    },
    "411122055": {
        "nombre": "POLO BASICA PIQUÉ",
        "precio": 5990
    },
    "411122083": {
        "nombre": "REMERA  MC YATASTO",
        "precio": 10500
    },
    "411122085": {
        "nombre": "REMERA MANGA LARGA CON RECORTE",
        "precio": 2840
    },
    "411122086": {
        "nombre": "POLO CACERES MC CUELLO C/3 RAYAS",
        "precio": 17520
    },
    "411122087": {
        "nombre": "POLO MC CUELLO RAYAS CRUZADAS",
        "precio": 5990
    },
    "411122088": {
        "nombre": "POLO LUGONES MANGA LARGA",
        "precio": 18900
    },
    "411122037": {
        "nombre": "REMERA M.L. COMBINADA EL CARAMELO",
        "precio": 35900
    },
    "411122194": {
        "nombre": "REMERA MC RIO MOCORETA",
        "precio": 29800
    },
    "411122195": {
        "nombre": "REMERA MC RIO SAN JAVIER",
        "precio": 27200
    },
    "411122196": {
        "nombre": "REMERA ML RIO COIG",
        "precio": 30700
    },
    "411122197": {
        "nombre": "REMERA MANGA LARGA RIO SAN ANTONIO",
        "precio": 38200
    },
    "411122198": {
        "nombre": "POLO MC RIO HUA-HUM",
        "precio": 39990
    },
    "411122199": {
        "nombre": "POLO MC RIO SUQUIA",
        "precio": 36900
    },
    "411122200": {
        "nombre": "POLO MC RIO ABAUCAN",
        "precio": 45600
    },
    "411122168": {
        "nombre": "REMERA CHAPELCO",
        "precio": 25300
    },
    "411122169": {
        "nombre": "REMERA PEHUENIA",
        "precio": 28800
    },
    "411122170": {
        "nombre": "REMERA CERRO CASTOR",
        "precio": 28500
    },
    "411122171": {
        "nombre": "REMERA LAS LEÑAS",
        "precio": 21300
    },
    "411122172": {
        "nombre": "REMERA COPAHUE",
        "precio": 18300
    },
    "411122173": {
        "nombre": "REMERA CERRO BAYO",
        "precio": 33600
    },
    "411122174": {
        "nombre": "REMERA LA HOYA",
        "precio": 29700
    },
    "411122201": {
        "nombre": "POLO ML LAGO QUILLEN",
        "precio": 43200
    },
    "411122175": {
        "nombre": "REMERA POLO FIAMBALA",
        "precio": 49000
    },
    "411122176": {
        "nombre": "REMERA POLO URITORCO",
        "precio": 51000
    },
    "411122177": {
        "nombre": "REMERA POLO LOS MOLLES",
        "precio": 29400
    },
    "411122178": {
        "nombre": "REMERA POLO MONTE LEON",
        "precio": 41500
    },
    "411122179": {
        "nombre": "REMERA POLO LAGUNA BLANCA",
        "precio": 40800
    },
    "411122180": {
        "nombre": "REMERA CAVIAHUE",
        "precio": 18300
    },
    "411122212": {
        "nombre": "CAMPERA FRESNO",
        "precio": 91500
    },
    "411122142": {
        "nombre": "REMERA YATASTO",
        "precio": 4590
    },
    "411122216": {
        "nombre": "REMERA ALERCE",
        "precio": 45500
    },
    "411122217": {
        "nombre": "REMERA GUATAMBU",
        "precio": 38000
    },
    "411122219": {
        "nombre": "REMERA CURUPI",
        "precio": 36000
    },
    "411122220": {
        "nombre": "REMERA TIMBO",
        "precio": 35000
    },
    "411122221": {
        "nombre": "REMERA LAPACHO",
        "precio": 32000
    },
    "411122222": {
        "nombre": "REMERA NOGAL",
        "precio": 32000
    },
    "411122223": {
        "nombre": "REMERA SAUCE",
        "precio": 30500
    },
    "411122224": {
        "nombre": "REMERA QUEBRACHO",
        "precio": 31600
    },
    "411122225": {
        "nombre": "REMERA ALGARROBO",
        "precio": 39990
    },
    "411138002": {
        "nombre": "POLO BASICA ÑANGAPIRI",
        "precio": 1015
    },
    "411138005": {
        "nombre": "POLO MANGA CORTA CERRITO",
        "precio": 1162
    },
    "411138006": {
        "nombre": "POLO MC SERRANO",
        "precio": 2530
    },
    "411138008": {
        "nombre": "REMERA POLO BASICA",
        "precio": 51500
    },
    "411138009": {
        "nombre": "POLO BASICA PIQUÉ MANGA LARGA",
        "precio": 56500
    },
    "411138010": {
        "nombre": "POLO CARAU",
        "precio": 6770
    },
    "411138013": {
        "nombre": "POLO PALMAR GRANDE",
        "precio": 37500
    },
    "411138014": {
        "nombre": "REMERA POLO PIAMONTE",
        "precio": 51000
    },
    "411138015": {
        "nombre": "POLO MC LAGO CARDIEL",
        "precio": 45900
    },
    "411138016": {
        "nombre": "POLO LAGO GUTIERREZ",
        "precio": 18960
    },
    "411138017": {
        "nombre": "REMERA RIO NEGRO",
        "precio": 45600
    },
    "411138018": {
        "nombre": "POLO MAGALLANES",
        "precio": 49200
    },
    "411138019": {
        "nombre": "POLO TINOGASTA",
        "precio": 49200
    },
    "411138020": {
        "nombre": "POLO ANTOFAGASTA",
        "precio": 49200
    },
    "411138021": {
        "nombre": "POLO LAS PIRQUITAS",
        "precio": 46800
    },
    "411138022": {
        "nombre": "POLO CALDEN",
        "precio": 53500
    },
    "411138023": {
        "nombre": "POLO PEHUEN",
        "precio": 53000
    },
    "411138024": {
        "nombre": "POLO ÑIRE",
        "precio": 49990
    },
    "411138025": {
        "nombre": "REMERA CUESTA DE MIRANDA",
        "precio": 48000
    },
    "411138026": {
        "nombre": "POLO LOS HORNILLOS",
        "precio": 52500
    },
    "411138027": {
        "nombre": "POLO YACANTO",
        "precio": 52500
    },
    "411138028": {
        "nombre": "POLO PIEDRAS MORAS",
        "precio": 54000
    },
    "411139002": {
        "nombre": "CAMPERA  CURUPAYTIV",
        "precio": 78000
    },
    "411139003": {
        "nombre": "BUZO FAMAILLA",
        "precio": 63500
    },
    "411139004": {
        "nombre": "POLO PAYOGASTA",
        "precio": 81500
    },
    "411122242": {
        "nombre": "REMERA GOLFO SAN MATIAS",
        "precio": 49990
    },
    "411140004": {
        "nombre": "REMERA BASICA ESCOTE REDONDO",
        "precio": 31500
    },
    "411140014": {
        "nombre": "REMERA C/BOLSILLO EL RECREO",
        "precio": 415
    },
    "411140015": {
        "nombre": "REMERA COMBINADA C/BOLSILLO EL TRIUNFO",
        "precio": 2200
    },
    "411140016": {
        "nombre": "REMERA M/C ESTAMPADA GLACIAR",
        "precio": 500
    },
    "411140017": {
        "nombre": "REMERA M/C ESTAMPADA CORTEZA",
        "precio": 460
    },
    "411140019": {
        "nombre": "POLO RAYADA ALGODONILLO M/L",
        "precio": 500
    },
    "411140020": {
        "nombre": "REMERA SAN JOSE MANGA CORTA",
        "precio": 3090
    },
    "411140021": {
        "nombre": "POLO COLON",
        "precio": 1200
    },
    "411140022": {
        "nombre": "REMERA MANGA CORTA FEDERACION",
        "precio": 575
    },
    "411140023": {
        "nombre": "REMERA MANGA CORTA CEIBAS",
        "precio": 830
    },
    "411140025": {
        "nombre": "REMERA RAYADA FEBRE",
        "precio": 830
    },
    "411140027": {
        "nombre": "REMERA ESTAMPADA RAICES",
        "precio": 620
    },
    "411140029": {
        "nombre": "REMERA ESTAMPADA EL SOLAR",
        "precio": 830
    },
    "411140030": {
        "nombre": "REMERA ESTAMPADA FEDERAL",
        "precio": 830
    },
    "411140031": {
        "nombre": "REMERA ESTAMPADA GALARZA",
        "precio": 1990
    },
    "411140100": {
        "nombre": "REMERA BASICA ESCOTE EN V",
        "precio": 31500
    },
    "411140101": {
        "nombre": "REMERA M/C COSQUIN",
        "precio": 1670
    },
    "411140102": {
        "nombre": "REMERA M/C DEAN FUNES",
        "precio": 1200
    },
    "411140103": {
        "nombre": "REMERA ML PICHANAS",
        "precio": 1420
    },
    "411140104": {
        "nombre": "REMERA POLO H. M/C C/BOLS",
        "precio": 1700
    },
    "411140105": {
        "nombre": "REMERA BELL VILLE",
        "precio": 2620
    },
    "411140107": {
        "nombre": "REMERA M/L SAMPACHO",
        "precio": 6280
    },
    "411140108": {
        "nombre": "POLO ML LA CUMBRE",
        "precio": 16900
    },
    "411140109": {
        "nombre": "POLO ML MACACHIN",
        "precio": 6280
    },
    "411140110": {
        "nombre": "POLO ML TRENQUE LAUQUEN",
        "precio": 16900
    },
    "411140111": {
        "nombre": "POLO MC RIO GRANDE",
        "precio": 2160
    },
    "411140112": {
        "nombre": "POLO ML IRIARTE",
        "precio": 16900
    },
    "411140113": {
        "nombre": "REMERA FIGUEROA ESC RED REC LATERAL",
        "precio": 8900
    },
    "411140114": {
        "nombre": "REMERA GOYA COMBINADA",
        "precio": 6150
    },
    "411140115": {
        "nombre": "REMERA PIGUEV22",
        "precio": 11900
    },
    "411140116": {
        "nombre": "POLO JUNIN CARTERA CRUZADA",
        "precio": 17520
    },
    "411140117": {
        "nombre": "POLO AZOPARDO CON VIVOS",
        "precio": 5990
    },
    "411140118": {
        "nombre": "POLO NAVARRO COMBINADA",
        "precio": 17520
    },
    "411140119": {
        "nombre": "POLO CARRASCO CUELLO TEJIDO",
        "precio": 17520
    },
    "411553001": {
        "nombre": "CAMPERA BERBERIS CON CAPUCHA",
        "precio": 2650
    },
    "411553002": {
        "nombre": "BUZO MACACHIN RUSTICO",
        "precio": 890
    },
    "411554000": {
        "nombre": "REMERA CUELLO REDONDO M/C CORRAL",
        "precio": 800
    },
    "411530000": {
        "nombre": "REMERA RIO HONDO",
        "precio": 26300
    },
    "411530001": {
        "nombre": "REMERA TALACASTO",
        "precio": 27400
    },
    "412106006": {
        "nombre": "CARGO BAGUALES RIPSTOP",
        "precio": 45300
    },
    "411122106": {
        "nombre": "POLO MEDRANO PIQUE CUELLO RAYAS",
        "precio": 5990
    },
    "411139007": {
        "nombre": "CAMPERA CORMORANES",
        "precio": 91000
    },
    "411139008": {
        "nombre": "PANTALÓN URITORCO",
        "precio": 79000
    },
    "411140130": {
        "nombre": "REMERA YATASTO I22",
        "precio": 12900
    },
    "411140131": {
        "nombre": "REMERA CHUÑAS",
        "precio": 27900
    },
    "411140132": {
        "nombre": "REMERA HORNERO",
        "precio": 11500
    },
    "411140133": {
        "nombre": "REMERA TORDO",
        "precio": 29900
    },
    "411140134": {
        "nombre": "REMERA ANINGAS",
        "precio": 11500
    },
    "411140135": {
        "nombre": "REMERA CORMORANES",
        "precio": 8990
    },
    "411140136": {
        "nombre": "REMERA ÑANDUES",
        "precio": 5040
    },
    "411140137": {
        "nombre": "REMERA PELICANOS",
        "precio": 4880
    },
    "411140138": {
        "nombre": "REMERA JOTES",
        "precio": 5860
    },
    "411140139": {
        "nombre": "REMERA CONDORES",
        "precio": 9840
    },
    "411140140": {
        "nombre": "POLO AGUILAS",
        "precio": 6220
    },
    "411140142": {
        "nombre": "REMERA POLO JACANAS",
        "precio": 25990
    },
    "411140143": {
        "nombre": "POLO PLAYEROS",
        "precio": 17520
    },
    "411140145": {
        "nombre": "POLO GAVILANES",
        "precio": 6820
    },
    "411140146": {
        "nombre": "POLO GAVIOTINES",
        "precio": 8300
    },
    "411140106": {
        "nombre": "REMERA M/C HERNANDO",
        "precio": 25800
    },
    "411168103": {
        "nombre": "REMERA LAGO PUELO",
        "precio": 38400
    },
    "411168104": {
        "nombre": "REMERA ARRAYÁN",
        "precio": 42000
    },
    "411168105": {
        "nombre": "REMERA CHAÑAR",
        "precio": 46000
    },
    "411168106": {
        "nombre": "POLO JACARANDÁ",
        "precio": 51000
    },
    "411501000": {
        "nombre": "REMERA MOLLE H RAYADA  C/O M/C",
        "precio": 440
    },
    "411501001": {
        "nombre": "CAMPERA NENEO H CON CIERRE",
        "precio": 4500
    },
    "411501002": {
        "nombre": "CAMPERA PLUMERILLO H COMBINADA",
        "precio": 850
    },
    "411501003": {
        "nombre": "REMERA CURUPÍ H C/O ML CON BOLSILLO",
        "precio": 4500
    },
    "411501006": {
        "nombre": "REMERA M/L BASICA",
        "precio": 360
    },
    "411501007": {
        "nombre": "REMERA CHILCA H MC. BOLSILLO CONTRATONO",
        "precio": 370
    },
    "411501009": {
        "nombre": "REMERA POLO HOMBRE M.C. ESTAMPA RAYA",
        "precio": 640
    },
    "411501012": {
        "nombre": "CAMPERA BERBERIS",
        "precio": 2650
    },
    "411501013": {
        "nombre": "POLO ALISO M.C. BOLSILLO OJAL",
        "precio": 2500
    },
    "411501014": {
        "nombre": "POLO BITONO M/C ARATA",
        "precio": 690
    },
    "411501016": {
        "nombre": "REMERA COMBINADA LOS TOROS",
        "precio": 460
    },
    "411501018": {
        "nombre": "REMERA COMBIMADA PUELEN",
        "precio": 830
    },
    "411501022": {
        "nombre": "REMERA C/BOLSILLO EL RECREO",
        "precio": 415
    },
    "411501024": {
        "nombre": "REMERA BASICA M.C. EL MORO",
        "precio": 830
    },
    "411501027": {
        "nombre": "REMERA COMBINADA EL CADILLAL",
        "precio": 830
    },
    "411501028": {
        "nombre": "BUZO NOTRO",
        "precio": 81500
    },
    "411514002": {
        "nombre": "POLO MANANTIALES PIQUE BITONO",
        "precio": 1530
    },
    "411514003": {
        "nombre": "CAMPERA CURUPAYTÍ",
        "precio": 8550
    },
    "411514004": {
        "nombre": "CAMPERA TRAPICHE",
        "precio": 79990
    },
    "411514005": {
        "nombre": "BUZO FAMAILLA",
        "precio": 15900
    },
    "411140148": {
        "nombre": "REMERA PERITO MORENO",
        "precio": 30000
    },
    "411140149": {
        "nombre": "REMERA PINO HACHADO",
        "precio": 28900
    },
    "411140185": {
        "nombre": "REMERA SANTA FE",
        "precio": 29990
    },
    "411140187": {
        "nombre": "REMERA CORDOBA",
        "precio": 32400
    },
    "411140186": {
        "nombre": "REMERA BUENOS AIRES",
        "precio": 29990
    },
    "411140189": {
        "nombre": "REMERA CORRIENTES",
        "precio": 33600
    },
    "411140190": {
        "nombre": "REMERA SANTA CRUZ",
        "precio": 32400
    },
    "411140191": {
        "nombre": "REMERA USHUAIA",
        "precio": 37200
    },
    "411140192": {
        "nombre": "POLO CALINGASTA",
        "precio": 42000
    },
    "411140193": {
        "nombre": "POLO PUENTE DEL INCA",
        "precio": 41500
    },
    "411140194": {
        "nombre": "POLO EL SHINCAL",
        "precio": 45600
    },
    "411140195": {
        "nombre": "POLO CACHEUTA",
        "precio": 45600
    },
    "411140196": {
        "nombre": "POLO LA CHILCA",
        "precio": 51800
    },
    "411140197": {
        "nombre": "REMERA SECLENTAS",
        "precio": 44900
    },
    "411140198": {
        "nombre": "REMERA VALLE DE UCO",
        "precio": 43900
    },
    "411140199": {
        "nombre": "REMERA BARILOCHE",
        "precio": 29300
    },
    "411140201": {
        "nombre": "POLO MAITEN",
        "precio": 48500
    },
    "411140202": {
        "nombre": "POLO IBERÁ PITÁ",
        "precio": 49900
    },
    "411140203": {
        "nombre": "POLO RAULÍ",
        "precio": 65000
    },
    "411140204": {
        "nombre": "POLO PETIRIBI",
        "precio": 45000
    },
    "411140200": {
        "nombre": "POLO COIGÜE",
        "precio": 45500
    },
    "411140205": {
        "nombre": "REMERA MOLINOS",
        "precio": 33500
    },
    "411140206": {
        "nombre": "REMERA ANGATASCO",
        "precio": 33500
    },
    "411140207": {
        "nombre": "REMERA CUESTA DEL OBISPO",
        "precio": 35000
    },
    "411140208": {
        "nombre": "REMERA VALLE DE LERMA",
        "precio": 34500
    },
    "411140209": {
        "nombre": "REMERA ROSARIO DEL TALA",
        "precio": 34500
    },
    "411140211": {
        "nombre": "REMERA CHICOANA",
        "precio": 34500
    },
    "411140212": {
        "nombre": "REMERA LOS ANDES",
        "precio": 39500
    },
    "411140213": {
        "nombre": "REMERA SIETE LAGOS",
        "precio": 32500
    },
    "411140214": {
        "nombre": "REMERA RUTA 40",
        "precio": 36000
    },
    "411140215": {
        "nombre": "REMERA ARGENTINA",
        "precio": 32500
    },
    "411140216": {
        "nombre": "REMERA COLOMÉ",
        "precio": 45000
    },
    "411140217": {
        "nombre": "POLO GLACIAR MARTIAL",
        "precio": 38000
    },
    "411140218": {
        "nombre": "POLO VOLCÁN DOMUYO",
        "precio": 44500
    },
    "411140219": {
        "nombre": "POLO PUNTA TOMBO",
        "precio": 45000
    },
    "411140220": {
        "nombre": "POLO CHOS MALAL",
        "precio": 46000
    },
    "411140221": {
        "nombre": "POLO GUACHIPAS",
        "precio": 52000
    },
    "411140222": {
        "nombre": "REMERA LONCOPUÉ",
        "precio": 39990
    },
    "411140223": {
        "nombre": "REMERA GOLFO SAN JOSÉ",
        "precio": 42500
    },
    "411141000": {
        "nombre": "BUZO 1/2 CIERRE POLAR EL BOQUERON",
        "precio": 62000
    },
    "411141001": {
        "nombre": "CAMPERA POLAR EL COYUNCO",
        "precio": 67000
    },
    "411141003": {
        "nombre": "CAMPERA CERRO CASTOR",
        "precio": 5490
    },
    "411142173": {
        "nombre": "POLO MC LAGO CORRENTOSO",
        "precio": 17520
    },
    "411168003": {
        "nombre": "REMERA LAGO PUELO M/C",
        "precio": 31700
    },
    "411141002": {
        "nombre": "CHALECO SELVA",
        "precio": 4540
    },
    "411168100": {
        "nombre": "REMERA SAN NICOLAS MANGA RANGLAN",
        "precio": 34500
    },
    "411168101": {
        "nombre": "REMERA PATOS",
        "precio": 29000
    },
    "452167000": {
        "nombre": "BOXER",
        "precio": 24000
    },
    "511122005": {
        "nombre": "REMERA MANGA CORTA CORPORATIVA",
        "precio": 19000
    },
    "511122006": {
        "nombre": "CHOMBA MANGA CORTA CORPORATIVA",
        "precio": 25800
    },
    "811106010": {
        "nombre": "REMERA CON RECORTES LA VIOLETA",
        "precio": 1800
    },
    "811106037": {
        "nombre": "BUZO TARTAGAL",
        "precio": 4290
    },
    "811106038": {
        "nombre": "SACO LAGO CACHI",
        "precio": 5590
    },
    "811106068": {
        "nombre": "VESTIDO ESTCACION LANILLA",
        "precio": 5430
    },
    "811106075": {
        "nombre": "REMERON PILAV22",
        "precio": 7900
    },
    "811106127": {
        "nombre": "POLO NATURAL",
        "precio": 6230
    },
    "811106128": {
        "nombre": "REMERA COLIBRI",
        "precio": 7190
    },
    "811106129": {
        "nombre": "REMERA BENTEVEO",
        "precio": 13000
    },
    "811106130": {
        "nombre": "REMERA CALANDRIA",
        "precio": 12000
    },
    "811106131": {
        "nombre": "REMERA SIRI",
        "precio": 16400
    },
    "811106132": {
        "nombre": "REMERON FLORENTINO",
        "precio": 9990
    },
    "811106133": {
        "nombre": "REMERON ELENA I22",
        "precio": 9990
    },
    "811106134": {
        "nombre": "POLERON PICAZO",
        "precio": 9580
    },
    "811106135": {
        "nombre": "BUZO CISNE",
        "precio": 35000
    },
    "811106136": {
        "nombre": "SACO CACHI I22",
        "precio": 8790
    },
    "811106137": {
        "nombre": "POLERON CRESPO I22",
        "precio": 8380
    },
    "811106138": {
        "nombre": "VESTIDO AUSTRAL",
        "precio": 11690
    },
    "811106139": {
        "nombre": "CAMPERA PETRELES",
        "precio": 36000
    },
    "811106140": {
        "nombre": "SACO FEDERACION I22",
        "precio": 15580
    },
    "811106141": {
        "nombre": "SACON TILCARA I22",
        "precio": 115000
    },
    "811106142": {
        "nombre": "PONCHO BRUGO I22",
        "precio": 94500
    },
    "811106172": {
        "nombre": "REMERON PAMPA GRANDE",
        "precio": 9990
    },
    "811106173": {
        "nombre": "REMERA PUNILLA",
        "precio": 7180
    },
    "811106174": {
        "nombre": "REMERA PRINGLES",
        "precio": 9960
    },
    "811106175": {
        "nombre": "REMERA PROVIDENCIA",
        "precio": 10900
    },
    "811106177": {
        "nombre": "REMERA POSADAS",
        "precio": 42900
    },
    "811106176": {
        "nombre": "REMERA POMPEYA",
        "precio": 25000
    },
    "811106178": {
        "nombre": "REMERA PARANACITO",
        "precio": 28000
    },
    "811106179": {
        "nombre": "TUNICA PINAMAR",
        "precio": 12580
    },
    "811106182": {
        "nombre": "MUSCULOSA PERGAMINO",
        "precio": 6720
    },
    "811106183": {
        "nombre": "REMERA PUELCHES",
        "precio": 14280
    },
    "811106184": {
        "nombre": "SUDADERA PICHIMAHUIDA",
        "precio": 11760
    },
    "811106059": {
        "nombre": "POLERON MARIA GRANDE -AMPLIO",
        "precio": 6490
    },
    "811106060": {
        "nombre": "POLERON CRSPO -SIN MANGAS",
        "precio": 7710
    },
    "811106061": {
        "nombre": "REMERON ELISA- ESCOTE V AMPLIO",
        "precio": 2630
    },
    "811106062": {
        "nombre": "BUZO VILLA MARIA",
        "precio": 8990
    },
    "811106063": {
        "nombre": "SACO FEDERACION CORTO",
        "precio": 6940
    },
    "811106064": {
        "nombre": "SACO IBICUY LARGO",
        "precio": 11900
    },
    "811106230": {
        "nombre": "PONCHO RIO URUGUAY",
        "precio": 29990
    },
    "811106241": {
        "nombre": "REMERA SALIN",
        "precio": 31750
    },
    "811106242": {
        "nombre": "REMERA SIETE COLORES",
        "precio": 41400
    },
    "811106243": {
        "nombre": "MUSCULOSA ARACAR",
        "precio": 25990
    },
    "811106244": {
        "nombre": "REMERA MAIPO",
        "precio": 29000
    },
    "811106180": {
        "nombre": "SACO PIPINAS",
        "precio": 14160
    },
    "811106181": {
        "nombre": "PONCHO PARANA",
        "precio": 45000
    },
    "811106245": {
        "nombre": "REMERA CERRO ACAY",
        "precio": 29990
    },
    "811106246": {
        "nombre": "REMERA PISSIS",
        "precio": 30900
    },
    "811106247": {
        "nombre": "REMERA CHAMPAQUI",
        "precio": 26300
    },
    "811106248": {
        "nombre": "VESTIDO VALLECITO",
        "precio": 64000
    },
    "811106251": {
        "nombre": "CAMISA CAMPESTRE POPLIN CREPE",
        "precio": 32900
    },
    "811106212": {
        "nombre": "REMERA RIO TUNUYAN",
        "precio": 9990
    },
    "811106249": {
        "nombre": "VESTIDO PENITENTES",
        "precio": 56900
    },
    "811106250": {
        "nombre": "VESTIDO SAN FRANCISCO",
        "precio": 52400
    },
    "811106213": {
        "nombre": "REMERA RIO ATUEL",
        "precio": 11280
    },
    "811106214": {
        "nombre": "REMERA RIO JACHAL",
        "precio": 9120
    },
    "811106215": {
        "nombre": "POLO RIO TUPUNGATO",
        "precio": 45500
    },
    "811106217": {
        "nombre": "MEDIA POLERA RIO QUEQUEN",
        "precio": 16320
    },
    "811106218": {
        "nombre": "MEDIA POLERA RIO MINA CLAVERO",
        "precio": 16560
    },
    "811106219": {
        "nombre": "BUZO RIO IGUAZU",
        "precio": 36900
    },
    "811108050": {
        "nombre": "POLAR UBAJAY",
        "precio": 3340
    },
    "811118001": {
        "nombre": "CAMPERA LA CAMILA",
        "precio": 8430
    },
    "811118003": {
        "nombre": "CAMPERA ORAN",
        "precio": 87500
    },
    "811118004": {
        "nombre": "SACON TILCARA",
        "precio": 80000
    },
    "811118005": {
        "nombre": "CAMPERA PALMAR CUELLO ALTO",
        "precio": 3990
    },
    "811118006": {
        "nombre": "CAMPERA PALMAR",
        "precio": 54600
    },
    "811118007": {
        "nombre": "SACO IBICUY I22",
        "precio": 47760
    },
    "811118008": {
        "nombre": "BUZO RIO SAMBOROMBON",
        "precio": 27120
    },
    "811122003": {
        "nombre": "REMERA LAGO",
        "precio": 270
    },
    "811106268": {
        "nombre": "CAMPERA RIO LAPATAIA",
        "precio": 88600
    },
    "811106274": {
        "nombre": "REMERA MIRASOL",
        "precio": 45000
    },
    "811106275": {
        "nombre": "POLERA PLUMERILLO",
        "precio": 45000
    },
    "811106276": {
        "nombre": "REMERA ACAIA BLANCA",
        "precio": 65500
    },
    "811106277": {
        "nombre": "POLO LLATEN",
        "precio": 57000
    },
    "412514000": {
        "nombre": "PANTALÓN JARAMILLO",
        "precio": 62000
    },
    "412525000": {
        "nombre": "BOXER MANZANO ELASTICO MARCARIO",
        "precio": 800
    },
    "412118003": {
        "nombre": "PANTALÓN CON PUÑO EL FORTIN",
        "precio": 1360
    },
    "412118004": {
        "nombre": "PANTALÓN DURAND",
        "precio": 49700
    },
    "412118008": {
        "nombre": "PANTALÓN DURAND SIN PUÑO",
        "precio": 49700
    },
    "412422003": {
        "nombre": "SLIP BLANQUILLO ELÁSTICO MARCARIO",
        "precio": 3990
    },
    "412139003": {
        "nombre": "SHORT CASTILLO RUSTICO",
        "precio": 2210
    },
    "412139004": {
        "nombre": "SHORT CASTILLO",
        "precio": 47500
    },
    "412139005": {
        "nombre": "PANTALÓN NERVO RECTO",
        "precio": 62000
    },
    "412122206": {
        "nombre": "PANTALÓN CALDEN RECTO",
        "precio": 75000
    },
    "412122207": {
        "nombre": "PANTALÓN CALDEN CON PUÑO",
        "precio": 75000
    },
    "811532000": {
        "nombre": "REMERA AMAPOLA M M/C C/O",
        "precio": 350
    },
    "811532002": {
        "nombre": "REMERA CEREZO M ESC.REDONDO M.L.",
        "precio": 575
    },
    "811517000": {
        "nombre": "BUZO RIO SENGUER",
        "precio": 54400
    },
    "811106220": {
        "nombre": "CHALECO RIO GUALEGUAY",
        "precio": 22080
    },
    "811106221": {
        "nombre": "SACO RIO CHUBUT",
        "precio": 56160
    },
    "811106278": {
        "nombre": "POLERON AROMO",
        "precio": 68000
    },
    "811106279": {
        "nombre": "POLERON RETAMA",
        "precio": 98000
    },
    "811525009": {
        "nombre": "POLO BASICA LA CALETA",
        "precio": 8790
    },
    "811525010": {
        "nombre": "POLO NATIVA SIN MANGAS",
        "precio": 7990
    },
    "811525011": {
        "nombre": "MUSCULOSA CAIMANCITO EVASÉ",
        "precio": 8500
    },
    "811536001": {
        "nombre": "BUZO CERRO LOPEZ",
        "precio": 84700
    },
    "811536002": {
        "nombre": "PONCHO CERRO VENTANA",
        "precio": 53700
    },
    "811525014": {
        "nombre": "REMRA POLO NATIVA",
        "precio": 51000
    },
    "811525015": {
        "nombre": "REMERA MARGARITA",
        "precio": 39990
    },
    "811525016": {
        "nombre": "REMERA REINA MORA",
        "precio": 45000
    },
    "811522248": {
        "nombre": "BUZO LAGUNA DE LOS TRES",
        "precio": 47800
    },
    "811522245": {
        "nombre": "POLERON LAGUNA AZUL",
        "precio": 54900
    },
    "811525003": {
        "nombre": "REMERA POLO NATIVA",
        "precio": 49500
    },
    "811521000": {
        "nombre": "MUSCULOSA VEDIA ESCOTE REDONDO",
        "precio": 8900
    },
    "811521001": {
        "nombre": "REMERA PUERTO IGUAZU II",
        "precio": 2500
    },
    "811521002": {
        "nombre": "REMERON FLORENTINO ESCOTE PROFUNDO",
        "precio": 3390
    },
    "811514108": {
        "nombre": "POLO OVERSIZE",
        "precio": 1890
    },
    "811514109": {
        "nombre": "REMERON CALAMA MANGA 3/4",
        "precio": 2490
    },
    "811525004": {
        "nombre": "MUSCULOSA CURUPÍ ESCOTE CUADRADO",
        "precio": 4290
    },
    "811525005": {
        "nombre": "MUSCULOSA ÑANDUBAY ESCOTE C/VIVOS ANCHOS",
        "precio": 4690
    },
    "811520126": {
        "nombre": "REMERA CERRO CHUSCA",
        "precio": 30000
    },
    "811514104": {
        "nombre": "CAMPERA VILLAVICENCIO",
        "precio": 75600
    },
    "811520127": {
        "nombre": "REMERA CERRO TUZGLE",
        "precio": 28700
    },
    "811514105": {
        "nombre": "BUZO ACONQUIJA",
        "precio": 16560
    },
    "811520000": {
        "nombre": "REMERA FRESNO M MANGA LARGA VANISE",
        "precio": 440
    },
    "811520002": {
        "nombre": "REMERA NACAR",
        "precio": 6900
    },
    "811520005": {
        "nombre": "REMERA LA CONSTANCIA",
        "precio": 3990
    },
    "811520007": {
        "nombre": "REMERA SUBLIMADA LA EMILIA",
        "precio": 1310
    },
    "811520008": {
        "nombre": "REMERA LA LUISA",
        "precio": 999
    },
    "811520009": {
        "nombre": "REMERA LA SOFIA",
        "precio": 2500
    },
    "811520010": {
        "nombre": "REMERA LA TRINIDAD",
        "precio": 950
    },
    "811520011": {
        "nombre": "REMERA LA MARUJA",
        "precio": 720
    },
    "811520012": {
        "nombre": "MEDIO PONCHO LA CORTADERA",
        "precio": 3900
    },
    "811520013": {
        "nombre": "REMERA CALEUFÚ",
        "precio": 1250
    },
    "811520014": {
        "nombre": "REMERON PEÑAS BLANCAS",
        "precio": 1650
    },
    "811520006": {
        "nombre": "REMERA LA DELFINA",
        "precio": 6900
    },
    "811501005": {
        "nombre": "CAMPERA  PARANA CANGURO C/CAPUCHA M",
        "precio": 900
    },
    "811501009": {
        "nombre": "REMERA PETUNIA M.C CUELLO REDONDO EVASE",
        "precio": 1630
    },
    "811501010": {
        "nombre": "REMERA ROSA DE RIO M.C CUELLO V EVASE",
        "precio": 530
    },
    "811501011": {
        "nombre": "CAMPERA SALVIA CON CAPUCHA",
        "precio": 18900
    },
    "811507000": {
        "nombre": "BUZA PEPERINA",
        "precio": 85000
    },
    "811508005": {
        "nombre": "REMERA BEGONIA",
        "precio": 40000
    },
    "811508006": {
        "nombre": "REMERA HORTENSIA",
        "precio": 40000
    },
    "811508007": {
        "nombre": "REMERA CAMPANILLAS",
        "precio": 42500
    },
    "811508008": {
        "nombre": "REMERA CRISANTEMO",
        "precio": 58500
    },
    "811508009": {
        "nombre": "POLO TREBOL ROJO",
        "precio": 49000
    },
    "811508010": {
        "nombre": "VESTIDO SIERRAS BAYAS",
        "precio": 57000
    },
    "811544000": {
        "nombre": "CAMISA CRUZ SIN MANGAS",
        "precio": 2320
    },
    "811544001": {
        "nombre": "REMERA PATAGONES MANGA CAIDA",
        "precio": 2590
    },
    "811544002": {
        "nombre": "REMERA DORREGO CON PUNTILLA",
        "precio": 2580
    },
    "811544003": {
        "nombre": "REMERA FORTIN CON BOLSILLO",
        "precio": 1790
    },
    "811544004": {
        "nombre": "REMERA ROSALES RANGLAN CON VUELO",
        "precio": 1730
    },
    "811544005": {
        "nombre": "REMERA PUNTA ALTA CON VOLADO Y CUELLO TEJIDO",
        "precio": 1880
    },
    "811544110": {
        "nombre": "VESTIDO TUMBAYA LARGO CON NUDO",
        "precio": 65000
    },
    "811553000": {
        "nombre": "CAMPERA SALVIA",
        "precio": 2350
    },
    "811553001": {
        "nombre": "BUZO CANGURO HUCAL",
        "precio": 3300
    },
    "811537000": {
        "nombre": "BUZO TERMAS AMPLIO PLUSH",
        "precio": 6890
    },
    "811537001": {
        "nombre": "BUZO TARTAGAL I22",
        "precio": 38960
    },
    "811537002": {
        "nombre": "BUZO AGUAPE",
        "precio": 54000
    },
    "812106025": {
        "nombre": "PANTALÓN BOGADO LARGO CROP",
        "precio": 18900
    },
    "811547001": {
        "nombre": "REMERA POLO M. M/C PIQUE",
        "precio": 600
    },
    "811547002": {
        "nombre": "REMERA BETULA M C/O AMPLIO M. L.",
        "precio": 420
    },
    "811547003": {
        "nombre": "POLO BASICA AURELIA",
        "precio": 620
    },
    "812106023": {
        "nombre": "PANTALÓN SALVADOR- AMPLIO CON BOLSILLOS",
        "precio": 4060
    },
    "812106060": {
        "nombre": "PANTALÓN RIO CHICO",
        "precio": 21120
    },
    "811178001": {
        "nombre": "REMERON MAQUI VOLADO EN MANGAS",
        "precio": 415
    },
    "811178002": {
        "nombre": "REMERA BEGONIA MANGA RANGLAN CON NUDO",
        "precio": 1450
    },
    "811178003": {
        "nombre": "REMERA CORTADERA SIN MANGAS LARGA CON TAJO",
        "precio": 1310
    },
    "811178004": {
        "nombre": "MUSCULOSA ORQUIDEA ESC, V EN ESPALDA",
        "precio": 380
    },
    "811168002": {
        "nombre": "REMERA VIALE- CON PUNTILLA EN LA MANGA",
        "precio": 9500
    },
    "811168003": {
        "nombre": "REMERA PUIGARI-  ESCOTE V CON PUNTILLA",
        "precio": 9900
    },
    "811168004": {
        "nombre": "REMERA JESUS MARÍAV22",
        "precio": 6990
    },
    "811168005": {
        "nombre": "MUSCULOSA ALBERDI LARGA TIPO TUNICA",
        "precio": 9900
    },
    "811168006": {
        "nombre": "ENTERITO OROÑO",
        "precio": 13490
    },
    "811555000": {
        "nombre": "REMERA AMARILIS M.C. ESCOTE V ESPALDA",
        "precio": 387
    },
    "811555001": {
        "nombre": "CARDIGAN ML ESMERALDA",
        "precio": 725
    },
    "811555003": {
        "nombre": "REMERA C/VOLADO MANGAS LA CARLOTA",
        "precio": 520
    },
    "811556000": {
        "nombre": "MEDIO PONCHO MOCOVI",
        "precio": 1040
    },
    "811533008": {
        "nombre": "REMERA CERRO OTTO",
        "precio": 28990
    },
    "811533009": {
        "nombre": "REMERA TUPUNGATO",
        "precio": 29990
    },
    "811533010": {
        "nombre": "REMERA LOS PATOS",
        "precio": 25400
    },
    "811168007": {
        "nombre": "REMERA ESTEROS",
        "precio": 6630
    },
    "811168009": {
        "nombre": "REMERA ALEGRE",
        "precio": 8860
    },
    "811501015": {
        "nombre": "REMERA BASICA ESC RED. M.L.",
        "precio": 1800
    },
    "811501016": {
        "nombre": "REMERA BASICA ESC RED. M.C.",
        "precio": 550
    },
    "811501017": {
        "nombre": "REMERA BASICA ESC. V M.L.",
        "precio": 1800
    },
    "811501018": {
        "nombre": "REMERA BASICA ESC. V M.C.",
        "precio": 795
    },
    "811501019": {
        "nombre": "MUSCULOSA LA CUMBRECITA",
        "precio": 4990
    },
    "811501020": {
        "nombre": "REMERA RIO TEUCO",
        "precio": 42700
    },
    "811505002": {
        "nombre": "BUZO LAGO ROCA",
        "precio": 64400
    },
    "811505003": {
        "nombre": "CAMPERON RIO CARCARAÑA",
        "precio": 81400
    },
    "811505004": {
        "nombre": "BUZO QUILIMBAI",
        "precio": 74000
    },
    "811506000": {
        "nombre": "REMERA ALMENDRO M C/V AMPLIO",
        "precio": 440
    },
    "811506001": {
        "nombre": "REMERA SUSPIROS CUELLO PROFUNDO MGA.3/4",
        "precio": 425
    },
    "811506002": {
        "nombre": "REMERA CURUPI M.L.",
        "precio": 4500
    },
    "811506003": {
        "nombre": "REMERA SANTA ELENA MGA 3/4",
        "precio": 1990
    },
    "811506004": {
        "nombre": "REMERA M.L. LAURENTINA",
        "precio": 8900
    },
    "811506005": {
        "nombre": "REMERA CON VOLADOS SANTA ROSA",
        "precio": 1990
    },
    "811506007": {
        "nombre": "REMERA ESC V C/TIRA LA TORERA",
        "precio": 540
    },
    "811168012": {
        "nombre": "REMERA PIEDRAS BAYAS",
        "precio": 9720
    },
    "811168013": {
        "nombre": "REMERA RIO DESEADO",
        "precio": 13500
    },
    "811168015": {
        "nombre": "REMERA RIO COLORADO",
        "precio": 17520
    },
    "811168017": {
        "nombre": "REMERA SALINAS GRANDES",
        "precio": 32500
    },
    "811168018": {
        "nombre": "REMERA LAGUNA IBERA",
        "precio": 29990
    },
    "811168019": {
        "nombre": "REMERON BARITU",
        "precio": 29990
    },
    "811168020": {
        "nombre": "REMERA EL NOGALAR",
        "precio": 33600
    },
    "811168021": {
        "nombre": "REMERA ARRAYANES",
        "precio": 43700
    },
    "811168022": {
        "nombre": "ENTERITO SANTA CRUZ",
        "precio": 63800
    },
    "811168023": {
        "nombre": "REMERA VERBENA",
        "precio": 52000
    },
    "811168024": {
        "nombre": "REMERA AMANCAY",
        "precio": 39990
    },
    "811168025": {
        "nombre": "REMERA CARAGUATA",
        "precio": 38000
    },
    "811168026": {
        "nombre": "REMERA CATEDRAL",
        "precio": 35500
    },
    "811166005": {
        "nombre": "RMERA LAS TUNAS",
        "precio": 2350
    },
    "811166006": {
        "nombre": "REMERA SANTA ANITA",
        "precio": 760
    },
    "811166007": {
        "nombre": "REMERA C/CUELLO M.L. LA ANGELITA",
        "precio": 1990
    },
    "811166008": {
        "nombre": "REMERA M.L. LA ARBOLEDA",
        "precio": 10000
    },
    "811166009": {
        "nombre": "REMERA M.L. LA ARMONIA",
        "precio": 1990
    },
    "811166011": {
        "nombre": "REMERA MAO CON CARTERA LA DORITA",
        "precio": 2200
    },
    "811166012": {
        "nombre": "REMERA CON TIRAS LA GLORIA",
        "precio": 860
    },
    "811147006": {
        "nombre": "MUSCULOSA GUALEGUAY",
        "precio": 660
    },
    "811147007": {
        "nombre": "REMERA MACIA",
        "precio": 530
    },
    "811147008": {
        "nombre": "REMERA ALUMINÉ",
        "precio": 5900
    },
    "811147009": {
        "nombre": "REMERA IRUYA",
        "precio": 3150
    },
    "811147014": {
        "nombre": "REMERA FELICIANO - MEDIA POLERA AMPLIA",
        "precio": 3270
    },
    "811147015": {
        "nombre": "REMERON RIO BLANCO",
        "precio": 15360
    },
    "811147016": {
        "nombre": "POLERON RIO COLLON CURA",
        "precio": 21120
    },
    "811147017": {
        "nombre": "MEDIA POLERA RIO CALEUFU",
        "precio": 20640
    },
    "811151001": {
        "nombre": "BUZO ESC. REDONDO CORRENTOSO SIN CAPUCHA",
        "precio": 530
    },
    "811166070": {
        "nombre": "REMERA PUERTO PIRAMIDES",
        "precio": 46600
    },
    "811166071": {
        "nombre": "REMERA TREVELIN",
        "precio": 53300
    },
    "811166072": {
        "nombre": "REMERA SIERRA DE LA QUIJADAS",
        "precio": 32800
    },
    "811168027": {
        "nombre": "VESTIDO AGUAS VERDES",
        "precio": 55500
    },
    "811168028": {
        "nombre": "ENTERITO CERRO OTTO",
        "precio": 77000
    },
    "811166001": {
        "nombre": "REMERA M. MANGA C/BOTON",
        "precio": 1485
    },
    "811166002": {
        "nombre": "REMERA PARANACITO",
        "precio": 1450
    },
    "811166003": {
        "nombre": "REMERA ROSARIO",
        "precio": 2500
    },
    "811166004": {
        "nombre": "MUSCULOSA MARIA LUISA",
        "precio": 1100
    },
    "811166073": {
        "nombre": "REMERA CAMPOS DEL TUYU",
        "precio": 43200
    },
    "811166074": {
        "nombre": "VESTIDO PATAGONIA",
        "precio": 127200
    },
    "811166075": {
        "nombre": "VESTIDO SAN LUIS",
        "precio": 79700
    },
    "811166076": {
        "nombre": "REMERA CARACOLILLO",
        "precio": 54000
    },
    "811166077": {
        "nombre": "REMERA ARRAYAN",
        "precio": 49000
    },
    "811166078": {
        "nombre": "MUSCULOSA TULIPANES",
        "precio": 32000
    },
    "811166079": {
        "nombre": "REMERA GERBERA",
        "precio": 35000
    },
    "811167001": {
        "nombre": "REMERA BASICA M C/O",
        "precio": 280
    },
    "811167002": {
        "nombre": "REMREA M C/V C/ PUNTILLA",
        "precio": 340
    },
    "811167003": {
        "nombre": "MUSCULOSA BASICA M. RIBB",
        "precio": 250
    },
    "811167005": {
        "nombre": "MUSCULOSA CERRADA M. RIBB",
        "precio": 250
    },
    "811167006": {
        "nombre": "CANGURO CON CUERRE M. RIBB",
        "precio": 620
    },
    "811167007": {
        "nombre": "CADIGAN C/BOTONES M. RIBB",
        "precio": 520
    },
    "811166018": {
        "nombre": "REMERON PIEDRAS BAYAS",
        "precio": 24500
    },
    "811166019": {
        "nombre": "REMERA SECLANTAS",
        "precio": 1850
    },
    "811166020": {
        "nombre": "REMERA ANDALGALÁ",
        "precio": 1850
    },
    "811166021": {
        "nombre": "VESTIDO CANDELARIA",
        "precio": 25000
    },
    "811166022": {
        "nombre": "REMERA TOLHUIN",
        "precio": 6900
    },
    "811166030": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE REDONDO",
        "precio": 32000
    },
    "811166031": {
        "nombre": "REMERA RIO GALLEGOS",
        "precio": 8600
    },
    "811166033": {
        "nombre": "REMERA CERREZUELA",
        "precio": 3030
    },
    "811166034": {
        "nombre": "REMERA ESPERANZA",
        "precio": 10500
    },
    "811166036": {
        "nombre": "REMERA GENERAL PICO",
        "precio": 12840
    },
    "811166037": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE V",
        "precio": 33000
    },
    "811166038": {
        "nombre": "REMERA CONCORDIA - PLANO CON CARTERA",
        "precio": 9900
    },
    "811166039": {
        "nombre": "REMERA DORREGO MANGA LARGA",
        "precio": 11900
    },
    "811166040": {
        "nombre": "REMERA  FORTIN MANGA LARGA",
        "precio": 2890
    },
    "811166041": {
        "nombre": "REMERA ELENA - ESCOTE V AMPLIA",
        "precio": 4990
    },
    "811166035": {
        "nombre": "REMERA SOTO",
        "precio": 8900
    },
    "811166042": {
        "nombre": "REMERA HERNANDARIAS - MANGA 3/4 CON TEJ.",
        "precio": 14500
    }
}

const input = document.getElementById("codigo");
const lista = document.getElementById("sugerencias");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  lista.innerHTML = "";

  if (texto.length >= 2) {
    const coincidencias = Object.entries(ropa).filter(([codigo, datos]) =>
      datos.nombre.toLowerCase().includes(texto)
    );

    coincidencias.forEach(([codigo, datos]) => {
      const item = document.createElement("li");
      item.textContent = datos.nombre;
      item.addEventListener("click", () => {
        input.value = datos.nombre;
        lista.innerHTML = "";
      });
      lista.appendChild(item);
    });
  }
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buscarPrecio();
    lista.innerHTML = "";
  }
});

function buscarPrecio() {
  const entrada = input.value.trim();
  const resultado = document.getElementById("resultado");

  const codigoInput = entrada.toUpperCase();
  let prenda = ropa[codigoInput];
  let codigoEncontrado = codigoInput;

  if (!prenda) {
    const entradaLower = entrada.toLowerCase();
    const coincidencia = Object.entries(ropa).find(([codigo, datos]) =>
      datos.nombre.toLowerCase() === entradaLower
    );

    if (coincidencia) {
      codigoEncontrado = coincidencia[0];
      prenda = coincidencia[1];
    }
  }

  if (prenda) {
    const precio = prenda.precio;
    const descuento10 = (precio * 0.90).toFixed(2);
    const descuento20 = (precio * 0.80).toFixed(2);
    const cuotas3 = (precio / 3).toFixed(2);
    const cuotas6 = (precio / 6).toFixed(2);
    const reintegro20 = (precio * 0.20).toFixed(2);

    resultado.innerText =
`Código: ${codigoEncontrado}
Prenda: ${prenda.nombre}

Precio original: $${precio.toFixed(2)}

Precio con 10% de descuento: $${descuento10}
Precio con 20% de descuento: $${descuento20}
3 cuotas sin interés de: $${cuotas3}
6 cuotas sin interés de: $${cuotas6}
Reintegro del 20%: $${reintegro20}`;
  } else {
    resultado.textContent = `No se encontró una prenda con ese código o nombre.`;
  }
}

document.getElementById("codigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que se envíe un formulario si lo hay
    buscarPrecio(); // Llama a tu función de búsqueda
  }
});