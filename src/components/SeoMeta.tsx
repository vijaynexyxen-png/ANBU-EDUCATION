import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'ANBU Educational Academy | Handwriting, Abacus & Child Development', description: 'ANBU Educational Academy in Cumbum helps children grow through Handwriting, Abacus, tuition and confidence-building learning programmes.' },
  '/about': { title: 'About Us | ANBU Educational Academy, Cumbum', description: 'Learn about ANBU Educational Academy and our child-friendly, confidence-building approach to education in Cumbum.' },
  '/courses': { title: 'Courses | ANBU Educational Academy, Cumbum', description: 'Explore Handwriting, Abacus and other learning programmes at ANBU Educational Academy in Cumbum.' },
  '/gallery': { title: 'Gallery | ANBU Educational Academy, Cumbum', description: 'See academy events, student achievement posters and Kalam’s World Records videos from ANBU Educational Academy.' },
  '/contact': { title: 'Contact Us | ANBU Educational Academy, Cumbum', description: 'Contact ANBU Educational Academy in Cumbum for course details, enrolment and class timings.' },
}

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }
  element.content = content
}

export function SeoMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const baseMeta = pathname.startsWith('/courses/')
      ? { title: 'Course Details | ANBU Educational Academy, Cumbum', description: 'Discover child-friendly learning programmes at ANBU Educational Academy in Cumbum.' }
      : pathname.startsWith('/enrol/')
        ? { title: 'Enrol Now | ANBU Educational Academy, Cumbum', description: 'Submit an enrolment application for ANBU Educational Academy.' }
        : pageMeta[pathname] ?? { title: 'ANBU Educational Academy, Cumbum', description: 'Child-friendly learning programmes in Cumbum.' }

    const isAdmin = pathname.startsWith('/admin')
    document.title = baseMeta.title
    setMeta('description', baseMeta.description)
    setMeta('og:title', baseMeta.title, true)
    setMeta('og:description', baseMeta.description, true)
    setMeta('robots', isAdmin ? 'noindex, nofollow' : 'index, follow')
  }, [pathname])

  return null
}
