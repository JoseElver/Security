<template>
  <div id="app">
    <v-app id="inspire">
      <form name="f1" id="f1">
        <div>
          <v-card>
            <v-card-title class="principal"> Filtros: </v-card-title>
            <div class="form-group">
              <v-layout>
                <v-flex xs12 sm2>
                  <label class="titulo">Departamento</label>
                  <select
                    v-model="depar"
                    class="filtro form-control"
                    id="departamentos"
                    @click="listaDepartamento()"
                  >
                    <option value="AMAZONAS">AMAZONAS</option>
                    <option value="ANTIOQUIA">ANTIOQUIA</option>
                    <option value="ARAUCA">ARAUCA</option>
                    <option value="ATLANTICO">ATLÁNTICO</option>
                    <option value="BOLIVAR">BOLÍVAR</option>
                    <option value="BOYACA">BOYACÁ</option>
                    <option value="CALDAS">CALDAS</option>
                    <option value="CAQUETA">CAQUETÁ</option>
                    <option value="CASANARE">CASANARE</option>
                    <option value="CAUCA">CAUCA</option>
                    <option value="CESAR">CESAR</option>
                    <option value="CHOCO">CHOCÓ</option>
                    <option value="CORDOBA">CÓRDOBA</option>
                    <option value="CUNDINAMARCA">CUNDINAMARCA</option>
                    <option value="DISTRITO_CAPITAL">DISTRITO CAPITAL</option>
                    <option value="GUAINIA">GUAINÍA</option>
                    <option value="GUAJIRA">GUAJIRA</option>
                    <option value="GUAVIARE">GUAVIARE</option>
                    <option value="HUILA">HUILA</option>
                    <option value="MAGDALENA">MAGDALENA</option>
                    <option value="META">META</option>
                    <option value="NARINO">NARIÑO</option>
                    <option value="NORTE_DE_SANTANDER">
                      NORTE DE SANTANDER
                    </option>
                    <option value="PUTUMAYO">PUTUMAYO</option>
                    <option value="QUINDIO">QUINDÍO</option>
                    <option value="RISARALDA">RISARALDA</option>
                    <option value="SAN_ANDRES_Y_PROVIDENCIA">
                      SAN ANDRÉS Y PROVIDENCIA
                    </option>
                    <option value="SANTANDER">SANTANDER</option>
                    <option value="SUCRE">SUCRE</option>
                    <option value="TOLIMA">TOLIMA</option>
                    <option value="VALLE_DEL_CAUCA">VALLE DEL CAUCA</option>
                    <option value="VAUPES">VAUPÉS</option>
                    <option value="VICHADA">VICHADA</option>
                  </select>
                </v-flex>
                <v-flex xs12 sm2>
                  <label class="titulo2">Municipio</label>
                  <select
                    id="municipios"
                    class="filtro2 form-control"
                    @click="listaMunicipio()"
                    v-model="muni"
                  >
                    <option value="0">SELECCIONE</option>
                  </select>
                </v-flex>
                <v-flex xs12 sm2>
                  <label class="titulo3">Género</label>
                  <select
                    id="genero"
                    class="filtro3 form-control"
                    @click="listaGenero()"
                    v-model="gene"
                  >
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMENINO">FEMENINO</option>
                  </select>
                </v-flex>
                <v-flex xs12 sm2>
                  <label class="titulo4">Edad</label>
                  <select
                    id="edad"
                    class="filtro4 form-control"
                    @click="listaEdad()"
                    v-model="eda"
                  >
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                  </select>
                </v-flex>
                <v-flex xs12 sm1 class="filtro5">
                  <label class="titulo5">Experiencia</label>
                  <select
                    id="anios"
                    class="filtro5 form-control"
                    @click="listaAnios()"
                    v-model="anio"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                  <label class="letrero1">Años</label>
                </v-flex>
                <v-flex xs12 sm1 class="filtro6">
                  <label class="titulo6">laboral</label>
                  <select
                    id="meses"
                    class="filtro6 form-control"
                    @click="listaMeses()"
                    v-model="mes"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="0">10</option>
                    <option value="1">11</option>
                  </select>
                  <label class="letrero2">Meses</label>
                </v-flex>
              </v-layout>
            </div>
          </v-card>
          <div></div>
          <v-data-table
            :headers="headers"
            :items="usuarios"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:[`item.botones`]="{ item }">
              <v-icon
                medium
                class="pdf mr-3"
                @click.prevent="generarPdf(item.key)"
                color="red darken-2"
              >
                mdi-file-pdf
              </v-icon>
            </template>
          </v-data-table>
          <div @click="recorrerVector()" class="botonDescargar">
          <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey lighten-1"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Descargar todo
      <v-icon
        right
        dark
      >
        mdi-cloud-download
      </v-icon>
    </v-btn>
          </div>
        </div>
      </form>
    </v-app>
  </div>
</template>

<script>
import { db } from "../firebaseDb";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import { storage } from "../firebaseDb";
const ref = storage.ref();

