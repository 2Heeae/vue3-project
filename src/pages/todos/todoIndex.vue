<template>
    <router-view/>  
      <div>
        <h1 class="display-4 text-center p-3"
          style="color: #14213d;">
          📌𝗧𝗼-𝗗𝗼 𝗟𝗶𝘀𝘁
        </h1>
        <SearchBar @search= "search"/>
        <hr style="padding: 5px"/>
        <TodoSimpleFormVue 
          v-show="!searchText"
          @add-todo="addTodo" 
        />
        <div style="color:red; margin: 7px;">
            {{ error }}
        </div>
        <div style="padding: 3px"></div>
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
          @update-todo="updateTodo"
        />
      </div>
    </template>
    
    <script>
    import { ref, computed } from 'vue';
    import TodoSimpleFormVue from '@/components/TodoSimpleForm.vue';
    import TodoListVue from '@/components/TodoList.vue';
    import SearchBar from '@/components/searchBar.vue';
    import axios from 'axios';
    
    export default{
      // 컴포넌트를 등록해줘야 사용 가능함
      components: {
        TodoSimpleFormVue,
        TodoListVue,
        SearchBar
      },
      setup() {
        const todos = ref([]);
        const error = ref('');
        const totalTodos = ref(0);
        const searchText = ref('');
    
        const getTodos = async () => {
          try{
            const res = await axios.get('http://localhost:3000/todos');
            todos.value = res.data;
            totalTodos.value = res.data.length;
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
            completed: todo.completed,
            date: todo.date
            });
            todos.value.push(res.data);
            totalTodos.value++;
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };
    
        const toggleTodo = async (index) => {
          error.value = '';
          const id = todos.value[index].id;
          try{
            await axios.patch('http://localhost:3000/todos/' + id, {
              completed: !todos.value[index].completed
            });
    
            todos.value[index].completed = !todos.value[index].completed;
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };
    
        const deleteTodo = async (id) => {
          error.value = '';
          try{
            await axios.delete('http://localhost:3000/todos/' + id);
            totalTodos.value--;
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }

        const updateTodo = async (id,subject) => {
          error.value = '';
          try{
            await axios.patch('http://localhost:3000/todos/' + id, {
              subject: subject
            });
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }
 
        const search = (stext) => {
          searchText.value = stext;
        };

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
          updateTodo,
          searchText,
          search,
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
    