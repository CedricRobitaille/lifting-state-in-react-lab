const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button>{props.operation === "add" ? "+" : "x"}</button>
    </li>
  )
}

export default Ingredient;