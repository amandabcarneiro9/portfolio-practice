import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { scroll } from './header'
import '../scss/hamburger.scss'

export default function Burguer() {
  const [isOpen, setOpen] = useState(false)

  //   function showMenu() {
  //     return (

  //     )
  //   }
  //   if (isOpen) {
  //     showMenu()
  //   }

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="nav-links">
          <a className="nav__link" href="#home" onClick={scroll}>
            Home
          </a>
          <a className="nav__link" href="#values" onClick={scroll}>
            Values
          </a>
          <a className="nav__link" href="#skills" onClick={scroll}>
            Skills
          </a>
          <a className="nav__link" href="#portfolio" onClick={scroll}>
            Portfolio
          </a>
          <a className="nav__link" href="#about" onClick={scroll}>
            About
          </a>
        </div>
      )}
    </>
  )
}
