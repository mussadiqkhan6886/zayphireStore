import Content from "../Components/Content/Content"

const Privacy = () => {
  const data = 
  <>
  <section>
    <h2 className="text-2xl font-semibold mb-2">💳 Payment Method</h2>
    <p>
      Shopping at <strong>Zayphire</strong> is easy and secure. We currently support <strong>Cash on Delivery (COD)</strong> for all orders across Pakistan. This means you can shop your favorite unstitched fabrics online without any upfront payment and simply pay in cash once the parcel is delivered to your doorstep.
    </p>
    <p className="mt-2">
      This method ensures complete peace of mind, especially for new customers shopping with us for the first time. We do not collect or request any financial or card-related information, ensuring a safe and trustworthy shopping experience for everyone.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">🧵 Product Information</h2>
    <p>
      Every product at Zayphire is selected with care and offered with complete honesty. Our collection includes a blend of original, in-house fabrics as well as branded selections, such as products from <strong>GulAhmed</strong>, sourced and sold with transparency.
    </p>
    <p className="mt-2">
      We believe in providing high-quality fabrics that you can trust — fabrics that speak of elegance, comfort, and style. Whether you’re preparing for an event or looking for everyday wear, you’ll find a variety of textures and tones suited to every occasion.
    </p>
    <p className="mt-2">
      All product photos are taken by our in-house team to reflect the actual product as closely as possible. However, minor differences in color may appear due to screen settings (LCD/LED/phone displays) and lighting conditions. We do not use misleading or copied images. At Zayphire, honesty and product integrity are non-negotiable.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">🔐 Privacy Policy</h2>
    <p>
      At Zayphire, we are fully committed to respecting and protecting your personal privacy. When you place an order with us, we collect only the essential information required to process and deliver your order — such as your name, phone number, email address, and shipping details.
    </p>
    <p className="mt-2">
      We do not collect any sensitive financial data since we operate on a Cash on Delivery basis. All data is stored securely and used solely to provide you with a seamless shopping experience.
    </p>
    <p className="mt-2">
      We may also use your information to inform you about new arrivals, special offers, or seasonal campaigns — but only if you have agreed to receive such updates. We never share your personal information with third parties for advertising or promotions.
    </p>
    <p className="mt-2">
      Your trust is important to us, and we take every necessary step to keep your information private and secure. If you have any concerns, please reach out to our support team — we’ll be happy to assist you.
    </p>
  </section>
  </>

  return (
    <Content heading={"Privacy"} content={data} />
  )
}

export default Privacy
