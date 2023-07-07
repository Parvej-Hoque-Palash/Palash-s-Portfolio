import bootstrapImg from "../assets/bootstrap.png";
import cppImg from "../assets/c++.png";
import cssImg from "../assets/css.png";
import djangoImg from "../assets/django.png";
import figmaImg from "../assets/figma.png";
import gitImg from "../assets/git.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import materialImg from "../assets/material-ui.png";
import mongoImg from "../assets/mongodb.png";
import mysqlImg from "../assets/mysql.png";
import nodeImg from "../assets/nodejs.webp";
import pythonImg from "../assets/python.png";
import reactImg from "../assets/react.png";
import reduxImg from "../assets/redux.png";
import tailwindImg from "../assets/tailwind.png";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__page">
        <div className="skill_details skill__card">
          <img src={htmlImg} alt="HTML" />
        </div>
        <div className="skill_details skill__card">
          <img src={cssImg} alt="CSS" />
        </div>
        <div className="skill_details skill__card">
          <img src={bootstrapImg} alt="Bootstrap" />
        </div>
        <div className="skill_details skill__card">
          <img src={tailwindImg} alt="Tailwind" />
        </div>
        <div className="skill_details skill__card">
          <img src={jsImg} alt="JavaScript" />
        </div>
        <div className="skill_details skill__card">
          <img src={pythonImg} alt="Python" />
        </div>
        <div className="skill_details skill__card">
          <img src={cppImg} alt="C++" />
        </div>
        <div className="skill_details skill__card">
          <img src={djangoImg} alt="Django" />
        </div>
        <div className="skill_details skill__card">
          <img src={figmaImg} alt="Figma" />
        </div>
        <div className="skill_details skill__card">
          <img src={gitImg} alt="Git" />
        </div>
        <div className="skill_details skill__card">
          <img src={materialImg} alt="Material-UI" />
        </div>
        <div className="skill_details skill__card">
          <img src={reduxImg} alt="Redux" />
        </div>
        <div className="skill_details skill__card">
          <img src={reactImg} alt="React" />
        </div>
        <div className="skill_details skill__card">
          <img src={nodeImg} alt="Node" />
        </div>
        <div className="skill_details skill__card">
          <img src={mongoImg} alt="MongoDB" />
        </div>
        <div className="skill_details skill__card">
          <img src={mysqlImg} alt="MySQL" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
