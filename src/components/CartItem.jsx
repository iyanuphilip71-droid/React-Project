import FoodImage from './FoodImage.jsx'
import { formatNaira } from '../utils/helpers.js'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <FoodImage src={item.image} alt={item.name} emoji={item.emoji} className="cart-item-img" />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p className="muted">{formatNaira(item.price)} each</p>
        <div className="qty-control">
          <button
            type="button"
            aria-label={`Decrease quantity of ${item.name}`}
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${item.name}`}
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-side">
        <strong>{formatNaira(item.price * item.quantity)}</strong>
        <button type="button" className="link-danger" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}
