
import React, {Component} from 'react'
import classNames from 'classnames';
import Util from '../util/util'
export default class Header extends Component{

    //头部
    render() {
        const { showNavFn,
                query,
                isShow } = this.props;
        return <div className={classNames("header", isShow === "OPEN" ? "show" : "")}>
           <div className="nv-toolbar" onClick={showNavFn}>
           </div>
            <span>{ Util.getTitleStr(query) }</span>
            <i className="iconfont add-icon">&#xe60f;</i>
        </div>
    }
}