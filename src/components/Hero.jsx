import React from 'react'
import heroImage from '../images/hero_image.webp'

const Hero = () => {
  return (
    <div className='p-24 px-4 md:px-24 flex gap-3 flex-col md:flex-row'>
      <div className='md:order-last mx-auto'>
        <img className=' w-[486px]' src={heroImage} alt="hero-image" />
      </div>
      <div className='mx-auto flex flex-col gap-4 justify-center items-center'>
        <div>
          <h1 className='font-bold text-2xl'>Uji Diri, Asah Kemampuanmu!</h1>
        </div>
        <div className='text-center'>
          <p className='text-xl w-96'>Temukan simulasi ujian berkualitas dan kumpulan soal terlengkap untuk persiapan ujianmu. Ayo, tingkatkan kepercayaan diri dan wujudkan impianmu!</p>
        </div>
        <div>
          <button className='p-2 px-10 rounded-md bg-green-600 font-bold text-white'>Cari Ujian</button>
        </div>
        <div>
          <p className='text-gray-500'>Gabung dengan 2500+ pendaftar lainnya</p>
        </div>
      </div>
    </div>
  )
}

export default Hero