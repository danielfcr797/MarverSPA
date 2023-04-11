import React from "react";
import logo from '../../../assets/images/logo.png'
import search from '../../../assets/icons/search.png'
import './style.scss'

export default function HeaderComponent(params) {

    return(
        <div className="cont-main-header">
            <div className="cont-logo">
                <img src={logo} className="logo" alt="" />
            </div>
            <div className="cont-search">
                <label htmlFor="" className="search">
                    <input type="text"  placeholder="Shearch character"/>
                    <img src={search} alt="" className="icon" />
                </label>

            </div>
        </div>
    )
    
}