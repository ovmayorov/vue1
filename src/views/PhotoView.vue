<template>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <Header />
                <Menu />
                
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9">
                
                <div class="picture">
                    <img class="w-100" :src="this.img" alt="">
                    <h3>
                        {{ this.name }} 
                    </h3>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'
import Photo from '../components/Photo.vue'


export default {
    name: "PhotoView",
    data() {
        return {
            id: 1,
            name: "Photo 1",
            
            img: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
            
                }
    },
    components: {
        Menu,
        Header,
        
    }
}
</script>

<style lang="scc" scoped>
 
</style>
