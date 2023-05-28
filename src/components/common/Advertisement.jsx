import HeadsetBanner from '../../assets/images/adversisement-banners/headset-banner.png'

function Advertisement() {
  return (
    <section id='advertisement-banner' className='sm:p-10 p-8 my-16'>
      <img className='w-full border rounded-lg md:h-72 sm:h-56 h-32 object-cover' src={HeadsetBanner} alt="Headset Banner" />
    </section>
  )
}

export default Advertisement