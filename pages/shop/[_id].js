import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap'
import { Loader } from '@googlemaps/js-api-loader'

const productDetail = ({ productDetail, API_KEY }) => {
  const router = useRouter()
  const productId = router.query._id

  productDetail = JSON.parse(productDetail)
  let map

  useEffect(() => {
    // const loader = new Loader({
    //   apiKey: API_KEY,
    //   version: 'weekly',
    // })
    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //       lat: productDetail.treeDetail.location.coordinates[0],
    //       lng: productDetail.treeDetail.location.coordinates[0],
    //     },
    //     zoom: 8,
    //   })
    // })
  }, [])
  return (
    <Layout>
      <Row className='mt-3'>
        <Col md={6}>
          <img
            src='https://bilder.t-online.de/b/91/04/74/62/id_91047462/343h/c_raw/tid_da/baum-des-jahres-2022-rotbuche-fagus-sylvatica-.jpg'
            alt={productDetail.pictures.title}
            className='w-100'
          />
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <h1>{productDetail.title}</h1>
          <h5 className='text-uppercase font-weight-bold'>
            {productDetail.treeDetail.species.german}{' '}
            <small className='text-muted'>
              {productDetail.treeDetail.species.latin}
            </small>
          </h5>
          <div className='my-4'>
            <b className='d-block'>
              {productDetail.price.priceValue} EUR{' '}
              {productDetail.price.priceType}
            </b>
            <small>zzgl. 19% gesetzl. MwSt.</small>
          </div>
          <p>{productDetail.description}</p>
          <div className='d-flex align-items-center'>
            <Button variant='dark' size='lg' className='w-100'>
              Jetzt kontaktieren
            </Button>
            <i className='far fa-heart ps-3 pointer'></i>
          </div>

          <div className='my-3'>
            <b className='text-uppercase'>Allgemein</b>
            <ul>
              <li>
                Bereits gefällt:{' '}
                {productDetail.treeDetail.fellingState.felled ? 'Ja' : 'Nein'}
              </li>

              {productDetail.treeDetail.fellingState.felled ? (
                <li>
                  Fälldatum: {productDetail.treeDetail.fellingState.fellingDate}
                </li>
              ) : (
                ''
              )}
            </ul>

            <b className='text-uppercase'>Abmessungen</b>
            <ul>
              <li>Höhe: {productDetail.treeDetail.dimensions.height} Meter</li>
              <li>
                Umfang: {productDetail.treeDetail.dimensions.circumference}{' '}
                Meter
              </li>
            </ul>

            <b className='text-uppercase'>Details</b>
            <ul>
              <li>
                Fällzeitraum vorhanden:{' '}
                {productDetail.treeDetail.timeWindow.restricted ? 'Ja' : 'Nein'}
              </li>
              {productDetail.treeDetail.timeWindow.restricted ? (
                <li>{`${productDetail.treeDetail.timeWindow.from} - ${productDetail.treeDetail.timeWindow.till}`}</li>
              ) : (
                ''
              )}
            </ul>
          </div>

          <div
            id='map'
            className='w-100 mt-3'
            style={{ height: '300px' }}
          ></div>
        </Col>
      </Row>
    </Layout>
  )
}

export default productDetail

export async function getServerSideProps(context) {
  const productId = context.params._id

  let productDetail = await axios.get(
    `http://localhost:4000/offer/${productId}`
  )

  productDetail = JSON.stringify(productDetail.data)

  return { props: { productDetail, API_KEY: process.env.GOOGLE_API_KEY } }
}
