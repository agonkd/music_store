function ProductCard() {
  return (
    <a href='#product-name' className='relative flex-shrink-0 w-72 border rounded-lg hover:shadow-lg transition'>
      <ul className='absolute top-4 left-4 flex flex-col gap-2'>
        <li className='w-fit rounded py-1 px-2 text-xs bg-[#E5505A] text-white'>Sale 10:30:35</li>
        <li className='w-fit rounded py-1 px-2 text-xs bg-[#E5505A] text-white'>-17& OFF</li>
      </ul>
      <img className='h-56 object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" alt="" />
      <div className='p-4'>
        <span className='text-xs text-gray-600 mb-2 uppercase tracking-[1px]'>Review</span>
        <p className='font-semibold'>Announcement of the first TWS-tips from Bowers & Wilkins PIS and PI7!</p>
        <div className='my-6'>
          <p className='text-sm text-gray-600'>Listen live in a store</p>
          <ul className='flex gap-2 text-sm text-green-600'>
            <li>Kyiv</li>
            <li>Dnipro</li>
            <li>Odesa</li>
          </ul>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <p className='text-lg font-semibold'>89,50 </p>
            <span className='text-xs'>EUR</span>
          </div>
          <form action='' className='flex items-center gap-1'>
            <input type="radio" id='product-rad' name='product-rad' checked />
            <input type="radio" id='product-rad' name='product-rad' />
          </form>
        </div>
      </div>
    </a>
  )
}

export default ProductCard