<template>
  <div class="table">
    <table>
      <tr>
        <th>No Caja</th>
        <th>Codigo</th>
        <th>Año</th>
        <th>Opciones</th>
      </tr>
      <tr id="resultados">
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        <td>
            <i type="button" class="fa-sharp fa-solid fa-file-arrow-down icon me-3"></i>
            <i type="button" class="fa-solid fa-share icon"></i>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.table {
  padding: 0 15%;
}
table {
  border-collapse: collapse;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
}
th,td {
  padding: 2px;
  text-align: left;
  border-bottom: 1px solid black;
}
#resultados:hover {
  background-color: var(--purple);
  color: var(--white);
}
.icon{
    font-size: 2rem;
}
</style>