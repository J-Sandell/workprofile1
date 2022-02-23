import React from "react";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Footer from "./components/FooterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Home/>   
      <Footer/>
    </React.Fragment>
  );
}

export default App;