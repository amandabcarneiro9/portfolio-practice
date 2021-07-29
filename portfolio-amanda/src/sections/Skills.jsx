import '../scss/skills.scss'

export default function Skills() {
  return (
    <section class="skills">
      <a name="skills"></a>
      <h2>My Skills</h2>
      <div className="skill__label">
        <label htmlFor="HTML">HTML</label>{' '}
        <progress id="HTML" value="90" max="100">
          90%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="CSS, Sass">CSS, Sass</label>{' '}
        <progress id="CSS, Sass" value="90" max="100">
          80%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="JavaScript">JavaScript</label>{' '}
        <progress id="JavaScript" value="75" max="100">
          70%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="React">React</label>{' '}
        <progress id="React" value="75" max="100">
          70%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="MySql">MySql</label>{' '}
        <progress id="MySql" value="75" max="100">
          75%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="PHP">PHP</label>{' '}
        <progress id="PHP" value="70" max="100">
          65%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="Laravel">Laravel</label>{' '}
        <progress id="Laravel" value="70" max="100">
          65%
        </progress>
      </div>
      <div className="skill__label">
        <label htmlFor="UX">UX</label>{' '}
        <progress id="UX" value="50" max="100">
          50%
        </progress>
      </div>
    </section>
  )
}
