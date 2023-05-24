import "./App.css";
import dragon from "../src/components/image/Dragon.glb";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prueba de imagenes en 3d</h1>
        <model-viewer src={dragon} auto-rotate camera-controls></model-viewer>
      </header>
      <body>
        <button className="btn btn-primary">
          Button as link
        </button>
        <button className="btn btn-secondary">
          button as link
        </button>
      </body>
    </div>
  );
}

export default App;
