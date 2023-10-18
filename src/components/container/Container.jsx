import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductsProvider';

const Container = () => {

const {products, loading}= useContext(ProductContext);



  return (
    
    <h1 className='text-danger'>Container</h1>
  )
}

export default Container
