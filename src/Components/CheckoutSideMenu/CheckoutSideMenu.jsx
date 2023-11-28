import React from 'react'
import { Link } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../Utils/Utils';
import Card from '../Card/Card';
import './CheckoutSideMenu.css'




function CheckoutSideMenu() {

  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      product: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }



  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex flex-col fixed right-0 border border-black rounded-lg bg-white h-3/5 px-2`}>
        <div className=' flex justify-between items-center p-6'>
            <h2 className=' font-medium text-xl'>My Order</h2>
            <div className=' text-2xl cursor-pointer' 
            onClick={() => context.closeCheckoutSideMenu()}><RxCrossCircled/></div>
        </div>

        <div className=' px-6 flex-1'>
        {
         context.cartProducts.map(product => (//this parenthesis is equal to return
          <OrderCard
            key= {product.id}
            id= {product.id}
            title = {product.title}
            imageUrl = {product.images}
            price = {product.price}
            handleDelete = {handleDelete}
            quantity = {product.quantity}
          />
         ))
        }
        </div>
        <div className=' px-6'>
          <p className='flex justify-between items-center'>
            <span className=' font-light'>Total</span>
            <span className=' font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='/my-orders/last'>
        <button className=' mt-3 w-full bg-slate-950 py-3 text-white rounded-lg' onClick={() => handleCheckout ()}>checkout</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu