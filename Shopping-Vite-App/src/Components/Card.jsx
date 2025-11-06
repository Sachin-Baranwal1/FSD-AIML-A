import React from 'react'

const Card = ({title,imgurl, price}) => {
  return (
    <div  className='bg-cyan-900 rounded-2xl text-amber-50 w-full p-3 '>
       <img src={imgurl}   className='object- w-full h-32 '/>
       <h2 className='ml-3'>Tittle: {title}</h2>
       <h3 className='ml-3 pb-1'>Price: {price}</h3>
       <button className='bg-amber-600 p-2 ml-5 rounded-2xl' >Add To cart</button>
    </div>
  )
}

export default Card
