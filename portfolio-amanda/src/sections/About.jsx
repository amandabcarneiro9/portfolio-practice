import '../scss/about-me.scss'
import imgProfile from '../img/profile-photo.jpg'

export default function About() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2>About me</h2>

        <div className="about-me__container__content">
          <img src={imgProfile} alt="Amanda's photo" />

          <div className="about-me__container__content__text">
            <p>
              My name is Amanda Carneiro. I am a full-stack developer and enjoy learning new trends.
              <strong>
                I am developing user interfaces in JavaScript, React and backend of my projects in PHP and Laravel.
              </strong>
            </p>

            <p>
              I am open to learning new technologies and enjoy working with people
              <em> who are as passionate about all web-related as me.</em>
            </p>

            <p>I have worked for clients all across the world but currently I am based in Amsterdam, Netherlands.</p>

            <p>
              I like dogs, scuba diver and sailing. If I do not develop, you can also meet me trekking in the mountains
            </p>

            <span>Get in touch and let's do something great together</span>

            <button>Contact me</button>
          </div>
        </div>
      </div>
    </section>
  )
}
