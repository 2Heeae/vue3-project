<template>
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <!-- 목표 영역 -->
        <select 
            class="me-2" 
            v-model="selectedGoal" 
            style="width: max-content;"
        >
            <option value="" disabled selected hidden>선택</option>
            <option 
                v-for="goal in goals" 
                :key="goal.id" 
                :value="goal.title"
            >
            {{ goal.title }}
            </option>
        </select>

        <!-- TODO 영역  -->         
        <div class="flex-grow-1 me-2">           
        <input 
          class="form-control"
          type="text" 
          v-model="todo"
          style="background-color: #e5e5e5"
          placeholder="➕︎ 새로운 할 일을 입력해주세요."
        >
        </div>
        <div>
            <button 
                class="btn btn-primary" 
                style="background-color: #fca311; border-color: #fca311;"
                type="submit"
                @click="todoRouter"
            >
            추가
            </button>
        </div>
      </div>
      <div v-show="hasErrorTodo" style ="color:red; margin: 7px;" >
        할 일이 입력되지 않았습니다.😟
      </div>
      <div v-show="hasErrorGoal" style ="color:red; margin: 7px;" >
        목표를 먼저 선택해주세요!😟
      </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';

export default {
    emits: ['add-todo'],
    setup(props, { emit }) {
        const todo = ref('');
        const goals = ref([]);
        const selectedGoal = ref('');
        const hasErrorTodo = ref(false);
        const hasErrorGoal = ref(false);

        const error = ref('');
        const router = useRouter();

        const todoRouter = () => {
            router.push({ path: "/todos" });
        };

        const getGoals = async () => {
          try{
            const res = await axios.get('http://localhost:3000/goals');
            goals.value = res.data;
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };

        getGoals();

        const onSubmit = () => {
            if(selectedGoal.value == ''){
                hasErrorGoal.value = true;
            }else{
                hasErrorGoal.value = false;

                if (todo.value == ''){
                    hasErrorTodo.value = true;
                }else{
                    let today = new Date();
                    today = today.toISOString().replace('T', ' ').substring(0, 10);
                    emit('add-todo', {
                        id: Date.now(),
                        title: todo.value,
                        completed: false,
                        date: today
                    });
                    hasErrorTodo.value = false;
                    todo.value = '';
                }
            }
            
        };

        return {
            todo,
            goals,
            selectedGoal,
            hasErrorTodo,
            hasErrorGoal,
            onSubmit,
            todoRouter
        }
    }
}
</script>

<style>

</style>