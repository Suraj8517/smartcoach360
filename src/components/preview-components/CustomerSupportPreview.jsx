import {Check, MessageCircle, } from "lucide-react";


const CustomerSupportPreview = ({preview})=>{
    return(
        <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">
   

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-2">24/7 Support</div>

    {/* Central support icon with pulse */}
    <div className="relative w-14 h-14 mb-3">
      
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-purple-400/30 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
      
      {/* Main circle */}
      <div className="relative w-full h-full bg-linear-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
        <MessageCircle size={26} className="text-white" strokeWidth={2} />
        
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-1.5 w-full px-2">
      {preview.channels.map((channel, i) => {
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
    )
}
export default CustomerSupportPreview