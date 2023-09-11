import logo from './logo.svg';
import './App.css';
import ImpotConponent from './comp';
import Cycle from './sycle';
import {Sycle} from './cycle';
import Compo from './Compo';
import Lotto from "./lotto";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImpotConponent></ImpotConponent>
      <Cycle></Cycle>
      <Sycle />
      <Compo / >
      <Lotto / >
    </div>
  );
}

export default App;
