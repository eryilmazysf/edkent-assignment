import Main from "./pages/Main";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
