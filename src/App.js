import MovingItem from './component/MovingItems';
import MoveCircle from './component/MoveItemClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Function Component </h2>
        <p className="appP">*MouseOver to pause the ball </p>
      <MovingItem />
      <h2>Class Component</h2>
      <MoveCircle />
    </div>
  );
}

export default App;
