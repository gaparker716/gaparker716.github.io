import { Icon } from "@iconify/react"

export default function Home() {
  return (
      <section className="hero container">
        <p className="eyebrow">Hey, I'm</p>
        <h1>Grace Parker</h1>
        <p className="lede">A full-stack computer scientist based in Seattle, Washington.</p>
        <div className="cta-row">
          <a href="src/images/Grace-Parker-Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            <Icon icon="mdi:file-document-outline" height={24} />Open Resume
          </a>
          <a href="#projects" className="btn btn-ghost">
            <Icon icon="mdi:eye-outline" height={24} /> View Projects
          </a>
        </div>
      </section>
  )
}