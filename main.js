const app = new Vue({
    el: '#app',
    data: {
      errors: [],
      codigo: null,
      numero_de_documento: null,
      
      email: null
    },
    methods:{
      checkForm: function (e) {
        if (this.codigo && this.numero_de_documento && this.email) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.name) {
          this.errors.push('El codigo es obligatorio.');
        }
        if (!this.age) {
          this.errors.push('El numero de documento es obligatoria.');
        }

        if (!this.email) {
            this.errors.push('el correo es obligatoria.');
          }
  
        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  })