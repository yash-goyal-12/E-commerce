import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start py-2 shadow-md justify-center items-center'>
      <div className="logo mx-5">
      <Link href={'/'}>
      <Image src= "/logo.webp" alt="" width = {200} height = {40} />
      </Link>
       </div>
        <div className="nav">
          <ul className='flex items-center space-x-6 font-bold md:text-md'>
           <Link href = {'/tshirts'}><a><li>Tshirts</li></a></Link>
            <Link href = {'/hoodies'}><a><li>Hoodies</li></a></Link>
            <Link href = {'/stickers'}><a><li>Stickers</li></a></Link>
            <Link href = {'/mugs'}><a><li>Mugs</li></a></Link>
          </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
      <AiOutlineShoppingCart className='text-xl md:text-2xl'/>
      </div>
    </div>
  )
}

export default Navbar