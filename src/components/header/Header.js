import Container from '../container/Container';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header(){
return (
    
<Container>
    <div className="header-top">
    <div className="selection">
        <span>EN <select name="" id="" /></span>
        <span>USD <select name="" id="" /></span>
    </div>
    <div className="account">
        <p> <FontAwesomeIcon icon="user" /> My Profile</p>
        <p> <FontAwesomeIcon icon="shopping-basket" /> 0 Items</p>
        <p>$0.00</p>
        <FontAwesomeIcon icon="search" />
    </div>
    </div>
    <h1>RAKUTECH</h1>
    <nav>
        <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>IPHONE</li>
            <li>IPAD</li>
            <li>MACBOOK</li>
            <li>ACCESORIES</li>

        </ul>
    </nav>
</Container>

)
}

export default Header;