import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import PhotosView from '../views/PhotosView.vue'
import PhotoView from '../views/PhotoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: PhotoView
    },
  ]
})

export default router
