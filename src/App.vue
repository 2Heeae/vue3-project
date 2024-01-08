<template>
  <!-- 
    v-show는 모두 렌더링 되고 참이 아니면 display:none
    v-if는 조건에 만족하는 것만 렌더링함
    사용법: 자주 바뀌면 v-show, 안 바뀌면 v-if
  -->
  <!--
    <div v-if="toggle">true</div>
    <div v-show="!toggle">false</div>
    <button @click="onToggle">click</button> 
  -->
  <div class="container">
    <h1>To-Do List</h1> 
    <!-- 
      form은 submit이 되면 reloading함... 
      이걸 방지하기 위해 onSubmit함수에 e.preventDefault(); 선언
      그치만 vue에서는 @submit.prevent 쓰면 똑같은 효과!
    -->
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
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
      </div>
      <div v-show="hasError" style ="color:red" >
        This field cannot be empty
      </div>
    </form>
    <!-- v-for를 사용하기 위해 key 바인딩 필수!! -->
    <div 
      v-for="todo in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2">
        {{ todo.subject }}
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default{
  setup() {
    const todo = ref('');
    const todos = ref([
      {id: 1, subject: '휴대폰 사기'},
      {id: 2, subject: '장보기'}
    ]);

    const hasError = ref(false);

    const onSubmit = () => {   
      if (todo.value == ''){
        hasError.value = true;
      }else{
        console.log(Date.now());
        //id는 유니크해야하니까 현재시간으로 설정
        todos.value.push({
          id: Date.now(),
          subject: todo.value
        });
        hasError.value = false;
      }

    };

    return{
      todo,
      todos,
      onSubmit,
      hasError
    }
  }
}
</script>

<style>
  .name {
    color: blue;
  }
</style>
