import './App.css';
import ImpotConponent from './comp';
import Cycle from './sycle';
import {Sycle} from './cycle';
import Compo from './Compo';
import Lotto from "./lotto";
import Login from './login';
import Datalist from './datalist';
import Languagetext from './Languagetext';
import Context from './Context';
import Lotto2 from './lotto2';
import Cart from './Cart';
import Timer from './timer';
import Page from './page';

function App() {  
  const data = [
    {id:1, text:'Hu'},
    {id:2, text:'He'},
    {id:3, text:'Ho'},
]
const page = 1;
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImpotConponent></ImpotConponent>
      <Cycle></Cycle>
      <Sycle />
      <h2>클래스형 컴포넌트를 사용해서 증가, 감소</h2>
      <Compo / >
      <h2>랜덤뽑기</h2>
      <Lotto / >
      <h2>로그인 하기</h2>
      <Login / >
      <h2>배열 추가하기</h2>
      <Datalist / >
      <h2>콘텍스트 사용해보기</h2>
      <Context />
      <h2>콘텍스 언어 바꾸기</h2>
      <Languagetext />
      <h2>로또 번호 중복없이</h2>
      <Lotto2 />
      <h2>장바구니</h2>
      <Cart />
      <h2>타이머</h2>
      <Timer />
      <h2>페이지 넘기기</h2>
      <Page data = {data} itemsPerPage = {page} />
    </div>
  );
}

export default App;