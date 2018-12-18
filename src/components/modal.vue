<template>
  <div>
    <div class="modal-mask" @click="hideModal" v-if="showModal"></div>
    <div class="modal-dialog" v-if="showModal">
      <p class="modal-title">添加数量</p>
      <div class="modal-content">
        <div class="modal-input">
          <input placeholder-class="input-holder" type="number" maxlength="10" @bindinput="inputChange" class="input"
                 placeholder="请输入数量"/>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" @click="onCancel" data-status="cancel">取消</button>
        <button class="btn-confirm" @click="testClick" data-status="confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
    iii:'test'
        // showModal: true
      };
    },
    props:{
      showModal:{
        type:[Boolean],
        default:false
      }
    },
    mounted(){
      // this.showDialogBtn()
    },
    methods: {
      /**
       * 弹窗
       */
      showDialogBtn: function() {
        this.showModal = true
      },
      /**
       * 弹出框蒙层截断touchmove事件
       */
      preventTouchMove: function() {
      },
      /**
       * 隐藏模态对话框
       */
      hideModal: function() {
        this.showModal = false
      },
      /**
       * 对话框取消按钮点击事件
       */
      onCancel: function() {
        // this.hideModal();
        console.log(JSON.stringify(3423444))
        this.$emit('testClick')
        this.showModal = false
      },
      /**
       * 对话框确认按钮点击事件
       */
      onConfirm: function() {
        this.$emit('onConfirm')
      },
      /**
       * 对话框确认按钮点击事件
       */
      testClick: function() {
        this.$emit('testClick')
      }
    },
  };
</script>

<style scoped>
  .show-btn {
    margin-top: 100rpx;
    color: #22cc22;
  }

  .modal-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    overflow: hidden;
    z-index: 9000;
    color: #fff;
  }

  .modal-dialog {
    width: 540rpx;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 9999;
    background: #f9f9f9;
    margin: -180rpx 105rpx;
    border-radius: 36 rpx;
  }

  .modal-title {
    padding-top: 50rpx;
    font-size: 36rpx;
    color: #030303;
    text-align: center;
  }

  .modal-content {
    padding: 50rpx 32rpx;
  }

  .modal-input {
    display: flex;
    background: #fff;
    border: 2rpx solid #ddd;
    border-radius:4rpx;
    font-size: 2rpx;
  }


  .input {
    width: 100%;
    height: 82rpx;
    font-size: 28rpx;
    line-height: 28rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    color: #333;
  }

  input-holder {
    color: #666;
    font-size: 28rpx;
  }

  .modal-footer {
    display: flex;
    flex-direction: row;
    height: 86rpx;
    border-top: 1px solid #dedede;
    font-size: 34rpx;
    line-height: 86rpx;
  }

  .btn-cancel {
    width: 50%;
    color: #666;
    text-align: center;
    border-right: 1px solid #dedede;
  }

  .btn-confirm {
    width: 50%;
    color: #ec5300;
    text-align: center;
  }
</style>
