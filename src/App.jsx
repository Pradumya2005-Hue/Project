import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./Router/Mainroutes";
import axios from "./api/axiosconfig";

const App = () => {
  const getproduct = async () => {
    try {
      const res = await axios.get("/products");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
