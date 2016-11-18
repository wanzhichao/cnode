import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {route} from './route'
import store from './store/store';
import nodeReducer from './reducers/nodeReducers'
import '../css/scss/style.scss'
import '../css/scss/github-markdown.scss'

render(
        <Provider store={store}>
                <Router history={hashHistory} routes={route} />
        </Provider>,
    document.getElementById("react-cont")
)
