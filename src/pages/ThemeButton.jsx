import React, { Component } from 'react'

export default class ThemeButton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
    render() {
        console.log("theme Button component is renderd");
    return (
        <button className='btn btn-dark my-2' onClick={this.props.getDerivedStateFromProps}>Toggle theme</button>
    )
  }
}
