import Content from "../Components/Content/Content"

const Delivery = () => {
  const data = <>
    <p className='mb-6'>At Zayphire, we believe in providing our customers with a smooth and reliable shopping experience from start to finish. Once an order is confirmed, we make it our priority to dispatch it within 24 hours. Our logistics partner, Fastex Courier Service, ensures that your parcel reaches you in a timely manner — typically within 2 to 3 working days. However, in rare cases, such as bad weather conditions, unforeseen law and order situations, or deliveries to interior and remote areas, there might be a slight delay. We continuously monitor all orders and strive to keep our customers updated in case of any disruption.
        One of the core values at Zayphire is transparency — and we proudly offer free delivery across Pakistan, with no additional charges or hidden fees at checkout. Whether you're shopping from a major city or a small town, we ensure fair and equal access to our products. Even during sales and promotions, no extra delivery charges are applied — your satisfaction remains our top priority. <br /> In case your order has not arrived within 7 working days, we encourage you to contact our support team promptly so we can resolve the issue and get your order to you as soon as possible.</p>
        <div>
            <h2 className='md:text-2xl text-xl mb-3 font-semibold'>Need Help?</h2>
            <p className='text-[14px] md:text-[16px] mb-3'><i className="fa-solid fa-phone mr-2"></i>+923265753305</p>
            <p className='text-[14px] md:text-[16px] whitespace-nowrap'><i className="fa-solid fa-envelope mr-2"></i>zayphire@gmail.com</p>
          </div>
    </>
  return (
    <Content heading={"Delivery"} content={data} />
  )
}

export default Delivery
