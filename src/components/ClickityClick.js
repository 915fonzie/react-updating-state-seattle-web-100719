// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component{
    constructor() {
        super();
     
        // Define the initial state:
        this.state = {
          toggled: false
        };
      }
     
      handleClick = () => {
        this.setState(previousState => {
            return {toggled: !previousState.toggled}
        })
      };
     
      render() {
        return (
          <div>
            <p>I have {this.state.toggled ? true : 'not'}</p>
            <button onClick={this.handleClick}>{this.state.toggled ? "ON":"OFF"}</button>
          </div>
        );
      }
}