<template>
  <div class="container">
    <h1 class="display-4 text-center p-3">To-Do List</h1>
    <input 
          class="form-control"
          type="text" 
          v-model="searchText"
          placeholder="빠른 검색"
    > 
    <hr />
    <TodoSimpleFormVue @add-todo="addTodo" />
    <div style="color:red">{{ error }}</div>

    <div 
      class="p-3"
      v-if="!filteredTodos.length"
    >
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
import axios from 'axios';

export default{
  // 컴포넌트를 등록해줘야 사용 가능함
  components: {
    TodoSimpleFormVue,
    TodoListVue
  },
  setup() {
    const todos = ref([]);
    const error = ref('');

    const getTodos = async () => {
      try{
        const res = await axios.get('http://localhost:3000/todos');
        todos.value = res.data;
      } catch (err) {
        console.log(err);
        error.value = 'DB 연결 에러가 발생하였습니다.';
      }
    };

    getTodos();

    const addTodo = async (todo) => {
      // DB에 todo를 저장
      error.value = '';
      try{
        const res = await axios.post('http://localhost:3000/todos', {
        subject: todo.subject,
        completed: todo.completed
        });
        todos.value.push(res.data);
      } catch (err) {
        console.log(err);
        error.value = 'DB 연결 에러가 발생하였습니다.';
      }
    };

    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    const deleteTodo = async (index) => {
      error.value = '';
      const id = todos.value[index].id;
      try{
        await axios.delete('http://localhost:3000/todos/' + id);
        todos.value.splice(index, 1);
      } catch(err) {
        console.log(err);
        error.value = 'DB 연결 에러가 발생하였습니다.';
      }
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
      error,
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
