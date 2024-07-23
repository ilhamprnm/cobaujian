import React from 'react';
import dashboardImage from '../../icons/dashboard.png';
import testImage from '../../icons/test.png';
import paymentImage from '../../icons/payment.png';
import cartImage from '../../icons/cart.png'
import Paket1 from '../../components/platform/paket/Paket1.jsx'
import Paket2 from '../../components/platform/paket/Paket2.jsx'
import Paket3 from '../../components/platform/paket/Paket3.jsx';
import Contacts from '../../components/Home/Contacts.jsx';
import photoProfile from '../../images/profile.jpg'

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='border max-w-64 w-full fixed top-0 bottom-0 left-0 px-2 shadow-xl bg-white hidden min-[625px]:block'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className='flex justify-center py-4 border-b-[1px]'>
              <h1 className='font-bold'>CobaUjian</h1>
            </div>
            <div>
              <div className='p-2 px-4 mt-3 rounded-md bg-green-500/30 hover:bg-slate-200 cursor-pointer flex gap-3'>
                <img className='h-6' src={dashboardImage} alt="dashboard-icon" />
                <h2 className='font-semibold'>Dashboard</h2>
              </div>
              <div className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3'>
                <img className='h-6' src={testImage} alt="test-icon" />
                <h2 className='font-semibold'>Ujian Saya</h2>
              </div>
              <div className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3'>
                <img className='h-6' src={paymentImage} alt="payment-icon" />
                <h2 className='font-semibold'>Pembayaran</h2>
              </div>
              <div className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3'>
                <img className='h-6' src={cartImage} alt="cart-icon" />
                <h2 className='font-semibold'>Keranjang</h2>
              </div>
            </div>
          </div>
          <div className='py-2'>
            <div className='border flex rounded-md mb-2'>
              <div className='flex items-center p-2'>
                <img className='h-8 rounded-full' src={photoProfile} alt="photo-profile" />
              </div>
              <div className='leading-4 flex flex-col justify-center'>
                <p className='font-bold text-sm'>Rafi Dwizulfa</p>
                <p className='text-[12px] text-gray-600'>rafidwi3001@gmail.com</p>
              </div>
            </div>
            <div className='text-center text-gray-600 text-[12px]'>
              &#9400; 2023 cobaujian.com
            </div>
          </div>
        </div>
        
      </div>
      <div className='bg-gray-100 w-full min-[625px]:p-11 p-4
      '>
        <div className='min-[625px]:ml-64'>
          <div >
            <h2 className='font-bold text-xl'>Produk Ujian</h2>
            <p className='pb-4 border-b-[1px]'>Paket Ujian yang bisa kamu ambil</p>
          </div>
          <div className=''>
            <Paket1 />
            <Paket2 />
            <Paket3 />
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  )
}

export default Dashboard