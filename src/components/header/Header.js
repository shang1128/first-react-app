import Container from '../container/Container';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Header(){
return (
    <div>
        
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
        <Link to="/checkout">
        <FontAwesomeIcon icon="search" />
        </Link>
    </div>

    </div>

    <h1 className="title">RAKUTECH</h1>

    <nav className="nav-links">
    <div className="nav-burger">
                    <label id="toggler">
                        <input type="checkbox" />
                        <i class="fas fa-bars"></i>
                    </label>
                </div>
        <ul className="navul">
            <Link to="/" className="ul-li home">
                HOME
                <label id="home-toggler" className="home-togler">
                            <input type="checkbox" className="input"/>
                            <i id="arrow" class="fas fa-chevron-down"></i>
                        </label>
                        <div className="dropdown">
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">AirPort & Wireless</li>
                                <li className="dr-li">AppleCare</li>
                                <li className="dr-li">Bags, Shells & Sleeves</li>
                                <li className="dr-li">Business & Security</li>
                                <li className="dr-li">Cables & Docks</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="dr-li">Camera & Video</li>
                                <li className="dr-li">Car & Travel</li>
                                <li className="dr-li">Cases & Films</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">Changing Devices</li>
                                <li className="dr-li">Connected Home</li>
                                <li className="dr-li">Device Care</li>
                                <li className="dr-li">Display and Graphic</li>
                                <li className="dr-li">Fitness & Sport</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="dr-li">Headphones</li>
                                <li className="dr-li">HealthKit</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">Mice & Keyboards</li>
                                <li className="dr-li">Music Creation</li>
                                <li className="dr-li">Networking & Server</li>
                            </ul>
                        </div>
            </Link>
            
            <li className="ul-li">STORE</li>
            <li className="ul-li">IPHONE</li>
            <li className="ul-li">IPAD</li>
            <li className="ul-li">MACBOOK</li>
            <Link to="/display-product" className="ul-li">
            ACCESORIES
            </Link>
            
           

        </ul>
    </nav>

    </Container>

    </div>


)
}

export default Header;