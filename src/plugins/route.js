import { createRouter, createWebHashHistory } from 'vue-router'
import { isAdmin, isAuth } from './authentication'

import LoginComponent from './../layouts/login/index.vue'
import WelcomeComponent from './../layouts/welcome/index.vue'

import UserComponent from './../components/user/index.vue'
import UserProfileComponent from './../components/user/profile.vue'
import PasswordChangeComponent from './../components/user/password_change.vue'

import DashboardComponent from './../layouts/dashboard/index.vue'
import DashboardWidget from './../components/main/dashboard.vue'
/**
 * Attendant
 */
import AttendantComponent from './../components/attendant/index.vue'
import AttendantListComponent from './../components/attendant/list.vue'
import AttendantDayComponent from './../components/attendant/today.vue'

import OrganizationAttendantChecktimeComponent from './../components/attendant/checktime/idphoneemail.vue'


/**
 * Error
 */
import Page404 from './../components/errors/404.vue'

export const getRoutes = () => {
    if( isAuth() ){
        return [
            { 
                path: '', 
                name: "EmptyURI" ,
                redirect: to => {
                    return '/attendants'
                }
            },
            { 
                path: '/', 
                name: "RootURI" ,
                redirect: to => {
                    return '/attendants'
                }
            },
            /**
             * Authenticated routes
             */
            {
                name: 'Dashboard',
                path: '/dashboard',
                component: DashboardComponent ,
                meta: {
                    // transition: 'fade'
                },
                children:[
                    {
                        name: "DashboardWidget" ,
                        path: '' ,
                        component: DashboardWidget
                    }
                ]
            },
            {
                name: "UserProfile" ,
                path: '/profile' ,
                component: UserProfileComponent ,
                meta: {
                    // transition: 'fade'
                }
            },
            {
                name: "UserPasswordChange" ,
                path: '/password/change' ,
                component: PasswordChangeComponent ,
                meta: {
                    // transition: 'fade'
                }
            },
            {
                name: 'Attendant',
                path: '/attendants',
                component: AttendantComponent ,
                meta: { 
                    transition: 'slide-right' ,
                    requiresAuth: true,
                    is_admin : true
                },
                children: [
                    {
                        name: "AttendantDay" ,
                        path: '' ,
                        component: AttendantDayComponent
                    },
                    {
                        name: "AttendantList" ,
                        path: 'today' ,
                        component: AttendantDayComponent
                    },
                    {
                        name: "AttendantMonth" ,
                        path: 'month' ,
                        component: AttendantListComponent
                    },
                    
                ]
            },
            {
                name: 'Welcome',
                path: '/welcome',
                component: WelcomeComponent ,
                meta: {
                    // transition: 'fade'
                }
            },
            // will match everything and put it under `$route.params.pathMatch`
            { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 }
        ]
    }
    return [
        { 
            path: '', 
            name: "EmptyURI" ,
            redirect: to => {
                return '/welcome'
            }
        },
        { 
            path: '/', 
            name: "RootURI" ,
            redirect: to => {
                return '/welcome'
            }
        },
        {
            name: 'Login',
            path: '/login',
            component: LoginComponent ,
            meta: {
                // transition: 'fade'
            }
        },
        {
            name: 'Welcome',
            path: '/welcome',
            component: WelcomeComponent ,
            meta: {
                // transition: 'fade'
            }
        },
        {
            name: 'Organization',
            path: '/organization/:id/checktime',
            component: OrganizationAttendantChecktimeComponent ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: false,
                is_admin : false
            }
        },
        // will match everything and put it under `$route.params.pathMatch`
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 }
    ]
}