<template>
  <v-app id="inspire">
    <v-container fluid>
      <div class="row justify-content-center">
        <div class="clase col-md 10">
          <div id="app">
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Información personal</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <label>Primer Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.primernombre"
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-group">
                      <label>Segundo Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.segundonombre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Primer Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.primerapellido"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Segundo Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.segundoapellido"
                        required
                      />
                    </div>
                    <label>Tipo de documento</label>
                    <v-select
                      v-model="usuario.tipodocumento"
                      :items="tipos"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Documento</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.documento"
                        required
                      />
                    </div>
                    <label>Género</label>
                    <v-select
                      v-model="usuario.genero"
                      :items="tipoGenero"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Altura</label>
                       <v-layout>
                         <v-flex xs12 sm2>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.altura"
                        required
                        min="1"
                        max="210"
                      />
                         </v-flex>
                         <v-flex xs12 sm2>
                      <label class="centimetros">centímetros</label>
                         </v-flex>
                       </v-layout>
                    </div>
                    <div class="form-group">
                      <label>Fecha de Nacimiento</label>
                      <v-flex xs12 sm2>
                      <input
                        type="date"
                        class="form-control"
                        v-model="usuario.nacimiento"
                        pattern="\d{4}-\d{2}-\d{2}"
                        required
                      />
                      </v-flex>
                    </div>
                    <label>Estado Civil</label>
                    <v-select
                      v-model="usuario.civil"
                      :items="tipoCivil"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="usuario.telefono"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Correo electrónico</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="usuario.email"
                        required
                      />
                    </div>
                    <label>País de residencia</label>
                    <v-select
                      v-model="usuario.pais"
                      :items="tipoPais"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento de residencia</label>
                    <v-select
                      v-model="usuario.departamento"
                      :items="tipoDepartamento"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Municipio de residencia</label>
                    <v-select
                      v-model="usuario.municipio"
                      :items="tipoMunicipio"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Zona de residencia</label>
                    <v-select
                      v-model="usuario.zona"
                      :items="tipoZona"
                      required
                      dense
                      solo
                    ></v-select>
                      <div class="form-group">
                      <label>Dirección de residencia</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionResidencia"
                        required
                      />
                    </div>
                    <label>Tipo de vivienda</label>
                    <v-select
                      v-model="usuario.viviendaResidencia"
                      :items="tipoViviendaResidencia"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Modalidad</label>
                    <v-select
                      v-model="usuario.modalidadResidencia"
                      :items="tipoModalidadResidencia"
                      required
                      dense
                      solo
                    ></v-select>
                      <label>Experiencia en Seguridad Privada</label>
                      <v-select
                      v-model="usuario.experiencia"
                      :items="tipoExperiencia"
                      required
                      dense
                      solo
                    ></v-select>
                      <label>Tiempo de experiencia</label>
                      <v-layout>
                      <v-flex xs12 sm2>
                       <v-select
                      v-model="usuario.year"
                      :items="tipoYear"
                      required
                      dense
                      solo
                    ></v-select>
                         </v-flex>
                         <v-flex xs12 sm2>
                      <label class="centimetros">Años</label>
                         </v-flex>
                         <v-flex xs12 sm2 class="selector">
                       <v-select
                      v-model="usuario.meses"
                      :items="tipoMeses"
                      required
                      dense
                      solo
                    ></v-select>
                         </v-flex>
                         <v-flex xs12 sm2>
                      <label class="centimetros">Meses</label>
                         </v-flex>
                      </v-layout>
                         <div class="form-group">
                    <button class="btn btn-primary btn-block">Guardar</button>
                  </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>Propiedades</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Tipo de vivienda</label>
                    <v-select
                      v-model="usuario.vivienda"
                      :items="tipoVivienda"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Propietario</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.propietario"
                        required
                      />
                    </div>
                    <label>Modalidad</label>
                    <v-select
                      v-model="usuario.modalidad"
                      :items="tipoModalidad"
                      required
                      dense
                      solo
                    ></v-select>

                    <div class="form-group">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoVivienda"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPropiedad"
                        required
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>Vehiculo</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Tipo de Vehiculo</label>
                    <v-select
                      v-model="usuario.vehiculo"
                      :items="tipoVehiculo"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Marca</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.marca"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Placa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.placa"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Cilindraje</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.cilindraje"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Modelo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.modeloVehiculo"
                        required
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>Soportes</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Foto de la cédula</label><br/>
                    <input
                      type="file"
                      accept="image/*"
                      @change="clickImagen($event)"
                      :src="cedula"
                    /><br/>
                    <label>Documento PDF</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento($event)"
                      :src="archivoPdf"
                    />
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "../firebaseDb";
import { storage } from "../firebaseDb";
import Swal from "sweetalert2";
const ref = storage.ref();

