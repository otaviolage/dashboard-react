import React from 'react'
import "./topbar.css"
import { ShoppingCart, Storefront, DashboardOutlined } from '@material-ui/icons'
import pedraazul from "../../pedraazul.png"

export default function Topbar () {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={pedraazul} alt="logo pedra azul" className="pedraazul" />
                    <span className="logo">SOLID</span>
                    <span className="subLogo">admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Storefront />
                    </div>
                    <div className="topbarIconContainer">
                        <ShoppingCart />
                        <span className="topbarIconBage">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <DashboardOutlined />
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/63686965?s=400&u=d10ba5394d8ec6f1478d50e404979ada77ff904a&v=4" alt="" className="topAvatar" />
                </div>
            </div>
        </div>

    )
}
