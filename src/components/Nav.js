
import React, {Component} from 'react'
import classNames from 'classnames';
import { showSlideBar } from  '../actions/nodeAction';
import NavLi from './NavLi';
import { connect } from 'react-redux';
import {Link} from 'react-router';
class Nav extends Component{
    //列表

    showList() {
        const { dispatch } = this.props;

        dispatch(showSlideBar("CLOSE"));
    }

    render() {
        const listData = [
            {
                liClass: "icon-quanbu",
                query: "all",
                text: "全部"
            },
            {
                liClass: "icon-hao",
                query: "good",
                text: "精华"
            },
            {
                liClass: "icon-fenxiang",
                query: "share",
                text: "分享"
            },
            {
                liClass: "icon-wenda",
                query: "ask",
                text: "问答"
            },
            {
                liClass: "icon-zhaopin",
                query: "job",
                text: "招聘"
            }
        ];
        const { isShow } = this.props,
                showClass = isShow === "OPEN" ? "show" : "";

        return <div className={classNames("slide-bar", showClass)}>
           <div className="logo">
               <div className="logo-img">
                   <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
               </div>
           </div>
            <ul className="list-ul">
                {
                    listData.map(function(ele, i) {
                        return  <NavLi liData = {ele}
                                      key={i} />
                    })
                }
            </ul>
            <ul className="list-ul">
                <Link to={{pathname:"/home/about" }}>
                    <li className="iconfont item icon-about"
                        onClick={this.showList.bind(this)}>关于</li></Link>
            </ul>
        </div>
    }
}
function selectHomeProps(state){
    return {
        slideBar: state.slideBar
    }
};
export default connect(selectHomeProps)(Nav);