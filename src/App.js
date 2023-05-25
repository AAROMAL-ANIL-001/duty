import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const user = localStorage.getItem("username");
  const isLoggedIn = user !== null;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={isLoggedIn ? <Home /> : <Signin />} />
          <Route path="/signup" element={isLoggedIn ? <Home /> : <Signup />} />
          <Route path="/signin" element={isLoggedIn ? <Home /> : <Signin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
