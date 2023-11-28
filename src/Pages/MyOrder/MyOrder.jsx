import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';
import OrderCard from '../../Components/OrderCard/OrderCard';
import React from 'react'
import Layout from '../../Components/Layout/Layout';
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function MyOrder() {

  const context = useContext(ShoppingCartContext);

  const currentPath   = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(index === 'last') index = context.order?.length - 1
  
  return (
    <Layout>
            <div className='flex items-center justify-center relative w-80'>
        <Link to='/my-orders' className=' absolute left-0'>
          <FaAnglesLeft className=' h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1 className=' text-xl'>My Order</h1>
      </div>
      <div className=' px-6 flex-1'>
        {
           context.order?.[index]?.product.map(product => (//this parenthesis is equal to return
          <OrderCard
            key= {product.id}
            id= {product.id}
            title = {product.title}
            imageUrl = {product.images}
            price = {product.price}
            quantity = {product.quantity}
          />
         ))
        }
        </div>
      </Layout>
  )
}

export {MyOrder}