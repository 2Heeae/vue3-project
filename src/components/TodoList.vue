<template>
    <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <!-- 
            props는 부모에서 자식으로 전달함 (단방향)
            v-model을 사용하게 되면 양방향이기 때문에
            :vlaue로 받아 값이 바뀌면 toggleTodo 함수로
            부모에게 emit하도록 수정

         -->
            <input 
            class="form-check-input" 
            type="checkbox"
            :value="todo.completed"
            @change="toggleTodo(index)"
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
</template>

<script>
export default {
    // porps: ['todos']
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    setup(props, context){
        const toggleTodo = (index) => {
            context.emit('toggle-todo', index);
        };
        return {
            toggleTodo,
        }
    }
}
</script>

<style>

</style>