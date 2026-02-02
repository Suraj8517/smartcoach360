import React, { useState } from 'react';
import client from "../assets/crm-images/clients.png";
import leads from "../assets/crm-images/leads.png";
import payments from "../assets/crm-images/payments.webp";
import client_progress from "../assets/crm-images/client-progress.webp";
import workflow from "../assets/crm-images/Workflow.webp";
import engage from "../assets/crm-images/engage.png";
import finance from "../assets/crm-images/finance.webp";
import realtime from "../assets/crm-images/Lead Management.png";
import interaction from "../assets/crm-images/interactions.png";

const MobileFeatureSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
      icon: "📊"
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
      icon: "👥"
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
      icon: "📅"
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
      icon: "📈"
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
      icon: "💳"
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
      icon: "⚙️"
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
      icon: "💬"
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
      icon: "💰"
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
      icon: "⚡"
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-200/50 rounded-full mb-4">
          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase">
            All-in-One Coaching Platform
          </span>
        </div>
        <h2 className="text-2xl font-bold text-purple-950 mb-2">
          Everything You Need to Grow
        </h2>
        <p className="text-slate-600 text-sm">
          Tap any feature to learn more
        </p>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4 max-w-md mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 ${
              expandedIndex === index
                ? 'border-purple-400 shadow-purple-200'
                : 'border-purple-100'
            }`}
          >
            {/* Card Header - Always Visible */}
            <div
              onClick={() => toggleExpand(index)}
              className="p-4 cursor-pointer active:scale-98 transition-transform"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>

                {/* Title and Subtitle */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wide mb-1">
                    {feature.subtitle}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {feature.title}
                  </p>
                </div>

                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              <div className="px-4 pb-4 space-y-4">
                {/* Image */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3">
                  <img
                    src={feature.image}
                    alt={feature.subtitle}
                    className="w-full rounded-lg shadow-md bg-white"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700 font-medium">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </div>
  );
};

export default MobileFeatureSection;
