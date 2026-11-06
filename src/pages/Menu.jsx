import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import FoodList from '../components/FoodList.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import foods from '../data/foods.js'
import categories from '../data/categories.js'
import { formatNaira } from '../utils/helpers.js'

export default function Menu({ onAdd, totals }) {
  // Home page category cards link here with ?category=Drinks etc.
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const startCategory = categories.some((c) => c.name === categoryFromUrl)
    ? categoryFromUrl
    : 'All'

  const [category, setCategory] = useState(startCategory)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  // If the URL category changes (e.g. user clicks a category card again)
  useEffect(() => {
    setCategory(startCategory)
  }, [startCategory])

  // Short "loading" state to demonstrate loading messages
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const search = query.trim().toLowerCase()

  const visibleFoods = foods.filter((food) => {
    const matchesCategory = category === 'All' || food.category === category
    const matchesSearch =
      search === '' ||
      food.name.toLowerCase().includes(search) ||
      food.description.toLowerCase().includes(search)
    return matchesCategory && matchesSearch
  })

  const clearFilters = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Fresh meals, snacks and drinks. Pick your favourites and add them to your cart.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="toolbar">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          </div>

          {loading ? (
            <Loader text="Loading delicious meals..." />
          ) : visibleFoods.length === 0 ? (
            <EmptyState
              icon="🔎"
              title="No meals found"
              message="We couldn't find any meals matching your search. Try a different word or category."
            >
              <button type="button" className="btn btn-primary" onClick={clearFilters}>
                Clear Filters
              </button>
            </EmptyState>
          ) : (
            <>
              <p className="result-count">
                Showing {visibleFoods.length} {visibleFoods.length === 1 ? 'meal' : 'meals'}
              </p>
              <FoodList foods={visibleFoods} onAdd={onAdd} />
            </>
          )}
        </div>
      </section>

      {/* Floating cart bar appears once something is in the cart */}
      {totals.itemCount > 0 && (
        <div className="cart-bar">
          <span>
            🛒 {totals.itemCount} {totals.itemCount === 1 ? 'item' : 'items'} ·{' '}
            <strong>{formatNaira(totals.subtotal)}</strong>
          </span>
          <Link to="/cart" className="btn btn-small btn-primary">
            View Cart
          </Link>
        </div>
      )}
    </>
  )
}
