import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BandSection from "./components/BandSection/BandSection";
import Navbar from "./components/Navbar/Navbar";
import ContentCard from "./components/ContentCard/ContentCard";
import BandContainerSection from "./components/BandContainerSection/BandContainerSection";
import { useState } from "react";

import m4 from "../src/components/ContentCard/bmw m4.jpeg";
import m2 from "../src/components/ContentCard/bmw m2 2.jpeg";
import m2c from "../src/components/ContentCard/bmw m2.jpeg";
import m3 from "../src/components/ContentCard/m3 f80.jpg";

import HomeClass from "./pages/HomeClass";
import BandMemberCard from "./components/BandMemberCard/BandMemberCard";

import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Button } from "reactstrap";
const list = [
  {
    username: "Mobil_M3_TEST",
    caption: "f80 m3",
    numberOfLikes: 1200,
    location: "BSD",
    img_src: m3,
  },
  {
    username: "Mobil_M2",
    caption: "M2 N55",
    numberOfLikes: 3300,
    location: "GERMAN",
    img_src: m2,
  },
  {
    username: "Mobil_M2C",
    caption: "M2C S55",
    numberOfLikes: 5000,
    location: "Gading Serpong",
    img_src: m2c,
  },
  {
    username: "Mobil_M4",
    caption: "f82 M4",
    numberOfLikes: 4300,
    location: "Lampung",
    img_src: m4,
  },
];

function App() {
  const [myStatus, setStatus] = useState(false);

  function changeStatus() {
    setStatus(!myStatus);
  }

  return (
    <>
      {/* {myStatus ? <Home></Home> : <HomeClass />} */}
      {/* <Home></Home> */}

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<HomeClass></HomeClass>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>

      {/* <Button onClick={changeStatus} color="success">
        change status
      </Button> */}

      {/* <HomeClass></HomeClass> */}
    </>
  );
}

export default App;
