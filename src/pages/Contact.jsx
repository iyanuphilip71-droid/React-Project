import { useState } from 'react'
import FormField from '../components/FormField.jsx'
import InfoCard from '../components/InfoCard.jsx'
import { isValidEmail } from '../utils/validators.js'

const emptyForm = { fullName: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}

  if (values.fullName.trim() === '') errors.fullName = 'Full name is required.'

  if (values.email.trim() === '') {
    errors.email = 'Email address is required.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.subject.trim() === '') errors.subject = 'Subject is required.'

  if (values.message.trim() === '') {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setSubmitted(false)
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundErrors = validate(form)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length > 0) {
      setSubmitted(false)
      return
    }

    // Sample submission: no backend, so we just show a success message
    setSubmitted(true)
    setForm(emptyForm)
  }

  const hasErrors = Object.keys(errors).some((key) => errors[key])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Questions, feedback or special orders? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="sample-note">
            ℹ️ The contact details below are <strong>sample details</strong> for this student
            project.
          </p>

          <div className="contact-layout">
            <div className="contact-info">
              <InfoCard icon="📧" title="Email" text="philipiyanu71@gmail.com" />
              <InfoCard icon="📞" title="Telephone" text="+234 812 064 6141" />
              <InfoCard icon="📍" title="Location" text="Sunshine Garden Estate, Ondo" />
              <InfoCard icon="🕒" title="Opening Hours" text="Monday to Sunday, 8:00 AM to 10:00 PM" />
            </div>

            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <h2>Send Us a Message</h2>

              {submitted && (
                <div className="alert alert-success" role="status">
                  ✅ Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}
              {hasErrors && (
                <div className="alert alert-error" role="alert">
                  Please fix the highlighted fields below.
                </div>
              )}

              <FormField
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
                placeholder="Your full name"
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="you@example.com"
              />
              <FormField
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What is this about?"
              />
              <FormField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Write your message here..."
                textarea
              />

              <button type="submit" className="btn btn-primary btn-block">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
