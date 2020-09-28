import React, { useState } from "react"
import Avatar from "./avatar"
import Skills from "./skills"
import Contact from "./contact"
import Footer from "./footer"
import Portfolio from "./portfolio"
import { Container, Row, Col } from "react-bootstrap"

const Article = () => {
  const [leerMas, setLeerMas] = useState(false)

  const textoCompleto = (
    <div className="about-text">
      <p>
      Desde chico siempre me gustó el diseño y la tecnología,
      por lo que conseguir llevar a cabo mis ideas a través de
      una computadora era cuestión de tiempo, de aprendizaje y 
      por sobre todas las cosas, mucha dedicación, trabajo, 
      horas de estudio, pruebas y errores.
      En la actualidad internet, las redes sociales,
      las páginas webs y las aplicaciones tanto webs como
      nativas nos han brindado no solo una socialización a
      nivel global nunca antes vista, sino también la oportunidad
      para generar negocios y emprendimientos mucho más fácil,
      rápido y eficiente que en décadas anteriores. 
      Es por dicha razón que creo que los programadores
      y diseñadores tenemos una oportunidad única para llevar 
      a cabo nuestras ideas, y encontrar una solución donde hay 
      una necesidad. 
      </p>
      <Skills></Skills>
    </div>
  )

  const linkMas = leerMas
    ? "Leer menos <<"
    : "Continuar leyendo  y ver skills >>"

  return (
    <article className="about-content">
<div className="about-text">
  <h2>About</h2>
  <Avatar></Avatar>
  {/* VER EN 246 PARA FIGMA  */}
  <p id="p">
  Hola! mi nombre es Juan Manuel Crego Risso,
  tengo 29 años y soy de Buenos Aires, Argentina.
  Trabajo como Front End Developer y me gustaría 
  contarte porqué elegí el Front End no solo como profesión,
  sino también como medio por el que expreso mi pasión. 
  </p>
  {/* LEER MAS  */}
  {leerMas && textoCompleto}
  <a
    onClick={() => {
      setLeerMas(!leerMas)
    }}
  >
    <a href="#p" id="link">
      {linkMas}
    </a>
  </a>

  <Portfolio></Portfolio>

  <Contact></Contact>
  <Footer></Footer>
</div>
</article>
  )
}

export default Article
