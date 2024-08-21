import '../css/poster.css';
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
            <p>Hello~ I'm Janice,</p>
            <h1>Budding</h1>
            <h1>Designer</h1>
            <p>based in Singapore</p>
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
                description={"Timeline of AGDelta's achievement"}
                location={"/WorkNumTwo"}
              />

            </div>
            <div>

              <HomeCard
                imgsrc={require('../assets/Poster.png')}
                imgalt={"test"}
                title={"Effect of waste on Native Organisms"}
                description={"A short introduction of the native organism in Singapore and explains the effects of waste on them"}
                location={"/WorkNumOne"}
              />

            </div>

            <div>

              <HomeCard
                imgsrc={require('../assets/bread-screenshot.jpg')}
                imgalt={"test"}
                title={"Bread Sales"}
                description={"A dashboard to showcase current and forecast bread sales. (conceptual)"}
                location={"/WorkNumThree"}
              />

            </div>
          </div>
        </div>
      </body>
    </div>

  );
}

export default Home;