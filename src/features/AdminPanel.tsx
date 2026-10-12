import { Bell, BookOpen, ChevronRight, ClipboardCheck, ExternalLink, FileImage, LayoutDashboard, LogOut, Mail, Menu, MoreHorizontal, Plus, Settings, UsersRound } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Payment reviews', icon: ClipboardCheck, badge: '6' },
  { label: 'Enquiries', icon: Mail, badge: '4' },
  { label: 'Courses', icon: BookOpen },
  { label: 'Gallery', icon: FileImage },
  { label: 'Site settings', icon: Settings },
]

const payments = [
  { child: 'Aarav Kumar', course: 'Abacus', parent: 'Priya Kumar', amount: '₹1,499', status: 'Pending' },
  { child: 'Diya S.', course: 'Handwriting', parent: 'Sangeetha', amount: '₹799', status: 'Pending' },
  { child: 'Rithvik M.', course: 'Hindi Classes', parent: 'Meena', amount: '₹999', status: 'Pending' },
]

export function AdminPanel() {
  const [activeItem, setActiveItem] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="admin-app">
      <aside className={`admin-sidebar ${menuOpen ? 'is-open' : ''}`}>
        <Link className="admin-brand" to="/">ANBU Educational Academy</Link>
        <p className="sidebar-label">Management</p>
        <nav className="admin-nav" aria-label="Admin navigation">{navigation.map(({ label, icon: Icon, badge }) => <button type="button" className={activeItem === label ? 'active' : ''} key={label} onClick={() => { setActiveItem(label); setMenuOpen(false) }}><Icon size={18} /><span>{label}</span>{badge && <b>{badge}</b>}</button>)}</nav>
        <div className="admin-sidebar-bottom"><div className="admin-profile"><span>AA</span><div><b>ANBU Admin</b><small>Administrator</small></div></div><Link to="/admin/login"><LogOut size={18} /> Sign out</Link></div>
      </aside>
      {menuOpen && <button className="admin-sidebar-backdrop" type="button" aria-label="Close dashboard menu" onClick={() => setMenuOpen(false)} />}
      <section className="admin-content">
        <header className="admin-topbar"><button className="admin-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle dashboard menu"><Menu size={21} /></button><div><p>Administration</p><h1>{activeItem}</h1></div><div className="admin-top-actions"><Link to="/" target="_blank"><ExternalLink size={17} /> View website</Link><button type="button" aria-label="Notifications"><Bell size={20} /><i /></button></div></header>
        <div className="admin-page-content">
          {activeItem === 'Overview' && <Overview />}
          {activeItem === 'Payment reviews' && <PaymentReviews />}
          {activeItem === 'Enquiries' && <Enquiries />}
          {activeItem === 'Courses' && <CoursesManager />}
          {activeItem === 'Gallery' && <GalleryManager />}
          {activeItem === 'Site settings' && <SiteSettings />}
        </div>
      </section>
    </main>
  )
}

function Overview() {
  return <>
    <section className="admin-welcome"><div><p className="eyebrow">Good morning, ANBU Admin</p><h2>Here’s what needs your attention.</h2><p>Review new enrolment payments and respond to parent enquiries to keep everything moving.</p></div><Link className="button button-primary" to="/courses"><Plus size={18} /> Add course</Link></section>
    <section className="admin-stat-grid"><Stat icon={ClipboardCheck} label="Pending payment reviews" value="6" change="2 new today" color="coral" /><Stat icon={Mail} label="New parent enquiries" value="4" change="Since yesterday" color="yellow" /><Stat icon={UsersRound} label="Enrolments this month" value="28" change="Up 12% this month" color="purple" /></section>
    <section className="admin-dashboard-grid"><article className="admin-card payment-card"><header><div><p className="eyebrow">Payment reviews</p><h3>Awaiting approval</h3></div><button type="button" aria-label="More payment actions"><MoreHorizontal size={20} /></button></header><div className="payment-list">{payments.map((payment) => <div className="payment-row" key={payment.child}><span className="child-initial">{payment.child[0]}</span><div><b>{payment.child}</b><small>{payment.course} · {payment.parent}</small></div><span>{payment.amount}</span><em>{payment.status}</em><button type="button" aria-label={`Review ${payment.child}`}><ChevronRight size={18} /></button></div>)}</div><button className="admin-text-button" type="button">View all payment submissions <ChevronRight size={16} /></button></article>
      <article className="admin-card quick-card"><p className="eyebrow">Quick actions</p><h3>Manage your institute</h3><button type="button"><BookOpen size={18} /> Edit courses <ChevronRight size={17} /></button><button type="button"><FileImage size={18} /> Add gallery content <ChevronRight size={17} /></button><button type="button"><Settings size={18} /> Update payment QR <ChevronRight size={17} /></button></article></section>
  </>
}

