import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Container from './components/container/Container'
import './App.scss';
import './fonts/Fonts.css';
import Card from './components/card/Card';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { library} from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faSearch, faShoppingBasket, faShoppingCart, faStar, faUser, faShippingFast,
  faDollarSign, faHeadset, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import DisplayProduct from './components/displayProduct/DisplayProduct';
import TopBanner from './components/top-banner/TopBanner';
import MidNavigation from './components/mid-navigation/MidNavigation';
import MidBanner from './components/mid-banner/MidBanner';
import OtherOptions from './components/other-options/OtherOptions';
import LatestNews from './components/latest-news/LatestNews';
import FeaturedProducts from './components/featured-products/FeaturedProducts';
// import Login from './components/login/Login';




library.add(
    fab,
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
    faAngleRight
    

)

function App() {
  const items = [
    {
      name: 'Apple Macbook Pro',
      rate: 2,
      price: 499,
      markdownPrice: 599
    },
    {
      name: 'Apple Macbook Pro',
      price: 499,
      rate: 4,
      markdownPrice: 599
    },
    {
      name: 'Apple Macbook Pro',
      price: 499,
      rate: 4,
      markdownPrice: 599
    },
    {
      name: 'Apple Macbook Pro',
      price: 499,
      rate: 1,
      markdownPrice: 599
    }
  ]
  return (
    <div className="App">
      <Router>
     <Header />
    <TopBanner />
    <MidNavigation />
     <Container>
      
      <div className="card-container">
      {
        items.map(item => {
          return <Card rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        })
      }
      </div>
    
    </Container>

     {/* </Route> */}
     
    <Route exact path='/DisplayProduct'  component={DisplayProduct} />
      <MidBanner />
      <OtherOptions />
      <LatestNews />
      <FeaturedProducts />
    {/* <Route exact path='/Login' component={Login} /> */}
    
    <Footer />
    </Router>
    </div>

  );
}

export default App;
