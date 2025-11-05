// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul id="burger-stack">
      {
        props.stack.length < 1 ? <p className="warning">No ingredients currently in your stack.</p> : props.stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            operation="remove"
            action={props.removeFromBurger}
          />
        ))
      }
      <h2>Current Stack <span onClick={() => {props.resetStack()}}>Reset</span></h2>
    </ul>
  );
};

export default BurgerStack;
