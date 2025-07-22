import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const { cartValue, totalAmount, all_products } = useContext(ShopContext);
  const [status, setStatus] = useState("");

  const cartItems = Object.entries(cartValue)
  .filter(([_, quantity]) => quantity > 0) // Only selected items
  .map(([productId, quantity]) => {
    const product = all_products.find((p) => p.id === parseInt(productId));
    if (product) {
      return { ...product, quantity };
    }
    return null;
  })
  .filter(Boolean); // Remove nulls if any


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateProductList = () => {
  return cartItems
    .map(
      (item) => `Product: ${item.name} | Quantity: ${item.quantity} | Total: ${item.price * item.quantity} PKR`
    )
    .join("\n");
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode || "No Postal Code",
      notes: formData.notes || "No notes",
      cartItems: generateProductList(),
      totalAmount: `${totalAmount()} PKR`,
    };

    const serviceKey = "service_c8z7cbg"
    const templateKey = "template_xnpp6hi"
    const publicKey  = "PneOTVPQaXcM4CPRd"

    emailjs
      .send(
        serviceKey,       // replace with your actual service ID
        templateKey,      // replace with your actual template ID
        templateParams,
        publicKey        // replace with your actual public key
      )
      .then(
        () => {
          setStatus("✅ Order placed successfully!");
          setTimeout(() => {
            nav('/')
          }, (2000));
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            postalCode: "",
            notes: "",
          });
        },
        (err) => {
          console.error(err);
          setStatus("❌ Failed to place order. Try again later.");
        }
      );
  };


  return (
    <main className="flex flex-col md:flex-row justify-between py-30 md:py-20 gap-10 max-w-6xl mx-auto">
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl text-center font-bold mb-6">Checkout</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow"
        >
          <div className="space-y-4">
            <input
              autoComplete="off"

              name="fullName"
              type="text"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="border-gray-400 outline-none w-full p-3 border rounded-md"
            />
            <input
              autoComplete="off"

              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-400 outline-none w-full p-3 border rounded-md"
            />
            <input
              autoComplete="off"

              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-gray-400 outline-none w-full p-3 border rounded-md"
            />
            <input
              autoComplete="off"

              name="city"
              type="text"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              className="border-gray-400 outline-none w-full p-3 border rounded-md"
            />
          </div>

          <div className="space-y-4">
            <textarea
              name="address"
              placeholder="Full Address"
              rows="4"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border-gray-400 outline-none p-3 border rounded-md"
            />
            <input
              name="postalCode"
              type="text"
              placeholder="Postal Code(optional)"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-3 border-gray-400 outline-none border rounded-md"
            />
            <textarea
              name="notes"
              placeholder="Order Notes (optional)"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 border-gray-400 outline-none border rounded-md"
            />
          </div>

          <p className="text-green-600 text-center border py-2 md:col-span-2">
            Shipping Method: <strong>Free Shipping</strong>
          </p>
          <p className="text-green-600 text-center border py-2 md:col-span-2">
            Payment Method: <strong>Cash on Delivery</strong>
          </p>

          <button
            type="submit"
            className="md:col-span-2 w-full cursor-pointer bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Place Order (COD)
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-blue-600 font-medium">
            {status}
          </p>
        )}
      </div>

      <div className="w-full md:w-1/3 bg-white py-6 px-6 md:px-0 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
        {cartItems.map((item) => {
          if(item){
            return (
              <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex gap-5">
              <img className="w-[70px]" src={item.image} alt="image" />
              <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
            </div>
            <p>{item.price * item.quantity} PKR</p>
          </div>
            ) 
          }else { return null}
          
        } 
        )}
        <div className="flex justify-between mt-4 font-bold text-lg">
          <span>Total:</span>
          <span>{totalAmount()} PKR</span>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
