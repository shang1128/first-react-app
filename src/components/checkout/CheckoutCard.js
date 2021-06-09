import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Checkout.scss';

const CheckoutCard = () =>{
    return(
        <div>
                <div className="ck-list">
                <span className="del">x</span>
                <img src="" alt=""/>
                <h4>Philips Hue 7W BR30 Connected Downlight Lamp</h4>
                <p>$998</p>
                <div className="ctr">
                <button class='sub'>
                <FontAwesomeIcon icon="minus"/>
                </button>
                <input type="number" name="quantity" className="qty"value="0" readOnly/>
                <button class='add'>
                <FontAwesomeIcon icon="plus"/>
                </button>
                </div>
                <p>$0</p>
            </div>
            <hr/>
        </div>
    )
}
export default CheckoutCard;