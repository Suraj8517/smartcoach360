import { Check, Activity } from "lucide-react";

const DiagonosticReportPreview = ({ preview })=>{
    return(

  <div className="w-full h-full flex flex-col items-center justify-center relative py-2">
    

    {/* Title */}
    <div className="text-xs font-bold text-purple-900 mb-3">Real-time Reports</div>

    <div className="flex items-end justify-center gap-2.5 h-24 mb-2">
      {preview.metrics.map((metric, i) => (
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
export default DiagonosticReportPreview