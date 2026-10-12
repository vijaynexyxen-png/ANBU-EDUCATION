import { ArrowRight, CheckCircle2, Clock3, Tag, UserRound } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../features/CourseCatalog'

const courseSections: Record<string, { structure: string[]; progressTitle: string; progress: string[] }> = {
  abacus: {
    structure: ['Abacus Levels: 1 to 8', 'Age: 5 years and above', 'Medium: Tamil and English', 'Duration: 3 months per level, according to the student’s ability', 'Regular classes: Monday to Friday, 5 days a week', 'Class time: 1 hour', 'Daily practice: Note work, book work, kit work and a daily mental test; priority is given to mental calculation.', 'Fees: ₹1,000 monthly. Ask the centre about material cost and other details.'],
    progressTitle: 'Progress & parent support',
    progress: ['After each Abacus level, the student’s performance and results are recorded in a video and shared with parents.', 'Parents are requested to watch the video and conduct a simple assessment at home by dictating the sums shown, helping them evaluate mental-calculation skills.', 'The student is promoted to the next level only when both parents and mentor are satisfied with the student’s performance and agree the child is ready.', 'A performance video is recorded and shared with parents after successful completion of every Abacus level.'],
  },
  handwriting: {
    structure: ['Classes: UKG to XII', 'Duration: 3 months', 'Medium and language: Tamil and English', 'Practice: Cursive letter writing', 'Special practice: Classes X to XII public-exam students.'],
    progressTitle: 'Progress & parent support',
    progress: ['At the end of the Handwriting course, each student’s progress in 4-line writing, ruled writing, neat presentation and speed writing is recorded in a video and shared with parents.', 'This allows parents to see their child’s improvement firsthand.', 'The course is completed only after both students and parents are completely satisfied.', 'Demo videos, registration and payment are available by QR or GPay: 8778158642.'],
  },
  tuition: {
    structure: ['Medium: Tamil, Matric, CBSE and ICSE', 'Classes: UKG to X', 'Limited students: Maximum 10 students per class', 'Teachers: Experienced and qualified teacher', 'Working hours: 4:00 PM to 9:00 PM', 'Individual study time: 2.5 hours per student'],
    progressTitle: 'Progress & parent support',
    progress: ['Daily homework and study monitoring are provided.', 'A daily study report is shared with parents through WhatsApp.', 'Parents can share homework details via WhatsApp, and teachers are included in the WhatsApp group.', 'Regular parent-teacher communication, individual attention and academic support are provided.'],
  },
  'hindi-classes': {
    structure: ['Programme: Hindi Sabha Exam and Bolchal (Spoken Hindi) practice', 'Working hours: 4:00 PM to 9:00 PM', 'Individual study time: 1.5 hours per student for Sabha and Bolchal', 'Bolchal (Spoken Hindi): Daily 30 minutes', 'Teacher: Experienced and qualified teacher', 'Batch size: Limited students per batch'],
    progressTitle: 'Progress & parent support',
    progress: ['Regular reading, writing, grammar and vocabulary practice are provided.', 'Daily conversation, listening and pronunciation practice support spoken Hindi.', 'Regular tests and exam-oriented practice support Hindi Sabha preparation.', 'Individual attention helps build confidence in spoken Hindi.'],
  },
  'spoken-english': {
    structure: ['Programme: Spoken English I', 'Audience: Adults', 'Focus: Everyday conversation, vocabulary, listening and pronunciation', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & learner support',
    progress: ['Learners practise simple conversations in a supportive environment.', 'Regular speaking activities build comfort and confidence.', 'The academy can guide learners on the next available batch and enrolment.'],
  },
  'reading-practice': {
    structure: ['Programme: Reading practice', 'Languages: Tamil, English and Hindi', 'Focus: Fluency, pronunciation and confidence', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Children receive guided reading practice at a comfortable pace.', 'Activities support clearer pronunciation and stronger fluency.', 'Parents can contact the academy for batch and enrolment details.'],
  },
  'carrom-board': {
    structure: ['Programme: Carrom Board coaching', 'Focus: Aim, accuracy, focus and game strategy', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Children practise skills through friendly, guided games.', 'The programme encourages patience, focus and strategic thinking.', 'Parents can contact the academy for batch and enrolment details.'],
  },
  yoga: {
    structure: ['Programme: Yoga for children', 'Focus: Whole-body exercise, balance, flexibility and focus', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Children are guided through age-appropriate movement and yoga practice.', 'Regular sessions encourage healthy movement habits and calm focus.', 'Parents can contact the academy for batch and enrolment details.'],
  },
  'english-grammar': {
    structure: ['Programme: English Grammar', 'Focus: Grammar, sentence-building, vocabulary and writing', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Regular exercises help learners strengthen language foundations.', 'Guided revision helps make grammar learning clear and practical.', 'Parents can contact the academy for batch and enrolment details.'],
  },
  chess: {
    structure: ['Programme: Chess coaching', 'Focus: Chess rules, strategy, focus and logical thinking', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Children learn through guided practice and friendly games.', 'The programme develops concentration, patience and strategic thinking.', 'Parents can contact the academy for batch and enrolment details.'],
  },
  'art-and-craft': {
    structure: ['Programme: Drawing, Painting & Art Craft', 'Focus: Creative expression and hands-on art activities', 'Batch, schedule and course duration: Contact the centre'],
    progressTitle: 'Progress & parent support',
    progress: ['Children explore drawing, painting and craft through guided activities.', 'Projects encourage imagination and fine-motor skills.', 'Parents can contact the academy for batch and enrolment details.'],
  },
}

export function CourseDetailsPage() {
  const { courseSlug } = useParams()
  const course = courses.find((item) => item.slug === courseSlug) ?? courses[0]
  const Icon = course.icon
  const learningPoints = ('learningPoints' in course && course.learningPoints) ? course.learningPoints : ['Strong foundations through guided practice', 'Engaging activities suited to their age', 'Encouragement to learn independently', 'Regular progress updates for parents']
  const isAbacus = course.slug === 'abacus'
  const isHandwriting = course.slug === 'handwriting'
  const sections = courseSections[course.slug] ?? {
    structure: [`Recommended age: ${course.age}`, `Programme duration: ${course.duration}`, `Course fee: ${course.price}`, 'Friendly, guided learning in a supportive class environment.'],
    progressTitle: 'Progress & parent support',
    progress: ['Children build skills through regular, age-appropriate practice.', 'Parents receive clear support and guidance throughout the programme.', 'Contact the academy for the next available batch and enrolment details.'],
  }

  return <>
    <section className={`course-detail-hero ${course.color}`}><div><span className="course-icon"><Icon size={28} /></span><p className="eyebrow">ANBU Educational Academy course</p><h1>{course.title}</h1><p>{course.description}</p><Link className="button button-primary" to={`/enrol/${course.slug}`}>Enrol now <ArrowRight size={18} /></Link></div><aside><div><UserRound size={19} /><span><b>Recommended age</b>{course.age}</span></div><div><Clock3 size={19} /><span><b>Programme duration</b>{course.duration}</span></div><div className="price-detail"><Tag size={19} /><span><b>Course fee</b>{course.price}</span></div></aside></section>
    <section className="course-detail-content"><div><p className="eyebrow">{isAbacus ? 'Skills developed through Abacus' : isHandwriting ? 'Handwriting practice includes' : 'What your child will learn'}</p><h2>{isAbacus ? 'More than numbers: skills for confident learning.' : isHandwriting ? 'Better handwriting through focused, daily practice.' : 'Learning made visible, one step at a time.'}</h2><ul>{learningPoints.map((point) => <li key={point}>{point}</li>)}</ul></div><div className="detail-image"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=850&q=85" alt="Children learning in a classroom" loading="lazy" /></div></section>
    <section className="course-pdf-details"><div><p className="eyebrow">Course structure</p><h2>{course.title} course details</h2><div className="course-detail-list">{sections.structure.map((item) => <p key={item}>{item}</p>)}</div></div><div><p className="eyebrow">{sections.progressTitle}</p><h2>Progress you can see.</h2><ul className="course-outcome-list">{sections.progress.map((item) => <li key={item}><CheckCircle2 size={20} /> {item}</li>)}</ul></div></section>
    <section className="detail-next"><span>Have a question about this course?</span><Link className="text-link" to="/contact">Contact us <ArrowRight size={17} /></Link></section>
  </>
}
