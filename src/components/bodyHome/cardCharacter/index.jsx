import React from "react";
import test from '../../../assets/icons/favourites.png'
import './style.scss'

export default function CardCharacterComponent(params) {


    return(
        <div className="cont-main-card">
            <div className="cont-top-fixed">
                <img src={test} className="image-char" alt="" />
                <div className="cont-info-primary">
                    <h3>TEST</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ad eum molestiae atque esse deleniti neque nulla officiis! Dolor asperiores architecto temporibus perspiciatis praesentium iste neque quas corporis in rerum.</p>
                    <button>VIEW MORE</button>
                </div>
            </div>
            {/* <div className="section-bottom-card">
                <div className="left">
                    <h5>tedxto</h5>
                    <h5>tedxto</h5>
                </div>
                <div className="rigth">
                    <h5>tedxto</h5>
                    <h5>tedxto</h5>
                </div>
            </div> */}
        </div>
    )
    
}