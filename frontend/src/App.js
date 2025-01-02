import './App.css';
import NavComp from './Components/NavComp';
import React, { useState, useEffect } from "react";
import {Navbar,Container,Row,Col} from 'react-bootstrap';
import Overview from './Pages/Overview';
import Sidebar from './Components/Sidebar';
import * as Icon from 'react-bootstrap-icons';
function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // Function to update screen width on resize
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
  
    // Set up an event listener for window resize
    useEffect(() => {
      window.addEventListener("resize", updateScreenWidth);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", updateScreenWidth);
      };
    }, []);
  return (
    <div className="App">
       {screenWidth < 768 && <NavComp />}
       <Row>
       <Col sm={2}>
         {screenWidth >= 768 && <Sidebar/>}
       </Col>
        <Col sm={10}>sm=8</Col>
      </Row>
    </div>
  );
}

export default App;
