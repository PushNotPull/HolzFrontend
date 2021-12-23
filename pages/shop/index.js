import React from 'react'
import Filter from '../../components/Filter'
import ItemList from '../../components/ItemList'
import Layout from '../../components/Layout'
import axios from 'axios'

const Shop = ({ productList }) => {
  return (
    <Layout>
      <Filter />
      <ItemList productList={JSON.parse(productList)} />
    </Layout>
  )
}

export default Shop

export async function getServerSideProps(context) {
  // const productId = context._id

  let productList = await axios.get(`http://localhost:4000/offer`)

  productList = JSON.stringify(productList.data)

  return { props: { productList } }
}
