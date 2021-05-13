import './App.css';
import Main from './components/dynamicForm/MainComponent';
import FormDisplay from './components/displayForms/FormDisplay'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/form" component={FormDisplay} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
