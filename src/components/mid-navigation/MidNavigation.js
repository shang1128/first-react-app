import Container from '../container/Container';
import './MidNavigation.scss';


const MidNavigation = () =>{
    return(
        <Container>
            <div>
            <h3 className="title">BEST SELLER</h3>
        <nav>
            <ul>
                <li>All</li>
                <li>Mac</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>iPod</li>
                <li>Accessories</li>
            </ul>
        </nav>
            </div>
       
        </Container>
    )
}
export default MidNavigation;
