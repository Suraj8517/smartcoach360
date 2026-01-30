import React from "react";
import { Users, ArrowRight } from "lucide-react";
import video from '../assets/app-images/video.mp4'
const WhyChooseUs = () => {
  const features = [
  {
    title: "Integrations",
    description:
      "Integrate effortlessly with all your favorite tools—from payment gateways and communication apps to analytics platforms and automation services.",
    icon: "🔗",
    badge: "Connect tools",
    preview: {
      type: "integration",
      items: ["Stripe", "PayPal", "Zoom", "Calendar"]
    }
  },
  {
    title: "Diagnostic Reports",
    description:
      "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly.",
    icon: "📊",
    badge: "View reports",
    preview: {
      type: "chart",
      value: "$12,847",
      label: "Total Revenue"
    }
  },
  {
    title: "Security",
    description:
      "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage.",
    icon: "🔒",
    badge: "Security overview",
    preview: {
      type: "security",
      features: ["End-to-end encryption", "2FA", "Compliance"]
    }
  },
  {
    title: "Free Resources",
    description:
      "Unlock a complete library of premium resources designed to help you scale—recipe collections, workout templates, meal planners.",
    icon: "📚",
    badge: "Browse library",
    preview: {
      type: "resources",
      count: "500+"
    }
  },
  {
    title: "Customer Support",
    description:
      "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp.",
    icon: "💬",
    badge: "Contact support",
    preview: {
      type: "support",
      price: "$99",
      plan: "Premium"
    }
  },
  {
    title: "Branded App",
    description:
      "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint.",
    icon: "📱",
    badge: "Launch your app",
    premium: true,
    preview: {
      type: "app",
      gradient: true
    }
  }
];


  return (
    <section className="bg-gradient-to-b from-white/95 via-white to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/50 rounded-full mb-6">
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
              Why choose SmartCoach360?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Build your </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">coaching business</span>
            <br />
            <span className="text-gray-900">we’ll handle the hard stuff </span>{" "}
            <span className="text-4xl">💪</span>
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
              <div className="bg-gray-50 rounded-lg p-4 min-h-[140px] flex items-center justify-center">
                {feature.preview.type === "chart" && (
  <div className="text-center w-full transition-all duration-300 group-hover:scale-105">
    <div className="text-2xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-indigo-600">
      {feature.preview.value}
    </div>
    <div className="flex items-center justify-center gap-2 mb-2">
      <div className="relative w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded transition-all duration-500 group-hover:shadow-lg group-hover:shadow-green-400/50 group-hover:rotate-3">
        <div className="absolute inset-0 bg-white/20 rounded animate-pulse"></div>
      </div>
      <div className="text-xs text-gray-500 transition-all duration-300 group-hover:text-green-600 group-hover:font-semibold">
        ↑ 23%
      </div>
    </div>
    <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
      {feature.preview.label}
    </div>
  </div>
)}

{feature.preview.type === "integration" && (
  <div className="w-full transition-all duration-300 group-hover:scale-105">
    <div className="bg-white rounded-lg p-3 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-100">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg">
          {feature.icon}
        </div>
        <div className="text-xs font-semibold transition-colors duration-300 group-hover:text-indigo-600">
          Zentric Developer
        </div>
      </div>
      <div className="space-y-1">
        {feature.preview.items.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="w-1 h-1 bg-gray-400 rounded-full transition-all duration-300 group-hover:bg-indigo-500 group-hover:w-1.5 group-hover:h-1.5"></div>
            <span className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

{feature.preview.type === "security" && (
  <div className="w-full bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-100 group-hover:scale-105">
    <div className="text-sm font-semibold mb-3 transition-colors duration-300 group-hover:text-indigo-600">
      Build Mastery
    </div>
    <div className="space-y-2">
      {feature.preview.features.map((item, i) => (
        <div 
          key={i} 
          className="flex items-center gap-2 opacity-0 animate-fadeIn transition-all duration-300 hover:translate-x-1"
          style={{ 
            animationDelay: `${i * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <div className="w-5 h-5 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-xs text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
)}

{feature.preview.type === "support" && (
  <div className="w-full bg-white rounded-lg p-4 shadow-sm text-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-100 group-hover:scale-105">
    <div className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 text-xs px-2 py-1 rounded mb-2 transition-all duration-300 group-hover:from-orange-200 group-hover:to-orange-100 group-hover:shadow-md">
      Featured
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1 transition-all duration-300 group-hover:text-indigo-600 group-hover:scale-110">
      {feature.preview.price}
    </div>
    <div className="text-xs text-gray-500 mb-3 transition-colors duration-300 group-hover:text-gray-700">
      {feature.preview.plan}
    </div>
    <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs py-2 rounded-lg transition-all duration-300 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0">
      Subscribe
    </button>
  </div>
)}

{feature.preview.type === "resources" && (
  <div className="text-center transition-all duration-300 group-hover:scale-105">
    <div className="text-4xl mb-2 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
      📦
    </div>
    <div className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-indigo-600 group-hover:scale-110">
      {feature.preview.count}
    </div>
    <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
      Resources Available
    </div>
  </div>
)}

{feature.preview.type === "app" && (
  <div className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
    {/* Video Container */}
    <div className="relative w-full h-full">
      <video
        className="w-full h-full object-cover transition-all duration-500"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
    

    </div>
  </div>
)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;