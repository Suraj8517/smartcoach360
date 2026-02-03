import React from "react";
import { Heart, Dumbbell, Salad, Sparkles, CircleQuestionMark } from "lucide-react";

export default function WhoIsItFor() {
  const professionals = [
    {
      icon: Salad,
      title: "Nutritionists & Dietitians",
      gradient: "from-purple-500 to-fuchsia-600",
    },
    {
      icon: Dumbbell,
      title: "Fitness Coaches & Personal Trainers",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Wellness Consultants",
      gradient: "from-fuchsia-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "Wellness Centers",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* background blobs – purple only */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-24 right-0 w-72 h-72 bg-fuchsia-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-200/50 rounded-full mb-3">
                        <CircleQuestionMark className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-xs font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase">
                           Who Is SmartCoach360 For?
                        </span>
                      </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">
            Designed for Wellness
            <br />
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> Professionals Like You</span>
          </h1>
          

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            SmartCoach360 is designed to support health and wellness professionals
            who want to{" "}
            <span className="font-semibold text-slate-900">
              streamline their practice
            </span>
            ,{" "}
            <span className="font-semibold text-slate-900">
              engage clients more effectively
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-900">
              grow their business
            </span>
            .
          </p>
        </div>

        {/* Flowing left / right list (no center line) */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {professionals.map((prof, index) => {
            const Icon = prof.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`max-w-xl mx-auto group flex items-center gap-2 sm:gap-6 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } transition-all duration-300`}
              >
                

                {/* content */}
                <div
                  className={`flex-1 ${
                    isEven ? "text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >  <div
                  className={`relative shrink-0 w-9 h-9 sm:w-12 sm:h-12 bg-linear-to-br ${prof.gradient} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${prof.gradient} rounded-full blur-lg opacity-40`}
                  />
                </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-purple-900 group-hover:text-purple-600 transition-colors">
                      {prof.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-base text-slate-600 mb-4">
            Ready to transform your wellness practice?
          </p>

          <button className="group relative px-8 py-3 bg-linear-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-semibold rounded-full text-sm sm:text-base hover:shadow-xl transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
