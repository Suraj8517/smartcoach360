import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import FeatureShowcase from "./components/ImageShowcase";
import AppSection from "./components/appShowcaseSection";
import WhyChooseUs from "./components/whyChooseUs";
import ResponsiveFeatureSection from './components/ResponsiveFeatureSection';
import ForWhomSection from "./components/forWhomSection";
 
export default function HomePage(){
    return(
<div className="min-h-screen bg-white-50 text-gray-900 antialiased">
    <NavBar/>
    <HeroSection/>
            <ProductSection/>
            <WhyChooseUs/>
    <AppSection/>
    <ForWhomSection/>
        <ResponsiveFeatureSection/>

    </div>
    );
}