<template>
     <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3">
            <Header />
            <Menu/>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9">
            <Photo
                v-for="photo in this.photos"
                :key="photo.id"
                :id="photo.id"
                :name="photo.name"
                :img="photo.img"
                 />
          </div>
        </div>
      </div>
</template>

<script>
    import Menu from '../components/Menu.vue'
    import Header from '../components/Header.vue'
    import Photo from '../components/Photo.vue'

    export default{
        name: "PhotosView.vue",
        data(){
            return{
                photos: [
                    {
                        id: 1,
                        name: "Photo 1",
                        img: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
                    },
                    {
                        id: 2,
                        name: "Photo 2",
                        img: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg"        
                    },
                    {
                        id: 3,
                        name: "Photo 3",
                        img: "https://i.natgeofe.com/k/e2ffc795-8b1f-4479-8c95-b6497e5ca4f2/canada-vancouver.jpg"
                    }

                ]
            }
        },
        components: {
            Menu,
            Header,
            Photo
        }
    }
</script>

<style lang="scc" scoped>
</style>
