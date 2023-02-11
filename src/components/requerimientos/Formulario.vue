<template>
  <div class="container my-4">
    <h4 class="titulo ">Realizar solicitud</h4>
    <form>
      <div class="form-group">
        <label class="my-1" for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="nombreHelp"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div class="form-group">
        <label class="my-1" for="area">Area</label>
        <input
          type="text"
          class="form-control"
          id="area"
          aria-describedby="nombreHelp"
          placeholder="Ingresa tu area"
        />
      </div>
      <div class="form-group">
        <label class="my-1" for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Ingresa tu email"
        />
      </div>
      <div class="form-group">
        <label class="my-1" for="mensaje">Descripción de solicitud</label>
        <textarea
          class="form-control"
          id="mensaje"
          rows="3"
          placeholder="Escribe aquí tu mensaje"
        ></textarea>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="acepto" />
        <label class="form-check-label my-1" for="acepto"
          >Acepto los términos y condiciones</label
        >
      </div>
      <button type="submit" class="btn1 ">Enviar</button>
    </form>
  </div>
</template>
<style scoped>
.container {
    width: 50%;
    padding: 1% 1%;
    background: rgba(97,3,69,0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(97,3,69,0.25);
    border-radius: 5%;
    overflow: hidden;

  
}
.titulo {
  margin: 1% auto;
  text-align: center;
  color: var(--white);
}
input:focus, textarea:focus {
    box-shadow: none;
    border-color: black;
}
.btn1{
    width: 100%;
    height: 6vh;
    border: none ;
    background-color: var(--tear);
    border-radius: 7px;
    color: var(--white);
}
.btn1:hover{
    background-color: var(--white);
    color: var(--dark);
}
</style>