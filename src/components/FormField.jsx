// Reusable controlled form field (input or textarea) with an error message
export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  textarea = false,
  rows = 5,
}) {
  const inputProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    className: error ? 'input input-error' : 'input',
    'aria-invalid': error ? 'true' : 'false',
  }

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea rows={rows} {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}
