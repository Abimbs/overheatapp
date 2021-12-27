import SignIn from "./pages/SignIn";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {OverProvider} from "./componets/Context";
import HeartRate from "./pages/HeartRate";
import WeightLog from "./pages/WeightLog";
import Calories from "./pages/Calories";
import WaterLog from "./pages/WaterLog";


function App() {
    return (
       
            <div className="app bg-purple40 w-full h-full px-4 ">
            <Router>
                 <OverProvider>
                    <Routes>
                        <Route element={<SignIn />} path="/" exact />
                        <Route element={<SignUp />} path="/signup" exact />
                        <Route
                            element={<Dashboard />}
                            path="/dashboard"
                            exact
                        />
                        <Route element={<HeartRate/>} path="/heartrate" exact />
                        <Route element={<WeightLog/>} path="/weightlog" exact />
                        <Route element={<Calories/>} path="/calories" exact />
                        <Route element={<WaterLog/>} path="/waterlog" exact />
                    </Routes>
                    </OverProvider>
                </Router>
            </div>
    );
}

export default App;