function Stat({ icon: Icon, label, value, change, color }: { icon: typeof ClipboardCheck; label: string; value: string; change: string; color: string }) {
  return <article className={`admin-stat ${color}`}><span><Icon size={20} /></span><p>{label}</p><h3>{value}</h3><small>{change}</small></article>
}

function PaymentReviews() {
  return <section className="admin-workspace"><header className="workspace-header"><div><p className="eyebrow">Enrolments</p><h2>Payment reviews</h2><p>Verify payment screenshots before confirming a child’s enrolment.</p></div><button className="button button-secondary" type="button">Download report</button></header><div className="admin-table-wrap"><table><thead><tr><th>Child & parent</th><th>Course</th><th>Amount</th><th>Screenshot</th><th>Status</th><th /></tr></thead><tbody>{payments.map((payment) => <tr key={payment.child}><td><b>{payment.child}</b><small>{payment.parent}</small></td><td>{payment.course}</td><td>{payment.amount}</td><td><button className="table-link" type="button">View image</button></td><td><span className="status-pill pending">Pending</span></td><td><button className="table-action" type="button">Review <ChevronRight size={16} /></button></td></tr>)}</tbody></table></div></section>
}

function Enquiries() {
  const enquiries = [['Kavya R.', 'Handwriting', 'Today, 10:30 AM'], ['Suresh P.', 'Tuition', 'Yesterday, 4:20 PM'], ['Meera A.', 'Abacus', 'Yesterday, 11:15 AM']]
  return <section className="admin-workspace"><header className="workspace-header"><div><p className="eyebrow">Parent communication</p><h2>Enquiries</h2><p>Follow up with parents interested in ANBU Educational Academy programmes.</p></div></header><div className="enquiry-list">{enquiries.map(([name, interest, time]) => <article key={name}><span className="child-initial">{name[0]}</span><div><b>{name}</b><p>Interested in <strong>{interest}</strong></p><small>{time}</small></div><button className="table-action" type="button">View enquiry <ChevronRight size={16} /></button></article>)}</div></section>
}

function CoursesManager() {
  const courseNames = ['Handwriting', 'Abacus', 'Tuition', 'Hindi Classes']
  return <section className="admin-workspace"><header className="workspace-header"><div><p className="eyebrow">Programme catalogue</p><h2>Courses</h2><p>Update course descriptions, prices and publishing status.</p></div><button className="button button-primary" type="button"><Plus size={17} /> Add course</button></header><div className="course-manager-grid">{courseNames.map((name, index) => <article key={name}><span className={`admin-course-dot dot-${index}`} /><div><b>{name}</b><small>Published · {['Contact the centre', '₹1,000 / month', 'Contact the centre', 'Contact the centre'][index]}</small></div><button type="button">Edit</button></article>)}</div></section>
}

function GalleryManager() {
  return <section className="admin-workspace"><header className="workspace-header"><div><p className="eyebrow">Images & videos</p><h2>Gallery</h2><p>Add classroom images or an unlisted YouTube video link.</p></div><button className="button button-primary" type="button"><Plus size={17} /> Add content</button></header><div className="gallery-manager-grid"><button type="button" className="gallery-upload"><FileImage size={25} /><b>Upload image</b><span>JPG, PNG or WebP</span></button><button type="button" className="gallery-upload"><ExternalLink size={25} /><b>Add YouTube video</b><span>Use an unlisted video URL</span></button></div></section>
}

function SiteSettings() {
  return <section className="admin-workspace"><header className="workspace-header"><div><p className="eyebrow">Institute configuration</p><h2>Site settings</h2><p>Keep your contact details, payment QR and social links up to date.</p></div></header><form className="settings-form"><label>WhatsApp number<input placeholder="Enter WhatsApp number" /></label><label>Institute email<input type="email" placeholder="Enter email address" /></label><label>Instagram URL<input placeholder="https://instagram.com/..." /></label><label>Payment QR code<span className="upload-field"><FileImage size={18} /> Upload QR image</span></label><button className="button button-primary" type="button">Save changes</button></form></section>
}
