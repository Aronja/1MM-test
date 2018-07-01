import React from "react";

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <div clas="row">
              <img src="img/1mm-logo.png" alt="1MM logo" class="logo"/>
              <ul class="main-nav">
                <li><a href="#">The power of mentoring</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

