import React from "react";
import test from '../../../assets/icons/favourites.png'
import arrow from '../../../assets/icons/link-arrow.png'
import './style.scss'

export default function CardCharacterComponent(params) {


    return(
        <div className="cont-main-card">
            <div className="cont-top-fixed">
                <img src={test} className="image-char" alt="" />
                <div className="cont-info-primary">
                    <h3>TEST</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ad eum molestiae atque esse deleniti neque nulla officiis! Dolor asperiores architecto temporibus perspiciatis praesentium iste neque quas corporis in rerum.</div>
                    <button>VIEW MORE</button>
                </div>
            </div>
            <div className="section-related">
                <h4>Related Comics</h4>
            </div>
            <div className="section-grid-container">
                    <span>
                        <img src={arrow} alt="" />
                        <h5> tedxto</h5>
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                        <h5> tedxto</h5>
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                        <h5> tedxto</h5>
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                        <h5> tedxto</h5>
                    </span>
            </div>
        </div>
    )
    
}