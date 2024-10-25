import React from 'react';
import Buy from './Buy.js';
import img1 from "../images/img1.jfif"
import img2 from "../images/img2.webp"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jfif"
import img5 from "../images/img5.jfif"
import img6 from "../images/img6.avif"




const Card=()=>{
   
 
    const detail=[
    {
        id:1,
        image:img1,
        brandname:"Head set",
        carname:"Purple",
        price:6.50,
        btn:"Show more"
    },
    {
        id:2,
        image:img2,
        brandname:"Head set",
        carname:"Pink",
        price:15.49,
        btn:"Show more"
    },
    {
        id:3,
        image:img3,
        brandname:"Shoes",
        carname:"Lavender",
        price:10.98,
        btn:"Show more"
    },
    {
        id:4,
        image:img4,
        brandname:"Heels",
        carname:"Pastel",
        price:8.10 ,
        btn:"Show more"
    },
    {
        id:5,
        image:img5,
        brandname:"Watch",
        carname:"Titan",
        price:16.19,
        btn:"Show more"
    },
    {
        id:6,
        image:img6,
        brandname:"Perfume",
        carname:"Lavender",
        price:6 ,
        btn:"Show more"
    },
   
]
    return(
        <div>
            {/* <p>parent</p> */}
            {/* <Pree name={x} age={age} o={obj} arr={a} list={arrobj}/> */}
            <Buy car={detail}/>
        </div>
    )
}

export default Card