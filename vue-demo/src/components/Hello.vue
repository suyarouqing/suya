<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="isShowDialog = true">按钮</button>
    <dialog-box :isShowDialog="isShowDialog" @on-success="onSuccess" @on-close="onCancel" :isShowBtnSuccess="isShowBtnSuccess" :isShowBtnCancel="isShowBtnCancel">
      <p>{{promptMsg}}</p>
      <p>{{promptMsgs}}</p>
    </dialog-box>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowDialog: false,
      isShowBtnSuccess: true,
      isShowBtnCancel: true,
      promptMsg: '会务已经开始准备',
      promptMsgs: '现在取消同样会有会务费'
    }
  },
  methods: {
    onSuccess () {
      this.isShowDialog = false
    },
    onCancel () {
      this.isShowDialog = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
