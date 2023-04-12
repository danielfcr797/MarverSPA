import React from "react";
import FooterComponent from "../../components/shared/footer";
import HeaderComponent from "../../components/shared/header";
import './style.scss'
import ComponentBodyComics from "../../components/bodyComics";

export default function ComicsContainer(params) {
    
    return(
        <div className="container-main-home">
            <HeaderComponent/>
            <ComponentBodyComics/>
            <FooterComponent/>
        </div>
    )
}