import React, { Component } from 'react'
import SearchBox from './../searchBox/SearchBox.js'
import './index.scss'
export default class MusicButton extends Component {
    render() {
        return (
            <div className = "shell">
                {/* <div>1</div> */}
                {/* <div className = "content-left">
                    <span className="icon-music"></span>
                </div>
                <div className = "content-right">
                    <span className="icon-movie"></span>
                </div> */}
                
                <div className = "input-shell">
                    <SearchBox />
                </div>
            </div>
        )
    }
}
