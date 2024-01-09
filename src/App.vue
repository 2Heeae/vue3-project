<template>
  <div class="container">
    <h1>To-Do List</h1>
    <input 
          class="form-control"
          type="text" 
          v-model="searchText"
          placeholder="검색"
    > 
    <hr />
    <TodoSimpleFormVue @add-todo="addTodo" />

    <div v-if="!filteredTodos.length">
      내용이 없습니다.
    </div>
    <TodoListVue 
      :todos="filteredTodos" 
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import {ref, computed} from 'vue';
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

    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    const deleteTodo = (index) => {
      console.log(index);
      todos.value.splice(index, 1);
    }

    const searchText = ref('');
    const filteredTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter(todo => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });

    return{
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      searchText,
      filteredTodos,
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
