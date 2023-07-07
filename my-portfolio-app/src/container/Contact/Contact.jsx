import Form from "../../constant/Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <h3>Let&apos;s have a cup of coffee and chat with me...</h3>
      <div className="contact__page">
        <div className="contacts__links">
          <h4>Reach me using mail:</h4>
          <div>
            <div>
              <span className="material-symbols-outlined mail__icon">mail</span>{" "}
              cloudnumber981@gmail.com
            </div>
            <div>
              <span className="material-symbols-outlined mail__icon">mail</span>{" "}
              jucse28.378@gmail.com
            </div>
            <div>
              <span className="material-symbols-outlined mail__icon">mail</span>{" "}
              palash.stu2018@juniv.edu
            </div>
            <div>
              <span className="material-symbols-outlined mail__icon">mail</span>{" "}
              mdparvejhoquepalash.official@gmail.com
            </div>
          </div>
        </div>
        <div className="contacts__links">
          <h4>Reach me using phone:</h4>
          <div>
            <div>
              <span className="material-symbols-outlined call__icon">call</span>{" "}
              01841763871
            </div>
            <div>
              <span className="material-symbols-outlined call__icon">call</span>{" "}
              01934763871
            </div>
          </div>
        </div>
        <div className="contacts__links">
          <h4>Reach me using Social Media:</h4>
          <div className="contact__social-media">
            <div className="social-media__logo">
              <a href={"https://www.facebook.com/php.980"} target="_">
                <box-icon type="logo" name="facebook"></box-icon>
              </a>
            </div>
            <div className="social-media__logo">
              <a
                href={"https://www.linkedin.com/in/parvej-hoque-palash/"}
                target="_"
              >
                <box-icon type="logo" name="linkedin"></box-icon>
              </a>
            </div>
            <div className="social-media__logo">
              <a href={"https://www.instagram.com/php_980"} target="_">
                <box-icon type="logo" name="instagram"></box-icon>
              </a>
            </div>
            <div className="social-media__logo">
              <a href={"https://github.com/Parvej-Hoque-Palash"} target="_">
                <box-icon type="logo" name="github"></box-icon>
              </a>
            </div>
            <div className="social-media__logo">
              <a href={"https://twitter.com/php_980"} target="_">
                <box-icon type="logo" name="twitter"></box-icon>
              </a>
            </div>
            <div className="social-media__logo">
              <a
                href={
                  "https://www.youtube.com/channel/UCDHae-W5W4nrWYe01diSbpQ"
                }
                target="_"
              >
                <box-icon type="logo" name="youtube"></box-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
