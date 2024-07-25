import React, {useState} from 'react';
import dashboardImage from '../../icons/dashboard.png';
import testImage from '../../icons/test.png';
import paymentImage from '../../icons/payment.png';
import cartImage from '../../icons/cart.png'
import Contacts from '../../components/Home/Contacts.jsx';
import photoProfile from '../../images/profile.jpg'
import arrowDown from '../../icons/arrow-down.png'
import menuIcon from '../../icons/menu.svg'
import clockIcon from '../../icons/clock.png'
import documentIcon from '../../icons/document.png'

const Dashboard = () => {
  const [opened, setOpened] = useState(false);

  function handleCart() {
    const cartLayer = document.getElementById('cart-layer');
    
    cartLayer.style.transform = 'translateX(0)';
  }

  function handleClose() {
    const cartLayer = document.getElementById('cart-layer');

    cartLayer.style.transform = 'translateX(1000px)'
  }

  function handleMenu() {
    const menuLayer = document.getElementById('menu-layer');

    menuLayer.style.transform = 'translateX(0)';
  }

  function handleCloseMenu() {
    const menuLayer = document.getElementById('menu-layer');

    menuLayer.style.transform = 'translateX(1000px)';
  }

  function handlePaket(number) {
    const itemCont = document.getElementById(`item-container-${number}`);
    const paketCont = document.getElementById(`paket-container-${number}`);
    const paketClicker = document.getElementById(`paket-clicker-${number}`);
    
    if (opened) {
      itemCont.style.maxHeight = '0px';
      paketCont.style.backgroundColor = 'white';
      paketClicker.style.backgroundColor = '#e6f4d0';
      setOpened(false)
    } else {
      itemCont.style.maxHeight = '1000px';
      paketCont.style.backgroundColor = '#e6f4d0';
      paketClicker.style.backgroundColor = 'white';
      setOpened(true)
    }
  }

  return (
    <div className='flex'>
      <div className='border max-w-64 w-full fixed top-0 bottom-0 left-0 px-2 shadow-xl bg-white hidden min-[625px]:block z-10'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className='flex justify-center py-4 border-b-[1px]'>
              <h1 className='font-bold'>CobaUjian</h1>
            </div>
            <div>
              <a className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3' href='/platform'>
                <img className='h-6' src={dashboardImage} alt="dashboard-icon" />
                <h2 className='font-semibold'>Dashboard</h2>
              </a>
              <a className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3' href='/platform/ujiansaya'> 
                <img className='h-6' src={testImage} alt="test-icon" />
                <h2 className='font-semibold'>Ujian Saya</h2>
              </a>
              <a className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 bg-green-500/30 cursor-pointer flex gap-3' href='/platform/ujiansaya'>
                <img className='h-6' src={paymentImage} alt="payment-icon" />
                <h2 className='font-semibold'>Pembayaran</h2>
              </a>
              <div className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3' onClick={handleCart}>
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
      <div className=' w-full min-[625px]:p-11 p-4 relative h-full'>
        <div className='min-[625px]:ml-64'>
          <div className='flex justify-between'>
            <div>
              <h2 className='font-bold text-xl'>Pembayaran</h2>
              <p className='pb-4'>Riwayat pembayaran saya</p>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center gap-3'>
                <div>
                  <a className='p-2 px-4 font-semibold text-white bg-green-600/80 rounded-md' href="">Refresh</a>
                </div>
                <div className='bg-gray-300 rounded-md p-3 min-[625px]:hidden cursor-pointer' onClick={handleMenu}>
                  <img className='h-5' src={menuIcon} alt="menu" />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-2 py-4 border-t-[1px] flex flex-col gap-3'>
            <div>
              <h2 className='font-bold text-xl'>Selesai</h2>
            </div>

            <div className='flex gap-4 flex-wrap'>
              <div className=' shadow-roundBlack rounded-md p-3 max-w-[300px]'>
                <div className='flex justify-center pb-3 font-bold'>
                  <h2>Detail Pembelian</h2>
                </div>
                <div className=' border-y-[1px] py-3'>
                  <p className='font-medium'>Prediksi TKD & AKHLAK BUMN</p>
                  <p className='font-medium'>Paket #1</p>
                  <p>Rp 45.000</p>
                </div>
                <div className='pt-3 flex justify-center font-bold'>
                  <p>Total: Rp 45.000</p>
                </div>
              </div>

              <div className=' shadow-roundBlack rounded-md p-3 max-w-[300px]'>
              <div className='flex justify-center pb-3 font-bold'>
                <h2>Detail Pembelian</h2>
              </div>
              <div className=' border-y-[1px] py-3'>
                <p className='font-medium'>Prediksi TKD & AKHLAK BUMN</p>
                <p className='font-medium'>Paket #2</p>
                <p>Rp 45.000</p>
              </div>
              <div className='pt-3 flex justify-center font-bold'>
                <p>Total: Rp 45.000</p>
              </div>
            </div>
            </div>

            
          </div>

          
        </div>

        <div className='fixed bg-white top-0 right-0 bottom-0 border max-w-[900px] py-10 px-3 md:px-10 w-full translate-x-[1000px] duration-700 z-[10000]' id='cart-layer'>
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

        
        <div className='fixed bg-white top-0 right-0 bottom-0 border max-w-[450px] p-2 w-full translate-x-[1000px] duration-700 z-[1000]' id='menu-layer'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <div className='flex justify-between p-4 border-b-[1px]'>
                <h1 className='font-bold'>Menu</h1>
                <h1 className='font-bold bg-gray-200 px-2 rounded-md cursor-pointer' onClick={handleCloseMenu}>X</h1>
              </div>
              <div>
                <a className='p-2 px-4 mt-3 rounded-md  hover:bg-slate-200 cursor-pointer flex gap-3' href='/platform'>
                  <img className='h-6' src={dashboardImage} alt="dashboard-icon" />
                  <h2 className='font-semibold'>Dashboard</h2>
                </a>
                <a className='p-2 px-4 mt-3 rounded-md  hover:bg-slate-200 cursor-pointer flex gap-3' href='/platform/ujiansaya'> 
                  <img className='h-6' src={testImage} alt="test-icon" />
                  <h2 className='font-semibold'>Ujian Saya</h2>
                </a>
                <a className='p-2 px-4 mt-3 rounded-md bg-green-500/30 hover:bg-slate-200 cursor-pointer flex gap-3' href='/platform/pembayaran'>
                  <img className='h-6' src={paymentImage} alt="payment-icon" />
                  <h2 className='font-semibold'>Pembayaran</h2>
                </a>
                <div className='p-2 px-4 mt-3 rounded-md hover:bg-slate-200 cursor-pointer flex gap-3' onClick={handleCart}>
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
      </div>
      <Contacts />

      
    </div>
  )
}

export default Dashboard