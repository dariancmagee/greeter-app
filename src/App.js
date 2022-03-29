import './App.css';
import Greeter from './components/Greeter';
import nameArray from './data.js';

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {
        nameArray.map(thing =>
          <Greeter name={thing.name} 
          age={thing.age} />)
      }
    </div>
  );
}

export default App;
