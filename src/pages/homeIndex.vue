<template>
  <div>
    <h1 class="display-5 text-center p-5" 
    style="font-weight: bold; color: #14213d;" >
      일하는 멋진어른이 되자!
    </h1>
    <SearchBar />
    <hr style="padding: 5px"/>
    <AddTodoForm @add-todo="addTodo"/>
    <div style="color:red; margin: 7px;">
        {{ error }}
    </div>
    <div style="padding: 3px"></div>
  </div>
</template>

<script>
  import AddTodoForm from '@/components/addTodoForm.vue';
  import SearchBar from '@/components/searchBar.vue';
      
  export default{
    components: {
      AddTodoForm,
      SearchBar
    },
    setup() {

  }
  }
</script>