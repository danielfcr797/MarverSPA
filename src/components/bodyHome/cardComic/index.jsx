import React from "react";
import iconDel from "../../../assets/icons/btn-delete.png"
import test from "../../../assets/images/logo.png"
import './style.scss'

export default function CardComicComponent(render, data) {
    
    return(
        <React.Fragment>
        {
            render === 'home' ?
            <div className="cont-main-card-home">
                <img src={iconDel} className="icon-delete" alt="" />
                <img src={test} alt="" className="cover-comic" />
                <div className="title-comic">
                    spiderman y los 7 enanitos contra hulck
                </div>
            </div>

            : 
            
            <div className="cont-main-card-comic">
                <img src={test} alt="" className="cover-comic" />
                <div className="title-comic">
                    spiderman y los 7 enanitos contra hulck
                </div>
            </div>
        }
        </React.Fragment>
    )
}