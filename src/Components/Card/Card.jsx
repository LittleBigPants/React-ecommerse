import React from 'react'
import { ShoppingCartContext } from '../../Context/Context';
import { useContext } from 'react';
import { BiPlus } from "react-icons/bi";
import './Card.css'



function Card({data}) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (ProductDetail) => {
    context.openProductDetail()
    context.setProductToShow(ProductDetail)
  }
  // {producData} is the info of a card
  const getNewCartProduct = (productData) =>{
    
  
    const foundProduct = context.cartProducts.find((product) => product.id == productData.id)
    
    if (foundProduct) {
      foundProduct.quantity++
    } else {
      context.setCartProducts([...context.cartProducts, {... productData, quantity : 1 }]);
      return {... productData, quantity : 1 }
    }
    

  }
  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    getNewCartProduct(productData)
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    // console.log(context.cartProducts)
  }
  
  return (
    <div 
    className=' bg-white cursor-pointer w-56 h-60 rounded-lg'
    onClick={() => showProduct(data)}>
        <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs mb-1 ml-1 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title}/>
                <button className=' absolute top-0 right-0 flex justify-center items-center w-8 h-8 rounded-full m-2 p-0.5 text-8xl bg-white' onClick={ (e) => 
                  {e.stopPropagation(); 
                  addProductsToCart (data);
                  }}><BiPlus/></button>
        </figure>
        <p className=' flex justify-between'>
            <span className='text-sm font-light'>{data.title}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export default Card