<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <Header />
        <Menu/>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <Post
          v-for="post in this.posts"
          :key="post.id"
          :name="post.name"
          :text="post.text"
          :img="post.img"
          :id="post.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import Post from '../components/Post.vue'
  import Header from '../components/Header.vue'

  export default {
    name: "HomeView",
    data(){
      return {
        posts: [
          {
            id: 1,
            name: "Пост 1",
            text: "Какой-то текст с какого-то поста 1",
            img: "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-1024x682.jpeg"
          },
          {
            id: 2,
            name: "Пост 2",
            text: "Какой-то текст с какого-то поста 2",
            img: "https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg"
          },
          {
            id: 3,
            name: "Пост 3",
            text: "Какой-то текст с какого-то поста 3",
            img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg"
          },
        ]
      }
    },
    components: {
      Menu,
      Post,
      Header
    }
  }
</script>

<style lang="css" scoped>
</style>
