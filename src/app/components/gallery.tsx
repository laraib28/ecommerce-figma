import React from 'react';
import Image from 'next/image';

function Gallery() {
  return (
    <main className='max-w-[1320px] mx-auto p-4 '>
      <h2 className="text-center text-3xl font-bold mb-6">Share your setup with #FuniroFurniture</h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {/* First row with larger image */}
        <div className='relative h-80 col-span-2 md:col-span-1 lg:col-span-2'>
          <Image src="/gp1.jpeg" alt="Image 1" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp2.jpeg" alt="Image 2" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp3.jpeg" alt="Image 3" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80 col-span-2 md:col-span-1 lg:col-span-2'>
          <Image src="/gp4.jpeg" alt="Image 4" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp5.jpeg" alt="Image 5" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp6.jpeg" alt="Image 6" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80 col-span-2 md:col-span-1 lg:col-span-2'>
          <Image src="/gp7.jpeg" alt="Image 7" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp8.jpeg" alt="Image 8" fill className="object-cover rounded-lg" />
        </div>
        <div className='relative h-80'>
          <Image src="/gp9.jpeg" alt="Image 9" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </main>
  );
}

export default Gallery;
