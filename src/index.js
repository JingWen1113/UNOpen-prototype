import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Welcome() {
  return (
    <div>
      <h1>Welcome to UNOpen project prototype</h1>
      <p>Group members: </p>
      <Student name="Jing Wen" />
      <Student name="Diego Kervabon"/>
      <Student name="Lihong Chen"/>
      <Student name="Ramon Torres"/>
      <Student name="Favian Flores"/>


<div className="card-container">
  <div className="card">
    <div className="front face"></div>
    <button>Draw a Card</button>
    <button className="button-play-card">Play Card</button>
  </div>
  <div className="card">
    <div className="front face"></div>
    <button>Draw a Card</button>ß
    <button className="button-play-card">Play Card</button>
  </div>
  <div className="card">
    <div className="front face"></div>
    <button>Draw a Card</button>
    <button className="button-play-card">Play Card</button>
  </div>
  <div className="card">
    <div className="front face"></div>
    <button>Draw a Card</button>
    <button className="button-play-card">Play Card</button>
  </div>
</div>

    </div>
    


  );
}
//props are always passed to components
function Student(props) {
  return <div className="blue-text"> - {props.name}</div>;
}




ReactDOM.render(
  <Welcome />,
  document.getElementById("root")
);

