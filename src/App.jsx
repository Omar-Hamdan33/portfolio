import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand text-primary">{"<"}<span className="text-white">Omar Hamdan</span>{"/>"}</span>
        </div>
      </nav>

      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1>Hallo, Mijn naam is <span className="text-primary">Omar Hamdan</span></h1>
              <h2>Software Developer</h2>
              <p>Ik ben geïnspireerd door mijn interesse in IT en mijn passie om te leren programmeren</p>
              <div className="hero-links">
                <a href="https://www.linkedin.com/in/omar-hamdan-03207b398/" className="btn btn-primary">Linkedin</a>
                <a href="https://github.com/Omar-Hamdan33" className="btn btn-outline-dark">GitHub</a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image">
                <div className="placeholder-img">
                  <i className="bi bi-laptop"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <div className="container">
          <h2 className="section-title">Mijn Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="bi bi-palette"></i>
                </div>
                <h4>Frontend</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <h4>Backend</h4>
                <ul>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Laravel</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <h4>Tools</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Azure DevOps</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <div className="container">
          <h2 className="section-title">Mijn Projecten</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="project-card">
                <div className="project-icon">
                  <i class="bi bi-robot"></i>
                </div>
                <h4>AI plugin</h4>
                <p>Deze AI plugin gebouwd met behulp van Ollama</p>
                <a href="https://github.com/Omar-Hamdan33/ai-Plugin" className="btn btn-outline-primary">GitHub</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-card">
                <div className="project-icon">
                  <i class="bi bi-controller"></i>
                </div>
                <h4>Unity Game</h4>
                <p>Dit is een kleine hame waar je rond rijdt in dorp en pakketje ophaalt en levert</p>
                <a href="https://github.com/Omar-Hamdan33/Unity-Game" className="btn btn-outline-primary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="contact-card">
                <div className="contact-info">
                  <p><i className="bi bi-envelope"></i> <strong>Email:</strong> oh073827@gmail.com</p>
                  <p><i className="bi bi-linkedin"></i> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/omar-hamdan-03207b398/" target="_blank" rel="noopener noreferrer">omar-hamdan-03207b398</a></p>
                  <p><i className="bi bi-geo-alt"></i> <strong>Woonplaats:</strong> Oudewater</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
