import React, { useState } from "react";
import OrderByComponent from "../shared/orderBy";
import characters from "../../assets/icons/characters.png"
import './style.scss'
import CardCharacterComponent from "./cardCharacter";
export default function ComponentBodyHome() {

    const [listOrder] = useState([
        {
            title: 'Name upward',
            sort: 'name'
        },
        {
            title: 'Modified upward',
            sort: 'modified'
        },
        {
            title: 'Name falling',
            sort: '-name'
        },
        {
            title: 'Modified falling',
            sort: '-modified'
        },
        
    ])

    return(
        <div className="cont-main-body">
            <div className="section-left">
                <div className="top">
                    <div className="cont-title">
                        <img src={characters} alt="" />
                        <h4>Characters</h4>
                    </div>
                    <OrderByComponent 
                    list={listOrder}
                    />
                </div>

                <div className="cont-list-results">
                    {

                    listOrder.map((char,i) => (
                        <CardCharacterComponent key={i}
                        />
                    ))
                    }
                </div>
                <div className="cont-paginator">
                    paginador
                </div>
            </div>
            <div className="section-rigth">
                derecha
            </div>
        </div>
    )
    
}