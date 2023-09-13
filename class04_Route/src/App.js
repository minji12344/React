import {Route} from "react-router-dom";
import Home from './Home'
import Chat from './Chat'
import Video from './Video'


function App() {
  return (
    <>
      <Route exact path = "/" Component={Home} />
      <Route path = "/Chat" Component={Chat} />
      <Route path="/video" Component={Video} />
    </>
  );
}

export default App;
