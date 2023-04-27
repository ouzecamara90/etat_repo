import React from 'react';
import { render } from 'react-dom';

function OneTimeButton(props) {
  return (
    <button onClick={props.onClick}>
      You Can Only Click Me Once
    </button>
  );
}

function sayHi() {
  console.log('yo');
}

render(
  <OneTimeButton onClick={sayHi}/>,
  document.querySelector('#root')
);

//Alors voilà, convertissons la fonction en une classe :

class OneTimeButton extends React.Component {
  // initialize the state...
  state = {
    clicked: false
  }

  // make a click handler
  handleClick = () => {
    // The handler won't be called if the button
    // is disabled, so if we got here, it's safe
    // to trigger the click.
    this.props.onClick();

    // Ok, no more clicking.
    this.setState({ clicked: true });
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        You Can Only Click Me Once
      </button>
    );
  }
}


// we need to import the `useState` hook:
// (or write React.useState)
import React, { useState } from 'react';

function OneTimeButton(props) {
  // Create a new piece of state.
  // It comes with its own updater function!
  const [clicked, setClicked] = useState(false);

  // We need to handle button clicks by
  // calling out to the callback prop and then
  // turning the button off
  function doClick() {
    props.onClick();
    setClicked(true);
  }

  // This part is pretty much the same, but a little
  // less cluttered without `this`
  return (
    <button
      onClick={clicked ? undefined : doClick}
      disabled={clicked}
    >
      You Can Only Click Me Once
    </button>
  );
}


function AudioPlayer() {
    const [volume, setVolume] = useState(80);
    const [position, setPosition] = useState(0);
    const [isPlaying, setPlaying] = useState(false);
  
    // < beautiful audio player goes here >
  }


  function usePlayerState(lengthOfClip) {
    const [volume, setVolume] = useState(80);
    const [position, setPosition] = useState(0);
    const [isPlaying, setPlaying] = useState(false);
  
    const stop = () => {
      setPlaying(false);
      setPosition(0);
    }
  
    const start = () => {
      setPlaying(true);
    }
  
    return {
      volume,
      position,
      isPlaying,
      setVolume,
      setPosition,
      start,
      stop
    };
  }


