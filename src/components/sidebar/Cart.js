import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'




function Cart() {
  const products = useSelector(state => state.products)
 
  return (
    <>

    {
      products.map(product=>product.soldQuantity>0 ? <CartItem key={product.id} product={product} /> :' ' )
    }
    


    </>
  )
}

export default Cart