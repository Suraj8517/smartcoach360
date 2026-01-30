import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import LogoCarousel from "./LogoCarousel";
import ProductSection from "./ProductSection";
import FeatureShowcase from "./ImageShowcase";

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(to right, rgba(110,10,206,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(110,10,206,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s linear infinite;
          mask-image: radial-gradient(circle at center, black 45%, transparent 80%);
          pointer-events: none;
        }

        @media (min-width: 1280px) {
          .grid-bg {
            background-size: 80px 80px;
          }
          .grid-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(255, 255, 255, 0.5) 50%, 
              rgba(255, 255, 255, 0.3) 100%
            );
            pointer-events: none;
          }
        }

        @media (min-width: 1536px) {
          .grid-bg {
            background-size: 100px 100px;
          }
          .grid-bg::after {
            background: linear-gradient(to bottom, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.6) 50%, 
              rgba(255, 255, 255, 0.4) 100%
            );
          }
        }
      `}</style>

      <section className="relative w-full xl:min-h-screen 2xl:min-h-screen overflow-hidden bg-white">
        {/* GRID BACKGROUND */}
        <div className="grid-bg" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-16 xl:pt-24 2xl:pt-32 pb-16 xl:pb-20 2xl:pb-24 bg-linear-to-b from-white via-white/80 to-transparent">
          {/* Badge */}
          <div className="flex justify-center mb-4 xl:mb-6 2xl:mb-8">
            <div className="inline-flex items-center gap-2 xl:gap-3 px-4 xl:px-4 2xl:px-5 py-1 xl:py-1 2xl:py-1.5 rounded-full border border-gray-200">
              <div className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 bg-linear-to-br from-purple-500 to-blue-600 rounded flex items-center justify-center">
                <Sparkles className="text-white w-4 xl:w-4.5 2xl:w-5" />
              </div>
              <span className="text-sm xl:text-base 2xl:text-md text-gray-600">
                #1 Software for Coaches
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6 xl:mb-8 2xl:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-bold leading-none">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">The flexible way</span>{" "}
              <span className="text-gray-900">
                to manage your coaching business
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="text-center max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-1 xl:mb-2 2xl:mb-3">
            <p className="text-base sm:text-lg md:text-xl xl:text-xl 2xl:text-xl text-gray-600 leading-relaxed">
              With our all-in-one platform, coaches can manage{" "}
              <span className="text-[#6E0ACE]">
                clients, track progress, and grow their business
              </span>{" "}
              effortlessly — all from one place.
            </p>
          </div>

          {/* CTA text */}
          <div className="text-center mb-8 xl:mb-10 2xl:mb-12">
            <p className="text-sm sm:text-lg xl:text-xl 2xl:text-xl font-semibold text-gray-900">
              Start running your coaching business in one place.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="group inline-flex items-center gap-3 xl:gap-4  px-10 xl:px-12 2xl:px-10 py-5 xl:py-5 2xl:py-4 text-sm xl:text-base 2xl:text-lg font-semibold text-white rounded-3xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#6E0ACE" }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <LogoCarousel />
        <FeatureShowcase/>
      </section>
    </>
  );
};

export default HeroSection;