import "./App.css";
import NavBar from "./nav-bar/NavBar";
import PhotoGrid from "./photo-grid/PhotoGrid";
import Card from "./card/Card";
import Data from "./data/data";
import star from "./assets/Star.png";

function App() {
  //  //Criar elementos de forma dinamica usando Map
  const cardElements = Data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  //
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

      <div className="row cards-list">
        {cardElements}
        {/* <Card
          imgCard={img1}
          star={star}
          rating="5.0"
          reviewCount="6"
          country="EUA"
          title="Life Lessons with Katie Zaferes"
          price="136"
        /> */}
      </div>
    </div>
  );
}

export default App;
