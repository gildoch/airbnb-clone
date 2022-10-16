import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import PhotoGrid from "./components/photo-grid/PhotoGrid";
import Card from "./components/card/Card";
import Data from "./components/data/data";

function App() {
  //  //Criar elementos de forma dinamica usando Map
  const cardElements = Data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  console.log(Data);

  //
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <NavBar />
        </div>
      </header>
      <div>
        <PhotoGrid />
      </div>
      <div className="cards-list">{cardElements}</div>
    </div>
  );
}

export default App;
