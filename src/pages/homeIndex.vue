<template>
  <div>
    <h1 class="display-5 text-center p-5">일하는 멋진어른이 되자!</h1>
    <SearchBar />
    <hr style="padding: 5px"/>
    <TodoSimpleFormVue />
    <div style="color:red; margin: 7px;">
        {{ error }}
    </div>
    <div style="padding: 3px"></div>
  </div>
</template>

<script>
    import TodoSimpleFormVue from '@/components/TodoSimpleForm.vue';
    import SearchBar from '@/components/searchBar.vue';
    
    export default{

      components: {
        TodoSimpleFormVue,
        SearchBar
      },
      setup() {

    }
  }
</script>