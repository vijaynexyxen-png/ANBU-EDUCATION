import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useRef } from 'react'

const reviews = [
  { quote: 'My child looks forward to every class. The teacher makes learning feel simple and encouraging.', name: 'Parent review', child: 'Handwriting programme', initial: 'A' },
  { quote: 'We have seen such a lovely improvement in focus and confidence. The small-batch attention really helps.', name: 'Parent review', child: 'Abacus programme', initial: 'R' },
  { quote: 'The learning environment is warm and welcoming. My child feels comfortable asking questions here.', name: 'Parent review', child: 'ANBU Educational Academy family', initial: 'S' },
  { quote: 'The study updates make it easy to understand what my child is learning and where support is needed.', name: 'Parent review', child: 'Tuition programme', initial: 'P' },
  { quote: 'My child is much more comfortable speaking Hindi now. The daily practice has made a real difference.', name: 'Parent review', child: 'Hindi Classes programme', initial: 'K' },
  { quote: 'There is such a positive change in confidence. The team genuinely cares about every learner.', name: 'Parent review', child: 'ANBU Educational Academy family', initial: 'N' },
]

export function ParentReviews() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const moveSlider = (direction: number) => {
    const slider = sliderRef.current
    if (!slider) return

    const isMobile = window.innerWidth <= 760
    const step = slider.clientWidth / (isMobile ? 1 : 3)
    const atStart = slider.scrollLeft <= 2
    const atEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 2

    if (direction > 0 && atEnd) slider.scrollTo({ left: 0, behavior: 'smooth' })
    else if (direction < 0 && atStart) slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' })
    else slider.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="card-slider">
      <div className="slider-viewport" ref={sliderRef}><div className="review-track">
      {reviews.map((review) => (
        <article className="review-card" key={review.quote}>
          <Quote aria-hidden="true" className="review-quote" size={27} />
          <div className="stars" aria-label="Five stars">{Array.from({ length: 5 }, (_, index) => <Star fill="currentColor" key={index} size={15} />)}</div>
          <p>“{review.quote}”</p>
          <footer><span className="review-avatar">{review.initial}</span><span><b>{review.name}</b><small>{review.child}</small></span></footer>
        </article>
      ))}
      </div></div>
      <div className="slider-controls"><span>More stories from our parent community</span><div><button type="button" onClick={() => moveSlider(-1)} aria-label="Previous reviews"><ChevronLeft size={20} /></button><button type="button" onClick={() => moveSlider(1)} aria-label="Next reviews"><ChevronRight size={20} /></button></div></div>
    </div>
  )
}
