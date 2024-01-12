<template>
  <nav class="navbar navbar-expand-xl navbar-light" 
       style="background-color: #14213d">
  <div class="container-fluid">
    <router-link 
      class="navbar-brand p-2" to="/"
      style="color: #fca311"
    >
      HOME |
    </router-link>
      <ul class="navbar-nav me-auto mb-xl-0">
        <li class="nav-item fs-5">
          <router-link 
            class="nav-link active" aria-current="page" 
            to="/todos" style="color: #ffffff"
          >
            TODO LIST
          </router-link>
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
