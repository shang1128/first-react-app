import Container from '../container/Container';
import Card from './Card';
import './Card.scss';

function CardList({hasFirstHot}) {
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
  <Container>
     <div className="card-container">
       {
       items.map((item, i) => {
           if(i === 0 && hasFirstHot)
               return <Card hasFirstHot={hasFirstHot} rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        return <Card hasFirstHot={false} rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        })}
      </div> 
      </Container>
   )
    
}

export default CardList;