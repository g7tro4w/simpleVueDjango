import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
import FullPost from '@/views/FullPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'fullPost',
      component: FullPost
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
