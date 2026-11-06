import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import OrderSummary from '../components/OrderSummary.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { formatNaira } from '../utils/helpers.js'
import { isValidEmail, isValidPhone } from '../utils/validators.js'

const emptyForm = { fullName: '', email: '', phone: '', address: '' }

// Check every field and return an object of error messages (empty = valid)
function validate(values) {
  const errors = {}

  if (values.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name (at least 3 characters).'
  }
  if (values.email.trim() === '') {
    errors.email = 'Email address is required.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address, e.g. name@example.com.'
  }
  if (values.phone.trim() === '') {
    errors.phone = 'Phone number is required.'
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Enter a valid phone number (10 to 14 digits), e.g. 08012345678.'
  }
  if (values.address.trim().length < 10) {
    errors.address = 'Please enter a full delivery address (at least 10 characters).'
  }

  return errors
}

export default function Checkout({ cart, totals, onClear }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [placedOrder, setPlacedOrder] = useState(null)

  // One handler updates whichever field the user is typing in
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundErrors = validate(form)
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length > 0) return

    // Sample order submission: no backend or payment gateway
    const orderId = 'FH-' + Date.now().toString().slice(-6)
    setPlacedOrder({
      id: orderId,
      customer: form,
      items: cart,
      totals,
    })
    onClear()
    setForm(emptyForm)
  }

  // Order confirmation screen
  if (placedOrder) {
    return (
      <section className="section">
        <div className="container">
          <div className="success-card">
            <div className="success-icon">✅</div>
            <h1>Order Placed Successfully!</h1>
            <p>
              Thank you, <strong>{placedOrder.customer.fullName}</strong>. Your order{' '}
              <strong>#{placedOrder.id}</strong> has been received and is being prepared.
            </p>
            <p className="muted">
              A confirmation would be sent to {placedOrder.customer.email}. (Sample order: no real
              payment or delivery.)
            </p>

            <ul className="summary-items confirm-items">
              {placedOrder.items.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatNaira(item.price * item.quantity)}</span>
                </li>
              ))}
              <li className="summary-total">
                <span>Total (incl. delivery)</span>
                <span>{formatNaira(placedOrder.totals.total)}</span>
              </li>
            </ul>

            <p className="muted">Delivering to: {placedOrder.customer.address}</p>

            <Link to="/menu" className="btn btn-primary">
              Order More Food
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Nothing to check out
  if (cart.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            icon="🛒"
            title="Your cart is empty"
            message="Add some meals to your cart before checking out."
          >
            <Link to="/menu" className="btn btn-primary">
              Browse Menu
            </Link>
          </EmptyState>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Checkout</h1>
          <p>Enter your delivery details to place your order.</p>
        </div>
      </section>

      <section className="section">
        <div className="container cart-layout">
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <h2>Delivery Details</h2>

            {Object.keys(errors).some((key) => errors[key]) && (
              <div className="alert alert-error" role="alert">
                Please fix the highlighted fields below.
              </div>
            )}

            <FormField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="e.g. Ada Okafor"
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="e.g. ada@example.com"
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="e.g. 08012345678"
            />
            <FormField
              label="Delivery Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              error={errors.address}
              placeholder="House number, street, area, city"
              textarea
              rows={3}
            />

            <button type="submit" className="btn btn-primary btn-block btn-large">
              Place Order · {formatNaira(totals.total)}
            </button>
            <Link to="/cart" className="back-link">
              ← Back to cart
            </Link>
          </form>

          <OrderSummary cart={cart} totals={totals} showItems />
        </div>
      </section>
    </>
  )
}
