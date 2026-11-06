import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'
import { getTotals } from './utils/helpers.js'

const CART_KEY = 'foodiehub-cart'

// Read the saved cart from Local Storage (runs once, when the app starts)
function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  // The whole shopping cart lives here and is passed down to pages as props
  const [cart, setCart] = useState(loadCart)

  // Save the cart to Local Storage every time it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart))
    } catch {
      // Storage may be unavailable (private mode); the cart still works in memory
    }
  }, [cart])

  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id)
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [
        ...prev,
        {
          id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          emoji: food.emoji,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    )
  }

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const totals = getTotals(cart)

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar cartCount={totals.itemCount} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu onAdd={addToCart} cart={cart} totals={totals} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                totals={totals}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
                onClear={clearCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} totals={totals} onClear={clearCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
