import React from "react";
import "./Product.scss"
import { useState } from "react";
import { AddShoppingCart } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Balance } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToSelected } from "../../redux/selectedReducer";

export default function Product() {
    const id = useParams().id
    const [selectedImg, setselectedImg] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { data, loading, error } = useFetch(
        `/products/${id}?populate=*`
    )

    return (
        <div className="product">
            {loading ? "Loading" : (<><div className="left">
                <div className="images">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setselectedImg("img")} />
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setselectedImg("img2")} />
                </div>
                <div className="mainImg">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="" />
                </div>
            </div>
                <div className="right">
                    <h1>{data?.attributes?.title}</h1>
                    <span className="price">{data?.attributes?.price} UAH</span>
                    <p>{data?.attributes?.desc}</p>
                    <div className="quant">
                        <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>
                    <button className="add" onClick={() => dispatch(addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity,
                    }))}>
                        <AddShoppingCart /> Додати до корзини
                    </button>
                    <div className="links">
                        <div className="item links__fav" onClick={() => dispatch(addToSelected({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.desc,
                            price: data.attributes.price,
                            img: data.attributes.img.data.attributes.url,
                            quantity,
                        }))}>
                            <FavoriteBorder /> Додати до вибраного
                        </div>
                    </div>
                </div></>)}
        </div>
    )
}