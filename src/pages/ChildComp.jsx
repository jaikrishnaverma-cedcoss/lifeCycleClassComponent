import React, { Component } from 'react'

export default class ChildComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    
   }
 }
   
 componentWillUnmount(){
  alert('Child Component Unmounted now.')
}
  render() {
    return (
      <div className='bg-warning'>Child Component</div>
    )
  }
}
