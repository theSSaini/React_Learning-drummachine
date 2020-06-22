import React, { useState } from 'react';

import './App.css';
import {bankOne, bankTwo, soundPlay, notes} from './sounds'
import {MyApp, PadBank, DrumPad} from './Example'

const possibleKeys=[81, 87, 69, 65, 83, 68, 90, 88, 67];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.start=this.start.bind(this);
    this.handleKey=this.handleKey.bind(this);
    this.state = {
      soundURl:"",
      padStyle:"",
      soundName:""
    }}
    componentDidMount() {
      document.addEventListener('keydown', this.handleKey);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKey);
    }
    handleKey(e){
      if (possibleKeys.includes(e.keyCode)){
      this.setState({soundURl:notes[e.keyCode].url,soundName:notes[e.keyCode].id })

        
        this.start();
    }
    }
  start(){

    let audio = new Audio(this.state.soundURl)
    audio.play()
  }

  render(){
    
    
  
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        Drum Machine
        {/* <button className="btn btn-primary">Hey</button> */}
        <div className="square">
          <div className=" item1">
          Q
          </div>
          <div  className="item2">
          W
          </div>
          <div className="item3">
          E
          </div>
          <div className="item4">
          A
          </div>
          <div className="item5">
          S
          </div>
          <div className="item6">
          D
          </div>
          <div className="item7">
          Z
          </div>
          <div className="item8">
          X
          </div>
          <div className="item9">
          C
          </div>
        </div>
    <div className="smallsquare ">

      Dashboard <br />
      Current Sound: {this.state.soundName}
    </div>
      </header>
      

    
    
      </div>
    </>
  );
}
}
export default App;
