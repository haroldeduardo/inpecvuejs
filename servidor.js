
function main(args) {
    return new Promise((resolve, reject) => {
        // Malos nombres de productos: vista, empire, mbp
        const badNames = ['vista', 'empire', 'mbp'];

        if (badNames.includes(args.name)) {
          reject({error: 'El producto ya existe'});
        }

        resolve({status: 'ok'});
    });
}




const apiUrl = 'https://vuecookbook.netlify.com/.netlify/functions/product-name?name=';

const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    name:''
  },
  methods:{
    checkForm:function(e) {
      e.preventDefault();
      this.errors = [];
      if(this.name === '') {
        this.errors.push("Product name is required.");
      } else {
        fetch(apiUrl+encodeURIComponent(this.name))
        .then(async res => {
          if(res.status === 204) {
            alert('Ok!')
          } else if(res.status === 400) {
            let errorResponse = await res.json();
            this.errors.push(errorResponse.error);
          }
        });
      }
    }
  }
})