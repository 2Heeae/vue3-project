<template>
    
      <div class="d-flex">
        <div class="flex-grow-1 me-2">  
            <button 
                class="btn btn-primary" 
                style="background-color: #fca311; border-color: #fca311;"
                type="submit"
                @click="openAddModal"
            >
            ➕︎ 새로운 목표 추가
            </button>
        </div>
      </div>
    
    <AddGoalModal 
        v-if="showAddModal"
        @close="closeModal"
        @add-goal="onSubmit"
    />
</template>

<script>
import { ref } from 'vue';
import AddGoalModal from './AddGoalModal.vue';

export default {
    components: {
        AddGoalModal
    },

    emits: ['add-goal'],
    setup(props, { emit }) {
        const goal = ref('');
        const hasError = ref(false);
        const showAddModal = ref(false);

        const onSubmit = (goal) => {
            console.log(goal);
            emit('add-goal',goal);
            showAddModal.value = false;
        };

        const closeModal = () => {
        showAddModal.value = false;
      };

        const openAddModal = () => {
            showAddModal.value = true;
        };

        return {
            goal,
            hasError,
            onSubmit,
            showAddModal,
            openAddModal,
            closeModal,
        }
    }
}
</script>

<style>
.btn {
    /* max-content : 자기 크기만큼 넓이를 가진다 */
    width: max-content;
}
</style>