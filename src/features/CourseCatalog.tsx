import { BookOpen, BookOpenCheck, Calculator, ChevronLeft, ChevronRight, Dumbbell, Gamepad2, Languages, MessageCircle, Palette, PenLine, Shapes } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export const courses = [
  { title: 'Handwriting', detail: 'Cursive writing in Tamil & English for UKG to XII.', icon: PenLine, slug: 'handwriting', color: 'coral', age: 'UKG to XII', duration: '3 months', price: 'Contact the centre', description: 'Handwriting practice for UKG to XII: cursive letter writing in Tamil and English, with special practice for Classes X to XII public-exam students.', learningPoints: ['4-line notebook practice', 'Single-line (ruled) notebook practice', 'Letter formation and proper spacing', 'Neat and beautiful handwriting', 'Speed-writing practice (age-wise)', 'Cursive and print-writing practice', 'Pencil grip and writing-posture training', 'Copy writing and paragraph writing', 'Writing accuracy and presentation skills', 'Exam-paper presentation techniques', 'Daily writing exercises', 'Individual attention for every student', 'Progress evaluation and parent feedback', 'Improve confidence through better handwriting'] },
  { title: 'Abacus', detail: 'Mental arithmetic with levels 1 to 8.', icon: Calculator, slug: 'abacus', color: 'yellow', age: '5 years and above', duration: '3 months per level', price: '₹1,000 / month', description: 'The Abacus course is designed to improve children’s mental arithmetic skills using the abacus tool. Students learn addition, subtraction, multiplication and division through step-by-step practice, then develop the ability to solve calculations mentally without using the abacus.', learningPoints: ['Listening skills', 'Learning ability', 'Fast reading', 'Fast writing', 'Fast mental calculation', 'Memory power', 'Speed and accuracy', 'Logical thinking', 'Decision-making skills', 'Self-confidence', 'Confidence in mathematics'] },
  { title: 'Tuition', detail: 'Academic support for Tamil, Matric, CBSE & ICSE.', icon: BookOpenCheck, slug: 'tuition', color: 'purple', age: 'UKG to X', duration: '2.5 hours per student', price: 'Contact the centre', description: 'Tuition special features for UKG to X students in Tamil, Matric, CBSE and ICSE, with a maximum of 10 students per class and experienced, qualified teachers.', learningPoints: ['Regular Tamil and English reading practice', 'Special Mathematics coaching', 'Separate teacher for Hindi', 'Separate teachers for other subjects', 'Daily homework and study monitoring', 'Daily study report shared with parents via WhatsApp', 'Parents can share homework details via WhatsApp', 'Teachers included in the WhatsApp group', 'Regular parent-teacher communication', 'Individual attention and academic support'] },
  { title: 'Hindi Classes', detail: 'Hindi Sabha Exam & Bolchal (Spoken Hindi) practice.', icon: Languages, slug: 'hindi-classes', color: 'coral', age: '7 years and above', duration: '1.5 hours per student', price: 'Contact the centre', description: 'Hindi Classes special features: Hindi Sabha Exam and Bolchal (Spoken Hindi) practice with an experienced, qualified teacher in limited-student batches.', learningPoints: ['Hindi Sabha Exam and Bolchal (Spoken Hindi) practice', 'Daily 30-minute Bolchal (Spoken Hindi) practice', 'Regular reading and writing practice', 'Grammar and vocabulary practice', 'Daily conversation practice', 'Listening and pronunciation practice', 'Individual attention', 'Regular test and exam-oriented practice', 'Confidence-building in spoken Hindi'] },
  { title: 'Spoken English', detail: 'Spoken English practice for adults.', icon: MessageCircle, slug: 'spoken-english', color: 'yellow', age: 'Adults', duration: 'Contact the centre', price: 'Contact the centre', description: 'A supportive Spoken English programme for adults to build comfort, vocabulary and confidence in everyday communication.', learningPoints: ['Everyday spoken English practice', 'Vocabulary-building activities', 'Listening and pronunciation practice', 'Simple conversation exercises', 'Confidence in real-life communication'] },
  { title: 'Reading Practice', detail: 'Tamil, English and Hindi reading practice.', icon: BookOpen, slug: 'reading-practice', color: 'yellow', age: 'Contact the centre', duration: 'Contact the centre', price: 'Contact the centre', description: 'Language reading practice in Tamil, English and Hindi to build fluency, pronunciation and confidence.', learningPoints: ['Tamil reading practice', 'English reading practice', 'Hindi reading practice', 'Pronunciation and fluency support', 'Confidence-building through guided reading'] },
  { title: 'Carrom Board', detail: 'Carrom board coaching for focus and strategy.', icon: Gamepad2, slug: 'carrom-board', color: 'purple', age: 'Contact the centre', duration: 'Contact the centre', price: 'Contact the centre', description: 'Carrom board coaching that combines enjoyable play with focus, accuracy and strategic thinking.', learningPoints: ['Carrom board fundamentals', 'Aim and accuracy practice', 'Focus and patience', 'Game strategy', 'Friendly guided play'] },
  { title: 'Yoga', detail: 'Children’s whole-body exercise and wellbeing practice.', icon: Dumbbell, slug: 'yoga', color: 'coral', age: 'Children', duration: 'Contact the centre', price: 'Contact the centre', description: 'A child-friendly Yoga programme for whole-body movement, balance, flexibility and calm focus.', learningPoints: ['Whole-body exercise', 'Simple yoga postures', 'Balance and flexibility', 'Breathing and focus practice', 'Healthy movement habits'] },
  { title: 'English Grammar', detail: 'English grammar practice for stronger language skills.', icon: BookOpenCheck, slug: 'english-grammar', color: 'yellow', age: 'Contact the centre', duration: 'Contact the centre', price: 'Contact the centre', description: 'English Grammar classes with guided practice to strengthen language foundations and written expression.', learningPoints: ['Core grammar concepts', 'Sentence-building practice', 'Vocabulary support', 'Writing exercises', 'Regular guided revision'] },
  { title: 'Chess', detail: 'Chess coaching for strategy and logical thinking.', icon: Shapes, slug: 'chess', color: 'purple', age: 'Contact the centre', duration: 'Contact the centre', price: 'Contact the centre', description: 'Chess coaching that helps children develop concentration, strategy, patience and logical thinking.', learningPoints: ['Chess piece movement and rules', 'Basic game strategy', 'Logical thinking practice', 'Focus and patience', 'Friendly guided games'] },
  { title: 'Drawing, Painting & Art Craft', detail: 'Creative drawing, painting and art & craft activities.', icon: Palette, slug: 'art-and-craft', color: 'coral', age: 'Contact the centre', duration: 'Contact the centre', price: 'Contact the centre', description: 'Creative classes in drawing, painting and art & craft that encourage imagination and hands-on expression.', learningPoints: ['Drawing activities', 'Painting techniques', 'Art and craft projects', 'Creative expression', 'Fine-motor skill practice'] },
]

