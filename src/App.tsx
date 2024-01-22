import React, { useEffect, useState } from 'react'


// import Dev from "./pages/dev";
import Home from './pages/home';
import Order from './pages/order';
import { Intro, ShowInfo } from './utils/elements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => {
  const [showDelayedInfo, setShowDelayedInfo] = useState(false);
  useEffect(() => {

    return () => {
      setTimeout(() => {
        setShowDelayedInfo(true);
      }, 2000);
    }
  }, [])

  return (
    <>
      <Intro />
      <ShowInfo inputValue='Welcome' />
      {showDelayedInfo && <ShowInfo inputValue="Explore awesome Games in the Games Tab." />}
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