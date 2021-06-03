import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.scss';
import Container from '../container/Container'


function Login (){
    return(
        <Container>
            <div className="log-container">
            <div className="title">

            </div>
            <div className="log-form">
            <form action="">
                <p>Email</p>
                <input type="email"  />
                <p>Password</p>
                <input type="password" />
                <button type="submit">SIGN IN</button>
                
            </form>
            </div>
            </div>
        </Container>
    )

}
export default Login