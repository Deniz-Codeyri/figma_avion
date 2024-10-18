import React from 'react'
import "./style.css";

const Navbar = () => {
  return (
    <nav>

        

        <div className='nav_first'>

            <img src="Search.png" alt="" />

            <h2>Avion</h2>

            

            <div className='imgs'>

            <img src="Shopping--cart.png" alt="" />
            <img src="User--avatar.png" alt="" />

            </div>
            
        </div>

        <div className='line'></div>
       
        <div className='links'>

            <h4>Plant pots</h4>
            <h4>Ceramics</h4>
            <h4>Tables</h4>
            <h4>Chairs</h4>
            <h4>Crockery</h4>
            <h4>Tableware</h4>
            <h4>Cutlery</h4>

        </div>

    </nav>
  )
}

export default Navbar
