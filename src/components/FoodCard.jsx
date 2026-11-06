import { useState } from 'react'
import FoodImage from './FoodImage.jsx'
import { formatNaira } from '../utils/helpers.js'

// One reusable food card. All data arrives through props.
export default function FoodCard({ food, onAdd }) {
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    onAdd(food)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <article className="food-card">
      <div className="food-card-image">
        <FoodImage src={food.image} alt={food.name} emoji={food.emoji} />
        <span className="food-tag">{food.category}</span>
      </div>
      <div className="food-card-body">
        <h3>{food.name}</h3>
        <p className="food-desc">{food.description}</p>
        <div className="food-card-footer">
          <span className="food-price">{formatNaira(food.price)}</span>
          <button
            type="button"
            className={justAdded ? 'btn btn-small btn-added' : 'btn btn-small btn-primary'}
            onClick={handleAdd}
          >
            {justAdded ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
