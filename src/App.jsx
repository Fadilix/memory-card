import React from 'react'
import "./index.scss";
import GamePage from './pages/GamePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameOver from './pages/GameOver';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={GamePage} />
          <Route path='/gameover' Component={GameOver} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;