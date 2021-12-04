import React from 'react'
import "./style.css"
import { ShoppingCart, Storefront, DashboardOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import pedraazul from '../../images/pedraazul.png'

export default function Header () {
    var cart = JSON.parse(localStorage.getItem('@solidboard:cart'))

    const setLength = () => {
        var length = 0
        for(var k in cart) if(cart.hasOwnProperty(k)) length++
        return length
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={pedraazul} alt="logo pedra azul" className="pedraazul" />
                    <span className="logo">SOLID</span>
                    <span className="subLogo">compras</span>
                </div>
                <div className="topRight">
                    <Link to="./" className="sacola" >
                        <div className="topbarIconContainer">
                            <Storefront />
                        </div>
                    </Link>
                    <Link to="./cart" className="sacola" >
                        <div className="topbarIconContainer">
                            <ShoppingCart />
                            <span className="topbarIconBage">{setLength()}</span>
                        </div>
                    </Link>
                    <Link to="./admin" className="sacola" >
                        <div className="topbarIconContainer">
                            <DashboardOutlined />
                        </div>
                    </Link>
                    <img src="https://avatars.githubusercontent.com/u/63686965?s=400&u=d10ba5394d8ec6f1478d50e404979ada77ff904a&v=4" alt="" className="topAvatar" />
                </div>
            </div>
        </div>

    )
}
