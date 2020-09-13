import React, { Component } from 'react';
import Overall from "./overall";
import LoGo from "./qqSpaceLogo";
import HeaderItem from "./headerItem";
import BackgroundMusic from "./backgroundMusic"
import './index.scss'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Overall>
                <div className="header-centent">
                    <div className="header-list">
                        <ul className="header">
                            <li><LoGo /></li>
                            <li><HeaderItem
                                title="个人中心"
                                logo="icon-kuozhangongneng"
                                custom="custom"
                                left={
                                    <div>
                                        <div>
                                            左边
                                </div>
                                    </div>
                                }
                                right={
                                    <div>右边</div>
                                }
                            />
                            </li>
                            <li>
                                <HeaderItem
                                    title="我的主页"
                                    logo="icon-aixin"
                                    left={
                                        <div>
                                            <div>
                                                左边
                                    </div>
                                        </div>
                                    }
                                    right={
                                        <div>右边</div>
                                    }
                                />
                            </li>
                            <li>
                                <HeaderItem
                                    title="好友"
                                    logo="icon-rencaiku"
                                    left={
                                        <div>
                                            <div>
                                                左边
                                    </div>
                                        </div>
                                    }
                                    right={
                                        <div>右边</div>
                                    }
                                />
                            </li>
                            <li>
                                <HeaderItem
                                    title="游戏"
                                    logo="icon-xiaoshi"
                                    left={
                                        <div>
                                            <div>
                                                左边
                                    </div>
                                        </div>
                                    }
                                    right={
                                        <div>右边</div>
                                    }
                                />
                            </li>
                            <li>
                                <HeaderItem
                                    title="装扮"
                                    logo="icon-shouye"
                                    left={
                                        <div>
                                            <div>
                                                左边
                                    </div>
                                        </div>
                                    }
                                    right={
                                        <div>右边</div>
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="header-list header-search">
                        <div className="">
                            <BackgroundMusic />
                        </div>
                    </div>
                </div>
            </Overall>
        );
    }
}

export default Header;