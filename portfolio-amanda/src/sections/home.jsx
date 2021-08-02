import '../scss/home.scss'
import Values from './values'

export default function Home() {
  return (
    <section className="home">
      <a name="home"></a>
      <div className="home__photo">
        <div className="home__photo__presentation">
          Hi, I am
          <h1> Amanda Carneiro</h1>
          <div className="home__photo__presentation__2">I'm a Junior Full-stack Web Developer.</div>
        </div>
      </div>
      <div className="home__description">
        Let's work together to make <strong> your product stand out</strong>. <br />I can create beautiful and
        functional websites working with my clients step by step <br />
        <strong> from the idea stage until the fully functioning web application</strong>.
      </div>
      <Values />
    </section>
  )
}
