import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';
// import DeliveryServiceCompanies from '../assets/images/icons/delivery_service_companies.png';
// import OnlinePaymentCompanies from '../assets/images/icons/online_payment_companies.png';

function Footer() {
  return (
    <footer className='w-fit mx-auto px-8'>
      <section id='newsletter' className='flex lg:flex-row flex-wrap flex-col gap-8 justify-between items-center py-8 border-t'>
        <h3 className='text-2xl font-semibold'>UNUSUAL NEWSLETTER</h3>
        <p className='text-gray-600'>Hey, subscribe! Personally, qualitatively <span className='block ml-24'>from the founder. Do not believe? <a className='underline' href=''>Check what is inside <BsArrowUpRight className='text-sm inline' /></a></span></p>
        <form action="" className='flex justify-between border-b border-black py-4'>
          <label htmlFor="email" className='font-semibold'>Enter your email</label>
          <input type="text" name='email' id='email' className='text-center outline-none px-4 text-gray-600' />
          <button name='submit' type='submit'><BsArrowRight className='text-2xl' /></button>
        </form>
      </section>
      <section id='footer-content-list' className='flex sm:flex-row flex-col justify-center flex-wrap [&>ul]:sm:p-8 [&>ul]:py-8 [&>ul]:border-t [&>ul>li]:text-gray-600 [&>ul>li]:mb-2'>
        <ul className='sm:border-r pl-0'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>For Clients</h4></li>
          <li><a href="">Discounts</a></li>
          <li><a href="">Pre-Order</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Remote Listening</a></li>
          <li><a href="">Soundspace Club</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Warranty and Returns</a></li>
        </ul>
        <ul className='sm:border-r'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>About Us</h4></li>
          <li><a href="">About the Company</a></li>
          <li><a href="">Contacts</a></li>
          <li><a href="">Vacancies</a></li>
          <li><a href="">Stores</a></li>
        </ul>
        <ul className='sm:border-r'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>For Partners</h4></li>
          <li><a href="">Wholesale and <br /> Corporate Clients</a></li>
          <li><a href="">Charity</a></li>
        </ul>
        <ul className='sm:border-r'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>Shippment</h4></li>
          <li><a href="">Self-Pickup</a></li>
          <li>
            <a href="">Delivery Services</a>
            {/* <img className='mt-2' src={DeliveryServiceCompanies} alt="" /> */}
          </li>
          <li><a href="">Courier</a></li>
        </ul>
        <ul className='sm:border-r'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>Payment</h4></li>
          <li><a href="">C.O.D.</a></li>
          <li>
            <a href="">Online Payments</a>
            {/* <img className='mt-2' src={OnlinePaymentCompanies} alt="" /> */}
          </li>
          <li><a href="">Installment Payment and Credit</a></li>
        </ul>
        <ul className='pr-0'>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mb-6'>Contacts</h4></li>
          <li className='font-semibold'><a className='text-black' href="">+383 44 123 456</a></li>
          <li className='font-semibold'><a className='text-black' href="">+383 49 123 456</a></li>
          <li className='underline'><a href="">support@soundspace.eu</a></li>
          <li className='text-xs uppercase tracking-[2px]'><h4 className='mt-8 mb-6'>Working Hours</h4></li>
          <li><a href="">Mon - Fri: 10:00 - 20:00</a></li>
          <li><a href="">Sat - Sun: 10:00 - 18:00</a></li>
        </ul>
      </section>
      <section id='footer-cp-tos-social' className='flex lg:flex-row lg:justify-between flex-col-reverse gap-8 items-center py-8 border-t text-gray-600 text-center'>
        <div className='flex md:flex-row flex-col-reverse md:gap-24 gap-8'>
          <p>&copy; 2023 Soundspace. All Rights Reserved</p>
          <ul className='flex gap-8'>
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sitemap</a></li>
          </ul>
        </div>
        <ul className='flex right-0 gap-4 text-black text-2xl'>
          <li><a href=""><AiFillInstagram /></a></li>
          <li><a href=""><AiFillFacebook /></a></li>
          <li><a href=""><AiFillTwitterCircle /></a></li>
          <li><a href=""><AiFillYoutube /></a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer