import React, { useContext } from 'react'
import { Mycontext } from '../hook/hookcooking';
function ShoppingCard(data) {
    const {image,price,name} = data.data;
    const {setcount,setCardItem,CardItem}= useContext(Mycontext);
    const addItem=()=>{
        setcount(pre=>pre+1);
        setCardItem(pre=>([...pre,data.data]))
        console.log(CardItem);
    }
  return (
    <div className='item'>
        <img src={image}/>
        <div className='title'>{name}</div>
        <div className='price'> ₹ {price}</div>
        <button onClick={addItem}>Add To Card</button>
    </div>
  )
}

export default ShoppingCard