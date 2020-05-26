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
                    <HeaderItem/>
                </div>
            </Overall>
        );
    }
}

export default Header;