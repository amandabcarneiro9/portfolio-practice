import '../scss/portfolio.scss'
import imgTag from '../img/img-tag.png'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <a name="portfolio" />
        <h2>My portfolio</h2>
        <div className="portfolio__container__blocks">
          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt="tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>

          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt="tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>

          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt="tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>

          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt="tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>

          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt="tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>

          <div className="portfolio__container__blocks__block">
            <img src={imgTag} alt=" tag" />
            <div className="portfolio__container__blocks__block__content">
              <p>
                Website for a coffee shop. Student Project for the coding Bootcamp Praha. Coded based on provided psd
                design.
              </p>
              <span>
                <strong> Tech stack: HTML, CSS, Sass, Bootstrap</strong>{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
