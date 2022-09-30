import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./style.scss";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";
const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Homepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
