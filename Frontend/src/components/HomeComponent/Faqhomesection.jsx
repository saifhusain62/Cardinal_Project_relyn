import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the entire metropolitan area and surrounding suburbs within a 50-mile radius. Our service areas include downtown, north, south, east, and west regions. Contact us to confirm we service your specific location."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including residential and commercial cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, carpet cleaning, window washing, and customized maintenance plans tailored to your specific needs."
    },
    {
      question: "How do I book a service?",
      answer: "Booking is easy! You can call us directly, fill out our online contact form, or use our booking system on the website. Simply select your desired service, choose a convenient date and time, and we'll confirm your appointment within 24 hours."
    },
    {
      question: "Are your services guaranteed?",
      answer: "Absolutely! We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return and re-clean the area at no additional charge. Your happiness is our priority."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we understand that emergencies happen. We offer 24/7 emergency services for urgent situations such as flooding, severe damage cleanup, or last-minute event preparation. Emergency service rates may vary - contact us for details."
    },
    {
      question: "What are your hours of operation?",
      answer: "Our regular business hours are Monday through Friday, 8:00 AM to 6:00 PM, and Saturday 9:00 AM to 4:00 PM. We're closed on Sundays. However, we can arrange services outside these hours upon request for your convenience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 mb-3 sm:mb-4">
            BEFORE YOU ASK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            F.A.Q.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Quick, detailed responses to help you make informed decisions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 bg-white rounded-lg overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Divider - aligned with text content */}
              {index < faqs.length - 1 && (
                <div className="px-4 sm:px-6 md:px-8">
                  <div className="border-b border-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;