import Container from '../container/Container';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

function Header(){
return (
    
<Container>
    <div className="header-top">
    <div className="selection">
        <span>EN <select name="" id="" /></span>
        <span>USD <select name="" id="" /></span>
    </div>
    <div className="account">
            <Link to="/Login" className="active">
            <FontAwesomeIcon icon="user" /> My Profile
            </Link>
        {/* <p> </p> */}
        <p> <FontAwesomeIcon icon="shopping-basket" /> 0 Items</p>
        <p>$0.00</p>
        <FontAwesomeIcon icon="search" />
    </div>
    </div>
    <h1>RAKUTECH</h1>

    <nav>
        <ul>
            <Link to="/" className="active">
                HOME
            </Link>
            <li>STORE</li>
            <li>IPHONE</li>
            <li>IPAD</li>
            <li>MACBOOK</li>
            <Link to="/DisplayProduct" className="active">
            ACCESORIES
            </Link>
           

        </ul>
    </nav>
   
</Container>

)
}

export default Header;