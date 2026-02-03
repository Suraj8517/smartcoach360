import { Users, TrendingUp, Zap, Shield, MessageCircle, Smartphone, Mail, Phone, FileText } from "lucide-react";


const features = [
  {
    title: "Integrations",
    description:
      "Integrate effortlessly with tools from payment gateways and communication apps to analytics platforms and automation services.",
    icon: Zap,
    badge: "Connect tools",
    preview: {
      type: "integration",
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
      "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage trusted by leading teams.",
    icon: Shield,
    badge: "Security overview",
    preview: {
      type: "security",
      features: ["End-to-end encryption", "2FA", "Secure Storage"]
    }
  },
  {
    title: "Free Resources",
    description:
      "Get instant access to premium resources including recipe collections, workout templates, and smart meal planners.",
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
export default features;
