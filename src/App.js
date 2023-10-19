import logo from './logo.svg';
import sharingan from './sharingan.png';
import './App.css';
import Homepage from './component/page/homepage';
import Cards from './component/cards';
import { useEffect, useState } from 'react';


function App() {
  const [ logo, setLogo ] = useState("")

  useEffect(()=>{
    setLogo(sharingan)
  },[])

  return (
    <>
    <body>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo.png" />
      </header>
      <Homepage title="Sejarah" deskripsi = "Deskripsi," tanggal=" 19 Oktober, 2023"></Homepage>

    </div>
    <Cards></Cards>
    </body>
   
    </>
  );
}

export default App;
