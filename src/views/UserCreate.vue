<template>
 <v-app id="inspire">
     <v-container fluid>
    <div class="row justify-content-center">
        <div >
            <h3 class="text-center">Información personal</h3>
            <form @submit.prevent="onFormSubmit">
                <v-layout  columns="*,*" rows="*,*,*,*"> 
                <div class="form-group">
                    <label col="0" row="0">Primer Nombre</label>
                    <input col="1" row="0" type="text" class="form-control" v-model="usuario.primernombre" required>
                </div>
                <div class="form-group">
                    <label col="0" row="1" >Segundo Nombre</label>
                    <input type="text" col="1" row="1" class="form-control" v-model="usuario.segundonombre" required>
                </div>
                <div class="form-group">
                    <label col="0" row="2">Primer Apellido</label>
                    <input col="1" row="2" type="text" class="form-control" v-model="usuario.primerapellido" required>
                </div>
                 <div class="form-group">
                    <label col="0" row="3">Segundo Apellido</label>
                    <input col="1" row="3" type="text" class="form-control" v-model="usuario.segundoapellido" required>
                </div>
                </v-layout >
                <v-layout columns="*,*" rows="*,*,*,*">
                <label col="0" row="0">Tipo de documento</label>
              <v-select
              col="1" row="0"
      v-model="usuario.tipodocumento" 
      :items="tipos"
      required
      dense
      solo
    ></v-select>
             <div class="form-group">
                    <label col="0" row="1" xs12 sm4>Documento</label>
                    <input type="number" col="1" row="1"  class="form-control" v-model="usuario.documento" required>
                </div>
                <div class="form-group">
                    <label col="0" row="2">Email</label>
                    <input type="email" col="1" row="2" class="form-control" v-model="usuario.email" required>
                </div>

                <div class="form-group">
                    <label col="0" row="3">Teléfono</label>
                    <input type="text" col="1" row="3" class="form-control" v-model="usuario.telefono" required>
                </div>
                </v-layout>
                <div class="row justify-content-center">
                    <button class="btn btn-primary btn-block">Guardar</button>
                </div>
            </form>
        </div>
    </div>
     </v-container>
 </v-app>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                tipos: ['Cédula', 'Tarjeta de identidad'],
                usuario: {
                    
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('usuarios').add(this.usuario).then(() => {
                    alert("User successfully created!");
                    this.usuario.primernombre = ''
                    this.usuario.segundonombre = ''
                    this.usuario.primerapellido = ''
                    this.usuario.segundoapellido = ''
                    this.usuario.tipodocumento = ''
                    this.usuario.documento = ''
                    this.usuario.email = ''
                    this.usuario.telefono = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>