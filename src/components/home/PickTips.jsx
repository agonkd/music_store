import Earbuds from '../../assets/images/icons/earbuds.png'
import FindHeadphone from '../../assets/images/icons/find-headphone.png'
import FullSized from '../../assets/images/icons/full-sized.png'
import Vaccum from '../../assets/images/icons/vaccum.png'
import Wired from '../../assets/images/icons/wired.png'
import Wireless from '../../assets/images/icons/wireless.png'
import WithMicro from '../../assets/images/icons/with-micro.png'

function PickTips() {
  return (
    <section id='tips-for-picking' className='bg-[#1D1D1C] px-8 py-16'>
      <h3 className='text-white text-2xl mb-1'>FIND YOU HEADPHONE</h3>
      <p className='text-sm text-neutral-400'>Follow 3 easy steps find a headphone</p>
      <div className='grid lg:grid-cols-7 lg:grid-rows-1 grid-rows-3 lg:gap-4 gap-8 mt-8 text-white [&>div>div>div]:p-8 [&>div>div>div]:border [&>div>div>div]:border-neutral-700 [&>div>div>div]:rounded-lg'>
        <div className='col-span-3'>
          <h5 className='pb-2 border-b border-neutral-700 text-sm text-neutral-400'>Step 1: Choose the plug type</h5>
          <div className='grid grid-cols-3 gap-2 mt-2'>
            <div className='flex justify-center items-center'>
              <img src={FullSized} alt="Full Sized" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={Vaccum} alt="Vaccum" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={Earbuds} alt="Earbuds" />
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <h5 className='pb-2 border-b border-neutral-700 text-sm text-neutral-400'>Step 2: Choose the connection type</h5>
          <div className='grid grid-cols-2 gap-2 mt-2'>
            <div className='flex justify-center items-center'>
              <img src={Wired} alt="Wired" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={Wireless} alt="Wireless" />
            </div>
          </div>
        </div>
        <div>
          <h5 className='pb-2 border-b border-neutral-700 text-sm text-neutral-400'>Step 3: Additional</h5>
          <div className='mt-2'>
            <div className='flex justify-center items-center'>
              <img src={WithMicro} alt="With Micro" />
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 col-span-3'>
          <h5 className='pb-2 border-b border-neutral-700 text-sm text-neutral-400'>Search</h5>
          <div className='mt-2 bg-[#2D2D2C]'>
            <div className='flex justify-center items-center'>
              <img src={FindHeadphone} alt="Find Headphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PickTips