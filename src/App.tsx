import React from 'react'


// import Dev from "./pages/dev";
import Home from './pages/home';
import Order from './pages/order';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/order' element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;