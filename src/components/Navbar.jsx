import React from 'react'
import cartIcon from "../icons/cart.png"


const Navbar = () => {
  return (
    <div className='w-full shadow-lg flex justify-between p-4 md:px-24 fixed bg-white duration-500'>
      <div className='flex items-center' >
        <p className='font-semibold'>CobaUjian.com</p>
      </div>
      <div className='hidden md:block '>
        <ul className=' flex h-full items-center gap-9 font-semibold '>
          <li className='cursor-pointer hover:underline'>Home</li>
          <li className='cursor-pointer hover:underline'>Testimoni</li>
          <li className='hover:underline cursor-pointer'>FAQ</li>
          <li className='hover:underline cursor-pointer'>Coba Sekarang</li>
        </ul>
      </div>
      <div className='flex justify-between gap-3 ml-5'>
        <div className='py-2 px-3 rounded-lg border border-green-700 flex items-center w-11'>
          <img src={cartIcon} className='h-5' alt="" />
        </div>
        <div className='py-2 px-3 border border-green-700 rounded-lg font-semibold text-green-700'>
          Dashboard
        </div>
      </div>
    </div>
  )
}

export default Navbar