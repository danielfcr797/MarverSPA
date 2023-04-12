import React, { useState } from "react";
import arrow from '../../../assets/icons/arrow.png'
import './style.scss'

export default function OrderByComponent({list,setPar}) {

    const [value, setValue ] = useState('');
    const [showSelector , setShowSelector] = useState(false);


    function handleOrderBy(ord) {
        setPar(ord.sort);
        setValue(ord.title);
        handleSelect()
    }


    function handleSelect() {
        setShowSelector(!showSelector);
    }
    return(
        <div className="cont-main-order">
            <div className="cont-close" onClick={() => handleSelect()}>
                {
                    value !== '' 
                    ? <p>{value}</p> 
                    : <p>Sort by</p>
                }
                <img src={arrow} className={ showSelector ? 'above' : 'down'} alt=""/>
            </div> 
            {
                showSelector ?
                <div className="cont-open">
                {
                    list?.map((item,i) =>(
                        <div key={i} className='item' onClick={() => handleOrderBy(item)}>
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