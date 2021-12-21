import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const productDetail = () => {
  const router = useRouter()
  const productId = router.query._id
  return (
    <Layout>
      <h2>Detail view</h2>
    </Layout>
  )
}

export default productDetail
