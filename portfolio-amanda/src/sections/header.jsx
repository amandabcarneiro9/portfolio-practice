import '../scss/navBar.scss'

export default function Header() {
  return (
    <header>
      <img src="../img/favicon2.png" alt="Amanda's Logo" />
      <nav className="menu">
        <a className="menu__link" href="#home">
          Home
        </a>
        <a className="menu__link" href="#skills">
          Skills
        </a>
        <a className="menu__link" href="">
          Portfolio
        </a>
        <a className="menu__link" href="">
          About me
        </a>
        <a className="menu__link" href="">
          Contact
        </a>
      </nav>
    </header>
  )
}
