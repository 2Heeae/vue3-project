<template>
  <AddGoalForm 
    @add-goal= "addGoal"
  />
  <div>
    <ul>
      <li v-for='goal in goals' :key='goal.id'>
        <i>{{ goal.title }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
import AddGoalForm from '@/components/todo/goal/AddGoalForm.vue';

export default {
    components: {
      AddGoalForm
    },
    props: {
      goals: {
          type: Array,
          required: true
      }
    },
    emits: ['add-goal'],
    setup( props, {emit} ){

      const addGoal = (goal) => {
        emit('add-goal',goal);
      };

      return {
        addGoal
      }
    }
}
</script>

<style>

</style>