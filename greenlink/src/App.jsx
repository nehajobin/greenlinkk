import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Campus from "./pages/Campus";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Routes>

        {/* Redirect root to signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Sign In */}
        <Route path="/signin" element={<SignIn />} />

        {/* Home */}
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Navbar />
            </>
          }
        />

        {/* Campus */}
        <Route
          path="/campus"
          element={
            <>
              <Campus />
              <Navbar />
            </>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <>
              <Profile />
              <Navbar />
            </>
          }
        />

      </Routes>
      

    </Router>
  );
}

export default App;