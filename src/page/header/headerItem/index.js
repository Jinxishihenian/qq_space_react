import React, {Component} from 'react';
import './../../../sass/header.scss'
import './../../../sass/style.css'
import './index.scss'

class HeaderItem extends Component {
    constructor(props) {
        super(props);
        this.itemTitleRef = React.createRef();
        this.itemTitlContent = React.createRef();
        this.state = {
            // 是否展开.
            isShow: true
        }
        this.acquireMouse = this.acquireMouse.bind(this);
        this.openContent = this.openContent.bind(this);
        this.closeContent = this.closeContent.bind(this);
    }
    // 判断鼠标是否移动到该元素.
    acquireMouse(){
      this.itemTitleRef.current.addEventListener('mouseover',this.openContent,false);
      this.itemTitleRef.current.addEventListener('mouseleave',this.closeContent,false);
    }
    // 打开item内容.
    openContent(){
      console.log("我移动到了这个元素上");
      // 假设高为500;
      // 1000/500
      let height = 0;
      let grop = setInterval(function () {
          height ++;
          console.log(height);
          if(height>500){
              window.clearTimeout(grop);
          }
      },2);
    }

    closeContent(){
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
                    {this.state.isShow?<i className="icon-down">
                    </i>:<span></span>}
                </div>
                <div className="header-item-content">
                    测试
                </div>
            </div>
        );
    }
}

export default HeaderItem;