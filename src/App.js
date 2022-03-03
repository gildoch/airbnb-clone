import logo from './logo.svg';
import './App.css';
import NavBar from './nav-bar/NavBar';
import PhotoGrid from './photo-grid/PhotoGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <NavBar />
        </div>
      </header>
      <div className="row">
          <PhotoGrid />
        </div>
    </div>
  );
}

export default App;
