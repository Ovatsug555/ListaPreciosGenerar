// Simulación de base de datos de ropa con precios
const ropa = {
  //Lista Base de Datos local Buenos Aires
    "777": {
        "nombre": "servicio bordado",
        "precio": 1900
    },
    "911106026": {
        "nombre": "REMERA CRIS SURF NENE",
        "precio": 27300
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
    "912106019": {
        "nombre": "SHORT DE BAÑO ESTAMPADO",
        "precio": 31800
    },
    "911106027": {
        "nombre": "REMERA CRIS SURF BB",
        "precio": 27300
    },
    "911106028": {
        "nombre": "REMERA ML",
        "precio": 28300
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
    "U12106003": {
        "nombre": "PANTALON AIMAR",
        "precio": 84000
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
    "711106013": {
        "nombre": "CAMISA EVA SUPLEX MINI RIPSTOP",
        "precio": 82800
    },
    "912511002": {
        "nombre": "SHORT APOLO",
        "precio": 21400
    },
    "711106014": {
        "nombre": "CAMISA MERCEDES SPANDEX",
        "precio": 70500
    },
    "713106009": {
        "nombre": "CAMPERA NOGAL MUJER",
        "precio": 117000
    },
    "713106201": {
        "nombre": "TAPADO TRAFUL",
        "precio": 143800
    },
    "U11106009": {
        "nombre": "REMERA CARRERA MANGA LARGA",
        "precio": 46800
    },
    "713211142": {
        "nombre": "CAMPERA CHOLILA M.SOFTSHELL",
        "precio": 102000
    },
    "711511000": {
        "nombre": "TOP DEPORTIVO NOA",
        "precio": 45800
    },
    "711517000": {
        "nombre": "MUSCULOSA DEPOTIVA EMMA",
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
    "311106015": {
        "nombre": "CAMISA  PUAN TECNICA M/LARGA 2 BOLSILLOS",
        "precio": 84000
    },
    "311106018": {
        "nombre": "CAMISA PUAN TECNICA M/C C/ BOLSILLO",
        "precio": 67000
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
    "312106017": {
        "nombre": "BABUCHA TAPALQUE",
        "precio": 104000
    },
    "312106019": {
        "nombre": "BERMUDA CARGO SAAVEDRA",
        "precio": 72000
    },
    "312106023": {
        "nombre": "PANTALON CARGO DESMONTABLE SOFSHELL",
        "precio": 89700
    },
    "312106024": {
        "nombre": "PANTALON EPECUÉN",
        "precio": 104000
    },
    "312106501": {
        "nombre": "SHORT CATAMARCA",
        "precio": 38400
    },
    "313106005": {
        "nombre": "CAMPERA NOGAL SOFTSHELL H.",
        "precio": 125000
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
    "311106107": {
        "nombre": "CAMISA PUAN PAPER M/C",
        "precio": 51600
    },
    "311106108": {
        "nombre": "CAMISA PUAN PAPER M/L",
        "precio": 57600
    },
    "313211142": {
        "nombre": "CAMPERA CURRUHUE H.SOFTSHELL",
        "precio": 116000
    },
    "444106000": {
        "nombre": "CINTO SAUCE COMB.40 SOGA",
        "precio": 24700
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
        "precio": 30600
    },
    "444134003": {
        "nombre": "CINTO ALCORTA",
        "precio": 27400
    },
    "444134004": {
        "nombre": "CINTO BORDADO LARREA",
        "precio": 37900
    },
    "444134009": {
        "nombre": "CINTO CAVEN GRABADO 40MM",
        "precio": 29500
    },
    "444134010": {
        "nombre": "CINTO ARRAYAN COMBINADO 35MM",
        "precio": 26500
    },
    "444145000": {
        "nombre": "CINTO COIHUE LISO 40 ENGRASADO",
        "precio": 29500
    },
    "444145001": {
        "nombre": "CINTO ÑIRE BORDADO 35 SUELA",
        "precio": 37900
    },
    "444145003": {
        "nombre": "CINTO CIPRES LISO 30 SUELA",
        "precio": 21400
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
        "precio": 30400
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
        "precio": 117300
    },
    "471154001": {
        "nombre": "TERMERA CHAMPAQUI",
        "precio": 94800
    },
    "478134100": {
        "nombre": "MATE PAMPERO BOCA ANCHA",
        "precio": 35700
    },
    "478134101": {
        "nombre": "MATE PAMPERO BOCA CHICA",
        "precio": 30400
    },
    "478134103": {
        "nombre": "MATE CHAMPAQUÍ TRES PATAS",
        "precio": 35700
    },
    "478163100": {
        "nombre": "BOMBILLA PAMPERO",
        "precio": 10000
    },
    "480134000": {
        "nombre": "BILLETERA ALERCE H.COMB.LONA",
        "precio": 21900
    },
    "811134107": {
        "nombre": "BILLETERA CABRAL H. NOBUK COMBINADO",
        "precio": 25300
    },
    "811134108": {
        "nombre": "BILLETERA NEUQUEN H. CUERO ANILINA",
        "precio": 25800
    },
    "U44122002": {
        "nombre": "CINTO FRESNO GALÓN 35MM",
        "precio": 19600
    },
    "U44134000": {
        "nombre": "CINTO TACHAS",
        "precio": 35700
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
    "880134000": {
        "nombre": "BILLETERA PUNA",
        "precio": 39100
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
        "precio": 62000
    },
    "882106004": {
        "nombre": "CARTERA LA ESTANCIA - MEDIANA",
        "precio": 89000
    },
    "882106005": {
        "nombre": "TOTE LA ESTANCIA",
        "precio": 92000
    },
    "882106007": {
        "nombre": "MINI BANDOLERA MONTE HERMOSO",
        "precio": 49100
    },
    "882106008": {
        "nombre": "BANDOLERA MONTE HERMOSO",
        "precio": 55000
    },
    "882106009": {
        "nombre": "MOCHILA MONTE HERMOSO",
        "precio": 107000
    },
    "882106010": {
        "nombre": "BOLSO MONTE HERMOSO",
        "precio": 105100
    },
    "882106011": {
        "nombre": "BANDOLERA PEHUEN-CÓ",
        "precio": 65000
    },
    "882106012": {
        "nombre": "MOCHILA PEHUEN-CÓ",
        "precio": 95100
    },
    "882106013": {
        "nombre": "BOLSO PEHUEN-CÓ",
        "precio": 89600
    },
    "882116013": {
        "nombre": "MOCHILA REGIMIENTO",
        "precio": 158700
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
        "nombre": "MORRAN NILQUE",
        "precio": 132300
    },
    "882134126": {
        "nombre": "MINI MORRAL CUNCO",
        "precio": 66700
    },
    "882142000": {
        "nombre": "TOTE CARILÓ",
        "precio": 60000
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
        "precio": 86700
    },
    "889134123": {
        "nombre": "NECESAIRE MALVA",
        "precio": 68800
    },
    "844134013": {
        "nombre": "CINTO CANELO FLOTTER 30MM",
        "precio": 29900
    },
    "844145000": {
        "nombre": "CINTO MAITEN LISO 40 SUELA",
        "precio": 28800
    },
    "844145002": {
        "nombre": "CINTO SUELA ALERCE 40MM",
        "precio": 26000
    },
    "844134000": {
        "nombre": "CINTO YATAY BORD.ROMBO 25",
        "precio": 28800
    },
    "844134012": {
        "nombre": "LONJA DE CUERO CRUDO",
        "precio": 26700
    },
    "845174001": {
        "nombre": "ARO GRANDE GOLPEADO",
        "precio": 23000
    },
    "845174002": {
        "nombre": "ARO CHICO GOLPEADO",
        "precio": 21000
    },
    "845174003": {
        "nombre": "DIJE CHICO",
        "precio": 25300
    },
    "845174004": {
        "nombre": "DIJE GRANDE",
        "precio": 30400
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
        "precio": 31800
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
        "precio": 23500
    },
    "U00174001": {
        "nombre": "HEBILLA CINTURON",
        "precio": 42800
    },
    "U43173000": {
        "nombre": "PULSERA PIEDRA VOLCANICA",
        "precio": 15100
    },
    "U42134000": {
        "nombre": "PASAPAÑUELO DE CUERO",
        "precio": 15900
    },
    "U43134000": {
        "nombre": "PULSERA TRENZAS CUERO",
        "precio": 25000
    },
    "U43154000": {
        "nombre": "TIENTO GAMUZA",
        "precio": 6000
    },
    "U45134005": {
        "nombre": "LLAVERO CUERO",
        "precio": 31100
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
    "842130000": {
        "nombre": "TIENTOS EN HILOS TRENZADOS",
        "precio": 7900
    },
    "842134000": {
        "nombre": "GARGANTILLA  DE GAMUZA",
        "precio": 25300
    },
    "842154002": {
        "nombre": "TIENTO MULTIGAMUZA",
        "precio": 11100
    },
    "842173011": {
        "nombre": "ROSARIO SEMILLAS",
        "precio": 31000
    },
    "842174001": {
        "nombre": "GARGANTILLA LISA",
        "precio": 26500
    },
    "842174002": {
        "nombre": "ROSARIO COLLAR",
        "precio": 27600
    },
    "842174015": {
        "nombre": "CADENA DE ACERO QUIRUGICO GRUESA",
        "precio": 8800
    },
    "842174016": {
        "nombre": "GARGANTILLA FINA CERRADA",
        "precio": 21900
    },
    "842174017": {
        "nombre": "DECENARIO COLLAR",
        "precio": 19600
    },
    "842174018": {
        "nombre": "DIJE DOBLE CON PIEDRA",
        "precio": 44400
    },
    "842174019": {
        "nombre": "DIJE PIEDRA ONIX Y ALPACA",
        "precio": 17800
    },
    "842174020": {
        "nombre": "COLLAR 5 ARGOLLAS",
        "precio": 39100
    },
    "842174022": {
        "nombre": "DECENARIO COLLAR SEMILLAS",
        "precio": 19300
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
        "precio": 43300
    },
    "843154000": {
        "nombre": "PULSERA TIENTO GAMUZA",
        "precio": 13800
    },
    "843173010": {
        "nombre": "PULSERA TRENZADA GAMUZADA",
        "precio": 13600
    },
    "843173011": {
        "nombre": "BRAZALLETE CUERO Y APLIQUE",
        "precio": 24900
    },
    "843173012": {
        "nombre": "BRAZALETE CUERO APLIQUE CIRCULAR",
        "precio": 25300
    },
    "843173013": {
        "nombre": "PULSER FINA CUERO Y APLQIUE",
        "precio": 13800
    },
    "843173014": {
        "nombre": "PULSERA VIDRIO FACETADO",
        "precio": 11500
    },
    "843174000": {
        "nombre": "ESCLAVA ABIERTA CON DIJE",
        "precio": 23300
    },
    "843174001": {
        "nombre": "ESCLAVA CERRADA SIN DIJE",
        "precio": 17500
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
        "precio": 33400
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
        "precio": 22400
    },
    "843174009": {
        "nombre": "ROSARIO PULSERA",
        "precio": 12700
    },
    "843174011": {
        "nombre": "ANILLO GOLPEADO ABIERTO",
        "precio": 24900
    },
    "843174012": {
        "nombre": "ESCLAVA CHAPA GOLPEADA",
        "precio": 25500
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
    "445174000": {
        "nombre": "LLAVERO",
        "precio": 32200
    },
    "441174003": {
        "nombre": "DIJE CRUZ CHICA DE ALPACA BAÑADA EN PLATA",
        "precio": 20700
    },
    "442106005": {
        "nombre": "PAÑUELO ESTAMPADO",
        "precio": 21900
    },
    "442174000": {
        "nombre": "PASAPAÑUELO LISO",
        "precio": 29200
    },
    "442174001": {
        "nombre": "PASAPAÑUELO PENSAMIENTO",
        "precio": 29900
    },
    "442174002": {
        "nombre": "DIJE CRUZ GRANDE DE ALPACA BAÑADA EN PLATA",
        "precio": 23300
    },
    "045174000": {
        "nombre": "CUNEROS CHICOS",
        "precio": 22100
    },
    "111122002": {
        "nombre": "REMERA M/ LARGA CUELLO O COLLARETA",
        "precio": 18900
    },
    "111514003": {
        "nombre": "CHOMBA ML JERSEY H.",
        "precio": 25300
    },
    "111514004": {
        "nombre": "CHOMBA MC JERSEY H.",
        "precio": 23600
    },
    "111105000": {
        "nombre": "REMERA TERMICA ML",
        "precio": 22900
    },
    "111108003": {
        "nombre": "BUZO MEDIO CIERRE POLAR H.",
        "precio": 51700
    },
    "111108004": {
        "nombre": "CHALECO DE POLAR C/ CIERRE H.",
        "precio": 46500
    },
    "111108005": {
        "nombre": "CAMPERA DE POLAR H.",
        "precio": 59300
    },
    "111118003": {
        "nombre": "BUZO FRISA CUELLO REDONDO M/L H.",
        "precio": 40600
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
    "U80134001": {
        "nombre": "BILLETERA CON CIERRE",
        "precio": 49500
    },
    "U81101000": {
        "nombre": "BOLSO COLSA",
        "precio": 188600
    },
    "U81106000": {
        "nombre": "NECESSAIRE PATAGONIA",
        "precio": 39100
    },
    "U82106000": {
        "nombre": "MOCHILA EZEIZA",
        "precio": 107000
    },
    "U82106001": {
        "nombre": "MOCHILA MAR DEL PLATA",
        "precio": 95300
    },
    "U82106002": {
        "nombre": "BOLSO DE VIAJE PATAGONIA",
        "precio": 95300
    },
    "U82106003": {
        "nombre": "MOCHILA PATAGONIA",
        "precio": 115000
    },
    "U82106004": {
        "nombre": "VALIJA PATAGONIA CHICA",
        "precio": 199500
    },
    "U82116000": {
        "nombre": "RIÑONERA NARANJOS",
        "precio": 40300
    },
    "U82116001": {
        "nombre": "TERMERA ARENA LONA",
        "precio": 104000
    },
    "U82116002": {
        "nombre": "MORRAL ARIAS UNISEX",
        "precio": 30400
    },
    "U82116004": {
        "nombre": "MORRAL QUILA",
        "precio": 119600
    },
    "U82134000": {
        "nombre": "TERMERA ARENA GAMUZON",
        "precio": 158700
    },
    "U89134001": {
        "nombre": "RIñONERA PALACIO",
        "precio": 98900
    },
    "111118004": {
        "nombre": "CHALECO DE FRIZA H. C/ CIERRE",
        "precio": 46500
    },
    "111118005": {
        "nombre": "CAMPERA DE FRIZA H.",
        "precio": 59300
    },
    "111118006": {
        "nombre": "BUZO MEDIO CIERRE FRIZA H.",
        "precio": 51700
    },
    "111138000": {
        "nombre": "CHOMBA M/LARGA (MICRO PIQUE PESCO)",
        "precio": 29900
    },
    "111138003": {
        "nombre": "CHOMBA M/CORTA  (MICRO PIQUE PESCO H.)",
        "precio": 26000
    },
    "111140000": {
        "nombre": "REMERA CUELLO REDONDO BASICA M/C H.",
        "precio": 17400
    },
    "513118000": {
        "nombre": "MUJER CAMPERA CON CIERRE CUELLO ALTO (FRISA INVISIBLE)",
        "precio": 46800
    },
    "511138002": {
        "nombre": "CHOMBA M/C MICROPIQUE MUJER.",
        "precio": 25600
    },
    "511138003": {
        "nombre": "CHOMBA M/L MICROPIQUE MUJER.",
        "precio": 27200
    },
    "511118000": {
        "nombre": "BUZO CUELLO REDONDO FRIZA M.",
        "precio": 36900
    },
    "511118001": {
        "nombre": "CHALECO FRIZA C/ CIERRE M.",
        "precio": 41800
    },
    "511122003": {
        "nombre": "REMERA CUELLO REDONDO TIRA DE LIMPIEZA ML M",
        "precio": 17800
    },
    "511122004": {
        "nombre": "REMERA CUELLO REDONDO TIRA DE LIMPIEZA MC M",
        "precio": 16900
    },
    "51218001M": {
        "nombre": "PANTALON CARGO DE TRABAJO MUJER",
        "precio": 51300
    },
    "412104001": {
        "nombre": "JEAN WORKER",
        "precio": 33000
    },
    "412104007": {
        "nombre": "JEAN RANGER PAMPERO",
        "precio": 35100
    },
    "11218001M": {
        "nombre": "PANTALON DE TRABAJO HOMBRE",
        "precio": 32600
    },
    "111104000": {
        "nombre": "CAMISA DE TRABAJO H.M/L DENIM",
        "precio": 42000
    },
    "111104001": {
        "nombre": "MAMELUCO MANGA RANGLAN H.DENIM",
        "precio": 64000
    },
    "11111001M": {
        "nombre": "CAMISA DE TRABAJO H.M/L",
        "precio": 31500
    },
    "11181001M": {
        "nombre": "MAMELUCO MANGA RANGLAN H.",
        "precio": 73500
    },
    "21228001M": {
        "nombre": "BOMBACHA LISA HOMBRE",
        "precio": 39600
    },
    "U12106004": {
        "nombre": "PANTALÓN CAIRO DESMONTABLE",
        "precio": 88300
    },
    "U11106010": {
        "nombre": "CAMISA CAIRO PAMPERO",
        "precio": 64900
    },
    "91228001M": {
        "nombre": "BOMBACHA LISA NIÑO",
        "precio": 35500
    },
    "112142000": {
        "nombre": "PANTALON CARGO STRETCH",
        "precio": 95900
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
    "811540002": {
        "nombre": "CARDIGAN HUMAHUACA M. ALG./LANA",
        "precio": 68600
    },
    "813106000": {
        "nombre": "CAMPERA ANGOSTURA M.MATELASEE",
        "precio": 93300
    },
    "813106001": {
        "nombre": "CHALECO ANGOSTURA M.MATELASEE",
        "precio": 76500
    },
    "813106023": {
        "nombre": "CHALECO CACHI MORLEY",
        "precio": 107700
    },
    "811514117": {
        "nombre": "CHALECO CARRANZA",
        "precio": 48400
    },
    "811540006": {
        "nombre": "SWEATER LAS GRUTAS",
        "precio": 90900
    },
    "811540007": {
        "nombre": "CHALECO SIERRA GRANDE",
        "precio": 70500
    },
    "811122285": {
        "nombre": "SWEATER PUNA",
        "precio": 66500
    },
    "811166066": {
        "nombre": "CHALECO CARRANZA",
        "precio": 60500
    },
    "811514107": {
        "nombre": "RUANA BELTRAN OCHOS",
        "precio": 106000
    },
    "811520017": {
        "nombre": "SWEATER LA BARRA",
        "precio": 66000
    },
    "811520128": {
        "nombre": "SWEATER COCHINOCA Bosa Combinado",
        "precio": 57300
    },
    "212500001": {
        "nombre": "BOMBACHA LISA DENIM HOMBRE",
        "precio": 59000
    },
    "32170002M": {
        "nombre": "PANTALON CARGO PAMP RIPSTOP ANTIDESGARRO",
        "precio": 60600
    },
    "31217001M": {
        "nombre": "PANTALON CAZADOR II HOMBRE",
        "precio": 53400
    },
    "31233001A": {
        "nombre": "BERMUDA CARGO HOMBRE",
        "precio": 48500
    },
    "31233002M": {
        "nombre": "BERMUDA CARGO FIT ELASTIZADA",
        "precio": 49500
    },
    "312506001": {
        "nombre": "PANTALON CARGO ELASTIZADO",
        "precio": 59000
    },
    "811540008": {
        "nombre": "PONCHO RAWSON",
        "precio": 96900
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
        "precio": 72700
    },
    "811135020": {
        "nombre": "POLERÓN PURMAMARCA",
        "precio": 90900
    },
    "811520129": {
        "nombre": "SWEATER UQUÍA Bosa",
        "precio": 61500
    },
    "811152004": {
        "nombre": "SWEATER IRUYA",
        "precio": 66800
    },
    "811122123": {
        "nombre": "MUSCULOSA PALMEIRAS MORLEY",
        "precio": 35000
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
        "precio": 71000
    },
    "411106008": {
        "nombre": "BOSA GALVAN",
        "precio": 84500
    },
    "411122008": {
        "nombre": "CAMPERA POMA CON CIERRE",
        "precio": 105300
    },
    "411106003": {
        "nombre": "SWEATER POLICIAL",
        "precio": 121900
    },
    "411122024": {
        "nombre": "SWEATER SAN CARLOS MEDIO CIERRE VERANO INTARCIA",
        "precio": 86000
    },
    "411122162": {
        "nombre": "SWEATER CENTENERA Bosa",
        "precio": 51100
    },
    "411122163": {
        "nombre": "SWEATER SAN IGNACIO",
        "precio": 78900
    },
    "411122166": {
        "nombre": "CHALECO CONDARCO",
        "precio": 66000
    },
    "411122167": {
        "nombre": "SWEATER NEUQUEN BOSA",
        "precio": 59700
    },
    "411122059": {
        "nombre": "CAMPERA SAN CARLOS",
        "precio": 93600
    },
    "411122121": {
        "nombre": "CAMPERA LA PAMPA",
        "precio": 150300
    },
    "411122146": {
        "nombre": "BOSA OLIVO",
        "precio": 51100
    },
    "612102000": {
        "nombre": "BOMBACHA    ALUMINE       MUJER",
        "precio": 52700
    },
    "612124000": {
        "nombre": "BOMBACHA ALUMINE ANGOSTA",
        "precio": 66000
    },
    "612124002": {
        "nombre": "BOMBACHA MARTINA ANGOSTA",
        "precio": 85000
    },
    "612124003": {
        "nombre": "BOMBACHA MORA ANGOSTA",
        "precio": 68000
    },
    "612283101": {
        "nombre": "BOMBACHA CORONDA RECTA",
        "precio": 57000
    },
    "412500050": {
        "nombre": "PANTALON HERRADURA ANGOSTO",
        "precio": 87000
    },
    "412500052": {
        "nombre": "PANTALON ROCA ANGOSTO",
        "precio": 78000
    },
    "412500053": {
        "nombre": "PANTALON QUEBRACHO RECTO",
        "precio": 78000
    },
    "412500054": {
        "nombre": "PANTALON MATEO CARGO ANGOSTO",
        "precio": 99000
    },
    "412500055": {
        "nombre": "PANTALON ROCA CARGO ANGOSTO",
        "precio": 98000
    },
    "412500056": {
        "nombre": "PANTALON BOLIVAR CARGO CON PUñO",
        "precio": 99000
    },
    "412500057": {
        "nombre": "BOMBACHA ZENON",
        "precio": 82000
    },
    "412500058": {
        "nombre": "PANTALON ORIGEN",
        "precio": 85000
    },
    "412506001": {
        "nombre": "PANTALON BAHIA RECTO",
        "precio": 70000
    },
    "412506002": {
        "nombre": "PANTALON ARECO RECTO",
        "precio": 82000
    },
    "412506003": {
        "nombre": "PANTALON JUNIN CHINO CORTE AJUSTADO",
        "precio": 85000
    },
    "412506006": {
        "nombre": "PANTALON GERONIMO",
        "precio": 80700
    },
    "412506007": {
        "nombre": "PANTALON FELIPE ANGOSTO",
        "precio": 92000
    },
    "412506008": {
        "nombre": "PANTALON GARCIA MUY ANGOSTO",
        "precio": 89000
    },
    "412506012": {
        "nombre": "BOMBACHA ZENON",
        "precio": 78000
    },
    "412506015": {
        "nombre": "BOMBACHA ZENON corderoy",
        "precio": 105000
    },
    "412506016": {
        "nombre": "BOMBACHA ZENON ripstop",
        "precio": 105000
    },
    "412122203": {
        "nombre": "BERMUDA MORON",
        "precio": 67900
    },
    "412122204": {
        "nombre": "BERMUDA FRONTERA CARGO",
        "precio": 72000
    },
    "412122205": {
        "nombre": "BERMUDA ALSINA",
        "precio": 70600
    },
    "412124000": {
        "nombre": "PANTALON BAHIA POPLIN",
        "precio": 59300
    },
    "412124001": {
        "nombre": "BERMUDA ROMERILLO RECTA",
        "precio": 61700
    },
    "412104013": {
        "nombre": "PANTALON CAMPO RECTO",
        "precio": 61000
    },
    "412525002": {
        "nombre": "PANTALON BAHIA RECTO",
        "precio": 72900
    },
    "412525003": {
        "nombre": "BERMUDA POTRERILLOS RECTA",
        "precio": 62900
    },
    "412525004": {
        "nombre": "BERMUDA RAWSON RECTA",
        "precio": 64100
    },
    "412529000": {
        "nombre": "BERMUDA TIMBÓ",
        "precio": 67900
    },
    "412541013": {
        "nombre": "PANTALON  ALVARO RECTO",
        "precio": 68000
    },
    "412541015": {
        "nombre": "PANTALON ROCA ANGOSTO",
        "precio": 72000
    },
    "412541016": {
        "nombre": "PANTALON ROCA DENIM C/LYCRA",
        "precio": 78000
    },
    "412506020": {
        "nombre": "PANTALON MONTECITOS CORDEROY",
        "precio": 94000
    },
    "412122002": {
        "nombre": "BERMUDA TIMBO  RECTA",
        "precio": 52100
    },
    "412545002": {
        "nombre": "PANTALON FELIPE ANGOSTO",
        "precio": 84000
    },
    "412545000": {
        "nombre": "PANTALON SIMON MUY ANGOSTO",
        "precio": 80000
    },
    "212287101": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 62000
    },
    "212124000": {
        "nombre": "BOMBACHA OLIVERA",
        "precio": 69000
    },
    "212192101": {
        "nombre": "PANTALON BAHIA RECTO",
        "precio": 61000
    },
    "012122018": {
        "nombre": "BOMBACHA PAÑALERA DENIM",
        "precio": 35000
    },
    "012281101": {
        "nombre": "BOMBACHA PAÑALERA",
        "precio": 35000
    },
    "112541000": {
        "nombre": "PANTALON AMERICA INDUSTRIA",
        "precio": 51000
    },
    "812122215": {
        "nombre": "PANTALON MARGARITA",
        "precio": 81300
    },
    "812122210": {
        "nombre": "PANTALON BLANCA",
        "precio": 78200
    },
    "812122211": {
        "nombre": "BOMBACHA MARTINA FLOR ANGOSTA",
        "precio": 98000
    },
    "812122212": {
        "nombre": "BERMUDA MARGARITA",
        "precio": 68200
    },
    "812122213": {
        "nombre": "BERMUDA SALTO",
        "precio": 66700
    },
    "812101006": {
        "nombre": "PANTALON SAUCE GABARDINA",
        "precio": 74000
    },
    "812101007": {
        "nombre": "PANTALON ANDINA GABARDINA",
        "precio": 81000
    },
    "812101008": {
        "nombre": "PANTALON SENDERO ANCHO",
        "precio": 82000
    },
    "812122013": {
        "nombre": "SHORT  PAMPA",
        "precio": 64100
    },
    "812122015": {
        "nombre": "PANTALON DELTA RELAJADO",
        "precio": 80600
    },
    "812122017": {
        "nombre": "PANTALON CHECA CAPRI",
        "precio": 59300
    },
    "812104000": {
        "nombre": "PANTALON CATALINA RELAJADO",
        "precio": 86000
    },
    "812506000": {
        "nombre": "PANTALON CANDELARIA ANGOSTO",
        "precio": 75000
    },
    "812506001": {
        "nombre": "PANTALON ALBARIZA ANGOSTO",
        "precio": 70000
    },
    "812506009": {
        "nombre": "PANTALON SANTA ROSA ANGOSTO",
        "precio": 64000
    },
    "812506013": {
        "nombre": "PANTALON JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "812506016": {
        "nombre": "PANTALON MEDRANO ANGOSTO",
        "precio": 58100
    },
    "812506019": {
        "nombre": "PANTALON CHECA GABARDINA",
        "precio": 62900
    },
    "812506020": {
        "nombre": "BERMUDA CAYETANA",
        "precio": 66000
    },
    "812506023": {
        "nombre": "PANTALON EMILIA AMPLIO",
        "precio": 69400
    },
    "812506024": {
        "nombre": "PANTALON EMILIA AMPLIO",
        "precio": 75600
    },
    "812182507": {
        "nombre": "PANTALON BARRACAS RECTO",
        "precio": 54000
    },
    "812500050": {
        "nombre": "PANTALON EMILIA AMPLIO",
        "precio": 56100
    },
    "812506026": {
        "nombre": "PANTALON MAGDALENA CARGO",
        "precio": 66800
    },
    "812506028": {
        "nombre": "PANTALON VALLECITO MUY ANGOSTO",
        "precio": 67200
    },
    "812500053": {
        "nombre": "PANTALON ANTONIA AMPLIO",
        "precio": 86900
    },
    "812500054": {
        "nombre": "BOMBACHA MORA DENIM",
        "precio": 70000
    },
    "812500055": {
        "nombre": "PANTALON CUMBRE CORDEROY",
        "precio": 91000
    },
    "812500056": {
        "nombre": "PANTALON LLANURA DENIM",
        "precio": 74000
    },
    "812500057": {
        "nombre": "PANTALON SENDERO DENIM",
        "precio": 81000
    },
    "812124001": {
        "nombre": "PANTALON NINA RECTO DESFLECADO",
        "precio": 59000
    },
    "812124003": {
        "nombre": "PANTALON DONA CARGO",
        "precio": 97000
    },
    "424106000": {
        "nombre": "ZUECO DEL MAR",
        "precio": 32000
    },
    "424116004": {
        "nombre": "ZAPATILLA COLON ADULTO HOMBRE",
        "precio": 30000
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
    "823116000": {
        "nombre": "ALPARGATA RECOLETA",
        "precio": 27800
    },
    "823116001": {
        "nombre": "ZAPATILLA FLORES",
        "precio": 26000
    },
    "924106012": {
        "nombre": "GUILLERMINA LARA",
        "precio": 36000
    },
    "922140001": {
        "nombre": "FERCHU-ZAPATILLA FANTASIA NIÑO CORDON",
        "precio": 30000
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
    "111109007": {
        "nombre": "MAMELUCO BASICO TERMICO TRK.",
        "precio": 114000
    },
    "111118000": {
        "nombre": "BUZO BASICO H.FRIZA O",
        "precio": 44000
    },
    "111118001": {
        "nombre": "BUZO BÁSICO MEDIO CIERRE FRISA",
        "precio": 44500
    },
    "111118002": {
        "nombre": "CAMPERA DARACT FRISA Y CIRE",
        "precio": 64500
    },
    "113101004": {
        "nombre": "CAMPERA ANORAK TERMICA GABARDINA",
        "precio": 103500
    },
    "113106003": {
        "nombre": "CHALECO CIRE FORRER TAFE",
        "precio": 53000
    },
    "113106005": {
        "nombre": "CAMPERA CIRE MADRYN",
        "precio": 68500
    },
    "111157010": {
        "nombre": "ROMPEVIENTO CIRE EMBALSE",
        "precio": 30500
    },
    "111170000": {
        "nombre": "ROMPEVIENTO ESQUEL C/BOLSA SILVER",
        "precio": 31500
    },
    "U12105001": {
        "nombre": "PANTALON TERMICO PRIMERA PIEL MICROFIBRA",
        "precio": 40500
    },
    "U11105001": {
        "nombre": "REMERA TÉRMICA MICROFIBRA",
        "precio": 40500
    },
    "113109001": {
        "nombre": "CAMPERA BASICA TRK. RQL",
        "precio": 64700
    },
    "113214110": {
        "nombre": "CAMPERA PEHUEN CON CANELON",
        "precio": 81300
    },
    "311105999": {
        "nombre": "REMERA TIMBO TÉRMICA AVANZADA ML H.",
        "precio": 25300
    },
    "312118001": {
        "nombre": "PANTALON RECLUS SOFTSHELL",
        "precio": 110400
    },
    "313106000": {
        "nombre": "PANTALON CARGO ANDINO SECADO RAPIDO",
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
    "311411141": {
        "nombre": "BUZO SAN ROQUE H.MICROPOLAR 1/2 CIERRE",
        "precio": 53200
    },
    "312106002": {
        "nombre": "PANTALÓN AMBAI TÉRMICO AVANZADO H.",
        "precio": 25300
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
    "313212106": {
        "nombre": "ROMPEVIENTOS EL BOLSON H.",
        "precio": 70900
    },
    "343108000": {
        "nombre": "GUANTES WINDSHELL",
        "precio": 18000
    },
    "113107005": {
        "nombre": "CAMPERA CANELON FUJI",
        "precio": 117300
    },
    "113211200": {
        "nombre": "CHALECO SALIN SOFTSHELL",
        "precio": 87400
    },
    "113211145": {
        "nombre": "CAMPERA ACONCAGUA SOFTSHELL H.",
        "precio": 227700
    },
    "111173000": {
        "nombre": "REMERA TECNICA DE BAMBÚ",
        "precio": 58200
    },
    "113106101": {
        "nombre": "CAMPERA MINERA C/ REFLECTIVO",
        "precio": 184000
    },
    "111108006": {
        "nombre": "BUZO CACHI POLAR H.",
        "precio": 63900
    },
    "312106022": {
        "nombre": "PANTALON INACAUSI RIPSTOP",
        "precio": 89700
    },
    "713106200": {
        "nombre": "CAMPERA NOGAL M",
        "precio": 167900
    },
    "713211145": {
        "nombre": "campera softshell aconcagua mujer",
        "precio": 227700
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
        "precio": 40500
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
    "U06173087": {
        "nombre": "COOLER CLIFTON",
        "precio": 38000
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
        "precio": 15000
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
    "U6173018": {
        "nombre": "JARRO TERMICO MAIPO",
        "precio": 22000
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
    "921106000": {
        "nombre": "BOTA BASALÚ",
        "precio": 26600
    },
    "943122001": {
        "nombre": "INFANTIL CAÑA 3/4 PAX3",
        "precio": 4400
    },
    "943122002": {
        "nombre": "INFANTIL CAÑA INVISIBLE PAX3",
        "precio": 2500
    },
    "U43165000": {
        "nombre": "MEDIA TUBO INDUSTRIA ALGODON",
        "precio": 3900
    },
    "143106000": {
        "nombre": "MEDIA INVISIBLE MELANGE",
        "precio": 4700
    },
    "143122002": {
        "nombre": "MEDIA  ALGODON PAMPERO",
        "precio": 5300
    },
    "143122003": {
        "nombre": "MEDIA ALGODON  CAMUFLADA PAMPERO PAX3",
        "precio": 6400
    },
    "143122006": {
        "nombre": "CAÑA  3/4 COSTURA INVISBLE SIMPLE TOALLA. ALGODÓN C LYCRA PAX3",
        "precio": 5500
    },
    "143122007": {
        "nombre": "CAÑA INVISIBLE LISA SIMPLE TOALLA. ALGODÓN C LYCRA PAX3",
        "precio": 4700
    },
    "143122009": {
        "nombre": "BALERINA MUJER",
        "precio": 4700
    },
    "143122108": {
        "nombre": "MEDIA TOALLA ALGODON CALA BAJA",
        "precio": 4900
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
        "nombre": "MEDIA TERMICA ALTA MICROFIBRA",
        "precio": 8400
    },
    "143128003": {
        "nombre": "MEDIA MICROFIBRA BAJA PAX3",
        "precio": 4900
    },
    "143128004": {
        "nombre": "MEDIA MICROFIBRA PAMPERO PAX3",
        "precio": 6100
    },
    "143128005": {
        "nombre": "MEDIA MICROFIBRA 3/4 TECNICA",
        "precio": 6100
    },
    "143128006": {
        "nombre": "MEDIA 3-4 HILA DE PLATA",
        "precio": 10400
    },
    "143128007": {
        "nombre": "MEDIA BAJA HILO DE PLATA",
        "precio": 14300
    },
    "143128010": {
        "nombre": "MEDIA CAÑA INVISIBLE MICROFIBRA PAX3",
        "precio": 4700
    },
    "143128011": {
        "nombre": "MEDIA CAÑA INVISIBLE MICROFIBRA HILO DE PLATA",
        "precio": 7400
    },
    "143128100": {
        "nombre": "MEDIA TERMICA TECNICA",
        "precio": 9700
    },
    "143128102": {
        "nombre": "MEDIA TECNICA MICROFIBRA CON TOALLA PAX3",
        "precio": 6600
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
        "nombre": "MEDIA ANDINA",
        "precio": 5500
    },
    "143513003": {
        "nombre": "MEDIA CHALTEN",
        "precio": 4800
    },
    "143513004": {
        "nombre": "MEDIA CALAFATE",
        "precio": 5500
    },
    "143513005": {
        "nombre": "MEDIA PUERTO MADRYN",
        "precio": 4800
    },
    "143513006": {
        "nombre": "MEDIA PENÍNSULA VALDÉS",
        "precio": 5500
    },
    "151128001": {
        "nombre": "CAMISETA MICROFIBRA",
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
    "812124005": {
        "nombre": "PANTALON MAGDALENA CARGO",
        "precio": 81000
    },
    "812506035": {
        "nombre": "PANTALON SAUCE DENIM",
        "precio": 87000
    },
    "812506036": {
        "nombre": "PANTALON CUMBRE DENIM",
        "precio": 90000
    },
    "812506037": {
        "nombre": "PANTALON ANDINA DENIM",
        "precio": 90000
    },
    "812506038": {
        "nombre": "PANTALON TRIGAL",
        "precio": 82000
    },
    "812506030": {
        "nombre": "PANTALON ANTONIA AMPLIO",
        "precio": 80600
    },
    "812525001": {
        "nombre": "PANTALON VALLECITO MUY ANGOSTO",
        "precio": 64000
    },
    "812525002": {
        "nombre": "PANTALON MEDRANO ANGOSTO",
        "precio": 62000
    },
    "812506039": {
        "nombre": "PANTALON SENDERO CORDEROY",
        "precio": 93000
    },
    "812529008": {
        "nombre": "PANTALON ALBARIZA ANGOSTO",
        "precio": 64000
    },
    "812529009": {
        "nombre": "PANTALON ALBARIZA ANGOSTO",
        "precio": 62000
    },
    "812529018": {
        "nombre": "PANTALON FELICITAS ANGOSTO",
        "precio": 68000
    },
    "812513000": {
        "nombre": "PANTALON TREVELIN ANGOSTO",
        "precio": 64200
    },
    "812545000": {
        "nombre": "PANTALON JAZMIN SEMIOXFORD",
        "precio": 81000
    },
    "U11122002": {
        "nombre": "CAMPERA CLASICA",
        "precio": 126000
    },
    "912500007": {
        "nombre": "JARDINERO TILO DENIM",
        "precio": 98000
    },
    "912500009": {
        "nombre": "PANTALON NARANJO RAYADO",
        "precio": 55000
    },
    "912506015": {
        "nombre": "Pantalon Limonero",
        "precio": 45800
    },
    "912506017": {
        "nombre": "PANTALON BRUNO CHINO",
        "precio": 54000
    },
    "912500003": {
        "nombre": "Pantalon Manzanares Angosto",
        "precio": 47000
    },
    "912122014": {
        "nombre": "BOMBACHA ZELAYA DENIM",
        "precio": 41500
    },
    "912122015": {
        "nombre": "PANTALON NARANJO",
        "precio": 55000
    },
    "912122016": {
        "nombre": "PANTALON LIMA CARGO",
        "precio": 78000
    },
    "911122196": {
        "nombre": "VESTIDO ISABELA",
        "precio": 52900
    },
    "912101012": {
        "nombre": "BOMBACHA ZELAYA",
        "precio": 40500
    },
    "U21131000": {
        "nombre": "BOTIN NAHUEN ART.949",
        "precio": 95000
    },
    "U21131001": {
        "nombre": "BORCEGUÍ 959",
        "precio": 95000
    },
    "U21131002": {
        "nombre": "BORCEGUÍ TÁCTICO 959T",
        "precio": 97000
    },
    "123131002": {
        "nombre": "BOTA PETROLERA C/P",
        "precio": 146000
    },
    "121136010": {
        "nombre": "BOTIN FRANCES C/P",
        "precio": 145000
    },
    "813106065": {
        "nombre": "CAMPERA VALLE",
        "precio": 155000
    },
    "121131001": {
        "nombre": "BOTIN 1709 PREMIUM PU BI DENSIDAD C. FLOR C/P",
        "precio": 89000
    },
    "411122191": {
        "nombre": "CAMPERA ACONQUIJA",
        "precio": 83400
    },
    "411122211": {
        "nombre": "SWEATER ACONCAGUA LISO",
        "precio": 90000
    },
    "411122148": {
        "nombre": "BOSA PINAR",
        "precio": 65200
    },
    "411122226": {
        "nombre": "SWEATER BUENOS AIRES",
        "precio": 81300
    },
    "411135000": {
        "nombre": "SWEATER ACONCAGUA",
        "precio": 107900
    },
    "411135006": {
        "nombre": "CUELLO SMOKING ESPARZA",
        "precio": 67800
    },
    "411135017": {
        "nombre": "SWEATER CHACO",
        "precio": 72900
    },
    "411539001": {
        "nombre": "SWEATER ACONQUIJA H. 1/2CIERRE ALG/LANA",
        "precio": 77000
    },
    "411540001": {
        "nombre": "SWEATER MERCEDARIO H. V ALG./LANA",
        "precio": 58800
    },
    "411540005": {
        "nombre": "SWEATER RIO GRANDE",
        "precio": 95600
    },
    "411514107": {
        "nombre": "CHALECO CONDARCO",
        "precio": 64500
    },
    "412122202": {
        "nombre": "SWETER NEUQUEN ESCOTE EN V",
        "precio": 59700
    },
    "413106000": {
        "nombre": "CAMPERA TRELEW H.MATELASEE",
        "precio": 119700
    },
    "413106003": {
        "nombre": "CHALECO TRELEW H.MATELASEE",
        "precio": 98100
    },
    "413106014": {
        "nombre": "CHALECO ALTA MONTAÑA (POLO)",
        "precio": 119700
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
        "precio": 86200
    },
    "811106261": {
        "nombre": "SACO ANTONIA",
        "precio": 64400
    },
    "811106262": {
        "nombre": "POLERA ANTONIA",
        "precio": 54200
    },
    "599541000": {
        "nombre": "PANTALON CAPITAL INDUSTRIA",
        "precio": 51000
    },
    "31250601M": {
        "nombre": "PANTALON CARGO ELASTIZADO JOSE",
        "precio": 68100
    },
    "211105507": {
        "nombre": "CHALECO CANVAS",
        "precio": 70000
    },
    "21224001M": {
        "nombre": "BOMBACHA ALFORZADA HOMBRE",
        "precio": 44500
    },
    "811152005": {
        "nombre": "SWEATER IRUYA RAYADO",
        "precio": 68400
    },
    "811122030": {
        "nombre": "SACO SIERRA MUJER",
        "precio": 68900
    },
    "811122121": {
        "nombre": "SACO ESPERANZA CALADO",
        "precio": 46600
    },
    "136517008": {
        "nombre": "PROTECTOR LUMBAR PAMPERO",
        "precio": 21000
    },
    "112109002": {
        "nombre": "PANTALON BASICO TERMICO TRK.",
        "precio": 58500
    },
    "111101001": {
        "nombre": "MAMELUCO GABARDINA TERMICO",
        "precio": 184500
    },
    "113106102": {
        "nombre": "CAMPERÓN MINERO ANDES-",
        "precio": 14400
    },
    "113106103": {
        "nombre": "CAMPERON MINERO SOFSHELL",
        "precio": 95500
    },
    "111128001": {
        "nombre": "ROMPEVIENTO BAGUAL RIPSTOP",
        "precio": 60000
    },
    "113109009": {
        "nombre": "CAMPERA ANORAK TERMICA TRK.",
        "precio": 69500
    },
    "113109016": {
        "nombre": "CAMPERON TRUCKER CON POLAR MATELASEADO",
        "precio": 69500
    },
    "113211150": {
        "nombre": "CAMPERA SOFTSHELL 2020",
        "precio": 83500
    },
    "113211160": {
        "nombre": "CHALECO SOFTSHELL",
        "precio": 76000
    },
    "111108000": {
        "nombre": "CHALECO BASICO H.POLAR C/BOLS.",
        "precio": 31500
    },
    "111108001": {
        "nombre": "CAMPERA BASICA H.POLAR C/BOLS.",
        "precio": 39500
    },
    "111108002": {
        "nombre": "BUZO BÁSICO MEDIO CIERRE POLAR",
        "precio": 36500
    },
    "111109005": {
        "nombre": "CHALECO BASICO TERMICO TRK.",
        "precio": 46000
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
    "111118100": {
        "nombre": "BUZO FRIZA MEDIO CIERRE GOYA",
        "precio": 24600
    },
    "111118101": {
        "nombre": "BUZO FRIZA CUELLO REDONDO TAFI",
        "precio": 32800
    },
    "111138006": {
        "nombre": "CHOMBA TILCARA  PIQUE M/C",
        "precio": 36700
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
    "682144000": {
        "nombre": "BOLSO CHAMPS",
        "precio": 58900
    },
    "682144001": {
        "nombre": "MOCHILA THELMA",
        "precio": 40600
    },
    "445173011": {
        "nombre": "SILLA PLEGABLE",
        "precio": 150500
    },
    "445173013": {
        "nombre": "COOLER FIESTA OUTDOOR (EX GLACIAR)",
        "precio": 161000
    },
    "480173000": {
        "nombre": "BILLETRA GAIA",
        "precio": 15800
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
        "nombre": "CAMPERA VIEDMA POLAR H",
        "precio": 67000
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
    "136121501": {
        "nombre": "TRAJE DE LLUVIA (CON PANTALON)IMPORTADO",
        "precio": 39600
    },
    "111121002": {
        "nombre": "CAPA DE LLUVIA STORM",
        "precio": 33600
    },
    "111121011": {
        "nombre": "TRAJE LLUVIA PREMIUM MOTOSTYLE",
        "precio": 128300
    },
    "111122050": {
        "nombre": "REMERA BASICA ESCOTE REDONDO CORPORATIVA",
        "precio": 22500
    },
    "111122051": {
        "nombre": "POLO PIQUÉ CORPORATIVA M/C",
        "precio": 32500
    },
    "411108008": {
        "nombre": "BUZO PAMPERO POLAR",
        "precio": 46600
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
    "411122212": {
        "nombre": "CAMPERA FRESNO",
        "precio": 89000
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
    "411122031": {
        "nombre": "REMERA BASICA ESC REDONDO ML",
        "precio": 31200
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
        "precio": 51000
    },
    "411108014": {
        "nombre": "CAMPERA CIPRES",
        "precio": 77000
    },
    "411108015": {
        "nombre": "CAMPERA CAIBO",
        "precio": 79990
    },
    "411106116": {
        "nombre": "BUZO CALAFATE",
        "precio": 143000
    },
    "411106103": {
        "nombre": "CHALECO LAGO MELIQUINA",
        "precio": 75000
    },
    "411118005": {
        "nombre": "BUZO OCAMPO",
        "precio": 63000
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
    "411138008": {
        "nombre": "REMERA POLO BASICA",
        "precio": 49000
    },
    "411138009": {
        "nombre": "POLO BASICA PIQUÉ MANGA LARGA",
        "precio": 54000
    },
    "411138015": {
        "nombre": "POLO MC LAGO CARDIEL",
        "precio": 38200
    },
    "411138013": {
        "nombre": "POLO PALMAR GRANDE",
        "precio": 37500
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
        "precio": 51000
    },
    "411138023": {
        "nombre": "POLO PEHUEN",
        "precio": 49000
    },
    "411138024": {
        "nombre": "POLO ÑIRE",
        "precio": 49990
    },
    "411139002": {
        "nombre": "CAMPERA  CURUPAYTIV",
        "precio": 78000
    },
    "411139003": {
        "nombre": "BUZO FAMAILLA",
        "precio": 55200
    },
    "411139004": {
        "nombre": "POLO PAYOGASTA",
        "precio": 71300
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
        "precio": 29900
    },
    "411122222": {
        "nombre": "REMERA NOGAL",
        "precio": 29900
    },
    "411122223": {
        "nombre": "REMERA SAUCE",
        "precio": 28800
    },
    "411122224": {
        "nombre": "REMERA QUEBRACHO",
        "precio": 31600
    },
    "411122225": {
        "nombre": "REMERA ALGARROBO",
        "precio": 39990
    },
    "411140004": {
        "nombre": "REMERA BASICA ESCOTE REDONDO",
        "precio": 28000
    },
    "411140100": {
        "nombre": "REMERA BASICA ESCOTE EN V",
        "precio": 28800
    },
    "411140180": {
        "nombre": "REMERA CATAMARCA",
        "precio": 31200
    },
    "411140182": {
        "nombre": "REMRA JUJUY",
        "precio": 31200
    },
    "411140181": {
        "nombre": "REMERA SAN JUAN",
        "precio": 29300
    },
    "411140183": {
        "nombre": "REMERA FORMOSA",
        "precio": 30800
    },
    "411140184": {
        "nombre": "REMERA CHACO",
        "precio": 29900
    },
    "121131009": {
        "nombre": "ZAPATILLA CUERO FLOR COMBINADA RIPSTOP 1269 C/P",
        "precio": 124000
    },
    "121136007": {
        "nombre": "ZAPATO ECO PU 649 MONO-DENSIDAD C.BOX C/ PUNTERA",
        "precio": 72000
    },
    "121136008": {
        "nombre": "BOTIN ECO  PU 249 MONO-DENSIDAD C.BOX C/ PUNTERA",
        "precio": 74000
    },
    "121136009": {
        "nombre": "BOTIN LAUQUEN C/P ART.349",
        "precio": 67000
    },
    "121146003": {
        "nombre": "BOTIN FUNDIDOR 2519 BAQUEANO S/P",
        "precio": 97000
    },
    "121146006": {
        "nombre": "ZAPATO FUNDIDOR 1519 S/P FLOR",
        "precio": 93000
    },
    "121146007": {
        "nombre": "BOTIN ALENKE S/P ART. 2789",
        "precio": 130000
    },
    "121131003": {
        "nombre": "ZAPATO 1609 PREMIUM PU BI DENSIDAD C FLOR C/P",
        "precio": 86000
    },
    "121131007": {
        "nombre": "ZAPATILLA WERKEN C/P ART.8809",
        "precio": 128000
    },
    "121131008": {
        "nombre": "ZAPATILLA WERKEN S/P ART.8819",
        "precio": 127000
    },
    "121146011": {
        "nombre": "BORCEGUI LEÑADOR PU C/P (Deneb 5909)",
        "precio": 153000
    },
    "121154001": {
        "nombre": "ZAPATO MACHI GAMUZA CON SUELA DE CAUCHO ANTIPERFORANTE",
        "precio": 89000
    },
    "321173000": {
        "nombre": "ZAPATILLA YENU TREK ART.3010",
        "precio": 79000
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
    "423116000": {
        "nombre": "ZAPATILLA MONSERAT",
        "precio": 25900
    },
    "924140008": {
        "nombre": "ZAPATILLA ANDI",
        "precio": 25900
    },
    "924331122": {
        "nombre": "BOTA DE LLUVIA  JULI BASE NUEVA",
        "precio": 20700
    },
    "924610116": {
        "nombre": "ZAPATILLA FRAN BASICA",
        "precio": 29000
    },
    "924610119": {
        "nombre": "ZAPATILLA COLEGIAL ALE",
        "precio": 30700
    },
    "924620116": {
        "nombre": "ZAPATILLA AGUS C/ABROJO",
        "precio": 31000
    },
    "924620119": {
        "nombre": "ZAPATILLA FER COLEGIAL C/ABROJO",
        "precio": 32900
    },
    "136121010": {
        "nombre": "CHALECO REFLECTIVO MUNICIPAL C/CIERRE",
        "precio": 13500
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
    "411140190": {
        "nombre": "REMERA SANTA CRUZ",
        "precio": 32400
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
        "precio": 45500
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
    "411141000": {
        "nombre": "BUZO 1/2 CIERRE POLAR EL BOQUERON",
        "precio": 59000
    },
    "411141001": {
        "nombre": "CAMPERA POLAR EL COYUNCO",
        "precio": 64000
    },
    "411168100": {
        "nombre": "REMERA SAN NICOLAS MANGA RANGLAN",
        "precio": 31700
    },
    "452167000": {
        "nombre": "BOXER",
        "precio": 23000
    },
    "412118004": {
        "nombre": "PANTALON DURAND",
        "precio": 49700
    },
    "412118008": {
        "nombre": "PANTALON DURAND SIN PUÑO",
        "precio": 49700
    },
    "511122005": {
        "nombre": "REMERA MANGA CORTA CORPORATIVA",
        "precio": 19000
    },
    "511122006": {
        "nombre": "CHOMBA MANGA CORTA CORPORATIVA",
        "precio": 25800
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
    "811106215": {
        "nombre": "POLO RIO TUPUNGATO",
        "precio": 46000
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
        "precio": 58000
    },
    "811106278": {
        "nombre": "POLERON AROMO",
        "precio": 68000
    },
    "811106279": {
        "nombre": "POLERON RETAMA",
        "precio": 98000
    },
    "811122046": {
        "nombre": "REMERA BASICA ESC RED. M.L.",
        "precio": 28500
    },
    "811122047": {
        "nombre": "REMERA BASICA ESCOTE REDONDO",
        "precio": 27500
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
    "811140054": {
        "nombre": "REMERA LEONCITO",
        "precio": 31700
    },
    "811140055": {
        "nombre": "REMERA AZUCENA",
        "precio": 33000
    },
    "811141000": {
        "nombre": "BUZO MICROPOLAR ESC V LA RINCONADA",
        "precio": 38000
    },
    "811141001": {
        "nombre": "CAMPERA POLAR LA PAZ",
        "precio": 65000
    },
    "811141002": {
        "nombre": "BUZO MUITU",
        "precio": 51000
    },
    "811507000": {
        "nombre": "BUZA PEPERINA",
        "precio": 85000
    },
    "811501020": {
        "nombre": "REMERA RIO TEUCO",
        "precio": 42700
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
        "nombre": "REMERA POLO NATIVA PIQUE",
        "precio": 43000
    },
    "811525014": {
        "nombre": "REMRA POLO NATIVA JERSEY",
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
    "811139102": {
        "nombre": "BUZO JUVENILES",
        "precio": 50200
    },
    "811514104": {
        "nombre": "CAMPERA VILLAVICENCIO",
        "precio": 75600
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
    "811168017": {
        "nombre": "REMERA SALINAS GRANDES",
        "precio": 30000
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
    "842106016": {
        "nombre": "CUELLO POLAR PAMPERO",
        "precio": 13500
    },
    "813106077": {
        "nombre": "CAMPERA JACARANDÁ",
        "precio": 123000
    },
    "813106078": {
        "nombre": "CHALECO JAZMIN",
        "precio": 98000
    },
    "812514000": {
        "nombre": "PANTALON  POTRERILLOS",
        "precio": 56200
    },
    "812522210": {
        "nombre": "PANTALON LAGO ARGENTINO",
        "precio": 48900
    },
    "812537001": {
        "nombre": "PANTALÓN CEIBO",
        "precio": 66000
    },
    "812139012": {
        "nombre": "PANTALON NEUQUEN",
        "precio": 79200
    },
    "812139013": {
        "nombre": "PANTALON MENDOZA",
        "precio": 67200
    },
    "813106079": {
        "nombre": "CAMPERA GLICINA",
        "precio": 135000
    },
    "812139014": {
        "nombre": "SHORT PAMPEANO",
        "precio": 58000
    },
    "812139015": {
        "nombre": "PANTALÓN VIRA VIRA",
        "precio": 75000
    },
    "812505000": {
        "nombre": "PANTALÓN MOLLE",
        "precio": 69000
    },
    "811537002": {
        "nombre": "BUZO AGUAPE",
        "precio": 54000
    },
    "811533008": {
        "nombre": "REMERA CERRO OTTO",
        "precio": 28990
    },
    "811517000": {
        "nombre": "BUZO RIO SENGUER",
        "precio": 54400
    },
    "811536001": {
        "nombre": "BUZO CERRO LOPEZ",
        "precio": 84700
    },
    "811536002": {
        "nombre": "PONCHO CERRO VENTANA",
        "precio": 53700
    },
    "812122209": {
        "nombre": "PANTALON LAGO FAGNANO",
        "precio": 46200
    },
    "812106086": {
        "nombre": "PANTALON JAZMIN AZUL",
        "precio": 63000
    },
    "811514500": {
        "nombre": "CAMISA ANA MARIA FANTASIA",
        "precio": 49200
    },
    "812506040": {
        "nombre": "PANTALON CARGO DEL NORTE DENIM MUJER",
        "precio": 113000
    },
    "811503000": {
        "nombre": "CAMISA SANTA ROSA",
        "precio": 42200
    },
    "412514000": {
        "nombre": "PANTALON JARAMILLO",
        "precio": 62000
    },
    "412139004": {
        "nombre": "SHORT CASTILLO",
        "precio": 41800
    },
    "412139005": {
        "nombre": "PANTALON NERVO RECTO",
        "precio": 45200
    },
    "411514004": {
        "nombre": "CAMPERA TRAPICHE",
        "precio": 79990
    },
    "412122206": {
        "nombre": "PANTALÓN CALDEN RECTO",
        "precio": 69990
    },
    "412122207": {
        "nombre": "PANTALÓN CALDEN CON PUÑO",
        "precio": 69990
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
        "precio": 78000
    },
    "812118001": {
        "nombre": "PANTALON SALTA",
        "precio": 61000
    },
    "U12122000": {
        "nombre": "PANTALÓN CARGO PAMPEANO RECTO",
        "precio": 88000
    },
    "U12122001": {
        "nombre": "PANTALÓN CARGO PAMPEANO CON PUÑO",
        "precio": 86000
    },
    "811122058": {
        "nombre": "REMERON VILLA TRAFUL",
        "precio": 43600
    },
    "811122134": {
        "nombre": "REMERA RIO GRANDE",
        "precio": 26000
    },
    "811122135": {
        "nombre": "REMERA RIO PILCOMAYO",
        "precio": 32900
    },
    "811122213": {
        "nombre": "MUSCULOSA LANIN",
        "precio": 25500
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
    "811122288": {
        "nombre": "BUZO PASPALUM",
        "precio": 55000
    },
    "811118003": {
        "nombre": "CAMPERA ORAN",
        "precio": 79000
    },
    "811122092": {
        "nombre": "REMERA PETUNIA",
        "precio": 30300
    },
    "811122093": {
        "nombre": "REMERA ROSA DE RIO",
        "precio": 31200
    },
    "811122094": {
        "nombre": "MUSCULOSA GALVEZ AMPLIA ESCOTE V",
        "precio": 32900
    },
    "811122237": {
        "nombre": "REMERA LA ANGOSTURA",
        "precio": 35000
    },
    "811122238": {
        "nombre": "REMERA LOS ANTIGUOS",
        "precio": 35000
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
        "precio": 70800
    },
    "811122247": {
        "nombre": "CHALECO LAGO VERDE",
        "precio": 35800
    },
    "811166037": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE V",
        "precio": 33000
    },
    "811166030": {
        "nombre": "REMERA BASICA ML VISCOSA ESCOTE REDONDO",
        "precio": 32000
    },
    "811166053": {
        "nombre": "MUSCULOSA ACUARIO CON VOLADOS",
        "precio": 38900
    },
    "811166059": {
        "nombre": "MUSCULOSA PEÑAFLOR",
        "precio": 34600
    },
    "811147021": {
        "nombre": "MUSCULOSA BARRANQUERAS",
        "precio": 36900
    },
    "423116001": {
        "nombre": "ALPARGATA RETIRO",
        "precio": 27800
    },
    "423116002": {
        "nombre": "ZAPATILLA SAAVEDRA",
        "precio": 42500
    },
    "811122048": {
        "nombre": "REMERA BASICA ESC. V M.L.",
        "precio": 29500
    },
    "811122049": {
        "nombre": "REMERA BASICA ESCOTE EN V",
        "precio": 28500
    },
    "411514109": {
        "nombre": "CAMISA FRENCH FANTASIA",
        "precio": 50400
    },
    "412101003": {
        "nombre": "PANTALON CARGO DEL NORTE CAMUFLADO",
        "precio": 112000
    },
    "412506019": {
        "nombre": "PANTALON CARGO DEL NORTE",
        "precio": 115000
    },
    "612122000": {
        "nombre": "BOMBACHA CAMPIÑA ANGOSTA",
        "precio": 82500
    },
    "611101101": {
        "nombre": "CAMISA DIAGUITA M. ROLL UP GAB.",
        "precio": 64200
    },
    "611124001": {
        "nombre": "CAMISA ESTANCIERA",
        "precio": 60400
    },
    "412101002": {
        "nombre": "PANTALON CARGO DEL NORTE",
        "precio": 103800
    },
    "612506000": {
        "nombre": "PANTALON GARZA MUY ANGOSTO",
        "precio": 84700
    },
    "612506002": {
        "nombre": "PANTALON CARGO JESUS MARIA",
        "precio": 52900
    },
    "612506003": {
        "nombre": "PANTALON CARGO DEL NORTE MUJER",
        "precio": 101000
    },
    "612506004": {
        "nombre": "PANTALON CARGO DEL NORTE CAMUFLADO",
        "precio": 108000
    },
    "624101000": {
        "nombre": "SANDALIA ARROYITO",
        "precio": 49700
    },
    "624101001": {
        "nombre": "ZUECO SAN JUAN",
        "precio": 45500
    },
    "411122149": {
        "nombre": "CAMISA OCAMPO",
        "precio": 62100
    },
    "22112200C": {
        "nombre": "ALPARGATA JEAN SIMIL YUTE",
        "precio": 21400
    },
    "221171000": {
        "nombre": "ALPARGATA FORRADA ARPILERA SUELA YUTE",
        "precio": 25500
    },
    "22121304B": {
        "nombre": "ALPARGATA GOMA EVA REFORZADA ADULTO",
        "precio": 15900
    },
    "424134011": {
        "nombre": "PANCHA PIRAY",
        "precio": 98900
    },
    "811122284": {
        "nombre": "CAMISA ANA MARIA",
        "precio": 58900
    },
    "921214043": {
        "nombre": "ALPARGATA BASICA INFANTIL (CITEX)",
        "precio": 14200
    },
    "U2411604C": {
        "nombre": "ALPARGATA YUTE",
        "precio": 31000
    },
    "224122000": {
        "nombre": "PANCHA RANCHO",
        "precio": 51400
    },
    "311101101": {
        "nombre": "CAMISA DIAGUITA",
        "precio": 68900
    },
    "211124004": {
        "nombre": "CAMISA ESTANCIERA",
        "precio": 62700
    },
    "212122001": {
        "nombre": "BOMBACHA PRADO ANGOSTA",
        "precio": 87400
    },
    "312122000": {
        "nombre": "PANTALON CARGO BAGUALES",
        "precio": 68500
    },
    "312122001": {
        "nombre": "BERMUDA CARGO CONDORES",
        "precio": 57300
    },
    "411103006": {
        "nombre": "CAMISA BARRACA",
        "precio": 43400
    },
    "312506000": {
        "nombre": "PANTALON CARGO BAGUALES H ELASTIZADO",
        "precio": 80500
    },
    "823121001": {
        "nombre": "BOTA LLUVIA MUJER PVC COLLECTION",
        "precio": 30000
    },
    "811505001": {
        "nombre": "CAMISA BASICA MAIZANI M. POPLIN LISO M/L",
        "precio": 44000
    },
    "811525000": {
        "nombre": "CAMISA MAIZANI M. POPLIN ELAST. M/L",
        "precio": 63300
    },
    "811525002": {
        "nombre": "CAMISA MAIZANI M. POPLIN ELAST. FANTASIA M/L",
        "precio": 60000
    },
    "811526000": {
        "nombre": "CAMISA BASICA MAIZANI M.OXFORD M/L",
        "precio": 44000
    },
    "811527003": {
        "nombre": "CAMISA BASICA MAIZANI M. FANTASIA M/L",
        "precio": 41800
    },
    "811527004": {
        "nombre": "CAMISA BASICA MAIZANI M. OXF RAY. M/L",
        "precio": 44000
    },
    "811525007": {
        "nombre": "CAMISA CORDOBA ELASTANO",
        "precio": 57900
    },
    "811148004": {
        "nombre": "CAMISA FORMOSA M. VOILE M/L",
        "precio": 59300
    },
    "811148020": {
        "nombre": "CAMISA CLARA VOILE",
        "precio": 53900
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
        "precio": 61600
    },
    "811122251": {
        "nombre": "BLUSA CALE VIYELA",
        "precio": 45200
    },
    "811122110": {
        "nombre": "CAMISA VILLA MERCEDES",
        "precio": 53400
    },
    "811122111": {
        "nombre": "CAMISA CAÑUELAS LINO",
        "precio": 62000
    },
    "811122112": {
        "nombre": "CAMISA JÁUREGUI",
        "precio": 63000
    },
    "811122113": {
        "nombre": "CAMISA PILAR",
        "precio": 59300
    },
    "811122115": {
        "nombre": "CAMISA RAUCH LINO",
        "precio": 65100
    },
    "811122024": {
        "nombre": "CAMISA BRODERY M/L",
        "precio": 83700
    },
    "811122041": {
        "nombre": "CAMISA MAIZANI  M. FANTASIA M/C",
        "precio": 60000
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
        "precio": 100800
    },
    "811124001": {
        "nombre": "CAMISA MAIZANI M/L POPLIN",
        "precio": 63300
    },
    "811124003": {
        "nombre": "CAMISA MAIZANI M/L CUADROS",
        "precio": 63300
    },
    "811124004": {
        "nombre": "CAMISA MAIZANI M/L FANTASIA",
        "precio": 63300
    },
    "811124027": {
        "nombre": "CAMISA MODELO COLINA SIMIL DENIM",
        "precio": 55400
    },
    "811124029": {
        "nombre": "VESTIDO ISABEL CON VOLADO",
        "precio": 74200
    },
    "811124030": {
        "nombre": "CAMISA BASICA 70-30 MC POLIN LISO",
        "precio": 44000
    },
    "811124031": {
        "nombre": "CAMISA BAISCA 70-30 MC POPLIN RAYADO",
        "precio": 44000
    },
    "811124033": {
        "nombre": "CAMISA CLARA",
        "precio": 67600
    },
    "811103006": {
        "nombre": "CAMISA BASICA 70-30 MC OXFORD LISO",
        "precio": 41900
    },
    "811103007": {
        "nombre": "CAMISA BASICA 70-30 MC OXFORD RAYADO",
        "precio": 44000
    },
    "411543001": {
        "nombre": "CAMISA HILARIO CUELLO IT. SLIM FIT",
        "precio": 83700
    },
    "411526000": {
        "nombre": "CAMISA BASICA SOLER OXFORD M/L C/BOLS.",
        "precio": 45000
    },
    "411527000": {
        "nombre": "CAMISA BASICA SOLER CUADROS M/L C/BOLS.",
        "precio": 44600
    },
    "411527003": {
        "nombre": "CAMISA BASICA SOLER LISA C/BOLS.M/L",
        "precio": 45000
    },
    "411527012": {
        "nombre": "CAMISA BASICA SOLER OXF. RAY. M/L",
        "precio": 45000
    },
    "411533000": {
        "nombre": "CAMISA BASICA SOLER POPLIN RAY M/L C/BOLS (VTA CORPO)",
        "precio": 45000
    },
    "411505004": {
        "nombre": "CAMISA BASICA SOLER RAYADA 70/30",
        "precio": 44600
    },
    "411122020": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO LISA M/L S/BOLS",
        "precio": 73500
    },
    "311152001": {
        "nombre": "CAMISA CHALTEN HOMBRE MINIRIPSTOP",
        "precio": 141700
    },
    "241101004": {
        "nombre": "SOMBRERO AUSTRALIANO ADULTO",
        "precio": 15600
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
    "411514104": {
        "nombre": "CAMPERA JOSE",
        "precio": 99990
    },
    "411514105": {
        "nombre": "SWEATER BRANDON",
        "precio": 91000
    },
    "411122205": {
        "nombre": "SWEATER CASEROS",
        "precio": 68700
    },
    "411122160": {
        "nombre": "SWEATER MORRIS",
        "precio": 57000
    },
    "411514106": {
        "nombre": "SWEATER KAY",
        "precio": 78000
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
    "811106252": {
        "nombre": "MUSCULOSA FRIDA LUREX",
        "precio": 47800
    },
    "442173002": {
        "nombre": "BUFANDA ESCOCESA",
        "precio": 18000
    },
    "442173003": {
        "nombre": "BUFANDA ESPIGA",
        "precio": 19700
    },
    "442108000": {
        "nombre": "CUELLO POLAR DOBLE",
        "precio": 12000
    },
    "441545000": {
        "nombre": "AUSTRALIANO (MODELO PILUSO)",
        "precio": 9400
    },
    "441173006": {
        "nombre": "GORRA CHAPLIN (LISA)",
        "precio": 19500
    },
    "443106000": {
        "nombre": "GUANTE SIMPLE ADULTO",
        "precio": 8500
    },
    "441101002": {
        "nombre": "GORRA GABARDINA",
        "precio": 14600
    },
    "441106003": {
        "nombre": "GORRO ROCKY ADULTO",
        "precio": 7500
    },
    "441106008": {
        "nombre": "GORRA CAZADOR SECADO RAPIDO",
        "precio": 23800
    },
    "441122001": {
        "nombre": "GORRA CAP DE LINO",
        "precio": 27600
    },
    "441160002": {
        "nombre": "GORRO CANELONES",
        "precio": 8100
    },
    "911135001": {
        "nombre": "CARDIGAN ESCOLAR",
        "precio": 44000
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
    "U41122001": {
        "nombre": "GORRA GABARDINA PAMPERO",
        "precio": 26400
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
    "U41171001": {
        "nombre": "SOMBRERO CEFERINO",
        "precio": 20700
    },
    "U01106000": {
        "nombre": "BOLSA DE LIENZO Nº1",
        "precio": 5700
    },
    "U01106001": {
        "nombre": "BOLSA DE LIENZO Nº2",
        "precio": 5900
    },
    "U01106002": {
        "nombre": "BOLSA DE LIENZO Nº3",
        "precio": 6900
    },
    "U01106003": {
        "nombre": "BOLSA DE LIENZO Nº4",
        "precio": 7200
    },
    "U01122000": {
        "nombre": "TOTE GINA",
        "precio": 42500
    },
    "U01122001": {
        "nombre": "TOTE GINA",
        "precio": 37000
    },
    "941545001": {
        "nombre": "GORRA GABARDINA INFANTIL",
        "precio": 18200
    },
    "942141000": {
        "nombre": "BUFANDA LISA",
        "precio": 18000
    },
    "U41171003": {
        "nombre": "SOMBRERO FRANCISCO",
        "precio": 20700
    },
    "943160004": {
        "nombre": "GUANTE MAGICO INFANTIL",
        "precio": 5500
    },
    "941135000": {
        "nombre": "GORRO TRENZADO INFANTIL",
        "precio": 8000
    },
    "941106000": {
        "nombre": "GORRO ROCKY INFANTIL",
        "precio": 7500
    },
    "941106002": {
        "nombre": "CAZADORA INFANTIL",
        "precio": 17800
    },
    "811122091": {
        "nombre": "KIMONO",
        "precio": 27900
    },
    "811122252": {
        "nombre": "MUSCULOSA ALICIA",
        "precio": 64600
    },
    "811122253": {
        "nombre": "MUSCULOSA GALIA",
        "precio": 57400
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
    "811514113": {
        "nombre": "SWEATER TERE",
        "precio": 69200
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
    "811173001": {
        "nombre": "RUANA VERANO",
        "precio": 40300
    },
    "811122287": {
        "nombre": "SWEATER MAGNOLIA",
        "precio": 80000
    },
    "811135021": {
        "nombre": "SWEATER SALVIA",
        "precio": 62000
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
    "811540009": {
        "nombre": "SWEATER HIGO",
        "precio": 99990
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
    "811122221": {
        "nombre": "BLUSA CALE",
        "precio": 56900
    },
    "811122222": {
        "nombre": "CAMISA SALVIA",
        "precio": 78300
    },
    "811106260": {
        "nombre": "CAMISA CAMPESTRE",
        "precio": 60500
    },
    "811122263": {
        "nombre": "CAMISA RAUCH BRODERY",
        "precio": 85600
    },
    "811122264": {
        "nombre": "BLUSA CALE BRODERY",
        "precio": 70000
    },
    "811122265": {
        "nombre": "CAMISA CAÑUELAS POPLIN",
        "precio": 65300
    },
    "811122266": {
        "nombre": "CAMISA CANDELA",
        "precio": 53900
    },
    "811122267": {
        "nombre": "CAMISA CLARA ELASTIZADA",
        "precio": 62000
    },
    "911122193": {
        "nombre": "CAMISA NIÑO VIYELA",
        "precio": 40000
    },
    "911122194": {
        "nombre": "CAMISA M/L NIÑA BRODERY",
        "precio": 40000
    },
    "911122195": {
        "nombre": "CAMISA NIÑA VIYELA",
        "precio": 40000
    },
    "U12122002": {
        "nombre": "PANTALON PIJAMA",
        "precio": 55400
    },
    "U11106008": {
        "nombre": "CAMISA VIYELA CON CORDERITO",
        "precio": 122000
    },
    "911124003": {
        "nombre": "CAMISA EMILIO CUADROS M/L",
        "precio": 40000
    },
    "911124010": {
        "nombre": "CAMISA EMILIA N. POPLIN",
        "precio": 40000
    },
    "911124011": {
        "nombre": "CAMISA COLEGIAL M/L SIN BOLSILLO",
        "precio": 34400
    },
    "911543000": {
        "nombre": "CAMISA JOSE LINO",
        "precio": 40000
    },
    "911111103": {
        "nombre": "CAMISA SARA N. OXF M/L",
        "precio": 40000
    },
    "911103000": {
        "nombre": "CAMISA MANUEL M/L C/BOLS. OXF.",
        "precio": 40000
    },
    "911104000": {
        "nombre": "CAMISA JUANA DENIM C/BOLS.",
        "precio": 40000
    },
    "911104001": {
        "nombre": "CAMISA JUAN DENIM 1BOLS.",
        "precio": 40000
    },
    "411103007": {
        "nombre": "CAMISA HOMBRE CUELLO MAO",
        "precio": 69300
    },
    "411104001": {
        "nombre": "CAMISA SOLER DENIM M/L C/BOLS.",
        "precio": 64200
    },
    "22121306C": {
        "nombre": "ALPARGATA SIMIL YUTE INYECTADA",
        "precio": 21400
    },
    "22121307C": {
        "nombre": "ALPARGATA SIMIL YUTE FANTASIA",
        "precio": 20700
    },
    "22121309C": {
        "nombre": "ALPARGATA SIMIL YUTE ESTAMPADO DIGITAL",
        "precio": 21400
    },
    "224101000": {
        "nombre": "PANCHA YACARE",
        "precio": 55100
    },
    "224101002": {
        "nombre": "PANCHA YAGUARETE",
        "precio": 59600
    },
    "811548000": {
        "nombre": "CAMISA MAIZANI M/C ALG LYCRA",
        "precio": 60000
    },
    "811533007": {
        "nombre": "CAMISA BASICA MAIZANI M. POPLIN RAY M/L (VENTA CORPO)",
        "precio": 44000
    },
    "811543001": {
        "nombre": "CAMISA JAUREGUI LINO",
        "precio": 85400
    },
    "811543002": {
        "nombre": "VESTIDO ELEONORA ESCOTE EN V LINO",
        "precio": 74200
    },
    "811500000": {
        "nombre": "CAMISA MAIZANI M/L DENIM",
        "precio": 60000
    },
    "411101004": {
        "nombre": "CAMISA SOLER GABARDINA 1 BOLSILLO LAVADA",
        "precio": 65700
    },
    "411102000": {
        "nombre": "CAMISA SOLER DE CORDEROY 1 BOLSILLO",
        "precio": 73500
    },
    "411103004": {
        "nombre": "CAMISA SOLER MC C. BOLSILLO 70-30 OXFORD",
        "precio": 45000
    },
    "411103005": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 OXFORD RAYADO",
        "precio": 45000
    },
    "411122143": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO S/B LINO",
        "precio": 83700
    },
    "411122206": {
        "nombre": "CAMISA SOLER CUELLO MAO",
        "precio": 78200
    },
    "411122207": {
        "nombre": "CAMISA MONTURA",
        "precio": 80600
    },
    "411122208": {
        "nombre": "CAMISA SOLER CUELLO INGLES M/C FANTASIA",
        "precio": 64700
    },
    "411124012": {
        "nombre": "CAMISA SAN LUIS H. POPLIN M/C C/BOLS. RAYADA",
        "precio": 73500
    },
    "411124020": {
        "nombre": "CAMISA SAN LUIS CUELLO SEMI ABIERTO",
        "precio": 73500
    },
    "411124021": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO RAYAS S/BOLSILLO",
        "precio": 73500
    },
    "411124025": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 POPLIN",
        "precio": 45000
    },
    "411124026": {
        "nombre": "CAMISA SOLER C. BOTON MC BOLSILLO 70-30 POPLIN RAYADO",
        "precio": 45000
    },
    "442122000": {
        "nombre": "BOXER",
        "precio": 24900
    },
    "811122055": {
        "nombre": "CAMISA CLARA SIN BOLSILLO POPLIN",
        "precio": 67600
    },
    "411124022": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO CUADROS S/BOLSILLO",
        "precio": 73500
    },
    "811106202": {
        "nombre": "CAMISA CLARA S/B CREPPE",
        "precio": 49000
    },
    "811106204": {
        "nombre": "CAMISA CAMPESTRE VIYELA M/L",
        "precio": 65500
    },
    "811106035": {
        "nombre": "CAMISOLA CORDOBA",
        "precio": 53900
    },
    "811106169": {
        "nombre": "VESTIDO FESTIVAL",
        "precio": 74700
    },
    "811106170": {
        "nombre": "VESTIDO ELEONORA ESCOTE EN V FIBRANA",
        "precio": 74200
    },
    "811106171": {
        "nombre": "VESTIDO HELENA CUELLO MAO FIBRANA",
        "precio": 74200
    },
    "811101004": {
        "nombre": "CAMISA CAMPESTRE GABARDINA",
        "precio": 61600
    },
    "811102000": {
        "nombre": "CAMISA MAIZANI M. CORDEROY M/L",
        "precio": 68000
    },
    "811103001": {
        "nombre": "CAMISA MAIZANI M.OXF.ALG.M/L",
        "precio": 60400
    },
    "411122015": {
        "nombre": "CAMISA SOLER H. RAYAS M/C C/BOLS",
        "precio": 64700
    },
    "411122016": {
        "nombre": "CAMISA SOLER POPLIN M/C C/CINTA HILERA",
        "precio": 64700
    },
    "411122019": {
        "nombre": "CAMISA CEFERINO CUELLO ITALIANO FANTASIA M/L S/BOLS",
        "precio": 73500
    },
    "411122227": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO COMBINADA",
        "precio": 66700
    },
    "411122228": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO SIN BOTON M/L",
        "precio": 73500
    },
    "411122229": {
        "nombre": "CAMISA SOLER CUELLO ITALIANO SIN BOTON M/L",
        "precio": 73500
    },
    "411122230": {
        "nombre": "CAMISACO LEÑADOR",
        "precio": 78000
    },
    "411124001": {
        "nombre": "CAMISA SOLER CUELLO INGLES BOTON ML C/B POPLIN CUADROS",
        "precio": 63400
    },
    "411124005": {
        "nombre": "CAMISA CASTELLI RAYAS C/A 1BOLS.",
        "precio": 63400
    },
    "411124011": {
        "nombre": "CAMISA SOLER H. POPLIN CUADROS M/C C/BOL",
        "precio": 64700
    },
    "842106003": {
        "nombre": "PASHMINA ESCOCESA",
        "precio": 17600
    },
    "842106005": {
        "nombre": "CUELLO TEJIDO SIMPLE",
        "precio": 10200
    },
    "842106001": {
        "nombre": "PAÑUELO LISO EFECTO SEDA",
        "precio": 17000
    },
    "842106008": {
        "nombre": "PASHMINA VERANO",
        "precio": 15600
    },
    "842106015": {
        "nombre": "PAÑUELO BIANCA",
        "precio": 18000
    },
    "842135002": {
        "nombre": "RUANA DE INVIERNO",
        "precio": 48000
    },
    "842135003": {
        "nombre": "MANTA ELISA",
        "precio": 49990
    },
    "842173007": {
        "nombre": "PASHMINA LISA",
        "precio": 17600
    },
    "843135000": {
        "nombre": "GUANTE DE MUJER",
        "precio": 6000
    },
    "241122010": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN, 30 CM",
        "precio": 29000
    },
    "241122011": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN, 32 CM",
        "precio": 34000
    },
    "241122012": {
        "nombre": "BOINA GUARDA MAPUCHE ALGODÓN 30 CM",
        "precio": 46500
    },
    "241122013": {
        "nombre": "BOINA VASCA ROMBOS TRAMADOS 32 CM",
        "precio": 36000
    },
    "241143000": {
        "nombre": "BOINA VASCA PAÑO 32 CM",
        "precio": 49900
    },
    "241143001": {
        "nombre": "BOINA VASCA PAÑO 35 CM",
        "precio": 55000
    },
    "241533000": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 30 CM",
        "precio": 30000
    },
    "241533001": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 32 CM",
        "precio": 33000
    },
    "241533002": {
        "nombre": "BOINA VASCA JASPEADA FORRADA 35 CM",
        "precio": 36000
    },
    "242122012": {
        "nombre": "BUFANDA GUARDA PAMPA CON FLECOS PASADOS",
        "precio": 32500
    },
    "242122014": {
        "nombre": "BUFANDA RAYADA, MOTEADA HORIZONTAL (FOTO1)",
        "precio": 30000
    },
    "242533000": {
        "nombre": "BUFANDA TRAMA ABORIGEN ALGODÓN JASPEADO",
        "precio": 34000
    },
    "242122013": {
        "nombre": "BOINA GUARDA PAMPA/GRIEGA ALGODÓN 30 CM",
        "precio": 29400
    },
    "244122009": {
        "nombre": "FAJA GUARDA PAMPA REVERSIBLE 9 CM ADULTO",
        "precio": 44500
    },
    "244122010": {
        "nombre": "FAJA DOBLE GUARDA REVERSIBLE 9 CM ADULTO",
        "precio": 44500
    },
    "244122011": {
        "nombre": "FAJA GUARDA INCAICA REVERSIBLE 9 CM ADULTO",
        "precio": 44500
    },
    "244122012": {
        "nombre": "FAJA GUARDA TRINADA REVERSIBLE 9 CM ADULTO",
        "precio": 43900
    },
    "245122000": {
        "nombre": "RUANA DRALLON CON ROMBOS EN EL BAJO",
        "precio": 77500
    },
    "245122001": {
        "nombre": "RUANA PESADA CON GUARDA ALGODÓN JASPEADO",
        "precio": 99500
    },
    "311106016": {
        "nombre": "REMERA YAPEYU M/L (SUBLIMADA HOMBRE)",
        "precio": 35700
    },
    "311106017": {
        "nombre": "REMERA SALADAS(CON CAPUCHA MICROFIBRA)",
        "precio": 32700
    },
    "311106021": {
        "nombre": "BUZO RIOS CANGURO",
        "precio": 73600
    },
    "311106109": {
        "nombre": "CAMISA HUI HUI",
        "precio": 87000
    },
    "313106016": {
        "nombre": "CAMPERA EMPEDRADO (SUBLIMADA SOFSHELL)",
        "precio": 217400
    },
    "313106017": {
        "nombre": "CAMPERA SAUCE (SUBLIMADO FRIZA SOFSHELL)",
        "precio": 118500
    },
    "312106021": {
        "nombre": "PANTALON MOCORETA CARGO DESMONTABLE",
        "precio": 89700
    },
    "312157000": {
        "nombre": "PANTALON HUEMUL",
        "precio": 72500
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
    "411107000": {
        "nombre": "ROMPEVIENTO CALEU CALEU",
        "precio": 53900
    },
    "711106015": {
        "nombre": "REMERA CONCEPCION M/L(SUBLIMADA MUJER)",
        "precio": 37000
    },
    "711106016": {
        "nombre": "REMERA TABAY (CAPUCHA CUELLO REDONDO)",
        "precio": 33000
    },
    "245122002": {
        "nombre": "PONCHO PESADO PEHUENSE CON FLECOS",
        "precio": 219000
    },
    "312106020": {
        "nombre": "CALZA LORETO",
        "precio": 42600
    },
    "711106018": {
        "nombre": "CAMISA PENKEN",
        "precio": 87000
    },
    "712106010": {
        "nombre": "CALZA SANTA ROSA",
        "precio": 42600
    },
    "413101031": {
        "nombre": "CAMPERA RUSTICA",
        "precio": 101200
    },
    "U45106001": {
        "nombre": "MANTA MULTIFUNCION",
        "precio": 57800
    },
    "U11122003": {
        "nombre": "CAMISA CAMPO",
        "precio": 52200
    },
    "911106012": {
        "nombre": "REMERA ROQUE NIÑO M/L (SUBLIMADA NIÑO)",
        "precio": 33000
    },
    "911106031": {
        "nombre": "REMERA PRIMERA PIEL",
        "precio": 27800
    },
    "912106027": {
        "nombre": "PANTALON PRIMERA PIEL",
        "precio": 29000
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
    "U12106000": {
        "nombre": "PRIMERA PIEL PANTALON UNISEX",
        "precio": 26400
    },
    "U12106001": {
        "nombre": "PANTALON PRIMERA PIEL",
        "precio": 33400
    },
    "U12106002": {
        "nombre": "PANTALON PRIMERA PIEL BASICO",
        "precio": 23200
    },
    "812106093": {
        "nombre": "PANTALON MIRADOR",
        "precio": 67200
    },
    "812106080": {
        "nombre": "PANTALON LIBERTAD",
        "precio": 105600
    },
    "U44122000": {
        "nombre": "FAJA GUARDA MAPUCHE REVERSIBLE 12 CM",
        "precio": 52000
    },
    "U44122001": {
        "nombre": "FAJA LOBOS LISA",
        "precio": 40000
    },
    "U44122003": {
        "nombre": "BOINA VASCA ALGODON BORDADA A MANO",
        "precio": 58000
    },
    "944122002": {
        "nombre": "FAJA GUARDA PAMPA/GRIEGA NIÑO",
        "precio": 31000
    },
    "941160003": {
        "nombre": "BOINA DE NIÑO BORDADA",
        "precio": 46500
    },
    "941106005": {
        "nombre": "BOINA DE NIÑO CON POMPON",
        "precio": 32500
    },
    "941122003": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA NIÑO",
        "precio": 23000
    },
    "941122004": {
        "nombre": "BOINA GUARDA PAMPA ALGODÓN, NIÑO",
        "precio": 24500
    },
    "844122000": {
        "nombre": "CINTO TEJIDO 4 CM",
        "precio": 26500
    },
    "641122000": {
        "nombre": "BOINA VASCA ALGODÓN LINEA MUJERS 30 CM",
        "precio": 29000
    },
    "641122001": {
        "nombre": "BOINA VASCA ALGODÓN BORDADA A MANO",
        "precio": 55500
    },
    "641122002": {
        "nombre": "BOINA VASCA ALGODÓN BORDADA A MANO",
        "precio": 61000
    },
    "641122003": {
        "nombre": "BOINA VASCA PAÑO BORDADA",
        "precio": 73500
    },
    "641122004": {
        "nombre": "BOINA VASCA TRAMA CROCHET MUJER",
        "precio": 36000
    },
    "644122001": {
        "nombre": "CINTO TEJIDO CON BORLAS",
        "precio": 29000
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
        "precio": 62000
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
    "241122005": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 30 CM",
        "precio": 25500
    },
    "241122006": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 32 CM",
        "precio": 29500
    },
    "241122007": {
        "nombre": "BOINA VASCA ALGODÓN FORRADA 35 CM",
        "precio": 34000
    },
    "241122008": {
        "nombre": "BOINA VASCA ALGODÓN 32 CM CON TAFILETE",
        "precio": 40000
    },
    "241122009": {
        "nombre": "BOINA VASCA ALGODÓN 35 CM CON TAFILETE",
        "precio": 43000
    },
    "811140052": {
        "nombre": "REMERA RELIEVE",
        "precio": 25000
    },
    "811122133": {
        "nombre": "REMERA CALMA",
        "precio": 22900
    },
    "413106042": {
        "nombre": "CAMPERA CABILDO",
        "precio": 98400
    },
    "413106043": {
        "nombre": "CAMPERA VENTISQUERA",
        "precio": 132000
    },
    "412106029": {
        "nombre": "PANTALON VIAJERO SECADO RAPIDO",
        "precio": 115200
    },
    "412106030": {
        "nombre": "BERMUDA VIAJERO SECADO RAPIDO",
        "precio": 93600
    },
    "412106032": {
        "nombre": "PANTALON VIAJERO DESMONTABLE",
        "precio": 134400
    },
    "412106033": {
        "nombre": "SHORT MUNDO",
        "precio": 81600
    },
    "412106107": {
        "nombre": "PANTALON TRAVESIA",
        "precio": 103200
    },
    "713106202": {
        "nombre": "ROMPEVIENTO MAYA AVE",
        "precio": 88800
    },
    "811106269": {
        "nombre": "CAMISA MONTAÑA",
        "precio": 76800
    },
    "811106263": {
        "nombre": "CAMPERA CARMEN",
        "precio": 56200
    },
    "811106265": {
        "nombre": "ROMPEVIENTO MAYA",
        "precio": 67200
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
        "precio": 76800
    },
    "411140179": {
        "nombre": "REMERA MALTINTO",
        "precio": 29900
    },
    "411106007": {
        "nombre": "ROMPEVIENTO ORTIZ",
        "precio": 69600
    },
    "411106108": {
        "nombre": "CAMISA ACTIVIDAD",
        "precio": 110400
    },
    "411140129": {
        "nombre": "REMERA RINGER",
        "precio": 22100
    },
    "313106201": {
        "nombre": "ROMPEVIENTO ORTIZ AVE",
        "precio": 93600
    },
    "411104003": {
        "nombre": "CAMISA DE JEAN ARRAYAN",
        "precio": 102000
    },
    "411104004": {
        "nombre": "CAMISA DE JEAN ARRAYAN BC",
        "precio": 102000
    },
    "411134001": {
        "nombre": "PANTUFLA H.C.VACUNO",
        "precio": 51990
    },
    "411122210": {
        "nombre": "CAMISA ARRAYAN BULL",
        "precio": 93600
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
    "811106148": {
        "nombre": "BLUSA RITA RV",
        "precio": 52800
    },
    "811106226": {
        "nombre": "BLUSA BEGOÑA",
        "precio": 65500
    },
    "811106280": {
        "nombre": "CHALECO AZALEA NAPALIZADO",
        "precio": 240000
    },
    "811106281": {
        "nombre": "CHALECO AZALEA SUEDE",
        "precio": 125000
    },
    "811106229": {
        "nombre": "BLUSA ANAHI",
        "precio": 58600
    },
    "811106282": {
        "nombre": "REMERA BEGONIA",
        "precio": 55500
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
        "precio": 10500
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
    "811104013": {
        "nombre": "CAMISA OLIVOS",
        "precio": 105000
    },
    "811104014": {
        "nombre": "CAMISA ROSARIO",
        "precio": 94100
    },
    "811106185": {
        "nombre": "BLUSA ARCE",
        "precio": 39900
    },
    "413106038": {
        "nombre": "CAMPERA SIMON",
        "precio": 185000
    },
    "413106039": {
        "nombre": "CAMPERA CARANDAY",
        "precio": 230000
    },
    "413106041": {
        "nombre": "CAMPARA MISIONES HOMBRE",
        "precio": 220000
    },
    "413106020": {
        "nombre": "CHALECO PARAISO REVERSIBLE",
        "precio": 125000
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
    "412101128": {
        "nombre": "BERMUDA ORESTE",
        "precio": 80400
    },
    "412506017": {
        "nombre": "JOGGER HOMBRE RENATO",
        "precio": 82500
    },
    "412543000": {
        "nombre": "PANTALON EL DORADILLO",
        "precio": 106600
    },
    "412543001": {
        "nombre": "BERMUDA ORESTE LINO",
        "precio": 90700
    },
    "413122006": {
        "nombre": "CHALECO CAZADOR EPUYEN",
        "precio": 126900
    },
    "413122007": {
        "nombre": "CAMPERA SIMON",
        "precio": 134100
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
        "precio": 130000
    },
    "413122012": {
        "nombre": "CHALECO CAZADOR EPUYEN",
        "precio": 130000
    },
    "413134000": {
        "nombre": "CHAQUETA EL CERRO",
        "precio": 471800
    },
    "413134003": {
        "nombre": "CAMPERA TANDIL",
        "precio": 460000
    },
    "413134004": {
        "nombre": "CAMPERA ARECO",
        "precio": 460000
    },
    "413134005": {
        "nombre": "CHALECO MADARIAGA",
        "precio": 340000
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
    "413134001": {
        "nombre": "CHAQUETA URITORCO",
        "precio": 432800
    },
    "413134002": {
        "nombre": "CAMPERA PAMPEANA",
        "precio": 455000
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
    "413102000": {
        "nombre": "CAMPERA TUCUMAN",
        "precio": 158500
    },
    "413102001": {
        "nombre": "CHALECO REVERSIBLE CHUBUT",
        "precio": 143900
    },
    "412122011": {
        "nombre": "CARGO CHASCOMUS",
        "precio": 125000
    },
    "413101002": {
        "nombre": "CHALECO ACEBAL REVERSIBLE",
        "precio": 125000
    },
    "413101022": {
        "nombre": "CAMPERA RAMALLO VERANO",
        "precio": 145000
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
    "811122259": {
        "nombre": "BLUSA MARINA BRODERIE",
        "precio": 78100
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
    "811122162": {
        "nombre": "CAMISOLA VERBENA BRODERIE",
        "precio": 132300
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
        "precio": 120000
    },
    "811148021": {
        "nombre": "BLUSA TULIPAN",
        "precio": 69900
    },
    "811149001": {
        "nombre": "BLUSA ANGELADA PLUMETI",
        "precio": 72900
    },
    "811160000": {
        "nombre": "CHALECO AZALEA ESPIGA",
        "precio": 135000
    },
    "811122282": {
        "nombre": "MONO CAMILA DENIM",
        "precio": 165000
    },
    "811143001": {
        "nombre": "SACO CORTO CRUZADO ESMERALDA",
        "precio": 151500
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
    "811166069": {
        "nombre": "VESTIDO CLARA",
        "precio": 81500
    },
    "811506008": {
        "nombre": "VESTIDO CAMISERO JUJUY",
        "precio": 81200
    },
    "811520137": {
        "nombre": "BLUSA MALENA",
        "precio": 73200
    },
    "811525012": {
        "nombre": "CAMISA INDIANA",
        "precio": 70700
    },
    "811525013": {
        "nombre": "MONO FELICIANA",
        "precio": 111800
    },
    "811528001": {
        "nombre": "BLUSA ROBALBA",
        "precio": 53990
    },
    "812106081": {
        "nombre": "PANTALON AZALEA",
        "precio": 120000
    },
    "812106082": {
        "nombre": "PANTALON MARGARITA SASTRERO",
        "precio": 125000
    },
    "812106083": {
        "nombre": "PANTALON ELISA",
        "precio": 119100
    },
    "812106084": {
        "nombre": "PANTALON CARGO SASTRERO KITTY",
        "precio": 130000
    },
    "812106085": {
        "nombre": "PANTALON CARGO KITTY",
        "precio": 105000
    },
    "812106062": {
        "nombre": "PANTALON SASTRERO ORNELLA",
        "precio": 91300
    },
    "812106063": {
        "nombre": "PANTALON TRINIDAD",
        "precio": 89500
    },
    "812106067": {
        "nombre": "BABUCHA HORTENCIA BENGALINA",
        "precio": 59100
    },
    "812106069": {
        "nombre": "PANTALON CAMELIA",
        "precio": 91800
    },
    "812106071": {
        "nombre": "PANTALON MELISA",
        "precio": 125000
    },
    "812106072": {
        "nombre": "PANTALON MELISA",
        "precio": 82600
    },
    "811517001": {
        "nombre": "VESTIDO JEANERO LUISA",
        "precio": 68100
    },
    "811536000": {
        "nombre": "MONO FELICIANA",
        "precio": 119900
    },
    "811536003": {
        "nombre": "REMERA AMALIA ESCOTE EN V",
        "precio": 68000
    },
    "812106073": {
        "nombre": "SHORT AZUCENA",
        "precio": 57500
    },
    "811543022": {
        "nombre": "BLUSA BAHIA LINO",
        "precio": 72600
    },
    "811543023": {
        "nombre": "BLUSA SILVESTRE",
        "precio": 84300
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
        "nombre": "PANTALON CAMILA NATURAL VISCOSA",
        "precio": 109600
    },
    "813102000": {
        "nombre": "BLAZER CRUZADO MIA",
        "precio": 168600
    },
    "812536000": {
        "nombre": "PANTALON BRENDA",
        "precio": 94800
    },
    "812525010": {
        "nombre": "PANTALON MARTINA",
        "precio": 81900
    },
    "812525011": {
        "nombre": "PANTALON GUADALUPE",
        "precio": 90900
    },
    "812525012": {
        "nombre": "PANTALON BRENDA",
        "precio": 82500
    },
    "812525013": {
        "nombre": "PANTALON EVELYN",
        "precio": 140000
    },
    "813102002": {
        "nombre": "CAMISA SUREÑA",
        "precio": 110400
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
    "813122006": {
        "nombre": "PARKA CAMELIA",
        "precio": 199000
    },
    "813122007": {
        "nombre": "CAMPERA POSADAS BULL",
        "precio": 165000
    },
    "813134000": {
        "nombre": "CAMPERA RAMALLO M.C.CRASH",
        "precio": 350000
    },
    "813134001": {
        "nombre": "CHAQUETA OLGA",
        "precio": 450000
    },
    "813134050": {
        "nombre": "CHAQUETA ROSENDA",
        "precio": 317300
    },
    "813134053": {
        "nombre": "CAMPERA RUFINO",
        "precio": 440000
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
    "813134051": {
        "nombre": "CAMISA OLIVOS CUERO",
        "precio": 360000
    },
    "813160000": {
        "nombre": "SACO JULIA",
        "precio": 210000
    },
    "813506000": {
        "nombre": "CHAQUETA VILMA",
        "precio": 120600
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
        "precio": 195000
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
    "U13122000": {
        "nombre": "CAMPERA CRUZ",
        "precio": 210000
    },
    "U13122002": {
        "nombre": "SACO CEDRÓN BULL",
        "precio": 170000
    },
    "U13122003": {
        "nombre": "CAMPERA LOBOS DENIM",
        "precio": 190000
    },
    "U13122004": {
        "nombre": "CAMPERA LOBOS BULL",
        "precio": 190000
    },
    "812139010": {
        "nombre": "SHORT PALMAR",
        "precio": 60900
    },
    "812139011": {
        "nombre": "JOGGING MORA",
        "precio": 74800
    },
    "812106078": {
        "nombre": "CALZA ARCE",
        "precio": 40900
    },
    "812106079": {
        "nombre": "CALZA AUSTRAL",
        "precio": 52900
    },
    "811139119": {
        "nombre": "BUZO LITORAL OVZ",
        "precio": 76400
    },
    "811139120": {
        "nombre": "BUZO ALBA",
        "precio": 70200
    },
    "811147020": {
        "nombre": "MUSCULOSA LLANURA",
        "precio": 33400
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
    "811106256": {
        "nombre": "MUSCULOSA MAREA",
        "precio": 33500
    },
    "411122184": {
        "nombre": "REMERA BELTRAN",
        "precio": 46600
    },
    "411122185": {
        "nombre": "REMERA MARMOL",
        "precio": 40300
    },
    "411139005": {
        "nombre": "BUZO GRANADEROS",
        "precio": 67900
    },
    "411139006": {
        "nombre": "BUZO ARCOS OVZ",
        "precio": 74000
    },
    "421134172": {
        "nombre": "BOTA RUCANELO",
        "precio": 223800
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
    "421134170": {
        "nombre": "MOCASIN RIVADAVIA",
        "precio": 110900
    },
    "421134135": {
        "nombre": "ZAPATILLA BERCEO CUERO",
        "precio": 155200
    },
    "421134136": {
        "nombre": "ZAPATO INDEPENDENCIA",
        "precio": 155700
    },
    "421134137": {
        "nombre": "BOTINETA CHIMBAS",
        "precio": 147200
    },
    "421134138": {
        "nombre": "ZAPATILLA BERCEO COMBINADA",
        "precio": 134100
    },
    "811543024": {
        "nombre": "BLUSA ANGELADA LINO",
        "precio": 81700
    },
    "811543026": {
        "nombre": "MUSCULOSA LIRIO",
        "precio": 73700
    },
    "811543027": {
        "nombre": "MONO CLARITA",
        "precio": 161800
    },
    "811543025": {
        "nombre": "MUSCULOSA SERENA",
        "precio": 74100
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
    "811544111": {
        "nombre": "BLUSA SORAYA",
        "precio": 54400
    },
    "812106094": {
        "nombre": "PANTALÓN ARRAYÁN",
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
        "precio": 130000
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
        "precio": 125000
    },
    "812122214": {
        "nombre": "PANTALON CAMILA BULL",
        "precio": 115000
    },
    "812106087": {
        "nombre": "PANTALÓN MALVA",
        "precio": 140000
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
    "812102000": {
        "nombre": "FALDA JAZMIN",
        "precio": 73200
    },
    "812102001": {
        "nombre": "FALDA CLEMENTINA",
        "precio": 73300
    },
    "812160000": {
        "nombre": "PANTALÓN JULIA ESPIGA",
        "precio": 135000
    },
    "812101002": {
        "nombre": "PANTALON ROCIO CHINO",
        "precio": 65900
    },
    "812101003": {
        "nombre": "PANTALON CARGO JURAMENTO",
        "precio": 82400
    },
    "812101005": {
        "nombre": "PANTALON GUADALUPE GABARDINA FLAME",
        "precio": 79800
    },
    "812506033": {
        "nombre": "PANTALON BRENDA",
        "precio": 92900
    },
    "812506034": {
        "nombre": "PANTALON MARGARITA",
        "precio": 89700
    },
    "811540005": {
        "nombre": "SACO CORTO CRUZADO ESMERALDA",
        "precio": 151500
    },
    "812506029": {
        "nombre": "PANTALON FLORA CARGO",
        "precio": 70800
    },
    "813106070": {
        "nombre": "BLAZAER MAGNOLIA",
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
        "precio": 203000
    },
    "813106063": {
        "nombre": "CAMISACO MARGARITA",
        "precio": 117900
    },
    "812543007": {
        "nombre": "PANTALON ORNELLA LINO",
        "precio": 105800
    },
    "812543008": {
        "nombre": "PANTALON TERESA",
        "precio": 105600
    },
    "812543009": {
        "nombre": "PANTALON BRENDA LINO",
        "precio": 102300
    },
    "421134140": {
        "nombre": "MOCASIN ROMERO",
        "precio": 114800
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
        "precio": 83990
    },
    "421134150": {
        "nombre": "Zapatilla Pacheco",
        "precio": 134100
    },
    "421134153": {
        "nombre": "MOCASIN CARDENAL",
        "precio": 109500
    },
    "821134015": {
        "nombre": "MOCASIN SALINAS",
        "precio": 92300
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
        "precio": 86500
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
        "precio": 77500
    },
    "821134117": {
        "nombre": "sandalia La maruja",
        "precio": 91100
    },
    "821134119": {
        "nombre": "ZAPATILLA PARQUE",
        "precio": 124700
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
    "U21134000": {
        "nombre": "NAUTICO TANDIL",
        "precio": 107700
    },
    "U21134001": {
        "nombre": "PANCHA CORRENTOSO",
        "precio": 123900
    },
    "921134000": {
        "nombre": "MOCASIN ESCOLAR",
        "precio": 99600
    },
    "921134001": {
        "nombre": "NAUTICO ESCOLAR",
        "precio": 102400
    },
    "921134002": {
        "nombre": "GUILLERMINA ESCOLAR",
        "precio": 97300
    },
    "821134131": {
        "nombre": "ZAPATILLA NUMANCIA",
        "precio": 117100
    },
    "821134135": {
        "nombre": "SANDALIA PETUNIA",
        "precio": 99000
    },
    "U13106001": {
        "nombre": "ROMPEVIENTO CRUZ",
        "precio": 45600
    },
    "912525000": {
        "nombre": "SHORT POLLERA ESCOLAR",
        "precio": 15000
    },
    "912525001": {
        "nombre": "CALZA ESCOLAR",
        "precio": 10800
    },
    "913106021": {
        "nombre": "CAMPERA MATELASEADA BONDEADA",
        "precio": 89700
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
        "precio": 9500
    },
    "912508005": {
        "nombre": "CALZA PLUSH",
        "precio": 18200
    },
    "912506009": {
        "nombre": "BERMUDA HILARIO GABARDINA",
        "precio": 32000
    },
    "912506012": {
        "nombre": "PANTALON JOGGER CARGO",
        "precio": 46700
    },
    "912506013": {
        "nombre": "PANTALON CARGO RECTO CAMUFLADO",
        "precio": 48300
    },
    "912506014": {
        "nombre": "PANTALON CARGO RECTO",
        "precio": 41400
    },
    "912106028": {
        "nombre": "BIKER",
        "precio": 14300
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
    "912118001": {
        "nombre": "PANTALON FER FRISA",
        "precio": 26200
    },
    "912118004": {
        "nombre": "CALZA LOLA",
        "precio": 14100
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
        "nombre": "PANTALON LARGO DE MORLEY - FRIDA",
        "precio": 18000
    },
    "912122008": {
        "nombre": "CALZA LYCRA ESTAMPADA",
        "precio": 18200
    },
    "912101004": {
        "nombre": "PANTALON CARGO RECTO",
        "precio": 49700
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
        "precio": 25800
    },
    "912122022": {
        "nombre": "PANTALÓN CLOE RUSTICO",
        "precio": 25800
    },
    "912124001": {
        "nombre": "PANTALON MAGNOLIA FANTASIA",
        "precio": 36800
    },
    "912500004": {
        "nombre": "BERMUDA HILARIO DENIM BC",
        "precio": 32000
    },
    "912500005": {
        "nombre": "SHORT RITA DENIM",
        "precio": 26500
    },
    "912500006": {
        "nombre": "SHORT RITA DENIM BC",
        "precio": 26500
    },
    "912411508": {
        "nombre": "CALZA MARGARITA LISA",
        "precio": 12000
    },
    "912500002": {
        "nombre": "BERMUDA HILARIO DENIM",
        "precio": 32000
    },
    "912139011": {
        "nombre": "PANTALON RUSTICO",
        "precio": 26200
    },
    "912139012": {
        "nombre": "BERMUDA RUSTICO ESCOLAR",
        "precio": 17300
    },
    "912139013": {
        "nombre": "PANTALON LEONESA JOGGING",
        "precio": 30200
    },
    "912139014": {
        "nombre": "SHORT DE RUSTICO  CATA",
        "precio": 22600
    },
    "912139016": {
        "nombre": "BERMUDA DANIEL",
        "precio": 24200
    },
    "912139020": {
        "nombre": "SHORT CLEO DENIM",
        "precio": 26500
    },
    "912139022": {
        "nombre": "JEAN MALVINA PAPERBAG",
        "precio": 34500
    },
    "912139023": {
        "nombre": "PANTALON LUCA JOGGER",
        "precio": 40500
    },
    "912139025": {
        "nombre": "PANTALON MAGNOLIA DENIM BC",
        "precio": 34500
    },
    "912139026": {
        "nombre": "SHORT CLEO BC",
        "precio": 26500
    },
    "912139028": {
        "nombre": "JEAN MALVINA BC",
        "precio": 36800
    },
    "912139029": {
        "nombre": "PANTALON LUCA JOGGER BC",
        "precio": 39100
    },
    "912139030": {
        "nombre": "PANTALON JOGGING CON PUÑO",
        "precio": 30200
    },
    "912147000": {
        "nombre": "SHORT RITA MORLEY",
        "precio": 21900
    },
    "911106052": {
        "nombre": "CAMPERA DANI",
        "precio": 32200
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
        "precio": 40300
    },
    "911106057": {
        "nombre": "CHALECO IRENE",
        "precio": 71300
    },
    "911106058": {
        "nombre": "JUMPER EMMA VIYELA",
        "precio": 44900
    },
    "911122215": {
        "nombre": "REMERA BRUNO",
        "precio": 22600
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
        "precio": 15900
    },
    "911122220": {
        "nombre": "REMERA CRUZ",
        "precio": 16600
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
        "precio": 20500
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
        "precio": 37100
    },
    "911122231": {
        "nombre": "BUZO CIRO",
        "precio": 31100
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
    "912213029": {
        "nombre": "PANTALON LUCA JOGGER BC",
        "precio": 42800
    },
    "911106037": {
        "nombre": "POLERA BASICA",
        "precio": 14200
    },
    "911106050": {
        "nombre": "CAMISACO LEÑADOR",
        "precio": 51300
    },
    "911139005": {
        "nombre": "BUZO RUSTICO",
        "precio": 24000
    },
    "911139006": {
        "nombre": "CANGURO RUSTICO",
        "precio": 29900
    },
    "911139007": {
        "nombre": "CANGURO CLOTILDE RUSTICO",
        "precio": 36400
    },
    "911139013": {
        "nombre": "CANGURO EDU RUSTICO LISO",
        "precio": 38000
    },
    "911139024": {
        "nombre": "BUZO BASICO CON CAPUCHA",
        "precio": 30600
    },
    "911139029": {
        "nombre": "BUZO CORAZONES OVERSIZE",
        "precio": 35000
    },
    "911139030": {
        "nombre": "BUZO OVERSIZE",
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
        "precio": 12900
    },
    "911122211": {
        "nombre": "MUSCULOSA RAMILLETE",
        "precio": 14500
    },
    "911138004": {
        "nombre": "REMERA POLO FER PIQUE",
        "precio": 22800
    },
    "911140039": {
        "nombre": "CHOMBA PATRICIO M/L",
        "precio": 29900
    },
    "911140049": {
        "nombre": "CHOMBA ANIBAL",
        "precio": 26500
    },
    "911140158": {
        "nombre": "REMERA MANGA RANGLAN COMBINADA",
        "precio": 16400
    },
    "911141001": {
        "nombre": "CHALECO MICROPOLAR",
        "precio": 23200
    },
    "911141005": {
        "nombre": "BUZO MICROPOLAR LISO",
        "precio": 27200
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
    "911223140": {
        "nombre": "REMERA LUIS M/C JERSEY.P",
        "precio": 11300
    },
    "911124014": {
        "nombre": "VESTIDO FLOR - POPLIN",
        "precio": 37800
    },
    "912101014": {
        "nombre": "PANTALON LUCA JOGGER GAB",
        "precio": 40500
    },
    "912106016": {
        "nombre": "CALZA CLOE ESTAMPADA",
        "precio": 12700
    },
    "911106020": {
        "nombre": "BUZO ANI PELUDO",
        "precio": 29500
    },
    "911118002": {
        "nombre": "BUZO FER FRISA",
        "precio": 24000
    },
    "911118004": {
        "nombre": "CANGURO FER  FRISA",
        "precio": 29900
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
        "precio": 13400
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
    "U41122000": {
        "nombre": "BANDANA CHEF",
        "precio": 10900
    },
    "U45106002": {
        "nombre": "MANTEL ANTIMANCHAS 2.50 x 1.50 m",
        "precio": 66000
    },
    "U45172000": {
        "nombre": "CAMINO DE MESA ARPILLERA",
        "precio": 24400
    },
    "U45122002": {
        "nombre": "DELANTAL BASICO UNISEX TU",
        "precio": 40300
    },
    "U45122003": {
        "nombre": "SERVILLETAS TUSOR 0.45*0.45",
        "precio": 29200
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
        "precio": 12700
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
        "precio": 11500
    },
    "U45134004": {
        "nombre": "DELANTAL FOLK TIRAS CUERO",
        "precio": 47200
    },
    "U45501000": {
        "nombre": "MANTEL CAMPO",
        "precio": 40300
    },
    "U82116003": {
        "nombre": "BOLSO MATERO",
        "precio": 38400
    },
    "841122002": {
        "nombre": "DELANTAL FOLK GABARDINA",
        "precio": 35700
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
    "911122190": {
        "nombre": "REMERA SIERRA",
        "precio": 17800
    },
    "911122192": {
        "nombre": "BUZO MATI CON CAPUCHA",
        "precio": 27900
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
    "U45134002": {
        "nombre": "MATE DOMUYO",
        "precio": 22800
    },
    "U45134003": {
        "nombre": "MATE ACONCAGUA",
        "precio": 39900
    },
    "U45173001": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 20",
        "precio": 40000
    },
    "U45173002": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 26",
        "precio": 63500
    },
    "U45173003": {
        "nombre": "CUCHILLO CIERVO COMBINADO 14 CM",
        "precio": 40000
    },
    "U45173004": {
        "nombre": "CUCHILLO CIERVO COMBINADO 20 CM",
        "precio": 56000
    },
    "U45173006": {
        "nombre": "JUEGO PARRILLERO 18 CM",
        "precio": 72500
    },
    "U45173009": {
        "nombre": "PLATO MADERA",
        "precio": 10800
    },
    "U45173010": {
        "nombre": "CUCHILLO BRANGUS COMBINADO 14 CM",
        "precio": 29400
    },
    "U45173011": {
        "nombre": "MATE LANIN",
        "precio": 8200
    },
    "U45173012": {
        "nombre": "MATE ARACAR",
        "precio": 12000
    },
    "U45173013": {
        "nombre": "MATE COPAHUE",
        "precio": 6600
    },
    "U45134008": {
        "nombre": "MATE CATEDRAL",
        "precio": 28700
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
    "U45173124": {
        "nombre": "JUEGO DE MESA",
        "precio": 43800
    },
    "U45173125": {
        "nombre": "BOMBILLA CHICA",
        "precio": 5800
    },
    "U45173126": {
        "nombre": "BOMBILLA GRANDE",
        "precio": 8700
    },
    "U45173132": {
        "nombre": "BOMBILLA CINCELADA",
        "precio": 9000
    },
    "U45119000": {
        "nombre": "MATERA TILCARA",
        "precio": 22200
    },
    "U45119001": {
        "nombre": "SET YERBERO/AZUCARERO",
        "precio": 11400
    },
    "U00173017": {
        "nombre": "VASO TERMICO AMERICANO INT. CEREAMICO 380cc",
        "precio": 35800
    },
    "U00173018": {
        "nombre": "VASO TERMICO CLYDE INT. CERAMICO 480cc",
        "precio": 44200
    },
    "U45119002": {
        "nombre": "PORTAMATE PARA AUTO",
        "precio": 9000
    },
    "U45173162": {
        "nombre": "MATE CHALTEN",
        "precio": 16700
    },
    "U45173163": {
        "nombre": "JUEGO DE TRINCHAR",
        "precio": 110000
    },
    "U06173163": {
        "nombre": "AROMATIZANTE MADERA DE QUEBRACHO 500ML",
        "precio": 51900
    },
    "U13106002": {
        "nombre": "ROMPEVIENTO EL TALAR",
        "precio": 115000
    },
    "821134125": {
        "nombre": "MOCASIN AGRELO",
        "precio": 93800
    },
    "U13106003": {
        "nombre": "ROMPEVIENTO DELTA",
        "precio": 120000
    },
    "U13106004": {
        "nombre": "IMPERMEABLE BLEST",
        "precio": 120000
    },
    "813106066": {
        "nombre": "CHALECO VERA",
        "precio": 145000
    },
    "813106080": {
        "nombre": "PARKA MAQUINCHAO",
        "precio": 173000
    },
    "413106037": {
        "nombre": "PARKA CASTOR",
        "precio": 173000
    },
    "413106028": {
        "nombre": "CAMPERA RIBERA",
        "precio": 155000
    },
    "413106029": {
        "nombre": "CHALECO ROJAS",
        "precio": 145000
    },
    "421134176": {
        "nombre": "ZAPATILLA FELIPE",
        "precio": 15000
    },
    "421134177": {
        "nombre": "ZAPATILLA COSQUIN",
        "precio": 114000
    },
    "421134178": {
        "nombre": "ZAPATO AQUILES",
        "precio": 146000
    },
    "421134171": {
        "nombre": "ZAPATILLA COSQUIN",
        "precio": 113000
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
        "precio": 170000
    },
    "421116000": {
        "nombre": "ZAPATILLA LAGO",
        "precio": 118000
    },
    "421116001": {
        "nombre": "SANDALIA RIVADAVIA",
        "precio": 90000
    },
    "821134188": {
        "nombre": "BORCEGO ANA",
        "precio": 143000
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
    "421134158": {
        "nombre": "BORCEGO ORMA",
        "precio": 166000
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
        "precio": 168000
    },
    "411122002": {
        "nombre": "CAMISA HOMBRE CUELLO MAO",
        "precio": 73500
    },
    "411122007": {
        "nombre": "CAMISA SOLER VIYELA M/L C/BOLS",
        "precio": 66700
    },
    "411111103": {
        "nombre": "CAMISA SOLER OXFORD M/L C/BOLS.",
        "precio": 69300
    },
    "411111124": {
        "nombre": "CAMISA SOLER POPLIN M/L C/BOLS.",
        "precio": 64800
    },
    "411122013": {
        "nombre": "CAMISA SOLER M/C LINO",
        "precio": 67400
    },
    "824106004": {
        "nombre": "SANDALIA MOñO",
        "precio": 35800
    },
    "U21106000": {
        "nombre": "ALPARGATA INYECTADA GAMUZA CON CORDERITO",
        "precio": 28000
    },
    "411106109": {
        "nombre": "CAMISA TRABAJO",
        "precio": 76800
    },
    "411106110": {
        "nombre": "CAMPERA PACHECO",
        "precio": 63600
    },
    "41112202": {
        "nombre": "REMERA BIENESTAR RAYADA LAVADA",
        "precio": 22300
    },
    "411122188": {
        "nombre": "REMERA CHAPA",
        "precio": 23300
    },
    "411122189": {
        "nombre": "REMERA GUITARRA",
        "precio": 23300
    },
    "411122190": {
        "nombre": "REMERA SENTIDO",
        "precio": 23300
    },
    "411108009": {
        "nombre": "CHALECO INCA",
        "precio": 61200
    },
    "411108010": {
        "nombre": "CAMPERA INCA POLAR",
        "precio": 71100
    },
    "411122159": {
        "nombre": "REMERA VENTURA CON PUÑO",
        "precio": 25700
    },
    "411122145": {
        "nombre": "REMERA BIENESTAR ALGODÓN",
        "precio": 29900
    },
    "411168102": {
        "nombre": "REMERA BIENESTAR",
        "precio": 29900
    },
    "811108002": {
        "nombre": "CHALECO ARCE",
        "precio": 51600
    },
    "811108003": {
        "nombre": "CAMPERA ARCE POLAR",
        "precio": 61200
    },
    "811140050": {
        "nombre": "REMERA RAMO",
        "precio": 28500
    },
    "111121010": {
        "nombre": "PONCHO LLUVIA LIVIANO PAMPERO",
        "precio": 16200
    },
    "511106300": {
        "nombre": "CAMPERA MONTANA MUJER",
        "precio": 100000
    },
    "421134152": {
        "nombre": "ZAPATILLA PACHECHO CUERO",
        "precio": 134100
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
    "911122181": {
        "nombre": "BUZO AMOR",
        "precio": 25700
    },
    "911122177": {
        "nombre": "REMERA ESTRELLAS",
        "precio": 17800
    }
}

    //Lista Citex Febrero 2025
    /*
    "31217001M": {nombre: "Cargo Cazador", precio: 53400},
    "611124001": { "nombre": "Camisa Estanciera M.M/L", "precio": 60400 },
    "211124004": { "nombre": "Camisa Estanciera H.M/L", "precio": 62700 },
    "611101101": { "nombre": "Camisa Diaguita M. Roll Up Gab.", "precio": 64200 },
    "311101101": { "nombre": "Camisa Diaguita H. Roll Up. Gab.", "precio": 68900 },
    "411122149": { "nombre": "Camisa Ocampo cuello Italiano S/Bolsillo", "precio": 62100 },
    "811122284": { "nombre": "Camisa Ana Maria Poplin 100% Algodón", "precio": 58900 },
    "411103006": { "nombre": "Camisa Barraca Oxford 70/30", "precio": 43400 },
    "811503000": { "nombre": "Camisa Santa Rosa Oxford 70/30", "precio": 42200 },
    "411514109": { "nombre": "Camisa FRENCH Fantasia Poplin Algodón Poliester", "precio": 50400 },
    "811514500": { "nombre": "Camisa Ana Maria Poplin Algodón Poliester", "precio": 49200 },
    "312122000": { "nombre": "Pantalon Cargo Baguales H", "precio": 68500 },
    "312506000": { "nombre": "Pantalon Cargo Baguales H Elastizado", "precio": 80500 },
    "612506000": { "nombre": "Pantalon Garza Dama Chupin", "precio": 84700 },
    "612506002": { "nombre": "Pantalon Cargo Jesus Maria", "precio": 52900 },
    "412101002": { "nombre": "Pantalon Del norte Hombre", "precio": 103800 },
    "412101003": { "nombre": "Pantalon Del norte Hombre Camuflado", "precio": 112000 },
    "412506019": { "nombre": "Pantalon Del norte Hombre Jeans", "precio": 115000 },
    "612506003": { "nombre": "Pantalon Cargo del Norte Mujer", "precio": 101000 },
    "612506004": { "nombre": "Pantalon Cargo del Norte Mujer Camuflado", "precio": 108000 },
    "812506040": { "nombre": "Pantalon Cargo del Norte Dama Jeans", "precio": 113000 },
    "312122001": { "nombre": "Bermuda Cargo Condores H", "precio": 57300 },
    "212122001": { "nombre": "Bombacha Pardo", "precio": 87400 },
    "612122000": { "nombre": "Bombacha Campiña", "precio": 82500 },
    "22121304B": { "nombre": "Alpargata Reforzada", "precio": 15900 },
    "22121306C": { "nombre": "Alpargata PVC", "precio": 19300 },
    "22121307C": { "nombre": "Alpargata PVC Fantasia / Combinado", "precio": 20700 },
    "22121309C": { "nombre": "Alpargata PVC estampado digital", "precio": 21400 },
    "22112200C": { "nombre": "Alpargata PVC Jeans", "precio": 21400 },
    "221171000": { "nombre": "Alpargata Forrada Arpillera Suela Yute", "precio": 25500 },
    "224101000": { "nombre": "Pancha Yacare", "precio": 55100 },
    "224122000": { "nombre": "Pancha Rancho", "precio": 51400 },
    "224101002": { "nombre": "Pancha Yaguarete", "precio": 59600 },
    "424134011": { "nombre": "Pancha Pirai", "precio": 98900 },
    "624101000": { "nombre": "Sandalia Arroyito", "precio": 49700 },
    "624101001": { "nombre": "Zueco San Juan", "precio": 45500 },
    "921214043": { "nombre": "Niños Reforzada", "precio": 14200 },

    //Lista Azul Patagonia Feb 2025
    "611124001": { "nombre": "Camisa Estanciera M.M/L ", "precio": 60400 },
    "211124004": { "nombre": "Camisa Estanciera H.M/L ", "precio": 62700 },
    "611101101": { "nombre": "Camisa Diaguita M. Roll Up Gab.", "precio": 64200 },
    "311101101": { "nombre": "Camisa Diaguita H. Roll Up. Gab.", "precio": 68900 },
    "411122149": { "nombre": "Camisa Ocampo cuello Italiano S/Bolsillo", "precio": 62100 },
    "811122284": { "nombre": "Camisa Ana Maria Poplin 100% Algodón", "precio": 58900 },
    "411103006": { "nombre": "Camisa Barraca Oxford 70/30", "precio": 43400 },
    "811503000": { "nombre": "Camisa Santa Rosa Oxford 70/30", "precio": 42200 },
    "411514109": { "nombre": "Camisa FRENCH Fantasia Poplin Algodón Poliester", "precio": 50400 },
    "811514500": { "nombre": "Camisa Ana Maria Poplin Algodón Poliester", "precio": 49200 },
    "312122000": { "nombre": "Pantalon Cargo Baguales H", "precio": 68500 },
    "312506000": { "nombre": "Pantalon Cargo Baguales H Elastizado", "precio": 80500 },
    "612506000": { "nombre": "Pantalon Garza Dama Chupin", "precio": 84700 },
    "612506002": { "nombre": "Pantalon Cargo Jesus Maria", "precio": 52900 },
    "412101002": { "nombre": "Pantalon Del norte Hombre", "precio": 103800 },
    "412101003": { "nombre": "Pantalon Del norte Hombre Camuflado", "precio": 112000 },
    "412506019": { "nombre": "Pantalon Del norte Hombre Jeans", "precio": 115000 },
    "612506003": { "nombre": "Pantalon Cargo del Norte Mujer", "precio": 101000 },
    "612506004": { "nombre": "Pantalon Cargo del Norte Mujer Camuflado", "precio": 108000 },
    "812506040": { "nombre": "Pantalon Cargo del Norte Dama Jeans", "precio": 113000 },
    "312122001": { "nombre": "Bermuda Cargo Condores H", "precio": 57300 },
    "212122001": { "nombre": "Bombacha Pardo", "precio": 87400 },
    "612122000": { "nombre": "Bombacha Campiña", "precio": 82500 },
    "22121304B": { "nombre": "Alpargata Reforzada", "precio": 15900 },
    "22121306C": { "nombre": "Alpargata PVC", "precio": 19300 },
    "22121307C": { "nombre": "Alpargata PVC Fantasia / Combinado", "precio": 20700 },
    "22121309C": { "nombre": "Alpargata PVC estampado digital", "precio": 21400 },
    "22112200C": { "nombre": "Alpargata PVC Jeans", "precio": 21400 },
    "221171000": { "nombre": "Alpargata Forrada Arpillera Suela Yute", "precio": 25500 },
    "224101000": { "nombre": "Pancha Yacare", "precio": 55100 },
    "224122000": { "nombre": "Pancha Rancho", "precio": 51400 },
    "224101002": { "nombre": "Pancha Yaguarete", "precio": 59600 },
    "424134011": { "nombre": "Pancha Pirai", "precio": 98900 },
    "624101000": { "nombre": "Sandalia Arroyito", "precio": 49700 },
    "624101001": { "nombre": "Zueco San Juan", "precio": 45500 },
    "921214043": { "nombre": "Niños Reforzada", "precio": 14200 },
    "442122000": { "nombre": "Boxer", "precio": 24900 },
    "411104001": { "nombre": "Camisa Soler cuello ingles boton M|L con Bolsillo Denim", "precio": 64200 },
    "411101004": { "nombre": "Camisa Soler Gabardina 1 Bolsillo Lavada", "precio": 65700 },
    "411102000": { "nombre": "Camisa Soler Corderoy 1 Bolsillo", "precio": 73500 },
    "411122007": { "nombre": "Camisa Soler Viyela M/L C/Bols", "precio": 66700 },
    "411122227": { "nombre": "Camisa Soler cuello Italiano Combinado", "precio": 66700 },
    "411124001": { "nombre": "Camisa Soler cuello ingles boton M|L con Bolsillo Poplin cuadros", "precio": 63400 },
    "411124005": { "nombre": "Camisa Soler cuello ingles boton M|L con Bolsillo Poplin rayas ", "precio": 63400 },
    "411124012": { "nombre": "Camisa San Luis Cuello Semi Abierto Boton M|L Con Bosillo T60 (ex premium) Poplin rayas", "precio": 73500 },
    "411124020": { "nombre": "Camisa San Luis Cuello Semi Abierto Boton M|L Con Bosillo T60 (ex premium) Poplin cuadros", "precio": 73500 },
    "411124022": { "nombre": "Camisa Soler Cuello italiano Sin Boton M|L Sin bolsillo Poplin cuadros", "precio": 73500 },
    "411124021": { "nombre": "Camisa Soler Cuello italiano Sin Boton M|L Sin bolsillo Poplin rayas", "precio": 73500 },
    "411122019": { "nombre": "Camisa Ceferino Cuello Italiano Sin Boton M|L Sin Bolsillo Poplin fantasia", "precio": 73500 },
    "411543001": { "nombre": "Camisa Hilario cuello italiano Slim Fit Lino 100%", "precio": 83700 },
    "411122020": { "nombre": "Camisa Soler Cuello italiano Sin Boton M|L Sin bolsillo Poplin Liso", "precio": 73500 },
    "411122228": { "nombre": "Camisa Soler Cuello italiano Sin Boton M|L Sin bolsillo Poplin Liso Chambray", "precio": 73500 },
    "411122229": { "nombre": "Camisa Soler Cuello italiano Sin Boton M|L Sin bolsillo Poplin Liso Denim", "precio": 73500 },
    "411505004": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Poplin rayas", "precio": 44600 },
    "411527000": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Poplin cuadros", "precio": 44600 },
    "411111103": { "nombre": "Camisa Soler cuello ingles boton M|L con Bolsillo Oxford", "precio": 69300 },
    "411111124": { "nombre": "Camisa Soler cuello ingles boton M|L con Bolsillo Poplin Liso", "precio": 64800 },
    "411122230": { "nombre": "Camisaco Leñador", "precio": 78000 },
    "411526000": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Oxford", "precio": 45000 },
    "411527012": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Oxford rayado", "precio": 45000 },
    "411527003": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Poplin", "precio": 45000 },
    "411533000": { "nombre": "Camisa Soler Cuello Ingles Boton M|L con bolsillo 70-30 (ex basica) Poplin rayado", "precio": 45000 },
    "U12122002": { "nombre": "Pantalon Pijama", "precio": 55400 },
    "U11106008": { "nombre": "Camisaco Viyela con corderito", "precio": 66700 },
    "411122013": { "nombre": "Camisa Soler  M/C Lino", "precio": 67400 },
    "411122206": { "nombre": "Camisa Soler cuello Mao Lino", "precio": 78200 },
    "411122207": { "nombre": "Camisa Montura", "precio": 80600 },
    "411122208": { "nombre": "Camisa Soler cuello ingles boton M|C sin bolsillo Poplin Fantasia", "precio": 64700 },
    "411122143": { "nombre": "Camisa Soler Cuello Italiano Lino", "precio": 83700 },
    "411122002": { "nombre": "Camisa Cuello Mao Poplin", "precio": 735000 },
    "411103007": { "nombre": "Camisa Cuello Mao Oxford", "precio": 69300 },
    "411122016": { "nombre": "Camisa Soler Cuello Ingles Boton M|C con Bolsillo Liso", "precio": 64700 },
    "411124011": { "nombre": "Camisa Soler cuello ingles boton M|C con Bolsillo Cuadros", "precio": 64700 },
    "411122015": { "nombre": "Camisa Soler cuello ingles boton M|C con Bolsillo Rayas", "precio": 64700 },
    "411103004": { "nombre": "Camisa Soler Cuello Ingles Boton M|C con bolsillo 70-30 (ex basica) Oxford", "precio": 45000 },
    "411103005": { "nombre": "Camisa Soler Cuello Ingles Boton M|C con bolsillo 70-30 (ex basica) Oxford rayado", "precio": 45000 },
    "411124025": { "nombre": "Camisa Soler Cuello Ingles Boton M|C con bolsillo 70-30 (ex basica) Poplin", "precio": 45000 },
    "411124026": { "nombre": "Camisa Soler Cuello Ingles Boton M|C con bolsillo 70-30 (ex basica) Poplin rayado", "precio": 45000 },
    "811500000": { "nombre": "Camisa Maizani M/L Denim", "precio": 60000 },
    "811124004": { "nombre": "Camisa Maizani M/L Fant. Poplin y Fibrana", "precio": 63300 },
    "811525000": { "nombre": "Camisa Maizani M/L Poplin Elast Liso", "precio": 63300 },
    "811106204": { "nombre": "Camisa Campestre Viyela M/L", "precio": 65500 },
    "811122055": { "nombre": "Camisa Clara S/Bols ", "precio": 67600 },
    "811124033": { "nombre": "Camisa Clara Rayas", "precio": 67600 },
    "811122024": { "nombre": "Camisa Brodery M/L", "precio": 83700 },
    "811122263": { "nombre": "Camisa Rauch Brodery", "precio": 85600 },
    "811122250": { "nombre": "Blusa Cale Brodery", "precio": 61600 },
    "811148004": { "nombre": "Camisa Formosa M/L", "precio": 59300 },
    "811124027": { "nombre": "Camisa Colina Simil Denim", "precio": 55400 },
    "811122111": { "nombre": "Camisa Cañuelas Lino", "precio": 62000 },
    "811122113": { "nombre": "Camisa Pilar Poplin", "precio": 59300 },
    "811122112": { "nombre": "Camisa Jauregui ", "precio": 63000 },
    "811525007": { "nombre": "Camisa Cordoba Elastano", "precio": 57900 },
    "811101004": { "nombre": "Camisa Campestre Gabardina", "precio": 61600 },
    "811102000": { "nombre": "Camisa Maizani Corderoy M/L", "precio": 68000 },
    "811122289": { "nombre": "Camisa Volados", "precio": 73000 },
    "811103001": { "nombre": "Camisa Maizani M/L Oxford Liso", "precio": 60400 },
    "811122290": { "nombre": "Camisaco Leñadora", "precio": 70500 },
    "811122291": { "nombre": "Conjunto Pijama", "precio": 100800 },
    "811526000": { "nombre": "Camisa Basica 70/30 Maizani M/L Oxford Liso", "precio": 44000 },
    "811527004": { "nombre": "Camisa Basica 70/30 Maizani M/L Oxford Rayado", "precio": 44000 },
    "811505001": { "nombre": "Camisa Basica 70/30 Maizani M/L Poplin Liso", "precio": 44000 },
    "811533007": { "nombre": "Camisa Basica 70/30 Maizani M/L Poplin Rayado", "precio": 44000 },
    "811122041": { "nombre": "Camisa Maizani M/C Fant. Poplin y Fibrana", "precio": 60000 },
    "811525002": { "nombre": "Camisa Maizani M/L Poplin Elast. Fant.", "precio": 60000 },
    "811548000": { "nombre": "Camisa Maizani M/C Poplin Elast Liso", "precio": 60000 },
    "811124001": { "nombre": "Camisa Maizani M/L Poplin", "precio": 63300 },
    "811106202": { "nombre": "Camisa Clara S/Bols Crepe ", "precio": 49000 },
    "811122264": { "nombre": "Blusa Cale Brodery M/C", "precio": 70000 },
    "811122249": { "nombre": "Camisa Clara S/Bols Cupro ", "precio": 53400 },
    "811122265": { "nombre": "Camisa Cañuelas Poplin", "precio": 59300 },
    "811122266": { "nombre": "Camisa Candela", "precio": 53900 },
    "811122267": { "nombre": "Camisa Clara Elastizada ", "precio": 62000 },
    "811106035": { "nombre": "Camisa Cordoba Fibrana", "precio": 53900 },
    "811122248": { "nombre": "Camisola Guamini Lino", "precio": 69900 },
    "811122251": { "nombre": "Blusa Cale Viyela", "precio": 45200 },
    "811122110": { "nombre": "Camisa Villa Mercedes", "precio": 53400 },
    "811543001": { "nombre": "Camisa Jauregui Lino", "precio": 85400 },
    "811122115": { "nombre": "Camisa Rauch Lino", "precio": 65100 },
    "811148020": { "nombre": "Camisa Clara Voile", "precio": 53900 },
    "811106260": { "nombre": "Camisa Campestre Creppe", "precio": 60500 },
    "811527003": { "nombre": "Camisa Basica Maizani Fantasia M/L", "precio": 41800 },
    "811106169": { "nombre": "Vestido Festival Fibrana", "precio": 74700 },
    "811106170": { "nombre": "Vestido Eleonora Fibrana", "precio": 74200 },
    "811543002": { "nombre": "Vestido Eleonora Lino", "precio": 74200 },
    "811106171": { "nombre": "Vestido Helena ", "precio": 74200 },
    "811124029": { "nombre": "Vestido Isabel", "precio": 74200 },
    "811122221": { "nombre": "Blusa Cale", "precio": 56900 },
    "811122222": { "nombre": "Camisa Salvia Lino", "precio": 78300 },
    "811124003": { "nombre": "Camisa Maizani Cuadros", "precio": 63300 },
    "811103007": { "nombre": "Camisa Basica 70/30 Maizani M/C Oxford Rayado", "precio": 44000 },
    "811124030": { "nombre": "Camisa Basica 70/30 Maizani M/C Poplin Liso", "precio": 44000 },
    "811124031": { "nombre": "Camisa Basica 70/30 Maizani M/C Poplin Rayado", "precio": 44000 },
    "911124003": { "nombre": "Camisa Emilio Fantasia M/L", "precio": 40000 },
    "911103000": { "nombre": "Camisa Manuel N. Oxf M/L", "precio": 40000 },
    "911104001": { "nombre": "Camisa Juan N. Denim M/L C/Bols", "precio": 40000 },
    "911122193": { "nombre": "Camisa Niño Viyela", "precio": 40000 },
    "911124010": { "nombre": "Camisa Emilia N. Poplin Fant. M/L", "precio": 40000 },
    "911111103": { "nombre": "Camisa Sara N. Oxf M/L", "precio": 40000 },
    "911104000": { "nombre": "Camisa Juana N. Denim M/L S/Bols", "precio": 40000 },
    "911122194": { "nombre": "Camisa Niña Brodery", "precio": 40000 },
    "911122195": { "nombre": "Camisa Niña Viyela", "precio": 40000 },
    "911543000": { "nombre": "Camisa Jose Niña M/L Lino", "precio": 40000 },
    "911124011": { "nombre": "Camisa Colegial M/L Sin bolsillo", "precio": 34400 },

    //Lista CDWAY Feb 2025
    "411140004": { "nombre": "REMERA BASICA MC CUELLO REDONDO", "precio": 28000 },
    "411140100": { "nombre": "REMERA BASICA MC ESCOTE V ", "precio": 28800 },
    "411122221": { "nombre": "REMERA LAPACHO", "precio": 29900 },
    "411122222": { "nombre": "REMERA NOGAL", "precio": 29900 },
    "411122224": { "nombre": "REMERA QUEBRACHO", "precio": 31600 },
    "411122223": { "nombre": "REMERA SAUCE", "precio": 28800 },
    "411122216": { "nombre": "REMERA ALERCE", "precio": 45500 },
    "411168104": { "nombre": "REMERA ARRAYAN", "precio": 42000 },
    "411122220": { "nombre": "REMERA TIMBO", "precio": 29990 },
    "411122031": { "nombre": "REMERA BASICA ML ESCOTE REDONDO", "precio": 31200 },
    "411122217": { "nombre": "REMERA GUATAMBU", "precio": 38000 },
    "411122225": { "nombre": "REMERA ALGARROBO", "precio": 39990 },
    "411168105": { "nombre": "REMERA CHAÑAR", "precio": 46000 },
    "411122219": { "nombre": "REMERA CURUPI", "precio": 36000 },
    "411138008": { "nombre": "POLO BASICA DE PIQUÉ MANGA CORTA", "precio": 49000 },
    "411138022": { "nombre": "POLO CALDEN ", "precio": 51000 },
    "411138023": { "nombre": "POLO PEHUEN", "precio": 49000 },
    "411138024": { "nombre": "POLO ÑIRE", "precio": 49990 },
    "411140200": { "nombre": "POLO COIGüE", "precio": 45500 },
    "411140201": { "nombre": "POLO MAITEN", "precio": 45500 },
    "411140202": { "nombre": "POLO IBIRÁ PITÁ", "precio": 49900 },
    "411138009": { "nombre": "POLO BASICA DE PIQUÉ MANGA LARGA", "precio": 54000 },
    "411140204": { "nombre": "POLO PETIRIBÍ", "precio": 45000 },
    "411168106": { "nombre": "POLO JACARANDA", "precio": 51000 },
    "411140203": { "nombre": "POLO RAULÍ", "precio": 65000 },
    "411118005": { "nombre": "BUZO OCAMPO", "precio": 63000 },
    "411118010": { "nombre": "BUZO VENCEJOS ", "precio": 80000 },
    "411501028": { "nombre": "BUZO NOTRO", "precio": 78000 },
    "411122212": { "nombre": "CAMPERA FRESNO ", "precio": 89000 },
    "411118007": { "nombre": "CAMPERA MUÑOZ", "precio": 89000 },
    "411118011": { "nombre": "CAMPERA BRUGO", "precio": 108000 },
    "412122207": { "nombre": "PANTALON CALDEN CON PUÑO", "precio": 69990 },
    "412122206": { "nombre": "PANTALON CALDEN RECTO", "precio": 69990 },
    "411108013": { "nombre": "BUZO LENGA", "precio": 51000 },
    "411141000": { "nombre": "BUZO MEDIO CIERRE BOQUERON", "precio": 59000 },
    "411141001": { "nombre": "CAMPERA EL COYUNCO", "precio": 64000 },
    "411108014": { "nombre": "CAMPERA CIPRES", "precio": 77000 },
    "411108015": { "nombre": "CAMPERA CEIBO", "precio": 79990 },
    "411106103": { "nombre": "CHALECO LAGO MELIQUINA", "precio": 75000 },
    "411106116": { "nombre": "BUZO CALAFATE", "precio": 143000 },
    "452167000": { "nombre": "BOXER PAMPERO", "precio": 23000 },
    "811122047": { "nombre": "REMERA BASICA JERSEY MC ESC.REDONDO", "precio": 27500 },
    "811122049": { "nombre": "REMERA BASICA JERSEY MC ESCOTE V ", "precio": 28500 },
    "811122046": { "nombre": "REMERA BASICA JERSEY ML ESC.REDONDO ", "precio": 28500 },
    "811122048": { "nombre": "REMERA BASICA JERSEY ML ESCOTE V ", "precio": 29500 },
    "811166030": { "nombre": "REMERA BASICA VISCOSA ML ESC.REDONDO", "precio": 32000 },
    "811166037": { "nombre": "REMERA BASICA VISCOSA ML ESCOTE V ", "precio": 33000 },
    "811168017": { "nombre": "REMERA SALINAS GRANDES", "precio": 30000 },
    "811122238": { "nombre": "REMERA LOS ANTIGUOS ", "precio": 35000 },
    "811122237": { "nombre": "REMERA LA ANGOSTURA", "precio": 35000 },
    "811122239": { "nombre": "POLERA GAIMAN", "precio": 38000 },
    "811168024": { "nombre": "REMERA AMANCAY", "precio": 39990 },
    "811168025": { "nombre": "REMERA CARAGUATÁ", "precio": 38000 },
    "811525015": { "nombre": "REMERA MARGARITA", "precio": 39990 },
    "811525016": { "nombre": "POLERA REINA MORA", "precio": 45000 },
    "811166076": { "nombre": "REMERA CARACOLILLO", "precio": 54000 },
    "811166077": { "nombre": "REMERA ARRAYAN", "precio": 49000 },
    "811140055": { "nombre": "REMERA AZUCENA ", "precio": 33000 },
    "811106274": { "nombre": "REMERA MIRASOL", "precio": 45000 },
    "811106275": { "nombre": "POLERA PLUMERILLO", "precio": 45000 },
    "811106276": { "nombre": "REMERA ACACIA BLANCA", "precio": 65500 },
    "812106086": { "nombre": "PANTALON JAZMIN AZUL", "precio": 63000 },
    "811525003": { "nombre": "REMERA POLO NATIVA ", "precio": 43000 },
    "811525014": { "nombre": "POLO NATIVA PIQUÉ", "precio": 51000 },
    "811106277": { "nombre": "POLO LLANTEN", "precio": 58000 },
    "811106215": { "nombre": "POLO TUPUNGATO", "precio": 46000 },
    "811168023": { "nombre": "REMERA VERBENA ", "precio": 52000 },
    "811537002": { "nombre": "BUZO AGUAPÉ", "precio": 54000 },
    "812537001": { "nombre": "PANTALON CEIBO", "precio": 66000 },
    "811505004": { "nombre": "BUZO QUILIMBAI", "precio": 74000 },
    "812505000": { "nombre": "PANTALON MOLLE", "precio": 69000 },
    "811139123": { "nombre": "CHALECO DALIA", "precio": 46000 },
    "811122288": { "nombre": "BUZO PASPALUM", "precio": 55000 },
    "812139015": { "nombre": "PANTALON VIRA VIRA", "precio": 75000 },
    "811507000": { "nombre": "BUZO PEPERINA", "precio": 85000 },
    "811118003": { "nombre": "CAMPERA ORAN ", "precio": 79000 },
    "812118001": { "nombre": "PANTALON SALTA ", "precio": 61000 },
    "811141000": { "nombre": "BUZO LA RINCONADA ", "precio": 38000 },
    "811141002": { "nombre": "BUZO MUITU", "precio": 51000 },
    "811141001": { "nombre": "CAMPERA LA PAZ", "precio": 65000 },
    "811106278": { "nombre": "POLERON AROMO", "precio": 68000 },
    "811106279": { "nombre": "POLERON RETAMA", "precio": 98000 },
    "813106078": { "nombre": "CHALECO JAZMIN", "precio": 98000 },
    "813106077": { "nombre": "CAMPERA JACARANDA", "precio": 123000 },
    "813106079": { "nombre": "CAMPERA GLICINA", "precio": 135000 },
    "811106141": { "nombre": "SACO TILCARA", "precio": 115000 },
    "U12122000": { "nombre": "PANTALON CARGO PAMPEANO RECTO", "precio": 88000 },
    "U12122001": { "nombre": "PANTALON CARGO PAMPEANO CON PUÑO", "precio": 86000 },
    "842106016": { "nombre": "CUELLO POLAR PAMPERO", "precio": 13500 },
    "111122050": { "nombre": "REMERA MC HOMBRE INDUSTRIA", "precio": 22500 },
    "111122051": { "nombre": "POLO MC HOMBRE INDUSTRIA", "precio": 32500 },
    "511122005": { "nombre": "REMERA MC MUJER INDUSTRIA", "precio": 19000 },
    "511122006": { "nombre": "POLO MC MUJER INDUSTRIA", "precio": 25800 },

    //Eugenia Armesto Marzo 2025
    "311106015": { "nombre": "Camisa PUAN Tecnica M/Larga 2 Bolsillos", "precio": 84000 },
    "311106018": { "nombre": "Camisa PUAN Tecnica MC con bolsillos", "precio": 67200 },
    "313106005": { "nombre": "Campera NOGAL Sofshell c/Spandex Combinada", "precio": 124700 },
    "313211142": { "nombre": "Campera CURUHUE Sofshell c/Spandex", "precio": 115800 },
    "312106017": { "nombre": "Babucha TAPALQUE Soft Shell Solar Pro Hombre", "precio": 103800 },
    "312106019": { "nombre": "Bermuda Savedra Hombre", "precio": 72000 },
    "712106008": { "nombre": "Babucha ROSAS Soft Shell Solar Pro Mujer", "precio": 102200 },
    "712106009": { "nombre": "Bermuda ROJAS Mujer", "precio": 66000 },
    "711106013": { "nombre": "Camisa MujerEVA Secado Rapido con Spandex ML", "precio": 82800 },
    "713106009": { "nombre": "Campera NOGAL Sofshell Combinada Mujer", "precio": 117000 },
    "713211142": { "nombre": "Campera CHOLILA Sofshell c/Spandex", "precio": 102000 },
    "311108003": { "nombre": "Buzo CATALPA Micropolar Medio Cierre", "precio": 51600 },
    "311108005": { "nombre": "Campera CATALPA Micropolar", "precio": 58800 },
    "311108009": { "nombre": "Chaleco Catalpa Micropolar", "precio": 49200 },
    "711108001": { "nombre": "Chaleco UNION Polar Mujer", "precio": 52800 },
    "311141000": { "nombre": "Buzo La estancia COMBINADO Mico Medio Cierre HOMBRE", "precio": 52800 },
    "711141000": { "nombre": "Buzo La estancia COMBINADO Mico Medio Cierre Mujer", "precio": 52800 },
    "913213142": { "nombre": "Campera Alicura Niño sofshell", "precio": 70900 },
    "711108002": { "nombre": "Buzo FLORIDA Polar Mujer", "precio": 49200 },
    "311106107": { "nombre": "Camisa PUAN Paper M/Corta 2 Bolsillos", "precio": 51600 },
    "311106108": { "nombre": "Camisa PUAN Paper M/Larga con bolsillos", "precio": 57600 },
    "311141001": { "nombre": "Campera Catalpa Liviano", "precio": 58800 },
    "311141002": { "nombre": "Buzo Catalpa Liviano", "precio": 51600 },
    "311141003": { "nombre": "Chaleco Catalpa Liviano", "precio": 49200 },
    "711141001": { "nombre": "Buzo Florida Liviano", "precio": 49200 },
    "711141002": { "nombre": "Chaleco Union Liviano", "precio": 52800 },
    "312106024": { "nombre": "Pantalon Epecuen", "precio": 103800 },
    "712106013": { "nombre": "Babucha Ruca", "precio": 102200 },
    "711106020": { "nombre": "Camisa Mujer Mila Secado Rapido ML", "precio": 74400 },
    "713106201": { "nombre": "Tapado Traful Softshell C/Spandex", "precio": 143700 },
    "711106021": { "nombre": "Campera Florida Polar Mujer", "precio": 54000 },
    "711106022": { "nombre": "Camisa Mujer Mila Paper Touch ML", "precio": 56400 },
    "312106501": { "nombre": "Short Catamarca ", "precio": 38400 },
    "311106110": { "nombre": "Remera Carrera", "precio": 40800 },
    "711511000": { "nombre": "Top deportivo NOA", "precio": 45800 },
    "712511001": { "nombre": "Calza deportiva GRETA CAPRI", "precio": 66000 },
    "711517000": { "nombre": "Musculosa deportiva EMMA", "precio": 31200 },
    "U12106003": { "nombre": "Pantalon Aimar", "precio": 84000 },
    "U11106009": { "nombre": "Remera Carrera ML", "precio": 46800 },
    "712106015": { "nombre": "Calza deportiva GRETA LARGA", "precio": 76500 },
    
    //Lista Footwear Feb 2025
    "813106000": { "nombre": "Campera Angostura ", "precio": 93300 },
    "813106001": { "nombre": "Chaleco Angostura ", "precio": 76500 },
    "413106000": { "nombre": "Campera Trelew ", "precio": 119700 },
    "413106003": { "nombre": "Chaleco Trelew ", "precio": 98100 },
    "413106014": { "nombre": "Chaleco alta montaña", "precio": 119700 },
    "811540002": { "nombre": "Cardigan Humahuaca", "precio": 68600 },
    "811122030": { "nombre": "Saquito Sierra", "precio": 68900 },
    "811122285": { "nombre": "Sweater Puna ", "precio": 66500 },
    "411540001": { "nombre": "Mercedario", "precio": 58800 },
    "411539001": { "nombre": "Aconquija", "precio": 77000 },
    "411122191": { "nombre": "Campera Aconquija ", "precio": 83400 },
    "811135018": { "nombre": "Saco Tilcara", "precio": 86200 },
    "811135019": { "nombre": "Sweater Maimara", "precio": 72700 },
    "811135020": { "nombre": "Poleron Purmamarca", "precio": 90900 },
    "811106211": { "nombre": "Polera Abalos", "precio": 86200 },
    "811152004": { "nombre": "Sweater Iruya", "precio": 66800 },
    "811152005": { "nombre": "Iruya Rayado", "precio": 68400 },
    "811540006": { "nombre": "Sweater Las Grutas ", "precio": 90900 },
    "811540007": { "nombre": "Chaleco Sierra Grande ", "precio": 70500 },
    "811540008": { "nombre": "Poncho Rawson ", "precio": 96900 },
    "811135005": { "nombre": "Ruana La Caseta", "precio": 84900 },
    "811514107": { "nombre": "Ruana Beltran", "precio": 106000 },
    "411122008": { "nombre": "Campera Poma", "precio": 105300 },
    "411135000": { "nombre": "Sweater Aconcagua", "precio": 107900 },
    "411122211": { "nombre": "Sweater Aconcagua liso ", "precio": 90000 },
    "411106008": { "nombre": "Sweater Galvan ", "precio": 84500 },
    "411106003": { "nombre": "Sweater Policial", "precio": 121900 },
    "411122226": { "nombre": "Sweater Buenos Aires", "precio": 81300 },
    "411514107": { "nombre": "Chaleco Condarco", "precio": 64500 },
    "411540005": { "nombre": "Sweater Rio Negro", "precio": 95600 },
    "411122059": { "nombre": "Campera San Carlos", "precio": 93600 },
    "411122024": { "nombre": "Sweater San carlos ", "precio": 86000 },
    "411122167": { "nombre": "Sweater Neuquen Bosa", "precio": 59700 },
    "412122202": { "nombre": "Sweater Neuquen esc v ", "precio": 59700 },
    "411122121": { "nombre": "Campera La pampa ", "precio": 150300 },

    //Lista La Petit Feb 2025
    "413106028": { "nombre": "Campera puffer RIBERA", "precio": 155000 },
    "413106029": { "nombre": "Chaleco puffer ROJAS", "precio": 145000 },
    "813106065": { "nombre": "Campera puffer VALLE", "precio": 155000 },
    "813106066": { "nombre": "Chaleco puffer VERA", "precio": 145000 },
    "U13106002": { "nombre": "Rompeviento EL TALAR", "precio": 115000 },
    "U13106004": { "nombre": "Impermeable BLEST ", "precio": 115000 },
    "U13106003": { "nombre": "Rompeviento DELTA ", "precio": 115000 },
    "813106080": { "nombre": "Parka MAQUINCHAO", "precio": 173000 },
    "413106037": { "nombre": "Parka CASTOR", "precio": 173000 },
    
    //Lista Labastida Feb 2025
    "941122003": { "nombre": "Boina Vasca Algodón Forrada Niño", "precio": 22000 },
    "241122005": { "nombre": "Boina Vasca Algodón Forrada 30 cm", "precio": 24500 },
    "241122006": { "nombre": "Boina Vasca Algodón Forrada 32 cm", "precio": 28000 },
    "241122007": { "nombre": "Boina Vasca Algodón Forrada 35 cm", "precio": 32500 },
    "241533000": { "nombre": "Boina Vasca Jaspeada Forrada 30 cm", "precio": 28500 },
    "241533001": { "nombre": "Boina Vasca Jaspeada Forrada 32 cm", "precio": 31500 },
    "241533002": { "nombre": "Boina Vasca Jaspeada Forrada 35 cm", "precio": 34000 },
    "241122008": { "nombre": "Boina Vasca Algodón 32 cm con Tafilete", "precio": 38000 },
    "241122009": { "nombre": "Boina Vasca Algodón 35 cm con Tafilete", "precio": 40500 },
    "241143000": { "nombre": "Boina Vasca Paño 32 cm", "precio": 47500 },
    "241143001": { "nombre": "Boina Vasca Paño 35 cm", "precio": 52000 },
    "641122000": { "nombre": "Boina Vasca Algodón Linea Damas 30 cm", "precio": 27500 },
    "641122001": { "nombre": "Boina Vasca Algodón Bordada a mano 30 cm", "precio": 52900 },
    "941122004": { "nombre": "Boina Guarda Pampa Algodón, Niño", "precio": 23000 },
    "241122010": { "nombre": "Boina Guarda Pampa Algodón, 30 cm", "precio": 27500 },
    "241122011": { "nombre": "Boina Guarda Pampa Algodón, 32 cm", "precio": 32200 },
    "241122012": { "nombre": "Boina Guarda Mapuche Algodón 30 cm", "precio": 27500 },
    "242122013": { "nombre": "Boina Guarda Pampa/Griega Algodón 30 cm", "precio": 29400 },
    "944122002": { "nombre": "Faja Guarda Pampa/Griega Niño", "precio": 29400 },
    "244122009": { "nombre": "Faja Guarda Pampa reversible 9 cm Adulto", "precio": 42100 },
    "244122010": { "nombre": "Faja Doble Guarda reversible 9 cm Adulto", "precio": 42100 },
    "244122011": { "nombre": "Faja Guarda Incaica reversible 9 cm Adulto", "precio": 42100 },
    "244122012": { "nombre": "Faja Guarda Trinada reversible 9 cm Adulto", "precio": 43900 },
    "242122012": { "nombre": "Bufanda Guarda Pampa con flecos pasados", "precio": 31000 },
    "242533000": { "nombre": "Bufanda Trama Aborigen Algodón Jaspeado", "precio": 32500 },
    "245122000": { "nombre": "Ruana Drallon con Rombos en el Bajo", "precio": 73500 },
    "245122001": { "nombre": "Ruana Pesada con Guarda Algodón Jaspeado", "precio": 94500 },
    "245122002": { "nombre": "Poncho Pesado Pehuense con Flecos", "precio": 208500 },
    "645122000": { "nombre": "Ruana Bordado Artesanal con Flecos", "precio": 127500 },
    "645122001": { "nombre": "Ruana Flor de Lis con Flecos", "precio": 85500 },
    "242122014": { "nombre": "Bufanda Rayas Oblicuas f3", "precio": 28500 },
    "645122002": { "nombre": "Pashmina con Guardas reversible", "precio": 59000 },
    "641122004": { "nombre": "Boina Vasca Trama Crochet Damas", "precio": 36000 },
    "241122013": { "nombre": "Boina Vasca Rombos Tramados 32 cm", "precio": 34000 },
    "641122002": { "nombre": "Boina Vasca Algodón Bordada a mano 32 cm", "precio": 58000 },
    "641122003": { "nombre": "Boina Vasca Paño Bordada a mano 32 cm", "precio": 69500 },
    "U44122000": { "nombre": "Faja Guarda Mapuche Reversible 12 cm Adulto", "precio": 49500 },
    "645504000": { "nombre": "Ruana con Rombos Reversible Algodón Jaspeado", "precio": 88500 },
    "941160003": { "nombre": "Boina Niño Bordado Artesanal", "precio": 44500 },
    "645122005": { "nombre": "Pashmina con Rombos Verticales", "precio": 58000 },
    "U44122001": { "nombre": "Faja Lisa Lobos", "precio": 38100 },
    "941106005": { "nombre": "Boina Niño Pompon", "precio": 31000 },
    "844122000": { "nombre": "Cinto Tejido Diseño Rombos con Flecos", "precio": 25000 },
    "U44122003": { "nombre": "Boina Vasca Bordada a Mano Escudo Nacional", "precio": 55000 },

    //Lista Medias Feb 2025
    "143128000": { "nombre": "TÉRMICA BÁSICA", "precio": 8400 },
    "143122003": { "nombre": "CAMUFLADA", "precio": 19000 },
    "143128004": { "nombre": "3/4 MICROFIBRA BÁSICA", "precio": 18200 },
    "143122002": { "nombre": "3/4 ALGODÓN", "precio": 15900 },
    "143128003": { "nombre": "BAJITA MICROFIBRA", "precio": 14700 },
    "143128010": { "nombre": "INVISIBLE MICROFIBRA", "precio": 14000 },
    "U43165000": { "nombre": "TUBO MICROFIBRA TOALLA", "precio": 3900 },
    "143128100": { "nombre": "TÉRMICA TÉCNICA - NUEVA", "precio": 29000 },
    "143128005": { "nombre": "3/4 MICROFIBRA LOGO PMP", "precio": 18300 },
    "143128102": { "nombre": "CAÑA 3/4 TÉCNICA MICROFIBRA", "precio": 19700 },
    "143128007": { "nombre": "CAÑA 3/4 CON HILO DE PLATA", "precio": 42700 },
    "143128006": { "nombre": "CAÑA BAJA CON HILO DE PLATA", "precio": 31000 },
    "143128011": { "nombre": "CAÑA INVISIBLE CON HILO DE PLATA", "precio": 22000 },
    "143122006": { "nombre": "CAÑA 3/4 SIN TOALLA", "precio": 16300 },
    "143122009": { "nombre": "MODELO BALLERINA MUJER", "precio": 14100 },
    "143106000": { "nombre": "INVISIBLE  MOULINEE", "precio": 14000 },
    "143122007": { "nombre": "INVISIBLE LISA ALGODÓN", "precio": 14000 },
    "143122108": { "nombre": "CAÑA BAJA ALGODÓN TOALLA", "precio": 14700 },
    "143122109": { "nombre": "CAÑA BAJA CON TOALLA MUJER", "precio": 14700 },
    "143122110": { "nombre": "CAÑA 3/4 ALGODÓN SIN TOALLA. RAYAS", "precio": 16300 },
    "143122111": { "nombre": "CAÑA 3/4 ALGODÓN SIN TOALLA. LISA", "precio": 16300 },
    "143513000": { "nombre": "INVISIBLE BÁSICA", "precio": 14000 },
    "143513001": { "nombre": "CAÑA BAJA BÁSICA", "precio": 14500 },
    "143513002": { "nombre": "CAÑA 3/4 BÁSICA", "precio": 16300 },
    "143513003": { "nombre": "INVISIBLE RAYA ", "precio": 14200 },
    "143513004": { "nombre": "CAÑA 3/4 RAYA", "precio": 16300 },
    "143513005": { "nombre": "INVISIBLE LUNARES", "precio": 14200 },
    "143513006": { "nombre": "CAÑA 3/4 LUNARES", "precio": 16300 },
    "943122001": { "nombre": "CAÑA 3/4 COLEGIAL LISA", "precio": 13100 },

    //Lista Montagner Feb 2025
    "821134189": { "nombre": "B. AMANDA", "precio": 154000 },
    "821134190": { "nombre": "B. JUANA", "precio": 145000 },
    "821134188": { "nombre": "BOR. ANA", "precio": 143000 },
    "821134129": { "nombre": "B. SALMA", "precio": 168000 },
    "821134192": { "nombre": "Z. NUMANCIA RECICLADA", "precio": 131000 },
    "421134158": { "nombre": "B. ORMA", "precio": 166000 },
    "421134157": { "nombre": "B. HARRISON", "precio": 170000 },
    "421134176": { "nombre": "Z. FELIPE", "precio": 150000 },
    "421134177": { "nombre": "Z. COSQUIN", "precio": 114000 },
    "421134178": { "nombre": "Z. AQUILES", "precio": 146000 },
    "421134167": { "nombre": "MONTANA", "precio": 140000 },

    //Lista Monteuco Feb 2025
    "813134001": { "nombre": "CHAQUETA OLGA", "precio": 450000 },
    "813134053": { "nombre": "CAMPERA RUFINO", "precio": 440000 },
    "813134055": { "nombre": "CAMPERA ÚRSULA", "precio": 440000 },
    "813134051": { "nombre": "CAMISA OLIVOS", "precio": 360000 },
    "813134054": { "nombre": "CAMISACO LA CUMBRE", "precio": 370000 },
    "813106088": { "nombre": "CAMISACO ALEJANDRINA", "precio": 160000 },
    "813106082": { "nombre": "TRENCH ADELINA NAPALIZADO", "precio": 270000 },
    "813106081": { "nombre": "TRENCH ADELINA GAMUZÓN", "precio": 270000 },
    "812134000": { "nombre": "PANTALÓN MUNA", "precio": 350000 },
    "813106071": { "nombre": "TAPADO TAINA", "precio": 225000 },
    "813122006": { "nombre": "PARKA CAMELIA", "precio": 199000 },
    "813106083": { "nombre": "CAMPERA BRUNA", "precio": 230000 },
    "813106084": { "nombre": "CAMISACO UMA ESPIGA", "precio": 180000 },
    "813106085": { "nombre": "CAMISACO UMA", "precio": 180000 },
    "813540000": { "nombre": "SACO MALVA", "precio": 195000 },
    "813122007": { "nombre": "CAMPERA POSADAS", "precio": 165000 },
    "813106086": { "nombre": "CAMPERA MISIONES", "precio": 230000 },
    "813160000": { "nombre": "SACO JULIA", "precio": 210000 },
    "813106061": { "nombre": "BLAZER MAGNOLIA", "precio": 203000 },
    "811160000": { "nombre": "CHALECO AZALEA ESPIGA", "precio": 135000 },
    "813106075": { "nombre": "CHALECO AZALEA", "precio": 120000 },
    "811106280": { "nombre": "CHALECO AZALEA NAPALIZADO", "precio": 240000 },
    "811106281": { "nombre": "CHALECO AZALEA SUEDE", "precio": 125000 },
    "811122275": { "nombre": "CHALECO VENUS BULL", "precio": 105000 },
    "811122276": { "nombre": "CHALECO VENUS DENIM", "precio": 105000 },
    "811104013": { "nombre": "CAMISA OLIVOS", "precio": 105000 },
    "811122277": { "nombre": "CAMISA OLIVOS CORDEROY", "precio": 11000 },
    "811106282": { "nombre": "REMERA BEGONIA", "precio": 55500 },
    "811106283": { "nombre": "MUSCULOSA AMAPOLA", "precio": 56000 },
    "811122279": { "nombre": "REMERA LUCIANA", "precio": 85000 },
    "811106284": { "nombre": "REMERA LUCIANA PELO DE MONO", "precio": 79500 },
    "811536003": { "nombre": "REMERA AMALIA", "precio": 68000 },
    "811106291": { "nombre": "POLERA CLOÉ CLOQUÉ", "precio": 68000 },
    "811106285": { "nombre": "BLUSA ROSA", "precio": 91000 },
    "811122280": { "nombre": "CAMISA ORQUÍDEA", "precio": 120000 },
    "811122281": { "nombre": "CAMISA ORQUÍDEA RAYADA", "precio": 120000 },
    "811106286": { "nombre": "CAMISA CALA", "precio": 10500 },
    "811543031": { "nombre": "CAMISA ALELÍ", "precio": 90000 },
    "811106287": { "nombre": "CAMISA CLAVEL", "precio": 90000 },
    "811106288": { "nombre": "CAMISA NARCISO", "precio": 105000 },
    "811106289": { "nombre": "CAMISA MALVA", "precio": 120000 },
    "812106087": { "nombre": "PANTALÓN MALVA", "precio": 140000 },
    "812106071": { "nombre": "PANTALÓN MELISA", "precio": 125000 },
    "812106082": { "nombre": "PANTALÓN MARGARITA", "precio": 125000 },
    "812106081": { "nombre": "PANTALÓN AZALEA", "precio": 120000 },
    "812106084": { "nombre": "PANTALÓN CARGO KITTY SASTRERO", "precio": 130000 },
    "812106085": { "nombre": "PANTALÓN CARGO KITTY", "precio": 105000 },
    "812160000": { "nombre": "PANTALÓN JULIA ESPIGA", "precio": 135000 },
    "812106089": { "nombre": "PANTALÓN JULIA SASTRERO", "precio": 145000 },
    "812106090": { "nombre": "PANTALÓN JULIA TWILL", "precio": 130000 },
    "812106091": { "nombre": "PANTALÓN CAMPANILLA", "precio": 125000 },
    "812122216": { "nombre": "PANTALÓN POSADAS DENIM", "precio": 105000 },
    "812122217": { "nombre": "PANTALÓN POSADAS BULL", "precio": 110000 },
    "812122218": { "nombre": "PANTALÓN JARA", "precio": 130000 },
    "812122221": { "nombre": "PANTALÓN JARA BULL", "precio": 125000 },
    "812122214": { "nombre": "PANTALÓN CAMILA BULL", "precio": 115000 },
    "812122219": { "nombre": "PANTALÓN CAMILA DENIM", "precio": 115000 },
    "812525013": { "nombre": "PANTALÓN EVELYN", "precio": 140000 },
    "812106092": { "nombre": "PANTALÓN MORA", "precio": 95000 },
    "812106094": { "nombre": "PANTALÓN ARRAYAN", "precio": 95000 },
    "812122220": { "nombre": "PANTALÓN NARDO", "precio": 125000 },
    "811122282": { "nombre": "MONO CAMILA DENIM", "precio": 165000 },
    "U13122000": { "nombre": "CAMPERA CRUZ", "precio": 210000 },
    "U13122002": { "nombre": "SACO CEDRÓN BULL", "precio": 170000 },
    "U13122003": { "nombre": "CAMPERA LOBOS DENIM", "precio": 190000 },
    "U13122004": { "nombre": "CAMPERA LOBOS BULL", "precio": 190000 },
    "413101002": { "nombre": "CHALECO ACEBAL REVERSIBLE", "precio": 125000 },
    "413122011": { "nombre": "CHALECO REVERSIBLE CHUBUT", "precio": 130000 },
    "413122012": { "nombre": "CHALECO CAZADOR EPUYÉN", "precio": 130000 },
    "413142006": { "nombre": "CHALECO COLON", "precio": 145000 },
    "413106020": { "nombre": "CHALECO PARAÍSO REVERSIBLE", "precio": 125000 },
    "413106038": { "nombre": "CAMPERA SIMÓN", "precio": 185000 },
    "413122010": { "nombre": "PARKA ROCA", "precio": 170000 },
    "413134002": { "nombre": "CAMPERA PAMPEANA", "precio": 455000 },
    "413101022": { "nombre": "CAMPERA RAMALLO", "precio": 145000 },
    "413106039": { "nombre": "CAMPERA CARANDAY", "precio": 230000 },
    "413106041": { "nombre": "CAMPERA MISIONES HOMBRE", "precio": 220000 },
    "411106114": { "nombre": "CAMISACO ANTONIO", "precio": 180000 },
    "412122011": { "nombre": "CARGO CHASCOMUS", "precio": 125000 },
    "411104003": { "nombre": "CAMISA DE JEAN ARRAYÁN", "precio": 102000 },
    "411104004": { "nombre": "CAMISA DE JEAN ARRAYÁN BC", "precio": 102000 },
    "413134003": { "nombre": "CAMPERA TANDIL", "precio": 460000 },
    "413134004": { "nombre": "CAMPERA ARECO", "precio": 460000 },
    "413134005": { "nombre": "CHALECO MADARIAGA", "precio": 340000 },

    //Lista Perissinotto Feb 2025
    "821154000": { "nombre": "MOCASIN RUTA", "precio": 122400 },
    "821134119": { "nombre": "ZAPATILLA PARQUE", "precio": 124700 },
    "821134016": { "nombre": "ZAPATILLA PAMPA", "precio": 130400 },
    "821154001": { "nombre": "BOTINETA JUNIN", "precio": 130200 },
    "821134124": { "nombre": "BOTA ALAMEDA ALTA", "precio": 241700 },
    "821134186": { "nombre": "BOTA ERNESTINA", "precio": 143300 },
    "821134122": { "nombre": "BORCEGO ACOSTA", "precio": 146900 },
    "921134000": { "nombre": "MOCASIN ESCOLAR", "precio": 99600 },
    "921134001": { "nombre": "NAUTICO ESCOLAR", "precio": 102400 },
    "921134002": { "nombre": "GUILLERMINA ESCOLAR", "precio": 97300 },
    "421134140": { "nombre": "MOCASIN ROMERO", "precio": 114800 },
    "421134137": { "nombre": "BOTINETA CHIMBAS CUERO", "precio": 147200 },
    "421154001": { "nombre": "BOTINETA CHIMBAS GAMUZA", "precio": 143800 },
    "421134172": { "nombre": "BOTA RUCANELO", "precio": 223800 },
    "421134135": { "nombre": "ZAPATILLA BERCEO HOMBRE", "precio": 155200 },
    "421134136": { "nombre": "ZAPATO INDEPENDENCIA", "precio": 155700 },
    "421134164": { "nombre": "ZAPATILLA REALICO", "precio": 135700 },
    "421134141": { "nombre": "ZAPATILLA MATHEU", "precio": 164200 },

    //Lista Pionera Feb 2025
    "U81101000": { "nombre": "BOLSO COLSA", "precio": 188600 },
    "882116013": { "nombre": "MOCHILA REGIMIENTO", "precio": 158700 },
    "882134123": { "nombre": "MOCHILA CARMEN", "precio": 155700 },
    "882134125": { "nombre": "MORRAL NILQUE", "precio": 132300 },
    "471134000": { "nombre": "TERMERA OLMOS SUELA", "precio": 117300 },
    "U82116001": { "nombre": "TERMERA ARENA LONA", "precio": 104000 },
    "U82116004": { "nombre": "MORRAL QUILA", "precio": 119600 },
    "U89134001": { "nombre": "RIÑONERA PALACIO NAPA", "precio": 98900 },
    "889134103": { "nombre": "NECESSAIRE CUERO BURGOS", "precio": 86700 },
    "882116104": { "nombre": "TOTE ANTONIA", "precio": 82600 },
    "881134107": { "nombre": "FICHERO CARMELA", "precio": 72500 },
    "882134126": { "nombre": "MINI MORRAL CUNCO", "precio": 66700 },
    "U80134001": { "nombre": "BILLETERA CON CIERRE UNISEX", "precio": 49500 },
    "880134000": { "nombre": "BILLETERA PUNA", "precio": 39100 },
    "444134004": { "nombre": "CINTO BORDADO EN PUNTA LARREA 35MM", "precio": 37900 },
    "444145001": { "nombre": "CINTO SUELA ÑIRE 35 MM", "precio": 37900 },
    "478134100": { "nombre": "MATE PAMPERO BOCA ANCHA", "precio": 35700 },
    "478134103": { "nombre": "MATE CHAMPAQUI 3 PATAS", "precio": 35700 },
    "844134008": { "nombre": "CINTO SUELA GALA 40MM", "precio": 35900 },
    "444134008": { "nombre": "CINTO LITRE ARRUGADO 40MM", "precio": 30600 },
    "844134013": { "nombre": "CINTO CANELO FLOTER 30MM", "precio": 29900 },
    "444134009": { "nombre": "CINTO CAVEN GRABADO 40MM", "precio": 29500 },
    "478134101": { "nombre": "MATE PAMPERO BOCA CHICA", "precio": 30400 },
    "481134101": { "nombre": "BILLETERA ROJAS", "precio": 30400 },
    "444134006": { "nombre": "CINTO PASADOR COMBINADO 40MM", "precio": 28000 },
    "444145000": { "nombre": "CINTO SUELA COIHUE 40 MM", "precio": 29500 },
    "444145004": { "nombre": "CINTO SUELA TAPIAL 40MM", "precio": 29500 },
    "444145005": { "nombre": "CINTO CAVEN SUELA 40MM", "precio": 29500 },
    "444134010": { "nombre": "CINTO ARRAYAN COMBINADO 35MM", "precio": 26500 },
    "844134000": { "nombre": "CINTO SUELA YATAY 25 MM", "precio": 28800 },
    "489116005": { "nombre": "NECESSAIRE PICABUEY LONA GRANDE", "precio": 26000 },
    "444106000": { "nombre": "CINTO GALON SAUCE 40 MM", "precio": 24700 },
    "844145000": { "nombre": "CINTO SUELA MAITEN 40MM", "precio": 28800 },
    "444134003": { "nombre": "CINTO ALCORTA 35MM", "precio": 27400 },
    "844145002": { "nombre": "CINTO SUELA ALERCE 40MM", "precio": 26000 },
    "844134006": { "nombre": "CINTO SUELA PARAISO 35MM", "precio": 25800 },
    "489116004": { "nombre": "NECESSAIRE PICABUEY LONA CHICO", "precio": 23900 },
    "U44122002": { "nombre": "CINTO FRESNO GALON 30MM", "precio": 19600 },
    "444145003": { "nombre": "CINTO SUELA CIPRES 30 MM", "precio": 21400 },
    "944145000": { "nombre": "CINTO SUELA CHURQUI 30 MM", "precio": 18000 },
    "844134010": { "nombre": "CINTO 15MM", "precio": 17000 },
    "478163100": { "nombre": "BOMBILLA PAMPERO", "precio": 10000 },
    
    //Lista Purpura Feb 2025
    "442173002": { "nombre": "Bufanda Escocesa", "precio": 18000 },
    "942141000": { "nombre": "Bufanda Escolar", "precio": 18000 },
    "442173003": { "nombre": "Bufanda Espiga", "precio": 19700 },
    "442108000": { "nombre": "Cuello Doble Polar", "precio": 12000 },
    "441173006": { "nombre": "Gorra Chaplin (Lisa)", "precio": 19500 },
    "441143002": { "nombre": "Gorra Charles", "precio": 19500 },
    "441143000": { "nombre": "Gorra Lisa Ajustable", "precio": 19700 },
    "U41135002": { "nombre": "Gorro Calafate", "precio": 9600 },
    "U41135003": { "nombre": "Gorro Cordillera", "precio": 10000 },
    "U41135004": { "nombre": "Gorro Glaciar", "precio": 10000 },
    "U41135005": { "nombre": "Gorro Lenga", "precio": 10000 },
    "441141006": { "nombre": "Gorro Rocky (Forrado en Polar)", "precio": 10000 },
    "941106000": { "nombre": "Gorro Rocky Infantil", "precio": 7500 },
    "941135000": { "nombre": "Gorro Trenzado Infantil", "precio": 8000 },
    "443106000": { "nombre": "Guante De Hombre", "precio": 8500 },
    "843135000": { "nombre": "Guante De Mujer", "precio": 6000 },
    "943160004": { "nombre": "Guante Magico Infantil", "precio": 5500 },
    "842135003": { "nombre": "Manta Elisa", "precio": 49990 },
    "842106015": { "nombre": "Pañuelo Bianca", "precio": 18000 },
    "842106001": { "nombre": "Pañuelo De Seda Liso", "precio": 17000 },
    "842135002": { "nombre": "Ruana Invierno", "precio": 48000 },
    "U01122000": { "nombre": "Tote Gina", "precio": 42500 },
    "U01122001": { "nombre": "Tote Ines", "precio": 37000 },
    "U01106000": { "nombre": "Bolsa de lienzo n-1", "precio": 5700 },
    "U01106001": { "nombre": "Bolsa de lienzo n-2", "precio": 5900 },
    "U01106002": { "nombre": "Bolsa de lienzo n-3", "precio": 6900 },
    "U01106003": { "nombre": "Bolsa de lienzo n-4", "precio": 7200 },
    "411122204": { "nombre": "Campera San Justo", "precio": 95000 },
    "411540007": { "nombre": "Sweater Roble", "precio": 87000 },
    "411122213": { "nombre": "Cardigan Cedro", "precio": 89990 },
    "411122214": { "nombre": "Sweater Pino", "precio": 67000 },
    "411520002": { "nombre": "Campera Itambaé", "precio": 111000 },
    "411122215": { "nombre": "Sweater Caoba", "precio": 65000 },
    "411122160": { "nombre": "Sweater Morris", "precio": 57000 },
    "411514106": { "nombre": "Sweater Kay", "precio": 78000 },
    "411514105": { "nombre": "Sweater Brandon", "precio": 91000 },
    "411514104": { "nombre": "Campera Jose", "precio": 99990 },
    "411540006": { "nombre": "Sweater Sandalo", "precio": 94000 },
    "811135021": { "nombre": "Sweater Salvia", "precio": 62000 },
    "811521003": { "nombre": "Musculosa Brisa", "precio": 68000 },
    "811521004": { "nombre": "Cardigan Miel", "precio": 95000 },
    "811520131": { "nombre": "Polera Ambar", "precio": 95000 },
    "811540009": { "nombre": "Sweater Higo", "precio": 99990 },
    "811521005": { "nombre": "Sweater Canela", "precio": 95000 },
    "811521006": { "nombre": "Sweater Nieves", "precio": 93000 },
    "811122287": { "nombre": "Sweater Mangolia", "precio": 80000 },
    "811521007": { "nombre": "Sweater Cardamomo", "precio": 95500 },
    "811520132": { "nombre": "Polera Canelon", "precio": 76000 },
    "811520135": { "nombre": "Sweater Iris", "precio": 92000 },
    "911135000": { "nombre": "Sweater Escolar Escote V", "precio": 37000 },
    "911135001": { "nombre": "Cardigan Escolar", "precio": 44000 },
    "911122212": { "nombre": "Sweater Marea", "precio": 42000 },
    "911122214": { "nombre": "Cardigan Bosque", "precio": 45000 },
    "911122213": { "nombre": "Cardigan Cumbre", "precio": 45000 },

    //Lista Servipack Abril 
    "111140000": { "nombre": "REMERA M/CORTA CUELLO 'O' COLLARETA", "precio": 17400 },
    "111122002": { "nombre": "REMERA M/LARGA CUELLO 'O' COLLARETA", "precio": 18900 },
    "111105000": { "nombre": "REMERA M/LARGA TERMICA HO MICROSET", "precio": 22900 },
    "111138003": { "nombre": "CHOMBA M/CORTA (MICRO PIQUÉ PESCO)", "precio": 26000 },
    "111514004": { "nombre": "CHOMBA M/CORTA (JERSEY)", "precio": 23600 },
    "111138000": { "nombre": "CHOMBA M/LARGA (MICRO PIQUÉ PESCO)", "precio": 29900 },
    "111514003": { "nombre": "CHOMBA M/LARGA (JERSEY)", "precio": 25300 },
    "111118003": { "nombre": "BUZO BASICO (FRISA INVISIBLE)", "precio": 40600 },
    "111118006": { "nombre": "BUZO CUELLO CON CIERRE (FRISA INVISIBLE)", "precio": 51700 },
    "111118004": { "nombre": "CHALECO (FRISA INVISIBLE)", "precio": 46500 },
    "111118005": { "nombre": "CAMPERA CON CIERRE CUELLO ALTO (FRISA INV.)", "precio": 59300 },
    "111108003": { "nombre": "BUZO CUELLO CON CIERRE (POLAR)", "precio": 51700 },
    "111108004": { "nombre": "CHALECO (POLAR)", "precio": 46500 },
    "111108005": { "nombre": "CAMPERA CON CIERRE CUELLO ALTO (POLAR)", "precio": 59300 },
    "511122004": { "nombre": "DAMA REMERA M/CORTA CUELLO APLICADO", "precio": 16900 },
    "511122003": { "nombre": "DAMA REMERA M/LARGA CUELLO 'O' APLICADO", "precio": 17800 },
    "511138002": { "nombre": "DAMA CHOMBA M/CORTA (MICRO PIQUÉ PESCO)", "precio": 25600 },
    "511138003": { "nombre": "DAMA CHOMBA M/LARGA (MICRO PIQUÉ PESCO)", "precio": 27200 },
    "511118000": { "nombre": "DAMA BUZO BASICO (FRISA INVISIBLE)", "precio": 36900 },
    "511118001": { "nombre": "DAMA CHALECO (FRISA INVISIBLE)", "precio": 41800 },
    "513118000": { "nombre": "DAMA CAMPERA C.CIERRE CUELLO ALTO (FRISA INV.)", "precio": 46800 },

    //Lista Plateria Miramar Feb 2025
    "843174000": { "nombre": "Esclava abierta con Dije", "precio": 21000 },
    "843174001": { "nombre": "Esclava cerrada sin Dije", "precio": 16000 },
    "843174012": { "nombre": "Esclava chapa golpeada", "precio": 23000 },
    "845174001": { "nombre": "Aro grande Golpeado", "precio": 21000 },
    "845174002": { "nombre": "Aro chico Golpeado", "precio": 19000 },
    "843174002": { "nombre": "Brazalete golpeado Cincelado", "precio": 29000 },
    "843174004": { "nombre": "Brazalete Ancho", "precio": 35000 },
    "843174005": { "nombre": "Brazalete golpeado Liso", "precio": 29000 },
    "843173011": { "nombre": "Brazalete Basic cuero y apliques", "precio": 22000 },
    "843173012": { "nombre": "Brazalete cuero aplique circulo", "precio": 23000 },
    "843173013": { "nombre": "Pulsera cuero fina y apliques", "precio": 13000 },
    "441174003": { "nombre": "Cruz chica de alpaca bañada en plata", "precio": 18000 },
    "442174002": { "nombre": "Cruz grande de alpaca bañada en plata", "precio": 21000 },
    "845174003": { "nombre": "Dije chico", "precio": 23000 },
    "845174004": { "nombre": "Dije grande", "precio": 27000 },
    "845174011": { "nombre": "Dije grande silueta", "precio": 28000 },
    "U45134005": { "nombre": "Llavero cuero crudo", "precio": 27000 },
    "442174000": { "nombre": "Llavero", "precio": 29000 },
    "442174000": { "nombre": "Pasapañuelo Liso", "precio": 26000 },
    "442174001": { "nombre": "Pasapañuelo pensamiento", "precio": 26000 },
    "U42134000": { "nombre": "Pasapañuelo cuero", "precio": 14000 },
    "442106005": { "nombre": "Pañuelo estampado", "precio": 19000 },
    "842174001": { "nombre": "Gargantilla lisa", "precio": 23000 },
    "842134000": { "nombre": "Gargantilla tiras de gamuza", "precio": 23000 },
    "843174007": { "nombre": "Anillo grande", "precio": 21000 },
    "843174008": { "nombre": "Anillo Chico", "precio": 20000 },
    "843174011": { "nombre": "Anillo golpeado abierto", "precio": 22000 },
    "845174007": { "nombre": "Prendedor", "precio": 23000 },
    "842174002": { "nombre": "Rosario collar", "precio": 24000 },
    "842174017": { "nombre": "Decenario collar", "precio": 18000 },
    "843174009": { "nombre": "Pulsera decenario", "precio": 10000 },
    "843173014": { "nombre": "Pulsera de vidrio y medalla de alpaca", "precio": 12000 },
    "U43134000": { "nombre": "Pulsera cuero crudo", "precio": 22000 },
    "U43173000": { "nombre": "Pulsera piedra volcánica", "precio": 12000 },
    "842130000": { "nombre": "Tiento de hilo encerado", "precio": 7000 },
    "842174015": { "nombre": "Cadena Acero quirúrgico", "precio": 6000 },
    "U00174000": { "nombre": "Bombilla de alpaca", "precio": 21000 },
    "843174017": { "nombre": "Pulsera aluminio y cuero", "precio": 41000 },
    "843174018": { "nombre": "Anillo aluminio y cuero", "precio": 29000 },
    "843173010": { "nombre": "Pulsera trenzada gamuza", "precio": 12000 },
    "842174018": { "nombre": "Dije doble con piedra y tiento gamuza", "precio": 39000 },
    "U00174001": { "nombre": "Hebilla Cinturon", "precio": 38000 },
    "844134012": { "nombre": "Lonja de cuero crudo", "precio": 24000 },
    "842174019": { "nombre": "Dije piedra onix y alpaca", "precio": 16000 },
    "U43154000": { "nombre": "Tiento de gamuza", "precio": 5000 },
    "842154002": { "nombre": "Tiento multigamuza", "precio": 10000 },
    "843154000": { "nombre": "Pulsera tiras de gamuza combinadas", "precio": 14000 },
    "842174020": { "nombre": "Collar 5 argollas de alpaca", "precio": 37000 },
    "842173011": { "nombre": "Rosario collar semillas", "precio": 27000 },
    "842174022": { "nombre": "Decenario collar semillas", "precio": 17000 },
    "842174023": { "nombre": "Collar dije doble con tiras de gamuza", "precio": 29000 },
    "842174025": { "nombre": "Collar largo de semillas con dije grande", "precio": 38000 },
    "U45173084": { "nombre": "Cuchillo trenzado cuero crudo", "precio": 168000 },
    "U45173085": { "nombre": "Cuchillo ciervo y alpaca", "precio": 123000 },

    //Lista Paula Brea Feb 2025
    "U11106000": { "nombre": "Remera Primera Piel Unisex", "precio": 32000 },
    "U12106001": { "nombre": "Pantalon Primera Piel Unisex", "precio": 33400 },
    "911106031": { "nombre": "Remera Primera Piel Unisex", "precio": 27800 },
    "912106027": { "nombre": "Pantalon Primera Piel Unisex", "precio": 29000 },
    "U11106003": { "nombre": "Micropolar Otto Waffle Unisex", "precio": 81600 },
    "U11106004": { "nombre": "Micropolar Otto Unisex", "precio": 64800 },
    "U11106005": { "nombre": "Chaleco Campanario Unisex", "precio": 57600 },
    "U11106006": { "nombre": "Campera Campanario Polar Unisex", "precio": 67200 },
    "U11106007": { "nombre": "Medio Cierre Campanario Unisex", "precio": 55200 },
    "411106006": { "nombre": "Chaleco Cabildo", "precio": 76800 },
    "413106042": { "nombre": "Campera Cabildo", "precio": 98400 },
    "413106043": { "nombre": "Campera Ventisquera", "precio": 132000 },
    "411106007": { "nombre": "Rompeviento Ortiz", "precio": 69600 },
    "313106201": { "nombre": "Rompeviento Ortiz Ave", "precio": 93600 },
    "412106030": { "nombre": "Bermuda Viajero Secado Rapido", "precio": 93600 },
    "412106107": { "nombre": "Pantalon Travesia", "precio": 103200 },
    "412106029": { "nombre": "Pantalon Viajero Secado Rapido", "precio": 115200 },
    "412106032": { "nombre": "Pantalon Viajero Desmontable", "precio": 134400 },
    "411106108": { "nombre": "Camisa Actividad", "precio": 110400 },
    "411106109": { "nombre": "Camisa De Trabajo Suplex", "precio": 76800 },
    "811106265": { "nombre": "Rompeviento Maya", "precio": 67200 },
    "713106202": { "nombre": "Rompeviento Maya Aventura", "precio": 88800 },
    "811106269": { "nombre": "Camisa Montaña Supplex", "precio": 76800 },
    "812106080": { "nombre": "Pantalon Libertad", "precio": 105600 },
    "812106093": { "nombre": "Pantalon Mirador", "precio": 67200 },

    //Lista Riemerso
"412506002": { "nombre": "Pantalon ARECO gabardina c/lycra", "precio": 82000 },
    "412500050": { "nombre": "Pantalon HERRADURA denim c/lycra", "precio": 87000 },
    "412506003": { "nombre": "Pantalon JUNIN gabardina c/lLycra chupin", "precio": 85000 },
    "212192101": { "nombre": "Pantalon BAHIA gabardina 5 bolsillos clasico", "precio": 61000 },
    "412506001": { "nombre": "Pantalon BAHIA gabardina c/lycra 5 bols.", "precio": 70000 },
    "412541013": { "nombre": "Pantalon ALVARO denim c/lycra 5 bols. suavisado", "precio": 68000 },
    "412104013": { "nombre": "Pantalon CAMPO denim 5 bols.", "precio": 61000 },
    "412500053": { "nombre": "Pantalon QUEBRACHO recto Denim 5 Bols.", "precio": 78000 },
    "412500058": { "nombre": "Pantalon ORIGEN recto denim c/lycra 5 bols. - INV. 2025", "precio": 85000 },
    "412506020": { "nombre": "Pantalon MONTECITOS Corderoy 5 bols. - INV. 2025", "precio": 94000 },
    "412541015": { "nombre": "Pantalon ROCA denim c/lycra 5 bols. Negro", "precio": 72000 },
    "412541016": { "nombre": "Pantalon ROCA denim c/lycra 5 bols. Azul", "precio": 78000 },
    "412545000": { "nombre": "Pantalon SIMON denim c/lycra Chupin", "precio": 80000 },
    "412545002": { "nombre": "Pantalon FELIPE denim c/lycra 5 bols.", "precio": 84000 },
    "412506008": { "nombre": "Pantalon GARCIA denim c/lycra 5 bols. Chupin - INV. 2025", "precio": 89000 },
    "412500054": { "nombre": "Pantalon MATEO Cargo denim c/lycra", "precio": 99000 },
    "412500055": { "nombre": "Pantalon ROCA Cargo denim c/lycra", "precio": 98000 },
    "412500056": { "nombre": "Pantalon BOLIVAR Cargo c/Puño denim c/lycra", "precio": 99000 },
    "212124000": { "nombre": "Bombacha OLIVERA - Poplin", "precio": 69000 },
    "412500057": { "nombre": "Bombacha ZENON - Denim c/lycra", "precio": 82000 },
    "412506012": { "nombre": "Bombacha ZENON - Gabardina c/lycra", "precio": 78000 },
    "412506015": { "nombre": "Bombacha ZENON - Corderoy - INV. 2025", "precio": 105000 },
    "412506016": { "nombre": "Bombacha ZENON - Ripstop", "precio": 105000 },
    "212287101": { "nombre": "Bombacha ZELAYA - Gabardina", "precio": 62000 },
    "112541000": { "nombre": "Pantalon AMERICA denim c/lycra 5 bols.- Industria", "precio": 51000 },
    "812506009": { "nombre": "Pantalon SANTA ROSA gabardina c/lycra", "precio": 64000 },
    "812506000": { "nombre": "Pantalon CANDELARIA gabardina c/lycra", "precio": 75000 },
    "812506001": { "nombre": "Pantalon ALBARIZA gabardina c/lycra 5 Bols.", "precio": 70000 },
    "812529008": { "nombre": "Pantalon ALBARIZA denim localiado c/lycra", "precio": 64000 },
    "812529009": { "nombre": "Pantalon ALBARIZA denim azul c/lycra", "precio": 62000 },
    "812506035": { "nombre": "Pantalon SAUCE recto denim - INV. 2025", "precio": 87000 },
    "812101006": { "nombre": "Pantalon SAUCE recto gabardina - INV. 2025", "precio": 74000 },
    "812506036": { "nombre": "Pantalon CUMBRES recto denim - INV. 2025", "precio": 90000 },
    "812500055": { "nombre": "Pantalon CUMBRES recto corderoy - INV. 2025", "precio": 91000 },
    "812506037": { "nombre": "Pantalon ANDINA denim semioxford - INV. 2025", "precio": 90000 },
    "812101007": { "nombre": "Pantalon ANDINA semioxford Gab. - INV. 2025", "precio": 81000 },
    "812506038": { "nombre": "Pantalon TRIGAL muy angosto denim - INV. 2025", "precio": 82000 },
    "812500056": { "nombre": "Pantalon LLANURA semiancho - INV. 2025", "precio": 74000 },
    "812101008": { "nombre": "Pantalon SENDERO ancho - INV. 2025", "precio": 82000 },
    "812506039": { "nombre": "Pantalon SENDERO ancho corderoy - INV. 2025", "precio": 93000 },
    "812500057": { "nombre": "Pantalon SENDERO ancho denim - INV. 2025", "precio": 81000 },
    "812529018": { "nombre": "Pantalon FELICITAS denim c/lycra", "precio": 68000 },
    "812525002": { "nombre": "Pantalon MEDRANO denim azul c/lycra", "precio": 62000 },
    "812525001": { "nombre": "Pantalon VALLECITOS chupin denim c/lycra", "precio": 64000 },
    "812124005": { "nombre": "Pantalon cargo MAGDALENA Denim", "precio": 81000 },
    "812104000": { "nombre": "Pantalon CATALINA relajado - Denim c/lycra", "precio": 86000 },
    "812545000": { "nombre": "Pantalon JAZMIN denim 5 bol. Semi-Oxford", "precio": 81000 },
    "812506013": { "nombre": "Pantalon JAZMIN gabardina c/lycra 5 Bols.", "precio": 81000 },
    "812124003": { "nombre": "Pantalon cargo DONA denim", "precio": 97000 },
    "812182507": { "nombre": "Pantalon BARRACAS gabardina clasico", "precio": 54000 },
    "612124000": { "nombre": "Bombacha ALUMINE poplin - Clasica", "precio": 66000 },
    "812500054": { "nombre": "Bombacha MORA denim c/lycra", "precio": 70000 },
    "612124003": { "nombre": "Bombacha MORA poplin - Angosta", "precio": 68000 },
    "812122211": { "nombre": "Bombacha MARTINA poplin -  Flor", "precio": 98000 },
    "612124002": { "nombre": "Bombacha MARTINA poplin -  Ramillete", "precio": 85000 },
    "612283101": { "nombre": "Bombacha CORONDA gabardina", "precio": 57000 },
    "599541000": { "nombre": "Pantalon CAPITAL denim c/lycra 5 bols.- Industria", "precio": 51000 },
    "U11122002": { "nombre": "Campera CLASICA denim", "precio": 126000 },
    "O12281101": { "nombre": "Bombacha PAÑALERA gabardina", "precio": 35000 },
    "O12122018": { "nombre": "Bombacha PAÑALERA Denim", "precio": 35000 },
    "912101012": { "nombre": "Bombacha ZELAYA Gabardina", "precio": 40500 },
    "912122014": { "nombre": "Bombacha ZELAYA Denim", "precio": 41500 },
    "912500003": { "nombre": "Pantalon MANZANARES denim c/lycra - Unisex", "precio": 47000 },
    "912506017": { "nombre": "Pantalon chino BRUNO gabardina c/lycra", "precio": 54000 },
    "912122015": { "nombre": "Pantalon NARANJO denim ancho", "precio": 55000 },
    "912500009": { "nombre": "Pantalon NARANJO rayado ancho", "precio": 55000 },
    "912122016": { "nombre": "Pantalon LIMA cargo corderoy", "precio": 78000 },
    "912500007": { "nombre": "Jardinero TILO denim", "precio": 98000 },

    //Lista Puro junio 2024
    "811122226": { "nombre": "REMERA ORQUIDEA", "precio": 38800 },
    "811122227": { "nombre": "REMERA GARDENIA", "precio": 34300 },
    "811122228": { "nombre": "REMERA PASIONARIA", "precio": 39200 },
    "811147020": { "nombre": "MUSCULOSA LLANURA", "precio": 33400 },
    "812106078": { "nombre": "CALZA ARCE", "precio": 40900 },
    "812139010": { "nombre": "SHORT PALMAR", "precio": 60900 },
    "812139011": { "nombre": "JOGGING MORA", "precio": 74800 },
    "811106256": { "nombre": "MUSCULOSA MAREA", "precio": 33500 },
    "812106079": { "nombre": "CALZA AUSTRAL", "precio": 52900 },
    "811122229": { "nombre": "REMERON HORTENSIA", "precio": 43300 },
    "811139120": { "nombre": "BUZO ALBA", "precio": 70200 },
    "811139119": { "nombre": "BUZO LITORAL OVZ", "precio": 76400 },
    "411122184": { "nombre": "REMERA BELTRAN", "precio": 46600 },
    "411122185": { "nombre": "REMERA MARMOL", "precio": 40300 },
    "411139005": { "nombre": "BUZO GRANADEROS", "precio": 67900 },
    "411139006": { "nombre": "BUZO ARCOS", "precio": 74000 }
}
*/


/*function buscarPrecio() {
    const codigo = document.getElementById("codigo").value.trim().toUpperCase();
    const resultado = document.getElementById("resultado");

    if (ropa[codigo]) {
      const prenda = ropa[codigo];
      resultado.textContent = `Código: ${codigo} - ${prenda.nombre} cuesta $${prenda.precio}`;
    } else {
      resultado.textContent = `No se encontró una prenda con el código "${codigo}".`;
    }
  }*/

/*
function buscarPrecio() {
    const codigo = document.getElementById("codigo").value.trim().toUpperCase();
    const resultado = document.getElementById("resultado");

    if (ropa[codigo]) {
      const prenda = ropa[codigo];
      const precio = prenda.precio;
      const descuento10 = (precio * 0.90).toFixed(2);
      const descuento20 = (precio * 0.80).toFixed(2);
      const cuotas3 = (precio / 3).toFixed(2);
      const cuotas6 = (precio / 6).toFixed(2);
      const reintegro20 = (precio * 0.20).toFixed(2);
      resultado.innerText= 
      `Prenda: ${prenda.nombre}
      Precio original: $${precio.toFixed(2)}
      Precio con 10% de descuento: $${descuento10}
      Precio con 20% de descuento: $${descuento20}
      3 cuotas sin interés de: $${cuotas3}
      6 cuotas sin interés de: $${cuotas6}
      Reintegro del 20%: $${reintegro20}`;
       
    } else {
      resultado.textContent = `No se encontró una prenda con el código "${codigo}".`;
     }
}*/



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