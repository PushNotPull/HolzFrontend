import React from 'react'
import Item from './Item'

const Recommendations = ({ recommendations }) => {
  return (
    <div className='Recommendations'>
      <h3>Diese Produkte könnten Ihnen auch gefallen</h3>
      <div className='Grid my-3'>
        {recommendations.map((recommendation) => (
          <Item item={recommendation} key={recommendation._id} />
        ))}
      </div>
    </div>
  )
}

export default Recommendations
