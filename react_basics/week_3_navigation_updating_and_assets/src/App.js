import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Workdays from './components/Workdays';
import Weekends from './components/Weekends';
import { Routes, Route, Link } from 'react-router-dom';
import dog from './assets/images/dog_lower_quality.jpg';
import AnimalCard from './components/AnimalCard';
import VideoPlayer from './components/VideoPlayer';
import AudioBird from './components/BirdAudio';
import './App.css';
function App() {
  function CurrentMessage() {
    //const day = new Date().getDay();
    const day = 6;
    return (
      <>
        {day >= 1 && day <= 5
          ? <Workdays day={day} />
          : <Weekends day={day} />
        }
      </>
    )
  }
  const time = new Date();
  const today = time.toLocaleString('en-US', { weekday: 'long' });
  const morning = time.getHours() >= 6 && time.getHours() < 12;
  let dayMessage;
  const randomImageUrl = 'https://picsum.photos/400';

  if (today.toLowerCase() === 'monday') {
    dayMessage = `Happy ${today}!`;
  } else if (today.toLowerCase() === 'tuesday') {
    dayMessage = `${today}, four days until the weekend!`;
  } else if (today.toLowerCase() === 'wednesday') {
    dayMessage = `${today}, Hump day!`;
  } else if (today.toLowerCase() === 'thursday') {
    dayMessage = `${today}, one more day until the weekend!`;
  }
  else if (today.toLowerCase() === 'friday') {
    dayMessage = `Happy ${today}!`;
  }
  else if (today.toLowerCase() === 'saturday') {
    dayMessage = `Happy ${today}!`;
  }
  else {
    dayMessage = `Stay calm and keep having fun!`;
  }

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <AudioBird />

      <CurrentMessage /> {/* Call the CurrentMessage component here */}
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : <h2>Hi....</h2>}
      <AnimalCard name="Dog" image={dog} description="A cute dog" />
      <AnimalCard name="Dog with require" image={require('./assets/images/dog_lower_quality.jpg')} description="Dog with different import" />
      <AnimalCard name="Random" image={randomImageUrl} description="Something from internet" />

      <VideoPlayer url="https://www.youtube.com/watch?v=_NeJ3Kg6OUo"/>

    </div>
  );
}

export default App;
