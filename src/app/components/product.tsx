import React from 'react'
import Image from 'next/image'


function Product() {
  return ( 
    <main className="text-gray-900 bg-white ">
         <div className='flex justify-center font-bold text-4xl'>
            <h1>
                Our Products
            </h1>
        </div>
        <div className='max-w-[1320] mx-auto grid   md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 '>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp1.jpeg " alt='pic 1' height={400} width={700}  />
                <div className='font-bold'>
                    <h1>Sytherine</h1>
                    </div>
                    <div> 
                        <p>stylish</p>
                    </div>
                    <div className='font-bold'></div>
                        <h1>Rp2500.000</h1>
                    
                </div>
          

            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp2.jpeg " alt='pic 2' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Leviosa</h1>
                    <div>
                        <p>Stylish Chair</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Rp2500.000</h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp3.jpeg " alt='pic 3' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Lolito</h1>
                    <div>
                        <p>Stylish Bed</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Rp7000.00</h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
             <Image src="/fp4.jpeg " alt='pic 4' height={400} width={400}/>
             <div>
                <h1 className='font-bold'>Respira</h1>
                <div>
                    <p>Beatiful sitting</p>
                </div>
                <div>
                    <h1 className='font-bold'>Rp5000.000</h1>
                </div>
             </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp5.jpeg " alt='pic 5' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Grifo</h1>
                    <div>
                        <p>Stylish living</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Rp7000.00</h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp6.jpeg " alt='pic 6' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Muggo</h1>
                    <div>
                        <p>Stylish set</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>10000.00</h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp7.jpeg " alt='pic 7' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Pingky</h1>
                    <div>
                        <p>Stylish Living</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Rp6000.00</h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[400px] hover:scale-125 duration-1000 md:hover:scale-105 md:duration-500">
                <Image src="/fp8.jpeg " alt='pic 8' height={400} width={400}/>
                <div>
                    <h1 className='font-bold'>Protty</h1>
                    <div>
                        <p>Stylish Bed</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>6000.00</h1>
                    </div>
                    <div className="flex justify-centermt-10 md:col-span-2  w-44 pt-8   text-orange-900" >
                        <button className=' bg-transparent border border-orange-400 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-100 transition-all duration-300 '>Show More</button>
                    </div>
                </div>
            </div>
            </div>
            </main>
  )
}

export default Product
