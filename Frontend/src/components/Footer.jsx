import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    const phoneNumber = '+1 317 527 0908';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* First Box - Company Info */}
          <div className="space-y-4">
            <h3 className="text-[#FF7656] text-xl font-bold">Cardinal Asset</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading property preservation and asset management services nationwide. 
              Protecting your investments with professional care since 2009.
            </p>
          </div>

          {/* Second Box - Our Services */}
          <div className="space-y-4">
            <h3 className="text-[#FF7656] text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Property Inspections
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Security Services
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Maintenance & Repairs
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Lawn Care & Landscaping
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Winterization Services
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Emergency Response
              </li>
            </ul>
          </div>

          {/* Third Box - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#FF7656] text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Services
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Why Choose Us
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Contact
              </li>
              <li className="hover:text-[#FF7656] transition-colors cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Fourth Box - Contact Us */}
          <div className="space-y-4">
            <h3 className="text-[#FF7656] text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              {/* Phone - Click to Copy */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 hover:text-[#FF7656] transition-colors cursor-pointer group relative"
                title="Click to copy phone number"
              >
                <Phone size={18} className="flex-shrink-0 text-[#FF7656]" />
                <span className="group-hover:text-[#FF7656]">+1 317 527 0908</span>
                {copied && (
                  <span className="absolute -top-8 left-0 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1 whitespace-nowrap">
                    <Check size={12} />
                    Copied!
                  </span>
                )}
              </div>

              {/* Email - Click to Open Email Client */}
              <a 
                href="mailto:info@cardinalasset.com"
                className="flex items-center gap-3 hover:text-[#FF7656] transition-colors cursor-pointer group"
              >
                <Mail size={18} className="flex-shrink-0 text-[#FF7656]" />
                <span className="group-hover:text-[#FF7656]">info@cardinalasset.com</span>
              </a>

              {/* Address - Click to Open in Maps */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=8024+Cardinal+Cove+W,+Indianapolis,+IN+46256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#FF7656] transition-colors cursor-pointer group"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1 text-[#FF7656]" />
                <span className="group-hover:text-[#FF7656]">8024 Cardinal Cove W, Indianapolis, IN 46256</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
          {/* Left Side - Copyright */}
          <p className="text-center md:text-left">
            © 2026 Cardinal Asset Management LLC. All rights reserved.
          </p>

          {/* Right Side - Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a href="#" className="hover:text-[#FF7656] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#FF7656] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FF7656] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;