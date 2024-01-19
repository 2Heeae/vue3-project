<template>
    <div 
      class="card mt-2"
      v-for="(todo, index) in todos"
      :key="todo.id"
      :style="{borderColor : goals.filter(goal => {
              goal.title == todo.goal
            }).color}"
    >
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input 
            class="form-check-input" 
            type="checkbox"
            :checked="todo.completed"
            @change="toggleTodo(index)"
          >
          <span style="color: gray; font-weight: bold; padding-right: 5px;">
            [ {{ todo.goal }} ] 
          </span>
          <label 
            class="form-check-label"
            :class="{ todo: todo.completed }"
          >
            {{ todo.title }}
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
      :todoTitle="todoUpdateTitle"
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
      },
      goals: {
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
      const todoUpdateTitle = ref(null);

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
        todoUpdateTitle.value = null;
      };

      const deleteTodo = () => {
          emit('delete-todo', todoDeleteId.value);
          // 삭제후 창 닫기
          showDeleteModal.value = false;
          todoDeleteId.value = null;
      };

      const openUpdateModal = (todo) => {
        console.log("수정모달을 열며..",todo);
        todoUpdateId.value = todo.id;
        todoUpdateTitle.value = todo.title;
        showUpdateModal.value = true;
      };

      const updateTodo = (title) => {
          emit('update-todo', todoUpdateId.value, title);
          showUpdateModal.value = false;
          todoUpdateId.value = null;
          todoUpdateTitle.value = null;
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
          todoUpdateTitle,
      }
  }
}
</script>

<style>

</style>