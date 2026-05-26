'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    location: 'Navi Mumbai',
    quote: 'Labro Infra explained the KSC opportunity very clearly. Their team gave us proper guidance, site insights, and confidence before making a decision.',
  },
  {
    name: 'Amit Shah',
    location: 'Mumbai',
    quote: 'The best part was transparency. They helped us understand the future potential of Mumbai 3.0 without overpromising anything.',
  },
  {
    name: 'Priya Desai',
    location: 'Pune',
    quote: 'We were looking for long-term land investment and Labro Infra helped us identify the right growth corridor with proper documentation support.',
  },
  {
    name: 'Nilesh Patel',
    location: 'Ahmedabad',
    quote: 'Their knowledge about infrastructure development and upcoming connectivity around KSC is very strong. Professional and reliable team.',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="relative">
          {/* Desktop: Show 2 testimonials */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border-l-4 border-amber-500 transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Show 1 testimonial */}
          <div className="md:hidden">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border-l-4 border-amber-500 transition-all duration-500">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-gray-700 mb-6 italic">{testimonials[currentIndex].quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
