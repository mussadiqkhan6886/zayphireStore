const NewLetter = () => {
  return (
    <section className='mt-[70px] md:m-15 lg:m-30 bg-gradient-to-b from-amber-100 to-white flex flex-col items-center p-12 justify-between'>
      <h3 className='font-semibold text-5xl mb-5'>Get Exclusive Offers On Your Email</h3>
      <p className='text-gray-700 m-5'>Subscribe to our newletter and stay updated</p>
      <div className='flex'>
        <input className='border outline-none border-gray-400 p-2 px-4 rounded-3xl w-[350px]' type="email" placeholder='mussadiqkhan6886@gmail.com' autoComplete='off' />
        <button className='bg-black text-white rounded-full w-[120px]'>Subscribe</button>
      </div>
    </section>
  )
}

export default NewLetter
