import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Private from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Change from "./pages/Change";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPlan from "./pages/MyPlan";
import Profile from "./pages/Profile";
import Verification from "./pages/Verification";


export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
          <Header />
          <RoutesReact>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/meu-plano" element={<MyPlan />} />
            <Route path="/alterar" element={<Change />} />
            <Route path="/confirmacao" element={<Verification />} />
          </RoutesReact>
        </>
      </AuthProvider>
    </BrowserRouter>
  );
}
