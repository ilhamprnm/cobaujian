import React from 'react'
import cartIcon from "../../icons/cart.png"
import { Link } from 'react-router-dom';


const Navbar = () => {

  function handleCart() {
    const cartLayer = document.getElementById('cart-layer');
    
    cartLayer.style.transform = 'translateX(0)';
  }

  function handleClose() {
    const cartLayer = document.getElementById('cart-layer');

    cartLayer.style.transform = 'translateX(1000px)'
  }

  return (
    <div className='w-full shadow-lg flex justify-between p-4 md:px-24 fixed gap-2 bg-white duration-500 z-[10000]'>
      <div className='flex items-center' >
        <p className='font-semibold'>Ujianlah.com</p>
      </div>
      <div className='hidden md:block '>
        <ul className=' flex h-full items-center gap-2 lg:gap-9 font-semibold '>
          <li className='cursor-pointer hover:underline'><a href="#hero-section">Home</a></li>
          <li className='cursor-pointer hover:underline'><a href="#testimoni-section">Testimoni</a></li>
          <li className='hover:underline cursor-pointer'><a href="#faq-section">FAQ</a></li>
          <li className='hover:underline cursor-pointer'><a href="#demo-section">Coba Sekarang</a></li>
        </ul>
      </div>
      <div className='flex justify-between gap-3'>
        <div className='py-2 px-3 rounded-lg border border-green-700 flex items-center w-11 relative cursor-pointer' onClick={handleCart}>
          <img src={cartIcon} className='h-5' alt="cart-icon" />
          <div className='absolute bg-red-600 p-2 rounded-full text-white font-semibold -top-1 -right-2'>
            <p className='h-2 w-2 text-[11px] flex items-center justify-center'>3</p>
          </div>
          
        </div>
        <div className='flex'>
          <p className='py-2 px-3 border border-green-700 rounded-lg font-semibold text-green-700 cursor-pointer'><Link to={localStorage.getItem('auth-token')?'/platform':'/login'}>{localStorage.getItem('auth-token')?'Dashboard':'Login'}</Link></p>
        </div>
      </div>
      <div className='absolute bg-white top-0 right-0 h-[100vh] border max-w-[900px] py-10 px-3 md:px-10 w-full translate-x-[1000px] duration-700' id='cart-layer'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex gap-4 items-center'>
            <div className='flex-1'>
              <h1 className='font-bold text-2xl'>Keranjang Belanja (4 Ujian)</h1>
            </div>
            <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-md p-5 cursor-pointer' onClick={handleClose}>
              <p className='font-bold text-2xl'>X</p>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col md:flex-row border p-2 rounded-md'>
              <div className='flex-1'>
                <p className='font-semibold'>Tryout seleksi LPDP 2024</p>
                <p>Tryout prediksi seleksi LPDP 2024</p>
              </div>
              <div className='flex-1 flex justify-between items-center'>
                <div className='flex gap-4'>
                  <s className='text-gray-300'>Rp. 50.000</s>
                  <p className='font-semibold'>Rp. 35.000</p>
                </div>
                <div>
                  <p className='font-semibold hover:underline cursor-pointer'>Delete</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row border p-2 rounded-md'>
              <div className='flex-1'>
                <p className='font-semibold'>Tryout seleksi LPDP 2024</p>
                <p>Tryout prediksi seleksi LPDP 2024</p>
              </div>
              <div className='flex-1 flex justify-between items-center'>
                <div className='flex gap-4'>
                  <s className='text-gray-300'>Rp. 50.000</s>
                  <p className='font-semibold'>Rp. 35.000</p>
                </div>
                <div>
                  <p className='font-semibold hover:underline cursor-pointer'>Delete</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row border p-2 rounded-md'>
              <div className='flex-1'>
                <p className='font-semibold'>Tryout seleksi LPDP 2024</p>
                <p>Tryout prediksi seleksi LPDP 2024</p>
              </div>
              <div className='flex-1 flex justify-between items-center'>
                <div className='flex gap-4'>
                  <s className='text-gray-300'>Rp. 50.000</s>
                  <p className='font-semibold'>Rp. 35.000</p>
                </div>
                <div>
                  <p className='font-semibold hover:underline cursor-pointer'>Delete</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row border p-2 rounded-md'>
              <div className='flex-1'>
                <p className='font-semibold'>Tryout seleksi LPDP 2024</p>
                <p>Tryout prediksi seleksi LPDP 2024</p>
              </div>
              <div className='flex-1 flex justify-between items-center'>
                <div className='flex gap-4'>
                  <s className='text-gray-300'>Rp. 50.000</s>
                  <p className='font-semibold'>Rp. 35.000</p>
                </div>
                <div>
                  <p className='font-semibold hover:underline cursor-pointer'>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar