import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import OrderSummary from '../components/OrderSummary.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Cart({ cart, totals, onIncrease, onDecrease, onRemove, onClear }) {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Your Cart</h1>
          <p>Review your meals before checking out.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {cart.length === 0 ? (
            <EmptyState
              icon="🛒"
              title="Your cart is empty"
              message="Looks like you haven't added any meals yet. Explore our menu and find something tasty!"
            >
              <Link to="/menu" className="btn btn-primary">
                Browse Menu
              </Link>
            </EmptyState>
          ) : (
            <div className="cart-layout">
              <div className="cart-list">
                <div className="cart-list-header">
                  <h2>
                    {totals.itemCount} {totals.itemCount === 1 ? 'item' : 'items'} selected
                  </h2>
                  <button type="button" className="link-danger" onClick={onClear}>
                    Clear cart
                  </button>
                </div>

                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                  />
                ))}

                <Link to="/menu" className="btn btn-outline">
                  ← Continue Shopping
                </Link>
              </div>

              <OrderSummary cart={cart} totals={totals}>
                <Link to="/checkout" className="btn btn-primary btn-block">
                  Proceed to Checkout
                </Link>
              </OrderSummary>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
