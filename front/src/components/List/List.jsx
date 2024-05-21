import React from "react";
import useFetch from "../../hooks/useFetch";
import "./List.scss";
import Card from "../Card/Card";

export default function List({ subCats, maxPrice, sort, catId, searchQuery }) {
    const url = `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ''}`;

    const { data, loading, error } = useFetch(url);

    return (
        <div className="list">
            {loading ? (
                "Loading"
            ) : (
                data?.map((item) => <Card item={item} key={item.id} />)
            )}
        </div>
    );
}

