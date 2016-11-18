import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Topic from '../components/Topic';
import Util from '../util/util'
import { showSlideBar, getListDate } from '../actions/nodeAction'
class Main extends  Component {
    //主页面
    componentDidMount() {
        let query = this.props.location && this.props.location.query.query;
        //请求列表数据
        this.props.dispatch(getListDate("GET", "new", query));
        //滑动加载
        window.addEventListener('scroll', Util.throttle(this.scrollHandler.bind(this), 300,1000))

    }
    componentWillReceiveProps(nextProps){
        //打开新列表页，滑到顶部
        if(nextProps.slideBar.operate == "new"){
            window.scrollTo(0,0);
        }
    }
    scrollHandler() {
        let totalHeight = parseInt(document.body.scrollHeight),
            scrollHeight = parseInt(document.body.scrollTop),
            screemHeight = parseInt(document.body.clientHeight);
        if(scrollHeight + screemHeight + 300 > totalHeight) {
            this.props.dispatch(getListDate("GET", "add"));
        }
    }
    render() {

        const { slideBar } = this.props;
        return <Topic listData = { slideBar.list } />
    }
}

function selectHomeProps(state){
    return {
        slideBar: state.slideBar
    }
};
export default connect(selectHomeProps)(Main);