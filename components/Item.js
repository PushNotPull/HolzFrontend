import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const Item = ({ item }) => {
  return (
    <Link href={`/shop/${item._id}`}>
      <Card style={{ cursor: 'pointer' }}>
        {/* <Card.Img variant='top' src={item.pictures[0]} /> */}
        <Card.Img
          variant='top'
          src={
            'https://bilder.t-online.de/b/91/04/74/62/id_91047462/343h/c_raw/tid_da/baum-des-jahres-2022-rotbuche-fagus-sylvatica-.jpg'
          }
        />
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
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Item
