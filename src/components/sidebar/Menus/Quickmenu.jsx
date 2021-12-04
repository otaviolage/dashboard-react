import React from 'react'
import { HomeOutlined, Timeline, TrendingUp } from "@material-ui/icons"
import "./../Sidebar"

export default function Quickmenu() {
    return (
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">QuickMenu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <HomeOutlined className="sidebarIcon"/>
                    Home
                </li>
                <li className="sidebarListItem" >
                    <Timeline className="sidebarIcon"/>
                    Análises
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Vendas
                </li>
            </ul>
        </div>
    )
}
