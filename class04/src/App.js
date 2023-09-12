import logo from './logo.svg';
import './App.css';
import Context from '../../class02/src/Context';
import LanguageContext from '../../class02/src/Languagetext';


function App() {
  return (
    <div>
      <h1>콘텍스트 사용해보기</h1>
    <Context / >
      <h2>콘텍스트 언어</h2>
      <LanguageContext />
    </div>
  );
}

export default App;
