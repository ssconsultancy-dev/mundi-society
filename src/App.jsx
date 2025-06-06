import React, { useState, useEffect, useCallback, memo } from "react";
import Navbar from "./components/Navbar";
import BoardMembers from "./components/Boardmembers";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Notices from "./components/Notices";
import { Building2, AlertCircle } from "lucide-react";
import "swiper/css";

function App() {
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;
  const [text, setText] = useState(" ");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const WORDS = [
    "Building stronger communities through collaboration, innovation, and dedication.",
  ];
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611679447949-4f56fd246b55?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative h-[66vh] mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-6 drop-shadow-lg text-center mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl">
            Welcome To THE MUNDI (S) SELF SUPPORTING CO-OPERATIVE House Building
            Society Ltd., Mohali
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-8 drop-shadow-md text-center max-w-md sm:max-w-xl md:max-w-3xl mx-auto min-h-[45px]">
            {text}
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white text-base sm:text-base md:text-lg lg:text-base xl:text-text-base px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="https://forms.google.com/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-base sm:text-base md:text-lg lg:text-base xl:text-text-base px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Submit Complaint
            </a>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <ImageSlider />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Our Society
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Mundi(s) SS Co-op H/B Society Ltd. is a well-established
                residential society comprising 82 flats. It is equipped with
                four lifts, a generator, boom barrier, and solar water heaters,
                ensuring comfort and sustainability.
              </p>
              <p className="text-lg text-gray-600">
                Parking is ample, with spaces available both in the basement and
                on the ground floor. The society also features a spacious green
                area that includes swings and play areas for children, offering
                a serene and family-friendly environment.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Society meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <Notices />

      <BoardMembers />
      <Footer />
    </div>
  );
}

export default App;
