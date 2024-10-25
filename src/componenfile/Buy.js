import React from 'react'
import './buy.css'

const Buy=(card)=>{
    console.log(card);
    return(
       
        <div className='card-section'>
                <div className='card-container'>
                    <div className='card-row' >
                        {
                            card.car.map((value)=>{
                                return(
                                    <div key={value.id} className='card-col'>
                                        <div className='card-card'>
                                            <div className='card-image'>
                                                <img src={value.image} alt=""/>
                                            </div>
                                            <h3>{value.brandname } {value.carname}</h3>
                                            
                                            <p>{value.price} $</p>
                                            <div className='card-btn'>
                                                <a href=" ">{value.btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default Buy 