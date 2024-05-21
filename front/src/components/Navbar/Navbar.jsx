
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import "./Navbar.scss"
import Cart from "../Cart/Cart";

export default function Navbar() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedOpen, setSelectedOpen] = useState(false);
    const products = useSelector(state => state.cart.products);
    const selectedProducts = useSelector(state => state.selected.selectedProducts);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
            setSelectedCategory(savedCategory);
        }
    }, []);

    const handleSelectChange = (e) => {
        setSelectedCategory(e.target.value);
        localStorage.setItem("selectedCategory", e.target.value);
        window.location.href = e.target.value;
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img className="logo" src="https://t3.ftcdn.net/jpg/03/24/75/46/360_F_324754632_LRC1yH2prRSccyk3gyEF3W8ptZxSElCP.jpg" alt="" />
                    </div>
                    <div className="item">
                        <select className="link custom-select" value={selectedCategory} onChange={handleSelectChange}>
                            <option value="/">Домашня сторінка</option>
                            <option value="/products/11/pobutovatechnika">Побутова техніка</option>
                            <option value="/products/12/posud">Посуд</option>
                            <option value="/products/3/audio">Аудіо-техніка</option>
                            <option value="/products/4/phototechnika">Фото-техніка</option>
                            <option value="/products/5/tovarydlyagamingu">Товари для геймінгу</option>
                            <option value="/products/6/krasatazdorovya">Краса та здоров'я</option>
                            <option value="/products/7/pobutovakhimiya">Побутова хімія</option>
                            <option value="/products/8/dzherelazhyvlennya">Джерела живлення</option>
                        </select>
                    </div>
                </div>
                <div className="center">
                    <Link className="link link-logo" to="/">POBUTSHOP</Link>
                </div>
                <div className="right">
                    <div className="icons search">
                        <div className="icons fav__icons" onClick={() => setSelectedOpen(!selectedOpen)}>
                            <FavoriteBorderIcon />
                            <span>{selectedProducts.length}</span>
                        </div>
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
            {selectedOpen && <SelectedProducts />}
        </div>
    );
}   