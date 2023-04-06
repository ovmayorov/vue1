<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <Header/>
        <Menu/>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <div class="">
          <div class="post-image">
            <img class='w-100' :src="this.img" alt="">
          </div>
          <h3>
            {{this.name}}
          </h3>
          <p>
            {{this.text}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'

export default {
  name: "PostView",
  data(){
    return {
      name: "Пост 1",
      text: "Какой-то текст",
      img: "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-1024x682.jpeg"
    }
  },
  components: {
    Menu,
    Header
  }
}
</script>

<style lang="css" scoped>
  .post-image>img{
    height: 400px;
  }
</style>
