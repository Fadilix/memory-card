import React from 'react'
import "./index.scss";
import GamePage from './pages/GamePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameOver from './pages/GameOver';
import PageNotFound from './pages/PageNotFound';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={GamePage} />
          <Route path='/gameover' Component={GameOver} />
          <Route path='/*' Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;