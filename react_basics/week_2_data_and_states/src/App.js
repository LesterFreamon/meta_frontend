import React, { useState, useReducer } from 'react';
import MealsProvider from './providers/MealsProvider.js';
import MealsList from './components/MealsList.js';
import Counter from './components/Counter.js';
import Child from './components/Child.js';
import ModeToggler from './components/ModeToggler.js';
import GuessButton from './components/GuessButton.js';
import Promo from './components/Promo.js';
import Heading from './components/Heading.js';
import Fruits from './components/Fruits.js';
import FruitsCounter from './components/FruitsCounter.js';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'ride') return { money: state.money + 10 };
  if (action.type === 'fuel') return { money: state.money - 40 };
  return new Error();
};

function App() {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [word, setWord] = useState("Eat");
  const date = new Date();

  function handleClick() {
    setWord("Sleep");
  }

  return (
    <div>
       <div className="FruitShop">
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits}/>
      </div>

      <ModeToggler />
      <h1>Task: Add a button and handle a click event</h1>
      <GuessButton />
      <Promo />
      <Child message={`Hello from App.js at ${date.toLocaleTimeString()}`} />

      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Change word</button>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'ride' })}>Ride</button>
        <button onClick={() => dispatch({ type: 'fuel' })}>Fuel</button>
      </div>

     
    </div>




  );
}

export default App;
