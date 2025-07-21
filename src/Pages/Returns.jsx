import wall from "../Components/Assets/wall.jpg"
import Content from "../Components/Content/Content"

const Returns = () => {

  const data = <p>
        At Zayphire, we prioritize your satisfaction by offering a hassle-free return and exchange policy tailored for your convenience. If you're not fully satisfied with your purchase, or if the size isn’t the right fit, you may request an exchange or return under the conditions below.

        <br /><br />
        <b>Eligibility Criteria:</b><br />
        You may request a return or exchange within:
        <ul className="list-disc ml-6 my-2 text-left">
          <li><b>03 days</b> of delivery for issues like receiving a wrong, defective, damaged, stained, incomplete, or tampered product.</li>
          <li><b>07 days</b> of delivery for size-related exchanges (if the item is unused, undamaged, and has tags attached).</li>
        </ul>

        <br />
        <b>Conditions to Qualify:</b><br />
        The product must be:
        <ul className="list-disc ml-6 my-2 text-left">
          <li>Unused and in original condition with packaging, tags, and labels attached.</li>
          <li>Returned with all necessary details: order number, name, contact, and requested size (if applicable).</li>
        </ul>

        <br />
        <b>Process:</b><br />
        To initiate the exchange or return:
        <ul className="list-disc ml-6 my-2 text-left">
          <li>Contact us at 📧 <a href="mailto:zayphire@gmail.com">zayphire@gmail.com</a></li>
          <li>Use any courier service of your choice to send the item to our return address:<br />
          📦 <i>City Filling Station Shamsi Road Mardan.</i></li>
          <li>Include a handwritten note inside the parcel with order details and exchange request (if applicable).</li>
        </ul>

        Once we receive and verify your parcel, we’ll process the exchange (if the requested size is in stock) within 4 to 5 working days. We do not charge any fee for exchanges; however, you are responsible for return shipping.

        <br /><br />
        <b>Important Notes:</b><br />
        <ul className="list-disc ml-6 my-2 text-left">
          <li>Size exchanges on sale or discounted items are subject to stock availability and not guaranteed.</li>
          <li>Orders delivered outside Pakistan are not eligible under this policy.</li>
          <li>Due to screen brightness or lighting, minor color/texture differences may occur and are not valid grounds for exchange or return.</li>
        </ul>

        <br />
        <b>Non-Returnable / Non-Exchangeable Items:</b><br />
        <ul className="list-disc ml-6 my-2 text-left">
          <li>Innerwear and undergarments</li>
          <li>Fragrances and perfumes</li>
          <li>Jewelry or accessories</li>
        </ul>

        <br />
        <b>Damaged/Defective Product?</b><br />
        Please send clear images or videos of the issue within 03 days of delivery for review. This helps our team investigate and respond with a suitable resolution quickly.

        <br /><br />
        Your trust means everything to us — thank you for shopping with Zayphire.
        </p>

  return (
    <Content heading={"Returns & Exchange"} content={data} />
  )
}

export default Returns
