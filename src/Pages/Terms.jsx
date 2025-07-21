import Content from "../Components/Content/Content"
import { Link } from "react-router-dom"

const Terms = () => {
  const data = 
  <>
  <strong>Welcome to Zayphire<br/> </strong> By placing an order with us or accessing our website, you agree to comply with and be bound by the following terms and conditions. These terms apply to all visitors, users, and customers of Zayphire. We recommend reading them carefully before making any purchase.
<ol className="list-decimal space-y-4 ml-6 text-left">
    <li>
      <strong>General</strong><br />
      Zayphire reserves the right to modify, update, or remove any part of these terms and conditions at any time without prior notice. Your continued use of our website following any changes constitutes your acceptance of those changes. It is your responsibility to check this page periodically for updates.
    </li>

    <li>
      <strong>Order Acceptance</strong><br />
      All orders placed on the Zayphire website are subject to order confirmation and product availability. We reserve the right to refuse or cancel an order for any reason, including but not limited to limitations on quantities available for purchase, inaccuracies in product or pricing information, or issues identified by our payment or delivery team. Once your order is placed, you will receive a confirmation via SMS or email. This confirmation does not signify our acceptance of your order, only that we have received it.
    </li>

    <li>
      <strong>Product Availability</strong><br />
      While we aim to keep our inventory updated, certain products may become unavailable due to high demand. In such cases, if you’ve placed an order for an item that becomes unavailable, our team will inform you and offer an exchange, store credit, or cancellation if preferred.
    </li>

    <li>
      <strong>Pricing & Payment</strong><br />
      All prices listed on our website are in Pakistani Rupees (PKR) and are inclusive of applicable taxes unless stated otherwise. Zayphire reserves the right to change prices at any time without prior notice. We currently accept Cash on Delivery (COD) as the only payment method.
    </li>

    <li>
      <strong>Delivery</strong><br />
      Zayphire delivers all orders via Fastex Courier Service, typically within 2–3 working days after dispatch. While we make every effort to ensure timely delivery, delays may occur due to unforeseen circumstances like weather disruptions, public holidays, or issues in remote regions. Delivery across Pakistan is free of charge, and there are no extra fees during sales or promotions.
    </li>

    <li>
      <strong>Returns & Exchanges</strong><br />
      Zayphire offers a 7-day exchange policy. Refunds or cancellations are available. To be eligible for an exchange, the product must be returned in its original condition with tags attached. You may return the parcel using any courier service. More details are provided in our <Link onClick={() => window.scrollTo(0,0)} className="underline text-blue-500" to={"/return"}>Exchange Policy</Link> section.
    </li>

    <li>
      <strong>Use of Content</strong><br />
      All content on the Zayphire website — including images, product descriptions, graphics, logos, and designs — is the property of Zayphire and may not be copied, reproduced, or used without express written permission. Any unauthorized use of our content may lead to legal action.
    </li>

    <li>
      <strong>Color Accuracy</strong><br />
      We strive to display product colors as accurately as possible. However, due to variations in screens, lighting, and photography, slight color differences may occur. We do not guarantee that your device will display colors exactly as they appear in real life.
    </li>

    <li>
      <strong>Limitation of Liability</strong><br />
      Zayphire will not be held responsible for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or products. By using our platform, you agree that Zayphire’s liability is limited to the purchase amount paid by you.
    </li>

    <li>
      <strong>Contact Information</strong><br />
      For any questions regarding your order, product details, delivery, or policies, you can contact our <Link onClick={() => window.scrollTo(0,0)} className="underline text-blue-500" to={"/contact"}>customer support</Link> team via the contact page or by reaching out on WhatsApp or email. We're here to assist you with anything you need.
    </li>
  </ol>
  </>

  return (
      <Content heading={"Terms & Condition"} content={data} />
  )
}

export default Terms
