import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import CallbackPage from "./pages/CallBack";
import PageLoader from "./components/PageLoader";
import AuthenticationGuard from "./components/AuthenticationGuard";

import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isLoading } = useAuth0();
  return (
    <div>
      <NavigationBar />
      {isLoading ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<AuthenticationGuard component={DashBoard} />}
          />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
