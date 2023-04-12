import React from "react";
import CardComicComponent from "../bodyHome/cardComic";
import './style.scss'
export default function ComponentBodyComics() {
    
    return(
        <div className="cont-main-view-comics">
            <div className="title">
                <h1>COMICS</h1>
            </div>
            <div className="content-main-cards">
                        <CardComicComponent 
                            render={'comic'}
                            />
            </div>
            <div className="cont-paginator-commics">
            </div>
        </div>
    )
}