<template>
    <!-- 모달창 -->
    <div class="modal-wrapper">
    <div class="modal">
        <div class="modal-content">
        <div 
        class="modal-header" 
        style="background-color: #14213d; height: 45px;"
        >
            <h5 
                class="modal-title" 
                id="exampleModalLabel"
                style="color:white"
            >
                삭제확인
            </h5>
            <button type="button" class="close">
            <span @click="onClose">&times;</span>
            </button>
        </div>
        <div class="modal-body" style="background-color: #e5e5e5;">
            정말 삭제하시겠습니까?
        </div>
        <div class="modal-footer" style="background-color: #e5e5e5; padding-top: 0">
            <button 
                type="button" class="btn btn-secondary" 
                @click="onClose"
            >
                취소
            </button>
            <button 
                type="button" class="btn btn-primary"
                style="background-color: #fca311; border-color: #fca311;"
                @click="onDelete"
            >
                삭제
            </button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    setup(props, {emit}) {
        const onClose = () => {
            emit('close');
        }
        const onDelete = () => {
            emit('delete');
        }
        return {
            onClose,
            onDelete
        }
    }
}
</script>

<style scoped>

    .modal-wrapper{
        /* 화면에 꽉 차게 하는 코드(여기서는 너비를 꽉 채우는 용도) */
        position: fixed;
        top: 50%;
        left: 50%;
        /* 위아래 너비를 준 상태에서 가로 50%, 세로 50%를 이동시킬 수 있다 (= 한가운데 배치) */
        transform: translate(-50%, -50%);
        /* 위의 overlay 배경보다 한 단계 더 높게 배치 */
        z-index: 300;
    }
    .modal{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 450px;
        padding: 80px 28px 50px 27px;
        border-radius: 10px;
    }
</style>