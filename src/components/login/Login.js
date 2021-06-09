// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.scss';
import Container from '../container/Container'


function Login (){
    return(
        <Container>

             <section class="bg-images">
        
        <div class="content-container">
            <div class="raku-title">
                <span class="raku-title--rak">RAKU<span class="raku-title--tech">TECH</span></span>
                <hr class="raku-line"/>
                <p class="raku-description">Browse from over 500 devices in your area.</p>
            </div>
          <div class="logform">
                <p class="signTitle">Sign In</p>
                <div class="social-buttons">
                    <button class="s-apple"><img src="./LOGIN_AND_SIGNUP/apple-64.png" alt="" /> SIGN IN WITH APPLE</button>
                    <button class="s-fb"><img src="./LOGIN_AND_SIGNUP/fb-64.png" alt="" /> SIGN IN WITH FACEBOOK</button>
                </div>
                <p class="or">OR</p>
                <label for="" class="email">Email</label>   
                <input type="text" class="input-email" />
                <label for="" class="pass">Password</label>
                <input type="password" class="input-password" />
                <button class="signingin"> <a href="./index.html">SIGN IN</a></button>
                <p class="agree">By continuing, you agree to accept our
                    <span class="policy">Privacy Policy & Terms of Service.</span>
                </p>
                <p class="dacc">Don't have an account? <a href="/signUp.html" class="createAcc">Create new account</a></p>
            </div>
        </div>
    </section>

        </Container>
    )

}
export default Login