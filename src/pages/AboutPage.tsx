import { Heart, Sparkles, UserRound, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return <>
    <section className="about-hero-banner" aria-label="ANBU Educational Academy programmes"><img src="/images/anbu-academy-programmes-banner.png" alt="ANBU Educational Academy programme flyer" /></section>
    <section className="inner-hero about-hero"><div><p className="eyebrow">About ANBU Educational Academy</p><h1>Growing skills, <em>growing confidence.</em></h1><p>We believe that learning is most powerful when a child feels seen, supported and excited to try.</p></div><img src="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=900&q=85" alt="Children enjoying an activity together" loading="lazy" /></section>
    <section className="founder-section"><img src="https://placehold.co/560x560/f8efc9/254d3b?text=Founder+Photo" alt="Placeholder for Mrs. K. Jayaranjini's photograph" /><div><span><UserRound size={25} /></span><p className="eyebrow">Founder</p><h2>Mrs. K. Jayaranjini, M.Sc., M.Ed.</h2><p>Guiding ANBU Educational Academy with a commitment to thoughtful, encouraging learning for every child.</p></div></section>
    <section className="story-section"><p className="eyebrow">Our approach</p><h2>Every child deserves a place to discover what they can do.</h2><p>ANBU Educational Academy is a warm learning space for children to build useful skills beyond the school curriculum. Through careful guidance, hands-on practice and plenty of encouragement, we help each learner progress at their own pace.</p></section>
    <section className="value-grid"><article><span><Heart size={24} /></span><h3>Kind guidance</h3><p>We lead with patience, celebrate small wins and make every child feel welcome.</p></article><article><span><Sparkles size={24} /></span><h3>Joyful learning</h3><p>Activities are engaging, age-appropriate and designed to spark curiosity.</p></article><article><span><UsersRound size={24} /></span><h3>Real connection</h3><p>Small batches allow teachers to know every learner and partner with parents.</p></article></section>
    <section className="home-cta about-cta"><div><p className="eyebrow">Come learn with us</p><h2>A brighter start begins with one small step.</h2></div><Link className="button button-light" to="/contact">Visit ANBU Educational Academy</Link></section>
  </>
}
