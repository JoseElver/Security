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
            <router-link class="nav-link pr-3" to="/crear" v-show="!hidden">Crear Hoja de Vida</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list" v-show="!hidden">Listado de usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
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
      }
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