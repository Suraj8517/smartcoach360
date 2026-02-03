import React from "react";
import { Users, ArrowRight, TrendingUp, Zap, Shield, MessageCircle, Lock, CheckCircle, Activity, Smartphone, Mail, Phone } from "lucide-react";
import video from '../assets/app-images/video.mp4'

import features from "../features/whyChooseUsFeature"
import WhyChooseUsPreview from "./WhyChooseUsPreview"



const WhyChooseUs = () => {
  

  return (
    <section className="bg-linear-to-b from-white/95 via-white to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/50 rounded-full mb-6">
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs uppercase bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
              Why choose SmartCoach360?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Build your </span>{" "}
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">coaching business</span>
            <br />
            <span className="text-gray-900">we'll handle the hard stuff </span>{" "}
           
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            we take care of the boring but critical work (payments, members, scheduling, reports, apps, integrations, and security) so you can focus on coaching, growing, and delivering real results.
          </p>
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

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  feature.premium 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-purple-50 text-purple-600'
                }`}>
                  {feature.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {feature.description}
              </p>

              {/* Preview Card */}
              <div className="bg-purple-100 rounded-lg p-4 min-h-62.5 flex items-center justify-center">
                <WhyChooseUsPreview preview={feature.preview} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;