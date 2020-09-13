import React, { Component } from 'react'
import './searchbox.scss'
export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <div className="input-shell">
                    <input className="input-box" type="text" placeholder="用户/游戏/动态" />
                    <div className="search-tag">
                        <a href="#" className="icon-search"></a>
                    </div>
                </div>
                <div className="select-item-list">
                    <ul>
                        <li className = "selece-item">
                            <div className = "select-item-icon">图标</div>
                            <div className = "select-item-content">内容</div>
                        </li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </div>
        )
    }
}
