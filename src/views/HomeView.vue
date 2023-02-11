<script setup>
  import Navbar from '../components/home/Navbar.vue';
  import OpcionesGraficas from '../components/home/OpcionesGraficas.vue';
  import { reactive, ref, onMounted, computed, watch } from "vue";

  const location = window.location.href;
  console.log(location)


</script>
<template>
   <Navbar/>
   <OpcionesGraficas/>
</template>

<style  scoped>


</style>
