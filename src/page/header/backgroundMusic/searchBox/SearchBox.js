import React, { Component } from 'react'
import './searchbox.scss'
export default class SearchBox extends Component {
    render() {
        return (
            <div className="input-shell">
                <input className="input-box" type="text" placeholder = "用户/游戏/动态"/>
                <div className = "search-tag">
                  <a href="#" className="icon-search"></a>
                </div>
            </div>
        )
    }
}
