import React from "react"

export default class Hero extends React.Component {


componentDidMount() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this)
    }
    };
    xhttp.open("GET", "http://mentorapi-env.3rpp4bzma5.eu-west-2.elasticbeanstalk.com/greeting?name=Nas", true);
    xhttp.send();
  }



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
