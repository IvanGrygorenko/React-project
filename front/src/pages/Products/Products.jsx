import React, { useState, useEffect, useRef } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from 'react-redux';

export default function Products() {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxprice] = useState(20000);
    const [sort, setSort] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([]);
    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    const products = useSelector(state => state.cart.products);
    const timerRef = useRef(null);
    useEffect(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(500)
        return () => clearTimeout(timerRef.current);
    }, [maxPrice, sort, selectedSubCats]);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value;
        setMaxprice(value);
    };

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Категорії продуктів</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                </div>
                <div className="filterItem">
                    <h2>Сортування по:</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Ціна (Найменша спочатку)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
                        <label htmlFor="desc">Ціна (Найбільша спочатку)</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Фільтр по ціні</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={20000} onChange={handleMaxPriceChange} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" src="https://mimiskin.com.ua/sites/default/files/styles/slider_pc/public/sliders/sayt-fonove-zobrazhennya-7.png?itok=vPHGI5pp" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div >
    );
}