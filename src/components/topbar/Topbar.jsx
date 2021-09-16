import React, { setState, useState } from 'react'
import "./topbar.css"
import { ShoppingCart, Storefront, DashboardOutlined } from '@material-ui/icons'
import pedraazul from "../../images/pedraazul.png"
import { Link } from 'react-router-dom';


const Topbar = (props) => {

    // const [ cartQuantity , addToCart ] = useState()

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={pedraazul} alt="logo pedra azul" className="pedraazul" />
                    <span className="logo">SOLID</span>
                    <span className="subLogo">{props.subtitle}</span>
                </div>
                <div className="topRight">
                    <Link to="./showcase" className="topbarIconContainer">
                        <Storefront  />
                    </Link>
                    <Link to="./cart" className="topbarIconContainer">
                        <ShoppingCart />
                        <span className="topbarIconBage">{props.cartQuantity}</span>
                    </Link>
                    <Link to="./" className="topbarIconContainer">
                        <DashboardOutlined />
                    </Link>
                    <img src="https://avatars.githubusercontent.com/u/63686965?s=400&u=d10ba5394d8ec6f1478d50e404979ada77ff904a&v=4" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;