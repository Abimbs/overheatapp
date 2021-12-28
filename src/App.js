import SignIn from "./pages/SignIn";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {OverProvider} from "./componets/Context";
import HeartRate from "./pages/HeartRate";
import WeightLog from "./pages/WeightLog";
import Calories from "./pages/Calories";
import WaterLog from "./pages/WaterLog";
import Suppport from "./pages/Suppport";
import SupportDetails from "./pages/SupportDetails";
import SubscribedMeetings from "./pages/SupportDetails";
import Activity from "./pages/Activity";


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
                        <Route element={<HeartRate />} path="/heartrate" />
                        <Route element={<WeightLog />} path="/weightlog" />
                        <Route element={<Calories />} path="/calories" />
                        <Route element={<WaterLog />} path="/waterlog" />
                        <Route element={<Suppport />} path="/support" />
                        <Route element={<Activity />} path="/activity" />
                        <Route
                            element={<SupportDetails />}
                            path="/supportdetails"
                        />
                        <Route
                            element={<SubscribedMeetings />}
                            path="/subscribedMeetings"
                        />
                    </Routes>
                </OverProvider>
            </Router>
        </div>
    );
}

export default App;
