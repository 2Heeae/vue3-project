<template>
    <div>
        <input 
            class="form-control"
            type="text"
            @input="onSearch(stext = $event.target.value)"
            placeholder="🔍︎ 빠른 검색"
        > 
    </div>

</template>

<script>

export default {
    setup(props, {emit}) {

        const onSearch = (stext) => {
            console.log(stext);
            emit('search', stext);
        }
        return {
            onSearch
        }
    }
}
</script>

<style>

</style>