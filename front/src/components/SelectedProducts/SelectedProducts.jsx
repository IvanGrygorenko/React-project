import React from "react";
import "./SelectedProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromSelected, resetSelected } from "../../redux/selectedReducer";
import { addToCart } from "../../redux/cartReducer";
import { DeleteOutline } from "@mui/icons-material";

export default function SelectedProducts() {
    const dispatch = useDispatch();
    const selectedProducts = useSelector(state => state.selected.selectedProducts);
    const totalPrice = () => {
        let total = 0
        selectedProducts.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }
    const handleMoveToCart = (product) => {
        dispatch(removeFromSelected(product.id));
        dispatch(addToCart(product));
    };

    return (
        <div className="selected fav">
            <h1>Улюблені товари:</h1>
            {selectedProducts?.map(product => (
                <div className="item" key={product.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + product.img} alt="" />
                    <div className="details">
                        <h1>{product.title}</h1>
                        <p>{product.desc?.substring(0, 100)}</p>
                        <div className="price">{product.quantity} x {product.price} UAH</div>
                    </div>
                    <DeleteOutline className="delete" onClick={() => dispatch(removeFromSelected(product.id))} />
                    <button onClick={() => handleMoveToCart(product)}>До корзини</button>
                </div>
            ))}
            <div className="total">
                <span>РАЗОМ</span>
                <span>{totalPrice()}</span>
            </div>
            <span className="reset" onClick={() => dispatch(resetSelected())}>Скинути все</span>
        </div>
    );
}