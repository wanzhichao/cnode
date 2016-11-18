import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getDetail } from  '../actions/nodeAction';
import Util from '../util/util'
class Detail extends  Component {
    //详情页
    componentDidMount() {
        let topicId = this.props.location.query.topicId;
        this.props.dispatch(getDetail(topicId))
    }
    render() {
        const { detail } = this.props;
        const  topic = detail.data || {} ,
                author = topic.author || {},
                content = topic && topic.content;

        return <div id="detail" className="pt44">
            <h2 className="topic-title">{topic.title}</h2>
            <div className="author-info">
                <img src={author.avatar_url} alt="" className="avatar"/>
                <div className="col">
                    <span>{author.loginname}</span>
                    <time>发布于：{Util.getLastTimeStr(topic.create_at, true)}</time>
                </div>
                <div className="right">
                    <span className="tag">{Util.getTabInfo(topic.tab, topic.good, topic.top, false)}</span>
                    <span className="name">{topic.visit_count}</span>
                </div>
            </div>
            <div className="markdown-body topic-content" dangerouslySetInnerHTML={{__html: content}} />
            <h3 className="topic-reply">
                <strong></strong>回复
            </h3>
            <div className="reply-list">
                <ul>
                    {
                        topic.replies && topic.replies.map(function(item, i) {
                            return <li key={i}>
                                <div className="user">
                                    <div className="head">
                                        <img  src={item.author.avatar_url} alt=""/>
                                    </div>
                                    <div className="info">
                                        <p className="cl">
                                            <span className="name">{item.author.loginname}</span><br/>
                                            <span className="name mt10">
                                                <span></span>
                                                发布于: {Util.getLastTimeStr(item.create_at, true)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="reply_content" dangerouslySetInnerHTML={{__html: item.content}} />

                            </li>

                        })
                    }
                </ul>
            </div>
        </div>
    }
}
function selectDetailProps(state){
    return {
        detail: state.getDetail
    }
};
export default connect(selectDetailProps)(Detail);
