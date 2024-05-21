import React, { useEffect } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const typeMapping = {
    yliubleny: "Улюблені",
    trendovi: "Трендові"
};

export default function FeaturedProducts({ type }) {
    const displayType = typeMapping[type] || type;
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    if (!data) {
        return null;
    }

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{displayType} товари</h1>
            </div>
            <div className="bottom">
                {error
                    ? "ERROR"
                    : loading
                        ? "loading"
                        : data.map(item => (
                            <Card item={item} key={item.id} />
                        ))}
            </div>
        </div>
    );
}