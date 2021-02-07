import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Documentation from './components/Documentation';
function App() {
  return (
    <BrowserRouter>
        {/* switch allows switching which components render.  */}

        <Switch>
          {/* route allows you to render by url path */}
          <Route exact path="/globe" component={Main} />
          <Route exact path="/documentation" component={Documentation}/>
        </Switch>

      </BrowserRouter>
  );
}

export default App;
