<template>
 <v-app id="inspire">
     <v-container fluid>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Actualizar usuario</h3>
            <form @submit.prevent="onUpdateForm">
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
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
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
                    <input type="text" class="form-control" v-model="usuario.telefono" required>
                </div>
        <label>Tipo de vivienda</label>
              <v-select
      v-model="usuario.vivienda" 
      :items="tipoVivienda"
      required
      dense
      solo
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
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
                  <label>Foto de la cédula</label><br/>
                    <input
                      type="file"
                      accept="image/*"
                      :src="cedula"
                    /><br/>
                    <label>Documento PDF</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      :src="archivoPdf"
                    />
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Actualizar</button>
                </div>
            </form>
        </div>
    </div>
     </v-container>
 </v-app>
</template>

<script>
    import { db } from '../firebaseDb';
    import Swal from 'sweetalert2'

    export default {
        data() {
            return {
                cedula: "",
                archivoPdf: "",
                tipos: ['Cédula', 'Tarjeta de identidad'],
                tipoVivienda: ['Casa', 'Apartamento', 'Finca'],
                tipoModalidad: ['Interés social', 'De ahorro programado'],
                tipoVehiculo: ['Carro', 'Moto'],
                usuario: {
                }
            }
        },
        created() {
            let dbRef = db.collection('usuarios').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.usuario = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('usuarios').doc(this.$route.params.id)
                .update(this.usuario).then(() => {
                                  Swal.fire(
  '¡Actualizado!',
  '¡Registro se ha editado correctamente!',
  'success'
)
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>