import {Package, PackageOpen, Check, FileText} from "lucide-react";


const ResourceComponentPreview = ({preview})=>{
    return(
        <div className="group relative p-3 rounded-lg bg-white/70 border border-purple-200">

    {/* Tick badge */}
    <div className="
      absolute -top-2 -right-2
      w-6 h-6 rounded-full bg-purple-500
      flex items-center justify-center text-white shadow-md
      scale-0 opacity-0 transition-all duration-300
      group-hover:scale-100 group-hover:opacity-100 z-10">
      <Check size={14} strokeWidth={3} />
    </div>

    <div className="text-center transition-all duration-300 group-hover:scale-[1.02]">

      {/* Center block */}
      <div className="relative w-14 h-20 mx-auto mt-2">

        {/* Package */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <Package
            size={54}
            strokeWidth={1.2}
            className="
              text-purple-800
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
            "
          />

          <PackageOpen
            size={54}
            strokeWidth={1.2}
            className="
              absolute inset-0
              text-purple-700
              opacity-0 scale-90
              transition-all duration-300 delay-100
              group-hover:opacity-100
              group-hover:scale-100
            "
          />
        </div>

        {/* Flying files */}
        <div className="absolute inset-0 pointer-events-none">

          {/* file 1 */}
          <div className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            opacity-0
            transition-all duration-500 ease-out
            group-hover:opacity-100
            group-hover:-translate-y-12
            group-hover:-translate-x-6
            group-hover:-rotate-12
          ">
            <FileText className="text-purple-700" strokeWidth={1.2} />
          </div>

          {/* file 2 */}
          <div className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            opacity-0
            transition-all duration-500 ease-out delay-75
            group-hover:opacity-100
            group-hover:-translate-y-16
            group-hover:translate-x-3
            group-hover:rotate-6
          ">
            <FileText className="text-purple-600" strokeWidth={1.2} />
          </div>

          {/* file 3 */}
          <div className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            opacity-0
            transition-all duration-500 ease-out delay-150
            group-hover:opacity-100
            group-hover:-translate-y-10
            group-hover:translate-x-4
            group-hover:rotate-12
          ">
            <FileText className="text-purple-500" strokeWidth={1.2} />
          </div>

          {/* file 4 */}
          <div className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            opacity-0
            transition-all duration-500 ease-out delay-200
            group-hover:opacity-100
            group-hover:-translate-y-14
            group-hover:-translate-x-10
            group-hover:-rotate-6
          ">
            <FileText className="text-purple-400" strokeWidth={1.2} />
          </div>

        </div>
      </div>

      <div className="mt-1 text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-purple-900">
        {preview.count}
      </div>

      <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
        Resources Available
      </div>

    </div>
  </div>
    )
}
export default ResourceComponentPreview