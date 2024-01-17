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
            class="btn btn-outline-primary btn-sm me-2"
            @click="openUpdateModal(todo)"
          >
            수정                         
          </button>
          <button 
            class="btn btn-outline-danger btn-sm"
            @click="openDeleteModal(todo.id)"
          >
            삭제
          </button>
        </div>
      </div>
    </div>  
    <DeleteModal 
      v-if="showDeleteModal"
      @close="closeModal"
      @delete="deleteTodo"
    />
    <UpdateModal
      :todoSubject="todoUpdateSubject"
      v-if="showUpdateModal"
      @close="closeModal"
      @update="updateTodo"
    />            
</template>

<script>
import DeleteModal from './DeleteModal.vue';
import UpdateModal from './UpdateModal.vue';
import {ref} from 'vue';

export default {
  components:{
    DeleteModal,
    UpdateModal
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
      const showUpdateModal = ref(false);
      const todoUpdateId = ref(null);
      const todoUpdateSubject = ref(null);

      const toggleTodo = (index) => {
          emit('toggle-todo', index);
      };

      const openDeleteModal = (id) => {
        todoDeleteId.value = id;
        showDeleteModal.value = true;
      };

      const closeModal = () => {
        todoDeleteId.value = null;
        showDeleteModal.value = false;
        todoUpdateId.value = null;
        showUpdateModal.value = false;
        todoUpdateSubject.value = null;
      };

      const deleteTodo = () => {
          emit('delete-todo', todoDeleteId.value);
          // 삭제후 창 닫기
          showDeleteModal.value = false;
          todoDeleteId.value = null;
      };

      const openUpdateModal = (todo) => {
        todoUpdateId.value = todo.id;
        todoUpdateSubject.value = todo.subject;
        showUpdateModal.value = true;
      };

      const updateTodo = (subject) => {
          emit('update-todo', todoUpdateId.value, subject);
          showUpdateModal.value = false;
          todoUpdateId.value = null;
          todoUpdateSubject.value = null;
      };

      return {
          toggleTodo,
          deleteTodo,
          updateTodo,
          showDeleteModal,
          openDeleteModal,
          showUpdateModal,
          openUpdateModal,
          closeModal,
          todoUpdateSubject,
      }
  }
}
</script>

<style>

</style>