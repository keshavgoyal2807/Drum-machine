import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Button';
import bankOne from './key_press_details';
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      drum_text:'',
      power:true,
    }
  }
  changeDisplay = (text)=>{
    this.setState({
      drum_text:text
    })
  }
  power = ()=>{
    this.setState((state)=>{
      return{
        ...state,
        power:!state.power
      }
    })
  }
  render(){
    const power_class = (this.state.power)?'power power-on':'power power-off' 
    return(
      <div id="drum-machine">
        <div id="display">
          {this.state.drum_text}
        </div>
        <div className="row">
        <Button text="Q" details = {bankOne[0]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="W" details = {bankOne[1]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="E" details = {bankOne[2]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        </div>
        <div className="row">
        <Button text="A" details = {bankOne[3]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="S" details = {bankOne[4]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="D" details = {bankOne[5]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        </div>
        <div className="row">
        <Button text="Z" details = {bankOne[6]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="X" details = {bankOne[7]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        <Button text="C" details = {bankOne[8]} changeDisplay={this.changeDisplay} power={this.state.power}/>
        </div>
        <div className="power-button" onClick={this.power}>
          <div className={power_class}></div>
        </div>
        <div className="power-name">
          POWER
        </div>
      </div>
    )
  }
}

export default App;
