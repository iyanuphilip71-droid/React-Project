export default function CategoryFilter({ categories, active, onChange }) {
  const options = ['All', ...categories.map((c) => c.name)]

  return (
    <div className="category-filter" role="tablist" aria-label="Food categories">
      {options.map((name) => (
        <button
          key={name}
          type="button"
          className={name === active ? 'chip active' : 'chip'}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
