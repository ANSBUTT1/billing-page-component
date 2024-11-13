import React, { useState } from 'react';
import { FiCreditCard, FiMail, FiMapPin, FiUser, FiLock, FiCalendar } from 'react-icons/fi';

const BillingComponentTwo = () => {
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#4A90E2] to-[#50E3C2]">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-10 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-[#333333] mb-8">Billing Information</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section: Personal Information */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FiUser className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={billingDetails.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
              <div className="relative">
                <FiMail className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section: Address Information */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Address Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FiMapPin className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={billingDetails.city}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <FiMapPin className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={billingDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-2 top-3 text-gray-400" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={billingDetails.country}
                  onChange={handleInputChange}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section: Payment Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-4">Payment Information</h3>
            <div className="relative mb-4">
              <select
                name="paymentMethod"
                value={billingDetails.paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            {billingDetails.paymentMethod === 'Credit Card' && (
              <div className="space-y-4">
                <div className="relative">
                  <FiCreditCard className="absolute left-2 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={billingDetails.cardNumber}
                    onChange={handleInputChange}
                    className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FiCalendar className="absolute left-2 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={billingDetails.expiryDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiLock className="absolute left-2 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={billingDetails.cvv}
                      onChange={handleInputChange}
                      className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4A90E2]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 mt-8 font-bold text-white bg-[#333333] rounded-md hover:bg-[#4A90E2] transition-all duration-300 ease-in-out ${
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

export default BillingComponentTwo;
