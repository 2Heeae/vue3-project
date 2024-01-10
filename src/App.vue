<template>
  <nav class="navbar navbar-expand-xl navbar-light" style="background-color: #e3f2fd">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">갓생살기</router-link>
      <ul class="navbar-nav me-auto mb-2 mb-xl-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/todos">Todos</router-link>
        </li>
      </ul>
  </div>
</nav>
<div class="container">
  <router-view/> 
</div>
</template>

<script>
export default {}

</script>

<style>

</style>
