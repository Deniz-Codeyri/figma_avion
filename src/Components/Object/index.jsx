import axios from 'axios';
import  { useEffect, useState } from 'react'

const Object = () => {
  let [card,setCard] = useState([]);

  useEffect(()=>{
    axios("http://localhost:3000/cards").then((res)=> setCard(res.data))
  },[])
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between",paddingInline:"20px"}}>
      {card.map(({id,img,name,price})=>(
        <div key={id} style={{maxHeight:"300px",width:"300px",backgroundColor:"red"}}>
          <img src={img} style={{width:"100%",height:"100%"}}/>
          <h1>{name}</h1>
          <h2>{price}</h2>
        </div>
      ))}
    </div>
  )
}

export default Object