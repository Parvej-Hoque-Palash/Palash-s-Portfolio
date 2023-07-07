import customweb from "../assets/custom-design.png";
import ecommerce from "../assets/ecommerce.jpg";
import educationsite from "../assets/education.webp";
import medihelp from "../assets/medihelp.jpg";
import responsiveweb from "../assets/responsive-mobile.png";
import uiux from "../assets/uiux.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__page">
        <div className="service__details service__card">
          <img src={ecommerce} alt="Ecommerce Website" />
          <h3>E-commerce Website</h3>
          <div className="service__description">
            A full-stack e-commerce website built with the MERN stack. Includes
            features like product listing, shopping cart, user authentication,
            and payment integration.
          </div>
        </div>
        <div className="service__details service__card">
          <img src={uiux} alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <div className="service__description">
            User-centric design approach to create visually appealing and
            intuitive user interfaces. Identify the people who will use the
            product, what they will use it for, and under what conditions they
            will use it.
          </div>
        </div>
        <div className="service__details service__card">
          <img src={customweb} alt="Custom Website" />
          <h3>Custom website design and development</h3>
          <div className="service__description">
            I can ensure that your website is fully responsive, meaning it will
            adapt and display properly on various devices and screen sizes,
            including desktops, laptops, tablets, and smartphones. This will
            provide a consistent and optimized browsing experience for your
            visitors. Using modern web technologies such as HTML, CSS, and
            JavaScript, I will translate the design concepts into a fully
            functional website. This includes implementing interactive features,
            animations, and ensuring cross-browser compatibility.
          </div>
        </div>
        <div className="service__details service__card">
          <img src={responsiveweb} alt="Responsive Website" />
          <h3>Responsive and mobile-friendly design</h3>
          <div className="service__description">
            I can design your website with a fluid layout that adapts to
            different screen sizes and resolutions. This means that the content
            and elements of your website will automatically adjust and rearrange
            themselves to provide an optimal viewing experience on various
            devices, including desktops, laptops, tablets, and smartphones.
          </div>
        </div>
        <div className="service__details service__card">
          <img src={medihelp} alt="Medical Website" />
          <h3>Medical Help Site</h3>
          <div className="service__description">
            I can design and develop a medical help center which can be used by
            the patients to connect with the doctor from remote areas where
            transportation is not always available for medical emergency.
          </div>
        </div>
        <div className="service__details service__card">
          <img src={educationsite} alt="Education Website" />
          <h3>Education Site</h3>
          <div className="service__description">
            I can design and develop a education help center or an online school
            which can be used by the students to connect with the teachers from
            remote areas where there is no good schools to provide them good
            lectures and study materials or resources.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
