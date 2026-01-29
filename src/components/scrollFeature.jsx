import React, { useEffect, useRef, useState } from 'react';
import client from "../assets/crm-images/clients.png";
import leads from "../assets/crm-images/leads.png";
import payments from "../assets/crm-images/payments.webp";
import client_progress from "../assets/crm-images/client-progress.webp";
import workflow from "../assets/crm-images/Workflow.webp";
import engage from "../assets/crm-images/engage.png";
import finance from "../assets/crm-images/finance.webp";
import realtime from "../assets/crm-images/Lead Management.png";
import interaction from "../assets/crm-images/interactions.png";

const ScrollFeatureSection = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return; // Skip scroll handling on mobile
      
      const midpoint = window.innerHeight / 2;

      featureRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < midpoint && rect.bottom > midpoint) {
          setActiveFeatureIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && activeFeatureIndex < features.length - 1) {
        // Swipe left - next feature
        setActiveFeatureIndex(prev => prev + 1);
      } else if (diff < 0 && activeFeatureIndex > 0) {
        // Swipe right - previous feature
        setActiveFeatureIndex(prev => prev - 1);
      }
    }
  };

  // Scroll to active feature on mobile when index changes
  useEffect(() => {
    if (isMobile && swipeContainerRef.current) {
      const container = swipeContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      const scrollPosition = (scrollWidth / features.length) * activeFeatureIndex;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeFeatureIndex, isMobile]);

  const features = [
  {
    title:
      "Capture, organize, and convert every potential member into a paying client with a structured lead workflow.",
    subtitle: "lead management",
    description:
      "Bring all your leads from trials, social media, and referrals into one centralized system. Track every interaction, assign ownership, and follow up at the right time to ensure no opportunity slips through the cracks.",
    details: [
      "Capture leads from forms, social media, and referrals",
      "Track lead status from inquiry to conversion",
      "Assign leads to coaches or sales staff",
      "Automate follow-ups and reminders"
    ],
    image: leads
  },
  {
    title:
      "Maintain complete, centralized client profiles that give your team full visibility into every member's journey.",
    subtitle: "client management",
    description:
      "Store and manage all client information — from personal details to workouts, diet plans, and engagement history — in one unified dashboard that's accessible anytime your team needs it.",
    details: [
      "Store personal details and membership information",
      "Manage workout and diet plans in one place",
      "Track attendance and engagement history",
      "Access client data anytime, anywhere"
    ],
    image: client
  },
  {
    title:
      "Enable seamless booking and scheduling of sessions, consultations, and classes without manual coordination.",
    subtitle: "appointment scheduling",
    description:
      "Simplify session management with an automated scheduling system that allows clients to book on their own while keeping trainers, classes, and availability perfectly organized.",
    details: [
      "Enable self-booking for clients",
      "Manage trainer and class availability",
      "Send automated reminders and confirmations",
      "Reduce no-shows with smart notifications"
    ],
    image: interaction
  },
  {
    title:
      "Track, analyze, and showcase client fitness progress with clear, data-driven performance insights.",
    subtitle: "client progress tracking",
    description:
      "Monitor weight, measurements, workouts, and nutrition adherence through visual dashboards and reports that help trainers make smarter decisions and motivate clients with visible results.",
    details: [
      "Track weight, BMI, and body measurements",
      "Monitor workout and diet compliance",
      "Visualize progress with charts and reports",
      "Share progress updates with clients"
    ],
    image: client_progress
  },
  {
    title:
      "Manage memberships, billing, and renewals with a streamlined and transparent payment system.",
    subtitle: "payment tracking",
    description:
      "Automate invoices, track payments, and send timely reminders to ensure smooth cash flow while maintaining a clear payment history for every client.",
    details: [
      "Track membership and package payments",
      "Generate automated invoices",
      "Send payment and renewal reminders",
      "Maintain complete payment history"
    ],
    image: payments
  },
  {
    title:
      "Automate repetitive operational tasks so your team can focus more on clients and growth.",
    subtitle: "workflow automation",
    description:
      "Eliminate manual follow-ups and routine admin work by automating reminders, check-ins, and daily workflows that keep your business running efficiently.",
    details: [
      "Automate trial follow-ups",
      "Send class and session reminders",
      "Schedule diet and workout check-ins",
      "Reduce manual administrative effort"
    ],
    image: workflow
  },
  {
    title:
      "Engage clients across multiple channels with consistent and timely communication tools.",
    subtitle: "communication tools",
    description:
      "Connect with clients through chat, email, and SMS from a single platform to share updates, reminders, and offers that keep them informed and engaged.",
    details: [
      "Chat with clients in real time",
      "Send bulk or individual messages",
      "Communicate via email and SMS",
      "Share updates, offers, and reminders"
    ],
    image: engage
  },
  {
    title:
      "Gain full visibility into your finances with structured tracking and insightful reporting.",
    subtitle: "finance management",
    description:
      "Monitor revenue, expenses, and outstanding dues with clear financial summaries that help you make informed business decisions with confidence.",
    details: [
      "Track revenues and payments",
      "Monitor outstanding dues",
      "Generate financial summaries",
      "Make informed business decisions"
    ],
    image: finance
  },
  {
    title:
      "Access real-time business insights that help you stay on top of performance from anywhere.",
    subtitle: "real-time insights",
    description:
      "View live dashboards that show memberships, active plans, renewals, and revenue performance across devices so you're always informed and in control.",
    details: [
      "View live membership statistics",
      "Track active plans and renewals",
      "Monitor revenue performance",
      "Access insights across devices"
    ],
    image: realtime
  }
];

  return (
    <div className="min-h-screen mt-8 pt-8">
      <div ref={sectionRef} className="relative lg:min-h-[400vh]">
        <div className="max-w-400 mx-auto px-6 lg:px-12 ">
          
          {/* Mobile Header */}
       
<div className="lg:hidden mb-6 flex justify-center">
  <div className="inline-block px-4 py-2 bg-[#6E0ACE] text-white text-sm font-semibold tracking-wider rounded-full">
    ALL CORE FEATURES
  </div>
</div>


          <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-10">

            {/* LEFT SECTION*/}
            <div className="hidden lg:block">
              <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
                <div className="py-12 lg:py-24 w-[320px] mt-4">
                  <div className="inline-block px-4 py-2 bg-[#6E0ACE] text-white text-sm font-semibold tracking-wider mb-6 rounded-full mt-4 ">
                    ALL CORE FEATURES
                  </div>

                  <div className="space-y-1 xl:mt-8">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          featureRefs.current[index]?.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                          })
                        }
                        className={`flex items-start gap-3 px-4 py-1.5 xl:py-5 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeatureIndex === index
                            ? "text-[#6E0ACE] bg-purple-50 scale-102"
                            : "text-slate-600 hover:text-purple-600 hover:bg-purple-50/50"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full my-auto transition-all  ${
                            activeFeatureIndex === index
                              ? "bg-[#6E0ACE] scale-150"
                              : "bg-slate-400"
                          }`}
                        />
                        <span
                          className={`text-lg tracking-wide capitalize ${
                            activeFeatureIndex === index ? "font-bold" : ""
                          }`}
                        >
                          {feature.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={swipeContainerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`${
                isMobile 
                  ? 'flex overflow-x-hidden snap-x snap-mandatory touch-pan-x' 
                  : 'space-y-14 pb-24 mt-12 pt-12'
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className={isMobile ? 'shrink-0 w-full snap-center px-2' : ''}
                >
                  <div className="bg-purple-100 rounded-3xl shadow-xl border border-purple-200 overflow-hidden p-5 lg:p-10">
                    <div className="p-4 lg:p-12 bg-linear-to-br from-purple-200 to-purple-300 rounded-3xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full max-h-100 object-contain rounded-2xl bg-white shadow-2xl"
                      />
                    </div>

                    <div className="pt-6">
                      <div className="inline-flex text-xs font-bold tracking-widest mb-3 rounded-3xl py-2 px-4 bg-purple-100 uppercase">
                        {feature.subtitle}
                      </div>

                      <h3 className="text-2xl font-bold text-purple-950 mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-base text-slate-600 mb-3">
                        {feature.description}
                      </p>

                      <ul className="space-y-1">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="font-bold text-slate-700 text-sm"><div className="flex items-start gap-3">
  <div className="w-3 h-3 rounded-full bg-purple-400 flex items-center justify-center shrink-0 mt-1">
    <svg
      className="w-2 h-2 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>

  <span className="font-bold text-slate-700">
    {detail}
  </span>
</div>

                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        
          {/* Mobile Navigation Dots */}
          <div className="lg:hidden flex justify-center gap-2 mb-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeFeatureIndex === index
                    ? 'w-8 h-2 bg-[#6E0ACE]'
                    : 'w-2 h-2 bg-slate-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScrollFeatureSection;