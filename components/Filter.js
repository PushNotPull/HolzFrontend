import React from 'react'
import PriceRange from './filters/PriceRange'
import filterItemList from '../lib/filterItems'
import Felled from './filters/Felled'
import Circling from './filters/Circling'

const Filter = () => {
  return (
    <div className='Filter mt-3 d-flex' style={{ gap: '1rem' }}>
      <PriceRange />
      <Felled />
      <Circling />
    </div>
  )
}

export default Filter
