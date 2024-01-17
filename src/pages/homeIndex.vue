<template>
  <div>
    <h1 class="display-5 text-center p-5" 
    style="font-weight: bold; color: #14213d;" >
      📅𝗧𝗼-𝗗𝗼 𝗖𝗮𝗹𝗲𝗻𝗱𝗮𝗿
    </h1>

    <div class='demo-app'>
    <div class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked="calendarOptions.weekends"
            @change= "handleWeekendsToggle"
          />
          toggle weekends
        </label>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <b>{{ event.date }}</b>
            <i>{{ event.subject }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options= "calendarOptions"
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>

  </div>  
</template>

<script>
import { ref,reactive } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import axios from 'axios';

export default {
  components: {
    FullCalendar
  },
  setup(){
    const error = ref('');
    const currentEvents = ref([]);

    const getTodos = async () => {
      try{
        const res = await axios.get('http://localhost:3000/todos');
        currentEvents.value = res.data;
        console.log(currentEvents.value);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        error.value = 'DB 연결 에러가 발생하였습니다.';
      }
    };
    
      getTodos();

    const handleDateSelect = async (selectInfo) => {
      console.log("1임",selectInfo);
      let subject = prompt('이벤트를 입력해주세요.');
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect();  // 날짜 선택 clear

      if (subject){
        console.log("2임",subject,selectInfo);
        try {
          await calendarApi.addEvent({
            id : createEventId(),
            subject,
            completed: false,
            date: selectInfo.startStr
          })
        } catch (err){
          console.log(err);
          error.value = '이벤트 저장 시 에러가 발생하였습니다.';
        }
      }
    };

    const handleEventClick = async (clickInfo) => {
      if (confirm(`'${clickInfo.event.title}'를 삭제하시겠습니까?`)){
        try {
          clickInfo.event.remove();
        } catch (err){
          console.log(err);
          error.value = '이벤트 삭제 시 에러가 발생하였습니다.';
        }
      }
    };

    const handleEvents = () => {

    };

    const calendarOptions = reactive({
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin //dateClick에 필요
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialView: 'dayGridMonth',
      initialEvents: INITIAL_EVENTS,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      select: handleDateSelect,
      eventClick: handleEventClick,
      eventsSet: handleEvents
      /* DB업데이트 시 사용:
      eventAdd:
      eventChange:
      eventRemove:
      */
    });

    const handleWeekendsToggle = () => {
      calendarOptions.weekends = !calendarOptions.weekends;
    };

    return {
      calendarOptions,
      currentEvents,
      handleWeekendsToggle,
      handleDateSelect,
      handleEventClick,
      handleEvents,
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