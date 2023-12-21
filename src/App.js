import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
        <Header header={'header'}/>
        <Main arr={["footer", "nav", "action"]} arr2={["Figure","Figcaption"]} nav={'nav'}/>
        <Footer footer={'footer'} />
      </div>
    );
  }
}
