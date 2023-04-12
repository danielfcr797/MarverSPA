import React, { useEffect, useState } from "react";
import './style.scss'
import close from '../../assets/icons/btn-close.png'
import scude from '../../assets/icons/btn-favourites-primary.png'
import shopp from '../../assets/icons/shopping-cart-primary.png'
import { getDetailComic } from "../../API/search";

export default function ModalDetailComic({closeModal, url}) {

    const [dataComic, setDataComic] = useState({});
    

    async function detailComic(url) {
        let response = await  getDetailComic(url)
        if (response) {
            setDataComic(response);
        }
    }

    useEffect(()=>{
        if (url) {
            detailComic(url)
        }
    }, [url])
    return(
        <div className="cont-main-bgk-modal">
            <div className="card-modal">
                <div className="content-modal">
                    <div className="cont-img">
                        <img src={`${dataComic?.thumbnail?.path}.${dataComic?.thumbnail?.extension}`} alt="" />
                    </div>
                    <div className="cont-info-comic">
                        <h4>{dataComic?.title}</h4>
                        <p>{dataComic.description !== '' ? dataComic?.description : '' }</p>
                    </div>
                </div>
                <div className="cont-actions-modal">
                    <button className="add"> <img src={scude} alt="" /> Add favotires</button>
                    <button className="buy"> <img src={shopp} alt="" /> buy  {dataComic.prices ? `for $${dataComic.prices[0].price}` : '' }</button>

                </div>
                <img src={close} className="close-modal" alt="" onClick={closeModal} />

            </div>

        </div>
    )
    
}