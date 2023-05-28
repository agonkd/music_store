import { BsArrowRight } from 'react-icons/bs';
import BW from '../../assets/images/partners/bw.png';
import Denon from '../../assets/images/partners/denon.png';
import Jbl from '../../assets/images/partners/jbl.png';
import Klipsch from '../../assets/images/partners/klipsch.png';
import Marshall from '../../assets/images/partners/marshall.png';
import Sennheiser from '../../assets/images/partners/sennheiser.png';


function Partners() {
  return (
    <section id='partner-brands' className='grid xl:grid-cols-5 xl:grid-rows-2 sm:grid-cols-3 sm:grid-rows-4 grid-cols-2 grid-rows-5 px-8 py-16 my-16 sm:gap-6 gap-4'>
      <div className='flex items-center'>
        <h3 className='uppercase md:text-3xl text-2xl'>We work with <br /> such <span className='font-semibold'>Brands</span></h3>
      </div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Denon} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Klipsch} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Jbl} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Marshall} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Sennheiser} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Sennheiser} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={Sennheiser} alt="" /></div>
      <div className='flex justify-center items-center border rounded-lg p-8'><img src={BW} alt="" /></div>
      <div className='flex flex-col items-end justify-center sm:col-span-3 xl:col-span-1'>
        <h3 className='uppercase md:text-3xl text-2xl'>And <span className='text-orange-500'>200</span> More</h3>
        <div className='flex gap-4'>
          <p className='text-gray-500'>Check them all</p>
          <BsArrowRight className='text-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Partners