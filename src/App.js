import Tasks from "./features/tasks/Tasks";
import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Redirect to="/zadania" />
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
