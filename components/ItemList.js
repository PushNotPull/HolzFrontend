import React from 'react'
import { Card } from 'react-bootstrap'
import items from '../lib/items'
import Link from 'next/link'

const ItemList = () => {
  return (
    <div className='ItemList mt-3'>
      {items.map((item) => (
        <Link href={`/shop/${item._id}`}>
          <Card style={{ cursor: 'pointer' }} key={item._id}>
            <Card.Img variant='top' src={item.pictures[0]} />
            <Card.Body>
              <Card.Title className='item-title'>
                <h6>
                  {item.title}{' '}
                  <small className='text-muted'>
                    {item.treeDetail.species.latin}
                  </small>
                </h6>
              </Card.Title>
              <Card.Text>
                <div className='gridContainer'>
                  <small className='text-muted'>
                    <i className='fas fa-coins'></i>
                  </small>
                  {`${item.price.priceValue} EUR`} {item.price.priceType}
                  <small className='text-muted'>
                    <i className='fas fa-tree'></i>{' '}
                  </small>
                  <span>
                    {item.treeDetail.fellingState.felled
                      ? 'Bereits gefällt'
                      : 'Nicht gefällt'}
                  </span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ItemList
