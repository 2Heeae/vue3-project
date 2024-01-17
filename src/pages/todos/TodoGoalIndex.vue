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
import { ref } from 'vue';
import AddGoalForm from '@/components/todo/goal/AddGoalForm.vue';
import axios from 'axios';

export default {
    components: {
      AddGoalForm
    },
    setup(){
      const error = ref('');
      const goals = ref([]);
      const totalGoals = ref(0);
      
      const getGoals = async () => {
          try{
            const res = await axios.get('http://localhost:3000/goals');
            goals.value = res.data;
            totalGoals.value = res.data.length;
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
      };

      getGoals();

      const addGoal = async(goal) => {
        error.value = '';
          try{
            const res = await axios.post('http://localhost:3000/goals', {
              id: Date.now(),
              title: goal.title,
            });
            goals.value.push(res.data);
            totalGoals.value++;
            getGoals();
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
      };

      return {
        goals,
        getGoals,
        addGoal
      }
    }
}
</script>

<style>

</style>