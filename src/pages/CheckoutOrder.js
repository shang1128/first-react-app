import Checkout from "../components/checkout/Checkout";
import HeaderFooter from "../components/HeaderFooter";
import TopNav from "../components/top-nav/TopNav";


const CheckoutOrder = () =>{
    return(
        <HeaderFooter>
            <TopNav/>
            <Checkout/>
        </HeaderFooter>
    )
}
export default CheckoutOrder;