import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
