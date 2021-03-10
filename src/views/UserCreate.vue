<template>
 <v-app id="inspire">
     <v-container>
    <div >
        <ejs-accordion class="acordion">
        <e-accordionitems>
    <e-accordionitem expanded='true' header='Información personal' content='<form @submit.prevent="onFormSubmit">
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
                    <input type="text" class="form-control" v-model="usuario.telefono" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Guardar</button>
                </div>
            </form>'></e-accordionitem>
    <e-accordionitem header='Propiedades' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.'></e-accordionitem>
    <e-accordionitem header='Vehiculo' content='JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.'></e-accordionitem>
  </e-accordionitems>
</ejs-accordion>
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
                    
                },
                 
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

<style>
.acordion{
  margin: 20px;
  padding: 15px;
}
 @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>