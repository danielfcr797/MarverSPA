import React, { useState } from "react";
import arrow from '../../../assets/icons/arrow.png'
import './style.scss'

export default function OrderByComponent({list}) {

    const [value ] = useState('');
    const [showSelector , setShowSelector] = useState(false)


    function manejador(params) {
        setShowSelector(!showSelector);
    }
    return(
        <div className="cont-main-order">
            <div className="cont-close">
                {
                    value !== '' 
                    ? <p>{value}</p> 
                    : <p>Sort by</p>
                }
                <img src={arrow} className={ showSelector ? 'above' : 'down'} alt="" onClick={() => manejador()}/>
            </div> 
            {
                showSelector ?
                <div className="cont-open">
                {
                    list?.map((item,i) =>(
                        <div key={i} className='item'>
                            {item.title}
                        </div>
                    ))
                }
            </div>
            : ''
        }
        </div>
    )
    
}