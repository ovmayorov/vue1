<template>
    <a href="#" @click ='this.$router.push("/photo/"+this.id)'>
        <div class="photo">
            <img :src="this.img" alt="">
            <h3>
                {{ this.name }}
            </h3>
        </div>
    </a>
    
</template>

<script>
    export default{
        name: "Photo",
        props:{
            id: Number,
            name: String,
            img: String
        }
    }
</script>

<style lang="css" scoped>
    .photo{
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid black;
    }
    .photo>img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
</style>