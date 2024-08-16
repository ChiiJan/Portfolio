import '../css/poster.css';
import '../css/home.css';
import { HomeCard } from '../Component/Card.js';


function Home() {
  return (

    <div className="Home">
      <header className="Home-header">
        <h2>My Work(s)</h2>
      </header>
      <body className="Home-body">

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
      </body>
      <footer className="Poster-footer">
      </footer>
    </div>

  );
}

export default Home;