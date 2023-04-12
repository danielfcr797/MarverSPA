import React, { useEffect, useState } from "react";
import CardComicComponent from "../bodyHome/cardComic";
import './style.scss'
import { useLocation, useParams } from "react-router-dom";
import alertIcon from "../../assets/images/alert-icon-red-11.png"
import { getAllComicsById } from "../../API/search";
import ModalDetailComic from "../modalDetail";
export default function ComponentBodyComics() {
    

    const params = useParams()
    const location = useLocation()
    const [comics, setComics] = useState([]);
    const [showModalDetail, setShowModalDetail] = useState(false);
    const [urlComic, setUrlComic] = useState('');


    async function getComicsById(id) {
        const response = await getAllComicsById(id)
        if (response.results) {
            setComics(response.results);
            
        }
    }

    function handleModal(url) {
        if (url) {
            setShowModalDetail(true);
            setUrlComic(url);
        }
        
    }

    function handleCloseModal() {
        setShowModalDetail(false);
    }

    useEffect(()=>{
        if (params.id) {
            getComicsById(params.id);
        }

    },[location])
    return(
        <React.Fragment>

            <div className="cont-main-view-comics">
                <div className="title">
                    {
                        comics.length > 0 ?  
                        <h1>comics related to the character</h1>
                        : ''
                    }
                </div>
                <div className="content-main-cards">
                    {
                        comics.length > 0 ?
                        comics?.map((c,i) =>(
                            <CardComicComponent
                            render={'comic'}
                            dataComic={c}
                            openModal={handleModal}
                            key={i}
                                />
                        )) :
                        <div className="comics-not-found">
                            <h2>
                                No comics related to the character were found.

                            </h2>
                            <img src={alertIcon} alt="" />
                        </div>
                    }
                            
                </div>
                <div className="cont-paginator-commics">
                </div>
            </div>
            {
                showModalDetail ?
                <ModalDetailComic
                closeModal={handleCloseModal}
                url={urlComic}
                /> 
                : ''
            }
        </React.Fragment>
    )
}