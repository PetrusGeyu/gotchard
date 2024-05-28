import React from 'react'
import '/src/App.css'
import { TypeAnimation } from 'react-type-animation';
import { invoke } from '@tauri-apps/api/tauri';
const Index = () => {
  return (
    <div>
      <Banner/>
     <Text/>
     <Button/>
    </div>
  )
}

const Banner = () => {
  return (
    <div className="container">
      <div className="line">
        <div
          className="box box-1"
          onClick={() => {
            alert("Gotchaa!!!");
          }}
        ></div>
        <div
          className="box box-2"
          onClick={() => {
            alert("Gotchaa!!!");
          }}
        ></div>
      </div>
      <div className="line">
        <div
          className="box box-3"
          onClick={() => {
            alert("Gotchaa!!!");
          }}
        ></div>
        <div
          className="box box-4"
          onClick={() => {
            alert("Gotchaa!!!");
          }}
        ></div>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <h2 className="text">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Lets We Dive Into World Of Gotchard",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Lets We Dive Into World Of Gatcha!",
          1000,
          "Lets We Dive Into World Of Gatchanko!!",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.5em", display: "inline-block" }}
        repeat={Infinity}
      />
    </h2>
  );
};

const Button = () => {
  const handleClick = () => {
    invoke('close_application');
  }
  return (
    <div className="btn-list">
      <button className="button"><a href='/Home'>Play</a></button>
      <button className="button"><a href='/About'>About Us</a></button>
      <button className="button" onClick={handleClick}>Exit</button>
    </div>
  );
};



export default Index

