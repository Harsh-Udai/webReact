import React,{isValidElement, useDebugValue, useEffect, useState} from "react";
import Card from './Card';
import './card.css';
import Data from '../Data/primary.json';

export default function Entry(){

    const [data,setData] = useState(Data);
    const [store,setStore] = useState(Data);
    const [mode,setMode] = useState(false);
  
    function remove(index_){
        data.splice(index_,1);
        setData([...data]);

        if(data.length<=0){
            setTimeout(()=>{
                setData(store);
            },3000);
        }
    }

    function modeSet(e){
        document.body.style.overflow = e?"hidden":null;
        setMode(e);
    }
    
    return(
        <div className="mainC">
            <div style={{opacity:mode?'0.7':'1'}}>

            {
                data.length>0?
                <div className="mainEntry">
                    {data.map((el,key)=>{
                        return(
                            <Card key={key} mode={modeSet} remove={remove} id={key} image={el.image} name={el.name} email={el.email} phone={el.phone} web={el.web} />
                        )
                    })}
                </div>
                :
                <div style={{textAlign:'center',marginTop:'40px'}}>
                    <h1>All the Data is removed</h1>
                    <h2>Just a Second we will fetch the data again.</h2>
                </div>
            }
            </div>
            
        </div>
    )
}