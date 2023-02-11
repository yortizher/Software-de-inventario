<template>
  <div class="input-group group">
    <input type="text" class="form-control " placeholder="Search" />
    <div class="input-group-append">
      <button class="btn1" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>
<style scoped>
    div.group {
         padding: 5% 30%;
    }
    .btn1 {
        height: 7vh;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        border-top-right-radius: 20%;
        border-bottom-right-radius: 20%;
        background-color: var(--tear);
    }
    .btn1:hover {
        background-color: var(--purple);
        color: var(--white);
    }

    /* div.group input:focus {
         outline: none;

     outline-color: red;
        outline-style: solid;
        outline-width: 3px; 
    } */
    input{
        border-color: black !important;
        border-width: 1px;
     
    }
    input:focus {
        box-shadow: none;
        border-color: black !important;
    }
</style>