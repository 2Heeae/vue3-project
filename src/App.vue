<template>
  <div class="container">
    <h1>To-Do List</h1> 
    <TodoSimpleFormVue @add-todo="addTodo" />

    <div v-if="!todos.length">
      추가된 Todo가 없습니다.
    </div>
    <TodoListVue :todos="todos" />
  </div>
</template>

<script>
import {ref} from 'vue';
import TodoSimpleFormVue from './components/TodoSimpleForm.vue';
import TodoListVue from './components/TodoList.vue';

export default{
  // 컴포넌트를 등록해줘야 사용 가능함
  components: {
    TodoSimpleFormVue,
    TodoListVue
  },
  setup() {
    const todos = ref([]);

    const addTodo = (todo) => {
      console.log(todo);
      todos.value.push(todo);
    };

    const deleteTodo = (index) => {
      console.log(index);
      todos.value.splice(index, 1);
    }

    return{
      todos,
      addTodo,
      deleteTodo
    }
  }
}
</script>

<style>
  .todo {
    color: gray;
    text-decoration: line-through;
  }
</style>
