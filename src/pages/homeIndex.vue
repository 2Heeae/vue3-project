<template>
  <div>
    <h1 class="display-5 text-center p-5" 
    style="font-weight: bold; color: #14213d;" >
      📅𝗧𝗼-𝗗𝗼 𝗖𝗮𝗹𝗲𝗻𝗱𝗮𝗿
    </h1>
    <FullCalendar :options='calendarOptions'>
    <template v-slot:eventContent='arg'>
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
  </div>  
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

export default{
  components: {
    FullCalendar
  },
  setup() {
    const calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: false,
      events: [
        { title: 'Meeting', start: new Date() }
      ]
    };

    return {
    calendarOptions
  }    
  }

}
</script>
