import React , {useEffect,useState} from "react";
import axios from 'axios';
import image from "../assets/profile.png";
import { AiOutlineArrowRight } from 'react-icons/ai';

import "../styles/Home.css";
import { Link } from "react-router-dom";



function Categories() {
    const[item,setItem]=useState([])
   

    useEffect(() => {
        axios.get('https://web-dev.dev.kimo.ai/v1/categories').then(res => 
        { console.log('res',res)
        setItem(res.data)
           });



    },[])


    console.log('item',item)

  return (
    <div className="catbox" >
  <div className="leftside">
  <h3 className="catheading">Categories</h3>
   

    {item.length >0 && item.map((i,index) => {
        return (
            <div  className="categoriesbox">
<p>{i.name}</p>
<AiOutlineArrowRight style={{'color': '#008080'}} />
        
            </div>

        )
    })}
  </div>
<div className="rightside">
<div><h3 className="travelheading">Travel Guide</h3>
<div className="rightbox">
<div className="innerrightbox">
<h3>Hadwin Malone</h3>
<p>Guide Since 2012</p>
<Link className="contactbtn" to="/contact">Contact</Link>
</div>
<div>
<img alt = '/' className="profileimage" src={image} />
</div>
</div>

</div>

</div>
   
    </div>
  );
}

export default Categories;
