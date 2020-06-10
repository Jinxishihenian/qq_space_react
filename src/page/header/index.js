import React, {Component} from 'react';
import Overall from "./overall";
import LoGo from "./qqSpaceLogo";
import HeaderItem from "./headerItem";
import './index.scss'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Overall>
                <div className="header">
                    <LoGo/>
                    <HeaderItem 
                    title = "个人中心"
                    left = {
                       <div>
                           <div>
                           左边
                           </div>
                           <div>
                           左边
                       </div>
                       <div>
                       左边
                       </div>
                       </div>
                       
                    } 
                    right = {
                       <div>右边</div>
                    }
                    />
                </div>
            </Overall>
        );
    }
}

export default Header;