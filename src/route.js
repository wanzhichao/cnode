
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from "./pages/home"
import Main from "./pages/main"
import About from "./pages/about"
import Detail from "./pages/detail"
export const route = [
    {
        path: "/",
        indexRoute : {component : Home},
        childRoutes: [
            {
                path: 'home',
                component: Home,
                childRoutes: [
                    {path: '/home/main', component: Main}, //列表页
                    {path: '/home/detail', component: Detail}, //详情页
                    {path: '/home/about', component: About}
                ]
            }
        ]
    }
];
