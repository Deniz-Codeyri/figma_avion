import React from 'react'
import './style.css'

const Header = () => {
  return (
    <header>
        <div className='img_parent'>

            <img className="bcg" src="bcg.jpeg" alt="" />

        </div>
        

        <div className='header_text'>

            <h1>Luxury homeware for people <br></br>who love timeless design quality</h1>

            <h3>Shop the new Spring 2022 collection today</h3>

            <button>View collection</button>

        </div>
    </header>
  )
}

export default Header