type CourseCatalogProps = { limit?: number; variant?: 'grid' | 'slider' }

export function CourseCatalog({ limit, variant = 'grid' }: CourseCatalogProps) {
  const displayedCourses = limit ? courses.slice(0, limit) : courses
  const sliderRef = useRef<HTMLDivElement>(null)

  const cards = displayedCourses.map(({ title, detail, icon: Icon, slug, color, price }) => (
    <Link className={`course-card ${color}`} key={slug} to={`/courses/${slug}`}>
      <div className="course-card-content"><span className="course-icon"><Icon size={25} strokeWidth={2.3} /></span><h3>{title}</h3><p>{detail}</p><span className="course-price">{price}</span><span className="course-link">Explore course <span aria-hidden="true">→</span></span></div>
    </Link>
  ))

  if (variant === 'slider') {
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
        <div className="slider-viewport" ref={sliderRef}><div className="course-track">{cards}</div></div>
        <div className="slider-controls"><span>Explore all our courses</span><div><button type="button" onClick={() => moveSlider(-1)} aria-label="Previous courses"><ChevronLeft size={20} /></button><button type="button" onClick={() => moveSlider(1)} aria-label="Next courses"><ChevronRight size={20} /></button></div></div>
      </div>
    )
  }

  return (
    <div className="course-grid">
      {cards}
    </div>
  )
}
