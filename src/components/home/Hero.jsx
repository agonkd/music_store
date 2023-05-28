import { GoPrimitiveDot } from 'react-icons/go'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function Hero() {
  return (
    <header className='sm:p-10 p-8 mb-16 space-y-4'>
      <section id='product-carousel' className='h-[70vh] flex'>
        <div className='w-full h-full bg-[url(../../assets/images/slider-banners/banner1.png)] bg-center bg-cover rounded-lg'></div>
      </section>
      <div className='flex justify-between items-center'>
        <ul className='flex items-center gap-1 text-xs text-gray-400'>
          <li className='text-xl text-black'><GoPrimitiveDot /></li>
          <li><GoPrimitiveDot /></li>
          <li><GoPrimitiveDot /></li>
        </ul>
        <div className='space-x-4 text-3xl'>
          <button><BsArrowLeft /></button>
          <button><BsArrowRight /></button>
        </div>
      </div>
    </header>
  )
}

export default Hero