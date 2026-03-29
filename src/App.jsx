import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./Router/Mainroutes";
import axios from "./api/axiosconfig";
import {asyncgetproducts} from "./store/userAction"
import { useDispatch, useSelector } from "react-redux";
const App = () => {
   const dispatch = useDispatch()
  const data = useSelector((state) => state)
  
  
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
