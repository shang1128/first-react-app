import './Card.scss';
import cardImage from '../../raw-images/mac.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card(props) {
    const arr = new Array(props.rate);
    arr.fill(0);
    const createStar = () => {
        return <FontAwesomeIcon icon="star" />
    }
return (
        <div className="card">
                <img src={cardImage} alt="Macbook" />
                <p>{ props.name }</p>
                <div className="star">
                    {
                        arr.map(() => createStar())
                    }
                </div>
                <div className="price">
                <p>${ props.price }</p>
                <p>${ props.mprice }</p>
                </div>
        </div>
)
}

export default Card;