import {Shield, Lock} from "lucide-react";


const SecurityPreview = ({preview})=>{
    return(
        <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-3">Enterprise Security</div>

    {/* Shield with animated layers */}
    <div className="relative w-12 h-12 mb-3">
      
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-purple-300/40 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="absolute inset-0 rounded-full bg-purple-400/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
      
      {/* Main shield */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-purple-800 rounded-xl transform rotate-45 transition-all duration-500 group-hover:rotate-50 group-hover:scale-110 shadow-lg">
        </div>
        
        {/* Shield icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield size={28} className="text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110" fill="white" strokeWidth={0} />
        </div>
        
        {/* Lock overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
          <Lock size={14} className="text-purple-400" strokeWidth={3} />
        </div>
      </div>
    </div>

    {/* Security features*/}
    <div className="space-y-1 w-full px-2">
      {preview.features.map((item, i) => (
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
    )
}
export default SecurityPreview