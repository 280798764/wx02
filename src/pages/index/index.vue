<template>
  <div class="container">

    <p @click="clickThis">点击登录</p>
  </div>
</template>

<script>
  import { LOGIN_URL } from "../../api/LoginCgi.js";
  import wxApi from "../../mixins/WxApi.js";
  import store from "../../store/index";
  import modal from "../../components/modal";
  import Card from "../../components/card";

  export default {
    mixins: [wxApi],
    components: {
      "i-modal": modal
    },
    data() {
      return {
        motto: "Hello World"
      };
    },
    mounted() {
       let params = {
         memberName: "18521069753",
         password: "123456"
       };
       this.$api.post(LOGIN_URL, params).then((backInfo) => {
         if (backInfo.isSuccess) {
           // this.showToast(JSON.stringify(backInfo.content));
         } else {
           this.showToast(backInfo.message);
         }
       });
    },
    methods: {

    }
  };
</script>

<style scoped>
</style>
