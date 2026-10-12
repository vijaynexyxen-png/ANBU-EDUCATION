import { CheckCircle2, ChevronLeft, ChevronRight, QrCode, ShieldCheck, Upload } from 'lucide-react'
import { useState } from 'react'

type PaymentSubmissionProps = { courseName?: string; price?: string }

export function PaymentSubmission({ courseName = 'Selected course', price = '₹0' }: PaymentSubmissionProps) {
  const [step, setStep] = useState(1)

  return <section className="payment-section" aria-label="Payment submission">
    <div className="payment-steps">
      <p className="eyebrow">Simple and secure</p><h2>Complete your enrolment in three easy steps.</h2>
      <ol><li><b>1</b><span>Enter your child’s details</span></li><li><b>2</b><span>Pay {price} using the ANBU Educational Academy QR code</span></li><li><b>3</b><span>Upload your payment screenshot for review</span></li></ol>
      <div className="qr-payment-card"><div className="qr-heading"><QrCode size={20} /><span><b>ANBU Educational Academy payment</b><small>Temporary QR code</small></span></div><img src="/images/payment-qr-placeholder.svg" alt="Temporary payment QR code" /><p>Scan this code with any UPI payment app.</p><strong>{price}</strong><small>This placeholder will be replaced with the academy’s live UPI QR code.</small></div>
      <p className="payment-note"><CheckCircle2 size={18} /> Your enrolment is confirmed after the payment is reviewed by our team.</p>
    </div>

    <form className="enrol-form">
      <div className="enrol-form-heading"><p className="eyebrow">Student application</p><h3>{courseName}</h3><span>{price}</span></div>
      <div className="enrol-progress" aria-label={`Step ${step} of 3`}><span className={step >= 1 ? 'active' : ''}>1. Student</span><span className={step >= 2 ? 'active' : ''}>2. Parent & family</span><span className={step >= 3 ? 'active' : ''}>3. Payment</span></div>

      <section className={`enrol-form-section enrolment-step ${step === 1 ? 'active' : ''}`} aria-hidden={step !== 1}>
        <h4>Student details</h4>
        <div className="form-two-columns"><label>Application date<input type="date" required /></label><label>Name of the student<input placeholder="Student’s full name" required /></label><label>Date of birth<input type="date" required /></label><label>Standard<input placeholder="For example, Class 4" required /></label><label>Name of the school<input placeholder="School name" required /></label><label>Activity<input value={courseName} readOnly /></label></div>
        <label>School address<textarea rows={3} placeholder="School address" required /></label><label>Residential address<textarea rows={3} placeholder="Home address" required /></label>
      </section>

      <section className={`enrol-form-section enrolment-step ${step === 2 ? 'active' : ''}`} aria-hidden={step !== 2}>
        <h4>Parent details</h4>
        <div className="form-two-columns"><label>Name of the father<input placeholder="Father’s full name" required /></label><label>Father’s qualification<input placeholder="For example, B.Com." /></label><label>Father’s occupation<input placeholder="Occupation" /></label><label>Name of the mother<input placeholder="Mother’s full name" required /></label><label>Mother’s qualification<input placeholder="For example, B.A." /></label><label>Mother’s occupation<input placeholder="Occupation" /></label></div>
        <h4>Contact details</h4>
        <div className="form-two-columns"><label>Father’s mobile number<input type="tel" placeholder="Mobile number" required /></label><label>Mother’s mobile number<input type="tel" placeholder="Mobile number" /></label><label>Father’s email ID<input type="email" placeholder="father@example.com" /></label><label>Mother’s email ID<input type="email" placeholder="mother@example.com" /></label></div>
        <h4>Brothers and sisters</h4>
        <div className="form-two-columns"><label>Sibling 1 name<input placeholder="Name" /></label><label>Sibling 1 standard<input placeholder="Standard" /></label><label>Sibling 2 name<input placeholder="Name" /></label><label>Sibling 2 standard<input placeholder="Standard" /></label></div>
      </section>

      <section className={`enrol-form-section enrolment-step ${step === 3 ? 'active' : ''}`} aria-hidden={step !== 3}>
        <h4>Payment details</h4>
        <div className="payment-form-section"><div className="form-two-columns"><label>UPI transaction ID<input placeholder="Enter transaction ID" required /></label><label>Payment date<input type="date" required /></label></div><label>Payment screenshot<span className="upload-field"><Upload size={19} /> Upload payment proof (JPG, PNG or PDF)</span></label></div>
        <label>Anything we should know? <textarea rows={3} placeholder="Optional note for the ANBU Educational Academy team" /></label>
        <p className="secure-note"><ShieldCheck size={17} /> Your details are used only to process your enrolment.</p>
      </section>

      <div className="enrol-step-actions">{step > 1 ? <button className="button button-secondary" type="button" onClick={() => setStep(step - 1)}><ChevronLeft size={18} /> Back</button> : <span />}{step < 3 ? <button className="button button-primary" type="button" onClick={() => setStep(step + 1)}>Continue <ChevronRight size={18} /></button> : <button className="button button-primary" type="button">Submit for review</button>}</div>
    </form>
  </section>
}
