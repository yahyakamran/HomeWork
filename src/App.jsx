import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loginPage from "./Pages/loginPage";
import HomePage from "./Pages/HomePage";

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
