
// import './App.css'

import Features from "./Components/Features"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Object from "./Components/Object"

function App() {

  return (
    <>

      <Navbar/>
      <Header/>
      <div style={{display:"flex"}}>
        <Features  mainT="Next day as standard" paragraf="Order before 3pm and get your order the next day as standard" icon="Delivery.png"/>
        <Features mainT="Made by true artisans" paragraf="Handmade crafted goods made with real passion and craftmanship" icon="Checkmark--outline.png"/>
        <Features mainT="Unbeatable prices" paragraf="For our materials and quality you won’t find better prices anywhere" icon="Purchase.png"/>
        <Features mainT="Recycled packaging" paragraf="We use 100% recycled to ensure our footprint is more manageable" icon="Sprout.png"/>
      </div>
      {/* <Object/> */}
    </>
  )
}

export default App
