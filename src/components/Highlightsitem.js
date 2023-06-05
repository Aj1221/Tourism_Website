import React , {useEffect,useState} from "react";
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';


import "../styles/Home.css";


function HighlightsItem() {
    const[item,setItem]=useState([])
   

    useEffect(() => {
        axios.get('https://web-dev.dev.kimo.ai/v1/highlights').then(res => 
        { console.log('res',res)
        setItem(res.data)
           });



    },[])


    console.log('item',item)

  return (
    <div>

    <h2 className="highlightheading">Highlights</h2>
    <div className="outterbox" >

    {item.length >0 && item.map((i,index) => {
        return (
            <div  className="outerbox">
            <img alt = '/'className="boximage" src={i.image}
         />
        <div className="innerbox">
              <h1 className="head"> {i.title} </h1>
              <p> {i.description}</p>
            </div>
            <div className="arrowdiv">
            <AiOutlineArrowRight className="highlightarrow" />
            </div>

            </div>

        )
    })}
    </div>
   
    </div>
  );
}

export default HighlightsItem;
