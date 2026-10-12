import { Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const photoFiles = [
  'WhatsApp Image 2026-07-15 at 1.11.01 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.02 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.02 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.02 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.03 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.03 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.11.03 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.21 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.22 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.22 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.23 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.23 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.24 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.24 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.25 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.25 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.26 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.14.27 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.22 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.23 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.24 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.25 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.30 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.30 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.30 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.31 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.31 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.32 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.32 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.32 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.33 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.33 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.34 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.34 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.34 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.35 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.35 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.36 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.36 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.36 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.18.37 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.19.32 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.21.23 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.21.24 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.21.24 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.21.25 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.23.38 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.23.39 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.23.39 PM.jpeg',
  'WhatsApp Image 2026-07-15 at 1.25.03 PM (1).jpeg',
  'WhatsApp Image 2026-07-15 at 1.25.03 PM (2).jpeg',
  'WhatsApp Image 2026-07-15 at 1.25.03 PM.jpeg',
]

const achievementPosters = photoFiles.filter((file) => file.includes('1.14.') || file.includes('1.19.32'))
const eventPhotographs = photoFiles.filter((file) => !achievementPosters.includes(file))

const galleryCategories = [
  { label: 'Event photographs', files: eventPhotographs, description: 'Memories from academy celebrations, award functions and special events.' },
  { label: 'Student achievement posters', files: achievementPosters, description: 'Celebrating the accomplishments of our young learners.' },
  { label: 'Kalam’s World Records videos', description: 'Student achievements featured by Kalam’s World Records.' },
]

const academyVideos = [
  { id: 'yq3ZXpYyxyM', title: 'Kalam’s World Records student achievement video 1' },
  { id: 'IaXUwQJweko', title: 'Kalam’s World Records student achievement video 2' },
  { id: 'r3U_3Rw33f0', title: 'Kalam’s World Records student achievement video 3' },
  { id: 'Tf8WLzdLYUo', title: 'Kalam’s World Records student achievement video 4' },
]

export function GalleryCollection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const activeGallery = galleryCategories[activeCategory]
  const activeFiles = ('files' in activeGallery && activeGallery.files) ? activeGallery.files : []
  const selectedFile = selectedIndex === null ? null : activeFiles[selectedIndex]

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const imagePath = (file: string) => `/photos/${encodeURIComponent(file.replace(/\.jpeg$/, '.webp'))}`

  const loadFallbackImage = (image: HTMLImageElement) => {
    if (image.dataset.fallbackLoaded) image.src = '/images/learning-hero.png'
    else { image.dataset.fallbackLoaded = 'true'; image.src = image.src.replace('maxresdefault.jpg', 'hqdefault.jpg') }
  }

  return <section className="gallery-section" aria-label="ANBU Educational Academy gallery"><div className="gallery-category-tabs" role="tablist" aria-label="Gallery categories">{galleryCategories.map((category, index) => <button key={category.label} className={activeCategory === index ? 'active' : ''} type="button" role="tab" aria-selected={activeCategory === index} onClick={() => { setActiveCategory(index); setSelectedIndex(null); setPlayingVideoId(null) }}>{category.label}</button>)}</div><p className="gallery-category-description">{activeGallery.description}</p>{activeFiles.length > 0 ? <><div className="gallery-grid">{activeFiles.map((file, index) => <figure key={file}><button type="button" onClick={() => setSelectedIndex(index)} aria-label={`View ${activeGallery.label} image ${index + 1} full screen`}><img src={imagePath(file)} alt={`${activeGallery.label} image ${index + 1}`} loading="lazy" onError={(event) => { event.currentTarget.src = '/images/learning-hero.png' }} /></button></figure>)}</div><p className="gallery-note">Select a photo to view it full screen.</p></> : <div className="gallery-video-grid">{academyVideos.map((video) => <article className="gallery-video-card" key={video.id}>{playingVideoId === video.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button type="button" onClick={() => setPlayingVideoId(video.id)} aria-label={`Play ${video.title}`}><img src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} loading="lazy" onError={(event) => loadFallbackImage(event.currentTarget)} /><span><Play size={22} fill="currentColor" /></span></button>}<a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">Watch on YouTube</a></article>)}</div>}{selectedFile && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Full-screen gallery image" onClick={() => setSelectedIndex(null)}><button className="gallery-lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close full-screen image"><X size={24} /></button><img src={imagePath(selectedFile)} alt={`${activeGallery.label} image ${selectedIndex! + 1}`} onClick={(event) => event.stopPropagation()} /></div>}</section>
}
