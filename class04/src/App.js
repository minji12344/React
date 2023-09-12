import logo from './logo.svg';
import './App.css';
import Context from './Context';
import LanguageContext from './Languagetext';


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