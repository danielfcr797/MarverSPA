import React, { useState } from "react";
import logo from '../../../assets/images/logo.png'
import searchIcon from '../../../assets/icons/search.png'
import './style.scss'
import { useNavigate, Link } from "react-router-dom";

export default function HeaderComponent() {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleChangeSearch(e) {
        setSearch(e.target.value);
        navigate(`/home?search=${e.target.value}&page=1`);
    }

    return(
        <div className="cont-main-header">
            <div className="cont-logo">
                <Link to='/home'>

                <img src={logo} className="logo" alt="" />
                </Link>
            </div>
            <div className="cont-search">
                <label htmlFor="" className="search">
                    <input type="text" value={search} onChange={(e)=>handleChangeSearch(e)}  placeholder="Shearch character"/>
                    <img src={searchIcon} alt="search" className="icon" />
                </label>

            </div>
        </div>
    )
    
}