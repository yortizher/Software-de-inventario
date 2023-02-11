<template>
  <div class="table">
    <table>
      <tr>
        <th>No Caja</th>
        <th>Codigo</th>
        <th>Petición</th>
      </tr>
      <tr id="resultados">
        <td>Peter</td>
        <td>Griffin</td>
        <td>
          <i class="fa-sharp fa-solid fa-ticket icon"></i>
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