import { AiOutlineEye } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

function Blog() {
  return (
    <section id='blog-posts-wrapper' className='sm:px-10 px-8 py-16 my-16 space-y-8' >
      <div className='flex sm:flex-row flex-col justify-between sm:items-center gap-6'>
        <h2 className='text-2xl font-semibold uppercase'>Blog</h2>
        <ul className='flex items-center sm:justify-start justify-between sm:gap-10 text-gray-500'>
          <li className='text-black font-semibold underline'><a href="">All</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Discounts</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Reviews</a></li>
        </ul>
        <button className='flex gap-4'>See all<BsArrowRight className='text-2xl' /></button>
      </div>
      <div className='flex sm:gap-6 gap-4 overflow-x-scroll pb-16 [&>div]:h-fit [&>div>div]:w-72 [&>div]:border [&>div]:rounded-lg [&>div>div>p]:line-clamp-2'>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold truncate-[2]'>Review of Knowledge Zenith DQ6 3-driver dynamos. Audiophile fate</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-8'>
              <span>Aug 03, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>212</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold'>Shanling MTW200 TWS-headphones review. New temptation</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-16'>
              <span>Apr 22, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>444</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold'>Announcement of the first TWS-tips from Bowers & Wilkins PIS and PI7!</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-8'>
              <span>May 27, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>10 254</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold'>Hi-Fi player vs smartphone. To 10 Real Reasons to Upgrade to the Player + Top 5 Best Budget Models of 2019.</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-16'>
              <span>Aug 02, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>185</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold'>Review of Knowledge Zenith DQ6 3-driver dynamos. Audiophile fate</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-8'>
              <span>Aug 03, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>212</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='w-full h-52 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1289&q=80" alt="" />
          <div className='p-4'>
            <h6 className='text-xs text-gray-600 mb-2 uppercase'>Review</h6>
            <p className='font-semibold'>Review of Knowledge Zenith DQ6 3-driver dynamos. Audiophile fate</p>
            <div className='flex justify-between items-center text-xs text-gray-500 mt-16'>
              <span>Aug 02, 2023</span>
              <div className='flex items-center gap-1'>
                <AiOutlineEye className='text-sm' />
                <span>185</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog