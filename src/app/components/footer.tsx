import React from 'react'

function Footer() {
  return (
    <main className='flex flex-col md:flex-row justify-between pt-8 md:space-y-0'>
      <div >
        <h1 className='font-bold text-2xl'>Furniro.</h1>
        <p className='pt-12'>400 university Drive suite 200 coral</p>
        <p>Globes</p>
        <p>Ft 33134 USA</p>
      </div>
      <div>
        <h1 className='text-gray-500 '>Links</h1>
        <ul className='pt-4 font-bold'>
            <li className='pt-4'>Home</li>
            <li className='pt-4'>Shop</li>
            <li className='pt-4'>About</li>
        </ul>
      </div>
      <div>
        <h1 className='text-gray-500 '>Help</h1>
        <ul className='font-bold pt-4'>
            <li className=' pt-4'>Payment options</li>
            <li className=' pt-4'>Return</li>
            <li className=' pt-4'>Privacy policy</li>
        </ul>
      </div>
      <div>
        <h1>Newseletter</h1>
        <p className='pt-4'><u> Enter Your Address</u></p>
      </div>
      <div>
        <h1 className='pr-4 font-bold'><u>SUBSCRIBE</u></h1>
      </div>
    </main>
  )
}

export default Footer
