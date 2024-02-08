import React, { useEffect, useState } from 'react'


// import Dev from "./pages/dev";
import Home from './pages/home';
import Order from './pages/order';
import { Intro, ShowInfo, Cookies } from './utils/elements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/form';
import Blogs from './pages/blogs';
import Info from './pages/info';
const App: React.FC = () => {
  const [showDelayedInfoX, setShowDelayedInfoX] = useState(false);
  const [showDelayedInfoY, setShowDelayedInfoY] = useState(false);
  const [showDelayedInfoZ, setShowDelayedInfoZ] = useState(false);
  useEffect(() => {

    return () => {
      setTimeout(() => {
        setShowDelayedInfoX(true);
        setTimeout(() => {
          setShowDelayedInfoY(true)
          setTimeout(() => {
            setShowDelayedInfoZ(true);
          }, 8000);
        }, 15000);
      }, 2000);
    }
  }, [])

  return (
    <>
      <Intro />
      <ShowInfo inputValue='Welcome' />
      <Cookies />
      {showDelayedInfoX && <ShowInfo inputValue="Explore awesome Blogs in the Blogs Tab." />}
      {showDelayedInfoY && <ShowInfo inputValue="Use Keyboard shortcuts to navigate faster within pages." />}
      {showDelayedInfoZ && <ShowInfo inputValue="We Use Slack for real-time communication." />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/fill_form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;