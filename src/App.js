import React from "react";

import Footer from "./conponents/Footer";
import Banner from "./conponents/Banner/";
import SideBar from "./conponents/Sidebar";
import PostPage from "./conponents/PostPage";
import NavBar from "./conponents/Navbar";

import "./style.css";
 
function App() {
  return (
    <main className="app">
    <Banner/>
    <NavBar/>
    <div className="sec1">
      <SideBar/>
      <section className="space"></section>
      <PostPage/>
    </div>
    <Footer/>
    </main>
  );
}

export default App;
