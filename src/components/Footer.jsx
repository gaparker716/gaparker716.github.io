import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{'Grace Parker'}</span>
          <p className="footer-tagline">
            A focused software engineer with a passion for problem solving and full-stack development.
          </p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="http://www.github.com/gaparker716" rel="noreferrer">
                <Icon icon="fa6-brands:github" height={16}/> GitHub
              </a></li>
              <li><a href="http://www.linkedin.com/in/graceparker0716" rel="noreferrer">
                <Icon icon="devicon:linkedin" height={16} /> LinkedIn
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>&copy; {new Date().getFullYear()} Grace Parker</small>
        <small>Built with React &amp; Vite</small>
      </div>
    </footer>
  )
}
