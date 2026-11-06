export default function EmptyState({ icon = '🍽️', title, message, children }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
    </div>
  )
}
