// src/App.jsx

import './App.css';
import { useState } from 'react';

import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    const newStack = [...stack, ingredient];
    setStack(newStack);
  }

  const removeFromBurger = (ingredient) => {
    const stackPopIndex = stack.findIndex(element => element.name === ingredient.name);
    const newStack = [...stack]
    newStack.splice(stackPopIndex, 1)

    setStack(newStack);
  }

  const resetStack = () => {
    setStack([]) // Resets the stack
  }

  const randomStack = () => {
    console.log("Random");
    const stackSize = parseInt(Math.random() * availableIngredients.length-4);
    const newStack = [];
    for (let i = 0; i < stackSize + 2; i++) {
      if (i === 0 || i === stackSize+1) {
        // Always top/bottom a stack with a bun
        const randomBun = parseInt(Math.random() * 4);
        newStack.push(availableIngredients[randomBun]);
      } else {
        // Randomize contents
        const randomIng = parseInt(Math.random() * availableIngredients.length)
        newStack.push(availableIngredients[randomIng]);
      }
    }
    setStack(newStack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} randomStack={randomStack} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} resetStack={resetStack} />
      </section>
    </main>
  );
};

export default App;
