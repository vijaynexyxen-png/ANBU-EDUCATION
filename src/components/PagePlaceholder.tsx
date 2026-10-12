type PagePlaceholderProps = { title: string; description: string }

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder">
      <p>ANBU Educational Academy</p>
      <h1>{title}</h1>
      <span>{description}</span>
    </section>
  )
}
