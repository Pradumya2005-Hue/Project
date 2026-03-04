import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./Router/Mainroutes";
const App = () => {
  return (
    <div className="w-screen h-screen bg-black-500">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
