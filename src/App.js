import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./PostList";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <PostList />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
