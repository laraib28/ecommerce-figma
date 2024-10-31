import React from 'react'
import Image from 'next/image'

function Category() {
  return (
    <main className='bg-white text-gray-900'>
        <div className='flex justify-center font-bold text-4xl mt-10'>
            <h1>Browse The Range </h1>
        </div>
        <div className='flex justify-center '>
            <p>you can choose your desired style.</p>
        </div>
        <div className=' max-w-{1320px} mx -auto grid lg:grid-col-3  gap-8 md:grid-cols-1  md:flex  sm:flex justify-center hover:'>
            <div className='hover:scale-110 overflow-hidden duration-1000'>
                <Image src="/dining.webp" alt='dining' width={310} height={140} className=" object-cover rounded-lg"/>
                <div className='pr-52 pl-32 text-center '>
                <h1 >Dining</h1>  
                </div>
            </div>
            <div className='pr-16 hover:scale-110 overflow-hidden duration-1000'>
                <Image src="/living.webp" alt='living' width={300} height={140} className=" object-cover rounded-lg"/> 
                <h1 className=' text-center '>Living</h1>
            </div>
            <div className='hover:scale-110 overflow-hidden duration-1000'>
                <Image src="/bedroom.webp" alt='bedroom' width={290} height={140} className="  object-cover rounded-lg"/>
                <h1 className='  text-center '>Bedroom</h1>
            </div>

        </div>
       
        {/* </div> */}

  
    </main>
  )
}

export default Category