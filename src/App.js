import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Container from './components/container/Container'
import './App.scss';
import Card from './components/card/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faShoppingBasket, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import DisplayProduct from './components/displayProduct/DisplayProduct';


library.add(
    
    faStar,
    faUser,
    faShoppingBasket,
    faSearch
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
      <Header />
      <Container>

      <div className="card-container">
      {
        items.map(item => {
          return <Card rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        })
      }
      </div>
    
    </Container>
    <DisplayProduct />
    <Footer />
    </div>

  );
}

export default App;
