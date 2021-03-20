<template>
  <div>
    

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