import React, { useEffect, useState } from "react";
import iconDel from "../../../assets/icons/btn-delete.png"
import test from "../../../assets/images/logo.png"
import './style.scss'

export default function CardComicComponent({render, dataComic, openModal}) {
    
    const [infoComic , setInfoComic] = useState({})


    function openModalDetail(info) {
        if (info.resourceURI) {
            openModal(info.resourceURI)
        }
    }

    useEffect(()=>{
        if (dataComic) {
            setInfoComic(dataComic);
        }
    },[dataComic])
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
            
            <div className="cont-main-card-comic" onClick={()=> openModalDetail(infoComic)}>
                <img src={`${infoComic?.thumbnail?.path}.${infoComic?.thumbnail?.extension}`} alt="" className="cover-comic" />
                <div className="title-comic">
                    {infoComic?.title}
                </div>
            </div>
        }
        </React.Fragment>
    )
}