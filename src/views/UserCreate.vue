<template>
 <v-app id="inspire">
     <v-container fluid>
    <div class=" row justify-content-center">
        <div class="clase col-md 10">
            <div id="app">

    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>Información personal</v-expansion-panel-header>
        <v-expansion-panel-content>

          <form @submit.prevent="onFormSubmit" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Primer Nombre</label>
                    <input type="text" class="form-control" v-model="usuario.primernombre" required>
                </div>
                <div class="form-group">
                    <label>Segundo Nombre</label>
                    <input type="text" class="form-control" v-model="usuario.segundonombre" required>
                </div>
                <div class="form-group">
                    <label>Primer Apellido</label>
                    <input type="text" class="form-control" v-model="usuario.primerapellido" required>
                </div>
                 <div class="form-group">
                    <label>Segundo Apellido</label>
                    <input type="text" class="form-control" v-model="usuario.segundoapellido" required>
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
                    <input type="number" class="form-control" v-model="usuario.documento" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="usuario.email" required>
                </div>

                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="number" class="form-control" v-model="usuario.telefono" required>
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
                    <input type="text" class="form-control" v-model="usuario.propietario" required>
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
                    <input type="number" class="form-control" v-model="usuario.telefonoVivienda" required>
                </div>
                 <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" class="form-control" v-model="usuario.direccionPropiedad" required>
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
                    <input type="text" class="form-control" v-model="usuario.marca" required>
                </div>  
                <div class="form-group">
                    <label>Placa</label>
                    <input type="text" class="form-control" v-model="usuario.placa" required>
                </div>
                 <div class="form-group">
                    <label>Cilindraje</label>
                    <input type="text" class="form-control" v-model="usuario.cilindraje" required>
                </div>
                 <div class="form-group">
                    <label>Modelo</label>
                    <input type="text" class="form-control" v-model="usuario.modeloVehiculo" required>
                </div>
                <form @submit.prevent="subirImgen" enctype="multipart/form-data">
                <label>Foto de la cédula</label><br>
                <input type="file" accept="image/*" @change="clickImagen($event)" :src="cedula">
                </form>
   
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Guardar</button>
                </div>
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
    import { db } from '../firebaseDb';
    import {storage} from '../firebaseDb';
    import Swal from 'sweetalert2';
    const ref = storage.ref();

    export default {
        data() {
            return {
                tipos: ['Cédula', 'Tarjeta de identidad'],
                cedula: '',
                imagenes:[],
                imagen: null,
                imagenDes: null,
                tipoVivienda: ['Casa', 'Apartamento', 'Finca'],
                tipoModalidad: ['Interés social', 'De ahorro programado'],
                tipoVehiculo: ['Carro', 'Moto'],
                usuario: {
                    
                }
            }
        },
        methods: {
            clickImagen(e){
                this.imagen= e.target.files[0];
                console.log(this.imagen)

            },  
            onFormSubmit(event) {
            event.preventDefault()
            const refImg = ref.child('imagenes/'+this.imagen.name);
            const metadata = { contentType: 'img/jpeg' };
            refImg.put(this.imagen, metadata)
            .then( e => console.log(e) )
                db.collection('usuarios').add(this.usuario).then(() => {
                                                      Swal.fire(
  '¡Felicitaciones!',
  '¡Registro se ha creado correctamente!',
  'success'
)
                    this.usuario.primernombre = ''
                    this.usuario.segundonombre = ''
                    this.usuario.primerapellido = ''
                    this.usuario.segundoapellido = ''
                    this.usuario.tipodocumento = ''
                    this.usuario.documento = ''
                    this.usuario.email = ''
                    this.usuario.telefono = ''
                    this.usuario.vivienda = ''
                    this.usuario.propietario = ''
                    this.usuario.modalidad = ''
                    this.usuario.telefonoVivienda = ''
                    this.usuario.direccionPropiedad = ''
                    this.usuario.vehiculo = ''
                    this.usuario.marca = ''
                    this.usuario.placa = ''
                    this.usuario.cilindraje = ''
                    this.usuario.modeloVehiculo = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
<style scoped>
.clase{
    width: 80%;
}
</style>