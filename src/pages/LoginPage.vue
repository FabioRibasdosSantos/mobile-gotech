<template>
  <div class="row q-pa-md row-login">
   <div class= "column d-flex justify-content-center align-items-center left-login">
     <div class="col-5">
       <h2 class="text-center mb-5 title-login">Faça o login</h2>
       <form>
         <div class=" login-form">
          <div
           label="E-mail"
           label-for="email"
           >
           E-mail
             <q-input
               id="email"
               type="email"
               placeholder='Digite seu email'
               autocomplete="off"
               v-model="form.email"
             ></q-input>
       </div>

           <q-form-group label-for="password"
           >

             <label class="d-flex justify-content-between">
               Senha
               <small><a href="#">Esqueceu sua senha?</a></small>
             </label>
                <q-input
                 id="password"
                 type="password"
                 placeholder="Digite sua senha"
                 v-model="form.password"
             ></q-input>

           </q-form-group>

           <q-button
             type="submite"
             variant="primary"
             block
             @click="login">
             <i class="button-color"> Entrar</i>
           </q-button>

           <hr>
         </div>
       </form>
     </div>
   </div>

   <div calss= "col-7 d-flex justify-content-center align-items-center img-login ">
     <img src="../assets/school.svg"/>
   </div>
 </div>
 </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    redirectToHome () {
      this.$router.replace({ name: 'HomePage' })
    }
  }
})
</script>

<style >

*::after,
*::before {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 text-decoration: none;
}
.login-form {
 display: grid;
 align-items: center;
 height: 50vh;
}

.button-color {
 background-color: #002956;
 color: #FFFFFF;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 cursor: pointer;
}

.left-login {
 background-color: #f2f2f2;
}

.row-login {
 margin-left: 0;
 width: 100vw;
 height: 100vh;
}

.title.login {
   font-weight: bold;
}

.img-login {
  align-items: center;
  width: 600px;
  height: 600px;
}
</style>
