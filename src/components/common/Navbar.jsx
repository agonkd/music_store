import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { CiSearch, CiShoppingCart, CiUser, CiWallet } from 'react-icons/ci'
import Logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <nav>
      <div className='sm:flex hidden justify-between items-center sm:px-10 px-8 py-4 text-gray-500 border-b'>
        <ul className='lg:flex hidden gap-8'>
          <li><a href="">About Us</a></li>
          <li><a href="">Shipment</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contacts</a></li>
          <li><a href="">Remote Listening</a></li>
          <li><a href="">Wholesale and Corporate Clients</a></li>
        </ul>
        <ul className='flex text-sm'>
          <li className='mr-2 border-b text-black font-semibold'>EN</li>
          <li className='px-2 border-x'>RUS</li>
          <li className='ml-2'>AL</li>
        </ul>
      </div>
      <div className='sm:grid hidden grid-cols-4 border-b'>
        <div className='xl:col-span-2 border-r sm:px-10 px-8 py-6 flex items-center'>
          <a href=""><img className='w-[250px]' src={Logo} alt="" /></a>
        </div>
        <div className='xl:col-span-1 col-span-2 sm:px-10 px-8 py-6 flex flex-col border-r'>
          <span className='text-sm text-gray-500'>Showrooms</span>
          <ul className='flex gap-8 text-lg font-semibold'>
            <li className='underline flex items-center gap-2'><a href="">Kyiv</a><BsChevronDown className='text-xs' /></li>
            <li className='underline flex items-center gap-2'><a href="">Odesa</a><BsChevronDown className='text-xs' /></li>
            <li className='underline flex items-center gap-2'><a href="">Dnipro</a><BsChevronDown className='text-xs' /></li>
          </ul>
        </div>
        <div className='sm:px-10 px-8 py-6 flex flex-col items-end'>
          <span className='text-sm text-gray-500'>Consultation</span>
          <p className='text-lg font-semibold'>+38 (099) 999 99 99</p>
        </div>
      </div>
      <div className='grid sm:grid-cols-4 items-center sm:p-0 px-8 grid-cols-3 border-b'>
        <div className='flex items-center gap-2 sm:px-10  py-4 sm:border-r'>
          <button type='button' name='toggle-categories' id='toggle-categories'><AiOutlineMenu className='text-2xl' /></button>
          <label htmlFor="toggle-categories" className='text-lg sm:inline hidden'>Categories</label>
        </div>
        <a href="" className='sm:hidden block py-4'><img src={Logo} alt="" /></a>
        <ul className='sm:col-span-3 sm:px-10 py-4 flex justify-end sm:gap-8 gap-2 text-2xl'>
          <li><button><CiSearch /></button></li>
          <li className='sm:inline hidden'><button><CiUser /></button></li>
          <li><button><CiShoppingCart /></button></li>
          <li className='sm:inline hidden'><button><CiWallet /></button></li>
          <li className='text-lg'>( 0 )</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar