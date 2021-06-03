import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Container from './components/container/Container'
import './App.scss';
import Card from './components/card/Card';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faSearch, faShoppingBasket, faShoppingCart, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import DisplayProduct from './components/displayProduct/DisplayProduct';
import Login from './components/login/Login';




library.add(
    far,
    faStar,
    faUser,
    faShoppingBasket,
    faSearch,
    faHeart,
    faShoppingCart
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

     <Route exact path="/">
     <Container>
      
      <div className="card-container">
      {
        items.map(item => {
          return <Card rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        })
      }
      </div>
    
    </Container>

     </Route>
     
    <Route exact path='/DisplayProduct'  component={DisplayProduct} />
   
    <Route exact path='/Login' component={Login} />
    
    <Footer />
    </Router>
    </div>

  );
}

export default App;
