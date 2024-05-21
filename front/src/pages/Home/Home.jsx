import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.scss"
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <Categories />
            <FeaturedProducts type="yliubleny" />
            <FeaturedProducts type="trendovi" />
            <Contact />
        </div>
    )
}