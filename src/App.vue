<template>
  <div class="container">
    <h1>To-Do List</h1> 
    <TodoSimpleFormVue />
    
    <div v-if="!todos.length">
      추가된 Todo가 없습니다.
    </div>
    <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input 
            class="form-check-input" 
            type="checkbox"
            v-model="todo.completed"
          >
          <label 
            class="form-check-label"
            :class="{ todo: todo.completed }"
          >
            {{ todo.subject }}
          </label>
        </div>
        <div>
          <button 
            class="btn btn-danger btn-sm"
            @click="deleteTodo(index)"
            >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import TodoSimpleFormVue from './components/TodoSimpleForm.vue';

export default{
  // 컴포넌트를 등록해줘야 사용 가능함
  components: {
    TodoSimpleFormVue
  },
  setup() {
    const todo = ref('');
    const todos = ref([]);
    const hasError = ref(false);

    const onSubmit = () => {   
      if (todo.value == ''){
        hasError.value = true;
      }else{
        todos.value.push({
          id: Date.now(),
          subject: todo.value,
          coppleted: false,
        });
        hasError.value = false;
        todo.value = '';
      }

    };

    const deleteTodo = (index) => {
      console.log(index);
      todos.value.splice(index, 1);
    }

    return{
      todo,
      todos,
      onSubmit,
      hasError,
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
