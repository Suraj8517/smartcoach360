import React from "react";
import { Users, ArrowRight, TrendingUp, Zap, Shield, MessageCircle, Lock, CheckCircle, Activity, Smartphone, Mail, Phone } from "lucide-react";
import video from '../assets/app-images/video.mp4'
import { Package, PackageOpen, Check, FileText } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
  {
    title: "Integrations",
    description:
      "Integrate effortlessly with all your favorite tools from payment gateways and communication apps to analytics platforms and automation services.",
    icon: Zap,
    badge: "Connect tools",
    preview: {
      type: "integration",
      items: [
        { name: "Stripe", icon: "💳" },
        { name: "PayPal", icon: "💰" },
        { name: "Zoom", icon: "📹" },
        { name: "Calendar", icon: "📅" }
      ]
    }
  },
  {
    title: "Diagnostic Reports",
    description:
      "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly.",
    icon: TrendingUp,
    badge: "View reports",
    preview: {
      type: "chart",
      metrics: [
        { label: "Blood Work", value: 95 },
        { label: "Body Comp", value: 78 },
        { label: "Vitals", value: 88 },
        { label: "Progress", value: 92 }
      ]
    }
  },
  {
    title: "Security",
    description:
      "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage.",
    icon: Shield,
    badge: "Security overview",
    preview: {
      type: "security",
      features: ["End-to-end encryption", "2FA", "HIPAA Compliant", "Secure Storage"]
    }
  },
  {
    title: "Free Resources",
    description:
      "Unlock a complete library of premium resources designed to help you scale recipe collections, workout templates, meal planners.",
    icon: FileText,
    badge: "Quick Start Kits",
    preview: {
      type: "resources",
      count: "500+"
    }
  },
  {
    title: "Customer Support",
    description:
      "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp.",
    icon: MessageCircle,
    badge: "Contact support",
    preview: {
      type: "support",
      channels: [
        { name: "Live Chat", icon: MessageCircle },
        { name: "Phone", icon: Phone },
        { name: "Email", icon: Mail },
        { name: "WhatsApp", icon: Smartphone }
      ]
    }
  },
  {
    title: "Branded App",
    description:
      "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint.",
    icon: Users,
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
            <span className="text-gray-900">we'll handle the hard stuff </span>{" "}
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
              <div className="bg-purple-100 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
                
{/* DIAGNOSTIC REPORTS - Chart Animation */}
{feature.preview.type === "chart" && (
  <div className="w-full h-full flex flex-col items-center justify-center relative py-2">
    
    {/* Tick badge */}
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 z-10">
      <Check size={14} strokeWidth={3} />
    </div>

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-3">Real-time Reports</div>

    {/* Chart bars with numbers */}
    <div className="flex items-end justify-center gap-2.5 h-24 mb-2">
      {feature.preview.metrics.map((metric, i) => (
        <div key={i} className="flex flex-col-reverse items-center gap-0.5 h-full justify-start">
          <div className="text-[9px] text-gray-600 font-medium text-center w-11 truncate mt-1">
            {metric.label}
          </div>
          
          <div className="text-sm font-bold text-purple-700">
            {metric.value}%
          </div>
          
          <div className="relative w-7 flex-1 flex flex-col justify-end overflow-hidden">
            <div 
              className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md transition-all duration-700 ease-out h-0 group-hover:opacity-100 opacity-0"
              style={{
                '--bar-height': `${metric.value}%`
              }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Bottom stats */}
    <div className="flex items-center gap-1.5 text-[10px] text-purple-700 font-medium mt-1">
      <Activity size={12} className="group-hover:animate-pulse" />
      <span>Live diagnostics</span>
    </div>

    <style>{`
      .group:hover .flex-1 > div {
        height: var(--bar-height) !important;
      }
    `}</style>
  </div>
)}


{/* INTEGRATIONS */}
{feature.preview.type === "integration" && (
  <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">
    
    {/* Tick badge */}
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 z-10">
      <Check size={14} strokeWidth={3} />
    </div>

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-4">Seamless Integrations</div>


    <div className="relative w-full h-36 flex items-center justify-center">
      

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-purple-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute w-32 h-32 rounded-full border border-purple-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute w-40 h-40 rounded-full border border-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      </div>

      {/* Central logo - Stays centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
        {/* Replace this with your actual logo image */}
        <div className="text-white font-bold text-sm">SC</div>
        {/* Or use an img tag: <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8" /> */}
      </div>

      {/* Integration icons positioned in circular orbit - All relative to absolute center */}
      
      {/* Icon 1 - Top (0 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg)',
          animation: 'float1 3s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125 border border-gray-100">
          <div className="text-orange-500 text-sm">💳</div>
        </div>
      </div>

      {/* Icon 2 - Top Right (45 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(45deg) translateX(60px) rotate(-45deg)',
          animation: 'float2 3.2s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-black text-xs font-bold">M</div>
        </div>
      </div>

      {/* Icon 3 - Right (90 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(90deg) translateX(60px) rotate(-90deg)',
          animation: 'float3 2.8s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-purple-600 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-sm">📊</div>
        </div>
      </div>

      {/* Icon 4 - Bottom Right (135 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(135deg) translateX(60px) rotate(-135deg)',
          animation: 'float4 3.5s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-xs font-bold">W</div>
        </div>
      </div>

      {/* Icon 5 - Bottom (180 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(180deg) translateX(60px) rotate(-180deg)',
          animation: 'float5 3.1s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-orange-500 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-sm">⚡</div>
        </div>
      </div>

      {/* Icon 6 - Bottom Left (225 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(225deg) translateX(60px) rotate(-225deg)',
          animation: 'float6 2.9s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125 border border-gray-100">
          <div className="text-lg">📦</div>
        </div>
      </div>

      {/* Icon 7 - Left (270 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(270deg) translateX(60px) rotate(-270deg)',
          animation: 'float7 3.3s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-purple-500 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-xs font-bold">M</div>
        </div>
      </div>

      {/* Icon 8 - Top Left (315 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-7 h-7"
        style={{
          transform: 'translate(-50%, -50%) rotate(315deg) translateX(60px) rotate(-315deg)',
          animation: 'float8 3.4s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-blue-600 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-xs font-bold">S</div>
        </div>
      </div>

      {/* Additional outer ring icons */}
      
      {/* Outer Icon 1 (30 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-6 h-6"
        style={{
          transform: 'translate(-50%, -50%) rotate(30deg) translateX(75px) rotate(-30deg)',
          animation: 'float9 3.6s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125 border border-gray-100">
          <div className="text-xs">G</div>
        </div>
      </div>

      {/* Outer Icon 2 (150 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-6 h-6"
        style={{
          transform: 'translate(-50%, -50%) rotate(150deg) translateX(75px) rotate(-150deg)',
          animation: 'float10 2.7s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-teal-700 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-[10px] font-bold">Z</div>
        </div>
      </div>

      {/* Outer Icon 3 (260 degrees) */}
      <div 
        className="absolute left-1/2 top-1/2 w-6 h-6"
        style={{
          transform: 'translate(-50%, -50%) rotate(260deg) translateX(75px) rotate(-260deg)',
          animation: 'float11 3.8s ease-in-out infinite'
        }}
      >
        <div className="w-full h-full bg-red-500 rounded-full shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-125">
          <div className="text-white text-xs">📧</div>
        </div>
      </div>
    </div>

    {/* Bottom text */}
    <div className="mt-2 text-[10px] text-purple-700 font-medium opacity-70 group-hover:opacity-100 transition-opacity">
      Connect all your tools
    </div>

    {/* Floating animation keyframes */}
    <style>{`
      @keyframes float1 {
        0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg) translateY(-8px); }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(-50%, -50%) rotate(45deg) translateX(60px) rotate(-45deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(45deg) translateX(60px) rotate(-45deg) translateY(-6px); }
      }
      @keyframes float3 {
        0%, 100% { transform: translate(-50%, -50%) rotate(90deg) translateX(60px) rotate(-90deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(90deg) translateX(60px) rotate(-90deg) translateY(-7px); }
      }
      @keyframes float4 {
        0%, 100% { transform: translate(-50%, -50%) rotate(135deg) translateX(60px) rotate(-135deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(135deg) translateX(60px) rotate(-135deg) translateY(-9px); }
      }
      @keyframes float5 {
        0%, 100% { transform: translate(-50%, -50%) rotate(180deg) translateX(60px) rotate(-180deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(180deg) translateX(60px) rotate(-180deg) translateY(-8px); }
      }
      @keyframes float6 {
        0%, 100% { transform: translate(-50%, -50%) rotate(225deg) translateX(60px) rotate(-225deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(225deg) translateX(60px) rotate(-225deg) translateY(-7px); }
      }
      @keyframes float7 {
        0%, 100% { transform: translate(-50%, -50%) rotate(270deg) translateX(60px) rotate(-270deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(270deg) translateX(60px) rotate(-270deg) translateY(-8px); }
      }
      @keyframes float8 {
        0%, 100% { transform: translate(-50%, -50%) rotate(315deg) translateX(60px) rotate(-315deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(315deg) translateX(60px) rotate(-315deg) translateY(-6px); }
      }
      @keyframes float9 {
        0%, 100% { transform: translate(-50%, -50%) rotate(30deg) translateX(75px) rotate(-30deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(30deg) translateX(75px) rotate(-30deg) translateY(-7px); }
      }
      @keyframes float10 {
        0%, 100% { transform: translate(-50%, -50%) rotate(150deg) translateX(75px) rotate(-150deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(150deg) translateX(75px) rotate(-150deg) translateY(-8px); }
      }
      @keyframes float11 {
        0%, 100% { transform: translate(-50%, -50%) rotate(260deg) translateX(75px) rotate(-260deg) translateY(0px); }
        50% { transform: translate(-50%, -50%) rotate(260deg) translateX(75px) rotate(-260deg) translateY(-7px); }
      }
    `}</style>
  </div>
)}


{/* SECURITY  */}
{feature.preview.type === "security" && (
  <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">
    
    {/* Tick badge */}
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 z-10">
      <Check size={14} strokeWidth={3} />
    </div>

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-3">Enterprise Security</div>

    {/* Shield with animated layers */}
    <div className="relative w-12 h-12 mb-3">
      
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-purple-300/40 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="absolute inset-0 rounded-full bg-purple-400/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
      
      {/* Main shield */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl transform rotate-45 transition-all duration-500 group-hover:rotate-[50deg] group-hover:scale-110 shadow-lg">
        </div>
        
        {/* Shield icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield size={28} className="text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110" fill="white" strokeWidth={0} />
        </div>
        
        {/* Lock overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
          <Lock size={14} className="text-purple-200" strokeWidth={3} />
        </div>
      </div>
    </div>

    {/* Security features*/}
    <div className="space-y-1 w-full px-2">
      {feature.preview.features.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-1.5 text-[10px] text-gray-700 font-medium transition-all duration-300"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-600 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-500" style={{ transitionDelay: `${i * 80}ms` }}></div>
          <span className="group-hover:text-purple-900 transition-colors" style={{ transitionDelay: `${i * 80}ms` }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
)}


{/* CUSTOMER SUPPORT */}
{feature.preview.type === "support" && (
  <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">
    
    {/* Tick badge */}
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 z-10">
      <Check size={14} strokeWidth={3} />
    </div>

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-2">24/7 Support</div>

    {/* Central support icon with pulse */}
    <div className="relative w-14 h-14 mb-3">
      
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-purple-400/30 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
      
      {/* Main circle */}
      <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
        <MessageCircle size={26} className="text-white" strokeWidth={2} />
        
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-1.5 w-full px-2">
      {feature.preview.channels.map((channel, i) => {
        const IconComponent = channel.icon;
        return (
          <div
            key={i}
            className="flex items-center gap-1 px-1.5 py-1 bg-white/50 rounded-md transition-all duration-300 group-hover:bg-white group-hover:shadow-sm"
            style={{
              transitionDelay: `${i * 60}ms`
            }}
          >
            <IconComponent size={12} className="text-purple-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
            <span className="text-[9px] font-medium text-gray-700">{channel.name}</span>
          </div>
        );
      })}
    </div>
  </div>
)}


{feature.preview.type === "resources" && (
  <div className="group relative p-3 bg-purple-200 rounded-lg">

    <div
      className="
        absolute -top-2 -right-2
        w-6 h-6
        rounded-full
        bg-purple-500
        flex items-center justify-center
        text-white
        shadow-md
        scale-0 opacity-0
        transition-all duration-300
        group-hover:scale-100 group-hover:opacity-100
        z-10
      "
    >
      <Check size={14} strokeWidth={3} />
    </div>

    <div className="text-center transition-all duration-300 group-hover:scale-105">

      <div className="relative w-12 h-16 mx-auto mt-2">

        {/* Package icon (closed → open) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          {/* Closed */}
          <Package
            size={50}
            strokeWidth={2}
            className="
              text-purple-800
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-75
            "
          />

          {/* Open */}
          <PackageOpen
            size={50}
            strokeWidth={2}
            className="
              absolute inset-0
              text-purple-700
              opacity-0 scale-75
              transition-all duration-300 delay-100
              group-hover:opacity-100
              group-hover:scale-100
            "
          />

        </div>

        {/* Files */}
        <div className="absolute inset-0 pointer-events-none">

          {/* File 1 */}
          <div
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-all duration-500 ease-out
              group-hover:opacity-100
              group-hover:-translate-y-15
              group-hover:-translate-x-3
              group-hover:-rotate-6
            "
          >
            <FileText className="text-purple-700"/>
            </div>

          {/* File 2 */}
          <div
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-all duration-500 ease-out delay-75
              group-hover:opacity-100
              group-hover:-translate-y-[3.5rem]
              group-hover:translate-x-2
              group-hover:rotate-3
            "
          >
            <FileText className="text-purple-500"/>
          </div>

          {/* File 3 */}
          <div
            className="
              absolute left-1/3 top-1/2
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-all duration-500 ease-out delay-150
              group-hover:opacity-100
              group-hover:-translate-y-10
              group-hover:translate-x-8
              group-hover:rotate-20
            "
          >
            <FileText className="text-purple-800"/>
          </div>

          {/* File 4 */}
          <div
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-all duration-500 ease-out delay-200
              group-hover:opacity-100
              group-hover:-translate-y-12
              group-hover:-translate-x-8
              group-hover:-rotate-12
            "
          >
            <FileText className="text-purple-400"/>
          </div>

        </div>
      </div>

      <div className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-purple-900 group-hover:scale-110">
        {feature.preview.count}
      </div>

      <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
        Resources Available
      </div>

    </div>
  </div>
)}


{/* APP - Keep original video */}
{feature.preview.type === "app" && (
  <div className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
    {/* Video Container */}
    <div className="relative w-full h-full">
      <video
        className="w-full h-full object-cover transition-all duration-500"
        autoPlay
        loop
        muted
        disablePictureInPicture
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