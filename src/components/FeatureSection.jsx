export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0f14] via-[#0f172a] to-[#020617] py-24 px-6">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          Intuitive Interface and <br />
          <span className="text-sky-400">Effortless Self-Management</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
          Effortel Mobile Suite is designed and engineered to streamline operations,
          accelerate revenue growth, and deliver exceptional customer experiences.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40"
            >
              <div className="mb-4 text-sky-400 text-sm font-semibold">
                {item.tag}
              </div>

              <h3 className="text-white text-lg font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-sky-400/10 blur-xl"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

const features = [
  {
    tag: "Powerful",
    title: "Self-Service Tools",
    desc: "Customer self-management for reduced support cost and faster resolution."
  },
  {
    tag: "Smart",
    title: "Account Control",
    desc: "Complete control over subscriptions, usage, and billing preferences."
  },
  {
    tag: "Secure",
    title: "Data Protection",
    desc: "Industry-grade security standards ensuring trust and compliance."
  }
];
