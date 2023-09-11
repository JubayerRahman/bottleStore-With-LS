// 
// getting Data
const GetCartData=()=>{
    const cartData = localStorage.getItem('cart')
    if(cartData){
        return JSON.parse(cartData)
    }
    return [];
}
// saving Data
const saveToLs = (cart)=>{
    const datatoSave = JSON.stringify(cart)
    localStorage.setItem("cart", datatoSave)
}

// delete ALL
const DeveteAll =()=>{
    localStorage.clear()
}

// adding Data
const addToLs=(id)=>{
    const cartData = GetCartData()
    cartData.push(id)
    // save to localStorage
    saveToLs(cartData)
}

// remove Id

const Removeone = id =>{
    const cart = GetCartData();
    const remainingId = cart.filter(idx=> idx !== id )
    // saving
    saveToLs(remainingId)
    // console.log(id)
}

export {GetCartData, addToLs, DeveteAll , Removeone}