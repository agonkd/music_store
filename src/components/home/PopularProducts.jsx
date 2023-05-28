import { BsArrowRight, BsChevronDown } from 'react-icons/bs'
import ProductCard from '../common/ProductCard'

function PopularProducts() {
  return (
    <section className='sm:px-10 px-8 my-16 space-y-8'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-24'>
          <h2 className='text-2xl font-semibold uppercase'>POPULAR PRODUCTS</h2>
          <button className='underline flex items-center gap-2'><span>Headsets</span><BsChevronDown className='text-xs' /></button>
        </div>
        <button className='flex gap-4'>See all<BsArrowRight className='text-2xl' /></button>
      </div>
      <div className='flex overflow-x-scroll pb-16 sm:gap-6 gap-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section >
  )
}

export default PopularProducts