import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import {AiOutlineShoppingCart , AiFillCloseCircle , AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'

const Navbar = ({cart , addToCart , removeFromCart , clearCart , subTotal}) => {
  const toggleCart = () =>{
    if(ref.current.classList.contains('translate-x-full')) {
   ref.current.classList.remove('translate-x-full')
   ref.current.classList.add('translate-x-0')
    }  else if(!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
       }
  }
  const ref = useRef()
  return (
    
    <div className='flex flex-col md:flex-row md:justify-start py-2 shadow-md justify-center items-center sticky top-0 z-10 bg-white'>
      <div className="logo mx-5">
      <Link href={'/'}>
      <a>
      <Image src= "/logo.webp" alt="" width = {200} height = {40} />
      </a>
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
      <div  className="cursor-pointer cart absolute right-0 top-4 mx-5 flex">
      <Link href={'/login'}>
      <MdAccountCircle className='text-xl md:text-2xl mx-2'/></Link>
      <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl'/>
      </div>

    <div ref={ref} className= {`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10  transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full' }`}>
      <h2 className='font-bold text-xl text-center'> Shopping Cart</h2>
      <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500">
      <AiFillCloseCircle/></span>
      <ol className='list-decimal font-semibold'>
      {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your cart is Empty!</div> }

      {Object.keys(cart).map((k) =>{return <li key ={k}>
          <div className='item flex my-5'>
            <div className='w-2/3 font-semibold'>{cart[k].name}</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
              <AiFillMinusCircle onClick={() => {removeFromCart(k , 1 , cart[k].price , cart[k].name ,cart[k].size , cart[k].variant)}} className='cursor-pointer text-pink-500'/> <span className='mx-2 text-sm'>{cart[k].qty}</span>
              <AiFillPlusCircle onClick={() => {addToCart(k , 1 , cart[k].price , cart[k].name ,cart[k].size , cart[k].variant)}} className='cursor-pointer text-pink-500'/> 
            </div>
          </div>
        </li>}) }
      </ol>
      <div className='total font-bold my-2'>SubTotal : ₹{subTotal}</div>
      <div className='flex'>
      <Link href={'/checkout'}>
      <button className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focusoutline-none hoverbg-pink-600 rounded text-sm'> <BsFillBagCheckFill className='m-1'/>Checkout</button></Link>
        <button onClick={clearCart} className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focusoutline-none hoverbg-pink-600 rounded text-sm'>Clear Cart</button>
      </div>
    </div>   
    </div>
  )
}

export default Navbar