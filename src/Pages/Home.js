import '../css/webdevelopment.css';
import '../css/home.css';
import { HomeCard } from '../Component/Card.jsx';
import Navbar from '../Component/Navbar.js';


function Home() {
  return (
    <div className="Home">
      <Navbar />
      <body className="Home-body">

        <div className='intro'>
          <div className='content'>
            <p>Hi! I'm Janice, a</p>
            <h1>Thoughtful Designer</h1>
            <img src={require('../assets/flower.png')} alt="profilepic" id="flower" />
            <p>Passionate in Design and Technology</p>
            
          </div>

          <img src={require('../assets/Janice.png')} alt="profilepic" />
        </div>
        <div className='body-content'>
          <h3>My Works</h3>
          <hr></hr>
          <div className='Card-layout'>
            <div>

              <HomeCard
                imgsrc={require('../assets/screenshot.png')}
                imgalt={"test"}
                title={"AGDelta Achievment"}
                description={"Developed an interactive digital timeline to showcase AG Delta's achievements, originally designed as a wall art during my internship. Transitioned the project from a PowerPoint format to a dynamic web-based version using HTML and CSS."}
                location={"/WorkNumTwo"}
                tagName={"Web Development"}
              />

            </div>
            <div>

              <HomeCard
                imgsrc={require('../assets/Poster.png')}
                imgalt={"test"}
                title={"Native Organisms"}
                description={"Created an interactive showcase on Singapore's native organisms and the impact of waste, transitioning a school poster project from Figma and Canva to HTML, CSS, and React Material Design."}
                location={"/WorkNumOne"}
                tagName={"Web Development"}
              />

            </div>

            <div>

              <HomeCard
                imgsrc={require('../assets/bread-screenshot.jpg')}
                imgalt={"test"}
                title={"Bread Sales"}
                description={"Developed an conceptual dashboard showcasing conceptual sales data for a business proposal, initially prototyped in Figma and later built with HTML, CSS, and React Material Design."}
                location={"/WorkNumThree"}
                tagName={"Web Development"}
              />

            </div>

            <div>

              <HomeCard
                imgsrc={require('../assets/mockup1.png')}
                imgalt={"Login"}
                title={"Login and Registration Redesign"}
                description={"Designed the Login and Registration forms using Figma for a school project. The aim was to refine and enhance these forms to improve the user experience in onboarding users to the platform, impacting their initial interactions and overall satisfaction."}
                location={"/UIPageOne"}
                tagName={"UI/UX"}
              />

            </div>

            <div>

              <HomeCard
                imgsrc={require('../assets/title-image.png')}
                imgalt={"Login"}
                title={"My Figma Journey"}
                description={"I began exploring UI/UX through Figma, driven by a passion for design. My internship deepened my knowledge, especially in features like auto layout. To enhance my skills, I committed to a month-long Figma and UI design challenge, with weekly updates on my progress."}
                location={"/UIPageTwo"}
                tagName={"UI/UX"}
              />

            </div>
          </div>
        </div>
      </body>
    </div>

  );
}

export default Home;