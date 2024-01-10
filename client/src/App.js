import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import CallbackPage from "./pages/CallBack";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
