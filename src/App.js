import './App.css';
import { useEffect } from 'react'
import rough from "roughjs/bin/rough";

function App() {
  useEffect(()=> {
    const rc = rough.canvas(document.getElementById('canvas'));
    rc.rectangle(10, 10, 200, 200); // x, y, width, height  
  }, [])
  return (
    <div className="App">
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );
}

export default App;
