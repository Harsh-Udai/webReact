import React,{isValidElement, useEffect, useState} from "react";
import Card from './card';
import './card.css';
import Data from '../Data/primary.json';

export default function Entry(){

    console.log(Data);    
    
    return(
        <div className="mainEntry">
            
            {
                Data.map((el,key)=>{
                    console.log(el);
                    return(
                        <Card key={key} image={el.image} name={el.name} email={el.email} phone={el.phone} web={el.web} />
                    )
                })
            }
            
            
        </div>
    )
}