import React from 'react'
import './Bottol.css'

const Bottol = ({bottle , cartbtnFun}) => {
    const {name, seller , price , img} = bottle
  return (
    <div className='singleBottle'>
      <img src={img} alt={name}/>  
      <h3>Name: {name}</h3>
      <h3>Seller: {seller}</h3>
      <h3>Price: {price}৳</h3>
      <button className='cartButton' onClick={()=>{cartbtnFun(bottle)}}>Add to  <i className="fa-solid fa-cart-shopping"></i></button>
    </div>
  )
}

export default Bottol
