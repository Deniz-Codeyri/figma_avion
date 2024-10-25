import React, { useEffect, useState } from 'react'

const Object = () => {
  let [card,setCard] = useState([]);

  useEffect(()=>{
    axios("http://localhost:3000/cards").then((res)=> setCard(res.data))
  },[])
  return (
    <div>
      {card.map(({id,img,name,price})=>(
        <div key={id}>
          <img src={img}/>
          <h1>{name}</h1>
          <h2>{price}</h2>
        </div>
      ))}
    </div>
  )
}

export default Object