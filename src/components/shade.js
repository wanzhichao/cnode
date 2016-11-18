import React, {Component} from 'react';
export default class Shade extends Component{
    //遮罩

    render() {
        const { hideNavFn } = this.props;

        return <div className="shade" onClick={hideNavFn}>
        </div>
    }
}