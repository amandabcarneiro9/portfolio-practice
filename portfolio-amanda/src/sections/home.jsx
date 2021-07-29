import '../scss/home.scss'

export default function Home() {
  return (
    <section className="home">
      <a name="home"></a>
      <div className="home__photo">
        <div className="home__photo__presentation">
          Hi, I am
          <h1>Amanda Carneiro.</h1>
          <div className="home__photo__presentation__2">I'm a Full-stack Web Developer Student.</div>
        </div>
      </div>
      <div className="home__description">
        Let's work together to make <strong> your product stand out</strong>. I create beautiful and functional
        websites.
        <br />I Work with my clients step by step
        <strong>from the idea stage until the fully functioning web application</strong>.
      </div>
    </section>
  )
}
