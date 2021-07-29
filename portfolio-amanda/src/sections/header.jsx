import '../scss/navBar.scss'
import logo from '../img/favicon2.png'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Amanda's Logo" />
      <nav className="menu">
        <a className="menu__link" href="#home">
          Home
        </a>
        <a className="menu__link" href="#skills">
          Skills
        </a>
        <a className="menu__link" href="#portfolio">
          Portfolio
        </a>
        <a className="menu__link" href="#about">
          About me
        </a>
        <a className="menu__link" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  )
}
