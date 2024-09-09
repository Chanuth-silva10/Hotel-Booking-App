import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customBgLow text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Service Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">Paradise view</h2>
          <p className="text-sm">
            The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed immediately with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Quick links</h2>
          <ul>
            <li className="mb-1 cursor-pointer">Room booking</li>
            <li className="mb-1 cursor-pointer">Rooms</li>
            <li className="mb-1 cursor-pointer">Contact</li>
            <li className="mb-1 cursor-pointer">Explore</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Company</h2>
          <ul>
            <li className="mb-1 cursor-pointer">Privacy policy</li>
            <li className="mb-1 cursor-pointer">Refund policy</li>
            <li className="mb-1 cursor-pointer">FAQ</li>
            <li className="mb-1 cursor-pointer">About</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Newsletter</h2>
          <p className="text-sm mb-3">
            Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-2 text-gray-800"
          />
          <button className="w-full bg-customBgMatch text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
