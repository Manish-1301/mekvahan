import React from 'react';
import { Card,Button } from 'antd';
import './Cards.css'
import homeIcon from '../SignIn/SVG/Asset 8.svg';
import OtherIcon from '../SignIn/SVG/Asset 9.svg';
import OfficeIcon from '../SignIn/SVG/Asset 10.svg';

const icontype=(type)=>{
    if(type==="Home")
        return homeIcon
    else if(type==="Office")
        return OfficeIcon
    else 
        return OtherIcon
}


const Cards=({address})=>{
    const Address=address.map(Address=>{
        const icon =icontype(Address.type)
        return(
            <Card key={Address.type} style={{ width:"35vw" }}>
                <div className="card">
                    <img src={icon} alt="icon" className="Card__header-Icon"/>
                    <p className="Card__header-text">{Address.type}</p>
                    <p>{Address.Address}</p>
                    <div className="Buttons">
                        <Button type="primary" className="Card__Button">Edit</Button>
                        <Button className="Card__Button">Delete</Button>
                    </div>
                </div>
            </Card>
        );
    })
    return(
        <div className="cards">{Address}</div>
    );
}

export default Cards;