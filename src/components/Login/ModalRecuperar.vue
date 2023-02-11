<script setup>
</script>

<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Ingrese su correo</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input class="recuperar" type="email" required>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="button" class="btn btn1">Recuperar contraseña</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
div.modal-header{
  border-bottom-style: none;
  background-color: var(--tear);
  color: var(--white);
}
div.modal-footer{
  border-top-style: none;
}
input.recuperar{
  width: 100%;
  border-style: none;
  border-bottom-style: solid;
}
button.btn1{
  background-color: var(--purple);
  color: var(--white);
}
</style>