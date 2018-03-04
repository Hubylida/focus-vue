import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Members from '../pages/members'
import Researchs from '../pages/researchs'
import Events from '../pages/events'
import Join from '../pages/join'
import About from '../pages/about'
import Login from '../pages/login'
import Member from '../components/member'
import Research from '../components/research'
import Event from '../components/event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/researchs',
      name: 'Researchs',
      component: Researchs
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/member/:id(\\d+)',
      component: Member
    },
    {
      path: '/research/:id(\\d+)',
      component: Research
    },
    {
      path: '/event/:id(\\d+)',
      component: Event
    }
  ]
})
