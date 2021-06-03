import './Card.scss';
import cardImage from '../../raw-images/mac.png';
import Star from '../star/Star';

function Card(props) {

return (
        <div className="card">
                <img src={cardImage} alt="Macbook" />
                
                <p>{ props.name }</p>
                <Star rate={props.rate} />
                <div className="price">
                <p>${ props.price }</p>
                <p>${ props.mprice }</p>
                </div>
        </div>
)
}

export default Card;