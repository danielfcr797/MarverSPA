import React, { useEffect, useState } from "react";
import arrow from '../../../assets/icons/link-arrow.png'
import './style.scss'
import { useNavigate } from "react-router-dom";

export default function CardCharacterComponent({data, openModal}) {

    const [infoChar, setInfoChar] = useState({});
    const [relatedComics, setRelatedComics] = useState([])
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/comics/${infoChar.id}`);
    }

    function handleModal(url) {
        if (url.resourceURI) {
            openModal(url.resourceURI)
        }
        
    }

    useEffect(()=>{
        if (data) {
            setInfoChar(data);
            let rel = data.comics.items;
            setRelatedComics(rel.slice(0,4))
        }
    },[data])

    return(
        <div className="cont-main-card">
            <div className="cont-top-fixed">
                <img src={`${infoChar?.thumbnail?.path}.${infoChar?.thumbnail?.extension}`} className="image-char" alt="" />
                <div className="cont-info-primary">
                    <h3>{infoChar?.name}</h3>
                    <div>{infoChar?.description}</div>
                    <button onClick={() => handleClick()}>VIEW MORE</button>
                </div>
            </div>
            <div className="section-related">
                <h4>Related Comics</h4>
            </div>
            <div className="section-grid-container">
                {
                    relatedComics.map((rel,i) =>(
                        <span key={i} onClick={()=> handleModal(rel)}>
                            <img src={arrow} alt="" />
                            <h5>{rel.name}</h5>
                        </span>
                    ))
                }
                    {/* <span>
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
                    </span> */}
            </div>
        </div>
    )
    
}