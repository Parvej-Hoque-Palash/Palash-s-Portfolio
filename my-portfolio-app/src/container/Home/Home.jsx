import myImg from "../assets/my-img.png";
import "./Home.css";
const Home = () => {
  return (
    <main className="home__page">
      <div className="intro">
        <span>👋</span>
        <p>Hello, I&apos;m&nbsp;</p>
        <h1>Palash</h1>
      </div>
      <div className="my_ability">
        <div className="home__left home__card">
          <div className="efficiency">
            <div className="icon">
              <box-icon name="desktop"></box-icon>
            </div>
            <div className="efficiency_heading">UI/UX Designer</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon name="credit-card-front"></box-icon>
            </div>
            <div className="efficiency_heading">Frontend Developer</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon name="minus-back"></box-icon>
            </div>
            <div className="efficiency_heading">Backend Developer</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon name="microsoft-teams" type="logo"></box-icon>
            </div>
            <div className="efficiency_heading">Team Worker</div>
          </div>
        </div>
        <div className="my__img home__card">
          <img src={myImg} alt="My Photo" />
        </div>
        <div className="home__right home__card">
          <div className="efficiency">
            <div className="icon">
              <box-icon name="code-block"></box-icon>
            </div>
            <div className="efficiency_heading">Problem Solver</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon type="solid" name="user-circle"></box-icon>
            </div>
            <div className="efficiency_heading">Good Leader</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon name="image-alt"></box-icon>
            </div>
            <div className="efficiency_heading">Photo Editor</div>
          </div>
          <div className="efficiency">
            <div className="icon">
              <box-icon type="solid" name="videos"></box-icon>
            </div>
            <div className="efficiency_heading">Video Editor</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
