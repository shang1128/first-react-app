import Container from '../container/Container';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header(){
return (
    
<Container>
    <div className="header-top">
    <div className="selection">
        <span>EN</span>
        <span>USD</span>
    </div>
    <div className="account">
        <a> <FontAwesomeIcon icon="user" /> My Profile</a>
        <a> <FontAwesomeIcon icon="shopping-basket" /> 0 Items</a>
        <a>$0.00</a>
        <FontAwesomeIcon icon="search" />
    </div>
    </div>
    <h1>RAKUTECH</h1>
    <nav>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">STORE</a></li>
            <li><a href="#">IPHONE</a></li>
            <li><a href="#">IPAD</a></li>
            <li><a href="#">MACBOOK</a></li>
            <li><a href="#">ACCESORIES</a></li>

        </ul>
    </nav>
</Container>

)
}

export default Header;