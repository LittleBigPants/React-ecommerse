import React from 'react'
import Layout from '../../Components/Layout/Layout'
import OrderList from '../../Components/OrderList/OrderList'
import { useContext } from 'react';
import {ShoppingCartContext} from '../../Context/Context'
import { Link } from 'react-router-dom';


function MyOrders() {

  const context = useContext(ShoppingCartContext);

  
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className=' text-xl'>My Orders</h1>
      </div>
      
      {
        context.order.map((order, index) =>  (
          <Link key={index} to={`/my-orders/${index}`} >
            <OrderList 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
          </Link>
        ))
      }
      </Layout>
  )
}

export  {MyOrders}