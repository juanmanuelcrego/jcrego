import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"

const Portfolio = props => (
  <StaticQuery
    query={graphql`
      query {
        custosol: file(relativePath: { eq: "portfolio/custsol.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        power: file(relativePath: { eq: "portfolio/power.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dashboard: file(relativePath: { eq: "portfolio/dashboard.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        teslapp: file(relativePath: { eq: "portfolio/teslapp.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hamburguer: file(relativePath: { eq: "portfolio/hamburguer.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sorteo: file(relativePath: { eq: "portfolio/sorteo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jackpot: file(relativePath: { eq: "portfolio/jackpot.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        adversario: file(relativePath: { eq: "portfolio/adversario.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        matarikii: file(relativePath: { eq: "portfolio/matariki.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        html: file(relativePath: { eq: "html.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        css: file(relativePath: { eq: "css.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sass: file(relativePath: { eq: "sass.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bootstrap: file(relativePath: { eq: "bootstrap.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        javascript: file(relativePath: { eq: "javascript.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        typescript: file(relativePath: { eq: "typescript.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        react: file(relativePath: { eq: "react.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        angular: file(relativePath: { eq: "angular.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        vue: file(relativePath: { eq: "vue.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gatsby: file(relativePath: { eq: "gatsby.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        next: file(relativePath: { eq: "next.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nodejs: file(relativePath: { eq: "nodejs.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        wordpress: file(relativePath: { eq: "wordpress.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        elementor: file(relativePath: { eq: "elementor.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        woocommerce: file(relativePath: { eq: "woocommerce.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        illustrator: file(relativePath: { eq: "illustrator.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        photoshop: file(relativePath: { eq: "photoshop.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        premiere: file(relativePath: { eq: "premiere.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        aftereffects: file(relativePath: { eq: "aftereffects.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        xd: file(relativePath: { eq: "xd.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        figma: file(relativePath: { eq: "figma.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Container fluid>
        <section className="portfolio" id="portfolio">
          <h2 className="title-portfolio">Portfolio</h2>
          <div className="about-text">
            <p>
              A continuación podrás ver los últimos trabajos realizados como
              Freelance en 2020, los diseños y desarrollos hechos en la empresa
              donde me encuentro trabajando actualmente son privados y no puedo
              compartirlos en la web.
            </p>
          </div>
          <Carousel>
          <Carousel.Item>
              <Row>
                <Col>
                  {/* MATARIKI */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Matariki</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Matariki es una web diseñada con Wordpress ¿Te gustaría visitar el sitio?
                        </p>
                      </div>
                      <a href="https://matarikicaps-shop.com/" target="_blank">
                        <button className="jc-btn">Visitar!</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Wordpress"
                          fixed={data.wordpress.childImageSharp.fixed}
                          alt="wordpress Skill"
                        />
                        <Img
                          className="skill-box"
                          title="Elementor"
                          fixed={data.elementor.childImageSharp.fixed}
                          alt="elementor Skill"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.matarikii.childImageSharp.fluid}
                        alt="Matariki - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  {/* ADVERSARIO */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>El Adversario</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          El Adversario es una web diseñada con Wordpress ¿Te gustaría visitar el sitio?
                        </p>
                      </div>
                      <a href="https://eladversario.com/" target="_blank">
                        <button className="jc-btn">Visitar!</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Wordpress"
                          fixed={data.wordpress.childImageSharp.fixed}
                          alt="wordpress Skill"
                        />
                        <Img
                          className="skill-box"
                          title="Elementor"
                          fixed={data.elementor.childImageSharp.fixed}
                          alt="elementor Skill"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.adversario.childImageSharp.fluid}
                        alt="Adversario - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  {/* CUSTOSOL */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Custosol</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Custosol es una web diseñada con Wordpress y
                          Elementor, ¿Te gustaría visitar el sitio?
                        </p>
                      </div>
                      <a href="https://www.custosol.com" target="_blank">
                        <button className="jc-btn">Visitar!</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Wordpress"
                          fixed={data.wordpress.childImageSharp.fixed}
                          alt="wordpress Skill"
                        />
                        <Img
                          className="skill-box"
                          title="Elementor"
                          fixed={data.elementor.childImageSharp.fixed}
                          alt="elementor Skill"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.custosol.childImageSharp.fluid}
                        alt="Custosol - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col>
                  {/* MEGA MILLON  */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Proyecto Millon</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Prototipo de un home para sorteos por cuestiones
                          legales no puedo compartir el código pero si un demo.
                        </p>
                        <p>
                          Fue diseñado en primera instancia en FIGMA,
                          posteriormente desarrollado en ReactJS y maquetado en
                          SASS
                        </p>
                      </div>
                      <a
                        href="https://juanmanuelcrego.github.io/power/"
                        target="_blank"
                      >
                        <button className="jc-btn">Demo</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Figma"
                          fixed={data.figma.childImageSharp.fixed}
                          alt="Figma"
                        />
                        <Img
                          className="skill-box"
                          title="ReactJS"
                          fixed={data.react.childImageSharp.fixed}
                          alt="ReactJS"
                        />
                        <Img
                          className="skill-box"
                          title="SASS"
                          fixed={data.sass.childImageSharp.fixed}
                          alt="SASS"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.power.childImageSharp.fluid}
                        alt="Mega Millon - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  {/* MEGA MILLON DASHBOARD */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Dashboard</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Para este proyecto también del mismo cliente del
                          anterior, utilicé en primera instancia FIGMA para el
                          diseño, Angular para el desarrollo, y SASS para el
                          maquetado para crear un dashboard con datos que
                          posteriormente serían consultados a través de NodeJS.
                        </p>
                        <p>
                          Por cuestiones legales, no puedo compartir los datos
                          del dashboard, por lo que en el demo solo verán el
                          Front sin datos.
                        </p>
                        <p>User: admin | Password: admin</p>
                      </div>
                      <a
                        href="https://juanmanuelcrego.github.io/dashboard/"
                        target="_blank"
                      >
                        <button className="jc-btn">Demo</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Figma"
                          fixed={data.figma.childImageSharp.fixed}
                          alt="Figma"
                        />
                        <Img
                          className="skill-box"
                          title="Angular"
                          fixed={data.angular.childImageSharp.fixed}
                          alt="Angular"
                        />
                        <Img
                          className="skill-box"
                          title="SASS"
                          fixed={data.sass.childImageSharp.fixed}
                          alt="SASS"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.dashboard.childImageSharp.fluid}
                        alt="Dashboard - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                <Col>
                  {/* TESLAPP */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Teslapp</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Teslapp es una aplicación para el monitoreo de
                          baterías y corriente, se realizó el diseño en FIGMA y
                          posteriormente se desarrolló en Angular y se maquetó
                          en SASS.
                        </p>
                        <p>
                          Los datos se trabajaron en NodeJS aunque en este demo
                          solo verán los datos en el front.
                        </p>
                        <p>Para entrar deberán hacer un registro muy básico.</p>
                      </div>
                      <a
                        href="https://juanmanuelcrego.github.io/teslappv1/"
                        target="_blank"
                      >
                        <button className="jc-btn">Demo</button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Figma"
                          fixed={data.figma.childImageSharp.fixed}
                          alt="Figma"
                        />
                        <Img
                          className="skill-box"
                          title="Angular"
                          fixed={data.angular.childImageSharp.fixed}
                          alt="Angular"
                        />
                        <Img
                          className="skill-box"
                          title="SASS"
                          fixed={data.sass.childImageSharp.fixed}
                          alt="SASS"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.teslapp.childImageSharp.fluid}
                        alt="Teslapp - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  {/* Hamburger */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Hamburger</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Hamburger es un diseño que aun no está desarrollado,
                          se trabajó con FIGMA para el diseño de la interfaz del
                          home.
                        </p>
                      </div>
                      <button className="jc-btn disabled" disabled>
                        Demo
                      </button>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="Figma"
                          fixed={data.figma.childImageSharp.fixed}
                          alt="Figma"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.hamburguer.childImageSharp.fluid}
                        alt="Hamburger - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                <Col>
                  {/* Sorteo */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Animation</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Esta es una animación realizada con CSS y Angular, se
                          utilizó como prototipo pero finalmente no quedó en
                          producción.
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/jcrego.css/"
                        target="_blank"
                      >
                        <button className="jc-btn" disabled>
                          Ver animacion
                        </button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="CSS"
                          fixed={data.css.childImageSharp.fixed}
                          alt="CSS"
                        />
                        <Img
                          className="skill-box"
                          title="Angular"
                          fixed={data.angular.childImageSharp.fixed}
                          alt="Angular"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.sorteo.childImageSharp.fluid}
                        alt="Sorteo - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  {/* Jackpot */}
                  <div className="card-div">
                    <div className="portfolio-card">
                      <div className="card-header">
                        <h3>Animation</h3>
                      </div>
                      <div className="card-description">
                        <p>
                          Esta es una animación realizada solo con CSS, se
                          utilizó como prototipo pero finalmente no quedó en
                          producción.
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/jcrego.css/"
                        target="_blank"
                      >
                        <button className="jc-btn" disabled>
                          Ver animacion
                        </button>
                      </a>
                      <div className="card-codes">
                        <Img
                          className="skill-box"
                          title="CSS"
                          fixed={data.css.childImageSharp.fixed}
                          alt="CSS"
                        />
                      </div>
                    </div>
                    <div className="screen">
                      <Img
                        className="skill-box"
                        fluid={data.jackpot.childImageSharp.fluid}
                        alt="Jackpot - Portfolio"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

          
          </Carousel>
        </section>
      </Container>
    )}
  />
)

export default Portfolio
