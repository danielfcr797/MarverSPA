import React from "react";
import ComponentBodyHome from "../../components/bodyHome";
import FooterComponent from "../../components/shared/footer";
import HeaderComponent from "../../components/shared/header";
import './style.scss'

export default function HomeContainer(params) {
    
    return(
        <div className="container-main-home">
            <HeaderComponent/>
            <ComponentBodyHome/>
            <FooterComponent/>
        </div>
    )
}