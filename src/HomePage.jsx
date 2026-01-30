import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ScrollFeature from "./components/scrollFeature";
import FeatureSection from "./components/FeatureSection";
import ProductSection from "./components/ProductSection";
import FeatureShowcase from "./components/ImageShowcase";
import AppSection from "./components/appShowcaseSection";
import WhyChooseUs from "./components/whyChooseUs";

export default function HomePage(){
    return(
<div className="min-h-screen bg-white-50 text-gray-900 antialiased">
    <NavBar/>
    <HeroSection/>
            <ProductSection/>
    <ScrollFeature/>
    <AppSection/>
    <WhyChooseUs/>
    </div>
    );
}