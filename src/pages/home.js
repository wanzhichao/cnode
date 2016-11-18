import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Shade from '../components/Shade';
import Topic from '../components/Topic';
import { showSlideBar, getListDate } from '../actions/nodeAction'
class Home extends  Component {
    //页面主结构
    componentDidMount() {
        //this.props.dispatch(getListDate("GET", "new"));
    }
    showSlideBar(){
        this.props.dispatch(showSlideBar("OPEN"));
    }
    hideSlideBar(){
        this.props.dispatch(showSlideBar("CLOSE"));
    }
    render() {
        const { slideBar } = this.props;
        const shade = slideBar.visible === "OPEN" ? <Shade hideNavFn= { this.hideSlideBar.bind(this) } /> : "";
        return <div>
            <Header
                showNavFn= { this.showSlideBar.bind(this) }
                query = { slideBar.query }
                isShow = { slideBar.visible } />
            <Nav isShow = { slideBar.visible } />
            {this.props.children}
            {shade}
        </div>
    }
}

function selectHomeProps(state){
    return {
        slideBar: state.slideBar
    }
};
export default connect(selectHomeProps)(Home);