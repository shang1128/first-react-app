import './App.scss';
import './fonts/Fonts.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { library} from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faSearch, faShoppingBasket, faShoppingCart, faStar, faUser, faShippingFast,
  faDollarSign, faHeadset, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import { far } from '@fortawesome/free-regular-svg-icons';




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
    <Route  path='/display-product'>
      <Accessories />
    </Route>

    </Switch>
    
    

    <Footer />
    </Router>
    </div>

  );
}

export default App;
