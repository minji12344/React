import logo from './logo.svg';
import './App.css';
import ImpotConponent from './comp';
import Cycle from './sycle';
import {Sycle} from './cycle';
import Compo from './Compo';
import Lotto from "./lotto";
import Login from './login';
import Lotto2 from "./lotto2";


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
      <Login / >
      <Lotto2 / >

    </div>
  );
}

export default App;