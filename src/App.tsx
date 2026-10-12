import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { ContactPage } from './pages/ContactPage'
import { CourseDetailsPage } from './pages/CourseDetailsPage'
import { CoursesPage } from './pages/CoursesPage'
import { EnrolPage } from './pages/EnrolPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ScrollToTop } from './components/ScrollToTop'
import { SeoMeta } from './components/SeoMeta'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoMeta />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseSlug" element={<CourseDetailsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="enrol/:courseSlug" element={<EnrolPage />} />
        </Route>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route path="admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
