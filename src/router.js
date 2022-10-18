import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AboutView.vue')
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "list" */ './views/ListView.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/DrawerView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/CardsView.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () =>
        import(/* webpackChunkName: "simple" */ './views/SimpleView.vue')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/StaggerView.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () =>
        import(/* webpackChunkName: "state" */ './views/StateView.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () =>
        import(/* webpackChunkName: "timeline" */ './views/TimelineView.vue')
    }
  ]
})
