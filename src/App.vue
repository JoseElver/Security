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
           this.estaLog=false;
           global.estaLogeado=false;
          }
       
      },
        crear(){
          
          if(global.estaLogeado == true){
           this.$router.push('crear');
           
          }
          if(global.estaLogeado == false){ 
           alert('Atención, para crear tu hoja de vida debes registrarte');
           this.$router.push('Login');
          }
       
      },
        listado(){
          
          if(global.estaLogeado == true){
           this.$router.push('list');
           
          }
          if(global.estaLogeado == false){ 
          alert('Atención, para ver el listado de usuarios debes registrarte');
           this.$router.push('Login');
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