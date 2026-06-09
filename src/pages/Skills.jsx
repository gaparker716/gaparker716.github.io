import { Icon } from "@iconify/react"

const categories = [
  {
    title: 'Frontend',
    items: [
      <span className="tag"><Icon icon="devicon:html5" height={16}/>HTML</span>, 
      <span className="tag"><Icon icon="devicon:css" height={16}/>CSS</span>, 
      <span className="tag"><Icon icon="devicon:javascript" height={16}/>Javascript</span>, 
      <span className="tag"><Icon icon="devicon:typescript" height={16}/>Typescript</span>, 
      <span className="tag"><Icon icon="devicon:react" height={16}/>React</span>, 
      <span className="tag"><Icon icon="devicon:vitejs" height={16}/>Vite</span>],
  },
  {
    title: 'Backend',
    items: [
      <span className="tag"><Icon icon="devicon:python" height={16} />Python</span>,
      <span className='tag'><Icon icon="logos:java" height={16} />Java</span>,
      <span className="tag"><Icon icon="vscode-icons:file-type-cpp3" height={16} />C++</span>,
      <span className="tag"><Icon icon="vscode-icons:file-type-c" height={16} />C</span>
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      <span className="tag"><Icon icon="fa6-brands:aws" height={16}/>AWS</span>, 
      <span className="tag"><Icon icon="logos:docker-icon" height={16}/>Docker</span>, 
      <span className="tag"><Icon icon="logos:mongodb-icon" height={16}/>MongoDB</span>, 
      <span className="tag"><Icon icon="logos:firebase-icon" height={16}/>Firebase</span>, 
      <span className="tag"><Icon icon="logos:git-icon" height={16}/>Git</span>
    ],
  },
  {
    title: 'Other Skills',
    items: [
      <span className='tag'><Icon icon="logos:adobe-xd" height={16}/>Adobe XD</span>, 
      <span className="tag"><Icon icon="logos:figma" height={16}/>Figma</span>, 
      <span className="tag"><Icon icon="devicon:sqlite" height={16}/>SQLite</span>
    ],
  },
]

export default function Skills() {
  return (
    <div id="skills" className="page container">
      <header className="page-head">
        <p className="eyebrow">My Toolkit</p>
        <h1>Skills</h1>
      </header>

      <section className="card-grid">
        {categories.map((c) => (
          <article key={c.title} className="card">
            <h3>{c.title}</h3>
            <ul className="tag-row">
              {c.items.map((it) => (<>{it}</>))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
