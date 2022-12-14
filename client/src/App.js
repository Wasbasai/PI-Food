import s from './App.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Home from './components/Home';
import Detail from './components/Detail';
import { RecipeCreate } from './components/RecipeCreate';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={Landing}/>
          <Route path={"/home/:id"} component={Detail}/>
          <Route path={"/home"} component={Home}/>
          <Route path={"/recipe"} component={RecipeCreate}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
