import { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import { projects } from "../components/ProjectsArrays.jsx"
import { Icon } from "@iconify/react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState({})

  const handleShow = (data) => {
    setProject(data)
    setOpen(true)
  }

  return (
    <div className="page container">
      <header className="page-head">
        <p className="eyebrow">What I've made</p>
        <h1>Selected Projects</h1>
      </header>

      <section className="project-grid">
        {projects.map((p, index) => (
          <article key={index} className="project-card">
            <div className="project-thumb" aria-hidden="true">
              {p.thumbnail}
            </div>
            <div className="project-body">
              <div className="project-meta">
                <h3>{p.title}</h3>
                <span className="muted">{p.year}</span>
              </div>
              <p className="project-desc">{p.body}</p>
              <div className='tag-row'>
                {p.tags.map((t) => (<>{t}</>))}
              </div>          
              <button className="btn btn-ghost btn-sm"
              onClick={() => handleShow(p)}> 
                View <Icon icon="ph:arrow-up-right" height={16}/>
              </button>
            </div>
          </article>   
        ))}
      </section>

      <Modal show={open} onHide={() => setOpen(false)} centered size="lg" fullscreen="md-down">
        <Modal.Header closeButton><h2>{project.title}</h2></Modal.Header>
        <Modal.Body>
          <div>{project.slideshow}</div>
          <p>{project.body}</p>
          {project.link != null ? <a className='btn btn-primary btn-sm' href={project.link}>Visit</a> : null}
        </Modal.Body>
        <Modal.Footer>
            <p>Built with</p>
            <ul className='tag-row'>
              {project.tags?.map((t) => (<li>{t}</li>))}
            </ul>
          </Modal.Footer>
      </Modal>
    </div>
  )
}
