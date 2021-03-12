<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <v-icon class="icono" >mdi-wrench</v-icon>
        <a class="letrero navbar-brand float-left">Security</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Crear Hoja de Vida</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Listado de usuarios</router-link>
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
        
      }
    },
  }
</script>
<style scoped>
.icono{
  color: white;
}
.letrero{
  margin-left: -650px;
  font-size: 28px
}
</style>