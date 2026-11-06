// Controlled search input: the value lives in the parent's state
export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon" aria-hidden="true">🔍</span>
      <input
        type="search"
        placeholder="Search for a meal..."
        aria-label="Search meals"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
