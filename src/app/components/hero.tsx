import Link from "next/link";
import Image from "next/image";
import React from 'react'


function Hero() {
  return (
    <main className="bg-cover bg-center h-screen " style={{backgroundImage: "url('/background.webp')"}}>
     <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg w-full max-w-md ml-96 "
        style={{ backgroundColor: 'rgba(246, 216, 198, 1)' }} // Use inline style for RGBA color
      >
        <p className="text-sm text-gray-600 uppercase tracking-wide">New Arrival</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Discover Our New Collection</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          Buy Now
        </button>
      </div>
         
    </main>
  )
}

export default Hero
