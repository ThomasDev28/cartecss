import './App.css';

function App() {
  return (
    <div className="App">
      <div className="carte-container">
        <div className="carte-premiere">
          <img src="media/LilJay.jpg" alt="liljay"></img>
          <div className="titre">
            <h1>Lil Jay</h1>
            <p>Everything New</p>
            <p>2014</p>

          </div>
  
        </div>
      <span></span>
        <div className="carte-deuxieme">
          <p>Rate this album</p>
          <div className="icons">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
