import React, {Component} from 'react'
import classNames from 'classnames';
import { getListDate,showSlideBar } from  '../actions/nodeAction';
import { connect } from 'react-redux';
import {Link} from 'react-router';
class NavLi extends Component{
    //列表子项
    showList() {
        const { liData, dispatch } = this.props,
                query = liData.query;

        dispatch(showSlideBar("CLOSE"));
        dispatch(getListDate("GET", "new", query));
    }

    render() {
        const { liClass,
                text,
                query} = this.props.liData;

        return <Link to={{pathname:"/home/main" , query: {query: query}}}>
                <li
                    className={classNames("iconfont item", liClass )}
                    onClick={this.showList.bind(this)}>{text}</li>
            </Link>
    }
}
function selectHomeProps(state){
    return {
        slideBar: state.slideBar
    }
};
export default connect(selectHomeProps)(NavLi);