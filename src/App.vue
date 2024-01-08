<template>
<div class="container">
  <h1>To-Do List</h1> 
  <!-- 
    form은 submit이 되면 reloading함... 
    이걸 방지하기 위해 onSubmit함수에 e.preventDefault(); 선언
    그치만 vue에서는 @submit.prevent 쓰면 똑같은 효과!
   -->
  <form 
    @submit.prevent="onSubmit"
    class="d-flex"
  >
    <div class="flex-grow-1">
      <input 
        class="form-control"
        type="text" 
        v-model="todo"
        placeholder="Type new to-do"
      >
    </div>
    <div>
      <button 
        class="btn btn-primary" 
        type="submit"
      >
        Add
      </button>
    </div>
  </form>
  {{ todos }}
</div>
</template>

<script>
import {ref} from 'vue';
export default{
  setup() {
    const todo = ref('');
    const todos = ref([]);

    const onSubmit = (e) => {   
      e.preventDefault();
      console.log(Date.now());
       //id는 유니크해야하니까 현재시간으로 설정
      todos.value.push({
        id: Date.now(),
        subject: todo.value
      });
    };

    return{
      todo,
      todos,
      onSubmit
    }
  }
}
</script>

<style>
  .name {
    color: blue;
  }
</style>
