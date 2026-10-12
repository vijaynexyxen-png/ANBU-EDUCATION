import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CourseCatalog } from '../features/CourseCatalog'

export function CoursesPage() {
  return <>
    <section className="page-intro"><p className="eyebrow">Our programmes</p><h1>Small classes. <em>Big possibilities.</em></h1><p>Thoughtfully designed courses that build practical skills and lifelong confidence.</p></section>
    <section className="catalogue-section"><CourseCatalog /></section>
    <section className="course-note"><div><p className="eyebrow">Not sure where to begin?</p><h2>We’ll help you find the right fit.</h2><p>Tell us your child’s age and interests, and we’ll guide you to the best course.</p></div><Link className="button button-primary" to="/contact">Talk to us <ArrowRight size={18} /></Link></section>
    <section className="course-benefits"><p><CheckCircle2 size={19} /> Friendly instructors</p><p><CheckCircle2 size={19} /> Progress-based learning</p><p><CheckCircle2 size={19} /> Parent support</p></section>
  </>
}
