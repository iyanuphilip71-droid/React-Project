// Reusable block for the About page: icon + title + paragraph or list
export default function AboutSection({ icon, title, text, points }) {
  return (
    <section className="about-block">
      <div className="about-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {points && (
          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
