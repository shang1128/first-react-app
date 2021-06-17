import CheckoutCard from './CheckoutCard';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState } from 'react';
import { addTotalItems } from '../../features/user/myCartSlice';
import { counter } from '@fortawesome/fontawesome-svg-core';

const CheckoutList = () =>{
    const myCart = useSelector((state) => state.myCart.cart);
    const dispatch = useDispatch();

   const [counter,setCounter] = useState(0);

    useEffect(() =>{
        if(myCart>0){
            setCounter(counter+1)
            dispatch(addTotalItems(counter))
        }
        return;
        
    },[myCart])


    return(
        <div>
            {
                myCart.map(product => {
                    return (
                        <CheckoutCard info={product} id={counter} />
                    )
                })
                
            }  
        </div>
    )
}
export default CheckoutList;