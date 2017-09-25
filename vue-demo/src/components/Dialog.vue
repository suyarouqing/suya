<template>	
<div class="success" v-show="isShowDialog">			
	<div class="success-box" >
    <div class="success-font">
      <div>
        <img src="../assets/action_icon.png" alt="">
        <img src="../assets/close_icon.png" alt="" @click="onCancel">
      </div>
      <div class="font-center">
        <slot></slot>
      </div>
    </div>
    <div class="button-position">
      <button class="button cancel-button" @click="onCancel" v-show="isShowBtnCancel">
       {{ cancelText }}
      </button>
      <button class="button success-button" @click="onSuccess" v-show="isShowBtnSuccess">
        {{ okText }}
      </button>
    </div>
	</div>
</div>
</template>
<script>
export default {
  props: {
    isShowBtnCancel: {
      type: Boolean,
      default: false
    },
    isShowDialog: {
      type: Boolean,
      default: false
    },
    isShowBtnSuccess: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    onSuccess () {
      this.$emit('on-success')
    },
    onCancel () {
      this.$emit('on-close')
    }
  }
}
</script>
<style>
.success{
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.3);
  box-sizing: border-box;
  padding:140px 15px 0 15px;
  position: fixed;
  left:0;
  top:0;
  z-index: 999;
}
.success-box{
	width:100%;
  height:225px;
  border-radius: 8px;
	background-color:#ffffff;
  position: relative;
}
.success-font{
  box-sizing: border-box;
  padding:18px 22px 0 22px;
}
.success-font > div{
  width:100%;
  height:17px;
}
.success-font > div img:first-child{
  width:54px;
  height:17px;
  float:left;
}
.success-font > div img:last-child{
  width:17px;
  height:17px;
  float:right
}
.success-font > div.font-center{
  width:100%;
  height:145px;
  box-sizing: border-box;
  padding:0 45px;
  display:table-cell;
  vertical-align:middle;
}
.success-font .font-center > p {
  font-size:17px;
  color:#333333;
  text-align: center;
  margin:auto;
  display:inline-block;
  vertical-align:middle;
}
.button-position{
  width:100%;
  height:44px;
  position: absolute;
  left:0;
  bottom:0;
  display: flex;
}
.button{
  width:50%;
  height:44px;
  font-size: 17px;
  color:#666666;
  border:0 solid;
  outline:0;
  flex:1;
}
.success-button{
  color: #fff;
  background-color:#31bbff;
  border-bottom-right-radius: 8px;
}
.cancel-button{
  border-bottom-left-radius: 8px;
  background-color:#ffffff;
  border-top:1px solid #dcdcdc;
  border-right:1px solid #dcdcdc;
}
</style>