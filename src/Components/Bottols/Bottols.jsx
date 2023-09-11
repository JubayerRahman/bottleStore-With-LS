import { useEffect, useState } from "react"
import Bottol from "../bottol/Bottol"
import "./Bottols.css"
import Cart from "../Cart/Cart"
import { DeveteAll, GetCartData, Removeone, addToLs } from "../Utils/LocalStorage"

const Bottols = () => {
    const [bottols, SetBottols] = useState([])
    const [cartitems , setCartitems] =useState([])
    const [allRemoveBtnClass, setAllRemoveBtnClass] = useState("hideButton")
    useEffect(()=>{
        fetch("bottle.json")
        .then(res => res.json())
        .then(data => SetBottols(data) )
    },[])
    useEffect(()=>{
      if(bottols.length>0){
        const storedData = GetCartData();
        console.log(storedData)
        const savedArray =[]
         for (const id of storedData) {
           console.log(id)
           const bottle= bottols.find(bottle => bottle.id=== id)
           if(bottle){
            savedArray.push(bottle)
           }
          }
          // this is for all remove button
          if(savedArray.length>0){
            setAllRemoveBtnClass("removeButton")
          }
          console.log(savedArray)
          setCartitems(savedArray)
      }
    },[bottols])
    const cartbtnFun=(product)=>{
      setAllRemoveBtnClass("removeButton")
      const newArray = [...cartitems , product]
      setCartitems(newArray)
      addToLs(product.id)
    }
    useEffect(()=>{
      if(cartitems>0){
        console.log("I am triggring")
        setAllRemoveBtnClass("removeButton")
      }
    },[cartitems])
    const handelRemoving =(id)=>{
      const RemainingBottols = cartitems.filter(bottols => bottols.id !== id)
      setCartitems(RemainingBottols)
      if(RemainingBottols.length===0){
        setAllRemoveBtnClass("hideButton")
      }
      Removeone(id);
    }
    // all Delete Function
    const DeleteFun =()=>{
      DeveteAll()
      setCartitems([])
      setAllRemoveBtnClass("hideButton")
    }
  return (
    <div>
      <h1 className="title">Here are all our {bottols.length} fantestic Bottols choose yours.</h1>
      <h2> Selected products: {cartitems.length} </h2>
      <div className="cartContainer">
        {
          cartitems.map(product => 
          <Cart 
            key={product.id} 
            product={product}
            handelRemoving={handelRemoving}
            >
            </Cart>)
        }
      </div>
        <button className={allRemoveBtnClass} onClick={DeleteFun}><i className="fa-solid fa-trash"></i> Remove All</button>
      <div className="bottleContainer">
        {
            bottols.map(bottle=> <Bottol key={bottle.id} bottle={bottle} cartbtnFun={cartbtnFun}></Bottol> )
        }
      </div>
    </div>
  )
}

export default Bottols
