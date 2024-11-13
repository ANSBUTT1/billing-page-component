import React, { useState } from 'react';
import { FiCreditCard, FiMail, FiMapPin, FiUser, FiLock, FiCalendar } from 'react-icons/fi';

const BillingPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      paymentMethod: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !billingDetails.fullName ||
      !billingDetails.email ||
      !billingDetails.address ||
      !billingDetails.city ||
      !billingDetails.zipCode ||
      !billingDetails.country ||
      !billingDetails.cardNumber ||
      !billingDetails.expiryDate ||
      !billingDetails.cvv
    ) {
      alert('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setIsFormSubmitted(true);
      setLoading(false);
      console.log('Form Submitted: ', billingDetails);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7F9FC]">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-[#4A90E2] mb-6">Billing Information</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiUser className="text-gray-400" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={billingDetails.fullName}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiMail className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiMapPin className="text-gray-400" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* City */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiMapPin className="text-gray-400" />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* Zip Code */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiMapPin className="text-gray-400" />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={billingDetails.zipCode}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* Country */}
          <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
            <FiMapPin className="text-gray-400" />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingDetails.country}
              onChange={handleInputChange}
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="text-gray-600">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={billingDetails.paymentMethod}
              onChange={handlePaymentMethodChange}
              className="w-full p-3 mt-2 border-b-2 border-gray-300 focus:border-[#4A90E2]"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {billingDetails.paymentMethod === 'Credit Card' && (
            <>
              {/* Card Number */}
              <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2]">
                <FiCreditCard className="text-gray-400" />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={billingDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 focus:outline-none"
                  required
                />
              </div>

              {/* Expiry Date and CVV */}
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2] w-1/2">
                  <FiCalendar className="text-gray-400" />
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={billingDetails.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2 border-b-2 border-gray-300 focus-within:border-[#4A90E2] w-1/2">
                  <FiLock className="text-gray-400" />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={billingDetails.cvv}
                    onChange={handleInputChange}
                    className="w-full p-3 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 mt-4 font-bold text-white bg-[#4A90E2] rounded-lg shadow-lg hover:bg-[#50E3C2] transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : isFormSubmitted ? 'Payment Successful!' : 'Submit Payment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingPage;
