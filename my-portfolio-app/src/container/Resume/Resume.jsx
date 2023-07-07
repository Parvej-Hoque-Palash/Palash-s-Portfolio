import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import MyResume from "../assets/resume.pdf";
import "./Resume.css";
const Resume = () => {
  const handleDownload = () => {
    saveAs(MyResume, "resume.pdf");
  };
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume__page">
        <div className="resume__card">
          <h2>Display PDF</h2>
          <Link href={MyResume} target="_blank">
            <button>View</button>
          </Link>
        </div>
        <div className="resume__card">
          <h2>Download PDF</h2>
          <button onClick={handleDownload}>
            <div className="download__btn">
              <div className="download__pdf">Download</div>
              <span className="material-symbols-outlined download__icon">
                cloud_download
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
