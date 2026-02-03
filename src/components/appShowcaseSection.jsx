import React, { useState, useEffect, useRef } from 'react';
import {
  ScanHeart,
  ChartNoAxesCombined,
  Video,
  Dumbbell,
  Apple,
  LayoutDashboard,
  ClipboardPlus,
  HandHeart,
  Zap
} from 'lucide-react';

import dashboard from "../assets/app-images/dashboard.webp";
import progress from "../assets/app-images/progress tracking.webp";
import live from "../assets/app-images/live session.webp";
import nutrition from "../assets/app-images/nutrition tracker.webp";
import female from "../assets/app-images/Female Tracker.webp";
import community from "../assets/app-images/community.webp";
import workout from "../assets/app-images/workout tracker.webp";
import health from "../assets/app-images/health tracker.webp";

export default function AppScreenshots() {

  const screenshots = [
    {
      id: 1,
      icon: LayoutDashboard,
      title: 'Simple Dashboard',
      highlight: 'Easy Overview',
      image: dashboard,
      description: 'Track everything in one beautiful interface'
    },
    {
      id: 2,
      icon: ChartNoAxesCombined,
      title: 'Progress Tracking',
      highlight: 'Real-time Analytics',
      image: progress,
      description: 'Monitor your performance with intuitive visualizations'
    },
    {
      id: 3,
      icon: Video,
      title: 'Live Sessions',
      highlight: 'Interactive Experience',
      image: live,
      description: 'Join live workouts with expert trainers'
    },
    {
      id: 4,
      icon: Dumbbell,
      title: 'Workout Tracker',
      highlight: 'Custom Routines',
      image: workout,
      description: 'Personalized workout plans that adapt to you'
    },
    {
      id: 5,
      icon: Apple,
      title: 'Nutrition Tracker',
      highlight: 'Smart Meal Plans',
      image: nutrition,
      description: 'Track calories and macros effortlessly'
    },
    {
      id: 6,
      icon: ScanHeart,
      title: 'Female Tracker',
      highlight: 'Health Insights',
      image: female,
      description: 'Comprehensive women\'s health monitoring'
    },
    {
      id: 7,
      icon: HandHeart,
      title: 'Community',
      highlight: 'Connect & Motivate',
      image: community,
      description: 'Join a community of like-minded individuals'
    },
    {
      id: 8,
      icon: ClipboardPlus,
      title: 'Health Tracker',
      highlight: 'Complete Wellness',
      image: health,
      description: 'Monitor all your health metrics in one place'
    }
  ];

  const leftFeatures = screenshots.slice(0, 4);
  const rightFeatures = screenshots.slice(4);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resumeRef = useRef(null);

  const pauseAndResume = () => {
    setIsPaused(true);
    clearTimeout(resumeRef.current);

    resumeRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);

  useEffect(() => {
    return () => clearTimeout(resumeRef.current);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-200/50 rounded-full mb-3">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              NEXT-GEN APP FEATURES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight">
            Experience the <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Future</span> of
            <br className="hidden sm:block" /> Digital Wellness
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Cutting-edge technology meets intuitive design for an unparalleled user experience
          </p>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-5 mb-4">

          {/* Left */}
          <div className="flex flex-col gap-3 items-end">
            {leftFeatures.map((feature, index) => {

              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveIndex(index);
                    pauseAndResume();
                  }}
                  className={`group relative transition-all duration-300 rounded-xl p-3 flex items-center gap-2.5 text-left overflow-hidden
                    active:scale-[0.98]
                    ${isActive
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white scale-105 shadow-lg shadow-purple-500/40'
                      : 'bg-white/60 backdrop-blur-sm text-gray-800 border border-gray-200/40 shadow-sm hover:bg-white hover:scale-[1.02]'
                    }`}
                  style={{ width: 200 }}
                >

                  {isActive && (
                    <span className="absolute top-1/2 right-[-24px] -translate-y-1/2 h-[2px] w-6 bg-gradient-to-r from-purple-400 to-blue-400" />
                  )}

                  <div className={`relative p-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20 backdrop-blur-sm shadow-inner'
                      : 'bg-gradient-to-br from-purple-50 to-blue-50 group-hover:from-purple-100 group-hover:to-blue-100'
                  }`}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{feature.title}</h3>
                    {isActive && (
                      <span className="text-[10px] text-purple-100 font-medium">{feature.highlight}</span>
                    )}
                  </div>

                </button>
              );
            })}
          </div>

          {/* Center phone */}
        
           <div className="flex justify-center">
            <img
              src={screenshots[activeIndex].image}
              alt="Mobile App Interface"
              className="z-5 w-50 h-auto p-2 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            />
          </div>
          

          {/* Right */}
          <div className="flex flex-col gap-3 items-start">
            {rightFeatures.map((feature, index) => {

              const Icon = feature.icon;
              const globalIndex = index + 4;
              const isActive = activeIndex === globalIndex;

              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveIndex(globalIndex);
                    pauseAndResume();
                  }}
                  className={`group relative transition-all duration-300 rounded-xl p-3 flex items-center gap-2.5 text-left overflow-hidden
                    active:scale-[0.98]
                    ${isActive
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white scale-105 shadow-lg shadow-purple-500/40'
                      : 'bg-white/60 backdrop-blur-sm text-gray-800 border border-gray-200/40 shadow-sm hover:bg-white hover:scale-[1.02]'
                    }`}
                  style={{ width: 200 }}
                >

                  {isActive && (
                    <span className="absolute top-1/2 left-[-24px] -translate-y-1/2 h-[2px] w-6 bg-gradient-to-l from-purple-400 to-blue-400" />
                  )}

                  <div className={`relative p-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20 backdrop-blur-sm shadow-inner'
                      : 'bg-gradient-to-br from-purple-50 to-blue-50 group-hover:from-purple-100 group-hover:to-blue-100'
                  }`}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{feature.title}</h3>
                    {isActive && (
                      <span className="text-[10px] text-purple-100 font-medium">{feature.highlight}</span>
                    )}
                  </div>

                </button>
              );
            })}
          </div>

        </div>

        {/* Desktop description */}
        <div className="hidden lg:block text-center mb-8">
          <p className="text-sm text-gray-600 max-w-lg mx-auto font-medium">
            {screenshots[activeIndex].description}
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex flex-col items-center">

          <div className="mb-5">
            <div >

              <img
                key={screenshots[activeIndex].id}
                src={screenshots[activeIndex].image}
                alt={screenshots[activeIndex].title}
                className="w-[60%] h-[60%] object-cover animate-fade-in mx-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-600/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan"></div>
            </div>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-1.5 mb-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  pauseAndResume();
                }}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full'
                    : 'w-1 h-1 bg-gray-300 rounded-full'
                }`}
              />
            ))}
          </div>

          <div className="text-center mb-5 px-4">
            <h3 className="text-lg font-black text-gray-900 mb-1">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-xs text-gray-600 font-medium">
              {screenshots[activeIndex].description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full max-w-md px-4">
            {screenshots.map((feature, index) => {

              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveIndex(index);
                    pauseAndResume();
                  }}
                  className={`relative group transition-all duration-300 rounded-lg p-2 flex items-center gap-2 text-left overflow-hidden
                    active:scale-[0.98]
                    ${isActive
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md'
                      : 'bg-white/70 backdrop-blur-sm text-gray-800 border border-gray-200/40 shadow-sm hover:bg-white'
                    }`}
                >

                  <div className={`p-1.5 rounded-md ${
                    isActive ? 'bg-white/20' : 'bg-gradient-to-br from-purple-50 to-blue-50'
                  }`}>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  </div>

                  <span className="text-[11px] font-bold leading-tight flex-1">
                    {feature.title}
                  </span>

                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style >{`
        @keyframes scan {
          0%,100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }

        @keyframes gradient {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
