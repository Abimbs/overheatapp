import SignIn from "./pages/SignIn";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
      <div className="app bg-purple40 w-full h-full px-4 ">
          <Router>
              <Routes>
                  <Route element={<SignIn />} path="/" exact />
                  <Route element={<SignUp />} path="/signup" exact />
                  <Route element={<Dashboard />} path="/dashbaord" exact />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
