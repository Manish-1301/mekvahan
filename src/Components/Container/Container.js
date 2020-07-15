import React from 'react';
import svg from '../SignIn/SVG/Asset 15.svg'
import './Container.css';
import Cards from '../Cards/Cards'

const Container=({address})=>{
    if (address.length===0)
    {
        return(
            <img src={svg} alt="svg" className="content__image"/>
        );
    }
    else{
        return(
            <Cards address={address} />
        );
    }
}

export default Container