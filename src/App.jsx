import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loginPage from "./Pages/LoginPage.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={loginPage} />
          <Route path="/homepage" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
