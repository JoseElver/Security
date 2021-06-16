<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
         <ul class="nav navbar-nav flex-row float-left">
          <li class="nav-item">
            <v-img
  src="./assets/logotipo.png"
  max-height="60"
  max-width="50"
  class="logotipo"
></v-img>
          </li>
          <li class="letrero">
            Security
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <button class="nav-link pr-3" @click="crear()">Crear Hoja de Vida</button>
          </li>
          <li class="nav-item">
            <button class="nav-link pr-3" @click="listado()">Listado de usuarios</button>
          </li>
          <li class="nav-item">
            <button class="nav-link pr-3" @click="editarPerfil()">Editar perfil</button>
          </li>
          <li class="nav-item">
              <button class="nav-link pr-3" @click="sesion()">{{estaLog ? 'Cerrar sesión' : 'Iniciar sesión'}}</button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
    
  </div>
  
</template>
<script>
import Swal from "sweetalert2";
  export default {
    data () {
      return {
        hidden: false,
        estaLog: global.estaLogeado,
      }
    },
      updated(){
    if(global.estaLogeado == true){ 
              console.log("el valor cambió " + global.estaLogeado);
              this.estaLog=true;
          }
  },
     methods: {
      sesion(){
          
          if(global.estaLogeado == false){
           this.$router.push('Login');
           
          }
          if(global.estaLogeado == true){
            Swal.fire({
          title: '¿Estás seguro que desea cerrar sesión?',
          text: 'Ya no puedes revertir esta acción',
          type: 'info',
          showCancelButton: true,
          confirmButtonText: 'SI, seguro',
          cancelButtonText: 'Cancelar',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.estaLog=false;
           global.estaLogeado=false;
           this.$router.push('/');
          } else {
             return
          }
        })
           
          }
       
      },
        crear(){
          
          if(global.estaLogeado == true){
           this.$router.push('crear');
           
          }
          if(global.estaLogeado == false){ 
            Swal.fire(
              "¡Atención!",
              "Para crear su hoja de vida debes registrarte",
              "info"
            );
          }
       
      },
        listado(){
          
          if(global.estaLogeado == true){
           this.$router.push('list');
           
          }
          if(global.estaLogeado == false){ 
           Swal.fire(
              "¡Atención!",
              "Para ver el perfil debes registrarte primero",
              "info"
            );
          }
       
      },
          editarPerfil(){
          
          if(global.estaLogeado == true){
           this.$router.push('editarPerfil');
           
          }
          if(global.estaLogeado == false){ 
           Swal.fire(
              "¡Atención!",
              "Para ver el perfil debes registrarte primero",
              "info"
            );
          }
       
      },
  },
  }
</script>
<style scoped>
.icono{
  color: white;
}
.letrero{
 color: white;
  font-size: 28px;
  margin-left: 15px;
}
.bg-dark {
    background-color: rgb(26, 56, 125)!important;
}
.nav-link {
    color: white !important;
}

</style>