export default {
  data() {
    return {
      tipos: ["Cédula de ciudadanía", "Cédula de extranjeria"],
      tipoGenero: ["Masculino", "Femenino"],
      tipoCivil:["Soltero", "Casado","Viudo", "Separado"],
      tipoPais:["Colombia"],
      tipoDepartamento:["Amazonas", "Antioquia"],
      tipoMunicipio:["San Gil", "Curití"],
      tipoZona:["Urbano", "Rural","Norte", "Centro","Sur", "Occidente","Oriente"],
      tipoViviendaResidencia: ["Casa", "Apartamento", "Finca"],
      tipoModalidadResidencia: ["Propia", "Arriendo","Familiar"],
      tipoExperiencia:["SI", "NO"],
      tipoMeses:["1", "2","3", "4","5", "6","7","8", "9","10", "11","12"],
      tipoYear:["1", "2","3", "4","5", "6","7","8", "9","10", "11","12","13", "14","15", "16","17", "18","19","20", "21","22", "23", "24","25", "26","27", "28","29","30"],
      cedula: "",
      archivoPdf: "",
      imagenes: [],
      imagen: null,
      documentos:[],
      archivo: null,
      tipoVivienda: ["Casa", "Apartamento", "Finca"],
      tipoModalidad: ["Interés social", "De ahorro programado"],
      tipoVehiculo: ["Carro", "Moto"],
      usuario: {
        primernombre: "",
        segundonombre: "",
        primerapellido: "",
        segundoapellido: "",
        tipodocumento: "",
        documento: "",
        genero:"",
        altura:"",
        nacimiento:"",
        civil:"",
        pais:"",
        departamento:"",
        zona:"",
        municipio:"",
        direccionResidencia:"",
        viviendaResidencia:"",
        modalidadResidencia:"",
        experiencia:"",
        year:"",
        meses:"",
        email: "",
        telefono: "",
        vivienda: "",
        propietario: "",
        modalidad: "",
        telefonoVivienda: "",
        direccionPropiedad: "",
        vehiculo: "",
        marca: "",
        placa: "",
        cilindraje: "",
        modeloVehiculo: "",
      },
    };
  },
  methods: {
    clickImagen(e) {
      this.imagen = e.target.files[0];
      console.log(this.imagen);
    },
     clickDocumento(e) {
      this.archivo = e.target.files[0];
      console.log(this.archivo);
    },
    salir(){
const refImg = ref.child('imagenes/' + this.imagen.name);
      const metadata = { contentType: 'image/jpeg' };
      refImg.put(this.imagen, metadata).then((e) => console.log(e));

      const refDoc = ref.child('documentos/' + this.archivo.name);
      const metadata2 = { contentType: 'application/pdf' };
      refDoc.put(this.archivo, metadata2).then((e) => console.log(e));
    },
 
    onFormSubmit(event) {
      event.preventDefault();
      
      db.collection("usuarios")
        .add({
          primernombre: this.usuario.primernombre,
          segundonombre: this.usuario.segundonombre,
          primerapellido: this.usuario.primerapellido,
          segundoapellido: this.usuario.segundoapellido,
          tipodocumento: this.usuario.tipodocumento,
          documento: this.usuario.documento,
          altura: this.usuario.altura,
          genero: this.usuario.genero,
          nacimiento: this.usuario.nacimiento,
          civil: this.usuario.civil,
          email: this.usuario.email,
          pais: this.usuario.pais,
          departamento: this.usuario.departamento,
          municipio: this.usuario.municipio,
          zona: this.usuario.zona,
          pais: this.usuario.pais,
          direccionResidencia: this.usuario.direccionResidencia,
          viviendaResidencia: this.usuario.viviendaResidencia,
          modalidadResidencia: this.usuario.modalidadResidencia,
          experiencia: this.usuario.experiencia,
          year: this.usuario.year,
          meses: this.usuario.meses,
          telefono: this.usuario.telefono,
          vivienda: this.usuario.vivienda,
          propietario: this.usuario.propietario,
          modalidad: this.usuario.modalidad,
          telefonoVivienda: this.usuario.telefonoVivienda,
          direccionPropiedad: this.usuario.direccionPropiedad,
          vehiculo: this.usuario.vehiculo,
          marca: this.usuario.marca,
          placa: this.usuario.placa,
          cilindraje: this.usuario.cilindraje,
          modeloVehiculo: this.usuario.modeloVehiculo,
          cedula: this.cedula,
          archivoPdf: this.archivoPdf
        })
        .then(() => {
          Swal.fire(
            "¡Felicitaciones!",
            "¡Registro se ha creado correctamente!",
            "success"
          );
          this.usuario.primernombre = "";
          this.usuario.segundonombre = "";
          this.usuario.primerapellido = "";
          this.usuario.segundoapellido = "";
          this.usuario.tipodocumento = "";
          this.usuario.documento = "";
          this.usuario.email = "";
          this.usuario.telefono = "";
          this.usuario.vivienda = "";
          this.usuario.propietario = "";
          this.usuario.modalidad = "";
          this.usuario.telefonoVivienda = "";
          this.usuario.direccionPropiedad = "";
          this.usuario.vehiculo = "";
          this.usuario.marca = "";
          this.usuario.placa = "";
          this.usuario.cilindraje = "";
          this.usuario.modeloVehiculo = "";
          this.cedula="";
          this.archivoPdf="";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.clase {
  width: 80%;
}
.centimetros{
  margin-left: 10px;
  margin-top: 5px;
}
.selector{
  margin-left: -5%;
}
</style>