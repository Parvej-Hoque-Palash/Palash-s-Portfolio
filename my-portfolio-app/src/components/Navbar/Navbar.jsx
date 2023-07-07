import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-name" id="home">
        <h2>Md. Parvej Hoque Palash</h2>
        <p>Full Stack Developer</p>
      </div>
      <div className="app__navbar-links">
        <Link to="/">
          <div className="menu-links" id="about">
            <div className="nav-icons">
              <box-icon name="home"></box-icon>
            </div>
            <div className="menu-buttons">Home</div>
          </div>
        </Link>
        <Link to="/about">
          <div className="menu-links" id="about">
            <div className="nav-icons">
              <box-icon type="solid" name="user"></box-icon>
            </div>
            <div className="menu-buttons">About</div>
          </div>
        </Link>
        <Link to="/skills">
          <div className="menu-links" id="skills">
            <div className="nav-icons">
              <box-icon type="solid" name="bar-chart-alt-2"></box-icon>
            </div>
            <div className="menu-buttons">Skills</div>
          </div>
        </Link>
        <Link to="/projects">
          <div className="menu-links" id="projects">
            <div className="nav-icons">
              <box-icon type="solid" name="book-content"></box-icon>
            </div>
            <div className="menu-buttons">Projects</div>
          </div>
        </Link>
        <Link to="/experience">
          <div className="menu-links" id="experience">
            <div className="nav-icons">
              <box-icon name="line-chart"></box-icon>
            </div>
            <div className="menu-buttons">Experience</div>
          </div>
        </Link>
        <Link to="/services">
          <div className="menu-links" id="services">
            <div className="nav-icons">
              <box-icon type="solid" name="cube-alt"></box-icon>
            </div>
            <div className="menu-buttons">Services</div>
          </div>
        </Link>
        <Link to="/education">
          <div className="menu-links" id="education">
            <div className="nav-icons">
              <box-icon type="solid" name="graduation"></box-icon>
            </div>
            <div className="menu-buttons">Education</div>
          </div>
        </Link>
        <Link to="/contact">
          <div className="menu-links" id="contact">
            <div className="nav-icons">
              <box-icon name="envelope"></box-icon>
            </div>
            <div className="menu-buttons">Contact</div>
          </div>
        </Link>
        <Link to="/resume">
          <div className="menu-links" id="resume">
            <div className="nav-icons">
              <box-icon name="file"></box-icon>
            </div>
            <div className="menu-buttons">Resume</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
