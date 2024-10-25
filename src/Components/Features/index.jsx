import React from 'react'
import "./style.css"

const Features = ({icon,mainT,paragraf}) => {
  return (
    <div className='Features'>
      
      <h1>What makes our brand different</h1>

      <div className='feature_cards'>

        <div className='feacture_card'>
          <img className='icon' src={icon} />
          <h3>{mainT}</h3>
          <p>{paragraf}</p>
        </div>


      </div>

    </div>

  )
}

export default Features