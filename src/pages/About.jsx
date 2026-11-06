import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import AboutSection from '../components/AboutSection.jsx'
import InfoCard from '../components/InfoCard.jsx'

const steps = [
  { icon: '1️⃣', title: 'Browse', text: 'Explore the menu and search or filter by category.' },
  { icon: '2️⃣', title: 'Add to Cart', text: 'Choose your meals and adjust quantities any time.' },
  { icon: '3️⃣', title: 'Checkout', text: 'Enter your delivery details and place your order.' },
  { icon: '4️⃣', title: 'Enjoy', text: 'Your food arrives hot and fresh at your door.' },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About FoodieHub</h1>
          <p>Making great food easier to order, one meal at a time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <AboutSection
            icon="🍴"
            title="What FoodieHub Does"
            text="FoodieHub is an online food ordering system that lets customers browse a menu of Nigerian and international meals, add them to a cart, and place a delivery order from any phone or computer, without calling a restaurant or waiting in a queue."
          />
          <AboutSection
            icon="🏠"
            title="Our Background & Purpose"
            text="FoodieHub started with a simple idea: busy people deserve good food without the stress. Many local kitchens cook wonderful meals but struggle to reach customers online. Our platform connects hungry customers with freshly prepared food and makes ordering quick, clear and reliable."
          />
          <AboutSection
            icon="🎯"
            title="Our Mission"
            text="To deliver delicious, affordable and freshly prepared meals to every customer through a simple, fast and trustworthy ordering experience."
          />
          <AboutSection
            icon="🔭"
            title="Our Vision"
            text="To become the most loved food ordering platform in Nigeria, celebrating local flavours and supporting local kitchens."
          />
          <AboutSection
            icon="✅"
            title="Our Objectives"
            points={[
              'Provide an easy-to-use menu with clear prices in Naira.',
              'Let customers order in a few clicks from any device.',
              'Keep orders accurate with a transparent cart and summary.',
              'Deliver fresh, hot meals within a short time.',
              'Support local chefs and promote Nigerian dishes.',
            ]}
          />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Simple & convenient"
            title="How Ordering Becomes Easier"
            subtitle="Four easy steps from hungry to happy."
          />
          <div className="info-grid">
            {steps.map((step) => (
              <InfoCard key={step.title} icon={step.icon} title={step.title} text={step.text} />
            ))}
          </div>
          <div className="center mt">
            <Link to="/menu" className="btn btn-primary btn-large">
              Start Ordering
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
