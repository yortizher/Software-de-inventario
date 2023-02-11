<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Modal from '../Login/ModalRecuperar.vue';
import ModalRegistrarse from "../Login/ModalRegistrarse.vue"

</script>

<template>
  <div class="contenedor">
    <div class="row">
      <div class="col imagen" style="position: relative">
        <div style="height: 100vh; overflow: hidden; position: absolute">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style="height: 100vh; width: 100%"
          >
            <path
              d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z"
              style="stroke: none; fill: #fff"
            ></path>
          </svg>
        </div>
        <img
          style="position: relative"
          class="img"
          src="https://softr-prod.imgix.net/applications/81875539-05bb-4550-b7d5-6dba5aab51ae/assets/virtual-team-meeting-57e2e5.svg"
          alt=""
        />
      </div>
      <div class="col formulario " style="position: relative">
        <i style="position: relative" class="fa-solid fa-user icon"></i>
        
        <form>
    
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Correo</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Contraseña</label>
          </div>

          <!-- <button class="mt-5 mb-3 button">Iniciar sesión</button> este es el que se va a utilizar -->

          <button class="mt-5 mb-3 button"><router-link to="/home">Iniciar sesión</router-link></button> 

          <button type="button" id="btn1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Olvide mi contraseña
          </button>
          <button type="button" id="btn2" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
            Registrarse
          </button>
          <!-- <button type="button" id="btn2" >
            <router-link id="registrarse" to="/signin"> Registrarse</router-link>
          </button> -->
          <button class="mt-3 button1">Iniciar sesión como administrador</button>
        </form>
      </div>
    </div>
  </div>
  <Modal/>
  <ModalRegistrarse/>
</template>
<style scoped>
.contenedor {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  /* background-color: blue; */
}

.contenedor .imagen {
  justify-content: center;
  text-align: center;
  align-items: center;

  margin: 0;
  padding: 0;
  background: var(--purple);
}
.contenedor .imagen .img {
  width: 100%;
  padding-top: 3rem;
}
.contenedor .imagen svg .borde {
  fill: rgb(251, 242, 242);
  height: 1px;
}

.contenedor .formulario {
  justify-content: center;
  text-align: center;
  align-items: center;
  /* background: darkgreen; */
  padding-top: 3.2rem;
  height: 100vh;
}

.icon {
  font-size: 8rem;
  margin-bottom: -200%;
  color: var(--tear);
}
.contenedor .formulario form {
  margin-top: -4rem;
  padding: 14%;
}
.contenedor .formulario svg{

justify-content: center !important;
align-items: center !important;
text-align: center !important;
margin: 0 auto !important;


}
.formulario input {
  border: none;
  border-radius: 0;
  border-bottom: solid;
  border-width: 1px;
}
.formulario input:focus {
  box-shadow: none !important;
}
.button{
  width: 100%;
  height: 7vh;
  padding: 5px;
  border-style: none;
  border-radius: 7px;
  background-color: var(--tear);
  color: var(--white);
}
.button:hover{
  background-color: var(--purple);
  color: var(--white);
}

/* ARREGLAR ESPACIO ENTRE LOS botones */

#btn1{
  border-style: none ;
  background-color: var(--white);
  color: var(--tear);
  
}
#btn2{
  border-style: none ;
  background-color: var(--white);
  text-decoration: none;
  color: var(--tear);
  
}
/* #btn2 #registrarse{
  text-decoration: none;
  color: var(--tear);
} */
.button1{
  width: 100%;
  height: 7vh;
  padding: 5px;
  border-style: none;
  border-radius: 7px;
  background-color: var(--purple);
  color: var(--white);
}
.button1:hover{
  background-color: var(--tear);
  color: var(--white);
}
   
</style>

