<template>
  
    <div
      class="modal fade"
      id="staticBackdrop1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
             Ingrese sus datos
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Nombre</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Apellido</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-md-6">
                <label for="inputAge" class="form-label">Edad</label>
                <input type="number" class="form-control" id="inputAge" />
              </div>
              <div class="col-md-6">
                <label for="inputPhone" class="form-label">Celular</label>
                <input type="number" class="form-control" id="inputPhone" />
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">Correo</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputContraseña" class="form-label">Contraseña</label>
                <input type="number" class="form-control" id="inputContraseña" />
              </div>
              <div class="col-md-6">
                <label for="inputContraseña1" class="form-label">Repetir contraseña</label>
                <input type="number" class="form-control" id="inputContraseña1" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              
              <div class="col-md-4">
                <label for="inputPais" class="form-label">País</label>
                <select id="inputPais" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputDepartamento" class="form-label">Departamento</label>
                <select id="inputDepartamento" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputCiudad" class="form-label">ciudad</label>
                <select id="inputCiudad" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Autoriza el tratamiento de sus datos
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn1">Registrarse</button>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  
</template>
<style scoped>
div.modal{
    overflow: auto;
}
div.modal-header{
    background-color: var(--tear);
    color: var(--white);
}
button.btn1{
    width: 100%;
    background-color: var(--purple);
    color: var(--white);
}

</style>