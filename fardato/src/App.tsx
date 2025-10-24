import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/welcome/welcome";
import Login from "./Components/login/login";

function App(): any {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
