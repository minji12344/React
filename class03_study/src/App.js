import logo from './logo.svg';
import './App.css';
import Hook from './Hook';
import Component from './Component';
import Render from './render';
import Function from './funcion';



function App() {
  return (
    <div>
      <h1>HOOK</h1>
      <Hook / >
      <h1>Component</h1>
    <Component />
      <h1>render</h1>
      <Render />
      <h1>Function</h1>
      <Function />
    </div>
  );
}

export default App;
