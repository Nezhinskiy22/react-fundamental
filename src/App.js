import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContex.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContex.Provider>
  );
}

export default App;
