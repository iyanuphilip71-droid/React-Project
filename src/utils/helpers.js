// Delivery fee charged once per order (sample value)
export const DELIVERY_FEE = 1000

// Format a number as Nigerian Naira, e.g. 3500 -> ₦3,500
export function formatNaira(amount) {
  return '₦' + Number(amount).toLocaleString('en-NG')
}

// Work out the numbers shown in cart and checkout summaries
export function getTotals(cart) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0
  return { itemCount, subtotal, deliveryFee, total: subtotal + deliveryFee }
}
