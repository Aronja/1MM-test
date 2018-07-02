import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Hero/>
      </div>
    );
  }
}
