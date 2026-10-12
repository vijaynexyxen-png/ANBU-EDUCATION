import { ArrowRight, CheckCircle2, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CourseCatalog } from '../features/CourseCatalog'
import { ParentReviews } from '../features/ParentReviews'

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> A happy place to learn</p>
          <h1>Little steps.<br /><em>Big confidence.</em></h1>
          <p className="hero-description">Nurturing young minds through joyful, skill-based learning—from beautiful handwriting to quick mental maths and music.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/courses">Explore courses <ArrowRight size={18} /></Link>
            <Link className="button button-secondary" to="/gallery"><PlayCircle size={19} /> See our classes</Link>
          </div>
          <div className="parent-note"><span className="avatar-stack"><b>R</b><b>M</b><b>S</b></span><span>Loved by parents and little learners</span></div>
        </div>
        <div className="hero-visual">
          <div className="sun-shape" />
          <img src="/images/learning-hero.png" alt="Children enjoying a creative learning activity" />
          <div className="hero-sticker sticker-top"><strong>Small wins,</strong><br />every day</div>
          <div className="hero-sticker sticker-bottom">Learn with <span>joy</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our learning approach">
        <p><CheckCircle2 size={19} /> Child-friendly teaching</p>
        <p><CheckCircle2 size={19} /> Small, supportive batches</p>
        <p><CheckCircle2 size={19} /> Progress you can see</p>
      </section>

      <section className="home-section courses-preview">
        <div className="section-heading">
          <div><p className="eyebrow">Find their favourite way to grow</p><h2>Skills that stay with them</h2></div>
          <Link className="text-link" to="/courses">View all courses <ArrowRight size={17} /></Link>
        </div>
        <CourseCatalog variant="slider" />
      </section>

      <section className="home-section why-section">
        <div className="why-image"><img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85" alt="Teacher helping children learn" loading="lazy" /></div>
        <div className="why-copy">
          <p className="eyebrow">More than a class</p>
          <h2>A safe space to try, practise and shine.</h2>
          <p>Every child learns differently. At ANBU Educational Academy, we meet them with patience, encouragement and activities that make learning feel exciting.</p>
          <ul><li>Personal attention for every learner</li><li>Practical, confidence-building activities</li><li>Warm guidance for parents too</li></ul>
          <Link className="text-link" to="/about">Get to know us <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="home-section review-section">
        <div className="section-heading">
          <div><p className="eyebrow">From our parent community</p><h2>They see the difference.</h2></div>
          <p className="review-heading-note">Small steps in class can lead to big changes at home.</p>
        </div>
        <ParentReviews />
      </section>

      <section className="home-cta">
        <div><p className="eyebrow">Let’s start the journey</p><h2>Ready to help your child discover more?</h2></div>
        <Link className="button button-light" to="/contact">Talk to us <ArrowRight size={18} /></Link>
      </section>
    </>
  )
}
