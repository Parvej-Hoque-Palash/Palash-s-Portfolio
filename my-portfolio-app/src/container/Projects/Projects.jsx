import { Link } from "react-router-dom";
import brodman from "../assets/brodman.jpg";
import mediaid from "../assets/doctor-list.png";
import imgVault from "../assets/vault.PNG";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Please visit my github to see other projects.</p>
      <a href={"https://github.com/Parvej-Hoque-Palash"} target="_">
        <box-icon type="logo" name="github"></box-icon>
      </a>
      <div className="projects__page">
        <div className="project__details project__card">
          <Link to="https://medi-aid-app.pages.dev/" target="_blank">
            <img src={mediaid} className="doctor__logo" alt="Doctor Image" />
          </Link>
        </div>
        <div className="project__details project__card">
          <Link to="https://brodman-pure-css.pages.dev/" target="_blank">
            <img src={brodman} className="brodman__logo" alt="Brodman Image" />
          </Link>
        </div>
        <div className="project__details project__card">
          <Link to="https://image-vault-by-palash.netlify.app/" target="_blank">
            <img src={imgVault} className="vault__logo" alt="Image Vault" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
