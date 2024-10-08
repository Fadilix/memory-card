import React from "react";
import "./index.scss";
import GamePage from "./pages/GamePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameOver from "./pages/GameOver";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LeadBoard from "./pages/LeadBoard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={GamePage} />
          <Route path="/gameover" Component={GameOver} />
          <Route path="/*" Component={PageNotFound} />
          <Route path="/leadboard" Component={LeadBoard} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
