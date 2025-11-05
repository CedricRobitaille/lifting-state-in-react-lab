// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul id="ingredient-list">
      {
        props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            operation="add"
            action={props.addToBurger}
          />
        ))
      }
    </ul>
  );
};

export default IngredientList;
