import React, { Component } from "react";
import Component2 from './Component2/Component2'

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.universalChangeHandler = this.universalChangeHandler.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  universalChangeHandler(e){
    // console.log('this is event.target', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeName(){
    this.setState({
      firstName: 'Nitin',
      lastName: 'Misra'
    })
  }

  render() {
    // console.log(this.changeName)
    // const {firstName, lastName} = this.state
    return (
      <div>
          <h1>This is Component1</h1>
          <Component2 
             firstName={this.state.firstName} 
             lastName={this.state.lastName}
             changeNameFn={this.changeName}
             changeHandler={this.universalChangeHandler}
          />
      
      </div>
    );
  }
}
