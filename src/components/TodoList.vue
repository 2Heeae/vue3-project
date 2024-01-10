<template>
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
            :checked="todo.completed"
            @change="toggleTodo(index)"
          >
          <label 
            class="form-check-label"
            :class="{ todo: todo.completed }"
          >
            {{ todo.subject }}
          </label>
          <small style="float:right; margin-right: 10px;">{{ todo.date }}</small>
        </div>
        <div>
          <button 
            class="btn btn-danger btn-sm"
            @click="openDeleteModal(todo.id)"
          >
            삭제
          </button>
        </div>
      </div>
    </div>  
    <deleteModal 
      v-if="showDeleteModal"
      @close="closeModal"
      @delete="deleteTodo"
    />
</template>

<script>
import deleteModal from './deleteModal.vue';
import {ref} from 'vue';

export default {
  components:{
    deleteModal
  },
  props: {
      todos: {
          type: Array,
          required: true
      }
  },
  emits: ['toggle-todo', 'delete-todo'],
  setup(props, { emit }){
      const showDeleteModal = ref(false);
      const todoDeleteId = ref(null);

      const toggleTodo = (index) => {
          emit('toggle-todo', index);
      };

      const openDeleteModal = (id) => {
        console.log(id);
        todoDeleteId.value = id;
        showDeleteModal.value = true;
      };

      const closeModal = () => {
        todoDeleteId.value = null;
        showDeleteModal.value = false;
      };

      const deleteTodo = () => {
          emit('delete-todo', todoDeleteId.value);
          // 삭제후 창 닫기
          showDeleteModal.value = false;
          todoDeleteId.value = null;
      };

      return {
          toggleTodo,
          deleteTodo,
          showDeleteModal,
          openDeleteModal,
          closeModal,
      }
  }
}
</script>

<style>

</style>