<template>
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <div class="flex-grow-1 me-2">
        <input 
          class="form-control"
          type="text" 
          v-model="goal"
          style="background-color: #e5e5e5"
          maxlength="8"
          placeholder="➕︎ 새로운 목표"
        >
        </div>
        <div>
            <button 
                class="btn btn-primary" 
                style="background-color: #fca311; border-color: #fca311;"
                type="submit"
            >
            추가
            </button>
        </div>
      </div>
      <div v-show="hasError" style ="color:red; margin: 7px;" >
        목표가 입력되지 않았습니다.😟
      </div>
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    emits: ['add-goal'],
    setup(props, { emit }) {
        const goal = ref('');
        const hasError = ref(false);

        const onSubmit = () => {   
            if (goal.value == ''){
                hasError.value = true;
            }else{
                emit('add-goal', {
                    id: Date.now(),
                    title: goal.value,
                });
                hasError.value = false;
                goal.value = '';
            }
        };

        return {
            goal,
            hasError,
            onSubmit,
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