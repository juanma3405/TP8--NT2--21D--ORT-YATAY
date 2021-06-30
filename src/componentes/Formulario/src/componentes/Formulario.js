
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
        formData: this.getInicialData(),
        formState: {},
        nombreLengthMin: 3,
        nombreLengthMax: 15,
        edadMin: 18,
        edadMax: 120,
        //usuarios: []
        urlUsuarios: 'https://60a96f6d20a641001730725a.mockapi.io/usuarios'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
     getInicialData(){
      return {
        nombre: "",
        edad:"",
        email:""
      }
    },

    async enviar() {
      try {
      await this.axios.post(this.urlUsuarios,this.formData,{'content-type':'application/json'})
      this.formData=this.getInicialData()
      this.formState._reset()
      }
      catch (error) {
        console.log("error")
      }
    }
  }
}


