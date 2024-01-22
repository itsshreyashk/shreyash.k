import React, { useEffect, useState } from 'react'


// import Dev from "./pages/dev";
import Home from './pages/home';
import Order from './pages/order';
import { Intro, ShowInfo } from './utils/elements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => {
  const [showDelayedInfoX, setShowDelayedInfoX] = useState(false);
  const [showDelayedInfoY, setShowDelayedInfoY] = useState(false);
  useEffect(() => {

    return () => {
      setTimeout(() => {
        setShowDelayedInfoX(true);
        setTimeout(() => {
          setShowDelayedInfoY(true)
        }, 15000);
      }, 2000);
    }
  }, [])

  return (
    <>
      <Intro />
      <ShowInfo inputValue='Welcome' />
      {showDelayedInfoX && <ShowInfo inputValue="Explore awesome Games in the Games Tab." />}
      {showDelayedInfoY && <ShowInfo inputValue="Use Keyboard shortcuts to navigate faster within pages." />}
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