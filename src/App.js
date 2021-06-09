import './App.scss';
import './fonts/Fonts.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Home from './pages/Home';
import Accessories from './pages/Accessories';

import { library} from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faSearch, faShoppingBasket, faShoppingCart, faStar, faUser, faShippingFast,
  faDollarSign, faHeadset, faAngleLeft, faAngleRight, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';







library.add(
    fab,
    far,
    faStar,
    faUser,
    faShoppingBasket,
    faSearch,
    faHeart,
    faShoppingCart,
    faShippingFast,
    faDollarSign,
    faHeadset,
    faFacebookF,
    faTwitter,
    faAngleLeft,
    faAngleRight,
    faHeart,
    faMinus,
    faPlus

)

function App() {

  return (
    <div className="App">
      <Router>

     <Header />
    
    <Switch>

    <Route exact path='/'>
      <Home />
    </Route>
    <Route  path='/product-list'>
      <Accessories />
    </Route>
    <Route  path='/checkout'>
      <Checkout />
    </Route>

    <Route path='/login'>
      <Login/>
      </Route>

    </Switch>
    
    

    <Footer />
    </Router>

    </div>

  );
}

export default App;
