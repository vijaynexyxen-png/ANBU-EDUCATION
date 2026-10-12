import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href="https://wa.me/918778158642" target="_blank" rel="noreferrer" aria-label="Chat with ANBU Educational Academy on WhatsApp">
      <MessageCircle aria-hidden="true" size={20} />
      WhatsApp
    </a>
  )
}
