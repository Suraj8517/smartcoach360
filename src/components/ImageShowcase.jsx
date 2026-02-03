import { useState, useRef ,useEffect} from "react";
import client from "../assets/crm-images/clients.png";
import leads from "../assets/crm-images/leads.png";
import payments from "../assets/crm-images/payments.webp";
import client_progress from "../assets/crm-images/client-progress.webp";
import workflow from "../assets/crm-images/Workflow.webp";
import engage from "../assets/crm-images/engage.png";
import finance from "../assets/crm-images/finance.webp";
import realtime from "../assets/crm-images/Lead Management.png";
import interaction from "../assets/crm-images/interactions.png";
import { Users, UserCheck ,CalendarCheck2,ChartSpline,CreditCard,Workflow,MessageCircle,Banknote,MessageCircleQuestionMark} from "lucide-react";
 
export default function ImageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef(null);
  
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
      image: leads,
      icon: <UserCheck className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: client,
      icon:<Users className="w-4 h-4"/>,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: interaction,
      icon: <CalendarCheck2 className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: client_progress,
      icon: <ChartSpline className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: payments,
      icon: <CreditCard className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: workflow,
      icon: <Workflow className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: engage,
      icon: <MessageCircle className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: finance,
      icon: <Banknote className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
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
      image: realtime,
      icon: <MessageCircleQuestionMark className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    }
  ];
const AUTO_SWITCH_DELAY = 3500;   
const RESUME_DELAY = 5000; 
const intervalRef = useRef(null);
const resumeTimeoutRef = useRef(null);

useEffect(() => {
  startAutoSwitch();

  return () => {
    clearInterval(intervalRef.current);
    clearTimeout(resumeTimeoutRef.current);
  };
}, []);
const startAutoSwitch = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, AUTO_SWITCH_DELAY);
};

const stopAutoSwitch = () => {
  clearInterval(intervalRef.current);
};

const handleSelect = (index) => {
  setActiveIndex(index);

  // stop auto switching
  stopAutoSwitch();

  // reset resume timer
  clearTimeout(resumeTimeoutRef.current);

  // resume auto switch after delay
  resumeTimeoutRef.current = setTimeout(() => {
    startAutoSwitch();
  }, RESUME_DELAY);
};


  const activeFeature = features[activeIndex];

  return (
<section className="w-full max-w-7xl mx-auto px-4 py-16 relative hidden sm:block">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-blue-400 to-purple-500 opacity-10 blur-3xl rounded-full"></div>
      </div>
     
      <div className="lg:px-20 lg:mx-20 xl:mx-10 xl:px-10 items-center ">
      
        <div className="relative animate-slideIn">
          {/* browser window */}
          <div className="rounded-2xl overflow-hidden  shadow-2xl bg- border border-gray-200 backdrop-blur-sm">
            {/* Browser Chrome Header */}
            <div className="bg-linear-to-b from-gray-50 to-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shadow-sm"></div>
              </div>

              {/* Browser Tab */}
              <div className="flex-1 flex items-center gap-2 ml-2">
                <div className="bg-white px-4 py-2 rounded-t-xl shadow-sm border-t border-x border-gray-200 flex items-center gap-2.5 max-w-xs">
                  <div className={`w-2 h-2 rounded-full bg-linear-to-br ${activeFeature.color}`}></div>
                  <span className="text-xs text-gray-700 font-semibold truncate capitalize">
                    {activeFeature.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Address Bar */}
            <div className="bg-white px-4 py-2.5 border-b border-gray-200">
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 border border-gray-200/50">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-600 font-mono flex-1">
                  smartcoach360.ai/{activeFeature.subtitle.replace(/\s+/g, '-')}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
            
<div className="grid grid-cols-[160px_1fr] gap-3">
 {/*buttons */}
        <div className="ml-1 relative w-40">
          <div 
            ref={tabsRef}
            className="grid pb-4"
          >
            {features.map((feature, index) => (
              <button
                key={feature.subtitle}
                onClick={() => handleSelect(index)}
               className={`
  group relative shrink-0 snap-center
  px-2 py-2.5
  font-medium text-[0.70rem]
  transition-all duration-300 ease-out 
  ${
    activeIndex === index
      ? `bg-purple-200 text-purple-900 rounded-lg
         `
      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
  }
`}

              >
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="capitalize tracking-wide">
                    {feature.subtitle}
                  </span>
                </div>
                
                {/* Active indicator dot 
                {activeIndex === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-700 rounded-full shadow-sm animate-pulse"></div>
                )}*/}
              </button>
            ))}
          </div>

          </div>
            {/*Image */}
            <div className="relative p-3 overflow-hidden ml-2">
  <img
    key={activeFeature.image}
    src={activeFeature.image}
    alt={activeFeature.subtitle}
    className="
      w-full h-96 object-cover
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      opacity-100
      animate-imageFade
    "
  />

              <div className="absolute bottom-6 right-6 max-w-sm bg-white/10 backdrop-blur-xl text-black p-6 rounded-2xl border border-black/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl text-[#6E0ACE]">{activeFeature.icon}</span>
                  <p className="text-xs uppercase tracking-widest font-bold bg-linear-to-r from-[#6E0ACE] to-blue-500 bg-clip-text text-transparent">
                    {activeFeature.subtitle}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-black/50">
                  {activeFeature.description}
                </p>
              </div>
            </div>

</div>
            
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
          @keyframes imageFade {
  from {
    opacity: 0;
    transform: scale(1.03) translateY(6px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-imageFade {
  animation: imageFade 0.6s cubic-bezier(0.22,1,0.36,1);
}
  @keyframes overlayFade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-overlayFade {
  animation: overlayFade 0.45s ease-out;
}


      `}</style>
    </section>
  );
}