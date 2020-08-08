import React, { Component } from 'react'
import './index.scss'
import MusicButton from './musicButton/index'
export default class BackGroundMusic extends Component {
    render() {
        return (
            <div>
               <div>
                   {/* TODO 音乐按钮*/}
                   <MusicButton />  
               </div>
               <div>
                   {/* 搜索按钮 */}
               </div>
            </div>
        )
    }
}
