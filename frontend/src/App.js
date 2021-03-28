import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Register from "./screens/Register";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home} exact/>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
