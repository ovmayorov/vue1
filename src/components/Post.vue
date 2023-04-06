<template>
  <div class="border p-3 mb-3">
    <div class="post-image">
      <img class='w-100' :src="this.img" alt="">
      <h3>{{this.name}}</h3>
      <p>{{this.text}}</p>
      
      <span class='text-primary' @click='this.$router.push("/post/"+this.id)'>
        Читать полностью..
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    name: String,
    text: String,
    img: String,
    id: Number
  },
  data(){
    return {}
  },
}
</script>

<style lang="css" scoped>
  .post-image>img{
    height: 300px;
    object-fit: cover;
  }
</style>
