import './App.css';
import Counter from './components/counter/Counter';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <h2>Toggle to test useState() hook</h2>
      <Toggle></Toggle>
      <h2>Counter to learn stale state</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
