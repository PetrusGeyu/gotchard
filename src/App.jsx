import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './pages/Home/Index'
import About from './pages/About/Index'
import Appli from './pages/Appli/Index'
import Materi from './pages/Materi/Index'
import Quiz from './pages/Quiz/Index'

function App() {
  return (
   <BrowserRouter>
     <AudioPlayer />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/About"  element={<About />} />
        <Route path="/Home" element={<Appli />} />
        <Route path="/materi" element={<Materi />}/>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
   </BrowserRouter>
  );
}


const AudioPlayer = () => (
  <audio autoPlay loop style={{ display: 'none' }}>
    <source src="/chemy.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

export default App;
