import React, { useEffect, useState } from "react";
import './style.scss'
import close from '../../assets/icons/btn-close.png'
import scude from '../../assets/icons/btn-favourites-primary.png'
import shopp from '../../assets/icons/shopping-cart-primary.png'
import {CONSTANT} from '../../config/CONSTANT'
import { getDetailComic } from "../../API/search";
import { toast } from "react-toastify";


export default function ModalDetailComic({closeModal, url , setFav}) {

    const [dataComic, setDataComic] = useState({});
    const [modelStorage, setModelStorage] = useState({})

    const favorites = JSON.parse(localStorage.getItem(CONSTANT.COMICS_FAV));  
    

    async function detailComic(url) {
        let response = await  getDetailComic(url)
        if (response) {
            setDataComic(response);
            let clone = {...modelStorage}
            clone.id = response.id;
            clone.path =  response.thumbnail?.path;
            clone.extension = response.thumbnail?.extension;
            clone.title = response.title;
            setModelStorage(clone);
        }
    }

    function handleAddFavorites() {
        let arr = []
        if (!favorites) {
            arr.push(modelStorage)
            localStorage.setItem(CONSTANT.COMICS_FAV,JSON.stringify(arr));
            toast('Added to your favorites', {type:"success"})
            closeModal();
            setFav(arr)
        }else{
            const exist = favorites.find(el => el.id === modelStorage.id);
            if (exist) {
                toast('Already exists, cannot be added to your favorites',{type:"error"})
                closeModal()
            }else{
                arr = favorites;
                arr.push(modelStorage)
                localStorage.setItem(CONSTANT.COMICS_FAV,JSON.stringify(arr));
                toast('Added to your favorites', {type:"success"})
                closeModal()
                setFav(arr)
            }
        }
    }

    function handleBuy() {
        toast('functionality is not available',{type:'error'})
        closeModal()
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
                    <button className="add"  onClick={()=> handleAddFavorites()} > <img src={scude} alt="" /> Add favotires</button>
                    <button className="buy"> <img src={shopp} alt="" onClick={() => handleBuy()} /> buy  {dataComic.prices ? `for $${dataComic.prices[0].price}` : '' }</button>

                </div>
                <img src={close} className="close-modal" alt="" onClick={closeModal} />

            </div>

        </div>
    )
    
}