import logo from './logo.svg';
import './App.css';
import Navar from './components/Navar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'
function App() {

  const cards = data.map(item =>{
    return(
    <Card 
      key = {item.id}
      // item= {item}
      {...item}
      />
)
    
  })

  return (
    <div className="App">
      <Navar/>
      <Hero/>

      <section className='card-list'>
         {cards}
      </section>
     
      
    </div>
  );
}

export default App;
