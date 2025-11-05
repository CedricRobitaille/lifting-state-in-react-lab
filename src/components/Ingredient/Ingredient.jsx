const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      <button onClick={() => {props.action(props.ingredient)}}>{props.operation === "add" ? "+" : "x"}</button>
    </li>
  )
}

export default Ingredient;