export default {
  data() {
    return {
      usuarios: [],
      hidden: false,
      loader: null,
      loading: false,
      loading3: false,
      imagenes: [],
      imagenesFamilia: [],
      imagenesVivienda: [],
      docIdentidad: [],
      docLaboral: [],
      docAcademico: [],
      docCursos: [],
      vector: [],
      docExperiencias: [],
      search: "",
      mes: "",
      anio: "",
      depar: "",
      muni: "",
      gene: "",
      eda: "",
      headers: [
        {
          text: "Tipo de documento",
          align: "left",
          sortable: false,
          value: "tipodocumento",
        },
        { text: "Documento", value: "documento" },
        { text: "Primer nombre", value: "primernombre" },
        { text: "Segundo nombre", value: "segundonombre" },
        { text: "Primer apellido", value: "primerapellido" },
        { text: "Segundo apellido", value: "segundoapellido" },
        { text: "Departamento", value: "departamento" },
        { text: "Municipio", value: "municipio" },
        { text: "Género", value: "genero" },
        { text: "Edad", value: "edad" },
        { text: "Años", value: "year" },
        { text: "Meses", value: "meses" },
        { text: "Descargar PDF", value: "botones", sortable: false },
      ],
      departamentos_AMAZONAS: [
        "EL ENCANTO",
        "LA CHORRERA",
        "LA PEDRERA",
        "LA VICTORIA",
        "LETICIA",
        "MIRITI-PARANA",
        "PUERTO ALEGRIA",
        "PUERTO ARICA",
        "PUERTO NARIÑO",
        "PUERTO SANTANDER",
        "TARAPACA",
      ],

      departamentos_ANTIOQUIA: [
        "CAUCASIA",
        "EL BAGRE",
        "NECHI",
        "TARAZA",
        "ZARAGOZA",
        "CARACOLI",
        "MACEO",
        "PUERTO BERRIO",
        "PUERTO NARE",
        "PUERTO TRIUNFO",
        "YONDO",
        "AMALFI",
        "ANORI",
        "CISNEROS",
        "REMEDIOS",
        "SAN ROQUE",
        "SANTO DOMINGO",
        "SEGOVIA",
        "VEGACHI",
        "YALI",
        "YOLOMBO",
        "ANGOSTURA",
        "BELMIRA",
        "BRICEÑO",
        "CAMPAMENTO",
        "CAROLINA DEL PRINCIPE",
        "DONMATIAS",
        "ENTRERRIOS",
        "GOMEZ PLATA",
        "GUADALUPE",
        "ITUANGO",
        "SAN ANDRES DE CUERQUIA",
        "SAN JOSE DE LA MONTAÑA",
        "SAN PEDRO DE LOS MILAGROS",
        "SANTA ROSA DE OSOS",
        "TOLEDO",
        "VALDIVIA",
        "YARUMAL",
        "ABRIAQUI",
        "ANZA",
        "ARMENIA",
        "BURITICA",
        "CAICEDO",
        "CAÑASGORDAS",
        "DABEIBA",
        "EBEJICO",
        "FRONTINO",
        "GIRALDO",
        "HELICONIA",
        "LIBORINA",
        "OLAYA",
        "PEQUE",
        "SABANALARGA",
        "SAN JERONIMO",
        "SANTA FE DE ANTIOQUIA",
        "SOPETRAN",
        "URAMITA",
        "ABEJORRAL",
        "ALEJANDRIA",
        "ARGELIA",
        "CARMEN DE VIBORAL",
        "COCORNA",
        "CONCEPCION",
        "GRANADA",
        "GUARNE",
        "GUATAPE",
        "LA CEJA",
        "LA UNION",
        "MARINILLA",
        "NARIÑO",
        "EL PEÑOL",
        "EL RETIRO",
        "RIONEGRO",
        "SAN CARLOS",
        "SAN FRANCISCO",
        "SAN LUIS",
        "SAN RAFAEL",
        "SAN VICENTE",
        "SANTUARIO",
        "SONSON",
        "AMAGA",
        "ANDES",
        "ANGELOPOLIS",
        "BETANIA",
        "BOLIVAR",
        "BETULIA",
        "CARAMANTA",
        "CONCORDIA",
        "FREDONIA",
        "HISPANIA",
        "JARDIN",
        "JERICO",
        "LA PINTADA",
        "MONTEBELLO",
        "PUEBLORRICO",
        "SALGAR",
        "SANTA BARBARA",
        "TAMESIS",
        "TARSO",
        "TITIRIBI",
        "URRAO",
        "VALPARAISO",
        "VENECIA",
        "APARTADO",
        "ARBOLETES",
        "CAREPA",
        "CHIGORODO",
        "MURINDO",
        "MUTATA",
        "NECOCLI",
        "SAN JUAN DE URABA",
        "SAN PEDRO DE URABA",
        "TURBO",
        "VIGIA DEL FUERTE",
        "BARBOSA",
        "BELLO",
        "CALDAS",
        "COPACABANA",
        "ENVIGADO",
        "GIRARDOTA",
        "ITAGÜI",
        "LA ESTRELLA",
        "MEDELLÍN",
        "SABANETA",
      ],
      departamentos_ARAUCA: [
        "ARAUCA",
        "ARAUQUITA",
        "CRAVO NORTE",
        "FORTUL",
        "PUERTO RONDON",
        "SARAVENA",
        "TAME",
      ],
      departamentos_ATLANTICO: [
        "BARRANQUILLA",
        "BARANOA",
        "CAMPO DE LA CRUZ",
        "CANDELARIA",
        "GALAPA",
        "JUAN DE ACOSTA",
        "LURUACO",
        "MALAMBO",
        "MANATI",
        "PALMAR DE VARELA",
        "PIOJO",
        "POLONUEVO",
        "PONEDERA",
        "PUERTO COLOMBIA",
        "REPELON",
        "SABANAGRANDE",
        "SABANALARGA",
        "SANTA LUCIA",
        "SANTO TOMAS",
        "SOLEDAD",
        "SUAN",
        "TUBARA",
        "USIACURI",
      ],
      departamentos_BOLIVAR: [
        "ACHI",
        "ALTOS DEL ROSARIO",
        "ARENAL",
        "ARJONA",
        "ARROYOHONDO",
        "BARRANCO DE LOBA",
        "BRAZUELO DE PAPAYAL",
        " CALAMAR",
        "CANTAGALLO",
        "EL CARMEN DE BOLIVAR",
        "CARTAGENA DE INDIAS D.T.",
        "CICUCO",
        "CLEMENCIA",
        "CORDOBA",
        "EL GUAMO",
        "EL PEÑON",
        "HATILLO DE LOBA",
        "MAGANGUE",
        "MAHATES",
        "MARGARITA",
        "MARIA LA BAJA",
        "MONTECRISTO",
        "MORALES",
        "NOROSI",
        "PINILLOS",
        "REGIDOR",
        "RIO VIEJO",
        "SAN CRISTOBAL",
        "SAN ESTANISLAO",
        "SAN FERNANDO",
        "SAN JACINTO",
        "SAN JACINTO DEL CAUCASAN",
        "JUAN NEPOMUCENO",
        "SAN MARTIN DE LOBA",
        "SAN PABLO",
        "SANTA CATALINA",
        "SANTA CRUZ DE MOMPOX",
        "SANTA ROSA",
        "SANTA ROSA DEL SUR",
        "SIMITI",
        "SOPLAVIENTO",
        "TALAIGUA NUEVO",
        "TIQUISIO",
        "TURBACO",
        "TURBANA",
        "VILLANUEVA",
        "ZAMBRANO",
      ],
      departamentos_BOYACA: [
        "ALMEIDA",
        "AQUITANIA",
        "ARCABUCO",
        "BELEN",
        "BERBEO",
        "BETEITIVA",
        "BOAVITA",
        "BOYACA",
        "BRICEÑO",
        "BUENAVISTA",
        " BUSBANZA",
        "CALDAS",
        "CAMPOHERMOSO",
        "CERINZA",
        "CHINAVITA",
        "CHIQUINQUIRA",
        "CHIQUIZA",
        "CHISCAS",
        "CHITA",
        "CHITARAQUE",
        "CHIVATA",
        "CHIVOR",
        " CIENEGA",
        "COMBITA",
        "COPER",
        "CORRALES",
        "COVARACHIA",
        "CUBARA",
        "CUCAITA",
        "CUITIVA",
        "DUITAMA",
        "EL COCUY",
        "EL ESPINO",
        "FIRAVITOBA",
        "FLORESTA",
        "GACHANTIVA",
        "GAMEZA",
        "GARAGOA",
        "GUACAMAYAS",
        "GUATEQUE",
        "GUAYATA",
        "GÜICAN",
        "IZA",
        "JENESANO",
        "JERICO",
        "LA CAPILLA",
        "LA UVITA",
        "LA VICTORIA",
        "LABRANZAGRANDE",
        "MACANAL",
        "MARIPI",
        "MIRAFLORES",
        "MONGUA",
        "MONGUI",
        "MONIQUIRA",
        "MOTAVITA",
        "MUZO",
        "NOBSA",
        "NUEVO COLON",
        "OICATA",
        "OTANCHE",
        "PACHAVITA",
        "PAEZ",
        "PAIPA",
        "PAJARITO",
        "PANQUEBA",
        "PAUNA",
        "PAYA",
        "PAZ DE RIO",
        "PESCA",
        "PISBA",
        "PUERTO BOYACA",
        "QUIPAMA",
        "RAMIRIQUI",
        "RAQUIRA",
        "RONDON",
        "SABOYA",
        "SACHICA",
        "SAMACA",
        "SAN EDUARDO",
        "SAN JOSE DE PARE",
        "SAN LUIS DE GACENO",
        "SAN MATEO",
        "SAN MIGUEL DE SEMA",
        " SAN PABLO DE BORBUR",
        "SANTA MARIA",
        "SANTA ROSA DE VITERBO",
        "SANTA SOFIA",
        "SANTANA",
        "SATIVANORTE",
        "SATIVASUR",
        "SIACHOQUE",
        "SOATA",
        "SOCHA",
        "SOCOTA",
        "SOGAMOSO",
        "SOMONDOCO",
        "SORA",
        "SORACA",
        "SOTAQUIRA",
        "SUSACON",
        "SUTAMARCHAN",
        "SUTATENZA",
        "TASCO",
        "TENZA",
        "TIBANA",
        "TIBASOSA",
        " TINJACA",
        "TIPACOQUE",
        "TOCA",
        "TOGÜI",
        "TOPAGA",
        "TOTA",
        "TUNJA",
        "TUNUNGUA",
        "TURMEQUE",
        "TUTA",
        "TUTAZA",
        "UMBITA",
        "VENTAQUEMADA",
        "VILLA DE LEYVA",
        "VIRACACHA",
        "ZETAQUIRA",
      ],
      departamentos_CALDAS: [
        "AGUADAS",
        "ANSERMA",
        "ARANZAZU",
        "BELALCAZAR",
        "CHINCHINA",
        "FILADELFIA",
        "LA DORADA",
        "LA MERCED",
        "MANIZALES",
        "MANZANARES",
        "MARMATO",
        "MARQUETALIA",
        "MARULANDA",
        "NEIRA",
        "NORCASIA",
        "PACORA",
        "PALESTINA",
        "PENSILVANIA",
        "RIOSUCIO",
        "RISARALDA",
        "SALAMINA",
        "SAMANA SAN JOSE",
        "SUPIA",
        "VICTORIA",
        "VILLAMARIA",
        "VITERBO",
      ],
      departamentos_CAQUETA: [
        "ALBANIA",
        "BELEN DE LOS ANDAQUIES",
        "CARTAGENA DEL CHAIRA",
        "CURILLO",
        "EL DONCELLO",
        "EL PAUJIL",
        "FLORENCIA",
        "LA MONTAÑITA",
        "MORELIA",
        "PUERTO MILAN",
        "PUERTO RICO",
        "SAN JOSE DEL FRAGUA",
        "SAN VICENTE DEL CAGUAN",
        "SOLANO",
        "SOLITA",
        "VALPARAISO",
      ],
      departamentos_CASANARE: [
        "AGUAZUL",
        "HATO COROZAL",
        "CHAMEZA",
        "PORE",
        "LA SALINA",
        "SACAMA",
        "PAZ DE ARIPORO",
        "MONTERREY",
        "OROCUE",
        "MANI",
        "SAN LUIS DE PALENQUE",
        "TRINIDAD",
        "VILLANUEVA",
        "YOPAL",
        "RECETOR",
        "SABANALARGA",
        "TAMARA",
        "NUNCHIA",
        "TAURAMENA",
      ],
      departamentos_CAUCA: [
        "ALMAGUER",
        "ARGELIA",
        "BALBOA",
        "BOLIVAR",
        "BUENOS AIRES",
        "CAJIBIO",
        "CALDONO",
        "CALOTO",
        "CORINTO",
        "EL TAMBO",
        "FLORENCIA",
        "GUACHENE",
        "GUAPI",
        "INZA",
        "JAMBALO",
        "LA SIERRA",
        "LA VEGA",
        "LOPEZ DE MICAY",
        "MERCADERES",
        "MIRANDA",
        "MORALES",
        "PADILLA",
        "PAEZ",
        "PATIA",
        "PIAMONTE",
        "PIENDAMO",
        "POPAYAN",
        "PUERTO TEJADA",
        "PURACE",
        "ROSAS",
        "SAN SEBASTIAN",
        "SANTA ROSA",
        "SANTANDER DE QUILICHAO",
        "SILVIA",
        "SOTARA",
        "SUAREZ",
        "SUCRE",
        "TIMBIO",
        "TIMBIQUI",
        "TORIBIO",
        "TOTORO",
        "VILLA RICA",
      ],
      departamentos_CESAR: [
        "AGUACHICA",
        "ASTREA",
        "BECERRIL",
        "BOSCONIA",
        "CHIMICHAGUA",
        "CHIRIGUANA",
        "CODAZZI",
        "CURUMANI",
        "EL COPEY",
        "EL PASO GAMARRA",
        "GONZALEZ",
        "LA GLORIA",
        "LA JAGUA DE IBIRICO",
        "LA PAZ",
        "MANAURE",
        "BALCON DEL CESAR",
        "PAILITAS",
        "PELAYA",
        "PUEBLO BELLO",
        "RIO DE ORO",
        " SAN ALBERTO",
        " SAN DIEGO",
        " SAN MARTIN",
        " TAMALAMEQUE",
        " VALLEDUPAR",
      ],
      departamentos_CHOCO: [
        "ACANDI",
        "ALTO BAUDO (PIE DE PATO];",
        "ATRATO",
        "BAGADO",
        "BAHIA SOLANO",
        "BAJO BAUDO (PIZARRO];",
        "BOJAYA (BELLAVISTA];",
        "CANTON DE SAN PABLO",
        "EL CARMEN DE ATRATO",
        "CERTEGUI",
        "CONDOTO",
        "EL CARMEN DEL DARIEN",
        "ISTMINA",
        "JURADO",
        "LITORAL DE SAN JUAN",
        "LLORO",
        "MEDIO ATRATO",
        "MEDIO BAUDO",
        "MEDIO SAN JUAN",
        "NOVITA",
        "NUQUI",
        "QUIBDO",
        "RIOSUCIO",
        "RIO IRO",
        "RIO QUITO",
        "SAN JOSE DEL PALMAR",
        "SIPI",
        "TADO",
        "UNGUIA",
        "UNION PANAMERICANA",
      ],
      departamentos_CORDOBA: [
        "AYAPEL",
        "BUENAVISTA",
        "CANALETE",
        "CERETE",
        "CHIMA",
        "CHINU",
        "CIENAGA DE ORO",
        "COTORRA",
        "LA APARTADA",
        "LOS CORDOBAS",
        "MOMIL",
        "MOÑITOS",
        "MONTELIBANO",
        "MONTERIA",
        "PLANETA RICA",
        "PUEBLO NUEVO",
        "PUERTO ESCONDIDO",
        "PUERTO LIBERTADOR",
        "PURISIMA",
        " SAHAGUN",
        "SAN ANDRES DE SOTAVENTO",
        "SAN ANTERO",
        "SAN BERNARDO DEL VIENTO",
        "SAN CARLOS",
        "SAN JOSE DE URE",
        "SAN PELAYO",
        "SANTA CRUZ DE LORICA",
        "TIERRALTA",
        "TUCHIN",
        "VALENCIA",
      ],
      departamentos_CUNDINAMARCA: [
        "AGUA DE DIOS",
        "ALBA",
        "ANAPOIMA",
        "ANOLAIMA",
        "APULO",
        "ARBELAEZ",
        "BELTRAN",
        "BITUIMA",
        "BOJACA",
        "CABRERA",
        "CACHIPAY",
        "CAJICA",
        "CAPARRAPI",
        "CAQUEZA",
        "CARMEN DE CARUPA",
        "CHAGUANI",
        "CHIA",
        "CHIPAQUE",
        "CHOACHI",
        "CHOCONTA",
        "COGUA",
        "COTA",
        "CUCUNUBA",
        "EL COLEGIO",
        "EL PEÑON",
        "EL ROSAL",
        "FACATATIVA",
        "FOMEQUE",
        "FOSCA",
        "FUNZA",
        "FUQUENE",
        "FUSAGASUGA",
        "GACHALA",
        "GACHANCIPA",
        "GACHETA",
        "GAMA",
        "GIRARDOT",
        "GRANADA",
        "GUACHETA",
        "GUADUAS",
        "GUASCA",
        "GUATAQUI",
        "GUATAVITA",
        "GUAYABAL DE SIQUIMA",
        "GUAYABETAL",
        "GUTIERREZ",
        "JERUSALEN",
        "JUNIN",
        "LA CALERA",
        "LA MESA",
        "LA PALMA",
        "LA PEÑA",
        "LA VEGA",
        "LENGUAZAQUE",
        "MACHETA",
        "MADRID",
        "MANTA",
        "MEDINA",
        "MOSQUERA",
        "NARIÑO",
        "NEMOCON",
        "NILO",
        "NIMAIMA",
        "NOCAIMA",
        "PACHO",
        "PAIME",
        "PANDI",
        "PARATEBUENO",
        "PASCA",
        "PUERTO SALGAR",
        "PULI",
        "QUEBRADANEGRA",
        "QUETAME",
        "QUIPILE",
        "RICAURTE",
        "SAN ANTONIO DEL TEQUENDAMA",
        "SAN BERNARDO",
        "SAN CAYETANO",
        "SAN FRANCISCO",
        "SAN JUAN DE RIOSECO",
        "SASAIMA",
        "SESQUILE",
        "SIBATE",
        "SILVANIA",
        "SIMIJACA",
        "SOACHA",
        "SOPO",
        "SUBACHOQUE",
        "SUESCA",
        "SUPATA",
        "SUSA",
        "SUTATAUSA",
        "TABIO",
        "TAUSA",
        "TENA",
        "TENJO",
        "TIBACUY",
        "TIBIRITA",
        "TOCAIMA",
        "TOCANCIPA",
        "TOPAIPI",
        "UBALA",
        "UBAQUE",
        "UBATE",
        "UNE",
        "UTICA",
        "VENECIA",
        "VERGARA",
        "VIANI",
        "VILLAGOMEZ",
        " VILLAPINZON",
        "VILLETA",
        "VIOTA",
        "YACOPI",
        "ZIPACON",
        "ZIPAQUIRA",
      ],
      departamentos_DISTRITO_CAPITAL: ["BOGOTÁ"],
      departamentos_GUAINIA: [
        "BARRANCO MINAS",
        "CACAHUAL",
        "INIRIDA",
        "LA GUADALUPE",
        "MAPIRIPANA",
        "MORICHAL",
        "PANA PANA",
        "PUERTO COLOMBIA",
        "SAN FELIPE",
      ],
      departamentos_GUAJIRA: [
        "ALBANIA",
        "BARRANCAS",
        "DIBULLA",
        "DISTRACCION",
        "EL MOLINO",
        "FONSECA",
        "HATONUEVO",
        "LA JAGUA DEL PILAR",
        " MAICAO",
        "MANAURE",
        "RIOHACHA",
        "SAN JUAN DEL CESAR",
        "URIBIA",
        "URUMITA",
        "VILLANUEVA",
      ],
      departamentos_GUAVIARE: [
        "CALAMAR",
        "EL RETORNO",
        "MIRAFLORES",
        "SAN JOSE DEL GUAVIARE",
      ],
      departamentos_HUILA: [
        "ACEVEDO",
        "AGRADO",
        "AIPE",
        "ALGECIRAS",
        "ALTAMIRA",
        "BARAYA",
        "CAMPOALEGRE",
        "COLOMBIA",
        "ELIAS",
        "GARZON",
        " GIGANTE",
        "GUADALUPE",
        "HOBO",
        "IQUIRA",
        "ISNOS",
        "LA ARGENTINA",
        "LA PLATA",
        "NATAGA",
        "NEIVA",
        "OPORAPA",
        "PAICOL",
        "PALERMO",
        "PALESTINA",
        "PITAL",
        "PITALITO",
        "RIVERA",
        "SALADOBLANCO",
        "SAN AGUSTIN",
        "SANTA MARIA",
        "SUAZA",
        "TARQUI",
        "TELLO",
        "TERUEL",
        "TESALIA",
        "TIMANA",
        "VILLAVIEJA",
        "YAGUARA",
      ],
      departamentos_MAGDALENA: [
        "ALGARROBO",
        "ARACATACA",
        "ARIGUANI",
        "CERRO DE SAN ANTONIO",
        "CHIBOLO",
        "CIENAGA",
        "CONCORDIA",
        "EL BANCO",
        "EL PIÑON",
        "EL RETEN",
        "FUNDACION",
        "GUAMAL",
        "NUEVA GRANADA",
        "PEDRAZA",
        "PIJIÑO DEL CARMEN",
        "PIVIJAY",
        "PLATO",
        "PUEBLO VIEJO",
        "REMOLINO",
        "SABANAS DE SAN ANGEL",
        "SALAMINA",
        "SAN SEBASTIAN DE BUENAVISTA",
        "SANTA ANA",
        "SANTA BARBARA DE PINTO",
        "SANTA MARTA",
        "SAN ZENON",
        "SITIONUEVO",
        "TENERIFE",
        "ZAPAYAN",
        "ZONA BANANERA",
      ],
      departamentos_META: [
        "ACACIAS",
        "BARRANCA DE UPIA",
        "CABUYARO",
        "CASTILLA LA NUEVA",
        "CUBARRAL",
        "CUMARAL",
        "EL CALVARIO",
        "EL CASTILLO",
        "EL DORADO",
        "FUENTE DE ORO",
        "GRANADA",
        "GUAMAL",
        "LA MACARENA",
        "LA URIBE",
        "LEJANIAS",
        "MAPIRIPAN",
        "MESETAS",
        "PUERTO CONCORDIA",
        "PUERTO GAITAN",
        "PUERTO LLERAS",
        "PUERTO LOPEZ",
        "PUERTO RICO",
        "RESTREPO",
        "SAN CARLOS DE GUAROA",
        "SAN JUAN DE ARAMA",
        "SAN JUANITO",
        "SAN MARTIN",
        "VILLAVICENCIO",
        "VISTA HERMOSA",
      ],
      departamentos_NARINO: [
        "ALDANA",
        "ANCUYA",
        "ARBOLEDA (BERRUECOS];",
        "BARBACOAS",
        "BELEN",
        "BUESACO",
        "CHACHAGÜI",
        "COLON (GENOVA];",
        "CONSACA",
        "CONTADERO",
        "CORDOBA",
        "CUASPUD (CARLOSAMA];",
        "CUMBAL",
        "CUMBITARA",
        "EL CHARCO",
        "EL PEÑOL",
        "EL ROSARIO",
        "EL TABLON DE GOMEZ",
        "EL TAMBO",
        "FRANCISCO PIZARRO (SALAHONDA];",
        "FUNES",
        "GUACHUCAL",
        "GUAITARILLA",
        "GUALMATAN",
        "ILES",
        "IMUES",
        "IPIALES",
        "LA CRUZ",
        "LA FLORIDA",
        "LA LLANADA",
        "LA TOLA",
        "LA UNION",
        "LEIVA",
        "LINARES",
        "LOS ANDES",
        "MAGÜI (PAYAN];",
        "MALLAMA (PIEDRANCHA];",
        "MOSQUERA",
        "NARIÑO",
        "OLAYA HERRERA (BOCAS DE SATINGA];",
        "OSPINA",
        "POLICARPA",
        "POTOSI",
        "PROVIDENCIA",
        "PUERRES",
        "PUPIALES",
        "RICAURTE",
        "ROBERTO PAYAN (SAN JOSE];",
        "SAMANIEGO",
        "SAN BERNARDO",
        "SAN JOSE DE ALBAN",
        "SAN JUAN DE PASTO",
        "SAN LORENZO",
        "SAN PABLO",
        "SAN PEDRO DE CARTAGO",
        "SANDONA",
        "SANTA BARBARA (ISCUANDE];",
        "SANTACRUZ (GUACHAVEZ];",
        "SAPUYES",
        "TAMINANGO",
        "TANGUA",
        "TUMACO",
        "TUQUERRES",
        "YACUANQUER",
      ],
      departamentos_NORTE_DE_SANTANDER: [
        "ABREGO",
        "ARBOLEDAS",
        "BOCHALEMA",
        "BUCARASICA",
        "CACHIRA",
        "CACOTA",
        "CHINACOTA",
        "CHITAGA",
        "CONVENCION",
        "CUCUTA",
        "CUCUTILLA",
        "DURANIA",
        "EL CARMEN",
        "EL TARRA",
        "EL ZULIA",
        "GRAMALOTE",
        "HACARI",
        "HERRAN",
        "LA ESPERANZA",
        "LA PLAYA DE BELEN",
        "LABATECA",
        "LOS PATIOS",
        "LOURDES",
        "MUTISCUA",
        "OCAÑA",
        "PAMPLONA",
        "PAMPLONITA",
        "PUERTO SANTANDER",
        "RAGONVALIA",
        "SALAZAR DE LAS PALMAS",
        "SAN CALIXTO",
        "SAN CAYETANO",
        "SANTIAGO",
        "SANTO DOMINGO DE SILOS",
        "SARDINATA",
        "TEORAMA",
        "TIBU",
        "TOLEDO",
        "VILLA CARO",
        "VILLA DEL ROSARIO",
      ],
      departamentos_PUTUMAYO: [
        "COLON",
        "MOCOA",
        "ORITO",
        "PUERTO ASIS",
        "PUERTO CAICEDO",
        "PUERTO GUZMAN",
        "PUERTO LEGUIZAMO",
        "SAN FRANCISCO",
        "SAN MIGUEL",
        "SANTIAGO",
        "SIBUNDOY",
        "VALLE DEL GUAMEZ",
        "VILLA GARZON",
      ],
      departamentos_QUINDIO: [
        "ARMENIA",
        "BUENAVISTA",
        "CALARCA",
        "CIRCASIA",
        "CORDOBA",
        "FILANDIA",
        "GENOVA",
        "LA TEBAIDA",
        "MONTENEGRO",
        "PIJAO",
        "QUIMBAYA",
        "SALENTO",
      ],
      departamentos_RISARALDA: [
        "APIA",
        "BALBOA",
        "BELEN DE UMBRIA",
        "DOSQUEBRADAS",
        "GUATICA",
        "LA CELIA",
        "LA VIRGINIA",
        "MARSELLA",
        "MISTRATO",
        "PEREIRA",
        "PUEBLO RICO",
        "QUINCHIA",
        "SANTA ROSA DE CABAL",
        "SANTUARIO",
      ],
      departamentos_SAN_ANDRES_Y_PROVIDENCIA: [
        "PROVIDENCIA",
        "SAN ANDRES",
        "SANTA CATALINA",
      ],
      departamentos_SANTANDER: [
        "AGUADA",
        "ALBANIA",
        "ARATOCA",
        "BARBOSA",
        "BARICHARA",
        "BARRANCABERMEJA",
        "BETULIA",
        "BOLIVAR",
        "BUCARAMANGA",
        "CABRERA",
        "CALIFORNIA",
        "CAPITANEJO",
        "CARCASI",
        "CEPITA",
        "CERRITO",
        "CHARALA",
        "CHARTA",
        "CHIMA",
        "CHIPATA",
        "CIMITARRA",
        "CONCEPCION",
        "CONFINES",
        "CONTRATACION",
        "COROMORO",
        "CURITI",
        "EL CARMEN DE CHUCURI",
        "EL GUACAMAYO",
        "EL PEÑON",
        "EL PLAYON",
        "ENCINO",
        "ENCISO",
        "FLORIAN",
        "FLORIDABLANCA",
        "GALAN",
        "GAMBITA",
        "GIRON",
        "GUACA",
        "GUADALUPE",
        "GUAPOTA",
        "GUAVATA",
        "GÜEPSA",
        "HATO",
        "JESUS MARIA",
        "JORDAN",
        "LA BELLEZA",
        "LA PAZ",
        "LANDAZURI",
        "LEBRIJA",
        "LOS SANTOS",
        "MACARAVITA",
        "MALAGA",
        "MATANZA",
        "MOGOTES",
        "MOLAGAVITA",
        "OCAMONTE",
        "OIBA",
        "ONZAGA",
        "PALMAR",
        "PALMAS DEL SOCORRO",
        "PARAMO",
        "PIEDECUESTA",
        "PINCHOTE",
        "PUENTE NACIONAL",
        "PUERTO PARRA",
        "PUERTO WILCHES",
        "RIONEGRO",
        "SABANA DE TORRES",
        "SAN ANDRES",
        "SAN BENITO",
        "SAN GIL",
        "SAN JOAQUIN",
        "SAN JOSE DE MIRANDA",
        "SAN MIGUEL",
        "SAN VICENTE",
        "SANTA BARBARA",
        "SANTA HELENA DEL OPON",
        "SIMACOTA",
        "SOCORRO",
        "SUAITA",
        "SUCRE",
        "SURATA",
        "TONA",
        "VALLE DE SAN JOSE",
        "VELEZ",
        "VETAS",
        "VILLANUEVA",
        "ZAPATOCA",
      ],
      departamentos_SUCRE: [
        "BUENAVISTA",
        "CAIMITO",
        "CHALAN",
        "COLOSO",
        "COROZAL",
        "COVEÑAS",
        "EL ROBLE",
        "GALERAS",
        "GUARANDA",
        "LA UNION",
        "LOS PALMITOS",
        "MAJAGUAL",
        "MORROA",
        "OVEJAS",
        "PALMITO",
        "SAMPUES",
        "SAN BENITO ABAD",
        "SAN JUAN DE BETULIA",
        "SAN MARCOS",
        "SAN ONOFRE",
        "SAN PEDRO",
        "SANTIAGO DE TOLU",
        "SINCE",
        "SINCELEJO",
        "SUCRE",
        "TOLUVIEJO",
      ],
      departamentos_TOLIMA: [
        "ALPUJARRA",
        "ALVARADO",
        "AMBALEMA",
        "ANZOÁTEGUI",
        "ARMERO",
        "ATACO",
        "CAJAMARCA",
        "CARMEN DE APICALÁ",
        "CASABIANCA",
        "CHAPARRAL",
        "COELLO",
        "COYAIMA",
        "CUNDAY",
        "DOLORES",
        "ESPINAL",
        "FALAN",
        "FLANDES",
        "FRESNO",
        "GUAMO",
        "HERVEO",
        "HONDA",
        "IBAGUE",
        "ICONONZO",
        "LERIDA",
        "LIBANO",
        "MARIQUITA",
        "MELGAR",
        "MURILLO",
        "NATAGAIMA",
        "ORTEGA",
        "PALOCABILDO",
        "PIEDRAS",
        "PLANADAS",
        "PRADO",
        "PURIFICACION",
        "RIOBLANCO",
        "RONCESVALLES",
        "ROVIRA",
        "SALDAÑA",
        "SAN ANTONIO",
        "SAN LUIS",
        "SANTA ISABEL",
        "SUAREZ",
        "VALLE DE SAN JUAN",
        "VENADILLO",
        "VILLAHERMOSA",
        "VILLARRICA",
      ],
      departamentos_VALLE_DEL_CAUCA: [
        "ALCALA",
        "ANDALUCIA",
        "ANSERMANUEVO",
        "ARGELIA",
        "BOLIVAR",
        "BUENAVENTURA",
        "BUGA",
        "BUGALAGRANDE",
        "CAICEDONIA",
        "CALI",
        "CANDELARIA",
        "CARTAGO",
        "DAGUA",
        "DARIEN",
        "EL AGUILA",
        "EL CAIRO",
        "EL CERRITO",
        "EL DOVIO",
        "FLORIDA",
        "GINEBRA",
        "GUACARI",
        "JAMUNDI",
        "LA CUMBRE",
        "LA UNION",
        "LA VICTORIA",
        "OBANDO",
        "PALMIRA",
        "PRADERA",
        "RESTREPO",
        "RIOFRIO",
        "ROLDANILLO",
        "SAN PEDRO",
        "SEVILLA",
        "TORO",
        "TRUJILLO",
        "TULUA",
        "ULLOA",
        "VERSALLES",
        "VIJES",
        "YOTOCO",
        "YUMBO",
        "ZARZAL",
      ],
      departamentos_VAUPES: [
        "CARURU",
        "MITU",
        "PACOA",
        "PAPUNAUA",
        "TARAIRA",
        "YAVARATE",
      ],
      departamentos_VICHADA: [
        "CUMARIBO",
        "LA PRIMAVERA",
        "PUERTO CARREÑO",
        "SANTA ROSALIA",
      ],
    };
  },
  created() {
    db.collection("usuarios").onSnapshot((snapshotChange) => {
      this.usuarios = [];
      snapshotChange.forEach((doc) => {
        this.usuarios.push({
          key: doc.id,
          primernombre: doc.data().primernombre,
          segundonombre: doc.data().segundonombre,
          primerapellido: doc.data().primerapellido,
          segundoapellido: doc.data().segundoapellido,
          tipodocumento: doc.data().tipodocumento,
          documento: doc.data().documento,
          departamento: doc.data().departamento,
          municipio: doc.data().municipio,
          genero: doc.data().genero,
          edad: doc.data().edad,
          year: doc.data().year,
          meses: doc.data().meses,
        });
      });
    });
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 10000)

        this.loader = null
      },
    },
  methods: {
    async recorrerVector() {
      console.log("valor vector " + this.vector);
      console.log("length " + this.vector.length);
      var i = 0;
      if ( this.eda == "" && this.anio == "" &&  this.mes == "" &&
           this.muni == "" && this.depar == "" && this.gene == "") {
        Swal.fire(
          "¡Atención!",
          "Realice la búsqueda por medio de los filtros para descargar los documentos deseados",
          "info"
        );
        }
        else {
           for (i = 0; i < this.vector.length; i++) {
        console.log("posición i " + this.vector[i]);
        await this.generarPdf(this.vector[i]);
      }
        }
     
    },

    listaDepartamento() {
      var i = 0;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var gen;
      gen = document.getElementById("genero").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;

      if (dpt != "") {
        var mis_municipios = eval("this." + "departamentos_" + dpt);
        var num_municipios = mis_municipios.length;
        document.f1.municipios.length = num_municipios;
        for (i = 0; i < num_municipios; i++) {
          document.f1.municipios.options[i].value = mis_municipios[i];
          document.f1.municipios.options[i].text = mis_municipios[i];
        }
      } else {
        document.f1.municipios.length = 1;
        document.f1.municipios.options[0].value = "";
        document.f1.municipios.options[0].text = "SIN ASIGNAR";
      }
      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.eda == "" &&
        this.anio == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.muni == ""
      ) {
        this.vector = [];
        console.log(
          "El mes, el genero, el año, el municipio y edad están vacios"
        );
        usuariosRef
          .where("departamento", "==", dpt)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.muni == ""
      ) {
        this.vector = [];
        console.log("La edad,el municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.gene == ""
      ) {
        this.vector = [];
        console.log("La edad,el genero, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("departamento", "==", dpt)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.gene == ""
      ) {
        this.vector = [];
        console.log("El municipio, el genero, el mes y el año están vacios");
        usuariosRef
          .where("edad", "==", edad)
          .where("departamento", "==", dpt)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.gene == ""
      ) {
        this.vector = [];
        console.log("El municipio, el genero, la edad y el año están vacios");
        usuariosRef
          .where("meses", "==", meses)
          .where("departamento", "==", dpt)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.eda == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.gene == ""
      ) {
        this.vector = [];
        console.log("El municipio, el genero, el mes y la edad están vacios");
        usuariosRef
          .where("year", "==", anios)
          .where("departamento", "==", dpt)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el mes y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el año y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el año y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el genero y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "" && this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el genero y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "") {
        this.vector = [];
        console.log("El mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "") {
        this.vector = [];
        console.log("La edad y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.muni == "") {
        this.vector = [];
        console.log("La edad y el munipio están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "") {
        this.vector = [];
        console.log("La edad y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.mes == "") {
        this.vector = [];
        console.log("El municipio y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.gene == "") {
        this.vector = [];
        console.log("El municipio y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "") {
        this.vector = [];
        console.log("El genero y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
        this.vector = [];
        console.log("El genero está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "") {
        this.vector = [];
        console.log("El munipio está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "") {
        this.vector = [];
        console.log("La edad está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "") {
        this.vector = [];
        console.log("El año está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "") {
        this.vector = [];
        console.log("El mes está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },

    listaGenero() {
      var gen;
      gen = document.getElementById("genero").value;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;

      console.log(
        "departamento " + dpt + " genero " + gen + " municipio " + mun
      );

      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.eda == "" &&
        this.anio == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El mes, el municipio, el año, el departamento y edad están vacios"
        );
        usuariosRef
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.muni == ""
      ) {
        this.vector = [];
        console.log("La edad,el municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log("La edad,el departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y el año están vacios"
        );
        usuariosRef
          .where("edad", "==", edad)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, la edad y el año están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.eda == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y la edad están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el año y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el año y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y la edad están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el mes están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "") {
        this.vector = [];
        console.log("El mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "") {
        this.vector = [];
        console.log("La edad y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.muni == "") {
        this.vector = [];
        console.log("La edad y el munipio están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "") {
        this.vector = [];
        console.log("La edad y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.mes == "") {
        this.vector = [];
        console.log("El municipio y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.depar == "") {
        this.vector = [];
        console.log("El municipio y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "" && this.mes == "") {
        this.vector = [];
        console.log("El departamento y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "") {
        this.vector = [];
        console.log("El departamento está vacio");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "") {
        this.vector = [];
        console.log("El munipio está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
        this.vector = [];
        console.log("El género está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "") {
        this.vector = [];
        console.log("El año está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "") {
        this.vector = [];
        console.log("El mes está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },

    listaMunicipio() {
      var gen;
      gen = document.getElementById("genero").value;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;
      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.eda == "" &&
        this.anio == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El mes, el genero, el año, el departamento y edad están vacios"
        );
        usuariosRef
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.gene == ""
      ) {
        this.vector = [];
        console.log("La edad,el genero, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log("La edad,el departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log("El genero, el departamento, el mes y el año están vacios");
        usuariosRef
          .where("edad", "==", edad)
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.eda == "" &&
        this.gene == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El genero, el departamento, la edad y el año están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.eda == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El genero, el departamento, el mes y la edad están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el mes y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el año y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el año y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el departamento y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el departamento y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "" && this.depar == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero, el departamento y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "") {
        this.vector = [];
        console.log("El mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "") {
        this.vector = [];
        console.log("La edad y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "") {
        this.vector = [];
        console.log("La edad y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "") {
        this.vector = [];
        console.log("La edad y el departamento están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "") {
        this.vector = [];
        console.log("El genero y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "") {
        this.vector = [];
        console.log("El genero y el departamento están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "" && this.mes == "") {
        this.vector = [];
        console.log("El departamento y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "") {
        this.vector = [];
        console.log("El departamento está vacio");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .where("municipio", "==", mun)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
        this.vector = [];
        console.log("El genero está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "") {
        this.vector = [];
        console.log("La edad está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "") {
        this.vector = [];
        console.log("El año está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "") {
        this.vector = [];
        console.log("El mes está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },

    listaAnios() {
      var gen;
      gen = document.getElementById("genero").value;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;

      console.log(
        "departamento " + dpt + " genero " + gen + " municipio " + mun
      );

      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.gene == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
         this.vector = [];
        console.log(
          "La edad,el municipio, el mes, el departamento y el genero están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.gene == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.muni == ""
      ) {
         this.vector = [];
        console.log("La edad,el municipio, el mes y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.gene == "" &&
        this.mes == "" &&
        this.eda == "" &&
        this.depar == ""
      ) {
         this.vector = [];
        console.log("La edad,el departamento, el mes y el genero están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.gene == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
         this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y el genero están vacios"
        );
        usuariosRef
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.gene == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
         this.vector = [];
        console.log(
          "El municipio, el departamento, la edad y el genero están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.eda == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
         this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y la edad están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "" && this.eda == "") {
         this.vector = [];
        console.log("La edad, el mes y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el mes y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "" && this.depar == "") {
         this.vector = [];
        console.log("El departamento, el mes y el genero están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.depar == "") {
         this.vector = [];
        console.log("El departamento, el mes y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el mes y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "" && this.depar == "") {
         this.vector = [];
        console.log("El departamento, el genero y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el genero y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el departamento y la edad están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el departamento y el genero están vacios");
        usuariosRef
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "" && this.depar == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio, el departamento y el mes están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "") {
         this.vector = [];
        console.log("El mes y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.eda == "") {
         this.vector = [];
        console.log("La edad y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.muni == "") {
         this.vector = [];
        console.log("El municipio y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "") {
         this.vector = [];
        console.log("El departamento y el genero están vacios");
        usuariosRef
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.mes == "") {
         this.vector = [];
        console.log("La edad y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.muni == "") {
         this.vector = [];
        console.log("La edad y el munipio están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "") {
         this.vector = [];
        console.log("La edad y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.mes == "") {
         this.vector = [];
        console.log("El municipio y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.depar == "") {
         this.vector = [];
        console.log("El municipio y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "" && this.mes == "") {
         this.vector = [];
        console.log("El departamento y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "") {
         this.vector = [];
        console.log("El departamento está vacio");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "") {
         this.vector = [];
        console.log("El munipio está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "") {
         this.vector = [];
        console.log("La edad está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
         this.vector = [];
        console.log("El genero está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "") {
        this.vector = [];
        console.log("El mes está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },

    listaMeses() {
      var gen;
      gen = document.getElementById("genero").value;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;

      console.log(
        "departamento " + dpt + " genero " + gen + " municipio " + mun
      );

      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.gene == "" &&
        this.anio == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "La edad,el municipio, el año, el departamento y el genero están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.gene == "" &&
        this.eda == "" &&
        this.muni == ""
      ) {
        this.vector = [];
        console.log("La edad,el municipio, el genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.gene == "" &&
        this.eda == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log("La edad,el departamento, el genero y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.gene == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el genero y el año están vacios"
        );
        usuariosRef
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.eda == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, la edad y el año están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.eda == "" &&
        this.gene == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el genero y la edad están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad, el genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el genero y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el genero y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el genero y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el año y la edad están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el año y la edad están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y la edad están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el genero están vacios");
        usuariosRef
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("El genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.eda == "") {
        this.vector = [];
        console.log("La edad y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.gene == "") {
        this.vector = [];
        console.log("La edad y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.muni == "") {
        this.vector = [];
        console.log("La edad y el munipio están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "" && this.depar == "") {
        this.vector = [];
        console.log("La edad y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.gene == "") {
        this.vector = [];
        console.log("El municipio y el genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.depar == "") {
        this.vector = [];
        console.log("El municipio y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "" && this.gene == "") {
        this.vector = [];
        console.log("El departamento y el genero están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "") {
        this.vector = [];
        console.log("El departamento está vacio");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "") {
        this.vector = [];
        console.log("El munipio está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.eda == "") {
        this.vector = [];
        console.log("La edad está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "") {
        this.vector = [];
        console.log("El año está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
        this.vector = [];
        console.log("El genero está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },

    listaEdad() {
      var gen;
      gen = document.getElementById("genero").value;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      var mun;
      mun = document.getElementById("municipios").value;
      var meses;
      meses = document.getElementById("meses").value;
      var anios;
      anios = document.getElementById("anios").value;
      var edad;
      edad = document.getElementById("edad").value;

      console.log(
        "departamento " + dpt + " genero " + gen + " municipio " + mun
      );

      this.usuarios = [];
      var usuariosRef = db.collection("usuarios");

      if (
        this.gene == "" &&
        this.anio == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El mes, el municipio, el año, el departamento y el genero están vacios"
        );
        usuariosRef
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.muni == ""
      ) {
        this.vector = [];
        console.log("genero, el municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.gene == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log("genero,el departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y el año están vacios"
        );
        usuariosRef
          .where("edad", "==", edad)
          .where("genero", "==", gen)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.anio == "" &&
        this.gene == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, genero y el año están vacios"
        );
        usuariosRef
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (
        this.gene == "" &&
        this.mes == "" &&
        this.muni == "" &&
        this.depar == ""
      ) {
        this.vector = [];
        console.log(
          "El municipio, el departamento, el mes y genero están vacios"
        );
        usuariosRef
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.gene == "") {
        this.vector = [];
        console.log("genero, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y el año están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el mes y genero están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el mes y genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento, el año y genero están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el año y genero están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y genero están vacios");
        usuariosRef
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "" && this.depar == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio, el departamento y el mes están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("year", "==", anios)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.mes == "") {
        this.vector = [];
        console.log("El mes y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.gene == "") {
        this.vector = [];
        console.log("genero y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.muni == "") {
        this.vector = [];
        console.log("El municipio y el año están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "" && this.depar == "") {
        this.vector = [];
        console.log("El departamento y el año están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("meses", "==", meses)
          .where("edad", "==", edad)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.mes == "") {
        this.vector = [];
        console.log("genero y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.muni == "") {
        this.vector = [];
        console.log("genero y el munipio están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "" && this.depar == "") {
        this.vector = [];
        console.log("genero y el departamento están vacios");
        usuariosRef
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.mes == "") {
        this.vector = [];
        console.log("El municipio y el mes están vacios");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "" && this.depar == "") {
        this.vector = [];
        console.log("El municipio y el departamento están vacios");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "" && this.mes == "") {
        this.vector = [];
        console.log("El departamento y el mes están vacios");
        usuariosRef
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.depar == "") {
        this.vector = [];
        console.log("El departamento está vacio");
        usuariosRef
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.muni == "") {
        this.vector = [];
        console.log("El munipio está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.gene == "") {
        this.vector = [];
        console.log("genero está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.anio == "") {
        this.vector = [];
        console.log("El año está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else if (this.mes == "") {
        this.vector = [];
        console.log("El mes está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.vector = [];
        console.log("Ninguno está vacio");
        usuariosRef
          .where("departamento", "==", dpt)
          .where("municipio", "==", mun)
          .where("genero", "==", gen)
          .where("edad", "==", edad)
          .where("year", "==", anios)
          .where("meses", "==", meses)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.vector.push(doc.id);
              this.usuarios.push({
                key: doc.id,
                primernombre: doc.data().primernombre,
                segundonombre: doc.data().segundonombre,
                primerapellido: doc.data().primerapellido,
                segundoapellido: doc.data().segundoapellido,
                tipodocumento: doc.data().tipodocumento,
                documento: doc.data().documento,
                departamento: doc.data().departamento,
                municipio: doc.data().municipio,
                genero: doc.data().genero,
                edad: doc.data().edad,
                year: doc.data().year,
                meses: doc.data().meses,
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      }
    },
    mostrarImg(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("/imagenes" + "/fp" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.imagenes.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarImgFamilia(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("/imagenes" + "/ff" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.imagenesFamilia.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarImgVivienda(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("/imagenes" + "/fv" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.imagenesVivienda.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarDocIdentidad(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("documentos" + "/cedula" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.docIdentidad.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarCertLaborales(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("documentos" + "/cl" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.docLaboral.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarCertAcademico(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("documentos" + "/ca" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.docAcademico.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarCertCursos(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("documentos" + "/cc" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.docCursos.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    mostrarCertExperiencias(item) {
      return new Promise((resolve) => {
        let me = this;
        var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
          if (doc.exists) {
            ref
              .child("documentos" + "/ce" + doc.data().documento + "/")
              .listAll()
              .then((res) => {
                res.items.map((item) => {
                  ref
                    .child(item.fullPath)
                    .getDownloadURL()
                    .then((url) => {
                      me.docExperiencias.push(url);
                      resolve("resolved");
                    })
                    .catch(() => {
                      resolve("rejected");
                    });
                });
              });
          }
        });
      });
    },
    async generarPdf(id) {
      await this.mostrarDocIdentidad(id);
      await this.mostrarCertLaborales(id);
      await this.mostrarCertAcademico(id);
      await this.mostrarCertCursos(id);
      await this.mostrarCertExperiencias(id);
      await this.mostrarImg(id);
      await this.mostrarImgFamilia(id);
      await this.mostrarImgVivienda(id);

      var docRef = db.collection("usuarios").doc(id);
      let me = this;
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Este documento es :", doc.data());
            console.log("Aqui es " + me.docIdentidad);
            const logo = me.imagenes[0];
            const pdf = new jsPDF();
            var imgLogo = new Image();
            imgLogo.src = logo;
            pdf.addImage(imgLogo, "JPEG", 86, 47, 43, 50);
            pdf.setFontSize(26);
            pdf.text("Hoja de vida", 82, 30);
            pdf.setFontSize(14);
            pdf.rect(48, 113, 112, 10);
            pdf.text("DATOS PERSONALES", 80, 120);
            pdf.setFontSize(12);
            pdf.text("Primer nombre: " + doc.data().primernombre, 20, 140);
            pdf.text("Segundo nombre: " + doc.data().segundonombre, 120, 140);
            pdf.text("Primer apellido: " + doc.data().primerapellido, 20, 150);
            pdf.text(
              "Segundo apellido: " + doc.data().segundoapellido,
              120,
              150
            );
            pdf.text("Tipo de documento: " + doc.data().tipodocumento, 20, 160);
            pdf.text("Documento: " + doc.data().documento, 120, 160);
            pdf.text("Altura en cms: " + doc.data().altura, 20, 170);
            pdf.text("Género: " + doc.data().genero, 120, 170);
            pdf.text("Fecha de nacimiento: " + doc.data().nacimiento, 20, 180);
            pdf.text("Estado civil: " + doc.data().civil, 120, 180);
            pdf.text("Correo eléctronico: " + doc.data().email, 20, 190);
            pdf.text("País: " + doc.data().pais, 20, 200);
            pdf.text("Departamento: " + doc.data().departamento, 120, 200);
            pdf.text("Ciudad: " + doc.data().municipio, 20, 210);
            pdf.text("Zona: " + doc.data().zona, 120, 210);
            pdf.text("Sector: " + doc.data().sector, 20, 220);
            pdf.text("Dirección: " + doc.data().direccionResidencia, 120, 220);
            pdf.text(
              "Tipo de vivienda: " + doc.data().viviendaResidencia,
              20,
              230
            );
            pdf.text("Modalidad: " + doc.data().modalidadResidencia, 120, 230);
            pdf.text("Experiencia laboral: " + doc.data().experiencia, 20, 240);
            pdf.text("Años: " + doc.data().year, 120, 240);
            pdf.text("Meses: " + doc.data().meses, 140, 240);
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("INFORMACIÓN DE RESIDENCIA", 68, 37);
            pdf.setFontSize(12);
            pdf.text("Tipo de vivienda: " + doc.data().vivienda, 20, 55);
            pdf.text("Propietario: " + doc.data().propietario, 120, 55);
            pdf.text("Modalidad: " + doc.data().modalidad, 20, 65);
            pdf.text("Teléfono: " + doc.data().telefono, 120, 65);
            pdf.text(
              "Departamento: " + doc.data().departamentoPropiedad,
              20,
              80
            );
            pdf.text("Ciudad: " + doc.data().ciudadPropiedad, 120, 75);
            pdf.rect(48, 95, 112, 10);
            pdf.setFontSize(14);
            pdf.text("VEHICULO", 90, 102);
            pdf.setFontSize(12);
            pdf.text("Tipo de vehículo: " + doc.data().vehiculo, 20, 120);
            pdf.text("Marca: " + doc.data().marca, 120, 120);
            pdf.text("Placa: " + doc.data().placa, 20, 130);
            pdf.text("Cilindraje: " + doc.data().cilindraje, 70, 130);
            pdf.text("Modelo: " + doc.data().modeloVehiculo, 120, 130);
            pdf.rect(48, 150, 112, 10);
            pdf.setFontSize(14);
            pdf.text("PERTENECIO A UNA INSTITUCION ARMADA", 55, 157);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucion, 20, 175);
            pdf.text("Estado: " + doc.data().estadoLaboral, 120, 175);
            pdf.text(
              "Último grado obtenido: " + doc.data().ultimoGrado,
              20,
              185
            );
            pdf.text("Fecha inicial: " + doc.data().fechaIncial, 20, 195);
            pdf.text("Fecha final: " + doc.data().fechaFinal, 120, 195);
            pdf.text("Motivo de retiro: " + doc.data().retiro, 20, 205);
            pdf.rect(48, 220, 112, 10);
            pdf.setFontSize(14);
            pdf.text("IDIOMAS", 90, 227);
            pdf.setFontSize(12);
            pdf.text("Primer idioma: " + doc.data().idiomas, 20, 245);
            pdf.text("Nivel escritura: " + doc.data().nivelEscritura, 120, 245);
            pdf.text("Nivel lectura: " + doc.data().nivelLectura, 20, 255);
            pdf.text(
              "Nivel conversacional: " + doc.data().nivelConversacional,
              120,
              255
            );
            pdf.text("Observaciones: " + doc.data().observaciones, 20, 265);
            pdf.addPage();
            pdf.text(
              "Segundo idioma (Opcional): " + doc.data().idiomas2,
              20,
              30
            );
            pdf.text("Nivel escritura: " + doc.data().nivelEscritura2, 120, 30);
            pdf.text("Nivel lectura: " + doc.data().nivelLectura2, 20, 40);
            pdf.text(
              "Nivel conversacional: " + doc.data().nivelConversacional2,
              120,
              40
            );
            pdf.text("Observaciones: " + doc.data().observaciones2, 20, 50);
            pdf.text(
              "Tercer idioma (Opcional): " + doc.data().idiomas3,
              20,
              65
            );
            pdf.text("Nivel escritura: " + doc.data().nivelEscritura3, 120, 65);
            pdf.text("Nivel lectura: " + doc.data().nivelLectura3, 20, 75);
            pdf.text(
              "Nivel conversacional: " + doc.data().nivelConversacional3,
              120,
              75
            );
            pdf.text("Observaciones: " + doc.data().observaciones3, 20, 85);
            pdf.rect(48, 100, 112, 10);
            pdf.setFontSize(14);
            pdf.text("ARMA", 95, 107);
            pdf.setFontSize(12);
            pdf.text("Tipo de arma: " + doc.data().arma, 20, 125);
            pdf.text("Modalidad: " + doc.data().modalidadArma, 120, 125);
            pdf.text("Calibre: " + doc.data().calibre, 20, 135);
            pdf.text("Número de arma: " + doc.data().numeroArma, 120, 135);
            pdf.rect(48, 150, 112, 10);
            pdf.setFontSize(14);
            pdf.text("ESTIMACIÓN SALARIAL", 80, 157);
            pdf.setFontSize(12);
            pdf.text("Salario estimado: " + doc.data().salario, 70, 175);
            pdf.rect(48, 190, 112, 10);
            pdf.setFontSize(14);
            pdf.text("INFORMACION FAMILIAR", 70, 197);
            pdf.setFontSize(12);
            pdf.text(
              "Nombres y apellidos del padre: " + doc.data().nombrePadre,
              20,
              215
            );
            pdf.text("Fallecido: " + doc.data().fallecidoPadre, 20, 225);
            pdf.text("País de residencia: " + doc.data().paisPadre, 120, 225);
            pdf.text("Departamento: " + doc.data().departamentoPadre, 20, 235);
            pdf.text("Ciudad: " + doc.data().municipioPadre, 120, 235);
            pdf.text("Teléfono: " + doc.data().telefonoPadre, 20, 245);
            pdf.text("Dirección: " + doc.data().direccionPadre, 120, 245);
            pdf.text("Ocupación: " + doc.data().ocupacionPadre, 20, 255);
            pdf.addPage();
            pdf.text(
              "Nombres y apellidos de la madre: " + doc.data().nombreMadre,
              20,
              30
            );
            pdf.text("Fallecida: " + doc.data().fallecidoMadre, 120, 40);
            pdf.text("País de residencia: " + doc.data().paisMadre, 20, 40);
            pdf.text("Departamento: " + doc.data().departamentoMadre, 120, 50);
            pdf.text("Ciudad: " + doc.data().municipioMadre, 20, 50);
            pdf.text("Teléfono: " + doc.data().telefonoMadre, 20, 60);
            pdf.text("Dirección: " + doc.data().direccionMadre, 120, 60);
            pdf.text("Ocupación: " + doc.data().ocupacionMadre, 20, 70);
            pdf.rect(48, 85, 112, 10);
            pdf.setFontSize(14);
            pdf.text("DOCUMENTOS PERSONALES", 70, 92);
            pdf.setFontSize(12);
            pdf.text("Reservista: " + doc.data().reservista, 20, 110);
            pdf.text("Institución: " + doc.data().institucionLibreta, 120, 110);
            pdf.text(
              "Nro. Libreta militar: " + doc.data().numeroLibreta,
              20,
              120
            );
            pdf.text(
              "Clase libreta militar: " + doc.data().claseLibreta,
              120,
              120
            );
            pdf.text(
              "Fecha de expedición: " + doc.data().fechaLibreta,
              20,
              130
            );
            pdf.text(
              "Licencia de conducción: " + doc.data().poseeLicencia,
              120,
              130
            );
            pdf.text(
              "Clase licencia: " + doc.data().licenciaConduccion,
              20,
              140
            );
            pdf.text(
              "Número de la licencia: " + doc.data().numeroLicencia,
              120,
              140
            );
            pdf.rect(48, 155, 112, 10);
            pdf.setFontSize(14);
            pdf.text("REFERENCIAS FAMILIARES", 70, 162);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 184, 136, 184);
            pdf.text("Primera referencia familiar", 80, 182);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombreFamiliar1, 20, 200);
            pdf.text(
              "Departamento: " + doc.data().departamentoFamiliar1,
              20,
              210
            );
            pdf.text("Municipio: " + doc.data().municipioFamiliar1, 120, 210);
            pdf.text("Dirección: " + doc.data().direccionFamiliar1, 20, 220);
            pdf.text("Parentezco: " + doc.data().parentescoFamiliar1, 120, 220);
            pdf.text("Celular: " + doc.data().celularFamiliar1, 20, 230);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoFamiliar1,
              120,
              230
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaFamiliar1,
              20,
              240
            );
            pdf.addPage();
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 138, 32);
            pdf.text("Segunda referencia familiar", 80, 30);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombreFamiliar2, 20, 45);
            pdf.text(
              "Departamento: " + doc.data().departamentoFamiliar2,
              120,
              55
            );
            pdf.text("Municipio: " + doc.data().municipioFamiliar2, 20, 55);
            pdf.text("Dirección: " + doc.data().direccionFamiliar2, 120, 65);
            pdf.text("Parentezco: " + doc.data().parentescoFamiliar2, 20, 65);
            pdf.text("Celular: " + doc.data().celularFamiliar2, 120, 75);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoFamiliar2,
              20,
              75
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaFamiliar2,
              120,
              85
            );
            pdf.rect(48, 105, 112, 10);
            pdf.setFontSize(14);
            pdf.text("REFERENCIAS PERSONALES", 70, 112);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 132, 138, 132);
            pdf.text("Primera referencia personal", 80, 130);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombrePersonal1, 20, 145);
            pdf.text(
              "Departamento: " + doc.data().departamentoPersonal1,
              120,
              155
            );
            pdf.text("Municipio: " + doc.data().municipioPersonal1, 20, 155);
            pdf.text("Dirección: " + doc.data().direccionPersonal1, 120, 165);
            pdf.text("Celular: " + doc.data().celularPersonal1, 20, 165);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoPersonal1,
              120,
              175
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaPersonal1,
              20,
              175
            );
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 192, 140, 192);
            pdf.text("Segunda referencia personal", 80, 190);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombrePersonal2, 20, 205);
            pdf.text(
              "Departamento: " + doc.data().departamentoPersonal2,
              120,
              215
            );
            pdf.text("Municipio: " + doc.data().municipioPersonal2, 20, 215);
            pdf.text("Dirección: " + doc.data().direccionPersonal2, 120, 225);
            pdf.text("Celular: " + doc.data().celularPersonal2, 20, 225);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoPersonal2,
              120,
              235
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaPersonal2,
              20,
              235
            );
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("EXPERIENCIA LABORAL", 70, 37);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 57, 134, 57);
            pdf.text("Primera referencia laboral", 80, 55);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa1, 20, 70);
            pdf.text("Labora actualmente: " + doc.data().labora1, 120, 70);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral1,
              20,
              80
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral1, 120, 80);
            pdf.text("Fecha incial: " + doc.data().fechaIncialLaboral1, 20, 90);
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral1, 120, 90);
            pdf.text("Cargo: " + doc.data().cargoActual1, 20, 100);
            pdf.text("Especialidad: " + doc.data().especialidad1, 20, 110);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 130, 136, 130);
            pdf.text("Segunda referencia laboral", 80, 128);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa2, 20, 145);
            pdf.text("Labora actualmente: " + doc.data().labora2, 120, 145);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral2,
              20,
              155
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral2, 120, 155);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral2,
              20,
              165
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral2, 120, 165);
            pdf.text("Cargo: " + doc.data().cargoActual2, 20, 175);
            pdf.text("Especialidad: " + doc.data().especialidad2, 20, 185);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 205, 134, 205);
            pdf.text("Tercera referencia laboral", 80, 203);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa3, 20, 220);
            pdf.text("Labora actualmente: " + doc.data().labora3, 120, 220);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral3,
              20,
              230
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral3, 120, 230);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral3,
              20,
              240
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral3, 120, 240);
            pdf.text("Cargo: " + doc.data().cargoActual3, 20, 250);
            pdf.text("Especialidad: " + doc.data().especialidad3, 20, 260);
            pdf.setFontSize(13);
            pdf.addPage();
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 134, 32);
            pdf.text("Cuarta referencia laboral", 80, 30);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa4, 20, 45);
            pdf.text("Labora actualmente: " + doc.data().labora4, 120, 45);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral4,
              20,
              55
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral4, 120, 55);
            pdf.text("Fecha incial: " + doc.data().fechaIncialLaboral4, 20, 65);
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral4, 120, 65);
            pdf.text("Cargo: " + doc.data().cargoActual4, 20, 75);
            pdf.text("Especialidad: " + doc.data().especialidad4, 20, 85);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 102, 132, 102);
            pdf.text("Quinta referencia laboral", 80, 100);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa5, 20, 115);
            pdf.text("Labora actualmente: " + doc.data().labora5, 120, 115);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral5,
              20,
              125
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral5, 120, 125);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral5,
              20,
              135
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral5, 120, 135);
            pdf.text("Cargo: " + doc.data().cargoActual5, 20, 145);
            pdf.text("Especialidad: " + doc.data().especialidad5, 20, 155);
            pdf.rect(48, 173, 112, 10);
            pdf.setFontSize(14);
            pdf.text("FORMACION ACADEMICA", 75, 180);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 200, 142, 200);
            pdf.text("Primer documento académico", 80, 198);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica1,
              20,
              225
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica1, 120, 225);
            pdf.text("Título obtenido: " + doc.data().titulo1, 20, 235);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico1, 20, 245);
            pdf.addPage();
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 145, 32);
            pdf.text("Segundo documento académico", 80, 30);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica2,
              20,
              45
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica2, 120, 45);
            pdf.text("Título obtenido: " + doc.data().titulo2, 20, 55);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico2, 20, 65);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 82, 142, 82);
            pdf.text("Tercer documento académico", 80, 80);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica3,
              20,
              95
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica3, 120, 95);
            pdf.text("Título obtenido: " + doc.data().titulo3, 20, 105);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico3, 20, 115);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 132, 142, 132);
            pdf.text("Cuarto documento académico", 80, 130);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica4,
              20,
              145
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica4, 120, 145);
            pdf.text("Título obtenido: " + doc.data().titulo4, 20, 155);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico4, 20, 165);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 182, 142, 182);
            pdf.text("Quinto documento académico", 80, 180);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica4,
              20,
              195
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica4, 120, 195);
            pdf.text("Título obtenido: " + doc.data().titulo4, 20, 205);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico4, 20, 215);
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("CURSOS", 95, 37);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 55, 117, 55);
            pdf.text("Primer curso", 90, 53);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso1, 20, 70);
            pdf.text("Fecha título: " + doc.data().fechaCurso1, 120, 70);
            pdf.text("Título obtenido: " + doc.data().tituloCurso1, 20, 80);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 97, 120, 97);
            pdf.text("Segundo curso", 90, 95);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso2, 20, 110);
            pdf.text("Fecha título: " + doc.data().fechaCurso2, 120, 110);
            pdf.text("Título obtenido: " + doc.data().tituloCurso2, 20, 120);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 137, 117, 137);
            pdf.text("Tercer curso", 90, 135);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso3, 20, 150);
            pdf.text("Fecha título: " + doc.data().fechaCurso3, 120, 150);
            pdf.text("Título obtenido: " + doc.data().tituloCurso3, 20, 160);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 177, 117, 177);
            pdf.text("Cuarto curso", 90, 175);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso4, 20, 190);
            pdf.text("Fecha título: " + doc.data().fechaCurso4, 120, 190);
            pdf.text("Título obtenido: " + doc.data().tituloCurso4, 20, 200);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 217, 117, 217);
            pdf.text("Quinto curso", 90, 215);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso5, 20, 230);
            pdf.text("Fecha título: " + doc.data().fechaCurso5, 120, 230);
            pdf.text("Título obtenido: " + doc.data().tituloCurso5, 20, 240);
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("SOPORTES", 90, 37);
            pdf.setFontSize(14);
            pdf.text("Foto familiar", 45, 60);
            const familia = me.imagenesFamilia[0];
            var imgFamilia = new Image();
            imgFamilia.src = familia;
            pdf.addImage(imgFamilia, "JPEG", 20, 70, 80, 50);
            pdf.setFontSize(14);
            pdf.text("Foto vivienda", 135, 60);
            const vivienda = me.imagenesVivienda[0];
            var imgVivienda = new Image();
            imgVivienda.src = vivienda;
            pdf.addImage(imgVivienda, "JPEG", 110, 70, 80, 50);
            pdf.setFontSize(13);
            pdf.setTextColor("#0084ff");
            pdf.textWithLink("Ver documento de identidad", 20, 140, {
              url: me.docIdentidad[0],
            });
            pdf.textWithLink("Ver certificados laborales", 20, 160, {
              url: me.docLaboral[0],
            });
            pdf.textWithLink("Ver certificados académicos", 20, 180, {
              url: me.docAcademico[0],
            });
            pdf.textWithLink("Ver certificados de cursos", 20, 200, {
              url: me.docCursos[0],
            });
            pdf.textWithLink("Ver certificados de experiencias", 20, 220, {
              url: me.docExperiencias[0],
            });

            pdf.save("Hoja de vida " + doc.data().documento + ".pdf");
          } else {
            console.log("Documento no encontrado!");
          }
        })
        .catch((error) => {
          console.log("Error llamando documento:", error);
        });
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
.input-icono {
  background-image: url("../assets/buscador.jpg");
  background-repeat: no-repeat;
  background-position: 4px center;
  background-size: 20px;
  display: flex;
  align-items: center;
  width: 300px;
  padding-left: 28px;
  height: 30px;
  border: 1px solid rgba(9, 113, 163, 1);
  border-radius: 3px;
}
.input-icono input {
  width: 100%;
  font-size: 0.9em;
  border: none;
}
.input-icono input:focus {
  outline: none;
}
.pdf {
  margin-left: 35%;
}
.principal {
  margin-left: 0.1% !important;
}
.filtro {
  margin-bottom: 10%;
  margin-left: 10% !important;
  margin-right: 10% !important;
}
.titulo {
  margin-left: 10% !important;
}
.filtro2 {
  margin-bottom: 10%;
  margin-left: 15% !important;
}
.titulo2 {
  margin-left: 15% !important;
}
.filtro3 {
  margin-bottom: 10%;
  margin-left: 20% !important;
}
.titulo3 {
  margin-left: 20% !important;
}
.filtro4 {
  margin-bottom: 10%;
  margin-left: 25% !important;
}
.titulo4 {
  margin-left: 25% !important;
}
.filtro5 {
  margin-left: 5% !important;
}
.titulo5 {
  margin-left: 5% !important;
}
.filtro6 {
  margin-left: 1% !important;
}
.titulo6 {
  margin-left: -13% !important;
}
.letrero1 {
  margin-left: 40% !important;
}
.letrero2 {
  margin-left: 27% !important;
}
.botonDescargar {
  margin-left: 82% !important;
  margin-top: 2% !important;
}
</style>