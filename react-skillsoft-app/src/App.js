import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/home/home";
import Customers from "./components/customers/customers";
import Register from "./components/register/register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/customers" component={Customers} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
