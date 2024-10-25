import "./style.css"

const Features = () => {
  const arr = [
    {
      id:0,
      name:"Next day as standard",
      desc:"Order before 3pm and get your order the next day as standard",
      icon:"Delivery.png"
    },
    {
      id:1,
      name:"Made by true artisans",
      desc:"Handmade crafted goods made with real passion and craftmanship",
      icon:"Checkmark--outline.png"
    },
    {
      id:2,
      name:"Unbeatable prices",
      desc:"For our materials and quality you won’t find better prices anywhere",
      icon:"Purchase.png"
    },
    {
      id:3,
      name:"Recycled packaging",
      desc:"We use 100% recycled to ensure our footprint is more manageable",
      icon:"Sprout.png"
    }
  ]
  return (
    <div className='Features'>
      
      <h1>What makes our brand different</h1>

      <div className='feature_cards'>

       {arr.map(({id,name,desc,icon})=>(
         <div key={id} className='feacture_card'>
         <img className='icon' src={icon} />
         <h3>{name}</h3>
         <p>{desc}</p>
       </div>

       ))}

      </div>

    </div>

  )
}

export default Features