<template>
    <router-view/>  
      <div>
        <h1 class= "display-5 text-center p-5"
          style= "font-weight: bold; color: #14213d;">
          📌 𝗧𝗼-𝗗𝗼 𝗟𝗶𝘀𝘁
        </h1>
        <div class='demo-app'>
          <!-- 사이드바 영역 -->
          <div class='demo-app-sidebar'>
            <div class='demo-app-sidebar-section'>
              <TodoGoalIndexVue 
                :todos = "todos"
                :goals = "goals"
                @add-goal = "addGoal"
                @delete-goal="deleteGoal"
                @update-goal="updateGoal"
              />
            </div>
          </div>
          <!-- 메인 영역 -->
          <div class='demo-app-main'>
            <SearchBar @search= "search"/>
            <hr style= "padding: 5px"/>
            <AddTodoForm 
              v-show= "!searchText"
              :goals = "goals"
              @add-todo= "addTodo" 
            />
            <div style= "color:red; margin: 7px;">
                {{ error }}
            </div>
            <div style= "padding: 3px"></div>
            <div 
              class= "p-3"
              v-if="!filteredTodos.length"
            >
              내용이 없습니다.
            </div>
            <div 
              class= "progress" 
              v-if= "filteredTodos.length" 
              v-show= "!searchText" >
              <div
                class= "progress-bar progress-bar-striped progress-bar-animated progressStyle"
                role= "progressbar"
                aria-valuenow= progress
                aria-valuemin= "0" 
                aria-valuemax= "100">
                전체 목표 달성: {{  progress }}%
              </div>
            </div>
            <div style= "padding: 3px">
            </div>
            <TodoListVue 
              :goals="goals"
              :todos="filteredTodos" 
              @toggle-todo="toggleTodo"
              @delete-todo="deleteTodo"
              @update-todo="updateTodo"
            />
          </div>
        </div>
      </div>
    </template>
    
    <script>
    import { ref, computed } from 'vue';
    import axios from 'axios';
    import AddTodoForm from '@/components/todo/AddTodoForm.vue';
    import TodoListVue from '@/components/todo/TodoList.vue';
    import SearchBar from '@/components/todo/SearchBar.vue';
    import TodoGoalIndexVue from './TodoGoalIndex.vue';
    import { nanoid } from 'nanoid';

    export default{
      components: {
        AddTodoForm,
        TodoListVue,
        SearchBar,
        TodoGoalIndexVue
      },
      setup() {
        const todos = ref([]);
        const goals = ref([]);
        const error = ref('');
        const totalTodos = ref(0);
        const totalGoals = ref(0);
        const searchText = ref('');
        const progress = ref(0);
        const completedCnt = ref(0);
        const progressWidth = ref(0);
        const picked = ref(new Date());
    
        const getTodos = async () => {
          try{
            const res = await axios.get('/todos');
            todos.value = res.data;
            totalTodos.value = res.data.length;
            // progress 계산하기
            settingProgress();
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };

        getTodos();

        const settingProgress = () => {
            completedCnt.value = 0;
            todos.value.forEach(todo => todo.completed? completedCnt.value++ : '');
            countProgress();
            progressWidth.value = progress.value + '%';          
        };

        const countProgress = () => {
          console.log(completedCnt.value,totalTodos.value);
          progress.value = Math.ceil(completedCnt.value/totalTodos.value * 100);
        };

        const addTodo = async (todo) => {
          error.value = '';
          try{
            const res = await axios.post('/todos', {
              id: nanoid(8),
              goal: todo.goal,
              title: todo.title,
              completed: todo.completed,
              date: todo.date
            });
            todos.value.push(res.data);
            totalTodos.value++;
            getTodos();
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };
    
        const toggleTodo = async (index) => {
          error.value = '';
          try{
            await axios.put('/todos/updateToggle',{
              id: todos.value[index].id,
              goal: todos.value[index].goal,
              title: todos.value[index].title,
              completed: !todos.value[index].completed,
              date: todos.value[index].date
            });
            
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        };
    
        const deleteTodo = async (id) => {
          error.value = '';
          try{
            await axios.delete('/todos/' + id);
            totalTodos.value--;
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }

        const deleteGoal = async (id) => {
          error.value = '';
          try{
            await axios.delete('/goals/' + id);
            getGoals();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }

        const updateTodo = async (id,title) => {
          error.value = '';
          try{
            await axios.patch('/todos/updateTitle',{
              id: id,
              title: title
            });
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }

        const updateGoal = async (id,title) => {
          error.value = '';
          try{
            await axios.patch('/goals/updateTitle',{
              id: id,
              title: title
            });
            getGoals();
            getTodos();
          } catch(err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
        }
 
        const search = (stext) => {
          searchText.value = stext;
        };

        const filteredTodos = computed(() => {
          if (searchText.value) {
            return todos.value.filter(todo => {
              return todo.title.includes(searchText.value);
            });
          }
          return todos.value;
        });

        const filteredDates = computed(() => {
          console.log(picked.value);
          return 0;
        });

        const getGoals = async () => {
          try{
            const res = await axios.get('/goals');
            goals.value = res.data;
            totalGoals.value = res.data.length;
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
      };

      getGoals();

      const addGoal = async(pGoal) => {
        error.value = '';
          try{
            const res = await axios.post('/goals', {
              id: nanoid(8),
              title: pGoal.goal,
              color: pGoal.color
            });
            goals.value.push(res.data);
            totalGoals.value++;
          } catch (err) {
            console.log(err);
            error.value = 'DB 연결 에러가 발생하였습니다.';
          }
          getGoals();
      };
    

        return{
          todos,
          goals,
          addTodo,
          toggleTodo,
          deleteTodo,
          updateTodo,
          deleteGoal,
          updateGoal,
          searchText,
          search,
          filteredTodos,
          error,
          progress,
          countProgress,
          progressWidth,
          picked,
          filteredDates,
          getGoals,
          addGoal,
        }
      }
    }
    </script>
    
    <style lang='css'>
      h2 {
      margin: 0;
      font-size: 16px;
      }

      ul {
        margin: 0;
        padding: 0 0 0 1.5em;
      }

      li {
        margin: 1.5em 0;
        padding: 0;
      }

      b { /* used for event dates/times */
        margin-right: 3px;
      }
      .todo {
        color: gray;
        text-decoration: line-through;
      }
      .progressStyle {
        width: v-bind("progressWidth");
        background-color: #fca311;
      }
      .demo-app {
        display: flex;
        min-height: 100%;
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
      }

      .demo-app-sidebar {
        width: 300px;
        line-height: 1.5;
        background: #eaf9ff;
        border-right: 1px solid #d3e2e8;
      }

      .demo-app-sidebar-section {
        padding: 2em;
      }

      .demo-app-main {
        flex-grow: 1;
        padding: 3em;
      }

      .fc { /* the calendar root */
        max-width: 1100px;
        margin: 0 auto;
      }
    </style>