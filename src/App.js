import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './components/HomePage';
import FilmDetails from './components/FilmDetails';
import WouldYouRather from './components/wouldyourather/WouldYouRather';
import GameLandingPage from './containers/GameLandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/ghibli-films-dark/" element={<HomePage />} />
        <Route path="/FilmDetails/:id" element={<FilmDetails />} />
        <Route path="/wouldyourather/" element={<WouldYouRather />} />
        <Route path="/GameLandingPage/" element={<GameLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
