import React from "react";
import { Link } from "react-router-dom";

const ExploreSection = () => {
  const items = [
    {
      title: "LISTEN AUDIO TRACKS",
      icon: "/images/audio-icon.png", // megaphone
      link: "/audio", // replace with your route
    },
    {
      title: "WATCH VIDEOS",
      icon: "/images/video-icon.png", // play icon
      link: "/videos",
    },
    {
      title: "READ MORE & LEARN",
      icon: "/images/pdf-icon.png", // pdf icon
      link: "/read-more",
    },
  ];

  return (
    <div className="w-full bg-white py-10 px-4">
      {/* Lotus Divider */}
      <div className="relative flex justify-center">
        <img
          src="/images/lotus.png"
          alt="Lotus"
          className="w-16 h-16 -mt-8"
        />
      </div>

      {/* Description */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mt-4">
        Feel free to explore history of Nabh Kanwal Raja Sahib Ji. Listen or
        watch the videos of Divine Gurbani. We are working hard to collect and
        showcase historical information about Raja Sahib Ji. If you have
        something which is not published on website, please email us at{" "}
        <a
          href="mailto:info@rajasahibji.com"
          className="text-blue-600 underline"
        >
          info@rajasahibji.com
        </a>
      </p>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-orange-500 text-white rounded-lg shadow-md p-6 hover:bg-orange-600 transition transform hover:scale-105"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-3"
            />
            {/* Title */}
            <span className="text-sm md:text-base font-semibold text-center">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;

// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExploreSection from "./components/ExploreSection";

// // Lazy load pages
// const AudioPage = lazy(() => import("./pages/AudioPage"));
// const VideosPage = lazy(() => import("./pages/VideosPage"));
// const ReadMorePage = lazy(() => import("./pages/ReadMorePage"));

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home page */}
//         <Route path="/" element={<ExploreSection />} />

//         {/* Lazy-loaded routes */}
//         <Route
//           path="/audio"
//           element={
//             <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
//               <AudioPage />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/videos"
//           element={
//             <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
//               <VideosPage />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/read-more"
//           element={
//             <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
//               <ReadMorePage />
//             </Suspense>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
