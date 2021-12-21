import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import items from '../lib/items'

const ItemList = () => {
  return (
    <div className='ItemList'>
      {items.map((item, index) => (
        <Card style={{ cursor: 'pointer' }} className='my-3'>
          <Card.Img variant='top' src={item.imagePath} />
          <Card.Body className='text-center'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.location}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ItemList
