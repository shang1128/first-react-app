import { useState } from 'react';
import Container from '../container/Container';
import './DisplayProduct.scss';
import Star from '../star/Star';

import imgba from '../../raw-images/ba.png';
import imgbb from '../../raw-images/bb.png';
import imgbc from '../../raw-images/bc.png';
import imgbd from '../../raw-images/bd.png';

import imgwa from '../../raw-images/wa.png';
import imgwb from '../../raw-images/wb.png';
import imgwc from '../../raw-images/wc.png';
import imgwd from '../../raw-images/wd.png';

function DisplayProduct(props){
    const imagesBlack = [imgba,imgbb,imgbc,imgbd];
    const imagesWhite = [imgwa,imgwb,imgwc,imgwd];

    const [ selectedVariants, setSelectedVariants ] = useState(imagesBlack)
    const [ selectedImg, setSelectedImg ] = useState(imgba);


    const onSelectImg = (image) => {
        setSelectedImg(image);
    }
    const onSelectColor = (color) => {
        if(color === 'black') {
            setSelectedVariants(imagesBlack);
            setSelectedImg(imagesBlack[0]);
        }
        if(color === 'white') {
            setSelectedVariants(imagesWhite);
            setSelectedImg(imagesWhite[0]);
        }
    }

    return (
        <Container>
            <div className="product-display">
                <div className="product-images">
                    <img src={selectedImg} alt=""/>
                <div className="product-small-images">
                    {
                        selectedVariants.map(img => {
                            return <img onClick={() => onSelectImg(img)} src={img} />
                        })
                    }
                </div>
                </div>
                <div className="product-details">

                    <h3>Beats Solo On Ear Headphones - Black</h3>

                    <div className="rate-review">
                        <Star rate={4} />
                    <p>0 reviews</p>
                    <a>Submit a review</a>
                    </div>
                    
                    <div className="price">
                    <p>$499</p>
                    <p>$599</p>
                    </div>

                    <div className="stock">
                    <p>Availability:</p> <p>In stock</p>
                    </div>

                     <div className="category">
                     <p>Category:</p> <p>Accessories</p>
                    </div>

                    <p className="free">Free Shipping</p>
                    
                    <div className="color">
                    <p>Select Color:</p>

                                    <label class="color-option" >
                                    <input name="color" type="radio" class="color-radio" />
                                    <span class="blue"></span>
                                  </label>
                                  
                                  <label class="color-option">
                                    <input name="color" type="radio" class="color-radio" />
                                    <span class="red"></span>
                                  </label>
                                  
                                  <label onClick={() => onSelectColor('black')} class="color-option" >
                                    <input name="color" type="radio" class="color-radio" />
                                    <span class="black"></span> 
                                  </label> 
 
                                  <label onClick={() => onSelectColor('white')} class="color-option" > 
                                    <input name="color" type="radio" class="color-radio" />
                                    <span class="white"></span> 
                                  </label> 
                                  <label class="color-option"> 
                                    <input name="color" type="radio" class="color-radio" />
                                    <span class="peach"></span>
                                  </label>
                    </div>
                    <div className="size">
                    <p>Size</p>
                    <select name="" id="" class="sizing-select">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                    </select>
                    </div>
                    <div className="btn-option">
                    <div className="btn-counter">
                    <button>-</button><input type="number" value="2" name="" id="" readOnly /><button>+</button>
                    </div>
                    <div className="btn-add-heart">
                    <button>Add to Cart</button>
                    <button>heart</button>
                    </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default DisplayProduct;