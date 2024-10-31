import React from 'react'
import Image from 'next/image'

function Product2() {
  return (
    <main className="flex justify-between bg-red-100 h-96 text-gray-800 p-4 space-y-4 md:space-y-0">
      <div className='flex flex-col  font-bold text-4xl ml-2  '>
        <h1>50+ Beautiful rooms </h1>
        <h1>inspiration</h1>
      {/* </div> */}
      {/* <div className=' pt-52 '> */}
        <p className='text-base font-normal text-gray-600 mt-4 mr-36 '>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
      
      <div className=' bg-orange-500 text-white  w-72 text-2xl px-5 pt-1 pb-2 pl-14 mt-4  '>
        <button className=''>Explore More</button>
      </div>
      </div>
      <div className='flex justify-center items-center space-x-4'>
        <Image src="/product-2 p1.avif" alt="Product" height={600} width={450}/>
      {/* </div>
      <div className='flex justify-end'> */}
        <Image src="/product-2 p2.avif" alt='Product'height={100} width={400} />
      </div>
    </main>
  )
}

export default Product2