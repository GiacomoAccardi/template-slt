import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './views/HomeView.vue';


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    // {
    //     path: '/',
    //     name: 'homepage',
    //     component: HomeView
    // }
  ]
})

export {router}