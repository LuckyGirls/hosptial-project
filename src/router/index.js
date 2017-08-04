import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

import Home from '@/view/home'
import Register from '@/view/register'
import Login from '@/view/login'
import Hello from '@/view/home_content/hello'

import project from '@/view/project/project'
import smallproject from '@/view/project/smallproject'
import Package from '@/view/project/package'
import registration from '@/view/project/registration'
import members from '@/view/members/member'
import account from '@/view/members/account'
import integral from '@/view/members/integral'
import mem_package from '@/view/members/mem_package'
import style from '@/view/members/style'

import Inquiry from '@/view/inquiry/inquiry'

import Arrange from '@/view/arrange/arrange';
import AddWork from '@/view/arrange/new_add_work';

import Reservation from '@/view/reservation/reservation'
import Mrliu from '@/view/reservation/Mrliu'
import Vdetails from '@/view/reservation/Vdetails'
import Visdoctor from '@/view/reservation/Visdoctor'
import LiuContent from '@/view/reservation/liuContent'

Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)

export default new Router({
  routes: [
    {path:'/',component: Login},
    { path: '/register',component: Register},
    { path: '/home',component: Home,
        children:[
            {path:'hello',component: Hello },
            {path:'Inquiry',component: Inquiry },
            {path: 'arrange',component: Arrange,
                children:[
                   {path:'new_add_work',component: AddWork}
                ]
            },
            {path:'members',component: members,
                children:[
                  {path:'mem_package',component: mem_package},
                  {path:'account',component: account},
                  {path:'integral',component: integral},
                  {path:'style',component: style},
                  {path: '/', redirect: 'account' }//在子路由定向到account
                ]
            },
            {path:'project',component: project,
                children:[
                  {path:'smallproject',component: smallproject},
                  {path:'package',component: Package},
                  {path:'registration',component: registration},
                  {path: '/', redirect: 'smallproject' }//在子路由定向到smallproject
                ]
            },
            {path:'reservation',component: Reservation,
                children:[
                  {path:'Mrliu',component: Mrliu,
                      children:[
                        {path:'Visdoctor',component: Visdoctor},
                        {path:'liuContent',component: LiuContent},
                        {path: '/', redirect: 'Visdoctor' }
                      ]
                  },
                  {path: '/', redirect: 'Mrliu' }
                ]
            },
            // {path:'Vdetails',component: Vdetails}
        ]
}     
  ]
})
