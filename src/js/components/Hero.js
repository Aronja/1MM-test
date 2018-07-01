import React from "react"

export default class Hero extends React.Component {

  render() {
    return (
      <div class="hero-text-box">
        <h1>
          We make a living by what we get.
          <br/>
          We make a life by what we give.
        </h1>
        <a class="btn btn-full" href="#">Make a difference</a>
      </div>
    );
  }
}
