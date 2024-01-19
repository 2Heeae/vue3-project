<template>
  <AddGoalForm 
    @add-goal= "addGoal"
  />
  <div>
    <h6 style="fontWeight: bold; padding-top:20px; padding-left: 8px;">
      나의 목표 ( >⩊o)╦̵̵̿╤─💥 [ {{ goals.length }} ]
    </h6> 
    <ul>
      <li 
        v-for='goal in goals' 
        :key='goal.id'
        @click="openEditGoalModal(goal)"
      >
        <p 
          style="fontWeight: bold"
          :style="{ color: goal.color}"
          @change="getNowGoal(goal.title)"
          >
          {{ goal.title }}
        </p>
        <div 
          class= "progress">
          <div
            class= "progress-bar progress-bar-striped progress-bar-animated progressStyle"
            :style="{backgroundColor: goal.color}"
            role= "progressbar"
            aria-valuenow= progress
            aria-valuemin= "0" 
            aria-valuemax= "100">
            목표 달성: {{  progress }}%
          </div>
        </div>
      </li>
    </ul>
  </div>
  <UpdateGoalModal 
    :goalTitle="goalUpdateTitle"
    v-if="showEditGoalModal"
    @close="closeModal"
    @delete="deleteGoal"
    @update="updateGoal"
  />
</template>

<script>
import { ref } from 'vue';
import AddGoalForm from '@/components/todo/goal/AddGoalForm.vue';
import UpdateGoalModal from '@/components/todo/goal/UpdateGoalModal.vue';

export default {
    components: {
      AddGoalForm,
      UpdateGoalModal
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
    emits: ['add-goal','delete-goal','update-goal'],
    setup( props, {emit} ){
      const progress = ref(0);
      const showEditGoalModal = ref(false);
      const goalUpdateId = ref(null);
      const goalUpdateTitle = ref(null);
      const nowGoal = ref('');
      const progressWidth = ref('');

      const addGoal = (goal) => {
        emit('add-goal',goal);
      };

      const openEditGoalModal = (goal) => {
        console.log("여기옴..?",goal);
        goalUpdateId.value = goal.id;
        goalUpdateTitle.value = goal.title;
        showEditGoalModal.value = true;
      };

      const closeModal = () => {
        goalUpdateId.value = null;
        goalUpdateTitle.value = null;
        showEditGoalModal.value = false;
      };

      const deleteGoal = () => {
        emit('delete-goal', goalUpdateId.value);
        showEditGoalModal.value = false;
        goalUpdateId.value = null;
      }

      const updateGoal = (title) => {
        emit('update-goal', goalUpdateId.value, title);
        showEditGoalModal.value = false;
        goalUpdateId.value = null;
        goalUpdateTitle.value = null;
      }

      const getNowGoal = (title) => {
        nowGoal.value = title;
      }


      return {
        progress,
        addGoal,
        nowGoal,
        progressWidth,
        showEditGoalModal,
        openEditGoalModal,
        getNowGoal,
        closeModal,
        deleteGoal,
        updateGoal,
        goalUpdateTitle
      }
    }
}
</script>

<style>
  .progressStyle {
    width: v-bind("progressWidth");
    background-color: #fca311;
  }
</style>