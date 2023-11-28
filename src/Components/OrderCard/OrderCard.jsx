import { RxCrossCircled } from "react-icons/rx";
import React from 'react'

const OrderCard = props => {
    const {quantity, id, handleDelete, title, imageUrl, price} = props
    let renderCrossIcon
    if (handleDelete) {
        renderCrossIcon =  <RxCrossCircled onClick={() => handleDelete(id)}/>

    }
    return (
    <div className='flex justify-between items-center mb-2'>
        <div className="flex items-center gap-2">
            <figure className=" w-20 h-20">
                <img className=" w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className=" text-sm font-light">{title}</p>
        </div>
        <div>
            <p>{quantity}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className=" text-lg font-medium">{price}</p>
            {renderCrossIcon}
        </div>
    </div>
  )
}

export default OrderCard