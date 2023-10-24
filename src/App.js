import logo from './logo.svg';
import sharingan from './sharingan.png';
import './App.css';
import Homepage from './component/page/homepage';
import Cards from './component/cards';
import { useEffect, useState } from 'react';
import LocalStorages from './component/page/localStorage';
import { increment, decrement } from './features/counterSlice';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './component/page/layout/layout';


function App() {
  // const [logo, setLogo] = useState("")

  // useEffect(() => {
  //   setLogo(sharingan)
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/cards' element={<Cards/>}></Route>
          <Route path='/page' element={<Homepage/>}></Route>
          </Route>
        </Routes>

      </BrowserRouter>



    </>
  );
}

export default App;
