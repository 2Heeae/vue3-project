<template>
    <div>
        <input 
            class="form-control"
            type="text"
            @click="todoRouter"
            @input="onSearch(stext = $event.target.value)"
            placeholder="🔍︎ 빠른 검색"
        > 
    </div>

</template>

<script>
    import { useRouter } from "vue-router";
    export default {
        setup(props, {emit}) {
            const router = useRouter();
            
            const todoRouter = () => {
                router.push({ path: "/todos" });
            };

            const onSearch = (stext) => {
                console.log(stext);
                emit('search', stext);
            }
            return {
                onSearch,
                todoRouter
            }
        }
}
</script>

<style>

</style>