import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () =>{
    return(
        <section className="bg-images">

        <div className="content-container">

            <div className="raku-title">
                <span className="raku-title--rak">RAKU<span className="raku-title--tech">TECH</span></span>
                <hr className="raku-hr"/>
                <p className="raku-description">Browse from over 500 devices in your area.</p>
            </div>

            <div className="logform">

                <p className="signupTitle">Sign Up</p>

                <div className="alacc">
                <p>Already have an account? </p>

                <Link to="/login" className="click">
                <p className="login">Log in</p>
                </Link>
                
                </div>

                <form action="">

                <label for="" className="email">Full Name</label>
               <input type="text" className="input-email"/>

                <label for="" className="email">Email</label>
                <input type="email" className="in-email" />
                
                <div className="conpass">
                <label for="" className="pass">Password</label>
                <input type="password" id="password" className="in-password" placeholder="Must be at least 6 characters" />
                <FontAwesomeIcon icon={['far', 'eye-slash']}/>
                </div>
                
                <div className="ccon">
                <input type="checkbox" name="check" className="check"/><label for="check">Sign up for email updates.</label>
                </div>

                <button  className="signingup">SIGN UP</button>

                </form>
               
                <p className="agreed">By continuing, you agree to accept our
                    <span className="policy">Privacy Policy & Terms of Service.</span>
                </p>
            </div>

        </div>
    </section>
    )
}
export default Register;