import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Private from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Change from "./pages/Change";
import Home from "./pages/Home";
import HomeLogout from "./pages/HomeLogout";
import Login from "./pages/Login";
import MyPlan from "./pages/MyPlan";
import Profile from "./pages/Profile";
import Verification from "./pages/Verification";
import Concluded from "./pages/Concluded";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
          <Header />
          <RoutesReact>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path="/homeLogout"
              element={
                <Private>
                  <HomeLogout />
                </Private>
              }
            />
            <Route
              path="/perfil"
              element={
                <Private>
                  <Profile />
                </Private>
              }
            />
            <Route
              path="/meu-plano"
              element={
                <Private>
                  <MyPlan />
                </Private>
              }
            />
            <Route
              path="/alterar"
              element={
                <Private>
                  <Change />
                </Private>
              }
            />
            <Route
              path="/confirmacao"
              element={
                <Private>
                  <Verification />
                </Private>
              }
            />
            <Route path="/concluido" element={<Concluded /> } />
          </RoutesReact>
          <Footer />
        </>
      </AuthProvider>
    </BrowserRouter>
  );
}
