import myPhoto from "../assets/about-img.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about__page">
      <div className="general__info about__card">
        <div className="my__photo">
          <img src={myPhoto} alt="pic" />
        </div>
        <h3>General Information</h3>
        <div className="my__name">Name: Md. Parvej Hoque Palash</div>
        <div className="my__passion">
          Problem Solver || Full Stack Developer
        </div>
        <div className="my__location">Location: Dhaka, Bangladesh </div>
        <div className="dateOfBirth">Date of Birth: 22 March, 2001</div>
      </div>
      <div className="about__description about__card">
        <h3>Description</h3>
        <div>
          Hello there, I am a Computer Science & Engineering student at
          Jahangirnagar University with a passion for Problem solving, Frontend
          development, Backend development, UI/UX design. I am a skilled MERN
          stack developer with a strong foundation in MongoDB, Express.js,
          React, and Node.js. With a passion for web development, I excel in
          building dynamic and responsive applications. My expertise lies in
          creating robust RESTful APIs, designing intuitive user interfaces
          using React, managing databases efficiently with MongoDB, and
          implementing server-side logic using Node.js and Express.js. I possess
          a keen eye for detail, ensuring high-quality code and exceptional user
          experiences. With my comprehensive skill set and dedication to staying
          updated with the latest industry trends, I consistently delivers
          scalable and innovative solutions as a MERN stack developer.
        </div>
      </div>
    </div>
  );
};

export default About;
