import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState.jsx'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <EmptyState
          icon="🍽️"
          title="404 · Page not found"
          message="Sorry, the page you're looking for doesn't exist."
        >
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </EmptyState>
      </div>
    </section>
  )
}
