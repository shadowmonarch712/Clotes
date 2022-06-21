import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { About } from './Components/about';
import { Home } from './Components/Home';
import NoteState from './Context/notes/noteState';

function App() {
  return (
    <>
      <NoteState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
