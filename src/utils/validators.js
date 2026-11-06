export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

// Accepts numbers like 08012345678, +2348012345678 or 0801 234 5678
export function isValidPhone(phone) {
  const cleaned = phone.replace(/[\s-]/g, '')
  return /^\+?\d{10,14}$/.test(cleaned)
}
