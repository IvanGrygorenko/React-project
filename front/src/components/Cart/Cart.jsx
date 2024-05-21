import React from "react";
import "./Cart.scss"
import { DeleteOutline } from "@mui/icons-material";
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";


export default function Cart() {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }
    const stripePromise = loadStripe('pk_test_51PCf3yBUXIlmcIXIMvImOfVymbr4Q8YibWzcPwhc9XTRJNeE71sTWnEDIlxtnk3y5GgTrwyikXqpdjAoi7tmVNp100ozpDxMXO');
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise

            const res = await makeRequest.post("/orders", {
                products
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })

        } catch (err) {
            console.log(err)

            return { error: err.message };
        }
    }
    return (
        <div className="cart">
            <h1>Ваша корзина:</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} x {item.price} UAH</div>
                    </div>
                    <DeleteOutline className="delete" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>РАЗОМ</span>
                <span>{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>ПЕРЕЙТИ ДО ОФОРМЛЕННЯ</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Скинути все</span>
        </div>
    )
}