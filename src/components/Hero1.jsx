import React, { useState, useEffect } from "react";

const RajaSahibSection = () => {
  // Array of images
  const images = [
    "/images/raja-sahib1.png",
    "/images/raja-sahib2.png",
    "/images/raja-sahib3.png",
    "/images/raja-sahib4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            ਕੂੰਬੀ ਜੋਤ ਪੰਨ ਪੰਨ ਨਾਲ <br /> ਕਵਲ ਰਾਜਾ ਸਾਹਿਬ ਜੀ
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            ਰਾਜਾ ਸਾਹਿਬ ਜੀ ਦਾ ਜਨਮ ਬਿਉਰਣੇ ਨਾਲਕਾ ਘਰ ਵਿੱਚ ਮਾਤਾ ਸਾਹਿਬ
            ਦੇਵੀ ਜੀ ਦੀ ਕੋਖੋਂ ਹੋਇਆ। ਆਪ ਜੀ ਨੇ ਬਿਉਰਣੇ ਮੰਡਲ ਵਾਲਾ ਜੀ ਪਿੰਡ
            ਵਿੱਚ ਹੀ ਜਾਪੁ ਸੇਵਾ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਨ ਲੱਗੇ। ਜਾਪੁ ਦੇਰ ਨਾ ਹੋਇਆ
            ਆਪਣੇ ਆਪ ਨੂੰ ਵੇਦ ਕਰਕੇ ਪੁੱਜ ਗਿਆ। ਜਾਪੁ ਸਾਹਿਬ ਜੀ ਨੂੰ ਦੁਨੀਆ ਨੇ
            ਰਾਜਾ ਕਹਿਣਾ ਸ਼ੁਰੂ ਕੀਤਾ। ਇਕ ਰਾਜਾ ਬਣਨ ਤੱਕ ਬਹੁਤ ਮੁਸ਼ਕਲਾਂ
            ਆਈਆਂ। ਆਪ ਜੀ ਨੇ ਬਹੁਤ ਕੁਸ਼ਲਤਾ ਨਾਲ ਲੋਕਾਂ ਨੂੰ ਸੱਚ ਦੀ ਰਾਹ
            ਪਾਸੇ ਪਾਇਆ। ਆਪ ਸਾਹਿਬ ਜੀ ਕਹਿੰਦੇ ਰਹੇ ਕਿ ਦੁਨੀਆ, ਮਾਇਆ
            ਪ੍ਰਲੋਭਨ ਦੀ ਦੌੜਾਂ ਕਰਦੀ ਹੈ। ਆਪ ਸਾਹਿਬ ਜੀ ਦੋਹਰਾ ਕੇ ਕਹਿੰਦੇ ਕਿ
            ਦੁਨੀਆਂ ਨੂੰ ਪਾਪ ਤੋਂ ਬਚਣਾ ਚਾਹੀਦਾ ਹੈ।
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">
            ਰਾਜਾ ਸਾਹਿਬ ਜੀ ਹੋਰ ਪੜ੍ਹੋ →
          </button>
        </div>

        {/* Right Slideshow */}
        <div className="flex justify-center">
          <img
            src={images[currentIndex]}
            alt="ਰਾਜਾ ਸਾਹਿਬ ਜੀ"
            className="rounded-lg shadow-lg max-w-sm md:max-w-md transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default RajaSahibSection;
