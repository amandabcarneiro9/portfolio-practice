import './scss/style.scss'

import Header from './sections/header'
import Home from './sections/home'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import About from './sections/About'

export default function App() {
  return (
    <div class="container">
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <About />
    </div>
  )
}
