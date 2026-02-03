import React from 'react';
import vmax from '../assets/logos/vmax.png'
import lk from '../assets/logos/lk.jpg'
import fitdad from '../assets/logos/fitdad.png'
import fitkid from '../assets/logos/fitkid.png'
import miracle from '../assets/logos/miracle.png'
import mindfully from '../assets/logos/yours-mindfully.png'
import fitmom from '../assets/logos/fitmomclub.jpg'



const LogoCarousel = () => {
  const logos = [
    { name: 'Fit Mom Club', src: fitmom },
    { name: 'vmax', src: vmax },
    { name: 'FitDad', src: fitdad },
    { name: 'LK', src: lk },
    { name: 'FitKid', src: fitkid },
    { name: 'yours mindfully', src: mindfully },
    { name: 'miracle', src: miracle },
     { name: 'LK', src: lk },

  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-2 sm:py-2 md:py-6 lg:py-1 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3 sm:mb-6 md:mb-3">
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 font-medium uppercase tracking-wider">
            Trusted by leading companies
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div className="w-full overflow-hidden py-2">
            <div className="flex items-center animate-scroll-images">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
                  style={{ minWidth: 'max-content' }}
                >
                  <div className="h-14 sm:h-14 md:h-16 lg:h-18 flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-auto object-contain opacity-70 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-images {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll-images {
          display: flex;
          width: max-content;
          animation: scroll-images 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-images:hover {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          .animate-scroll-images {
            animation-duration: 35s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-images {
            animation-duration: 40s;
          }
        }

        @media (min-width: 1536px) {
          .animate-scroll-images {
            animation-duration: 50s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-images {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;