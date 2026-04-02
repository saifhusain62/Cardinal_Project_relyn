import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.agreeToPolicy) newErrors.agreeToPolicy = 'You must agree to the policy';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <section className="bg-[#f7f9fa] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Box - Form */}
          <div className="w-full">
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 mb-3 sm:mb-4">
              PARTNER WITH US
            </h3>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 sm:mb-3">
              Booking Form
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Fill out the form below to get a quote on your project
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-[#E2E8EE] p-4 sm:p-6 md:p-8 rounded-lg">
              
              {/* Name Field */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7656] transition"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7656] transition"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7656] transition"
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message Field */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7656] transition resize-none sm:rows-5"
                ></textarea>
              </div>

              {/* Policy Checkbox */}
              <div className="mb-4 sm:mb-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                    className="mt-0.5 sm:mt-1 h-4 w-4 flex-shrink-0 text-[#FF7656] border-gray-300 rounded focus:ring-[#FF7656] cursor-pointer"
                    required
                  />
                  <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600">
                    I agree to the terms and conditions and privacy policy. By submitting this form, 
                    I consent to being contacted regarding my project. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.agreeToPolicy && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.agreeToPolicy}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF7656] text-white font-semibold py-3 sm:py-4 text-sm sm:text-base rounded-md hover:bg-[#ff6242] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Quote
              </button>
            </form>
          </div>

          {/* Right Box - Map */}
          <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[700px] w-full">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71277537933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316a0e2c17%3A0xd8e7e62b0c5f4a62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;