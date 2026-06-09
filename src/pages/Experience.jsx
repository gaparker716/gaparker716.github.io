const roles = [
  {
    period: 'October 2019 - March 2020',
    title: 'Computer Technician Internship',
    company: 'Grizzly Broadband',
    body: 'Diagnosed and resolved OS and network issues across 50+ client machines. Conducted hardware diagnostics and replacements for non-enterprise systems. Disassembled computers for scrap, part replacement and cleaning.',
    stack: [],
  }
]

export default function Experience() {
  return (
    <div className="page container">
      <header className="page-head">
        <p className="eyebrow">Where I've worked</p>
        <h1>Experience</h1>
      </header>

      <ol className="timeline">
        {roles.map((r, i) => (
          <li key={i} className="timeline-item" tabIndex="0">
            <div className="timeline-period">{r.period}</div>
            <div className="timeline-body">
              <h3>{r.title}</h3>
              <p className="timeline-company">{r.company}</p>
              <p>{r.body}</p>
              <ul className="tag-row">
                {r.stack.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
