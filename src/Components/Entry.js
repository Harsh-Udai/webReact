import React,{isValidElement, useEffect, useState} from "react";
import Card from './card';
import './card.css';
import Data from '../Data/primary.json';

export default function Entry(){

    // console.log(Data);
    const [data,setData] = useState([]);

    useEffect(()=>{
        Data.map((el)=>{
            setData(el);
        })
    })

    
    
    return(
        <div className="mainEntry">
            
            <Card />
            
            
        </div>
    )
}