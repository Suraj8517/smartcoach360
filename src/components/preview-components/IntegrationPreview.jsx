import { Check } from "lucide-react";
import zoom from "../../assets/logos/integration logos/zoom.png"
import Twilio from "../../assets/logos/integration logos/Twilio.png"
import survey from "../../assets/logos/integration logos/survey.svg"
import razorpay from "../../assets/logos/integration logos/razorpay.png"
import plivo from "../../assets/logos/integration logos/plivo.png"
import sheet from "../../assets/logos/integration logos/googlesheet.png"
import gfit from "../../assets/logos/integration logos/heart.png"
import desk from "../../assets/logos/integration logos/desk.svg"
import logo from "../../assets/logo.png"
import "../../css/integrationPreview.css"
const IntergrationPreview = () => {
  const INNER = 70;

  return (
   <div className="w-full h-full flex flex-col items-center justify-center group relative py-2">
   
         
   
         {/* Title */}
         <div className="text-xs font-bold text-purple-900 mb-4">
           Seamless Integrations
         </div>
   
         <div className="relative w-full h-36 flex items-center justify-center">
   
           {/* rings */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <div className="w-18 h-18 rounded-full border border-purple-400 transition-opacity duration-500" />
             <div className="absolute w-26 h-26 rounded-full border border-purple-300   transition-opacity duration-700" />
             <div className="absolute w-34 h-34 rounded-full border border-purple-200 opacity-100  transition-opacity duration-1000" />
           </div>
   
           {/* center */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10  flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20">
               <img src={logo}></img>
           </div>
   
   
           <div className="absolute left-1/2 top-1/2 w-12 h-6"
             style={{
               transform: `translate(-50%, -50%) rotate(0deg) translateX(${INNER}px) rotate(0deg)`,
               animation: 'float1 3s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
              <img src={zoom}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-12 h-12"
             style={{
               transform: `translate(-50%, -50%) rotate(45deg) translateX(${INNER}px) rotate(-45deg)`,
               animation: 'float2 3.2s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={plivo}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-7 h-7"
             style={{
               transform: `translate(-50%, -50%) rotate(90deg) translateX(${INNER}px) rotate(-90deg)`,
               animation: 'float3 2.8s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={gfit}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-12 h-12"
             style={{
               transform: `translate(-50%, -50%) rotate(135deg) translateX(${INNER}px) rotate(-135deg)`,
               animation: 'float4 3.5s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={sheet}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-12 h-7"
             style={{
               transform: `translate(-50%, -50%) rotate(180deg) translateX(${INNER}px) rotate(-180deg) `,
               animation: 'float5 3.1s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={desk}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-10 h-7"
             style={{
               transform: `translate(-50%, -50%) rotate(225deg) translateX(${INNER}px) rotate(-225deg)`,
               animation: 'float6 2.9s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={survey}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-12 h-7"
             style={{
               transform: `translate(-50%, -50%) rotate(270deg) translateX(${INNER}px) rotate(-270deg)`,
               animation: 'float7 3.3s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={razorpay}></img>
             </div>
           </div>
   
           <div className="absolute left-1/2 top-1/2 w-11 h-7"
             style={{
               transform: `translate(-50%, -50%) rotate(315deg) translateX(${INNER}px) rotate(-315deg)`,
               animation: 'float8 3.4s ease-in-out infinite'
             }}>
             <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition">
               <img src={Twilio}></img>
             </div>
           </div>
   
           
   
         </div>
   
         <div className="mt-2 text-[10px] text-purple-700 font-medium opacity-70 group-hover:opacity-100 transition-opacity">
           and many more integrations
         </div>

   
       </div>
  );
};

export default IntergrationPreview;
