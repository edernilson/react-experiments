import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/home/home";
import Customers from "./components/customers/customers";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";

import TeamWeights from "./components/teamweights/teamweights";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teamweights" element={<TeamWeights />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
