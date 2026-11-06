import FoodCard from './FoodCard.jsx'

// Turns an array of foods into a grid of cards using .map()
export default function FoodList({ foods, onAdd }) {
  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} onAdd={onAdd} />
      ))}
    </div>
  )
}
