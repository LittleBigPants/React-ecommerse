import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import { ShoppingCartContext } from '../../Context/Context'
import { useContext } from 'react'


function Home() {

  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :</div>
      )
    }
  }


  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className=' text-2xl'>My Home</h1>
      </div>
        <input 
        type="text" placeholder='Search'
        className=' rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)}/>
    <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
    {renderView()}
    </div>
     <ProductDetail/>

      </Layout>
  )
}

export  {Home}