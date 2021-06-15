import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Checkout.scss';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {remove} from '../../features/user/myCartSlice';

const CheckoutCard = ({info}) =>{
    const dispatch = useDispatch();
    const price = info.price;
    const [uprice, setUprice] = useState(0);

    const [count, setCount] = useState(0);

    const incrementBtn = () =>{
        setCount(count + 1);
    }

    const deccrementBtn = () =>{

        if(count>0){
            setCount(count - 1);
        }
        return;
    }

    useEffect(() => {
        setUprice(price*count);
    }, [count])

    const removeOnCart = () =>{
        dispatch(remove(info.id));
    }


    return(
        <div>
                <div className="ck-list">
                <span onClick={removeOnCart} className="del">x</span>
                <img src={info.img ? info.img : info.imgs[0]} alt=""/>
                <h4>{ info.name }</h4>
                <p>{`$${price}`}</p>
                <div className="ctr">
                <button onClick={deccrementBtn} class='sub'><FontAwesomeIcon icon="minus"/></button>
                <input type="text" name="quantity" className="qty"value={count} readOnly/>
                <button onClick={incrementBtn} class='add'><FontAwesomeIcon icon="plus"/></button>
                </div>
                <p className="uprice">{`$${uprice}`}</p>
            </div>
            <hr/>
        </div>
    )
}
export default CheckoutCard;