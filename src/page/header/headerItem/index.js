import React, {Component} from 'react';
import './../../../sass/header.scss'
import './../../../sass/style.css'
import './index.scss'

class HeaderItem extends Component {
    constructor(props) {
        super(props);
        this.itemTitleRef = React.createRef();
        this.itemTitleContentRef = React.createRef();
        // TODO 基础高,需要传递过来.
        this.baseHeight = 223;
        this.state = {
            // 是否展开.
            isShow: true,
            // 打开内容锁.
            openLock: false,
            // 关闭内容锁.
            closeLock: false
        }
        this.acquireMouse = this.acquireMouse.bind(this);
        this.openContent = this.openContent.bind(this);
        this.closeContent = this.closeContent.bind(this);
    }

    // 判断鼠标是否移动到该元素.
    acquireMouse() {
        this.itemTitleRef.current.addEventListener('mouseover', this.openContent, false);
        this.itemTitleRef.current.addEventListener('mouseleave', this.closeContent, false);
    }

    // 打开item内容.
    openContent() {
        let that = this;
        let height = 0;
        // 在打开内容中不在打开另一个content;
        console.log(`我锁的状态${this.state.openLock}`)
        if (this.state.openLock) return;
        // 打开锁.
        this.setState({
            openLock: true
        });
        console.log("我执行打开");
        that.itemTitleContentRef.current.style.display = "block";

        let grop = setInterval(function () {
            height++;
            that.itemTitleContentRef.current.style.height = `${height}px`;
            if (height > that.baseHeight) {
                window.clearTimeout(grop);
                // 关掉锁.
                that.setState({openLock: false});
            }
        }, 2);
    }

    // 关闭item内容.
    closeContent() {
        let that = this;
        let height = this.baseHeight;
        // 是否开始关闭.
        let isBeginClose = this.state.closeLock && !this.state.openLock;
        if (isBeginClose) return;
        this.setState({
            closeLock: true,
        });
        let slow = setInterval(function () {
            height--;
            that.itemTitleContentRef.current.style.height = `${height}px`;
            if (height <= 0) {
                clearTimeout(slow);
                // 关闭锁;
                that.setState({closeLock: false});
                that.itemTitleContentRef.current.style.display = "none";
            }
        }, 2)
        console.log("我离开了这个元素");
    }

    componentDidMount() {
        // 监听item元素.
        this.acquireMouse();
    }

    render() {
        // title 标题.
        // icon 小图标.
        // callBack 点击执行的回调函数.
        // isOnTap 是否有点击事件
        // leftWidget 左侧内容.
        // rightWidget 右侧内容.

        const {title,} = this.props;
        return (
            <div>
                <div ref={this.itemTitleRef} className="header-item-overall">
                    <i className="icon-kuozhangongneng commonality-icon-size"></i>
                    <span className="commonality-header-title">
                    个人中心
                 </span>
                    {this.state.isShow ? <i className="icon-down">
                    </i> : <span></span>}
                </div>
                <div ref={this.itemTitleContentRef} className="header-item-content">
                    测试
                </div>
            </div>
        );
    }
}

export default HeaderItem;