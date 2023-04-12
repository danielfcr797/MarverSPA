import React, { useEffect, useState } from "react";
import OrderByComponent from "../shared/orderBy";
import charactersIcon from "../../assets/icons/characters.png"
import favourites from "../../assets/icons/btn-favourites-primary.png"
import './style.scss'
import CardCharacterComponent from "./cardCharacter";
import CardComicComponent from "./cardComic";
import { Pagination } from "@mui/material";
import { searchCharacter } from "../../API/search";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function ComponentBodyHome() {

    const [params, setParams] = useState({
        search:'',
        page:'',
        orderBy:''
    });
    const [searchParams] = useSearchParams()
    const location = useLocation();
    const navigate = useNavigate()
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
        
    ]);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    function handlePagination(e, newPage) {
        setCurrentPage(parseInt(newPage));
        if (params.search) {
            navigate(`/home?search=${params.search}&page=${newPage}`)
        }else{
            navigate(`/home?page=${newPage}`)
        }
    }   

    async function getCharacter(param) {
        let response = await searchCharacter(param)
        if (response.results) {
            setTotalPages(Math.ceil(response.total/10))
            setCharacters(response.results);
        }
    }



    useEffect(()=>{
        let searchP = searchParams.get('search');
        let pag = searchParams.get('page');
        let clone = {...params}

        clone.search = searchP ? searchP : ''
        clone.page = pag ? pag : 1

        if (pag) {
            setCurrentPage(parseInt(pag))
        }
        setParams(clone);
        getCharacter(clone)
    }, [location])

    return(
        <div className="cont-main-body">
            <div className="section-left">
                <div className="top">
                    <div className="cont-title">
                        <img src={charactersIcon} alt="" />
                        <h4>Characters</h4>
                    </div>
                    <OrderByComponent 
                    list={listOrder}
                    />
                </div>

                <div className="cont-list-results">
                    {

                    characters.map((char,i) => (
                        <CardCharacterComponent data={char} key={i}
                        />
                    ))
                    }
                </div>
                <div className="cont-paginator">
                    <Pagination
                    count={totalPages} 
                    page={currentPage}
                    variant="outlined" 
                    shape="rounded"
                    onChange={handlePagination}
                    siblingCount={1} boundaryCount={2}
                    />
                </div>
            </div>
            <div className="section-rigth">
                <div className="cont-title">
                    <img src={favourites} alt="" />
                    <h4>My favourites</h4>
                </div>
                {
                    listOrder.map((fav,i) =>(
                        <CardComicComponent key={i}
                        />
                    ))
                }
            </div>
        </div>
    )
    
}