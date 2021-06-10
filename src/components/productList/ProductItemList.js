import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pl1 from '../../raw-images/mac.png';
import Star from '../star/Star';
import { Link } from 'react-router-dom';



const ProductItemList = () =>{
    return(
        <div>
                    <div className="pd-productlist">

                    <div className="boxes">
                    <figure className="img pd-hot">
                        <div className="img-pd">
                        <img src={pl1} alt="mac" />
                        <div className="img-overlay">
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="shopping-cart" />
                </div>
                        </div>
                    </figure>

                    <div className="pd-content">

                    <Link to="/display-product" className="click">
                    <h3 className="content-h3">Beats Solo On Ear Headphones - Black</h3>
                    </Link>

                        <div className="small-details">
                            <div className="pd-star"><Star rate={4} /></div>
                            <span className="reviews">0 reviews</span>
                            <span className="subReviews">Submit a review</span>
                        </div>

                        <hr className="pd-hr"/>
                        
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

                <hr className="pd-hr"/>


            

            </div>

        </div>
    )
}
export default ProductItemList;