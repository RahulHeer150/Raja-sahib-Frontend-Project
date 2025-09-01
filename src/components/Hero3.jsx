import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GurudwaraCarousel = () => {
  const images = [
    "/images/img1.jpg", // replace with your actual image paths
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-12 px-4 md:px-12 text-white"
      style={{
        backgroundImage: "url('/images/background.jpg')", // second image
      }}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">GURUDWARA SAHIB</h2>
        <p className="text-lg md:text-xl mt-2">ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ</p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        {/* Left Icon */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-10 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Images */}
        <div className="w-full flex justify-center">
          <img
            src={images[current]}
            alt="Gurudwara"
            className="rounded-xl shadow-lg w-full md:w-3/4 lg:w-2/3 h-64 md:h-80 object-cover"
          />
        </div>

        {/* Right Icon */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-10 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Button */}
      <div className="text-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold">
          SEE ALL GURDWARA SAHIBS →
        </button>
      </div>

      {/* Description */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8 text-sm md:text-base">
        <p className="leading-relaxed">
          By Virtue of his unique devotions, Raja Ji was praise in Punjab.
          Wherever Raja Sahib Ji went, a large member of people began to gather.
          Their followers/disciple constructed Gurudwara’s on the places he
          visited. Such as: village Rahpa, Takhat Sri Raja Sahib; village
          Suijon, Gurdwara Bangla Sahib in village Gosal, Gurdwara Manji Sahib;
          in village Jhingra, Gurdwara Dukh Nivaran Sahib; and in village Majara
          Nu Abad, Gurdwara Rasokhana.
        </p>
        <p className="leading-relaxed">
          ਆਪ ਜੀ ਦੀ ਸੇਵਾ ਨਾਲ ਰਾਜਾ ਜੀ ਦੀ ਪ੍ਰਸੰਸਾ ਪੰਜਾਬ ਵਿੱਚ ਹੋਈ ਜਿੱਥੇ ਜਿੱਥੇ ਰਾਜਾ
          ਸਾਹਿਬ ਜੀ ਜਾਂਦੇ ਸੀ ਉੱਥੇ ਹੀ ਲੋਕ ਇਕੱਠੇ ਹੋਣੇ ਸ਼ੁਰੂ ਹੋ ਗਏ। ਉਹਨਾਂ ਦੇ
          ਸਿੱਖਾਂ ਨੇ ਉਹਨਾਂ ਦੀ ਯਾਦ ਵਿੱਚ ਗੁਰਦੁਆਰੇ ਬਣਾਏ। ਜਿਵੇਂ ਕਿ ਪਿੰਡ ਰਹਪਾ, ਤਖਤ
          ਸ੍ਰੀ ਰਾਜਾ ਸਾਹਿਬ, ਪਿੰਡ ਸੁਜੋਂ, ਗੁਰਦੁਆਰਾ ਬੰਗਲਾ ਸਾਹਿਬ ਪਿੰਡ ਗੋਸਲ, ਗੁਰਦੁਆਰਾ
          ਮੰਜੀ ਸਾਹਿਬ, ਪਿੰਡ ਝਿੰਗਰਾ ਵਿੱਚ ਗੁਰਦੁਆਰਾ ਦੁੱਖ ਨਿਵਾਰਨ ਸਾਹਿਬ ਅਤੇ ਪਿੰਡ
          ਮਜਾਰਾ ਨੂ ਆਬਾਦ, ਗੁਰਦੁਆਰਾ ਰਸੋਖਾਨਾ।
        </p>
      </div>
    </div>
  );
};

export default GurudwaraCarousel;
