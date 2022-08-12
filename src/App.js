import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Link,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Booking from "./components/Booking";
import RoomType from "./components/RoomType";
import AddRoom from "./components/AddRoom";
export default function App() {
  return (
   <div className="App">
    <nav  className="navbar navbar-dark bg-dark ">
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/roomtype">Room Type</Link></li>
        <li><Link to="/addroom">Add Room</Link></li>
      </ul>
    </nav>

    <Routes>
    <Route path="/" element={<Navigate to="/signin"/>} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/roomtype" element={<RoomType />} />
    <Route path="/addroom" element={<AddRoom />} />
    </Routes>
   </div>
  );
}
