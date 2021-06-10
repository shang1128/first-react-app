import './ProductList.scss';
import micon from '../../raw-images/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductListLinks = () =>{
    return(
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
                             <img src={micon} alt="menu"/>
                            <FontAwesomeIcon icon="bars"/>
                        </div>

                    </div>
    )
}
export default ProductListLinks;