import '../scss/navBar.scss'
import logo from '../img/favicon2.png'

export default function Header() {
  function scroll(event) {
    event.preventDefault()
    const element = document.querySelector(`[name=${event.currentTarget.hash.slice(1)}]`)
    element.scrollIntoView()
  }
  return (
    <header>
      <img src={logo} alt="Amanda's Logo" />
      <nav className="menu">
        <a className="menu__link" href="#home" onClick={scroll}>
          Home
        </a>
        <a className="menu__link" href="#values" onClick={scroll}>
          Values
        </a>
        <a className="menu__link" href="#skills" onClick={scroll}>
          Skills
        </a>
        <a className="menu__link" href="#portfolio" onClick={scroll}>
          Portfolio
        </a>
        <a className="menu__link" href="#about" onClick={scroll}>
          About me
        </a>
      </nav>
    </header>
  )
}
