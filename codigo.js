// Simulación de base de datos de ropa con precios
const ropa = {
  //Lista Base de Datos local Buenos Aires
    "22222001E": {
        "nombre": "bombacha elastizada",
        "precio": 54000
    },
    "777": {
        "nombre": "servicio bordado",
        "precio": 1900
    },
    "SIN_COD_2": {
        "nombre": "844134011",
        "precio": 20500
    },
    "U11106009": {
        "nombre": "REMERA CARRERA MANGA LARGA",
        "precio": 46800
    },
    "U12106003": {
        "nombre": "PANTALÓN AIMAR",
        "precio": 84000
    },
    "711106013": {
        "nombre": "CAMISA EVA SUPLEX MINI RIPSTOP",
        "precio": 82800
    },
    "711106014": {
        "nombre": "CAMISA MERCEDES SPANDEX",
        "precio": 70500
    },
    "713106201": {
        "nombre": "TAPADO TRAFUL",
        "precio": 143800
    },
    "711106020": {
        "nombre": "CAMISA MILA",
        "precio": 74400
    },
    "711106021": {
        "nombre": "CAMPERA FLORIDA",
        "precio": 54000
    },
    "711106022": {
        "nombre": "CAMISA MILA PAPER TOUCH",
        "precio": 56400
    },
    "711108001": {
        "nombre": "CHALECO UNION",
        "precio": 53000
    },
    "711108002": {
        "nombre": "BUZO FLORIDA",
        "precio": 49000
    },
    "711141000": {
        "nombre": "BUZO LA ESTANCIA COMBINADO MUJER",
        "precio": 53000
    },
    "711141001": {
        "nombre": "BUZO FLORIDA LIVIANO",
        "precio": 49200
    },
    "711141002": {
        "nombre": "CHALECO UNION LIVIANO",
        "precio": 52800
    },
    "712106013": {
        "nombre": "BABUCHA RUCA",
        "precio": 102000
    },
    "712106015": {
        "nombre": "CALZA DEPORTIVA GRETA LARGA",
        "precio": 76600
    },
    "712511001": {
        "nombre": "CALZA DEPORTIVA GRETA",
        "precio": 66000
    },
    "711511000": {
        "nombre": "TOP DEPORTIVO NOA",
        "precio": 45800
    },
    "711517000": {
        "nombre": "MUSCULOSA DEPORTIVA EMMA",
        "precio": 31200
    },
    "712106008": {
        "nombre": "BABUCHA ROSAS",
        "precio": 102000
    },
    "712106009": {
        "nombre": "SHORT ROJAS  MUJER",
        "precio": 66000
    },
    "713211142": {
        "nombre": "CAMPERA CHOLILA M.SOFTSHELL",
        "precio": 102000
    },
    "713106009": {
        "nombre": "CAMPERA NOGAL MUJER",
        "precio": 117000
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
    "911106026": {
        "nombre": "REMERA CRIS SURF NENE",
        "precio": 27300
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
    "912128004": {
        "nombre": "SHORT DE BAÑO CRIS N. MICROFIBRA",
        "precio": 31800
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
    "912511002": {
        "nombre": "SHORT APOLO",
        "precio": 21400
    },
    "913213142": {
        "nombre": "CAMPERA ALICURA N.SOFTSHELL",
        "precio": 71000
    },
    "941106003": {
        "nombre": "BANDANA FILTRO",
        "precio": 20900
    },
    "941106004": {
        "nombre": "SOMBRERO FILTRO UV",
        "precio": 20900
    },
    "311106110": {
        "nombre": "REMERA CARRERA",
        "precio": 40800
    },
    "311141000": {
        "nombre": "BUZO LA ESTANCIA COMBINADO HOMBRE",
        "precio": 53000
    },
    "311141001": {
        "nombre": "CAMPERA CATALPA LIVIANA",
        "precio": 58000
    },
    "311141002": {
        "nombre": "BUZO CATALPA LIVIANO",
        "precio": 51600
    },
    "311141003": {
        "nombre": "CHALECO CATALPA LIVIANO",
        "precio": 49200
    },
    "312106023": {
        "nombre": "PANTALÓN CARGO DESMONTABLE SOFSHELL",
        "precio": 89700
    },
    "312106024": {
        "nombre": "PANTALÓN EPECUÉN",
        "precio": 104000
    },
    "312106501": {
        "nombre": "SHORT CATAMARCA",
        "precio": 38400
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
    "312106017": {
        "nombre": "BABUCHA TAPALQUE",
        "precio": 104000
    },
    "312106019": {
        "nombre": "BERMUDA CARGO SAAVEDRA",
        "precio": 72000
    },
    "311106015": {
        "nombre": "CAMISA  PUAN TECNICA M/LARGA 2 BOLSILLOS",
        "precio": 84000
    },
    "311108003": {
        "nombre": "BUZO CATALPA POLAR H.",
        "precio": 51600
    },
    "311108005": {
        "nombre": "CAMPERA CATALPA H MICROPOLAR",
        "precio": 59000
    },
    "311108009": {
        "nombre": "CHALECO CATALPA",
        "precio": 49000
    },
    "311106018": {
        "nombre": "CAMISA PUAN TECNICA M/C C/ BOLSILLO",
        "precio": 67000
    },
    "311106107": {
        "nombre": "CAMISA PUAN PAPER M/C",
        "precio": 51600
    },
    "311106108": {
        "nombre": "CAMISA PUAN PAPER M/L",
        "precio": 57600
    },
    "313106005": {
        "nombre": "CAMPERA NOGAL SOFTSHELL H.",
        "precio": 125000
    },
    "313211142": {
        "nombre": "CAMPERA CURRUHUE H.SOFTSHELL",
        "precio": 116000
    },
    "412106003": {
        "nombre": "SHORT BAÑO ADULTO",
        "precio": 40500
    },
    "412106004": {
        "nombre": "SHORT BAÑO ESTAMPADO",
        "precio": 42100
    },
    "412128003": {
        "nombre": "SHORT DE BAÑO ADULTO",
        "precio": 42100
    },
    "441106009": {
        "nombre": "CINTO GALÓN SAUCE 35MM",
        "precio": 26500
    },
    "444106000": {
        "nombre": "CINTO SAUCE COMB.40 SOGA",
        "precio": 29500
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
    "444145003": {
        "nombre": "CINTO CIPRES LISO 30 SUELA",
        "precio": 25000
    },
    "444145004": {
        "nombre": "CINTO TAPIAL H. 40 CUERO",
        "precio": 29500
    },
    "444145005": {
        "nombre": "CINTO CAVEN SUELA",
        "precio": 29500
    },
    "444145008": {
        "nombre": "CINTO CALDÉN 35 SUELA",
        "precio": 34990
    },
    "481134101": {
        "nombre": "BILLETERA ROJAS H FLOTTER",
        "precio": 35500
    },
    "481134104": {
        "nombre": "MORRAL ACASSUSO",
        "precio": 95500
    },
    "481331116": {
        "nombre": "BOLSO YABIRU LONA GDE",
        "precio": 82800
    },
    "482116004": {
        "nombre": "BOLSO ARIEL ( CILINDRO)",
        "precio": 137800
    },
    "489116004": {
        "nombre": "NECESSAIRE PICABUEY LONA CHICO",
        "precio": 23900
    },
    "489116005": {
        "nombre": "NECESSAIRE PICABUEY LONA GRANDE",
        "precio": 26000
    },
    "489116006": {
        "nombre": "NECESSAIRE AMAPOLA",
        "precio": 24900
    },
    "471134000": {
        "nombre": "TERMERA OLMOS",
        "precio": 135500
    },
    "471154001": {
        "nombre": "TERMERA CHAMPAQUI",
        "precio": 94800
    },
    "478134100": {
        "nombre": "MATE PAMPERO BOCA ANCHA",
        "precio": 40000
    },
    "478134101": {
        "nombre": "MATE PAMPERO BOCA CHICA",
        "precio": 32000
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
    "944145000": {
        "nombre": "CINTO CHURQUI BORD.25 SUELA",
        "precio": 18000
    },
    "944145001": {
        "nombre": "CINTO QUEBRACHILLO 30 SUELA",
        "precio": 9500
    },
    "944106000": {
        "nombre": "CINTO LAPACHILLO LISO 30 SOGA",
        "precio": 9000
    },
    "U00173507": {
        "nombre": "CANDADO PAMPERO",
        "precio": 10500
    },
    "844134000": {
        "nombre": "CINTO YATAY BORD.ROMBO 25",
        "precio": 31000
    },
    "844134006": {
        "nombre": "CINTO SUELA PARAISO 35MM",
        "precio": 25800
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
    "844145002": {
        "nombre": "CINTO SUELA ALERCE 40MM",
        "precio": 26000
    },
    "880134000": {
        "nombre": "BILLETERA PUNA",
        "precio": 42500
    },
    "880145101": {
        "nombre": "FICHERO JAZMIN M. ANILINA",
        "precio": 31300
    },
    "881134105": {
        "nombre": "ORGANIZADOR ITATI M CUERO",
        "precio": 37500
    },
    "881134106": {
        "nombre": "BILLETERA ROSARIO M CUERO COMB",
        "precio": 38900
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
    "882116013": {
        "nombre": "MOCHILA REGIMIENTO",
        "precio": 172500
    },
    "882116104": {
        "nombre": "TOTE ANTONIA",
        "precio": 82600
    },
    "882116105": {
        "nombre": "TOTE AMALIA",
        "precio": 85800
    },
    "882134011": {
        "nombre": "CARTERA CARDO CUERO CON TACHAS",
        "precio": 54900
    },
    "882134019": {
        "nombre": "CARTERA LOS HORNOS",
        "precio": 105800
    },
    "882134024": {
        "nombre": "CARTERA BOLSON FLOTER",
        "precio": 127000
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
    "882134030": {
        "nombre": "MINI MORRAL MARGARITA",
        "precio": 28800
    },
    "882134032": {
        "nombre": "CARTERA BERLÍN",
        "precio": 89800
    },
    "882134104": {
        "nombre": "CARTERA VERA GRANDE",
        "precio": 91800
    },
    "882134105": {
        "nombre": "CARTERA JAZMIN",
        "precio": 91800
    },
    "882134107": {
        "nombre": "BOLSO CRIOLLO",
        "precio": 73400
    },
    "882134108": {
        "nombre": "CARTERA FLORINDA",
        "precio": 128800
    },
    "882134109": {
        "nombre": "BANDOLERA ALCORTA MATELASEADA",
        "precio": 75700
    },
    "882134111": {
        "nombre": "MOCHILA ARECO GAMUZADA",
        "precio": 85100
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
        "precio": 54990
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
    "882154001": {
        "nombre": "MORRAL NUEVO GAMUZA",
        "precio": 98700
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
    "811134107": {
        "nombre": "BILLETERA CABRAL H. NOBUK COMBINADO",
        "precio": 25300
    },
    "811134108": {
        "nombre": "BILLETERA NEUQUEN H. CUERO ANILINA",
        "precio": 25800
    },
    "U44134000": {
        "nombre": "CINTO TACHAS",
        "precio": 35700
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
    "U44122002": {
        "nombre": "CINTO FRESNO GALÓN 35MM",
        "precio": 19500
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
        "precio": 40300
    },
    "U82116001": {
        "nombre": "TERMERA ARENA LONA",
        "precio": 112500
    },
    "U82116002": {
        "nombre": "MORRAL ARIAS UNISEX",
        "precio": 30400
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
    "441106010": {
        "nombre": "CINTO TIMBÓ",
        "precio": 22000
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
    "U43173000": {
        "nombre": "PULSERA PIEDRA VOLCANICA",
        "precio": 17100
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
    "U45134005": {
        "nombre": "LLAVERO CUERO",
        "precio": 33500
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
    "442106005": {
        "nombre": "PAÑUELO ESTAMPADO",
        "precio": 21900
    },
    "844134012": {
        "nombre": "LONJA DE CUERO CRUDO",
        "precio": 26700
    },
    "843154000": {
        "nombre": "PULSERA TIENTO GAMUZA",
        "precio": 15200
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
    "843174002": {
        "nombre": "BRAZALETE GOLPEADO CINCELADO",
        "precio": 33400
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
    "843174011": {
        "nombre": "ANILLO GOLPEADO ABIERTO",
        "precio": 25000
    },
    "843174012": {
        "nombre": "ESCLAVA CHAPA GOLPEADA",
        "precio": 27200
    },
    "843174014": {
        "nombre": "PULSERA CALADA ESPECIAL",
        "precio": 24400
    },
    "843174017": {
        "nombre": "PULSERA ALUMINIO Y CUERO",
        "precio": 47200
    },
    "843174018": {
        "nombre": "ANILLO ALUMINIO Y CUERO",
        "precio": 33200
    },
    "845174001": {
        "nombre": "ARO GRANDE GOLPEADO",
        "precio": 23000
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
    "845174007": {
        "nombre": "PRENDEDOR",
        "precio": 26500
    },
    "845174011": {
        "nombre": "DIJE GRANDE SILUETA",
        "precio": 32000
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
    "U00174000": {
        "nombre": "BOMBILLA ALPACA",
        "precio": 24600
    },
    "U00174001": {
        "nombre": "HEBILLA CINTURON",
        "precio": 43000
    },
    "842154002": {
        "nombre": "TIENTO MULTIGAMUZA",
        "precio": 11800
    },
    "842130000": {
        "nombre": "TIENTOS EN HILOS TRENZADOS",
        "precio": 8500
    },
    "842134000": {
        "nombre": "GARGANTILLA  DE GAMUZA",
        "precio": 28000
    },
    "842173011": {
        "nombre": "ROSARIO SEMILLAS",
        "precio": 33500
    },
    "842174001": {
        "nombre": "GARGANTILLA LISA",
        "precio": 26500
    },
    "842174002": {
        "nombre": "ROSARIO COLLAR",
        "precio": 29900
    },
    "842174015": {
        "nombre": "CADENA DE ACERO QUIRUGICO GRUESA",
        "precio": 9500
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
    "445174000": {
        "nombre": "LLAVERO",
        "precio": 32500
    },
    "441174003": {
        "nombre": "DIJE CRUZ CHICA DE ALPACA BAÑADA EN PLATA",
        "precio": 21000
    },
    "442174000": {
        "nombre": "PASAPAÑUELO ALPACA",
        "precio": 29500
    },
    "442174001": {
        "nombre": "PASAPAÑUELO PENSAMIENTO",
        "precio": 29900
    },
    "442174002": {
        "nombre": "DIJE CRUZ GRANDE DE ALPACA BAÑADA EN PLATA",
        "precio": 23500
    },
    "045174000": {
        "nombre": "CUNEROS CHICOS",
        "precio": 22100
    },
    "111122002": {
        "nombre": "REMERA M/ LARGA CUELLO O COLLARETA",
        "precio": 19990
    },
    "111108003": {
        "nombre": "BUZO MEDIO CIERRE POLAR H.",
        "precio": 54000
    },
    "111108004": {
        "nombre": "CHALECO DE POLAR C/ CIERRE H.",
        "precio": 49000
    },
    "111108005": {
        "nombre": "CAMPERA DE POLAR H.",
        "precio": 62000
    },
    "111514003": {
        "nombre": "CHOMBA ML JERSEY H.",
        "precio": 26500
    },
    "111514004": {
        "nombre": "CHOMBA MC JERSEY H.",
        "precio": 25000
    },
    "111105000": {
        "nombre": "REMERA TERMICA ML",
        "precio": 24000
    },
    "111138000": {
        "nombre": "CHOMBA M/LARGA (MICRO PIQUE PESCO)",
        "precio": 31500
    },
    "111138003": {
        "nombre": "CHOMBA M/CORTA  (MICRO PIQUE PESCO H.)",
        "precio": 27500
    },
    "111140000": {
        "nombre": "REMERA CUELLO REDONDO BASICA M/C H.",
        "precio": 18500
    },
    "111118003": {
        "nombre": "BUZO FRISA CUELLO REDONDO M/L H.",
        "precio": 42500
    },
    "111118004": {
        "nombre": "CHALECO DE FRIZA H. C/ CIERRE",
        "precio": 49000
    },
    "111118005": {
        "nombre": "CAMPERA DE FRIZA H.",
        "precio": 62000
    },
    "111118006": {
        "nombre": "BUZO MEDIO CIERRE FRIZA H.",
        "precio": 54000
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
    "612107001": {
        "nombre": "BOMBACHA MUJER ELASTIZADA",
        "precio": 51000
    },
    "61228101M": {
        "nombre": "BOMBACHA DE MUJER",
        "precio": 37000
    },
    "91228001M": {
        "nombre": "BOMBACHA LISA NIÑO",
        "precio": 33000
    },
    "51218001M": {
        "nombre": "PANTALÓN CARGO DE TRABAJO MUJER",
        "precio": 50500
    },
    "412506009": {
        "nombre": "PANTALÓN CHINO",
        "precio": 47000
    },
    "41210102M": {
        "nombre": "PANTALÓN CARGO SUMALAO",
        "precio": 72500
    },
    "41210103M": {
        "nombre": "PANTALÓN CARGO SUMALAO",
        "precio": 76400
    },
    "412104001": {
        "nombre": "JEAN WORKER",
        "precio": 27000
    },
    "412104007": {
        "nombre": "JEAN RANGER PAMPERO",
        "precio": 28500
    },
    "11111001M": {
        "nombre": "CAMISA DE TRABAJO H.M/L",
        "precio": 29500
    },
    "112152000M": {
        "nombre": "BERMUDA RIPSTOP",
        "precio": 51000
    },
    "11218001M": {
        "nombre": "PANTALÓN DE TRABAJO HOMBRE",
        "precio": 30500
    },
    "111104000": {
        "nombre": "CAMISA DE TRABAJO H.M/L DENIM",
        "precio": 38000
    },
    "111104001": {
        "nombre": "MAMELUCO MANGA RANGLAN H.DENIM",
        "precio": 64000
    },
    "11181001M": {
        "nombre": "MAMELUCO MANGA RANGLAN H.",
        "precio": 58000
    },
    "112541001": {
        "nombre": "JEAN CORDOBA STONE (CLASICO LYCRA 5 BOL)",
        "precio": 33000
    },
    "113106104": {
        "nombre": "CAMPERA BAJO CERO",
        "precio": 164000
    },
    "212500001": {
        "nombre": "BOMBACHA LISA DENIM HOMBRE",
        "precio": 59000
    },
    "212518001M": {
        "nombre": "BOMBACHA RIPSTOP",
        "precio": 41500
    },
    "211105507": {
        "nombre": "CHALECO CANVAS",
        "precio": 59000
    },
    "211173508": {
        "nombre": "CAMISA AVENTURA PAPPER",
        "precio": 51500
    },
    "21224001M": {
        "nombre": "BOMBACHA ALFORZADA HOMBRE",
        "precio": 44000
    },
    "21228001M": {
        "nombre": "BOMBACHA LISA HOMBRE",
        "precio": 37000
    },
    "32170002M": {
        "nombre": "PANTALÓN CARGO RIPSTOP",
        "precio": 58000
    },
    "312506001": {
        "nombre": "PANTALÓN CARGO ELASTIZADO",
        "precio": 55500
    },
    "31250601M": {
        "nombre": "PANTALÓN CARGO ELASTIZADO JOSE",
        "precio": 64000
    },
    "31217001M": {
        "nombre": "PANTALÓN CARGO CAZADOR II",
        "precio": 50500
    },
    "31233001A": {
        "nombre": "BERMUDA CARGO HOMBRE",
        "precio": 48500
    },
    "31233001M": {
        "nombre": "BERMUDA CARGO HOMBRE",
        "precio": 45500
    },
    "31233002M": {
        "nombre": "BERMUDA CARGO FIT ELASTIZADA",
        "precio": 50500
    },
    "U13122006": {
        "nombre": "CAMPERA RAIGAL PAMPERO",
        "precio": 126500
    },
    "U12106004": {
        "nombre": "PANTALÓN CAIRO DESMONTABLE",
        "precio": 94500
    },
    "U11106010": {
        "nombre": "CAMISA CAIRO PAMPERO",
        "precio": 69500
    },
    "U11106011": {
        "nombre": "CHALECO REFLECTIVO",
        "precio": 30500
    },
    "111106301": {
        "nombre": "CAMPERA NEUQUEN",
        "precio": 184000
    },
    "112142000": {
        "nombre": "PANTALÓN CARGO STRETCH",
        "precio": 97500
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
    "411106003": {
        "nombre": "SWEATER POLICIAL",
        "precio": 117000
    },
    "411106008": {
        "nombre": "BOSA GALVAN",
        "precio": 84500
    },
    "411122008": {
        "nombre": "CAMPERA POMA CON CIERRE",
        "precio": 101000
    },
    "411122024": {
        "nombre": "SWEATER SAN CARLOS MEDIO CIERRE",
        "precio": 80000
    },
    "411122059": {
        "nombre": "CAMPERA SAN CARLOS",
        "precio": 90000
    },
    "411122121": {
        "nombre": "CAMPERA LA PAMPA",
        "precio": 150300
    },
    "411122162": {
        "nombre": "SWEATER CENTENERA Bosa",
        "precio": 51100
    },
    "411122163": {
        "nombre": "SWEATER SAN IGNACIO",
        "precio": 79500
    },
    "411122166": {
        "nombre": "CHALECO CONDARCO",
        "precio": 63500
    },
    "411122167": {
        "nombre": "SWEATER NEUQUEN BOSA",
        "precio": 66000
    },
    "411122191": {
        "nombre": "CAMPERA ACONQUIJA",
        "precio": 80000
    },
    "411122146": {
        "nombre": "BOSA OLIVO",
        "precio": 51100
    },
    "411122148": {
        "nombre": "BOSA PINAR",
        "precio": 65200
    },
    "411122211": {
        "nombre": "SWEATER ACONCAGUA LISO",
        "precio": 90000
    },
    "411122226": {
        "nombre": "SWEATER BUENOS AIRES",
        "precio": 70500
    },
    "411539001": {
        "nombre": "SWEATER ACONQUIJA H. 1/2CIERRE ALG/LANA",
        "precio": 74000
    },
    "411540001": {
        "nombre": "SWEATER MERCEDARIO H. V ALG./LANA",
        "precio": 62000
    },
    "412122202": {
        "nombre": "SWETER NEUQUEN ESCOTE EN V",
        "precio": 66000
    },
    "411514107": {
        "nombre": "CHALECO CONDARCO",
        "precio": 62000
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
        "precio": 103500
    },
    "411135006": {
        "nombre": "CUELLO SMOKING ESPARZA",
        "precio": 67800
    },
    "411135017": {
        "nombre": "SWEATER CHACO",
        "precio": 72900
    },
    "411540005": {
        "nombre": "SWEATER RIO GRANDE",
        "precio": 95600
    },
    "413106000": {
        "nombre": "CAMPERA TRELEW H.MATELASEE",
        "precio": 134500
    },
    "413106003": {
        "nombre": "CHALECO TRELEW H.MATELASEE",
        "precio": 104000
    },
    "413106014": {
        "nombre": "CHALECO ALTA MONTAÑA (POLO)",
        "precio": 119700
    },
    "811540002": {
        "nombre": "CARDIGAN HUMAHUACA M. ALG./LANA",
        "precio": 66000
    },
    "813106000": {
        "nombre": "CAMPERA ANGOSTURA M.MATELASEE",
        "precio": 99000
    },
    "813106001": {
        "nombre": "CHALECO ANGOSTURA M.MATELASEE",
        "precio": 81000
    },
    "813106023": {
        "nombre": "CHALECO CACHI MORLEY",
        "precio": 107700
    },
    "811106007": {
        "nombre": "SWEATER BELLA VISTA",
        "precio": 41900
    },
    "811106206": {
        "nombre": "SACO ARIAS",
        "precio": 71900
    },
    "811106208": {
        "nombre": "POLERON CALDERON",
        "precio": 78500
    },
    "811106211": {
        "nombre": "POLERA ABALOS",
        "precio": 83000
    },
    "811106261": {
        "nombre": "SACO ANTONIA",
        "precio": 64400
    },
    "811106262": {
        "nombre": "POLERA ANTONIA",
        "precio": 54200
    },
    "811122030": {
        "nombre": "SACO SIERRA MUJER",
        "precio": 66000
    },
    "811122121": {
        "nombre": "SACO ESPERANZA CALADO",
        "precio": 46600
    },
    "811122123": {
        "nombre": "MUSCULOSA PALMEIRAS MORLEY",
        "precio": 35000
    },
    "811135000": {
        "nombre": "PONCHO ZAPLA",
        "precio": 37000
    },
    "811135005": {
        "nombre": "RUANA LA CASETA",
        "precio": 84900
    },
    "811135018": {
        "nombre": "SACO TILCARA",
        "precio": 86200
    },
    "811135019": {
        "nombre": "SWEATER MAIMARA",
        "precio": 70000
    },
    "811135020": {
        "nombre": "POLERÓN PURMAMARCA",
        "precio": 90900
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
    "811122285": {
        "nombre": "SWEATER PUNA",
        "precio": 64000
    },
    "811514107": {
        "nombre": "RUANA BELTRAN OCHOS",
        "precio": 102000
    },
    "811166065": {
        "nombre": "REMERA DELFINA",
        "precio": 59000
    },
    "811166066": {
        "nombre": "CHALECO CARRANZA",
        "precio": 60500
    },
    "811152004": {
        "nombre": "SWEATER IRUYA",
        "precio": 66000
    },
    "811152005": {
        "nombre": "SWEATER IRUYA RAYADO",
        "precio": 66000
    },
    "811520017": {
        "nombre": "SWEATER LA BARRA",
        "precio": 68000
    },
    "811520128": {
        "nombre": "SWEATER COCHINOCA Bosa Combinado",
        "precio": 57300
    },
    "811520129": {
        "nombre": "SWEATER UQUÍA Bosa",
        "precio": 61500
    },
    "811514117": {
        "nombre": "CHALECO CARRANZA",
        "precio": 48400
    },
    "811540006": {
        "nombre": "SWEATER LAS GRUTAS",
        "precio": 87500
    },
    "811540007": {
        "nombre": "CHALECO SIERRA GRANDE",
        "precio": 68000
    },
    "811540008": {
        "nombre": "PONCHO RAWSON",
        "precio": 93000
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
    "812104000": {
        "nombre": "PANTALÓN CATALINA RELAJADO",
        "precio": 86000
    },
    "612283101": {
        "nombre": "BOMBACHA CORONDA RECTA",
        "precio": 65000
    },
    "812525001": {
        "nombre": "PANTALÓN VALLECITO MUY ANGOSTO",
        "precio": 67000
    },
    "812525002": {
        "nombre": "PANTALÓN MEDRANO ANGOSTO",
        "precio": 64500
    },
    "812529008": {
        "nombre": "PANTALÓN ALBARIZA ANGOSTO",
        "precio": 67000
    },
    "812529009": {
        "nombre": "PANTALÓN ALBARIZA ANGOSTO",
        "precio": 64500
    },
    "812529018": {
        "nombre": "PANTALÓN FELICITAS ANGOSTO",
        "precio": 68000
    },
    "812545000": {
        "nombre": "PANTALÓN JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "812122013": {
        "nombre": "SHORT  PAMPA",
        "precio": 64100
    },
    "812122015": {
        "nombre": "PANTALÓN DELTA RELAJADO",
        "precio": 80600
    },
    "812122017": {
        "nombre": "PANTALÓN CHECA CAPRI",
        "precio": 59300
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
    "812124001": {
        "nombre": "PANTALÓN NINA RECTO DESFLECADO",
        "precio": 59000
    },
    "812124003": {
        "nombre": "PANTALÓN DONA CARGO",
        "precio": 97000
    },
    "812124005": {
        "nombre": "PANTALÓN MAGDALENA CARGO",
        "precio": 81000
    },
    "812124007": {
        "nombre": "BOMBACHA MORA",
        "precio": 74000
    },
    "812182507": {
        "nombre": "PANTALÓN BARRACAS RECTO",
        "precio": 60500
    },
    "812500050": {
        "nombre": "PANTALÓN EMILIA AMPLIO",
        "precio": 56100
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
    "812506009": {
        "nombre": "PANTALÓN SANTA ROSA ANGOSTO",
        "precio": 64000
    },
    "812506013": {
        "nombre": "PANTALÓN JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "812506016": {
        "nombre": "PANTALÓN MEDRANO ANGOSTO",
        "precio": 58100
    },
    "812506019": {
        "nombre": "PANTALÓN CHECA GABARDINA",
        "precio": 62900
    },
    "812506020": {
        "nombre": "BERMUDA CAYETANA",
        "precio": 66000
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
    "812506028": {
        "nombre": "PANTALÓN VALLECITO MUY ANGOSTO",
        "precio": 67200
    },
    "812506035": {
        "nombre": "PANTALÓN SAUCE DENIM",
        "precio": 57500
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
    "812506041": {
        "nombre": "PANTALÓN CARHUÉ",
        "precio": 74500
    },
    "812513000": {
        "nombre": "PANTALÓN TREVELIN ANGOSTO",
        "precio": 64200
    },
    "812506030": {
        "nombre": "PANTALÓN ANTONIA AMPLIO",
        "precio": 80600
    },
    "912101012": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 46000
    },
    "912500007": {
        "nombre": "JARDINERO TILO DENIM",
        "precio": 115000
    },
    "912500009": {
        "nombre": "PANTALÓN NARANJO RAYADO",
        "precio": 55000
    },
    "912506015": {
        "nombre": "PANTALÓN LIMONERO",
        "precio": 45800
    },
    "912506017": {
        "nombre": "PANTALÓN BRUNO CHINO",
        "precio": 62500
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
    "912500003": {
        "nombre": "PANTALÓN MANZANARES ANGOSTO",
        "precio": 47000
    },
    "911122196": {
        "nombre": "VESTIDO ISABELA",
        "precio": 52900
    },
    "412545000": {
        "nombre": "PANTALÓN SIMON MUY ANGOSTO",
        "precio": 80000
    },
    "412545002": {
        "nombre": "PANTALÓN FELIPE ANGOSTO",
        "precio": 86500
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
    "412541013": {
        "nombre": "PANTALÓN ALVARO RECTO",
        "precio": 71500
    },
    "412541015": {
        "nombre": "PANTALÓN ROCA ANGOSTO",
        "precio": 75000
    },
    "412541016": {
        "nombre": "PANTALÓN ROCA DENIM C/LYCRA",
        "precio": 79500
    },
    "412122002": {
        "nombre": "BERMUDA TIMBO  RECTA",
        "precio": 52100
    },
    "412506020": {
        "nombre": "PANTALÓN MONTECITOS CORDEROY",
        "precio": 112000
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
    "412500050": {
        "nombre": "PANTALÓN HERRADURA ANGOSTO",
        "precio": 87000
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
    "599541000": {
        "nombre": "PANTALÓN CAPITAL INDUSTRIA",
        "precio": 565000
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
    "412124000": {
        "nombre": "PANTALÓN BAHIA POPLIN",
        "precio": 59300
    },
    "412124001": {
        "nombre": "BERMUDA ROMERILLO RECTA",
        "precio": 69000
    },
    "412104013": {
        "nombre": "PANTALÓN CAMPO RECTO",
        "precio": 61000
    },
    "212287101": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 65500
    },
    "212122211": {
        "nombre": "BOMBACHA ZENÓN FANTASIA",
        "precio": 96000
    },
    "212124000": {
        "nombre": "BOMBACHA OLIVERA",
        "precio": 82500
    },
    "212192101": {
        "nombre": "PANTALÓN BAHIA RECTO",
        "precio": 61000
    },
    "012122018": {
        "nombre": "BOMBACHA PAÑALERA DENIM",
        "precio": 40500
    },
    "012281101": {
        "nombre": "BOMBACHA PAÑALERA",
        "precio": 40500
    },
    "112541000": {
        "nombre": "PANTALÓN AMERICA INDUSTRIA",
        "precio": 60000
    },
    "U11122002": {
        "nombre": "CAMPERA CLASICA",
        "precio": 138000
    },
    "812124008": {
        "nombre": "BOMBACHA MORA FANTASIA",
        "precio": 82000
    },
    "412122216": {
        "nombre": "BERMUDA ANDES CARGO",
        "precio": 82000
    },
    "812122229": {
        "nombre": "PANTALÓN CUMBRES RECTO BULL",
        "precio": 91000
    },
    "912122027": {
        "nombre": "PANTALÓN CEREZO",
        "precio": 56500
    },
    "412104014": {
        "nombre": "PANTALÓN ANDES",
        "precio": 105000
    },
    "412529003": {
        "nombre": "OANTALÓN MOLINO",
        "precio": 105000
    },
    "412529004": {
        "nombre": "PANTALÓN DOMINGO",
        "precio": 105000
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
    "121131001": {
        "nombre": "BOTIN YAVU",
        "precio": 85000
    },
    "121131002": {
        "nombre": "BOTIN YAVU",
        "precio": 81000
    },
    "121131003": {
        "nombre": "ZAPATO YAVU",
        "precio": 83500
    },
    "121131004": {
        "nombre": "ZAPATO YAVU",
        "precio": 79000
    },
    "121131007": {
        "nombre": "ZAPATILLA WERKEN",
        "precio": 116500
    },
    "121131008": {
        "nombre": "ZAPATILLA WERKEN",
        "precio": 116000
    },
    "121131009": {
        "nombre": "ZAPATILLA USHUA",
        "precio": 113000
    },
    "121131010": {
        "nombre": "ZAPATILLA USHUA",
        "precio": 113000
    },
    "121136007": {
        "nombre": "ZAPATO RUKA",
        "precio": 59000
    },
    "121136008": {
        "nombre": "BOTIN RUKA",
        "precio": 62000
    },
    "121136009": {
        "nombre": "BOTIN LAUQUEN C/P ART.349",
        "precio": 67000
    },
    "121146003": {
        "nombre": "BOTIN KAU",
        "precio": 89000
    },
    "121146006": {
        "nombre": "ZAPATO KAU",
        "precio": 85000
    },
    "121146007": {
        "nombre": "BOTIN ALENKE",
        "precio": 119000
    },
    "121146008": {
        "nombre": "BOTIN ALENKE",
        "precio": 119000
    },
    "121146011": {
        "nombre": "BORCEGUI LEÑADOR",
        "precio": 141000
    },
    "121146012": {
        "nombre": "BORCEGUI LEÑADOR",
        "precio": 140000
    },
    "121154001": {
        "nombre": "ZAPATO MACHI",
        "precio": 82000
    },
    "321173000": {
        "nombre": "ZAPATILLA YENU",
        "precio": 73000
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
    "823116000": {
        "nombre": "ALPARGATA RECOLETA",
        "precio": 27800
    },
    "823116001": {
        "nombre": "ZAPATILLA FLORES",
        "precio": 26000
    },
    "824116000": {
        "nombre": "ZAPATILLA ROSADA ADULTO MUJER",
        "precio": 31000
    },
    "824116001": {
        "nombre": "ZAPATILLA ROSADA BAJA",
        "precio": 29500
    },
    "824121000": {
        "nombre": "BOTA DE LLUVIA MUJER REGINA",
        "precio": 27200
    },
    "921106000": {
        "nombre": "BOTA BASALÚ",
        "precio": 26600
    },
    "922140001": {
        "nombre": "FERCHU-ZAPATILLA FANTASIA NIÑO CORDON",
        "precio": 30000
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
    "924105019": {
        "nombre": "ZAPATIILLA IVI CAMUFLADO AZUL",
        "precio": 29900
    },
    "924106001": {
        "nombre": "ZAPATILLA ANITA",
        "precio": 31800
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
    "924116007": {
        "nombre": "TATI- GUILLERMINA LISA",
        "precio": 27000
    },
    "924116050": {
        "nombre": "ZAPATILLA LU",
        "precio": 31800
    },
    "924119000": {
        "nombre": "BOTA JOSE",
        "precio": 33900
    },
    "924122001": {
        "nombre": "PATO - ZAPATILLA FANTASIA NIÑO ABROJO",
        "precio": 26700
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
    "924122017": {
        "nombre": "GUILLERMINA SOFI",
        "precio": 19400
    },
    "924122019": {
        "nombre": "ZAPATILLA PAO",
        "precio": 28400
    },
    "924122022": {
        "nombre": "ZAPATILLA GERA",
        "precio": 32900
    },
    "924122023": {
        "nombre": "ZAPATILLA TOBI",
        "precio": 33600
    },
    "924139000": {
        "nombre": "JOAQUI- ZAPATILLA ACORDONADA",
        "precio": 28400
    },
    "924140002": {
        "nombre": "ZAPATILLA FERCHU FANTASIA M.JERSEY",
        "precio": 19700
    },
    "924140003": {
        "nombre": "ZAPATILLA FABI FANT. H. JERSEY",
        "precio": 28000
    },
    "924140008": {
        "nombre": "ZAPATILLA ANDI",
        "precio": 25900
    },
    "924331122": {
        "nombre": "BOTA DE LLUVIA  JULI BASE NUEVA",
        "precio": 28500
    },
    "924610116": {
        "nombre": "ZAPATILLA FRAN BASICA",
        "precio": 32500
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
    "423116000": {
        "nombre": "ZAPATILLA MONSERRAT",
        "precio": 25900
    },
    "423116001": {
        "nombre": "ALPARGATA RETIRO",
        "precio": 27800
    },
    "423116002": {
        "nombre": "ZAPATILLA SAAVEDRA",
        "precio": 42500
    },
    "424106000": {
        "nombre": "ZUECO DEL MAR",
        "precio": 32000
    },
    "424116004": {
        "nombre": "ZAPATILLA COLON ADULTO HOMBRE",
        "precio": 30000
    },
    "024101001": {
        "nombre": "ZAPATILLA JUANI BB",
        "precio": 23700
    },
    "024105001": {
        "nombre": "ZAPATILLAS OLI",
        "precio": 15900
    },
    "024122007": {
        "nombre": "GUILLERMINA MAGUI",
        "precio": 17100
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
    "024610116": {
        "nombre": "ZAPATILLA MANU BASICA BB",
        "precio": 24700
    },
    "024620105": {
        "nombre": "ZAPATILLA EMI FANT.BB.H.CANVAS C/ABROJO",
        "precio": 19900
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
        "precio": 8800
    },
    "143128003": {
        "nombre": "MEDIA CAÑA BAJA MICROFIBRA (PX3)",
        "precio": 5200
    },
    "143128004": {
        "nombre": "MEDIA MICROFIBRA PAMPERO PAX3",
        "precio": 6100
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
    "143128011": {
        "nombre": "MEDIA CAÑA INVISIBLE CON HILO DE PLATA",
        "precio": 7800
    },
    "143128100": {
        "nombre": "MEDIA TÉRMICA TÉCNICA",
        "precio": 10200
    },
    "143128102": {
        "nombre": "MEDIA TECNICA MICROFIBRA CON TOALLA PAX3",
        "precio": 6900
    },
    "143513000": {
        "nombre": "MEDIA SUR",
        "precio": 4700
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
    "152128002": {
        "nombre": "BOXER MICROFIBRA",
        "precio": 15900
    },
    "152128003": {
        "nombre": "CALZA MICROFIBRA",
        "precio": 36600
    },
    "943122001": {
        "nombre": "MEDIA CAÑA 3/4 COLEGIAL (PX3)",
        "precio": 12500
    },
    "943122002": {
        "nombre": "INFANTIL CAÑA INVISIBLE PAX3",
        "precio": 2500
    },
    "136517008": {
        "nombre": "PROTECTOR LUMBAR PAMPERO",
        "precio": 21000
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
    "136121010": {
        "nombre": "CHALECO REFLECTIVO MUNICIPAL C/CIERRE",
        "precio": 13500
    },
    "111128001": {
        "nombre": "ROMPEVIENTO BAGUAL RIPSTOP",
        "precio": 59000
    },
    "113211150": {
        "nombre": "CAMPERA SOFTSHELL 2020",
        "precio": 72500
    },
    "113211160": {
        "nombre": "CHALECO SOFTSHELL",
        "precio": 65000
    },
    "113106102": {
        "nombre": "CAMPERÓN MINERO ANDES",
        "precio": 115500
    },
    "113106103": {
        "nombre": "CAMPERON  SOFSHELL SUR",
        "precio": 91500
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
    "112109002": {
        "nombre": "PANTALÓN BASICO TERMICO TRK.",
        "precio": 58500
    },
    "111101001": {
        "nombre": "MAMELUCO GABARDINA TERMICO",
        "precio": 176500
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
    "111109007": {
        "nombre": "MAMELUCO BASICO TERMICO TRK.",
        "precio": 114000
    },
    "111109020": {
        "nombre": "MAMELUCO TRUCKER MAT. 200gr",
        "precio": 109000
    },
    "111157010": {
        "nombre": "ROMPEVIENTO CIRE EMBALSE",
        "precio": 31000
    },
    "111170000": {
        "nombre": "ROMPEVIENTO ESQUEL C/BOLSA SILVER",
        "precio": 31500
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
    "312106022": {
        "nombre": "PANTALÓN INACAHAUSI RIPSTOP",
        "precio": 89700
    },
    "311411141": {
        "nombre": "BUZO SAN ROQUE H.MICROPOLAR 1/2 CIERRE",
        "precio": 53200
    },
    "312106002": {
        "nombre": "PANTALÓN AMBAI TÉRMICO AVANZADO H.",
        "precio": 25300
    },
    "313106000": {
        "nombre": "PANTALÓN CARGO ANDINO SECADO RAPIDO",
        "precio": 141700
    },
    "313106001": {
        "nombre": "CAMPERA BATEA MAHUIDA 3 EN 1",
        "precio": 227700
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
    "313212106": {
        "nombre": "ROMPEVIENTOS EL BOLSON H.",
        "precio": 70900
    },
    "343108000": {
        "nombre": "GUANTES WINDSHELL",
        "precio": 18000
    },
    "113211200": {
        "nombre": "CHALECO SALIN SOFTSHELL",
        "precio": 87400
    },
    "113211145": {
        "nombre": "CAMPERA ACONCAGUA SOFTSHELL H.",
        "precio": 227700
    },
    "113107005": {
        "nombre": "CAMPERA CANELON FUJI",
        "precio": 117300
    },
    "111108006": {
        "nombre": "BUZO CACHI POLAR H.",
        "precio": 63900
    },
    "113106101": {
        "nombre": "CAMPERA MINERA C/REFLECTIVO UNISEX",
        "precio": 184000
    },
    "111173000": {
        "nombre": "REMERA TECNICA DE BAMBÚ",
        "precio": 58200
    },
    "311105999": {
        "nombre": "REMERA TIMBO TÉRMICA AVANZADA ML H.",
        "precio": 25300
    },
    "311106012": {
        "nombre": "ROMPEVIENTO HUAYRA",
        "precio": 33000
    },
    "312118001": {
        "nombre": "PANTALÓN RECLUS SOFTSHELL",
        "precio": 110400
    },
    "313111141": {
        "nombre": "CHALECO LOS MOLINOS H.MICROPOLAR",
        "precio": 72500
    },
    "313128000": {
        "nombre": "CAMPERA SUR SKY",
        "precio": 184000
    },
    "313211140": {
        "nombre": "CAMPERA SOFTSHELL CURRUHUE H",
        "precio": 105800
    },
    "313211141": {
        "nombre": "CAMPERA EL CHOCON H.MICROPOLAR",
        "precio": 63300
    },
    "713106007": {
        "nombre": "TAPADO LAS GRUTAS",
        "precio": 131100
    },
    "711152001": {
        "nombre": "CAMISA AURORA SECADO RAPIDO",
        "precio": 141700
    },
    "711411141": {
        "nombre": "BUZO LACAR M.MICROPOLAR 1/2CIERRE",
        "precio": 53200
    },
    "713211145": {
        "nombre": "campera softshell aconcagua mujer",
        "precio": 227700
    },
    "713106200": {
        "nombre": "CAMPERA NOGAL M",
        "precio": 167900
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
    "711106010": {
        "nombre": "REMERA PEONIA TERMICA AVANZADA M M/L",
        "precio": 25300
    },
    "682144000": {
        "nombre": "BOLSO CHAMPS",
        "precio": 58900
    },
    "682144001": {
        "nombre": "MOCHILA THELMA",
        "precio": 40600
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
    "U06173001": {
        "nombre": "JARRO RETRO",
        "precio": 11100
    },
    "U06173002": {
        "nombre": "Jarro Daten",
        "precio": 37000
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
    "U06173019": {
        "nombre": "MATE C/ASA",
        "precio": 8000
    },
    "U06173020": {
        "nombre": "MOCHILA INNOVA",
        "precio": 30400
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
    "U06173029": {
        "nombre": "COOLER LINE",
        "precio": 6900
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
    "U06173046": {
        "nombre": "BOTELLA TOMS ALUMINIO",
        "precio": 20400
    },
    "U06173047": {
        "nombre": "BOTELLA ALU",
        "precio": 12200
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
    "U06173061": {
        "nombre": "RIÑONERA FITZ",
        "precio": 30300
    },
    "U06173062": {
        "nombre": "MOCHILA WALKING L",
        "precio": 12600
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
    "U06173157": {
        "nombre": "SILLA PASTOR",
        "precio": 108700
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
    "480173000": {
        "nombre": "BILLETRA GAIA",
        "precio": 15800
    },
    "482173002": {
        "nombre": "Mochila Duomo Haka",
        "precio": 31300
    },
    "482173003": {
        "nombre": "Mochila New Step",
        "precio": 35900
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
    "445173011": {
        "nombre": "SILLA PLEGABLE",
        "precio": 169000
    },
    "445173013": {
        "nombre": "COOLER FIESTA OUTDOOR (EX GLACIAR)",
        "precio": 161000
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
    "311108001": {
        "nombre": "CHALECO DEL PLATA POLAR H",
        "precio": 44700
    },
    "311108002": {
        "nombre": "CAMPERA VIEDMA",
        "precio": 67000
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
    "345173000": {
        "nombre": "JARRO TERMICO ALERCE",
        "precio": 17500
    },
    "382105200": {
        "nombre": "TOTE RAMADA",
        "precio": 123100
    },
    "311124000": {
        "nombre": "CAMPERA ROMPEVIENTO",
        "precio": 80800
    },
    "U00106000": {
        "nombre": "PARAGUAS RAINY",
        "precio": 24000
    },
    "U6173018": {
        "nombre": "JARRO TERMICO MAIPO",
        "precio": 22000
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
    "U45173142": {
        "nombre": "FUNDA YERBERA",
        "precio": 6700
    },
    "U45173143": {
        "nombre": "BOLSO DUOMO",
        "precio": 42400
    },
    "136121501": {
        "nombre": "TRAJE DE LLUVIA (CON PANTALÓN) IMPORTADO",
        "precio": 48100
    },
    "111121002": {
        "nombre": "CAPA DE LLUVIA STORM",
        "precio": 40900
    },
    "111121011": {
        "nombre": "TRAJE LLUVIA PREMIUM MOTOSTYLE",
        "precio": 151600
    },
    "111122050": {
        "nombre": "REMERA BASICA ESCOTE REDONDO CORPORATIVA",
        "precio": 22500
    },
    "111122051": {
        "nombre": "POLO PIQUÉ CORPORATIVA M/C",
        "precio": 32500
    },
    "411106103": {
        "nombre": "CHALECO LAGO MELIQUINA",
        "precio": 75000
    },
    "411108011": {
        "nombre": "CAMPERA LAGO TROMEN",
        "precio": 67700
    },
    "411108012": {
        "nombre": "CHALECO FUTALAUFQUEN",
        "precio": 64600
    },
    "411108013": {
        "nombre": "BUZO LENGA",
        "precio": 54500
    },
    "411108014": {
        "nombre": "CAMPERA CIPRES",
        "precio": 78000
    },
    "411108015": {
        "nombre": "CAMPERA CAIBO",
        "precio": 79990
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
    "411118010": {
        "nombre": "BUZO VENCEJOS",
        "precio": 80000
    },
    "411118011": {
        "nombre": "CAMPERA BURGO",
        "precio": 108000
    },
    "411118013": {
        "nombre": "CAMPERA JILGUERO",
        "precio": 66300
    },
    "411122212": {
        "nombre": "CAMPERA FRESNO",
        "precio": 91500
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
        "precio": 29990
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
    "411122242": {
        "nombre": "REMERA GOLFO SAN MATIAS",
        "precio": 49990
    },
    "411106116": {
        "nombre": "BUZO CALAFATE",
        "precio": 143000
    },
    "411122193": {
        "nombre": "REMERA MC RIO MALARGUE",
        "precio": 26200
    },
    "411122194": {
        "nombre": "REMERA MC RIO MOCORETA",
        "precio": 29800
    },
    "411122195": {
        "nombre": "REMERA MC RIO SAN JAVIER",
        "precio": 25200
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
    "411122201": {
        "nombre": "POLO ML LAGO QUILLEN",
        "precio": 43200
    },
    "411122173": {
        "nombre": "REMERA CERRO BAYO",
        "precio": 33600
    },
    "411122175": {
        "nombre": "REMERA POLO FIAMBALA",
        "precio": 49000
    },
    "411122179": {
        "nombre": "REMERA POLO LAGUNA BLANCA",
        "precio": 40800
    },
    "411122031": {
        "nombre": "REMERA BASICA ESC REDONDO ML",
        "precio": 33500
    },
    "452167000": {
        "nombre": "BOXER",
        "precio": 24000
    },
    "412514000": {
        "nombre": "PANTALÓN JARAMILLO",
        "precio": 62000
    },
    "412139004": {
        "nombre": "SHORT CASTILLO",
        "precio": 47500
    },
    "412139005": {
        "nombre": "PANTALÓN NERVO RECTO",
        "precio": 45200
    },
    "412118004": {
        "nombre": "PANTALÓN DURAND",
        "precio": 49700
    },
    "412118008": {
        "nombre": "PANTALÓN DURAND SIN PUÑO",
        "precio": 49700
    },
    "411108008": {
        "nombre": "BUZO PAMPERO POLAR",
        "precio": 46600
    },
    "411514004": {
        "nombre": "CAMPERA TRAPICHE",
        "precio": 79990
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
    "411501028": {
        "nombre": "BUZO NOTRO",
        "precio": 81500
    },
    "411139007": {
        "nombre": "CAMPERA CORMORANES",
        "precio": 91000
    },
    "411139008": {
        "nombre": "PANTALÓN URITORCO",
        "precio": 79000
    },
    "411140004": {
        "nombre": "REMERA BASICA ESCOTE REDONDO",
        "precio": 31500
    },
    "411140100": {
        "nombre": "REMERA BASICA ESCOTE EN V",
        "precio": 31500
    },
    "411140133": {
        "nombre": "REMERA TORDO",
        "precio": 29900
    },
    "411140149": {
        "nombre": "REMERA PINO HACHADO",
        "precio": 28900
    },
    "411140163": {
        "nombre": "REMERA POLO PEÑALVA",
        "precio": 44400
    },
    "411140164": {
        "nombre": "REMERA NAHUEL HUAPI",
        "precio": 29900
    },
    "411140166": {
        "nombre": "REMERA ALUMINE",
        "precio": 28600
    },
    "411140168": {
        "nombre": "REMERA EPECUEN",
        "precio": 25600
    },
    "411140172": {
        "nombre": "POLO MC LAGO VIEDMA",
        "precio": 34600
    },
    "411140175": {
        "nombre": "POLO LAGO PAIMUN",
        "precio": 34800
    },
    "412122206": {
        "nombre": "PANTALÓN CALDEN RECTO",
        "precio": 75000
    },
    "412122207": {
        "nombre": "PANTALÓN CALDEN CON PUÑO",
        "precio": 75000
    },
    "411138008": {
        "nombre": "REMERA POLO BASICA",
        "precio": 51500
    },
    "411138009": {
        "nombre": "POLO BASICA PIQUÉ MANGA LARGA",
        "precio": 56500
    },
    "411138013": {
        "nombre": "POLO PALMAR GRANDE",
        "precio": 37500
    },
    "411138015": {
        "nombre": "POLO MC LAGO CARDIEL",
        "precio": 38200
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
    "411140180": {
        "nombre": "REMERA CATAMARCA",
        "precio": 31200
    },
    "411140181": {
        "nombre": "REMERA SAN JUAN",
        "precio": 29300
    },
    "411140182": {
        "nombre": "REMRA JUJUY",
        "precio": 31200
    },
    "411140183": {
        "nombre": "REMERA FORMOSA",
        "precio": 30800
    },
    "411140184": {
        "nombre": "REMERA CHACO",
        "precio": 29900
    },
    "411140185": {
        "nombre": "REMERA SANTA FE",
        "precio": 29990
    },
    "411140186": {
        "nombre": "REMERA BUENOS AIRES",
        "precio": 29990
    },
    "411140187": {
        "nombre": "REMERA CORDOBA",
        "precio": 32400
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
    "411140200": {
        "nombre": "POLO COIGÜE",
        "precio": 45500
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
    "411168100": {
        "nombre": "REMERA SAN NICOLAS MANGA RANGLAN",
        "precio": 34500
    },
    "812522210": {
        "nombre": "PANTALÓN LAGO ARGENTINO",
        "precio": 48900
    },
    "811537002": {
        "nombre": "BUZO AGUAPE",
        "precio": 54000
    },
    "812118001": {
        "nombre": "PANTALÓN SALTA",
        "precio": 63000
    },
    "842106016": {
        "nombre": "CUELLO POLAR PAMPERO",
        "precio": 13500
    },
    "812139012": {
        "nombre": "PANTALÓN NEUQUEN",
        "precio": 79200
    },
    "812139013": {
        "nombre": "PANTALÓN MENDOZA",
        "precio": 66000
    },
    "812139014": {
        "nombre": "SHORT PAMPEANO",
        "precio": 48000
    },
    "812139015": {
        "nombre": "PANTALÓN VIRA VIRA",
        "precio": 75000
    },
    "812139016": {
        "nombre": "PANTALÓN NEUQUEN",
        "precio": 68500
    },
    "812139017": {
        "nombre": "PANTALÓN PENINSULA VALDEZ",
        "precio": 74000
    },
    "812537001": {
        "nombre": "PANTALÓN CEIBO",
        "precio": 66000
    },
    "813106077": {
        "nombre": "CAMPERA JACARANDÁ",
        "precio": 123000
    },
    "813106078": {
        "nombre": "CHALECO JAZMIN",
        "precio": 98000
    },
    "813106079": {
        "nombre": "CAMPERA GLICINA",
        "precio": 135000
    },
    "812514000": {
        "nombre": "PANTALÓN POTRERILLOS",
        "precio": 56200
    },
    "812505000": {
        "nombre": "PANTALÓN MOLLE",
        "precio": 69000
    },
    "812106086": {
        "nombre": "PANTALÓN JAZMIN AZUL",
        "precio": 63000
    },
    "812122209": {
        "nombre": "PANTALÓN LAGO FAGNANO",
        "precio": 46200
    },
    "811122134": {
        "nombre": "REMERA RIO GRANDE",
        "precio": 26000
    },
    "811122135": {
        "nombre": "REMERA RIO PILCOMAYO",
        "precio": 32900
    },
    "811122058": {
        "nombre": "REMERON VILLA TRAFUL",
        "precio": 43600
    },
    "811122288": {
        "nombre": "BUZO PASPALUM",
        "precio": 55000
    },
    "811122268": {
        "nombre": "REMERa LOS GLACIARES",
        "precio": 37200
    },
    "811122269": {
        "nombre": "REMARA YAGANES",
        "precio": 39600
    },
    "811122270": {
        "nombre": "REMERA NAMUNCURA",
        "precio": 62800
    },
    "811122271": {
        "nombre": "REMERA CERRO PISTARINI",
        "precio": 72700
    },
    "811122272": {
        "nombre": "SACO CHUBUT",
        "precio": 85200
    },
    "811138001": {
        "nombre": "POLO TREBOL BLANCO",
        "precio": 46500
    },
    "811139102": {
        "nombre": "BUZO JUVENILES",
        "precio": 50200
    },
    "811147021": {
        "nombre": "MUSCULOSA BARRANQUERAS",
        "precio": 33000
    },
    "811147022": {
        "nombre": "MUSCULOSA RIO BERMEJITO",
        "precio": 33000
    },
    "811147023": {
        "nombre": "REMERA GIRASOLES",
        "precio": 35500
    },
    "811147024": {
        "nombre": "REMERA CARVELINA",
        "precio": 45000
    },
    "811140054": {
        "nombre": "REMERA LEONCITO",
        "precio": 31700
    },
    "811140055": {
        "nombre": "REMERA AZUCENA",
        "precio": 33000
    },
    "811140056": {
        "nombre": "MUSCULOSA MAGNOLIAS",
        "precio": 30000
    },
    "811140057": {
        "nombre": "MUSCULOSA GARDENIA",
        "precio": 33000
    },
    "811140058": {
        "nombre": "REMERA ALHELÍ",
        "precio": 37000
    },
    "811140060": {
        "nombre": "REMERA FLORA NACIONAL",
        "precio": 36000
    },
    "811140061": {
        "nombre": "REMERA DIENTE DE LEON",
        "precio": 36000
    },
    "811140062": {
        "nombre": "REMERA FLORES",
        "precio": 36000
    },
    "811140063": {
        "nombre": "REMERA NARCISO",
        "precio": 37000
    },
    "811140065": {
        "nombre": "PEMERA PUERTO PIRÁMIDES",
        "precio": 42500
    },
    "811140066": {
        "nombre": "VESTIDO IRUPE",
        "precio": 69500
    },
    "811141000": {
        "nombre": "BUZO MICROPOLAR ESC V LA RINCONADA",
        "precio": 41500
    },
    "811141001": {
        "nombre": "CAMPERA POLAR LA PAZ",
        "precio": 76000
    },
    "811141002": {
        "nombre": "BUZO MUITU",
        "precio": 53000
    },
    "811536001": {
        "nombre": "BUZO CERRO LOPEZ",
        "precio": 84700
    },
    "811536002": {
        "nombre": "PONCHO CERRO VENTANA",
        "precio": 53700
    },
    "811533008": {
        "nombre": "REMERA CERRO OTTO",
        "precio": 28990
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
    "811522245": {
        "nombre": "POLERON LAGUNA AZUL",
        "precio": 54900
    },
    "811522248": {
        "nombre": "BUZO LAGUNA DE LOS TRES",
        "precio": 47800
    },
    "811525003": {
        "nombre": "REMERA POLO NATIVA",
        "precio": 49500
    },
    "811139121": {
        "nombre": "MUSCULOSA GENERAL ACHE",
        "precio": 43200
    },
    "811139122": {
        "nombre": "VESTIDO MISIONES",
        "precio": 70800
    },
    "811139123": {
        "nombre": "CHALECO DALIA",
        "precio": 46000
    },
    "811139124": {
        "nombre": "REMERA AMAPOLA",
        "precio": 60000
    },
    "811139125": {
        "nombre": "CAMPERA CORCOVADO",
        "precio": 81000
    },
    "811139126": {
        "nombre": "BUZO LAGO GUTIERREZ",
        "precio": 67500
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
    "811168027": {
        "nombre": "VESTIDO AGUAS VERDES",
        "precio": 55500
    },
    "811168028": {
        "nombre": "ENTERITO CERRO OTTO",
        "precio": 77000
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
    "811166030": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE REDONDO",
        "precio": 32000
    },
    "811166037": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE V",
        "precio": 33000
    },
    "811166053": {
        "nombre": "MUSCULOSA ACUARIO CON VOLADOS",
        "precio": 38900
    },
    "811166059": {
        "nombre": "MUSCULOSA PEÑAFLOR",
        "precio": 34600
    },
    "811517000": {
        "nombre": "BUZO RIO SENGUER",
        "precio": 54400
    },
    "811501020": {
        "nombre": "REMERA RIO TEUCO",
        "precio": 42700
    },
    "811514104": {
        "nombre": "CAMPERA VILLAVICENCIO",
        "precio": 75600
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
    "811106215": {
        "nombre": "POLO RIO TUPUNGATO",
        "precio": 45500
    },
    "811106141": {
        "nombre": "SACON TILCARA I22",
        "precio": 115000
    },
    "811106248": {
        "nombre": "VESTIDO VALLECITO",
        "precio": 64000
    },
    "811106249": {
        "nombre": "VESTIDO PENITENTES",
        "precio": 56900
    },
    "811106176": {
        "nombre": "REMERA POMPEYA",
        "precio": 25000
    },
    "811106177": {
        "nombre": "REMERA POSADAS",
        "precio": 42900
    },
    "811106178": {
        "nombre": "REMERA PARANACITO",
        "precio": 28000
    },
    "811106268": {
        "nombre": "CAMPERA RIO LAPATAIA",
        "precio": 88600
    },
    "811118003": {
        "nombre": "CAMPERA ORAN",
        "precio": 87500
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
    "811106278": {
        "nombre": "POLERON AROMO",
        "precio": 68000
    },
    "811106279": {
        "nombre": "POLERON RETAMA",
        "precio": 98000
    },
    "511122005": {
        "nombre": "REMERA MANGA CORTA CORPORATIVA",
        "precio": 19000
    },
    "511122006": {
        "nombre": "CHOMBA MANGA CORTA CORPORATIVA",
        "precio": 25800
    },
    "811122213": {
        "nombre": "MUSCULOSA LANIN",
        "precio": 30000
    },
    "811122214": {
        "nombre": "MUSCULOSA FITZ ROY",
        "precio": 37900
    },
    "811122216": {
        "nombre": "REMERA LAS TOTORAS",
        "precio": 32200
    },
    "811122217": {
        "nombre": "MUSCULOSA CERRO TORRE",
        "precio": 30900
    },
    "811122219": {
        "nombre": "MUSCULOSA CATEDRAL",
        "precio": 38700
    },
    "811122237": {
        "nombre": "REMERA LA ANGOSTURA",
        "precio": 37500
    },
    "811122238": {
        "nombre": "REMERA LOS ANTIGUOS",
        "precio": 37500
    },
    "811122239": {
        "nombre": "POLERA GAIMAN",
        "precio": 38000
    },
    "811122240": {
        "nombre": "REMERON EL MAITEN",
        "precio": 33600
    },
    "811122241": {
        "nombre": "REMERON CERRO ESCORIAL",
        "precio": 56700
    },
    "811122242": {
        "nombre": "MEDIA POLERA SOCOMPA",
        "precio": 42000
    },
    "811122243": {
        "nombre": "REMERON CERRO GALAN",
        "precio": 43700
    },
    "811122244": {
        "nombre": "POLO TRES CRUCES",
        "precio": 51600
    },
    "811122246": {
        "nombre": "BUZO LAGO ESPEJO",
        "precio": 58500
    },
    "811122247": {
        "nombre": "CHALECO LAGO VERDE",
        "precio": 35800
    },
    "811122046": {
        "nombre": "REMERA BASICA ESC RED. M.L.",
        "precio": 28500
    },
    "811122047": {
        "nombre": "REMERA BASICA ESCOTE REDONDO",
        "precio": 28000
    },
    "811122048": {
        "nombre": "REMERA BASICA ESC. V M.L.",
        "precio": 31000
    },
    "811122049": {
        "nombre": "REMERA BASICA ESCOTE EN V",
        "precio": 29000
    },
    "811122092": {
        "nombre": "REMERA PETUNIA",
        "precio": 35000
    },
    "811122093": {
        "nombre": "REMERA ROSA DE RIO",
        "precio": 36500
    },
    "811122094": {
        "nombre": "MUSCULOSA GALVEZ AMPLIA ESCOTE V",
        "precio": 32900
    },
    "U12122000": {
        "nombre": "PANTALÓN CARGO PAMPEANO RECTO",
        "precio": 88000
    },
    "U12122001": {
        "nombre": "PANTALÓN CARGO PAMPEANO CON PUÑO",
        "precio": 86000
    },
    "411108016": {
        "nombre": "CAMPERA HUMAHUACA",
        "precio": 114000
    },
    "411122245": {
        "nombre": "REMERA MONTAÑAS",
        "precio": 32000
    },
    "411122246": {
        "nombre": "REMERA PROVINCIAS",
        "precio": 32000
    },
    "411122247": {
        "nombre": "POLO VALLE CALCHAQUIES",
        "precio": 53500
    },
    "411138030": {
        "nombre": "REMERA RETAMO",
        "precio": 43500
    },
    "411507000": {
        "nombre": "REMERA VALLE DE LA LUNA",
        "precio": 57000
    },
    "413505000": {
        "nombre": "BUZO OCAMPO CON CAPUCHA",
        "precio": 77000
    },
    "811106299": {
        "nombre": "BUZO PAMPA GRANDE",
        "precio": 135000
    },
    "811106300": {
        "nombre": "CHALECO HUETEL",
        "precio": 115000
    },
    "811106301": {
        "nombre": "CAMPERA LAS LEÑAS",
        "precio": 99000
    },
    "811122320": {
        "nombre": "REMERA TIJERETA",
        "precio": 34500
    },
    "811122321": {
        "nombre": "REMERA LA BANDANA",
        "precio": 45000
    },
    "811122322": {
        "nombre": "POLO RIO FRIAS",
        "precio": 45000
    },
    "811147025": {
        "nombre": "REMERA LA SISTINA",
        "precio": 50500
    },
    "811168029": {
        "nombre": "REMERON EL OMBU",
        "precio": 41000
    },
    "811521010": {
        "nombre": "REMERA LA CANDELARIA",
        "precio": 50500
    },
    "811521011": {
        "nombre": "REMERA LA RAQUEL",
        "precio": 43500
    },
    "411138029": {
        "nombre": "POLO RIO DE LA PLATA",
        "precio": 51500
    },
    "411140224": {
        "nombre": "REMERA RIO DE LA PLATA",
        "precio": 31500
    },
    "813106090": {
        "nombre": "SACO RIO MANSO",
        "precio": 96500
    },
    "813501022": {
        "nombre": "SACO FUTALEUFU",
        "precio": 114000
    },
    "812122230": {
        "nombre": "PANTALÓN SILVESTRE",
        "precio": 93000
    },
    "U21116001": {
        "nombre": "ALPARGATA DE YUTE",
        "precio": 32500
    },
    "921214043": {
        "nombre": "ALPARGATA BASICA INFANTIL (CITEX)",
        "precio": 18000
    },
    "411122244": {
        "nombre": "CAMISA MONTE",
        "precio": 81000
    },
    "412122217": {
        "nombre": "PANTALÓN NAUTICO",
        "precio": 80000
    },
    "412122218": {
        "nombre": "BERMUDA NAUTICO",
        "precio": 69000
    },
    "U2411604C": {
        "nombre": "ALPARGATA YUTE",
        "precio": 31000
    },
    "612122000": {
        "nombre": "BOMBACHA CAMPIÑA ANGOSTA",
        "precio": 82500
    },
    "612506000": {
        "nombre": "PANTALÓN GARZA MUY ANGOSTO",
        "precio": 84700
    },
    "612506002": {
        "nombre": "PANTALÓN CARGO JESUS MARIA",
        "precio": 60000
    },
    "612506003": {
        "nombre": "PANTALÓN CARGO DEL NORTE MUJER",
        "precio": 108000
    },
    "612506004": {
        "nombre": "PANTALÓN CARGO DEL NORTE CAMUFLADO",
        "precio": 115000
    },
    "624101000": {
        "nombre": "SANDALIA ARROYITO",
        "precio": 49700
    },
    "624101001": {
        "nombre": "ZUECO SAN JUAN",
        "precio": 45500
    },
    "811503000": {
        "nombre": "CAMISA SANTA ROSA",
        "precio": 44000
    },
    "811514500": {
        "nombre": "CAMISA ANA MARIA FANTASIA",
        "precio": 54500
    },
    "811122284": {
        "nombre": "CAMISA ANA MARIA",
        "precio": 64500
    },
    "812506040": {
        "nombre": "PANTALÓN CARGO DEL NORTE DENIM MUJER",
        "precio": 112500
    },
    "412101002": {
        "nombre": "PANTALÓN CARGO DEL NORTE",
        "precio": 113000
    },
    "412101003": {
        "nombre": "PANTALÓN CARGO DEL NORTE CAMUFLADO",
        "precio": 120000
    },
    "411514109": {
        "nombre": "CAMISA FRENCH FANTASIA",
        "precio": 55000
    },
    "611101101": {
        "nombre": "CAMISA DIAGUITA M. ROLL UP GAB.",
        "precio": 76000
    },
    "611124001": {
        "nombre": "CAMISA ESTANCIERA",
        "precio": 69000
    },
    "412506019": {
        "nombre": "PANTALÓN CARGO DEL NORTE",
        "precio": 118000
    },
    "424134011": {
        "nombre": "PANCHA PIRAY",
        "precio": 98900
    },
    "424134012": {
        "nombre": "ZAPATILLA MONTECARLO",
        "precio": 110000
    },
    "411122149": {
        "nombre": "CAMISA OCAMPO",
        "precio": 69500
    },
    "411103006": {
        "nombre": "CAMISA BARRACA",
        "precio": 47500
    },
    "312506000": {
        "nombre": "PANTALÓN CARGO BAGUALES H ELASTIZADO",
        "precio": 86000
    },
    "311101101": {
        "nombre": "CAMISA DIAGUITA",
        "precio": 79000
    },
    "22121308C": {
        "nombre": "ALPARGATA SIMIL YUTE COMBINADA",
        "precio": 26000
    },
    "22121309C": {
        "nombre": "ALPARGATA SIMIL YUTE ESTAMPADO DIGITAL",
        "precio": 27000
    },
    "212122001": {
        "nombre": "BOMBACHA PRADO ANGOSTA",
        "precio": 87400
    },
    "22121307C": {
        "nombre": "ALPARGATA SIMIL YUTE FANTASIA",
        "precio": 25500
    },
    "211124004": {
        "nombre": "CAMISA ESTANCIERA",
        "precio": 70000
    },
    "22112200C": {
        "nombre": "ALPARGATA JEAN SIMIL YUTE",
        "precio": 21400
    },
    "221171000": {
        "nombre": "ALPARGATA FORRADA ARPILERA SUELA YUTE",
        "precio": 28500
    },
    "22121304B": {
        "nombre": "ALPARGATA GOMA EVA REFORZADA ADULTO",
        "precio": 19500
    },
    "312122000": {
        "nombre": "PANTALÓN CARGO BAGUALES",
        "precio": 74500
    },
    "312122001": {
        "nombre": "BERMUDA CARGO CONDORES",
        "precio": 71000
    },
    "22121306C": {
        "nombre": "ALPARGATA SIMIL YUTE INYECTADA",
        "precio": 23500
    },
    "224101000": {
        "nombre": "PANCHA YACARE",
        "precio": 55100
    },
    "224101002": {
        "nombre": "PANCHA YAGUARETE",
        "precio": 62500
    },
    "224122000": {
        "nombre": "PANCHA RANCHO",
        "precio": 56000
    },
    "123121000": {
        "nombre": "BOTA NAUTICA PVC C/CUELLO NAUTILUS",
        "precio": 45500
    },
    "123300121": {
        "nombre": "BOTA JOB MASTER RURAL NEGRA",
        "precio": 36000
    },
    "123303121": {
        "nombre": "BOTA NAUTICA PVC S/CUELLO NAUTILUS",
        "precio": 39100
    },
    "823121001": {
        "nombre": "BOTA LLUVIA MUJER PVC COLLECTION",
        "precio": 43500
    },
    "923121000": {
        "nombre": "BOTA DE LLUVIA NIÑOS PVC KINDER",
        "precio": 36500
    },
    "721144000": {
        "nombre": "ZAPATILLA CHAPELCO",
        "precio": 125000
    },
    "721144001": {
        "nombre": "ZAPATILLA LEÑAS",
        "precio": 125000
    },
    "U23173002": {
        "nombre": "BOTÍN TREKKING TRONADOR",
        "precio": 130000
    },
    "U23173003": {
        "nombre": "BOTÍN TREKKING LANIN",
        "precio": 130000
    },
    "U11106008": {
        "nombre": "CAMISA VIYELA CON CORDERITO",
        "precio": 96000
    },
    "U12122002": {
        "nombre": "PANTALÓN PIJAMA",
        "precio": 59000
    },
    "411122243": {
        "nombre": "CAMISA CUELLO MAO MEDIA CARTERA",
        "precio": 81500
    },
    "811122314": {
        "nombre": "VESTIDO AMALIA",
        "precio": 99990
    },
    "811122315": {
        "nombre": "CAMISA LUZ",
        "precio": 74000
    },
    "811122316": {
        "nombre": "CAMISA LUCIA",
        "precio": 75000
    },
    "811122317": {
        "nombre": "CAMISA LUCIA RAYADA",
        "precio": 75000
    },
    "811122318": {
        "nombre": "CAMISA CLARA BRODERIE",
        "precio": 76500
    },
    "411103008": {
        "nombre": "CAMISA SAN LUIS CUELLO SEMI ABIERTO",
        "precio": 77500
    },
    "411528002": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO",
        "precio": 66500
    },
    "411528003": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO",
        "precio": 66500
    },
    "411528004": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO",
        "precio": 66500
    },
    "411124027": {
        "nombre": "CAMISA HILARIO CUELLO ITALIANO SLIM FIT RAYA",
        "precio": 76500
    },
    "411124028": {
        "nombre": "CAMISA HILARIO CUELLO ITALIANO SLIM FIT FANTASIA",
        "precio": 76500
    },
    "411124029": {
        "nombre": "CAMISA HILARIO CUELLO ITALIANO SLIM FIT LISO",
        "precio": 76500
    },
    "811122319": {
        "nombre": "CAMISA CÓRDOBA VIYELA",
        "precio": 72500
    },
    "811501021": {
        "nombre": "CAMISA CLARA S/BOLSILLO GASA",
        "precio": 65500
    },
    "811536004": {
        "nombre": "CAMISA CLARA S/BOLSILLO CHAMBRAY C/SPANDEX",
        "precio": 70500
    },
    "811106035": {
        "nombre": "CAMISOLA CORDOBA",
        "precio": 67000
    },
    "811106169": {
        "nombre": "VESTIDO FESTIVAL",
        "precio": 76500
    },
    "811106170": {
        "nombre": "VESTIDO ELEONORA ESCOTE EN V FIBRANA",
        "precio": 74000
    },
    "811106171": {
        "nombre": "VESTIDO HELENA CUELLO MAO FIBRANA",
        "precio": 96000
    },
    "811106202": {
        "nombre": "CAMISA CLARA S/B CREPPE",
        "precio": 50000
    },
    "811106204": {
        "nombre": "CAMISA CAMPESTRE VIYELA M/L",
        "precio": 67000
    },
    "811122024": {
        "nombre": "CAMISA BRODERY M/L",
        "precio": 87000
    },
    "811101004": {
        "nombre": "CAMISA CAMPESTRE GABARDINA",
        "precio": 62500
    },
    "811102000": {
        "nombre": "CAMISA MAIZANI M. CORDEROY M/L",
        "precio": 70500
    },
    "811103001": {
        "nombre": "CAMISA MAIZANI M.OXF.ALG.M/L",
        "precio": 62000
    },
    "811103006": {
        "nombre": "CAMISA BASICA 70-30 MC OXFORD LISO",
        "precio": 45500
    },
    "811103007": {
        "nombre": "CAMISA BASICA 70-30 MC OXFORD RAYADO",
        "precio": 45500
    },
    "811122110": {
        "nombre": "CAMISA VILLA MERCEDES",
        "precio": 55000
    },
    "811122111": {
        "nombre": "CAMISA CAÑUELAS LINO",
        "precio": 65000
    },
    "811122112": {
        "nombre": "CAMISA JÁUREGUI",
        "precio": 67000
    },
    "811122113": {
        "nombre": "CAMISA PILAR",
        "precio": 62000
    },
    "811122115": {
        "nombre": "CAMISA RAUCH LINO",
        "precio": 67000
    },
    "811122055": {
        "nombre": "CAMISA CLARA SIN BOLSILLO POPLIN",
        "precio": 70500
    },
    "811122248": {
        "nombre": "CAMISOLA GUAMINI LINO",
        "precio": 69900
    },
    "811122249": {
        "nombre": "CAMISA CLARA S/BOLS CUPRO",
        "precio": 53400
    },
    "811122250": {
        "nombre": "BLUSA CALE BODERY",
        "precio": 62000
    },
    "811122251": {
        "nombre": "BLUSA CALE VIYELA",
        "precio": 45500
    },
    "811122221": {
        "nombre": "BLUSA CALE",
        "precio": 67500
    },
    "811122222": {
        "nombre": "CAMISA SALVIA",
        "precio": 79000
    },
    "811122041": {
        "nombre": "CAMISA MAIZANI  M. FANTASIA M/C",
        "precio": 61000
    },
    "811533007": {
        "nombre": "CAMISA BASICA MAIZANI M. POPLIN RAY M/L (VENTA CORPO)",
        "precio": 46000
    },
    "811526000": {
        "nombre": "CAMISA BASICA MAIZANI M.OXFORD M/L",
        "precio": 48500
    },
    "811527003": {
        "nombre": "CAMISA BASICA MAIZANI M. FANTASIA M/L",
        "precio": 43500
    },
    "811527004": {
        "nombre": "CAMISA BASICA MAIZANI M. OXF RAY. M/L",
        "precio": 46000
    },
    "811525007": {
        "nombre": "CAMISA CORDOBA ELASTANO",
        "precio": 63000
    },
    "811525000": {
        "nombre": "CAMISA MAIZANI M. POPLIN ELAST. M/L",
        "precio": 66000
    },
    "811525002": {
        "nombre": "CAMISA MAIZANI M. POPLIN ELAST. FANTASIA M/L",
        "precio": 62000
    },
    "811548000": {
        "nombre": "CAMISA MAIZANI M/C ALG LYCRA",
        "precio": 61000
    },
    "811543001": {
        "nombre": "CAMISA JAUREGUI LINO",
        "precio": 86000
    },
    "811543002": {
        "nombre": "VESTIDO ELEONORA ESCOTE EN V LINO",
        "precio": 74000
    },
    "811505001": {
        "nombre": "CAMISA BASICA MAIZANI M. POPLIN LISO M/L",
        "precio": 46000
    },
    "811500000": {
        "nombre": "CAMISA MAIZANI M/L DENIM",
        "precio": 63000
    },
    "811148004": {
        "nombre": "CAMISA FORMOSA M. VOILE M/L",
        "precio": 62000
    },
    "811148020": {
        "nombre": "CAMISA CLARA VOILE",
        "precio": 68000
    },
    "811122289": {
        "nombre": "CAMISA VOLADOS",
        "precio": 73000
    },
    "811122290": {
        "nombre": "CAMISACO LEÑADORA",
        "precio": 70500
    },
    "811122291": {
        "nombre": "CONJUNTO PIJAMA",
        "precio": 101500
    },
    "811106260": {
        "nombre": "CAMISA CAMPESTRE",
        "precio": 60500
    },
    "811122263": {
        "nombre": "CAMISA RAUCH BRODERY",
        "precio": 88000
    },
    "811122264": {
        "nombre": "BLUSA CALE BRODERY",
        "precio": 69500
    },
    "811122265": {
        "nombre": "CAMISA CAÑUELAS POPLIN",
        "precio": 64500
    },
    "811122266": {
        "nombre": "CAMISA CANDELA",
        "precio": 53900
    },
    "811122267": {
        "nombre": "CAMISA CLARA ELASTIZADA",
        "precio": 62000
    },
    "811124001": {
        "nombre": "CAMISA MAIZANI M/L POPLIN",
        "precio": 65000
    },
    "811124003": {
        "nombre": "CAMISA MAIZANI M/L CUADROS",
        "precio": 64000
    },
    "811124004": {
        "nombre": "CAMISA MAIZANI M/L FANTASIA",
        "precio": 66000
    },
    "811124027": {
        "nombre": "CAMISA MODELO COLINA SIMIL DENIM",
        "precio": 55400
    },
    "811124029": {
        "nombre": "VESTIDO ISABEL CON VOLADO",
        "precio": 74000
    },
    "811124030": {
        "nombre": "CAMISA BASICA 70-30 MC POLIN LISO",
        "precio": 45500
    },
    "811124031": {
        "nombre": "CAMISA BAISCA 70-30 MC POPLIN RAYADO",
        "precio": 45500
    },
    "811124033": {
        "nombre": "CAMISA CLARA",
        "precio": 70500
    },
    "911122193": {
        "nombre": "CAMISA NIÑO VIYELA",
        "precio": 42500
    },
    "911122194": {
        "nombre": "CAMISA M/L NIÑA BRODERY",
        "precio": 42500
    },
    "911122195": {
        "nombre": "CAMISA NIÑA VIYELA",
        "precio": 42500
    },
    "911543000": {
        "nombre": "CAMISA JOSE LINO",
        "precio": 42500
    },
    "911124003": {
        "nombre": "CAMISA EMILIO CUADROS M/L",
        "precio": 43500
    },
    "911124010": {
        "nombre": "CAMISA EMILIA N. POPLIN",
        "precio": 43500
    },
    "911124011": {
        "nombre": "CAMISA COLEGIAL M/L SIN BOLSILLO",
        "precio": 39000
    },
    "911111103": {
        "nombre": "CAMISA SARA N. OXF M/L",
        "precio": 43500
    },
    "911103000": {
        "nombre": "CAMISA MANUEL M/L C/BOLS. OXF.",
        "precio": 43500
    },
    "911104000": {
        "nombre": "CAMISA JUANA DENIM C/BOLS.",
        "precio": 43500
    },
    "911104001": {
        "nombre": "CAMISA JUAN DENIM 1BOLS.",
        "precio": 43500
    },
    "411103007": {
        "nombre": "CAMISA HOMBRE CUELLO MAO",
        "precio": 69500
    },
    "411104001": {
        "nombre": "CAMISA SOLER DENIM M/L C/BOLS.",
        "precio": 67000
    },
    "411101004": {
        "nombre": "CAMISA SOLER GABARDINA 1 BOLSILLO LAVADA",
        "precio": 69500
    },
    "411102000": {
        "nombre": "CAMISA SOLER DE CORDEROY 1 BOLSILLO",
        "precio": 78000
    },
    "411103004": {
        "nombre": "CAMISA SOLER MC C. BOLSILLO 70-30 OXFORD",
        "precio": 46500
    },
    "411103005": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 OXFORD RAYADO",
        "precio": 46500
    },
    "411111103": {
        "nombre": "CAMISA SOLER OXFORD M/L C/BOLS.",
        "precio": 72000
    },
    "411111124": {
        "nombre": "CAMISA SOLER POPLIN M/L C/BOLS.",
        "precio": 68000
    },
    "411122002": {
        "nombre": "CAMISA HOMBRE CUELLO MAO",
        "precio": 74000
    },
    "411122007": {
        "nombre": "CAMISA SOLER VIYELA M/L C/BOLS",
        "precio": 72500
    },
    "411122013": {
        "nombre": "CAMISA SOLER M/C LINO",
        "precio": 76500
    },
    "411122015": {
        "nombre": "CAMISA SOLER H. RAYAS M/C C/BOLS",
        "precio": 72000
    },
    "411122016": {
        "nombre": "CAMISA SOLER POPLIN M/C C/CINTA HILERA",
        "precio": 72000
    },
    "411122019": {
        "nombre": "CAMISA CEFERINO CUELLO ITALIANO FANTASIA M/L S/BOLS",
        "precio": 75000
    },
    "411122206": {
        "nombre": "CAMISA SOLER CUELLO MAO",
        "precio": 81500
    },
    "411122207": {
        "nombre": "CAMISA MONTURA",
        "precio": 81500
    },
    "411122208": {
        "nombre": "CAMISA SOLER CUELLO INGLES M/C FANTASIA",
        "precio": 67000
    },
    "411122143": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO S/B LINO",
        "precio": 87500
    },
    "411124001": {
        "nombre": "CAMISA SOLER CUELLO INGLES BOTON ML C/B POPLIN CUADROS",
        "precio": 66000
    },
    "411124005": {
        "nombre": "CAMISA CASTELLI RAYAS C/A 1BOLS.",
        "precio": 66000
    },
    "411124011": {
        "nombre": "CAMISA SOLER H. POPLIN CUADROS M/C C/BOL",
        "precio": 72000
    },
    "411124012": {
        "nombre": "CAMISA SAN LUIS H. POPLIN M/L C/BOLS. RAYADA",
        "precio": 76500
    },
    "411124020": {
        "nombre": "CAMISA SAN LUIS CUELLO SEMI ABIERTO",
        "precio": 76500
    },
    "411124021": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO RAYAS S/BOLSILLO",
        "precio": 76500
    },
    "411124022": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO CUADROS S/BOLSILLO",
        "precio": 76500
    },
    "411124025": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 POPLIN",
        "precio": 46500
    },
    "411124026": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 POPLIN RAYADO",
        "precio": 46500
    },
    "411122227": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO COMBINADA",
        "precio": 72000
    },
    "411122228": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO SIN BOTON M/L",
        "precio": 76500
    },
    "411122229": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO SIN BOTON M/L",
        "precio": 75000
    },
    "411122230": {
        "nombre": "CAMISACO LEÑADOR",
        "precio": 82500
    },
    "442122000": {
        "nombre": "BOXER",
        "precio": 24900
    },
    "411122020": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO LISA M/L S/BOLS",
        "precio": 76500
    },
    "411505004": {
        "nombre": "CAMISA BASICA SOLER RAYADA 70/30",
        "precio": 46000
    },
    "411526000": {
        "nombre": "CAMISA BASICA SOLER OXFORD M/L C/BOLS.",
        "precio": 51000
    },
    "411527000": {
        "nombre": "CAMISA BASICA SOLER CUADROS M/L C/BOLS.",
        "precio": 46000
    },
    "411527003": {
        "nombre": "CAMISA BASICA SOLER LISA C/BOLS.M/L",
        "precio": 47000
    },
    "411527012": {
        "nombre": "CAMISA BASICA SOLER OXF. RAY. M/L",
        "precio": 47000
    },
    "411533000": {
        "nombre": "CAMISA BASICA SOLER POPLIN RAY M/L C/BOLS (VTA CORPO)",
        "precio": 47000
    },
    "411543001": {
        "nombre": "CAMISA HILARIO CUELLO IT. SLIM FIT",
        "precio": 76500
    },
    "311152001": {
        "nombre": "CAMISA CHALTEN HOMBRE MINIRIPSTOP",
        "precio": 141700
    },
    "241101004": {
        "nombre": "SOMBRERO AUSTRALIANO ADULTO",
        "precio": 18000
    },
    "411122231": {
        "nombre": "SWEATER MORRIS ESCOTE V",
        "precio": 66000
    },
    "411122213": {
        "nombre": "CARDIGAN CEDRO",
        "precio": 89990
    },
    "411122214": {
        "nombre": "SWEATER PINO",
        "precio": 67000
    },
    "411122215": {
        "nombre": "SWEATER CAOBA",
        "precio": 65000
    },
    "411122203": {
        "nombre": "CARDIGAN BERNAL",
        "precio": 73700
    },
    "411122204": {
        "nombre": "CAMPERA SAN JUSTO",
        "precio": 95000
    },
    "411122205": {
        "nombre": "SWEATER CASEROS",
        "precio": 68700
    },
    "411540002": {
        "nombre": "SWEATER GEONA",
        "precio": 87900
    },
    "411540003": {
        "nombre": "SWEATER EL TALA",
        "precio": 87900
    },
    "411540004": {
        "nombre": "SWEATER LA HORNILLA",
        "precio": 69400
    },
    "411122160": {
        "nombre": "SWEATER MORRIS",
        "precio": 66000
    },
    "411122238": {
        "nombre": "POLO FRESNO",
        "precio": 67000
    },
    "411122240": {
        "nombre": "CHALECO LENGA",
        "precio": 57000
    },
    "411122241": {
        "nombre": "CAMPERA BOREAL",
        "precio": 87000
    },
    "411520000": {
        "nombre": "SWEATER FELICIANO",
        "precio": 73500
    },
    "411520001": {
        "nombre": "SWEATER LAS TAZANAS",
        "precio": 103200
    },
    "411520002": {
        "nombre": "SWEATER ITAMBAÉ",
        "precio": 111000
    },
    "411514104": {
        "nombre": "CAMPERA JOSE",
        "precio": 99990
    },
    "411514105": {
        "nombre": "SWEATER BRANDON",
        "precio": 91000
    },
    "411514106": {
        "nombre": "SWEATER KAY",
        "precio": 78000
    },
    "411122186": {
        "nombre": "SWEATER LOS CHORRILLOS",
        "precio": 56400
    },
    "411540006": {
        "nombre": "SWEATER SANDALO",
        "precio": 94000
    },
    "411540007": {
        "nombre": "SWEATER ROBLE",
        "precio": 87000
    },
    "442173002": {
        "nombre": "BUFANDA ESCOCESA",
        "precio": 18000
    },
    "442173003": {
        "nombre": "BUFANDA ESPIGA",
        "precio": 19700
    },
    "443106000": {
        "nombre": "GUANTE SIMPLE ADULTO",
        "precio": 8500
    },
    "441545000": {
        "nombre": "AUSTRALIANO (MODELO PILUSO)",
        "precio": 11000
    },
    "441173006": {
        "nombre": "GORRA CHAPLIN (LISA)",
        "precio": 19500
    },
    "441122001": {
        "nombre": "GORRA CAP DE LINO",
        "precio": 27600
    },
    "441122002": {
        "nombre": "GORRA INGLESA DE LINO",
        "precio": 15600
    },
    "441141006": {
        "nombre": "GORRO ROCKY POLAR ADENTRO",
        "precio": 10000
    },
    "441143000": {
        "nombre": "GORRA INGLESA LISA AJUSTABLE",
        "precio": 19700
    },
    "441143002": {
        "nombre": "GORRA CHARLES",
        "precio": 19500
    },
    "441160002": {
        "nombre": "GORRO CANELONES",
        "precio": 8100
    },
    "441101002": {
        "nombre": "GORRA GABARDINA",
        "precio": 14600
    },
    "441101003": {
        "nombre": "GORRA INGLESA DE GABARDINA",
        "precio": 22000
    },
    "441106003": {
        "nombre": "GORRO ROCKY ADULTO",
        "precio": 7500
    },
    "441106008": {
        "nombre": "GORRA CAZADOR SECADO RAPIDO",
        "precio": 23800
    },
    "911122212": {
        "nombre": "SWEATER MAREA",
        "precio": 42000
    },
    "911122213": {
        "nombre": "CARDIGAN CUMBRE",
        "precio": 45000
    },
    "911122214": {
        "nombre": "CARDIGAN BOSQUE",
        "precio": 45000
    },
    "911135000": {
        "nombre": "SWEATER ESCOLOAR ESCOTE V",
        "precio": 36500
    },
    "911135001": {
        "nombre": "CARDIGAN ESCOLAR",
        "precio": 43500
    },
    "943160004": {
        "nombre": "GUANTE MAGICO INFANTIL",
        "precio": 5500
    },
    "U01106000": {
        "nombre": "BOLSA DE LIENZO Nº1",
        "precio": 5600
    },
    "U01106001": {
        "nombre": "BOLSA DE LIENZO Nº2",
        "precio": 5800
    },
    "U01106002": {
        "nombre": "BOLSA DE LIENZO Nº3",
        "precio": 6800
    },
    "U01106003": {
        "nombre": "BOLSA DE LIENZO Nº4",
        "precio": 7200
    },
    "U01122000": {
        "nombre": "TOTE GINA",
        "precio": 39500
    },
    "U01122001": {
        "nombre": "TOTE GINA",
        "precio": 55900
    },
    "911122308": {
        "nombre": "SWEATER BAMBU",
        "precio": 45000
    },
    "911122309": {
        "nombre": "CARDIGAN ARENA",
        "precio": 45000
    },
    "941135000": {
        "nombre": "GORRO TRENZADO INFANTIL",
        "precio": 8000
    },
    "941545001": {
        "nombre": "GORRA GABARDINA INFANTIL",
        "precio": 18200
    },
    "942141000": {
        "nombre": "BUFANDA LISA",
        "precio": 17500
    },
    "845122005": {
        "nombre": "BOLSO Y MANTA PLAYERO",
        "precio": 71800
    },
    "842173007": {
        "nombre": "PASHMINA LISA",
        "precio": 17600
    },
    "941106000": {
        "nombre": "GORRO ROCKY INFANTIL",
        "precio": 7500
    },
    "941106002": {
        "nombre": "CAZADORA INFANTIL",
        "precio": 17800
    },
    "842106017": {
        "nombre": "PAÑUELO ESTAMPADO",
        "precio": 19500
    },
    "842135002": {
        "nombre": "RUANA DE INVIERNO",
        "precio": 48000
    },
    "842135003": {
        "nombre": "MANTA ELISA",
        "precio": 49990
    },
    "843135000": {
        "nombre": "GUANTE DE MUJER",
        "precio": 6000
    },
    "841135000": {
        "nombre": "GORRO JASPEADO POMPON",
        "precio": 10800
    },
    "841143000": {
        "nombre": "GORRA CAP DE PAÑO",
        "precio": 16100
    },
    "841545007": {
        "nombre": "SOMBRERO DE RAFIA FEMENINO",
        "precio": 15000
    },
    "842106001": {
        "nombre": "PAÑUELO LISO",
        "precio": 19500
    },
    "842106003": {
        "nombre": "PASHMINA ESCOCESA",
        "precio": 17600
    },
    "842106005": {
        "nombre": "CUELLO TEJIDO SIMPLE",
        "precio": 10200
    },
    "842106008": {
        "nombre": "PASHMINA VERANO",
        "precio": 15600
    },
    "842106015": {
        "nombre": "PAÑUELO BIANCA",
        "precio": 18000
    },
    "811122091": {
        "nombre": "KIMONO",
        "precio": 27900
    },
    "811135021": {
        "nombre": "SWEATER SALVIA",
        "precio": 62000
    },
    "811122306": {
        "nombre": "MUSCULOSA ISABEL",
        "precio": 76000
    },
    "811122307": {
        "nombre": "SWEATER ANTONIA",
        "precio": 64000
    },
    "811122310": {
        "nombre": "REMERA CELINA",
        "precio": 76000
    },
    "811514113": {
        "nombre": "SWEATER TERE",
        "precio": 69200
    },
    "811122287": {
        "nombre": "SWEATER MAGNOLIA",
        "precio": 80000
    },
    "811173001": {
        "nombre": "RUANA VERANO",
        "precio": 40300
    },
    "811540009": {
        "nombre": "SWEATER HIGO",
        "precio": 99990
    },
    "811521003": {
        "nombre": "MUSCULOSA BRISA",
        "precio": 68000
    },
    "811521004": {
        "nombre": "CARDIGAN MIEL",
        "precio": 95000
    },
    "811521005": {
        "nombre": "SWEATER CANELA",
        "precio": 95000
    },
    "811521006": {
        "nombre": "SWEATER NIEVES",
        "precio": 93000
    },
    "811521007": {
        "nombre": "SWEATER CARDAMOMO",
        "precio": 95500
    },
    "811520130": {
        "nombre": "SWEATER REX",
        "precio": 79000
    },
    "811520131": {
        "nombre": "POLERA AMBAR",
        "precio": 95000
    },
    "811520132": {
        "nombre": "POLERA CANELÓN",
        "precio": 76000
    },
    "811520133": {
        "nombre": "SWEATER DALIA",
        "precio": 76600
    },
    "811520134": {
        "nombre": "CARDIGAN JANNA",
        "precio": 69400
    },
    "811520135": {
        "nombre": "SWEATER IRIS",
        "precio": 92000
    },
    "811520136": {
        "nombre": "REMERA POLY",
        "precio": 71600
    },
    "811122252": {
        "nombre": "MUSCULOSA ALICIA",
        "precio": 64600
    },
    "811122253": {
        "nombre": "MUSCULOSA GALIA",
        "precio": 71000
    },
    "811122254": {
        "nombre": "MUSCULOSA CASANDRA",
        "precio": 42900
    },
    "811122255": {
        "nombre": "VESTIDO ELINA",
        "precio": 59700
    },
    "811122256": {
        "nombre": "MUSCULOSA FRIDA LISA",
        "precio": 45400
    },
    "811122257": {
        "nombre": "SACO DELIA",
        "precio": 81400
    },
    "811122258": {
        "nombre": "SWEATER FRANCISCA",
        "precio": 55200
    },
    "442108000": {
        "nombre": "CUELLO POLAR DOBLE",
        "precio": 12000
    },
    "811106252": {
        "nombre": "MUSCULOSA FRIDA LUREX",
        "precio": 47800
    },
    "943135000": {
        "nombre": "GUANTE TEJIDO INFANTIL",
        "precio": 5000
    },
    "811122311": {
        "nombre": "MUSCULOSA IGNACIA",
        "precio": 73000
    },
    "811122313": {
        "nombre": "SWAETER ANA",
        "precio": 71000
    },
    "U41106001": {
        "nombre": "PILUSO CROCHET",
        "precio": 28500
    },
    "U41106002": {
        "nombre": "SOMBRERO CAZADOR TAPANUCA",
        "precio": 24000
    },
    "U41171001": {
        "nombre": "SOMBRERO CEFERINO",
        "precio": 20700
    },
    "U41171003": {
        "nombre": "SOMBRERO FRANCISCO",
        "precio": 20700
    },
    "U41135002": {
        "nombre": "GORRO CALAFATE",
        "precio": 9600
    },
    "U41135003": {
        "nombre": "GORRO CORDILLERA",
        "precio": 10000
    },
    "U41135004": {
        "nombre": "GORRO GLACIAR",
        "precio": 10000
    },
    "U41135005": {
        "nombre": "GORRO LENGA",
        "precio": 10000
    },
    "U41122001": {
        "nombre": "GORRA PAMPERO GABARDINA",
        "precio": 28000
    },
    "U41122002": {
        "nombre": "GORRA PAMPERO EFECTO LAVADO",
        "precio": 28000
    },
    "U21106000": {
        "nombre": "ALPARGATA INYECTADA GAMUZA CON CORDERITO",
        "precio": 35500
    },
    "U21116002": {
        "nombre": "ALPARGATA SIMIL YUTE COMBINADA",
        "precio": 26000
    },
    "U21116003": {
        "nombre": "ALPARGATA SIMIL YUTE RECORTE PUNTERA",
        "precio": 26500
    },
    "424122001": {
        "nombre": "ZAPATILLA QUIMILI",
        "precio": 62500
    },
    "824106004": {
        "nombre": "SANDALIA MOñO",
        "precio": 35800
    },
    "824122000": {
        "nombre": "ALPARGATA ACORDONADA COSTEÑA",
        "precio": 37500
    },
    "22121306M": {
        "nombre": "ALPARGATA INYECTADA SIMIL YUTE",
        "precio": 23500
    },
    "22121304M": {
        "nombre": "ALPARGATA GOMA EVA REFORZADA ADULTO",
        "precio": 19500
    },
    "22121305M": {
        "nombre": "ALPARGATA BASICA ADULTO COMBINADA",
        "precio": 19500
    },
    "22121307M": {
        "nombre": "ALPARGATA SIMIL YUTE FANTASÍA",
        "precio": 25500
    },
    "241122005": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 30 CM",
        "precio": 28500
    },
    "241122006": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 32 CM",
        "precio": 35000
    },
    "241122007": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 35 CM",
        "precio": 37000
    },
    "241122008": {
        "nombre": "BOINA VASCA ALGODÓN 32 CM CON TAFILETE",
        "precio": 50000
    },
    "241122009": {
        "nombre": "BOINA VASCA ALGODÓN 35 CM CON TAFILETE",
        "precio": 57500
    },
    "241122010": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN 30 CM",
        "precio": 33500
    },
    "241122011": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN 32 CM",
        "precio": 38500
    },
    "241122012": {
        "nombre": "BOINA GUARDA MAPUCHE ALGODÓN 30 CM",
        "precio": 34500
    },
    "241122013": {
        "nombre": "BOINA VASCA ROMBOS TRAMADOS 32 CM",
        "precio": 33000
    },
    "241143000": {
        "nombre": "BOINA VASCA PAÑO 32 CM",
        "precio": 59000
    },
    "241143001": {
        "nombre": "BOINA VASCA PAÑO 35 CM",
        "precio": 64500
    },
    "241533000": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 30 CM",
        "precio": 30000
    },
    "241533001": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 32 CM",
        "precio": 35000
    },
    "241533002": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 35 CM",
        "precio": 39500
    },
    "242122012": {
        "nombre": "BUFANDA GUARDA PAMPA CON FLECOS PASADOS",
        "precio": 46000
    },
    "242122013": {
        "nombre": "BOINA GUARDA PAMPA/GRIEGA ALGODÓN 30 CM",
        "precio": 34500
    },
    "242122014": {
        "nombre": "BUFANDA RAYADA, MOTEADA HORIZONTAL (FOTO1)",
        "precio": 42500
    },
    "242533000": {
        "nombre": "BUFANDA TRAMA ABORIGEN ALGODÓN JASPEADO",
        "precio": 49500
    },
    "244122009": {
        "nombre": "FAJA GUARDA PAMPA REVERSIBLE 9 CM ADULTO",
        "precio": 55500
    },
    "244122010": {
        "nombre": "FAJA DOBLE GUARDA REVERSIBLE 9 CM ADULTO",
        "precio": 55500
    },
    "244122011": {
        "nombre": "FAJA GUARDA INCAICA REVERSIBLE 9 CM ADULTO",
        "precio": 55500
    },
    "244122012": {
        "nombre": "FAJA GUARDA TRINADA REVERSIBLE 9 CM ADULTO",
        "precio": 57500
    },
    "245122000": {
        "nombre": "RUANA DRALLON CON ROMBOS EN EL BAJO",
        "precio": 77500
    },
    "245122001": {
        "nombre": "RUANA PESADA CON GUARDA ALGODÓN JASPEADO",
        "precio": 99500
    },
    "245122002": {
        "nombre": "PONCHO PESADO PEHUENSE CON FLECOS",
        "precio": 219000
    },
    "941160003": {
        "nombre": "BOINA DE NIÑO BORDADA",
        "precio": 64500
    },
    "941106005": {
        "nombre": "BOINA DE NIÑO CON POMPON",
        "precio": 39500
    },
    "941122003": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA NIÑO",
        "precio": 25500
    },
    "941122004": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN NIÑO",
        "precio": 31000
    },
    "944122002": {
        "nombre": "FAJA GUARDA PAMPA/GRIEGA NIÑO",
        "precio": 33500
    },
    "844122000": {
        "nombre": "CINTO TEJIDO 4 CM",
        "precio": 32000
    },
    "641122000": {
        "nombre": "BOINA VASCA ALGODÓN LINEA MUJER 30 CM",
        "precio": 30500
    },
    "641122001": {
        "nombre": "BOINA VASCA ALGODÓN BORDADA A MANO 30cm",
        "precio": 74500
    },
    "641122002": {
        "nombre": "BOINA VASCA ALGODÓN BORDADA A MANO",
        "precio": 77000
    },
    "641122003": {
        "nombre": "BOINA VASCA PAÑO BORDADA",
        "precio": 109000
    },
    "641122004": {
        "nombre": "BOINA VASCA TRAMA CROCHET MUJER",
        "precio": 36000
    },
    "644122001": {
        "nombre": "CINTO TEJIDO CON BORLAS",
        "precio": 35500
    },
    "645122000": {
        "nombre": "RUANA BORDADO ARTESANAL CON FLECOS",
        "precio": 134000
    },
    "645122001": {
        "nombre": "RUANA FLOR DE LIS CON FLECOS",
        "precio": 89500
    },
    "645122002": {
        "nombre": "PASHMINA CON GUARDAS REVERSIBLE",
        "precio": 74000
    },
    "645122004": {
        "nombre": "BOINA VASCA TRAMA CROCHET MUJERS",
        "precio": 38000
    },
    "645122005": {
        "nombre": "PASHMINA CON ROMBOS VERTICALES",
        "precio": 61000
    },
    "645504000": {
        "nombre": "RUANA CON ROMBOS REVERSIBLE",
        "precio": 93000
    },
    "641122005": {
        "nombre": "BOINA ALGODÓN POMPÓN 30CM",
        "precio": 49000
    },
    "241122014": {
        "nombre": "BOINA LISA LIVIANA 32CM",
        "precio": 30500
    },
    "244122013": {
        "nombre": "FAJA ARGENTINA",
        "precio": 44500
    },
    "944122003": {
        "nombre": "FAJA ARGENTINA NIÑO",
        "precio": 30000
    },
    "U44122004": {
        "nombre": "BOINA VASCA GAJOS",
        "precio": 33500
    },
    "U44122005": {
        "nombre": "BOINA VASCA ALGODÓN BORDADO INDUSTRIAL",
        "precio": 54000
    },
    "U44122000": {
        "nombre": "FAJA GUARDA MAPUCHE REVERSIBLE 12 CM",
        "precio": 61500
    },
    "U44122001": {
        "nombre": "FAJA LOBOS LISA",
        "precio": 55500
    },
    "U44122003": {
        "nombre": "BOINA VASCA ALGODON BORDADA A MANO",
        "precio": 78500
    },
    "U11122003": {
        "nombre": "CAMISA CAMPO",
        "precio": 52000
    },
    "U45106001": {
        "nombre": "MANTA MULTIFUNCION",
        "precio": 57500
    },
    "311128002": {
        "nombre": "REMERA SALADAS",
        "precio": 32500
    },
    "313106202": {
        "nombre": "CAMPERA PACÚ",
        "precio": 70000
    },
    "U11157000": {
        "nombre": "CAMISA CAMPO RIP STOP",
        "precio": 68000
    },
    "712106010": {
        "nombre": "CALZA SANTA ROSA",
        "precio": 42500
    },
    "711106015": {
        "nombre": "REMERA CONCEPCION M/L(SUBLIMADA MUJER)",
        "precio": 37000
    },
    "711106016": {
        "nombre": "REMERA TABAY (CAPUCHA CUELLO REDONDO)",
        "precio": 33000
    },
    "711106018": {
        "nombre": "CAMISA PENKEN",
        "precio": 87000
    },
    "911106012": {
        "nombre": "REMERA ROQUE NIÑO M/L (SUBLIMADA NIÑO)",
        "precio": 33000
    },
    "411107000": {
        "nombre": "ROMPEVIENTO CALEU CALEU",
        "precio": 54000
    },
    "311106109": {
        "nombre": "CAMISA HUI HUI",
        "precio": 87000
    },
    "311106021": {
        "nombre": "BUZO RIOS CANGURO",
        "precio": 73500
    },
    "311106016": {
        "nombre": "REMERA YAPEYU M/L (SUBLIMADA HOMBRE)",
        "precio": 35500
    },
    "311106017": {
        "nombre": "REMERA SALADAS(SIN CAPUCHA MICROFIBRA)",
        "precio": 32700
    },
    "312106020": {
        "nombre": "CALZA LORETO",
        "precio": 42500
    },
    "312106021": {
        "nombre": "PANTALÓN MOCORETA CARGO DESMONTABLE",
        "precio": 89500
    },
    "313106016": {
        "nombre": "CAMPERA EMPEDRADO (SUBLIMADA SOFSHELL)",
        "precio": 217500
    },
    "313106017": {
        "nombre": "CAMPERA SAUCE (SUBLIMADO FRIZA SOFSHELL)",
        "precio": 118500
    },
    "313106018": {
        "nombre": "CHALECO BURUCUYA (SUBLIMADO SOFSHELL)",
        "precio": 115000
    },
    "313106019": {
        "nombre": "CHALECO DORADO",
        "precio": 115000
    },
    "342106000": {
        "nombre": "BUF",
        "precio": 69500
    },
    "413101031": {
        "nombre": "CAMPERA RUSTICA",
        "precio": 101000
    },
    "312157000": {
        "nombre": "PANTALÓN HUEMUL",
        "precio": 72500
    },
    "411108009": {
        "nombre": "CHALECO INCA",
        "precio": 61200
    },
    "411108010": {
        "nombre": "CAMPERA INCA POLAR",
        "precio": 71100
    },
    "411122188": {
        "nombre": "REMERA CHAPA",
        "precio": 32300
    },
    "411122189": {
        "nombre": "REMERA GUITARRA",
        "precio": 23300
    },
    "411122190": {
        "nombre": "REMERA SENTIDO",
        "precio": 23300
    },
    "411140179": {
        "nombre": "REMERA MALTINTO",
        "precio": 29900
    },
    "411140129": {
        "nombre": "REMERA RINGER",
        "precio": 22100
    },
    "412106029": {
        "nombre": "PANTALÓN VIAJERO SECADO RAPIDO",
        "precio": 110500
    },
    "412106030": {
        "nombre": "BERMUDA VIAJERO SECADO RAPIDO",
        "precio": 89900
    },
    "412106032": {
        "nombre": "PANTALÓN VIAJERO DESMONTABLE",
        "precio": 129000
    },
    "412106033": {
        "nombre": "SHORT MUNDO",
        "precio": 74000
    },
    "412106107": {
        "nombre": "PANTALÓN TRAVESIA",
        "precio": 99000
    },
    "411168102": {
        "nombre": "REMERA BIENESTAR",
        "precio": 29900
    },
    "412506010": {
        "nombre": "BERMUDA VIAJERO",
        "precio": 94300
    },
    "413106042": {
        "nombre": "CAMPERA CABILDO",
        "precio": 98400
    },
    "413106043": {
        "nombre": "CAMPERA VENTISQUERA",
        "precio": 126500
    },
    "313106201": {
        "nombre": "ROMPEVIENTO ORTIZ AVE",
        "precio": 89900
    },
    "41112202": {
        "nombre": "REMERA BIENESTAR RAYADA LAVADA",
        "precio": 22300
    },
    "411106108": {
        "nombre": "CAMISA ACTIVIDAD",
        "precio": 106000
    },
    "411106109": {
        "nombre": "CAMISA TRABAJO",
        "precio": 78000
    },
    "411106110": {
        "nombre": "CAMPERA PACHECO",
        "precio": 63600
    },
    "411106004": {
        "nombre": "REMERA BIENESTAR RAYADA",
        "precio": 22800
    },
    "411106005": {
        "nombre": "CHALECO CRUZ CORDERITO",
        "precio": 67200
    },
    "411106006": {
        "nombre": "CHALECO CABILDO",
        "precio": 73500
    },
    "411106007": {
        "nombre": "ROMPEVIENTO ORTIZ",
        "precio": 67000
    },
    "411122159": {
        "nombre": "REMERA VENTURA CON PUÑO",
        "precio": 25700
    },
    "411122145": {
        "nombre": "REMERA BIENESTAR ALGODÓN",
        "precio": 29900
    },
    "411122232": {
        "nombre": "POLO HORIZONTE",
        "precio": 66000
    },
    "411122233": {
        "nombre": "POLO ALBA",
        "precio": 72000
    },
    "411122234": {
        "nombre": "REMERA MAREA",
        "precio": 39900
    },
    "411122235": {
        "nombre": "REMERA SERENIDAD",
        "precio": 39900
    },
    "411122236": {
        "nombre": "REMERA RINGER",
        "precio": 47500
    },
    "411122237": {
        "nombre": "POLO RAÍCES",
        "precio": 61500
    },
    "312152000": {
        "nombre": "BERMUDA RUTA",
        "precio": 74000
    },
    "911106031": {
        "nombre": "REMERA PRIMERA PIEL",
        "precio": 27800
    },
    "U11106000": {
        "nombre": "REMERA PRIMERA PIEL",
        "precio": 32000
    },
    "U11106002": {
        "nombre": "REMERA PRIMERA PIEL BASICA",
        "precio": 23500
    },
    "U11106003": {
        "nombre": "MICROPOLAR OTTO W",
        "precio": 81600
    },
    "U11106004": {
        "nombre": "MICROPOLAR OTTO",
        "precio": 64800
    },
    "U11106005": {
        "nombre": "CHALECO CAMPANARIO",
        "precio": 57600
    },
    "U11106006": {
        "nombre": "CAMPERA CAMPANARIO",
        "precio": 67200
    },
    "U11106007": {
        "nombre": "CAMPANARIO MEDIO CIERRE",
        "precio": 55200
    },
    "912106027": {
        "nombre": "PANTALÓN PRIMERA PIEL",
        "precio": 29000
    },
    "812106080": {
        "nombre": "PANTALÓN LIBERTAD",
        "precio": 101500
    },
    "812106093": {
        "nombre": "PANTALÓN MIRADOR",
        "precio": 64500
    },
    "713106202": {
        "nombre": "ROMPEVIENTO MAYA AVE",
        "precio": 85500
    },
    "811106269": {
        "nombre": "CAMISA MONTAÑA",
        "precio": 74000
    },
    "811106263": {
        "nombre": "CAMPERA CARMEN",
        "precio": 56200
    },
    "811106265": {
        "nombre": "ROMPEVIENTO MAYA",
        "precio": 64500
    },
    "811122133": {
        "nombre": "REMERA CALMA",
        "precio": 22900
    },
    "811140050": {
        "nombre": "REMERA RAMO",
        "precio": 28500
    },
    "811140052": {
        "nombre": "REMERA RELIEVE",
        "precio": 25000
    },
    "811122293": {
        "nombre": "CHOMBA ANTONIA",
        "precio": 55000
    },
    "811122294": {
        "nombre": "REMERA BEATRIZ",
        "precio": 35000
    },
    "811122295": {
        "nombre": "REMERA INDIANA",
        "precio": 35000
    },
    "811122296": {
        "nombre": "REMERA LUNA",
        "precio": 38500
    },
    "811122297": {
        "nombre": "REMERA MARGARITA",
        "precio": 39000
    },
    "811108002": {
        "nombre": "CHALECO ARCE",
        "precio": 51600
    },
    "811108003": {
        "nombre": "CAMPERA ARCE POLAR",
        "precio": 61200
    },
    "U12106000": {
        "nombre": "PRIMERA PIEL PANTALÓN UNISEX",
        "precio": 26400
    },
    "U12106001": {
        "nombre": "PANTALÓN PRIMERA PIEL",
        "precio": 33400
    },
    "U12106002": {
        "nombre": "PANTALÓN PRIMERA PIEL BASICO",
        "precio": 23200
    },
    "812106296": {
        "nombre": "PANTALÓN LIBERTAD 2",
        "precio": 89900
    },
    "413106044": {
        "nombre": "ROMPEVIENTO TIMBO",
        "precio": 127900
    },
    "413122013": {
        "nombre": "CHAQUETA SANTA CRUZ",
        "precio": 110000
    },
    "413122014": {
        "nombre": "CAMISACO RENZO",
        "precio": 130000
    },
    "412122213": {
        "nombre": "BERMUDA SANTA CRUZ",
        "precio": 69000
    },
    "412122214": {
        "nombre": "PANTALÓN SANTA CRUZ",
        "precio": 93600
    },
    "412122215": {
        "nombre": "BERMUSA CINCO SALTOS",
        "precio": 39100
    },
    "811166080": {
        "nombre": "REMERA GOLONDRINA",
        "precio": 23500
    },
    "811166081": {
        "nombre": "BLUSA CALANDRIA",
        "precio": 22600
    },
    "811166082": {
        "nombre": "BLUSA JILGUERA",
        "precio": 20300
    },
    "811166083": {
        "nombre": "MUSCULOSA PICABUEY",
        "precio": 25300
    },
    "811166084": {
        "nombre": "MUSCULOSA JACANA",
        "precio": 28800
    },
    "811166085": {
        "nombre": "MUSCULOSA MIRASOL",
        "precio": 21200
    },
    "811166086": {
        "nombre": "MUSCULOSA CARDENAL",
        "precio": 18200
    },
    "811166087": {
        "nombre": "BLUSA TENCA",
        "precio": 58700
    },
    "811166088": {
        "nombre": "VESTUDO TUCANELA",
        "precio": 46900
    },
    "812166067": {
        "nombre": "BERMUDA SIRRI",
        "precio": 68400
    },
    "812166068": {
        "nombre": "BERMUDA ZORZALA",
        "precio": 67900
    },
    "812106099": {
        "nombre": "PANTALÓN BRENDA",
        "precio": 80100
    },
    "812106100": {
        "nombre": "PANTALÓN POSADAS",
        "precio": 83100
    },
    "812106101": {
        "nombre": "POLLERA NALU",
        "precio": 79500
    },
    "U13122000": {
        "nombre": "CAMPERA CRUZ",
        "precio": 210000
    },
    "U13122002": {
        "nombre": "SACO CEDRÓN BULL",
        "precio": 125000
    },
    "U13122003": {
        "nombre": "CAMPERA LOBOS DENIM",
        "precio": 190000
    },
    "U13122004": {
        "nombre": "CAMPERA LOBOS BULL",
        "precio": 190000
    },
    "U13122007": {
        "nombre": "CAMPERA LOBOS VERANO",
        "precio": 130000
    },
    "811106302": {
        "nombre": "BLUSA FRESIA",
        "precio": 76000
    },
    "811142010": {
        "nombre": "CAMISA BONITA",
        "precio": 93000
    },
    "811521012": {
        "nombre": "CAMISA MALENA TWILL",
        "precio": 92000
    },
    "811522249": {
        "nombre": "CAMISA MALENA RAYAS",
        "precio": 94500
    },
    "811525017": {
        "nombre": "CAMISA ORQUIDEA LISO",
        "precio": 93500
    },
    "812106298": {
        "nombre": "PANTALON BRENDA PIE DE POOL",
        "precio": 91000
    },
    "812106299": {
        "nombre": "PANTALON MALENA",
        "precio": 87000
    },
    "812106300": {
        "nombre": "PANTALON MALENA",
        "precio": 94500
    },
    "812506042": {
        "nombre": "PANTALON JARAMILLO",
        "precio": 105500
    },
    "812508000": {
        "nombre": "PANTALON BRENDA SASTRERO",
        "precio": 95000
    },
    "411517000": {
        "nombre": "CHALECO HORNERO",
        "precio": 160000
    },
    "813134056": {
        "nombre": "CAMPERA PAMPEANA MUJER",
        "precio": 485000
    },
    "811122232": {
        "nombre": "CAMISA RAQUEL",
        "precio": 52500
    },
    "811122233": {
        "nombre": "BLUSA ELENA",
        "precio": 52800
    },
    "811122234": {
        "nombre": "CAMISA BERNARDITA",
        "precio": 57200
    },
    "811122162": {
        "nombre": "CAMISOLA VERBENA BRODERIE",
        "precio": 132300
    },
    "811122275": {
        "nombre": "CHALECO VENUS BULL",
        "precio": 105000
    },
    "811122276": {
        "nombre": "CHALECO VENUS DENIM",
        "precio": 105000
    },
    "811122277": {
        "nombre": "CAMISA OLIVOS CORDEROY",
        "precio": 0
    },
    "811122279": {
        "nombre": "REMERA LUCIANA",
        "precio": 85000
    },
    "811122280": {
        "nombre": "CAMISA ORQUIDEA",
        "precio": 120000
    },
    "811122281": {
        "nombre": "CAMISA ORQUIDEA RAYADA",
        "precio": 93500
    },
    "811122282": {
        "nombre": "MONO CAMILA DENIM",
        "precio": 165000
    },
    "811122208": {
        "nombre": "CAMISA MARISA",
        "precio": 52200
    },
    "811122209": {
        "nombre": "CAMISOLA JULIETA",
        "precio": 110500
    },
    "811122211": {
        "nombre": "MONO LARGO SELENA",
        "precio": 159000
    },
    "811122212": {
        "nombre": "VESTIDO JOSEFINA",
        "precio": 93200
    },
    "811124034": {
        "nombre": "BLUSA AMARANTO",
        "precio": 64000
    },
    "811124035": {
        "nombre": "BLUSA MALENA RAYADA",
        "precio": 76800
    },
    "811124036": {
        "nombre": "CAMISOLA JULIETA RAYADA",
        "precio": 104200
    },
    "811134001": {
        "nombre": "MUSCULOSA MUNA",
        "precio": 199000
    },
    "811122303": {
        "nombre": "CAMISA BRISA",
        "precio": 69500
    },
    "811122304": {
        "nombre": "CAMISA ORQUIDEA PLISADA",
        "precio": 79500
    },
    "811122305": {
        "nombre": "CAMISA OLGA VOILE",
        "precio": 59500
    },
    "811148021": {
        "nombre": "BLUSA TULIPAN",
        "precio": 69900
    },
    "811149001": {
        "nombre": "BLUSA ANGELADA PLUMETI",
        "precio": 72900
    },
    "811142008": {
        "nombre": "BLUSA CANDELA",
        "precio": 76600
    },
    "811142009": {
        "nombre": "CAMISA LUISINA",
        "precio": 69500
    },
    "811143001": {
        "nombre": "SACO CORTO CRUZADO ESMERALDA",
        "precio": 151500
    },
    "811166069": {
        "nombre": "VESTIDO CLARA",
        "precio": 81500
    },
    "811506008": {
        "nombre": "VESTIDO CAMISERO JUJUY",
        "precio": 81200
    },
    "811517001": {
        "nombre": "VESTIDO JEANERO LUISA",
        "precio": 68100
    },
    "811160000": {
        "nombre": "CHALECO AZALEA ESPIGA",
        "precio": 135000
    },
    "811520137": {
        "nombre": "BLUSA MALENA",
        "precio": 73200
    },
    "811521008": {
        "nombre": "CHALECO GRECIA",
        "precio": 118000
    },
    "811536000": {
        "nombre": "MONO FELICIANA",
        "precio": 119900
    },
    "811528001": {
        "nombre": "BLUSA ROBALBA",
        "precio": 53990
    },
    "811525012": {
        "nombre": "CAMISA INDIANA",
        "precio": 70700
    },
    "811525013": {
        "nombre": "MONO FELICIANA",
        "precio": 111800
    },
    "812101002": {
        "nombre": "PANTALÓN ROCIO CHINO",
        "precio": 65900
    },
    "812101003": {
        "nombre": "PANTALÓN CARGO JURAMENTO",
        "precio": 82400
    },
    "812101004": {
        "nombre": "SHORT LUCIANA",
        "precio": 65000
    },
    "812101005": {
        "nombre": "PANTALÓN GUADALUPE GABARDINA FLAME",
        "precio": 79800
    },
    "811536003": {
        "nombre": "REMERA AMALIA ESCOTE EN V",
        "precio": 68000
    },
    "811543022": {
        "nombre": "BLUSA BAHIA LINO",
        "precio": 72600
    },
    "811543023": {
        "nombre": "BLUSA SILVESTRE",
        "precio": 84300
    },
    "811543024": {
        "nombre": "BLUSA ANGELADA LINO",
        "precio": 81700
    },
    "811543025": {
        "nombre": "MUSCULOSA SERENA",
        "precio": 74100
    },
    "811543026": {
        "nombre": "MUSCULOSA LIRIO",
        "precio": 73700
    },
    "811543027": {
        "nombre": "MONO CLARITA",
        "precio": 161800
    },
    "811543028": {
        "nombre": "VESTIDO ALEGRA",
        "precio": 132200
    },
    "811543029": {
        "nombre": "MONO SOLEADO",
        "precio": 147400
    },
    "811543030": {
        "nombre": "MONO SOLEADO LINO",
        "precio": 144800
    },
    "811543031": {
        "nombre": "CAMISA ALALI",
        "precio": 90000
    },
    "811543032": {
        "nombre": "BLUSA MARIA",
        "precio": 59400
    },
    "811544111": {
        "nombre": "BLUSA SORAYA",
        "precio": 54400
    },
    "812106062": {
        "nombre": "PANTALÓN SASTRERO ORNELLA",
        "precio": 91300
    },
    "812106063": {
        "nombre": "PANTALÓN TRINIDAD",
        "precio": 89500
    },
    "812106067": {
        "nombre": "BABUCHA HORTENSIA BENGALINA",
        "precio": 59100
    },
    "812106069": {
        "nombre": "PANTALÓN CAMELIA",
        "precio": 91800
    },
    "812106071": {
        "nombre": "PANTALÓN MELISA",
        "precio": 125000
    },
    "812106072": {
        "nombre": "PANTALÓN MELISA",
        "precio": 82600
    },
    "812106073": {
        "nombre": "SHORT AZUCENA",
        "precio": 57500
    },
    "812102000": {
        "nombre": "FALDA JAZMIN",
        "precio": 73200
    },
    "812102001": {
        "nombre": "FALDA CLEMENTINA",
        "precio": 73300
    },
    "811122259": {
        "nombre": "BLUSA MARINA BRODERIE",
        "precio": 77800
    },
    "811122260": {
        "nombre": "MUSCULOSA SERENA BRODERIE",
        "precio": 72100
    },
    "811122261": {
        "nombre": "BLUSA MICAELA",
        "precio": 75500
    },
    "811122262": {
        "nombre": "CAMISOLA VERBENA",
        "precio": 50400
    },
    "811106266": {
        "nombre": "BLUSA CINTIA",
        "precio": 47900
    },
    "811106267": {
        "nombre": "BLUSA CARMELA",
        "precio": 55100
    },
    "811106270": {
        "nombre": "MUSCULOSA ROMA",
        "precio": 64500
    },
    "811106271": {
        "nombre": "MUSCULOSA CLAROMECO",
        "precio": 65500
    },
    "811106272": {
        "nombre": "CAMISOLA SELVA",
        "precio": 111900
    },
    "811106273": {
        "nombre": "MONO LUNA",
        "precio": 113900
    },
    "811106280": {
        "nombre": "CHALECO AZALEA NAPALIZADO",
        "precio": 240000
    },
    "811106281": {
        "nombre": "CHALECO AZALEA SUEDE",
        "precio": 125000
    },
    "811106282": {
        "nombre": "REMERA BEGONIA",
        "precio": 58500
    },
    "811106283": {
        "nombre": "MUSCULOSA AMAPOLA",
        "precio": 56000
    },
    "811106284": {
        "nombre": "REMERA LUCIANA PELO DE MONO",
        "precio": 79500
    },
    "811106285": {
        "nombre": "BLUSA ROSA",
        "precio": 91000
    },
    "811106286": {
        "nombre": "CAMISA CALA",
        "precio": 105000
    },
    "811106287": {
        "nombre": "CAMISA CLAVEL",
        "precio": 90000
    },
    "811106288": {
        "nombre": "CAMISA NARCISO",
        "precio": 105000
    },
    "811106289": {
        "nombre": "CAMISA MALVA",
        "precio": 120000
    },
    "811106291": {
        "nombre": "POLERA CLOE",
        "precio": 68000
    },
    "811106292": {
        "nombre": "MUSCULOSA FRANCISCA",
        "precio": 49500
    },
    "811106293": {
        "nombre": "REMERA NARCISA",
        "precio": 49500
    },
    "811106294": {
        "nombre": "BLUSA FLORENCIA",
        "precio": 59500
    },
    "811106295": {
        "nombre": "CAMISA CAMELIA",
        "precio": 59500
    },
    "811106148": {
        "nombre": "BLUSA RITA RV",
        "precio": 52800
    },
    "811106226": {
        "nombre": "BLUSA BEGOÑA",
        "precio": 65500
    },
    "811106229": {
        "nombre": "BLUSA ANAHI",
        "precio": 58600
    },
    "811106185": {
        "nombre": "BLUSA ARCE",
        "precio": 39900
    },
    "811106189": {
        "nombre": "MUSCULOSA AVA FANTASIA",
        "precio": 32500
    },
    "811104013": {
        "nombre": "CAMISA OLIVOS",
        "precio": 96400
    },
    "811104014": {
        "nombre": "CAMISA ROSARIO",
        "precio": 94100
    },
    "812106094": {
        "nombre": "PANTALÓN ARRAYÁN",
        "precio": 95000
    },
    "812106095": {
        "nombre": "PANTALÓN JULIETA",
        "precio": 79500
    },
    "812106098": {
        "nombre": "BERMUDA TERESITA",
        "precio": 49500
    },
    "812106081": {
        "nombre": "PANTALÓN AZALEA",
        "precio": 120000
    },
    "812106082": {
        "nombre": "PANTALÓN MARGARITA SASTRERO",
        "precio": 125000
    },
    "812106083": {
        "nombre": "PANTALÓN ELISA",
        "precio": 119100
    },
    "812106084": {
        "nombre": "PANTALÓN CARGO SASTRERO KITTY",
        "precio": 130000
    },
    "812106085": {
        "nombre": "PANTALÓN CARGO KITTY",
        "precio": 105000
    },
    "812122214": {
        "nombre": "PANTALÓN CAMILA BULL",
        "precio": 115000
    },
    "812106087": {
        "nombre": "PANTALÓN MALVA",
        "precio": 89700
    },
    "812106089": {
        "nombre": "PANTALÓN JULIA SASTRERO",
        "precio": 145000
    },
    "812106090": {
        "nombre": "PANTALÓN JULIA TWILL",
        "precio": 130000
    },
    "812106091": {
        "nombre": "PANTALÓN CAMPANILLA",
        "precio": 125000
    },
    "812106092": {
        "nombre": "PANTALÓN MORA",
        "precio": 95000
    },
    "812122216": {
        "nombre": "PANTALÓN POSADAS DENIM",
        "precio": 105000
    },
    "812122217": {
        "nombre": "PANTALÓN POSADAS BULL",
        "precio": 110000
    },
    "812122218": {
        "nombre": "PANTALÓN JARA",
        "precio": 99000
    },
    "812122219": {
        "nombre": "PANTALÓN CAMILA DENIM",
        "precio": 115000
    },
    "812122220": {
        "nombre": "PANTALÓN NARDO",
        "precio": 125000
    },
    "812122221": {
        "nombre": "PANTALÓN JARA BULL",
        "precio": 95000
    },
    "812122222": {
        "nombre": "PANTALÓN BELLA",
        "precio": 99500
    },
    "812122223": {
        "nombre": "SHORT INDIANA",
        "precio": 79500
    },
    "812521000": {
        "nombre": "PANTALÓN GRECIA",
        "precio": 95000
    },
    "812521001": {
        "nombre": "BERMUDA GRECIA",
        "precio": 69000
    },
    "812521002": {
        "nombre": "PANTALÓN MARIA ELISA",
        "precio": 86300
    },
    "812521003": {
        "nombre": "VESTIDO MORA",
        "precio": 133400
    },
    "812506029": {
        "nombre": "PANTALÓN FLORA CARGO",
        "precio": 70800
    },
    "811540005": {
        "nombre": "SACO CORTO CRUZADO ESMERALDA",
        "precio": 151500
    },
    "813106070": {
        "nombre": "BLEAZER MAGNOLIA",
        "precio": 176500
    },
    "813106071": {
        "nombre": "TAPADO TAINA combinado cuero",
        "precio": 225000
    },
    "813106072": {
        "nombre": "TRENCH CON LAZO SOFIA",
        "precio": 163700
    },
    "813106074": {
        "nombre": "CAMISACO MARCELINA",
        "precio": 89990
    },
    "813106075": {
        "nombre": "CHALECO AZALEA",
        "precio": 120000
    },
    "813106076": {
        "nombre": "CHAQUETA MAGDALENA CUPRO",
        "precio": 99200
    },
    "813106061": {
        "nombre": "BLAZER MAGNOLIA",
        "precio": 179500
    },
    "813106063": {
        "nombre": "CAMISACO MARGARITA",
        "precio": 117900
    },
    "813106081": {
        "nombre": "TRENCH ADELINA GAMUZÓN",
        "precio": 270000
    },
    "813106082": {
        "nombre": "TRENCH ADELINA NAPALIZADO",
        "precio": 270000
    },
    "813106083": {
        "nombre": "CAMPERA BRUNA",
        "precio": 230000
    },
    "813106084": {
        "nombre": "CAMISACO UMA ESPIGA",
        "precio": 180000
    },
    "813106085": {
        "nombre": "CAMISACO UMA",
        "precio": 180000
    },
    "813106086": {
        "nombre": "CAMPERA MISIONES MUJER",
        "precio": 230000
    },
    "813106088": {
        "nombre": "CAMISACO ALEJANDRINA",
        "precio": 160000
    },
    "813106089": {
        "nombre": "CHAQUETA REPUBLICA",
        "precio": 141300
    },
    "813122006": {
        "nombre": "PARKA CAMELIA",
        "precio": 199000
    },
    "813122007": {
        "nombre": "CAMPERA POSADAS BULL",
        "precio": 165000
    },
    "813122010": {
        "nombre": "CHAQUETA MALENA",
        "precio": 129300
    },
    "813134000": {
        "nombre": "CAMPERA RAMALLO M.C.CRASH",
        "precio": 350000
    },
    "813134001": {
        "nombre": "CHAQUETA OLGA",
        "precio": 450000
    },
    "813134002": {
        "nombre": "CAMISACO AMARANTO",
        "precio": 299500
    },
    "813134050": {
        "nombre": "CHAQUETA ROSENDA",
        "precio": 317300
    },
    "813134051": {
        "nombre": "CAMISA OLIVOS CUERO",
        "precio": 360000
    },
    "813134053": {
        "nombre": "CAMPERA RUFINO",
        "precio": 485000
    },
    "813134054": {
        "nombre": "CAMISACO LA CUMBRE",
        "precio": 370000
    },
    "813134055": {
        "nombre": "CAMPERA URSULA",
        "precio": 440000
    },
    "813142005": {
        "nombre": "ROMPEVIENTO FLORENCIA",
        "precio": 135300
    },
    "813160000": {
        "nombre": "SACO JULIA",
        "precio": 210000
    },
    "813506000": {
        "nombre": "CHAQUETA VILMA",
        "precio": 120600
    },
    "813521000": {
        "nombre": "BLAZER GRECIA",
        "precio": 195500
    },
    "813522000": {
        "nombre": "CAMISACO MARGARITA",
        "precio": 114500
    },
    "813536000": {
        "nombre": "BLAZER CRUZADO MIA",
        "precio": 160400
    },
    "813540000": {
        "nombre": "SACO MALVA",
        "precio": 184000
    },
    "813543000": {
        "nombre": "BLAZER MAGNOLIA",
        "precio": 227600
    },
    "813543001": {
        "nombre": "CHALECO AMORE",
        "precio": 134100
    },
    "813543002": {
        "nombre": "CHALECO AZALEA LINO",
        "precio": 125800
    },
    "812543007": {
        "nombre": "PANTALÓN ORNELLA LINO",
        "precio": 105800
    },
    "812543008": {
        "nombre": "PANTALÓN TERESA",
        "precio": 69500
    },
    "812543009": {
        "nombre": "PANTALÓN BRENDA LINO",
        "precio": 102300
    },
    "812543010": {
        "nombre": "CAPRI AMORE",
        "precio": 102600
    },
    "812543011": {
        "nombre": "BERMUDA COLIBRI",
        "precio": 88500
    },
    "812543012": {
        "nombre": "SHORT MAR DE LAS PAMPAS",
        "precio": 84300
    },
    "812543013": {
        "nombre": "PANTALÓN CAMILA NATURAL VISCOSA",
        "precio": 109600
    },
    "812160000": {
        "nombre": "PANTALÓN JULIA ESPIGA",
        "precio": 135000
    },
    "813102000": {
        "nombre": "BLAZER CRUZADO MIA",
        "precio": 168600
    },
    "813102002": {
        "nombre": "CAMISA SUREÑA",
        "precio": 110400
    },
    "812536000": {
        "nombre": "PANTALÓN BRENDA",
        "precio": 94800
    },
    "812525010": {
        "nombre": "PANTALÓN MARTINA",
        "precio": 81900
    },
    "812525011": {
        "nombre": "PANTALÓN GUADALUPE",
        "precio": 90900
    },
    "812525012": {
        "nombre": "PANTALÓN BRENDA",
        "precio": 82500
    },
    "812525013": {
        "nombre": "PANTALÓN EVELYN",
        "precio": 140000
    },
    "812506033": {
        "nombre": "PANTALÓN BRENDA",
        "precio": 92900
    },
    "812506034": {
        "nombre": "PANTALÓN MARGARITA",
        "precio": 89700
    },
    "411134001": {
        "nombre": "PANTUFLA H.C.VACUNO",
        "precio": 51990
    },
    "411122210": {
        "nombre": "CAMISA ARRAYAN BULL",
        "precio": 93600
    },
    "411104003": {
        "nombre": "CAMISA DE JEAN ARRAYAN",
        "precio": 102000
    },
    "411104004": {
        "nombre": "CAMISA DE JEAN ARRAYAN BC",
        "precio": 95000
    },
    "411106112": {
        "nombre": "CAMISA DONATO",
        "precio": 125900
    },
    "411106113": {
        "nombre": "CAMPERA SIMON LIVIANA",
        "precio": 174600
    },
    "411106114": {
        "nombre": "CAMISACO ANTONIO",
        "precio": 180000
    },
    "413122006": {
        "nombre": "CHALECO CAZADOR EPUYEN",
        "precio": 126900
    },
    "413122007": {
        "nombre": "CAMPERA SIMON",
        "precio": 149000
    },
    "413122008": {
        "nombre": "CHAQUETA PALERMO",
        "precio": 125000
    },
    "413122009": {
        "nombre": "CHAQUETA USPALLATA BULL",
        "precio": 157500
    },
    "413122010": {
        "nombre": "PARKA ROCA",
        "precio": 170000
    },
    "413122011": {
        "nombre": "CHALECO REVERSIBLE CHUBUT",
        "precio": 128600
    },
    "413122012": {
        "nombre": "CHALECO CAZADOR EPUYEN",
        "precio": 144000
    },
    "413134000": {
        "nombre": "CHAQUETA EL CERRO",
        "precio": 471800
    },
    "413134001": {
        "nombre": "CHAQUETA URITORCO",
        "precio": 432800
    },
    "413134002": {
        "nombre": "CAMPERA PAMPEANA",
        "precio": 547500
    },
    "413134003": {
        "nombre": "CAMPERA TANDIL",
        "precio": 460000
    },
    "413134004": {
        "nombre": "CAMPERA ARECO",
        "precio": 459300
    },
    "413134005": {
        "nombre": "CHALECO MADARIAGA",
        "precio": 444000
    },
    "413142001": {
        "nombre": "ROMPEVIENTO JACARANDÁ",
        "precio": 98200
    },
    "413142006": {
        "nombre": "CHALECO COLON NUEVO",
        "precio": 145000
    },
    "413142008": {
        "nombre": "CHALECO USPALLATA",
        "precio": 121900
    },
    "413143001": {
        "nombre": "TRENCH LENGA HOMBRE PAÑO",
        "precio": 191200
    },
    "413143002": {
        "nombre": "SACO ARTURO",
        "precio": 144200
    },
    "413143003": {
        "nombre": "TAPADO LENGA",
        "precio": 173700
    },
    "413518000": {
        "nombre": "CHALECO CAZADOR EPUYEN",
        "precio": 105900
    },
    "413543000": {
        "nombre": "CAMISACO EL DORADILLO",
        "precio": 103100
    },
    "413106038": {
        "nombre": "CAMPERA SIMON",
        "precio": 185000
    },
    "413106039": {
        "nombre": "CAMPERA CARANDAY",
        "precio": 229500
    },
    "413106041": {
        "nombre": "CAMPARA MISIONES HOMBRE",
        "precio": 220000
    },
    "413102000": {
        "nombre": "CAMPERA TUCUMAN",
        "precio": 158500
    },
    "413102001": {
        "nombre": "CHALECO REVERSIBLE CHUBUT",
        "precio": 143900
    },
    "413106033": {
        "nombre": "PARKA AIKEN COATING SUEDE// NEW",
        "precio": 117400
    },
    "413106034": {
        "nombre": "CHAQUETA AMAICHA",
        "precio": 160900
    },
    "413106035": {
        "nombre": "CAMPERA TUCUMAN GAMUZADA",
        "precio": 154700
    },
    "413106036": {
        "nombre": "CHAQUETA USPALLATA PILOTIN",
        "precio": 159400
    },
    "413106020": {
        "nombre": "CHALECO PARAISO REVERSIBLE",
        "precio": 125000
    },
    "413101002": {
        "nombre": "CHALECO ACEBAL REVERSIBLE",
        "precio": 143500
    },
    "413101022": {
        "nombre": "CAMPERA RAMALLO VERANO",
        "precio": 158500
    },
    "413101026": {
        "nombre": "SAFARI LOS ANDES",
        "precio": 122800
    },
    "413101027": {
        "nombre": "CAMPERA TUCUMAN",
        "precio": 143600
    },
    "413101030": {
        "nombre": "CHAQUETA IGNACIO",
        "precio": 73000
    },
    "412543000": {
        "nombre": "PANTALÓN EL DORADILLO",
        "precio": 106600
    },
    "412543001": {
        "nombre": "BERMUDA ORESTE LINO",
        "precio": 90700
    },
    "412122011": {
        "nombre": "CARGO CHASCOMUS",
        "precio": 105000
    },
    "412506017": {
        "nombre": "JOGGER HOMBRE RENATO",
        "precio": 82500
    },
    "412101128": {
        "nombre": "BERMUDA ORESTE",
        "precio": 79000
    },
    "411139005": {
        "nombre": "BUZO GRANADEROS",
        "precio": 67900
    },
    "411139006": {
        "nombre": "BUZO ARCOS OVZ",
        "precio": 74000
    },
    "411122184": {
        "nombre": "REMERA BELTRAN",
        "precio": 46600
    },
    "411122185": {
        "nombre": "REMERA MARMOL",
        "precio": 40300
    },
    "812139010": {
        "nombre": "SHORT PALMAR",
        "precio": 60900
    },
    "812139011": {
        "nombre": "JOGGING MORA",
        "precio": 74800
    },
    "811106256": {
        "nombre": "MUSCULOSA MAREA",
        "precio": 33500
    },
    "811122226": {
        "nombre": "REMERA ORQUIDEA",
        "precio": 38800
    },
    "811122227": {
        "nombre": "REMERA GARDENIA",
        "precio": 34300
    },
    "811122228": {
        "nombre": "REMERA PASIONARIA",
        "precio": 39200
    },
    "811122229": {
        "nombre": "REMERON HORTENSIA",
        "precio": 43300
    },
    "812106078": {
        "nombre": "CALZA ARCE",
        "precio": 40900
    },
    "812106079": {
        "nombre": "CALZA AUSTRAL",
        "precio": 52900
    },
    "811147020": {
        "nombre": "MUSCULOSA LLANURA",
        "precio": 33400
    },
    "811139119": {
        "nombre": "BUZO LITORAL OVZ",
        "precio": 76400
    },
    "811139120": {
        "nombre": "BUZO ALBA",
        "precio": 70200
    },
    "821154000": {
        "nombre": "MOCASIN RUTA",
        "precio": 122400
    },
    "821154001": {
        "nombre": "BOTA JUNIN",
        "precio": 130200
    },
    "824134113": {
        "nombre": "BOTA MARIA",
        "precio": 180600
    },
    "824134114": {
        "nombre": "BOTA CASTORES",
        "precio": 143900
    },
    "821134015": {
        "nombre": "MOCASIN SALINAS",
        "precio": 117500
    },
    "821134016": {
        "nombre": "ZAPATILLA PAMPA",
        "precio": 130400
    },
    "821134017": {
        "nombre": "NAUTICO CERRO",
        "precio": 98700
    },
    "821134104": {
        "nombre": "BOTINETA PLAZA",
        "precio": 115900
    },
    "821134105": {
        "nombre": "BOTIENTA TORTUGAS",
        "precio": 106100
    },
    "821134108": {
        "nombre": "MOCASIN MANZANARES",
        "precio": 88800
    },
    "821134110": {
        "nombre": "ZUECO ROSAS",
        "precio": 100000
    },
    "821134111": {
        "nombre": "Balerina azucena",
        "precio": 92700
    },
    "821134112": {
        "nombre": "Zapatilla Pensamiento",
        "precio": 90200
    },
    "821134113": {
        "nombre": "SANDALIA LIRIO",
        "precio": 61700
    },
    "821134115": {
        "nombre": "Sandalia Dalia",
        "precio": 62100
    },
    "821134116": {
        "nombre": "OJOTA PLAYA",
        "precio": 89900
    },
    "821134117": {
        "nombre": "sandalia La maruja",
        "precio": 91100
    },
    "821134119": {
        "nombre": "ZAPATILLA PARQUE",
        "precio": 124500
    },
    "821134120": {
        "nombre": "MOCASIN IRLANDA",
        "precio": 98000
    },
    "821134121": {
        "nombre": "BOTINETA ACONQUIJA",
        "precio": 123000
    },
    "821134122": {
        "nombre": "BORCEGO ACOSTA",
        "precio": 146900
    },
    "821134123": {
        "nombre": "BOTA CAMINITO",
        "precio": 153700
    },
    "821134124": {
        "nombre": "BOTA ALAMEDA",
        "precio": 241700
    },
    "821134125": {
        "nombre": "MOCASIN AGRELO",
        "precio": 93800
    },
    "821134167": {
        "nombre": "ZUECO PAYSANDU",
        "precio": 88600
    },
    "821134168": {
        "nombre": "MOCASIN HEREDIA",
        "precio": 93900
    },
    "821134169": {
        "nombre": "ZAPATILLA ELISA",
        "precio": 129900
    },
    "821134170": {
        "nombre": "ZUECO DEL ESTE",
        "precio": 91400
    },
    "821134171": {
        "nombre": "SANDALIA NECOCHEA",
        "precio": 70400
    },
    "821134172": {
        "nombre": "MOCASIN ALAMEDA",
        "precio": 108100
    },
    "821134180": {
        "nombre": "SANDALIA MEDANOS",
        "precio": 63800
    },
    "821134181": {
        "nombre": "SANDALIA COPETONAS",
        "precio": 97500
    },
    "821134184": {
        "nombre": "NAUTICO PERDICES",
        "precio": 109100
    },
    "821134185": {
        "nombre": "BALERINA ATARDECER",
        "precio": 94100
    },
    "821134186": {
        "nombre": "BOTA ERNESTINA",
        "precio": 143300
    },
    "921134000": {
        "nombre": "MOCASIN ESCOLAR",
        "precio": 82000
    },
    "921134001": {
        "nombre": "NAUTICO ESCOLAR",
        "precio": 85500
    },
    "921134002": {
        "nombre": "GUILLERMINA ESCOLAR",
        "precio": 82000
    },
    "421134170": {
        "nombre": "MOCASIN RIVADAVIA",
        "precio": 110900
    },
    "421134163": {
        "nombre": "MOCASIN BRIDGE",
        "precio": 123500
    },
    "421134164": {
        "nombre": "ZAPATILLA REALICO",
        "precio": 135700
    },
    "421154001": {
        "nombre": "BOTA CHIMBAS GAMUZA",
        "precio": 143800
    },
    "421134172": {
        "nombre": "BOTA RUCANELO",
        "precio": 223800
    },
    "421134135": {
        "nombre": "ZAPATILLA BERCEO CUERO",
        "precio": 163500
    },
    "421134136": {
        "nombre": "ZAPATO INDEPENDENCIA",
        "precio": 156000
    },
    "421134137": {
        "nombre": "BOTINETA CHIMBAS",
        "precio": 147200
    },
    "421134138": {
        "nombre": "ZAPATILLA BERCEO COMBINADA",
        "precio": 134100
    },
    "421134140": {
        "nombre": "MOCASIN ROMERO",
        "precio": 131500
    },
    "421134141": {
        "nombre": "ZAPATILLA MATHEU",
        "precio": 164200
    },
    "421134145": {
        "nombre": "Mocasin Jacinto clasico",
        "precio": 114500
    },
    "421134146": {
        "nombre": "Zapatilla Geranio",
        "precio": 105100
    },
    "421134147": {
        "nombre": "Nautico Crisanto",
        "precio": 109500
    },
    "421134148": {
        "nombre": "SANDALIA FRANCISCANA",
        "precio": 101900
    },
    "421134150": {
        "nombre": "Zapatilla Pacheco",
        "precio": 134100
    },
    "421134153": {
        "nombre": "MOCASIN CARDENAL",
        "precio": 109500
    },
    "421134184": {
        "nombre": "MOCASIN SAUCE H.",
        "precio": 91000
    },
    "821134201": {
        "nombre": "MOCASIN SAUCE M.",
        "precio": 86500
    },
    "824134200": {
        "nombre": "MOCASIN RUTA CUERO",
        "precio": 131500
    },
    "821134198": {
        "nombre": "ZAPATILLA ABRAPAMPA",
        "precio": 113000
    },
    "821134199": {
        "nombre": "MOCASIN TRIGAL CUERO",
        "precio": 140500
    },
    "U21134000": {
        "nombre": "NAUTICO TANDIL",
        "precio": 107700
    },
    "U21134001": {
        "nombre": "PANCHA CORRENTOSO",
        "precio": 123900
    },
    "821134194": {
        "nombre": "ZAPATILLA ARENAL",
        "precio": 137000
    },
    "821134195": {
        "nombre": "SANDALIA SALVIA",
        "precio": 79500
    },
    "821134196": {
        "nombre": "SANDALIA CEIBO",
        "precio": 69000
    },
    "821154002": {
        "nombre": "NAUTICO TRIGAL",
        "precio": 122500
    },
    "U21134002": {
        "nombre": "SANDALIA IBICUY",
        "precio": 105500
    },
    "421154002": {
        "nombre": "MOCASIN CACHI",
        "precio": 137000
    },
    "U13106002": {
        "nombre": "ROMPEVIENTO EL TALAR",
        "precio": 115000
    },
    "U13106003": {
        "nombre": "ROMPEVIENTO DELTA",
        "precio": 120000
    },
    "U13106004": {
        "nombre": "IMPERMEABLE BLEST",
        "precio": 120000
    },
    "413106028": {
        "nombre": "CAMPERA RIBERA",
        "precio": 155000
    },
    "413106029": {
        "nombre": "CHALECO ROJAS",
        "precio": 145000
    },
    "413106037": {
        "nombre": "PARKA CASTOR",
        "precio": 173000
    },
    "813106066": {
        "nombre": "CHALECO VERA",
        "precio": 145000
    },
    "813106080": {
        "nombre": "PARKA MAQUINCHAO",
        "precio": 173000
    },
    "821134188": {
        "nombre": "BORCEGO ANA",
        "precio": 159000
    },
    "821134189": {
        "nombre": "BOTA AMANDA",
        "precio": 154000
    },
    "821134190": {
        "nombre": "BOTA JUANA INVIERNO",
        "precio": 145000
    },
    "821134192": {
        "nombre": "ZAPATILLA NUMANCIA RECICLADA",
        "precio": 131000
    },
    "821134193": {
        "nombre": "ZAPATILLA SOFIA CUERO",
        "precio": 152000
    },
    "821134173": {
        "nombre": "BOTA HELENA",
        "precio": 145400
    },
    "821134174": {
        "nombre": "BOTA AMALIA",
        "precio": 124000
    },
    "821134175": {
        "nombre": "BOTA JUANA",
        "precio": 129000
    },
    "821134176": {
        "nombre": "SANDALIA DULCE",
        "precio": 125000
    },
    "821134177": {
        "nombre": "SANDALIA DESEADO",
        "precio": 107000
    },
    "821134178": {
        "nombre": "SANDALIA CARCARAÑA",
        "precio": 82000
    },
    "821134179": {
        "nombre": "ZAPATILLA YUSPE",
        "precio": 106900
    },
    "821134126": {
        "nombre": "BORCEGO JANER",
        "precio": 112900
    },
    "821134127": {
        "nombre": "BORCEGO MATACO",
        "precio": 135000
    },
    "821134129": {
        "nombre": "BOTA SALMA",
        "precio": 189000
    },
    "821134131": {
        "nombre": "ZAPATILLA NUMANCIA",
        "precio": 117100
    },
    "821134135": {
        "nombre": "SANDALIA PETUNIA",
        "precio": 99000
    },
    "421134154": {
        "nombre": "ZAPATILLA MURRAY",
        "precio": 131800
    },
    "421134155": {
        "nombre": "ZAPATILLA BRUCE",
        "precio": 119600
    },
    "421134157": {
        "nombre": "BOTA HARRISON",
        "precio": 131500
    },
    "421134158": {
        "nombre": "BORCEGO ORMA",
        "precio": 182000
    },
    "421134162": {
        "nombre": "SANDALIA BUSTILLO",
        "precio": 55200
    },
    "421116000": {
        "nombre": "ZAPATILLA LAGO",
        "precio": 118000
    },
    "421116001": {
        "nombre": "SANDALIA RIVADAVIA",
        "precio": 90000
    },
    "421134176": {
        "nombre": "ZAPATILLA FELIPE",
        "precio": 150000
    },
    "421134177": {
        "nombre": "ZAPATILLA COSQUIN",
        "precio": 114000
    },
    "421134178": {
        "nombre": "ZAPATO AQUILES",
        "precio": 146000
    },
    "421134165": {
        "nombre": "BOTA HARRY",
        "precio": 153400
    },
    "421134167": {
        "nombre": "ACORDONADO MONTANA",
        "precio": 140000
    },
    "421134168": {
        "nombre": "SANDALIA RIVADAVIA",
        "precio": 94000
    },
    "421134171": {
        "nombre": "ZAPATILLA COSQUIN",
        "precio": 113000
    },
    "421134182": {
        "nombre": "ZAPATILLA SIMON CUERO",
        "precio": 161000
    },
    "821134197": {
        "nombre": "BOTA JACINTA",
        "precio": 184000
    },
    "821134000": {
        "nombre": "ZAPATILLA SUR M. GAMUZON",
        "precio": 99990
    },
    "912500004": {
        "nombre": "BERMUDA HILARIO DENIM BC",
        "precio": 34300
    },
    "912500005": {
        "nombre": "SHORT RITA DENIM",
        "precio": 26500
    },
    "912500006": {
        "nombre": "SHORT RITA DENIM BC",
        "precio": 26500
    },
    "912122017": {
        "nombre": "BERMUDA DANIEL PANAL",
        "precio": 24200
    },
    "912122018": {
        "nombre": "PANTALÓN CIRO",
        "precio": 28800
    },
    "912122019": {
        "nombre": "PANTALÓN LUZ",
        "precio": 32200
    },
    "912122020": {
        "nombre": "PANTALÓN CARGO BENICIO",
        "precio": 37500
    },
    "912122021": {
        "nombre": "PANTALÓN CLOE FRISA",
        "precio": 28000
    },
    "912122022": {
        "nombre": "PANTALÓN CLOE RUSTICO",
        "precio": 24500
    },
    "912122023": {
        "nombre": "SHORT-FALDA JAZMIN",
        "precio": 39100
    },
    "912122024": {
        "nombre": "BERMUDA CARGO RIO",
        "precio": 37800
    },
    "912122025": {
        "nombre": "BERMUDA CIRO",
        "precio": 27900
    },
    "912122026": {
        "nombre": "PANTALÓN CARGO RIO",
        "precio": 42300
    },
    "912124001": {
        "nombre": "PANTALÓN MAGNOLIA FANTASIA",
        "precio": 36800
    },
    "912525000": {
        "nombre": "SHORT POLLERA ESCOLAR",
        "precio": 16500
    },
    "912525001": {
        "nombre": "CALZA ESCOLAR",
        "precio": 14500
    },
    "913106021": {
        "nombre": "CAMPERA MATELASEADA BONDEADA",
        "precio": 89700
    },
    "912101004": {
        "nombre": "PANTALÓN CARGO RECTO",
        "precio": 54500
    },
    "911514004": {
        "nombre": "SWEATER BRISA",
        "precio": 32200
    },
    "912101014": {
        "nombre": "PANTALÓN LUCA JOGGER GAB",
        "precio": 43700
    },
    "912106016": {
        "nombre": "CALZA CLOE ESTAMPADA",
        "precio": 12700
    },
    "912106028": {
        "nombre": "BIKER",
        "precio": 11100
    },
    "912106051": {
        "nombre": "PANTALÓN DARLON",
        "precio": 31100
    },
    "912106052": {
        "nombre": "PANTALÓN ROMA",
        "precio": 26300
    },
    "912106053": {
        "nombre": "PANTALÓN AMBAR",
        "precio": 26500
    },
    "912106054": {
        "nombre": "PANTALÓN FRIDA RAYADO",
        "precio": 28300
    },
    "912106055": {
        "nombre": "SHORT MICA",
        "precio": 20700
    },
    "912106056": {
        "nombre": "SHORT MALVA",
        "precio": 24900
    },
    "912106057": {
        "nombre": "BERMUDA FARO",
        "precio": 25500
    },
    "912106058": {
        "nombre": "PANTALÓN FARO",
        "precio": 27600
    },
    "912118001": {
        "nombre": "PANTALÓN FER FRISA",
        "precio": 28500
    },
    "912118004": {
        "nombre": "CALZA LOLA",
        "precio": 17000
    },
    "912118006": {
        "nombre": "JOGGING PILAR",
        "precio": 32500
    },
    "912118008": {
        "nombre": "JOGGING FELIX",
        "precio": 32500
    },
    "912122003": {
        "nombre": "PANTALÓN LARGO DE MORLEY - FRIDA",
        "precio": 32200
    },
    "912122008": {
        "nombre": "CALZA LYCRA ESTAMPADA",
        "precio": 18200
    },
    "912411508": {
        "nombre": "CALZA MARGARITA LISA",
        "precio": 15500
    },
    "912500002": {
        "nombre": "BERMUDA HILARIO DENIM",
        "precio": 34300
    },
    "912506018": {
        "nombre": "JEAN MALVINA GABARDINA",
        "precio": 36800
    },
    "912508000": {
        "nombre": "CALZA MARGARITA ESTAMPADA",
        "precio": 21400
    },
    "912508004": {
        "nombre": "CALZA CLOE",
        "precio": 10600
    },
    "912508005": {
        "nombre": "CALZA PLUSH",
        "precio": 18200
    },
    "912506009": {
        "nombre": "BERMUDA HILARIO GABARDINA",
        "precio": 34800
    },
    "912506012": {
        "nombre": "PANTALÓN JOGGER CARGO",
        "precio": 57500
    },
    "912506013": {
        "nombre": "PANTALÓN CARGO RECTO CAMUFLADO",
        "precio": 48300
    },
    "912506014": {
        "nombre": "PANTALÓN CARGO RECTO",
        "precio": 46700
    },
    "911106037": {
        "nombre": "POLERA BASICA",
        "precio": 15000
    },
    "911106050": {
        "nombre": "CAMISACO LEÑADOR",
        "precio": 55000
    },
    "911106052": {
        "nombre": "CAMPERA DANI",
        "precio": 35000
    },
    "911106053": {
        "nombre": "BUZO DARLON",
        "precio": 27900
    },
    "911106054": {
        "nombre": "BUZO ROMA",
        "precio": 26000
    },
    "911106055": {
        "nombre": "BUZO AMBAR",
        "precio": 26700
    },
    "911106056": {
        "nombre": "CHALECO FELIPE",
        "precio": 41500
    },
    "911106057": {
        "nombre": "CHALECO IRENE",
        "precio": 71300
    },
    "911106058": {
        "nombre": "JUMPER EMMA VIYELA",
        "precio": 51500
    },
    "911106062": {
        "nombre": "MUSCULOSA MALVÓN",
        "precio": 22600
    },
    "911106063": {
        "nombre": "VESTIVO ESPIGA",
        "precio": 42800
    },
    "911106064": {
        "nombre": "MONO MARINA",
        "precio": 38000
    },
    "911106065": {
        "nombre": "VESTIDO FLOR RAYADO",
        "precio": 44900
    },
    "911106066": {
        "nombre": "MUSCULOSA MORLEY LAVADO",
        "precio": 20100
    },
    "911106020": {
        "nombre": "BUZO ANI PELUDO",
        "precio": 29500
    },
    "911138004": {
        "nombre": "REMERA POLO FER PIQUE",
        "precio": 28500
    },
    "911139005": {
        "nombre": "BUZO RUSTICO",
        "precio": 26500
    },
    "911139006": {
        "nombre": "CANGURO RUSTICO",
        "precio": 33500
    },
    "911139007": {
        "nombre": "CANGURO CLOTILDE RUSTICO",
        "precio": 42400
    },
    "911139013": {
        "nombre": "CANGURO EDU RUSTICO LISO",
        "precio": 42400
    },
    "911139024": {
        "nombre": "BUZO BASICO CON CAPUCHA",
        "precio": 30600
    },
    "911139029": {
        "nombre": "BUZO CORAZONES",
        "precio": 35000
    },
    "911139030": {
        "nombre": "BUZO HOLGADO",
        "precio": 29500
    },
    "911139031": {
        "nombre": "BUZO ANTONIO",
        "precio": 36400
    },
    "911139032": {
        "nombre": "BUZO RUTA 40",
        "precio": 33800
    },
    "911140017": {
        "nombre": "REMERA MAGDA M/L JERSEY",
        "precio": 17000
    },
    "911140039": {
        "nombre": "CHOMBA PATRICIO M/L",
        "precio": 33000
    },
    "911140049": {
        "nombre": "CHOMBA ANIBAL",
        "precio": 29900
    },
    "911140158": {
        "nombre": "REMERA MANGA RANGLAN COMBINADA",
        "precio": 16400
    },
    "911141001": {
        "nombre": "CHALECO MICROPOLAR",
        "precio": 26500
    },
    "911141005": {
        "nombre": "BUZO MICROPOLAR LISO",
        "precio": 29500
    },
    "911141007": {
        "nombre": "BUZO MICROPOLAR FANTASIA",
        "precio": 28800
    },
    "911147000": {
        "nombre": "REMERA SANDIA",
        "precio": 15200
    },
    "911147001": {
        "nombre": "MUSCULOSA BASICA MORLEY",
        "precio": 11800
    },
    "911166003": {
        "nombre": "MUSCULOSA BÁSICA",
        "precio": 15000
    },
    "911166004": {
        "nombre": "REMERA MORA",
        "precio": 18400
    },
    "911169000": {
        "nombre": "REMERA FLOR",
        "precio": 15200
    },
    "911169001": {
        "nombre": "REMERA KIRA",
        "precio": 14300
    },
    "911169002": {
        "nombre": "REMERA VELERO",
        "precio": 16100
    },
    "911169003": {
        "nombre": "REMERA IGOR",
        "precio": 16100
    },
    "911222140": {
        "nombre": "REMERA PAMPERO INST. NENA",
        "precio": 13400
    },
    "911223140": {
        "nombre": "REMERA LUIS M/C JERSEY.P",
        "precio": 14500
    },
    "912139011": {
        "nombre": "PANTALÓN RUSTICO",
        "precio": 26000
    },
    "912139012": {
        "nombre": "BERMUDA RUSTICO ESCOLAR",
        "precio": 18000
    },
    "912139013": {
        "nombre": "PANTALÓN LEONESA JOGGING",
        "precio": 34100
    },
    "912139014": {
        "nombre": "SHORT DE RUSTICO  CATA",
        "precio": 22600
    },
    "912139016": {
        "nombre": "BERMUDA DANIEL",
        "precio": 24200
    },
    "912139019": {
        "nombre": "PANTALÓN MAGNOLIA DENIM",
        "precio": 36800
    },
    "912139020": {
        "nombre": "SHORT CLEO DENIM",
        "precio": 29900
    },
    "912139022": {
        "nombre": "JEAN MALVINA PAPERBAG",
        "precio": 34500
    },
    "912139023": {
        "nombre": "PANTALÓN LUCA JOGGER",
        "precio": 43500
    },
    "912139025": {
        "nombre": "PANTALÓN MAGNOLIA DENIM BC",
        "precio": 36800
    },
    "912139026": {
        "nombre": "SHORT CLEO BC",
        "precio": 29900
    },
    "912139028": {
        "nombre": "JEAN MALVINA BC",
        "precio": 36800
    },
    "912139029": {
        "nombre": "PANTALÓN LUCA JOGGER BC",
        "precio": 43700
    },
    "912139030": {
        "nombre": "PANTALÓN JOGGING CON PUÑO",
        "precio": 35900
    },
    "912147000": {
        "nombre": "SHORT RITA MORLEY",
        "precio": 21900
    },
    "912213014": {
        "nombre": "PANTALÓN LUCA GABARDINA",
        "precio": 43500
    },
    "912213029": {
        "nombre": "PANTALÓN LUCA JOGGER BC",
        "precio": 43500
    },
    "911122215": {
        "nombre": "REMERA BRUNO",
        "precio": 24000
    },
    "911122216": {
        "nombre": "REMERA DANTE",
        "precio": 27600
    },
    "911122217": {
        "nombre": "REMERA GAEL",
        "precio": 19800
    },
    "911122218": {
        "nombre": "REMERA NOA",
        "precio": 14500
    },
    "911122219": {
        "nombre": "REMRA DANI",
        "precio": 20000
    },
    "911122220": {
        "nombre": "REMERA CRUZ",
        "precio": 24500
    },
    "911122221": {
        "nombre": "REMERA RENÉ",
        "precio": 19800
    },
    "911122222": {
        "nombre": "REMERA JADE",
        "precio": 19800
    },
    "911122223": {
        "nombre": "REMERA CRIS",
        "precio": 16400
    },
    "911122224": {
        "nombre": "REMERA ADA",
        "precio": 24500
    },
    "911122225": {
        "nombre": "REMERA MIA",
        "precio": 18400
    },
    "911122226": {
        "nombre": "JUMPER EMMA DENIM",
        "precio": 42600
    },
    "911122228": {
        "nombre": "CAMPERA EMI",
        "precio": 41400
    },
    "911122229": {
        "nombre": "BUZO MORGAN",
        "precio": 38200
    },
    "911122231": {
        "nombre": "BUZO CIRO",
        "precio": 31100
    },
    "911122233": {
        "nombre": "REMERA NATIVA",
        "precio": 19800
    },
    "911122234": {
        "nombre": "REMERA MARILÓ",
        "precio": 19800
    },
    "911122235": {
        "nombre": "REMERA AURORA",
        "precio": 19800
    },
    "911122236": {
        "nombre": "BUZO ESTAMPADO PAMPERO",
        "precio": 39800
    },
    "911122237": {
        "nombre": "VESTIDO LUCERO",
        "precio": 45100
    },
    "911122238": {
        "nombre": "VESTIDO MALVÓN",
        "precio": 45100
    },
    "911122239": {
        "nombre": "MONO MARINA DENIM",
        "precio": 45100
    },
    "911122240": {
        "nombre": "VESTIDO FLOR RAYADO",
        "precio": 32000
    },
    "911122241": {
        "nombre": "REMERA PAMPERO",
        "precio": 19100
    },
    "911122242": {
        "nombre": "REMERA GAEL",
        "precio": 22400
    },
    "911122243": {
        "nombre": "REMERA SAUCE",
        "precio": 17300
    },
    "911122244": {
        "nombre": "MUSCULOSA SILVESTRE",
        "precio": 20500
    },
    "911122245": {
        "nombre": "CANGURO TALAR",
        "precio": 42600
    },
    "911122246": {
        "nombre": "REMERA DANTE",
        "precio": 19400
    },
    "911122247": {
        "nombre": "REMERA ARENAL",
        "precio": 23500
    },
    "911124014": {
        "nombre": "VESTIDO FLOR - POPLIN",
        "precio": 37800
    },
    "911122197": {
        "nombre": "SUDADERA DANIEL",
        "precio": 17000
    },
    "911122201": {
        "nombre": "REMERA RUTA 40",
        "precio": 16100
    },
    "911122202": {
        "nombre": "REMERA PINCELADAS",
        "precio": 16100
    },
    "911122203": {
        "nombre": "REMERA PAMPERO ORIGINAL",
        "precio": 19800
    },
    "911122204": {
        "nombre": "REMERA KAI",
        "precio": 16400
    },
    "911122205": {
        "nombre": "REMERA JANO",
        "precio": 12200
    },
    "911122206": {
        "nombre": "MUSCULOSA LUCIO",
        "precio": 13200
    },
    "911122207": {
        "nombre": "BLUSA MICAELA",
        "precio": 25300
    },
    "911122208": {
        "nombre": "REMERA FRUTILLAS",
        "precio": 15900
    },
    "911122209": {
        "nombre": "REMERA RAMILLETE",
        "precio": 18400
    },
    "911122210": {
        "nombre": "REMERA CORAZONES",
        "precio": 17100
    },
    "911122211": {
        "nombre": "MUSCULOSA RAMILLETE",
        "precio": 14500
    },
    "911118002": {
        "nombre": "BUZO FER FRISA",
        "precio": 28500
    },
    "911118004": {
        "nombre": "CANGURO FER  FRISA",
        "precio": 36500
    },
    "911118012": {
        "nombre": "CANGURO PILAR",
        "precio": 38200
    },
    "911118016": {
        "nombre": "CANGURO FELIX",
        "precio": 38200
    },
    "911122026": {
        "nombre": "VESTIDO ABRIL M/L",
        "precio": 31800
    },
    "911122066": {
        "nombre": "VESTIDO BRODERIE",
        "precio": 62100
    },
    "911122111": {
        "nombre": "REMERA BASICA LISA",
        "precio": 18000
    },
    "911122122": {
        "nombre": "REMERA BASICA LISA",
        "precio": 13600
    },
    "911122123": {
        "nombre": "VESTIDO ISA SIN MANGAS",
        "precio": 29900
    },
    "911122131": {
        "nombre": "BUZO PAMPERO",
        "precio": 29500
    },
    "911122148": {
        "nombre": "MUSCULOSA RAYADA",
        "precio": 12000
    },
    "911122179": {
        "nombre": "REMERA UNICORNIO MULTICOLOR",
        "precio": 15200
    },
    "911122180": {
        "nombre": "BUZO CON CAPUCHA CORAZONES",
        "precio": 25500
    },
    "911122190": {
        "nombre": "REMERA SIERRA",
        "precio": 17800
    },
    "911122192": {
        "nombre": "BUZO MATI CON CAPUCHA",
        "precio": 27900
    },
    "913106025": {
        "nombre": "CAMPERA CON CAPUCHA DESMONTABLE",
        "precio": 73000
    },
    "913106026": {
        "nombre": "CHALECO CON CAPUCHA DESMONTABLE",
        "precio": 63500
    },
    "911106067": {
        "nombre": "CAMPERA GUIDO",
        "precio": 37000
    },
    "911106068": {
        "nombre": "CAMPERA CIRO",
        "precio": 41500
    },
    "911106069": {
        "nombre": "BUZO DEPORTIVO",
        "precio": 34500
    },
    "911106070": {
        "nombre": "CAPITA DE LLUVIA",
        "precio": 33500
    },
    "911106071": {
        "nombre": "REMERA DEPORTIVA",
        "precio": 17000
    },
    "911106072": {
        "nombre": "JUMPER GINA",
        "precio": 42500
    },
    "911106073": {
        "nombre": "BUZO FRISA CON CAPUCHA",
        "precio": 31500
    },
    "911122311": {
        "nombre": "REMERA ALINA",
        "precio": 31200
    },
    "911122312": {
        "nombre": "REMERA POSTAL",
        "precio": 24000
    },
    "911122313": {
        "nombre": "REMERA MC RAYADA",
        "precio": 22000
    },
    "911122314": {
        "nombre": "BUZO TOMAS",
        "precio": 43500
    },
    "911122315": {
        "nombre": "BUZO JOACO",
        "precio": 38000
    },
    "911122316": {
        "nombre": "REMERA REFUGIO",
        "precio": 23500
    },
    "912106059": {
        "nombre": "PANTALON DEPORTIVO",
        "precio": 31500
    },
    "912122028": {
        "nombre": "PANTALON CARGO RIO",
        "precio": 40500
    },
    "912139032": {
        "nombre": "PANTALON TERE",
        "precio": 38500
    },
    "911106074": {
        "nombre": "BUZO TEO",
        "precio": 27500
    },
    "911118028": {
        "nombre": "CAMPERA NOA",
        "precio": 42500
    },
    "912118011": {
        "nombre": "JOGGING NOA",
        "precio": 36000
    },
    "U13106001": {
        "nombre": "ROMPEVIENTO CRUZ",
        "precio": 49000
    },
    "U45106002": {
        "nombre": "MANTEL ANTIMANCHAS 2.50 x 1.45 cm",
        "precio": 66000
    },
    "U45122002": {
        "nombre": "DELANTAL BASICO UNISEX TU",
        "precio": 40300
    },
    "U45122003": {
        "nombre": "SERVILLETAS TUSOR 0.45*0.45",
        "precio": 25500
    },
    "U45122005": {
        "nombre": "CAMINO DE GASA 2.50*0.50",
        "precio": 19600
    },
    "U45122010": {
        "nombre": "MANTEL VOLADO 3.10*1.80",
        "precio": 85700
    },
    "U45122013": {
        "nombre": "SERVILLETA GASA 0.45*0.45",
        "precio": 26900
    },
    "U45122014": {
        "nombre": "YERBERA",
        "precio": 19500
    },
    "U45122015": {
        "nombre": "SET SERVILLETERO X6 ESTRELLA",
        "precio": 19600
    },
    "U45122023": {
        "nombre": "BOLSO PICNIC",
        "precio": 71300
    },
    "U45122024": {
        "nombre": "SET DE REPASADORES HOJAS",
        "precio": 41400
    },
    "U45122025": {
        "nombre": "SET DE REPASADORES TOMATE 0.60 0.40 t",
        "precio": 18400
    },
    "U45122028": {
        "nombre": "MANTEL TUSOR LIVIANO 1.80*1.80",
        "precio": 45800
    },
    "U45122029": {
        "nombre": "MANTEL ESTAMPADO SALVIA 2.50*1.45",
        "precio": 85100
    },
    "U45122030": {
        "nombre": "CAMINO DE MESA ESTAMPA SALVIA 2.50*0.50",
        "precio": 31100
    },
    "U45122031": {
        "nombre": "SET DE REPASADORES SALVIA",
        "precio": 20700
    },
    "U45122032": {
        "nombre": "SET TAPAS TEXTILES SALVIA",
        "precio": 15700
    },
    "U45122033": {
        "nombre": "INDIVIDUAL REVERSIBLE PECES/BOTANICO",
        "precio": 66700
    },
    "U45134000": {
        "nombre": "REPASADOR NIDO ABEJA CUERO",
        "precio": 18000
    },
    "U41122000": {
        "nombre": "BANDANA CHEF",
        "precio": 18500
    },
    "U45134004": {
        "nombre": "DELANTAL FOLK TIRAS CUERO",
        "precio": 64500
    },
    "U45501000": {
        "nombre": "MANTEL CAMPO",
        "precio": 40300
    },
    "U45501001": {
        "nombre": "MANTEL CUADROS 2.50 * 1.60",
        "precio": 62000
    },
    "U45501003": {
        "nombre": "SERVILLETA CUADROS x2",
        "precio": 26500
    },
    "U45501004": {
        "nombre": "SET REPASADORES CUADROS 0.45*0.45",
        "precio": 27500
    },
    "U45172000": {
        "nombre": "CAMINO DE MESA ARPILLERA",
        "precio": 24400
    },
    "U45173145": {
        "nombre": "SET SERVILLETERO ESPIRAL",
        "precio": 18500
    },
    "U82116003": {
        "nombre": "BOLSO MATERO",
        "precio": 51500
    },
    "U45106019": {
        "nombre": "Mantel Antimanchas 2.50*1.80",
        "precio": 80500
    },
    "U45122140": {
        "nombre": "DELANTAL USO INTENSIVO",
        "precio": 64500
    },
    "U45122141": {
        "nombre": "REPASADORES DUO GUARDA X2",
        "precio": 25500
    },
    "U45173167": {
        "nombre": "SERVILLETERO NAVIDEÑO X4",
        "precio": 25500
    },
    "845122003": {
        "nombre": "DELANTAL MUJER",
        "precio": 26500
    },
    "845122004": {
        "nombre": "DELANTAL TU SALVIA",
        "precio": 35700
    },
    "U00122000": {
        "nombre": "SET COCINA SALVIA MANOPLA/AGARRADERA",
        "precio": 17900
    },
    "841122002": {
        "nombre": "DELANTAL FOLK GABARDINA",
        "precio": 55000
    },
    "811122292": {
        "nombre": "CAMISA TANDIL",
        "precio": 61000
    },
    "U00158003": {
        "nombre": "CARPA 3 PERSONAS CP2002",
        "precio": 245300
    },
    "U00158005": {
        "nombre": "CARPA 4 PERSONAS CP2004",
        "precio": 349300
    },
    "U00161002": {
        "nombre": "MESA PLEGABLE 70X70  MP560",
        "precio": 213200
    },
    "U00173004": {
        "nombre": "LINTERNA LED ALTA POTENCIA USB LP8061",
        "precio": 109300
    },
    "U00173006": {
        "nombre": "LINTERNA FAROL LED ALTA POTENCIA USB LP3089",
        "precio": 46800
    },
    "U00173008": {
        "nombre": "LINTERNA FAROIL BUSCA HUELLA USB LP512",
        "precio": 119000
    },
    "U00173009": {
        "nombre": "HEADLAMP LED ALTA POTENCIA USB C/SENSOR",
        "precio": 34000
    },
    "U00173017": {
        "nombre": "VASO TERMICO AMERICANO INT. CEREAMICO 380cc",
        "precio": 35800
    },
    "U00173018": {
        "nombre": "VASO TERMICO CLYDE INT. CERAMICO 480cc",
        "precio": 44200
    },
    "U00173019": {
        "nombre": "COOLER PERSONAL 23Lts",
        "precio": 44500
    },
    "U00173022": {
        "nombre": "BINOCULARES 30X50 BPOR10",
        "precio": 14100
    },
    "U00173023": {
        "nombre": "BINOCULARES BPOR-10X50",
        "precio": 128200
    },
    "U00173024": {
        "nombre": "MONOCULAR MPMON 16X52",
        "precio": 39200
    },
    "U00173025": {
        "nombre": "BINOCULAR 10X25 BP-TR2",
        "precio": 44200
    },
    "U00173026": {
        "nombre": "VASO TERMICO ACERO INOX. BORDA500ml",
        "precio": 24300
    },
    "U00173027": {
        "nombre": "CORTAPLUMA DESMONTABLE PCOVERS02",
        "precio": 20600
    },
    "U00173028": {
        "nombre": "CORTAPLUMA MULTIUSO PTOOLS",
        "precio": 19300
    },
    "U00173029": {
        "nombre": "CORTAPLUMA PINZA  MULTIUSOS",
        "precio": 36900
    },
    "U00173101": {
        "nombre": "BANQUITO PLEGABLE MPS6010",
        "precio": 29600
    },
    "U00173111": {
        "nombre": "SILLON DIRECTOR PLEGABLE MP066",
        "precio": 150100
    },
    "U00173112": {
        "nombre": "SILLON PLEGABLE MP75055",
        "precio": 140200
    },
    "U00173200": {
        "nombre": "PALAS SPF5815BK",
        "precio": 40300
    },
    "U00163001": {
        "nombre": "CARTELES DE CHAPA | GRUPO 1",
        "precio": 7950
    },
    "U00163002": {
        "nombre": "CARTELES DE CHAPA | GRUPO 2",
        "precio": 12000
    },
    "U00163003": {
        "nombre": "CARTELES DE CHAPA | GRUPO 3",
        "precio": 18000
    },
    "U00163004": {
        "nombre": "CARTELES DE CHAPA GRUPO IV 70x50 RESPALDO DE LA HISTORIA",
        "precio": 56000
    },
    "U00163005": {
        "nombre": "CARTELES DE CHAPA GRUPO V 40x50 RESPALDO DE LA HISTORIA",
        "precio": 42500
    },
    "U00163006": {
        "nombre": "CARTELES DE CHAPA | GRUPO 6",
        "precio": 39000
    },
    "U00163007": {
        "nombre": "CARTELES CHAPA GRUPO XII",
        "precio": 37500
    },
    "U00163008": {
        "nombre": "CARTELES CHAPA GRUPO VIII",
        "precio": 26600
    },
    "U00163009": {
        "nombre": "CARTEL DE CHAPA GRUPO IX",
        "precio": 66600
    },
    "U00163010": {
        "nombre": "CARTELES DE CHAPA GRUPO X",
        "precio": 66600
    },
    "U00163012": {
        "nombre": "ALMANAQUE PAMPERO",
        "precio": 35000
    },
    "U00163013": {
        "nombre": "STICKERS",
        "precio": 110000
    },
    "U00163014": {
        "nombre": "CARTEL FORMA PAMPERO",
        "precio": 48500
    },
    "U00163015": {
        "nombre": "CARTEL FORMA BANDERIN",
        "precio": 48500
    },
    "U45173168": {
        "nombre": "MATE TUPUNGATO",
        "precio": 25500
    },
    "U71173000": {
        "nombre": "PLATO DE MADERA RECTANGULAR",
        "precio": 13000
    },
    "U71173001": {
        "nombre": "TABLA DE MADERA",
        "precio": 33500
    },
    "U45173124": {
        "nombre": "JUEGO DE MESA",
        "precio": 48500
    },
    "U45173125": {
        "nombre": "BOMBILLA CHICA",
        "precio": 6500
    },
    "U45173126": {
        "nombre": "BOMBILLA GRANDE",
        "precio": 8500
    },
    "U45173132": {
        "nombre": "BOMBILLA CINCELADA",
        "precio": 9000
    },
    "U45173001": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 20",
        "precio": 46000
    },
    "U45173002": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 26",
        "precio": 72500
    },
    "U45173003": {
        "nombre": "CUCHILLO CIERVO COMBINADO 14 CM",
        "precio": 45000
    },
    "U45173004": {
        "nombre": "CUCHILLO CIERVO COMBINADO 20 CM",
        "precio": 63000
    },
    "U45173006": {
        "nombre": "JUEGO PARRILLERO 18 CM",
        "precio": 78000
    },
    "U45173009": {
        "nombre": "PLATO MADERA REDONDO",
        "precio": 10500
    },
    "U45173010": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 14 CM",
        "precio": 32000
    },
    "U45173011": {
        "nombre": "MATE LANIN",
        "precio": 9000
    },
    "U45173012": {
        "nombre": "MATE ARACAR",
        "precio": 12500
    },
    "U45173013": {
        "nombre": "MATE COPAHUE",
        "precio": 6600
    },
    "U45134008": {
        "nombre": "MATE CATEDRAL",
        "precio": 28500
    },
    "U45173162": {
        "nombre": "MATE CHALTEN",
        "precio": 16000
    },
    "U45173163": {
        "nombre": "JUEGO DE TRINCHAR",
        "precio": 129000
    },
    "U45134002": {
        "nombre": "MATE DOMUYO",
        "precio": 22000
    },
    "U45134003": {
        "nombre": "MATE ACONCAGUA",
        "precio": 39000
    },
    "U45119000": {
        "nombre": "MATERA TILCARA",
        "precio": 23500
    },
    "U45119001": {
        "nombre": "SET YERBERO/AZUCARERO",
        "precio": 14000
    },
    "U45119002": {
        "nombre": "PORTAMATE PARA AUTO",
        "precio": 9000
    },
    "U06173163": {
        "nombre": "AROMATIZANTE MADERA DE QUEBRACHO 500ML",
        "precio": 51900
    },
    "U41171004": {
        "nombre": "AUSTRALIANO PALMA VERDE",
        "precio": 114000
    },
    "U41171005": {
        "nombre": "AUSTRALIANO SAO",
        "precio": 77000
    },
    "U41160000": {
        "nombre": "AUSTRALIANO CLÁSICO",
        "precio": 103000
    },
    "U41160001": {
        "nombre": "AUSTRALIANO CAZA Y PESCA",
        "precio": 109000
    },
    "111121005": {
        "nombre": "TRAJE DE LLUVIA ROYAL",
        "precio": 63500
    },
    "111121010": {
        "nombre": "PONCHO LLUVIA LIVIANO PAMPERO",
        "precio": 17500
    },
    "511106300": {
        "nombre": "CAMPERA MONTANA MUJER",
        "precio": 100000
    },
    "421134152": {
        "nombre": "ZAPATILLA PACHECHO CUERO",
        "precio": 134100
    },
    "111121008": {
        "nombre": "PONCHO RESERO ROYAL",
        "precio": 72000
    },
    "811106190": {
        "nombre": "MUSCULOSA LUISINA",
        "precio": 39800
    },
    "911118026": {
        "nombre": "BUZO ESTANI CON CAPUCHA BASICO",
        "precio": 27900
    },
    "811106179": {
        "nombre": "TUNICA PINAMAR",
        "precio": 28500
    },
    "811106181": {
        "nombre": "PONCHO PARANA",
        "precio": 45000
    },
    "412106108": {
        "nombre": "SHORT SURF",
        "precio": 53500
    },
    "911122177": {
        "nombre": "REMERA ESTRELLAS",
        "precio": 17800
    },
    "911122181": {
        "nombre": "BUZO AMOR",
        "precio": 25700
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