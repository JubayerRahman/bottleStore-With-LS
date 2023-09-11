import React, { useEffect } from 'react'
import "./Cart.css"

const Cart = ({product , handelRemoving}) => {
    const {img, name ,id}= product
  return (
    <div className='cart'>
        <img src={img}/>
        <h3>{name}</h3>
        <button className='removeButton' onClick={()=>handelRemoving(id)}>
          <i className="fa-solid fa-trash"></i> Remove</button>
    </div>
  )
}

export default Cart
