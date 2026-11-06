import { formatNaira } from '../utils/helpers.js'

// Reusable order summary used on the Cart and Checkout pages
export default function OrderSummary({ cart, totals, showItems = false, children }) {
  return (
    <aside className="summary-card">
      <h2>Order Summary</h2>

      {showItems && (
        <ul className="summary-items">
          {cart.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatNaira(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="summary-row">
        <span>Items</span>
        <span>{totals.itemCount}</span>
      </div>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>{formatNaira(totals.subtotal)}</span>
      </div>
      <div className="summary-row">
        <span>Delivery fee</span>
        <span>{formatNaira(totals.deliveryFee)}</span>
      </div>
      <div className="summary-row summary-total">
        <span>Total</span>
        <span>{formatNaira(totals.total)}</span>
      </div>

      {children}
    </aside>
  )
}
