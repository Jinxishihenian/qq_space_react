import React, {Component} from 'react';
import './../../../sass/header.scss'
import './../../../sass/style.css'
class HeaderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 是否展开.
            isShow : false
        }
    }
    render() {
        // title 标题.
        // icon 小图标.
        // callBack 点击执行的回调函数.
        // isOnTap 是否有点击事件.

        const {title,} =this.props;
        return (
            <div>
                <i className="icon-nickname "></i>
                <span className="commonality-header-title">
                    个人中心
                </span>
                <i></i>
            </div>
        );
    }
}

export default HeaderItem;