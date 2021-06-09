import Container from "../container/Container";
import './Checkout.scss';
import CheckoutCard from "./CheckoutCard";

const Checkout = () =>{
    return(
        <Container>
            <div className="ck-title">
                <h3 className="tp">PRODUCT</h3>
                <h3 className="tpr">PRICE</h3>
                <h3 className="tq">QTY</h3>
                <h3 className="tup">UNIT PRICE</h3>
            </div>
            <hr/>

            <CheckoutCard/>

            <div className="ck-payment">
            <div className="voucher">
                    <input type="text" name="" placeholder="Voucher Code" className="in-voucher" id="voucher-code" />
                    <button className="btn">Redeem</button>
            </div>
            <div className="ck-form">
            <ul className="ck-dul">
                        <li className="ck-dli"><span>Subtotal</span><span class='sub-total'>$0</span></li>
                        <li className="ck-dli"><span>Shipping fee</span><span>$20</span></li>
                        <li className="ck-dli"><span>Coupon</span><span>No</span></li>
            <hr/>
            <li className="ck-dli"><h1>Total</h1><h1>$118</h1></li>
            </ul>
            <button class="ck-order">Checkout</button>
            </div>
            </div>

        </Container>
    )
}
export default Checkout;    