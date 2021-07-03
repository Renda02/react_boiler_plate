import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";

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
