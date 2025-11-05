// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul id="burger-stack">
      {
        props.stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            operation="remove"
            action={props.removeFromBurger}
          />
        ))
      }
    </ul>
  );
};

export default BurgerStack;
