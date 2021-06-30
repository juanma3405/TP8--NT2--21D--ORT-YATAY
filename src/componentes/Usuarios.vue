<template>
  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h1>Usuarios</h1>
      <hr />
      <br />

      <!--  <pre>{{ usuarios }}</pre> -->

      <div class="alert alert-info">
        <div v-if="getUsuarios.length">
          <div
            class="media alert alert-warning"
            v-for="(usuario, index) in getUsuarios"
            :key="index"
          >
            <div class="media-body ml-3">
              <h5>
                <u>Usuario {{ index + 1 }}</u>
              </h5>
              <br />
              <p>Usuario: {{ usuario.nombre }}</p>
              <p>Edad: {{ usuario.edad }}</p>
              <p>Email: {{ usuario.email }}</p>
            </div>
          </div>
        </div>
        <h2 v-else class="alert alert-warning">
          no se encontraron usuarios disponibles
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {
     this.$store.dispatch('getUsuarios')
    },
    data () {
      return {
        
      }
    },
    methods: {    
      
    },
    computed: {
       getUsuarios() {
         return this.$store.state.usuarios
    }
  }
  }


</script>

<style scoped lang="css">
.src-componentes-usuarios {
}

.jumbotron {
  background-color: white;
  color: darkblue;
}
</style>
