import { Camera, CirclePlay, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { WhatsAppButton } from './WhatsAppButton'
import { BackToTopButton } from './BackToTopButton'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Admin', to: '/admin/login' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/"><img className="brand-logo" src="/images/anbu-academy-logo.png" alt="ANBU Educational Academy logo" /><span>ANBU Educational Academy</span></NavLink>
        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
          ))}
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-main"><div><NavLink className="brand" to="/"><img className="brand-logo" src="/images/anbu-academy-logo.png" alt="ANBU Educational Academy logo" /><span>ANBU Educational Academy</span></NavLink><p>Helping children grow through joyful, skill-based learning.</p></div><div className="footer-contact"><a href="tel:+918778158642"><Phone size={16} /> 8778158642</a><a href="mailto:anbueduacademy2021@gmail.com"><Mail size={16} /> anbueduacademy2021@gmail.com</a><a href="https://www.google.com/maps?q=Anbu+Hospital+1st+Floor+No.7+Odaikarai+Street+TMB+Opp+Cumbum+Theni+625516" target="_blank" rel="noreferrer"><MapPin size={16} /> Cumbum, Theni</a></div><div><p className="footer-social-label">Follow ANBU Educational Academy</p><div className="footer-socials"><a href="https://wa.me/918778158642" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={18} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="ANBU Educational Academy on Instagram"><Camera size={18} /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="ANBU Educational Academy on Facebook">f</a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="ANBU Educational Academy on YouTube"><CirclePlay size={18} /></a></div></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ANBU Educational Academy. All rights reserved.</span><span>Social profile links can be updated in Admin Settings.</span></div>
      </footer>
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  )
}
