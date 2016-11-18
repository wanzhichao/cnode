
import React, {Component} from 'react'
import classNames from 'classnames';
import Util from '../util/util';
import {Link} from 'react-router';
export default class Topic extends Component {
    //列表list
    render() {
        const { listData } = this.props;
        return <div className="pt44">
            <ul className="posts-list">
                {
                    listData.data && listData.data.map(function(item, i) {
                        return  <li key={i}>
                            <Link to={{pathname:"/home/detail", query: {topicId: item.id}}}>
                                <h3 title={Util.getTabInfo(item.tab, item.good, item.top, false)}
                                    className={Util.getTabInfo(item.tab, item.good, item.top, true)}>{item.title}</h3>
                                <div className="content">
                                    <img src={item.author.avatar_url} alt="" className="avatar"/>
                                    <div className="info">
                                        <p>
                                            <span className="name">{item.author.loginname}</span>
                                    <span className="status">
                                        <b>{item.reply_count}</b>/{item.visit_count}
                                    </span>
                                        </p>
                                        <p>
                                            <time>{Util.getLastTimeStr(item.create_at, true) }</time>
                                            <time>{Util.getLastTimeStr(item.last_reply_at, true)}</time>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    })
                }

            </ul>
        </div>
    }
}