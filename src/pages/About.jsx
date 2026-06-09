import img from "../images/profile-4.jpg"

export default function About() {
  return (
    <div className="page container">
      <header className="page-head">
        <p className="eyebrow">Get to know me</p>
        <h1>About me</h1>
      </header>

      <section className="about-hero">
        <div className="avatar" aria-hidden="true" tabIndex="0">
          <img src={img} alt="Picture of Grace Parker" />
        </div>
        <div>
          <h2>Grace Parker</h2>
          <p>
            I'm a Montana native with a passion for problem-solving and full-stack development. 
            Growing up alongside the internet helped shape my interests, and I'm now focusing on 
            starting my career in computer science. When I’m not focusing on my personal growth, 
            I enjoy gaming and experimenting with Arduino. I’m driven by a curiosity for everything 
            about computers, down to the zeros and ones.
          </p>
        </div>
      </section>
    </div>
  )
}
