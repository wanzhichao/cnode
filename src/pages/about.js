import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getDetail } from  '../actions/nodeAction';
import Util from '../util/util'
export default class About extends  Component {
    render() {
        return <div >
            <dl className="about-info">

                <dt>关于项目</dt>
                <dd>该项目是基于Cnodejs的api，采用react+redux重写的webapp。(既然有人用vue重写过，当然少不了react的版本 ^_^)</dd>

                <dt>源码地址</dt>

                <dd>
                    <a href="https://github.com/wanzhichao/cnode">
                        https://github.com/wanzhichao/cnode</a>
                </dd>

                <dt>意见反馈</dt>
                <dd>
                    <a href="https://github.com/wanzhichao/cnode/issues">
                        发表意见或者提需求</a>
                </dd>

                <dt>作者qq</dt>
                <dd>1159337620</dd>

            </dl>
        </div>
    }
}
