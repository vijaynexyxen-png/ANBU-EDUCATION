import { useParams } from 'react-router-dom'
import { courses } from '../features/CourseCatalog'
import { PaymentSubmission } from '../features/PaymentSubmission'

export function EnrolPage() {
  const { courseSlug } = useParams()
  const course = courses.find((item) => item.slug === courseSlug)
  return <><section className="page-intro enrol-intro"><p className="eyebrow">Enrolment</p><h1>Start your child’s <em>learning journey.</em></h1><p>{course ? `You’re enrolling for ${course.title}.` : 'Choose a course and complete the enrolment form.'} Payment details will be confirmed by the ANBU Educational Academy team.</p></section><PaymentSubmission courseName={course?.title} price={course?.price} /></>
}
