import Container from '../container/Container';
import './ProductList.scss';

import pbimg from '../../raw-images/mn1.png';
import pl1 from '../../raw-images/mac.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductList = () =>{
    return(
        <Container>
            <div className="pd-list">
                <div className="pd-left">

                    <div className="pd">
                    <h3 className="pd-title">ACCESSORIES</h3>
                    <ul className="pd-ul">
                        <li className="pd-li"><span>Apple Car</span><span>2</span></li>
                        <li className="pd-li"><span>Air port & wireless</span><span>2</span></li>
                        <li className="pd-li"><span>Cabies & Docks</span><span>2</span></li>
                        <li className="pd-li"><span>Cases & Films</span><span>2</span></li>
                        <li className="pd-li"><span>Charging Devices</span><span>2</span></li>
                        <li className="pd-li"><span>Connected home</span><span>2</span></li>
                        <li className="pd-li"><span>Headphones</span><span>2</span></li>
                    </ul>
                    </div>

                    <div className="pd">
                    <h3 className="pd-title">PRICES</h3>
                    <ul className="pd-ul">
                    <li className="pd-li"><span>Ranger:</span><span>$13.99 - $25.99</span></li>
                    </ul>
                    <input type="range" id="" name="" min="0" max="100" className="pd-range" />
                    </div>

                    <div className="pd">
                    <h3 className="pd-title">COLOR</h3>
                    <div className="color">
                                    <label className="color-option" >
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="blue"></span>
                                  </label>
                                  
                                  <label className="color-option">
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="red"></span>
                                  </label>
                                  
                                  <label className="color-option" >
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="black"></span> 
                                  </label> 
 
                                  <label className="color-option" > 
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="white"></span> 
                                  </label> 
                                  <label className="color-option"> 
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="peach"></span>
                                  </label>
                                  <label className="color-option"> 
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="peach"></span>
                                  </label>
                    </div>
                    </div>

                    <div className="pd">
                    <h3 className="pd-title">BRAND</h3>
                    <ul className="pd-ul">
                        <li className="pd-li"><span>Apple</span><span>2</span></li>
                        <li className="pd-li"><span>LG</span><span>2</span></li>
                        <li className="pd-li"><span>Samsung</span><span>2</span></li>
                        <li className="pd-li"><span>Siemens</span><span>2</span></li>
                    </ul>
                    </div>

                    <button className="pd pd-btn">
                        MORE
                    </button>

                </div>
                <div className="pd-right">

                    <div className="pd-banner">
                        <div className="pd-btext">
                            <h1>iPhone 8</h1>
                            <p className="pd-p">Performance and design. Token right to the edge.</p>
                            <p>SHOP NOW</p>
                        </div>
                        <img src={pbimg} alt=""/>
                    </div>

                    <div className="pd-links">
                            <div className="links-opt">
                            <span>13 Items</span>
                            <div>
                            <span>Sort By</span>
                            <select name="" id="" className="sel">
                            <option value="">Name</option>
                            </select>
                            </div>
                            <div>
                            <span>Show</span>
                            <select name="" id="" className="sel">
                            <option value="">12</option>
                            </select>
                            </div>
                            
                        </div>
                         <div className="links-btn">

                        </div>

                    </div>

                    <div className="pd-productlist">
                    <div className="boxes">
                    <figure className="img">
                        <img src={pl1} alt="mac" />
                    </figure>

                    <div className="content">
                        <h3 className="content-h3">Beats Solo On Ear Headphones - Black</h3>
                        <div className="smallDetails">
                            
                            <span className="reviews">0 reviews</span>
                            <span className="subReviews">Submit a review</span>
                        </div>
                        <hr/>
                        <div className="price">
                            <p>$499</p>
                            <p>$599</p>
                        </div>
                        <p class="content-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div className="pd-btn">
                    <button className="btn"><FontAwesomeIcon icon='shopping-cart' />Add to Cart</button>
                    <button className="btn"><FontAwesomeIcon icon={['far', 'heart']} /></button>
                    </div>
                    </div>
                </div>

                <hr/>

                <div className="pd-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>

                    </div>

                </div>
            </div>
        </Container>
    )
}
export default ProductList;