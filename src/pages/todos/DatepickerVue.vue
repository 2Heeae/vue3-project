<template>
   <Datepicker 
    v-model="picked"
    :locale="locale"
    :week-starts-on="0"
    :input-format="inputFormat"
    :clearable="true"
    @update:model-value="onPickedDate"
    />
</template>

<script>
import Datepicker from 'vue3-datepicker';
import { ref, reactive } from 'vue';
import { ko } from 'date-fns/locale';
export default {
    components: {
        Datepicker,
    },
    setup(props, {emit}){
        const picked = ref(new Date());
        const locale = reactive(ko); // 한글 달력
        const inputFormat = ref('yyyy-MM-dd');

        const onPickedDate = () => {
            console.log(picked.value);
            emit('pickDate');
        };
        return {
        picked,
        locale,
        inputFormat,
        onPickedDate,
    }
    }

}
</script>

<style>

</style>