import React from 'react';
import { TrendingUp, Zap, Shield, Clock } from 'lucide-react';

export default function ProductSection() {
  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      metric: "8x",
      title: "Faster Admin Changes",
      subtitle: "without developer dependency"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      metric: "50%",
      title: "CRM Cost Savings",
      subtitle: "across all operations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      metric: "60%",
      title: "Reduction in First TAT",
      subtitle: "from intake to action"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      metric: "2.5 hrs",
      title: "Daily Time Saved",
      subtitle: "per staff member"
    }
  ];

  return (
    <div className="bg-linear-to-b from-white/95 via-white to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-200/50 rounded-full mb-3">
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase">
                          All-in-One Coaching Platform
                        </span>
                      </div>
          
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">
            Everything you need to run
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">people operations</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            From client management to payments — <span className="text-[#6E0ACE] font-semibold">SmartCoach360</span> streamlines your fitness & wellness business in one place.
          </p>
        </div>

        {/* Metrics Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50/50 to-white rounded-3xl p-5 border border-gray-300 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-start text-left">
                {/* Icon */}
                <div className={`${item.iconBg} ${item.iconColor} p-4 rounded-2xl mb-4`}>
                  {item.icon}
                </div>
                
                {/* Metric Number */}
                <div className="text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.metric}
                </div>
                
                {/* Title */}
                <p className="text-xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </p>
                
                {/* Subtitle */}
                <p className="text-base text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}