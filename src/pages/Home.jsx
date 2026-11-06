import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import FoodList from '../components/FoodList.jsx'
import InfoCard from '../components/InfoCard.jsx'
import FoodImage from '../components/FoodImage.jsx'
import foods from '../data/foods.js'
import categories from '../data/categories.js'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=75'

const reasons = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    text: 'Hot meals at your door in as little as 30 minutes.',
  },
  {
    icon: '🥗',
    title: 'Fresh Ingredients',
    text: 'Every dish is prepared fresh from quality, locally sourced ingredients.',
  },
  {
    icon: '💳',
    title: 'Easy Ordering',
    text: 'Browse, add to cart and checkout in just a few clicks.',
  },
  {
    icon: '💰',
    title: 'Fair Prices',
    text: 'Delicious food at honest prices, with no hidden charges.',
  },
]

export default function Home({ onAdd }) {
  // Show only the meals marked as "featured" in the data file
  const featuredMeals = foods.filter((food) => food.featured)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow">🍽️ Online Food Ordering</span>
            <h1>Delicious Food, Delivered To Your Door.</h1>
            <p>
              Order your favourite Nigerian dishes, fast food, snacks and drinks from the comfort of
              your home. Fresh, hot and always on time.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary btn-large">
                Order Now
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
            <ul className="hero-stats">
              <li><strong>18+</strong> Meals</li>
              <li><strong>30 min</strong> Delivery</li>
              <li><strong>4.8★</strong> Rated</li>
            </ul>
          </div>
          <div className="hero-image">
            <FoodImage src={HERO_IMAGE} alt="A table of delicious meals" emoji="🍲" />
          </div>
        </div>
      </section>

      {/* FEATURED MEALS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Customer favourites"
            title="Featured Meals"
            subtitle="Our most loved dishes. Add them to your cart in one click."
          />
          <FoodList foods={featuredMeals} onAdd={onAdd} />
          <div className="center mt">
            <Link to="/menu" className="btn btn-outline">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeading
            eyebrow="What are you craving?"
            title="Popular Food Categories"
            subtitle="Pick a category and jump straight to the meals you love."
          />
          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/menu?category=${encodeURIComponent(cat.name)}`}
                className="category-card"
              >
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why FoodieHub?"
            title="Why Customers Choose Us"
            subtitle="We make ordering food simple, quick and enjoyable."
          />
          <div className="info-grid">
            {reasons.map((reason) => (
              <InfoCard
                key={reason.title}
                icon={reason.icon}
                title={reason.title}
                text={reason.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <div className="container cta-inner">
          <h2>Hungry? Your meal is a few clicks away.</h2>
          <Link to="/menu" className="btn btn-primary btn-large">
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
