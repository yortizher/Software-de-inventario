<script setup>
  import { computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  console.log(route.meta.bandera)
   
</script>
<template >
  <div v-if="route.meta.bandera"  class="container justify-content-center">
    <div class="row">
      <div
        class="card mx-2 col col-4 mx-auto align-items-center text-center mt-3 p-0"
        style="height: 40vh;"
      >
       <RouterLink to="/gestion" class="router">
          <img
            src="https://i.ibb.co/3BCZ46k/Gestion-2.png"
            class="card-img-top"
            alt="..."
          />
          
          <div class="card-body ">
            <p class="card-text">Gestión</p>
          </div>
        </RouterLink>
      </div>

      <div
        class="card mx-2 col-4 mx-auto align-items-center text-center mt-3"
        style="height: 40vh;"
      >
      <RouterLink to="/digital" class="router">
          <img
            src="https://i.ibb.co/VNKHbfP/Digital-2.png"
            class="card-img-top"
            alt="..."
          />
         
          <div class="card-body">
            <p class="card-text">Archivo digital</p>
          </div>
        </RouterLink>
      </div>
      <div
        class="card mx-2 col-4 mx-auto align-items-center text-center mt-3"
        style="height: 40vh;"
      >
      <RouterLink to="/fisico" class="router">
          <img
            src="https://i.ibb.co/cL2bBFc/Fisico.png"
            class="card-img-top"
            alt="..."
          />
         
          <div class="card-body">
            <p class="card-text">Archivo físico</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="row">
      <div
        class="card mx-2 col-4 mx-auto align-items-center text-center mt-3"
        style="height: 40vh;"
      >
      <RouterLink to="/estatus" class="router">
        <img
          src="https://i.ibb.co/h1DDYF3/Estatus.png"
          class="card-img-top"
          alt="..."
        />
       
        <div class="card-body">
          <p class="card-text">Mi estatus</p>
        </div>
      </RouterLink>
      </div>
      <div
        class="card mx-2 col-4 mx-auto align-items-center text-center mt-3"
        style="height: 40vh;"
      >
      <RouterLink to="/estadisticas" class="router">
        <img
          src="https://i.ibb.co/255T7Ck/Estadistica.png"
          class="card-img-top"
          alt="..."
        />
        
        <div class="card-body">
          <p class="card-text">Estadísticas</p>
        </div>
      </RouterLink>
      </div>
      <div
        class="card mx-2 col-4 mx-auto align-items-center text-center mt-3"
        style="height: 40vh;"
      >
      <RouterLink  to="/requerimientos" class="router"> 
        <img
          src="https://i.ibb.co/pRBwVS6/requerimientos-2.png"
          class="card-img-top "
          alt="..."
        />
       
        <div class="card-body">
          <p class="card-text">Requerimientos</p>
        </div>
      </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");

.container{
  overflow: hidden
}

.container .card {
  border: none;
  border-radius: 6%;
  -webkit-box-shadow: 0 -0.5px 19.5px 0 #b0a9ae;
  -moz-box-shadow: 0 -0.5px 19.5px 0 #b0a9ae;
  box-shadow: 0 -0.5px 19.5px 0 #b0a9ae;
  transition: all 0.25s;
  margin: 0;
  padding: 1%;

  width: 20rem;

}
.container .card:hover {
  transform: translateY(-10px);
}

.container .card img {
  width: 80%;
  height: 60%;
}

.container .card .card-img-top {
  margin: 0;
  padding: 0;
}

.router{
  text-decoration: none;
}

.card .card-body p {
  color: var(--dark);
  font-family: "Marck Script", cursive;
  font-weight: 100;
  font-size: 1.6rem;
 
}

</style>