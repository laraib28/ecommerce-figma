"use client"
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler= () => {
      setIsOpen (!isOpen)
      // alert ("button clicked")
      
      }
      
   
    return( 
    <header className="  text-gray-900 bg-white ">
      <button title='button' onClick={onClickHandler}> <FaBars size={20} className='md:hidden ml-3'/>  </button>
        <div className='container mx-auto flex justify-between items-center'>
          <div className="flex items-center mb-2 "> 
            <Image src="/logo.jpg" alt="Logo" width={35} height={40} />
            </div>
        <nav className=" md:flex-row flex-col hidden md:block lg:block">
            <ul className='flex justify-center gap-x-24 items-center w-full '>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/">Home</Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/about">About</Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/shop">Shop</Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        {isOpen && ( 
        <nav className=" lg:block md:hidden ">
            <ul className='flex flex-col justify-center gap-8 '>
            <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/" onClick={onClickHandler}></Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/about"onClick={onClickHandler}>About</Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/shop"onClick={onClickHandler}>Shop</Link></li>
                <li className="hover:cursor-pointer hover:bg-slate-400">
                <Link href="/contact"onClick={onClickHandler}>Contact</Link></li>
            </ul>
        </nav>
        )
}
        <div className="flex justify-center space-x-3 items-center   ">
          <Image src="/signup-icon.webp" alt="signup!" height={25} width={20} />
          <Image src="/heart.png" alt="Like" height={25} width={35} />
          <Image src="/search.jpg" alt="search" height={25} width={25}/>
          <Image src="/cart.webp" alt="cart" height={25} width={25}/> 
        </div>
        </div>
    </header>
  )

}