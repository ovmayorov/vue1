<template>
  <div class="header">
    <div class="avatar w-25">
      <img class='w-100' src='@/assets/img/avatar.png' alt="">
    </div>
    <div class="name">
      {{this.name}} {{this.lastname}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      avatar: "@/assets/img/avatar.png",
      name: "Имя",
      lastname: "Фамилия"
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    display: flex;
    border: 1px solid black;
    margin-bottom: 20px;
    padding: 9px;
  }
  .name{
    font-size: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
</style>
