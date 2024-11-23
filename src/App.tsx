// import ThemeToggler from "./presentation/components/themeToggler";
import { BrowserRouter  as Router, Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./presentation/pages/CreateUser";
import Dashboard from "./presentation/pages/Dashboard";
// import PrivateRoute from "./presentation/components/PrivateRoute";
import Login from "./presentation/pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Router>
    <Routes>
      <Route 
        path="/login" 
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route 
        path="/register"
        element={!user ? <CreateUser /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
        // <PrivateRoute>
        //   <Dashboard />
        // </PrivateRoute>}
      />

      <Route path="*" element={<Navigate to={user? "/dashboard" : "/login"} />} />
    </Routes>
    </Router>
  )
}

export default App
