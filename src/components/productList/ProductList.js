import Container from '../container/Container';
import './ProductList.scss';

import pbimg from '../../raw-images/mn1.png';
import ProductAccessories from './ProductAccessories';
import ProductPriceRange from './ProductPriceRange';
import ProductColors from './ProductColors';
import ProductBrand from './ProductBrand';
import ProductItemList from './ProductItemList';
import ProductListLinks from './ProductListLinks';
import TopNav from '../top-nav/TopNav';

const ProductList = () =>{
    return(
        <div>

            <TopNav/>

            <Container>
            <div className="pd-list">
                <div className="pd-left">

                <ProductAccessories/>    

                   <ProductPriceRange/>

                  <ProductColors />

                   <ProductBrand/>

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

                    <ProductListLinks/>

                  

             <ProductItemList/>
             <ProductItemList/>
             <ProductItemList/>
             <ProductItemList/>
             <ProductItemList/>
             <ProductItemList/>
             
             <div className="pd-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>

                </div>
            </div>
        </Container>
        
        </div>
       
    )
}
export default ProductList;