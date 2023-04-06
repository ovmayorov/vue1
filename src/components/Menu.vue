<template>
  <div class="leftbar d-flex flex-column justify-content-between p-3">
    <div class="logo d-flex justify-content-center">
      <img class='w-25' src="@/assets/img/logo.png" alt="">
    </div>
    <div class="navbar">
      <span class='w-100 text-center' v-on:click='this.$router.push("/my-page")'>
        Мой профиль
      </span>
      <span class='w-100 text-center' v-on:click='this.$router.push("/messages")'>
        Мои сообщения
      </span>
      <span class='w-100 text-center' v-on:click='this.$router.push("/photos")'>
        Мои фотографии
      </span>
      <span class='w-100 text-center' v-on:click='this.$router.push("/")'>
        Мои новости
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data(){
    return {

    }
  },
  methods: {
    test(){
      console.log('test');
    },
  }
}
</script>

<style lang="css" scoped>
  .navbar{
    margin-top: 20px;
  }
  .leftbar{
    width: 100%;
    border: 1px solid black;
  }
  .navbar>span{
    cursor: pointer;
    margin-bottom: 30px
  }
  .navbar>span:hover{
    color: blue;
  }
</style>
