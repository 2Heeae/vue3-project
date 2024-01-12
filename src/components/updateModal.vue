<template>
    <!-- 모달창 -->
    <div class="modal-wrapper">
    <div class="modal">
        <div class="modal-content">
        <div class="modal-header" style="background-color: #e3f2fd">
            <h5 class="modal-title" id="exampleModalLabel">수정확인</h5>
            <button type="button" class="close">
            <span @click="onClose">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <input 
                class="form-control"
                type="text" 
                :value="todoSubject"
                @input="changeText"
            >
        </div>
        <div class="modal-footer" style="background-color: #e3f2fd">
            <button 
                type="button" class="btn btn-secondary" 
                @click="onClose"
            >
                취소
            </button>
            <button 
                type="button" class="btn btn-primary"
                @click="onUpdate(editSubject)"
            >
                확인
            </button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
      todoSubject: {
          type: String,
          required: true
      }
    },
    emits: ['onClose', 'onUpdate'],
    setup(props, {emit}) {
        const editSubject = ref(null);

        const onClose = () => {
            editSubject.value = null;
            emit('close');
        };

        const onUpdate = (editSubject) => {
            console.log('수정보냄',editSubject);
            emit('update', editSubject);
        };

        const changeText = (event) => {
            editSubject.value = event.target.value;
        };

        return {
            onClose,
            onUpdate,
            editSubject,
            changeText,
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