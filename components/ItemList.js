import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import items from '../lib/items'
import Link from 'next/link'
import Item from './Item'

const ItemList = ({ productList }) => {
  useEffect(() => {
    console.log(productList)
  }, [])
  return (
    <div className='ItemList mt-3'>
      {productList.map((item) => (
        <Item item={item} key={item._id} />
      ))}
    </div>
  )
}

export default ItemList
