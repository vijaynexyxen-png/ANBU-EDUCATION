import { LockKeyhole, ShieldCheck } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function AdminLoginForm() {
  const navigate = useNavigate()

  return (
    <main className="admin-login-page">
      <section className="admin-login-intro"><Link className="admin-brand" to="/">ANBU Educational Academy</Link><div><span className="admin-shield"><ShieldCheck size={27} /></span><p className="eyebrow">Administrator access</p><h1>Welcome back.</h1><p>Sign in to manage courses, payment submissions, gallery content and parent enquiries.</p></div><small>ANBU Educational Academy Administration</small></section>
      <section className="admin-login-form-wrap"><form className="admin-login-form"><Link className="mobile-admin-brand" to="/">ANBU Educational Academy</Link><p className="eyebrow">Secure sign in</p><h2>Admin login</h2><p>Use your authorised administrator account.</p><div className="demo-login-details"><b>Demo access</b><span><strong>Username:</strong> admin@anbuacademy.in</span><span><strong>Password:</strong> demo123</span></div><label>Email address<input type="email" defaultValue="admin@anbuacademy.in" /></label><label>Password<input type="password" defaultValue="demo123" /></label><button className="button button-primary" type="button" onClick={() => navigate('/admin')}><LockKeyhole size={17} /> Sign in</button><small>Demo sign-in opens the sample dashboard. Supabase authentication will replace this before launch.</small></form></section>
    </main>
  )
}
