<template>
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <div class="flex-grow-1 me-2">
        <input 
          class="form-control"
          type="text" 
          v-model="todo"
          style="background-color: #e3f2fd"
          placeholder="➕︎ 새로운 할 일을 입력해주세요."
        >
        </div>
        <div>
            <button 
                class="btn btn-primary" 
                type="submit"
                @click="todoRouter"
            >
            추가
            </button>
        </div>
      </div>
      <div v-show="hasError" style ="color:red; margin: 7px;" >
        할 일이 입력되지 않았습니다.😟
      </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";

export default {
    emits: ['add-todo'],
    setup(props, { emit }) {
        const todo = ref('');
        const hasError = ref(false);
        const router = useRouter();

        const todoRouter = () => {
            router.push({ path: "/todos" });
        };

        const onSubmit = () => {   
            if (todo.value == ''){
                hasError.value = true;
            }else{
                let today = new Date();
                today.setHours(today.getHours() + 9);
                today = today.toISOString().replace('T', ' ').substring(0, 19);
                emit('add-todo', {
                    id: Date.now(),
                    subject: todo.value,
                    completed: false,
                    date: today
                });
                hasError.value = false;
                todo.value = '';
            }
        };

        return {
            todo,
            hasError,
            onSubmit,
            todoRouter
        }
    }
}
</script>

<style>

</style>