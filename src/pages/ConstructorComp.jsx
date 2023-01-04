import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ConstructorComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      darkMode: props.darkMode,
      mount:true
    }
  }
 mount=()=>{
this.setState({...this.state,mount:!this.state.mount})
 }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Displaying the previous value of the state
   console.log('getSnapshotBeforeUpdate Previous darkMode State: ' + prevState.darkMode)
   console.log('getSnapshotBeforeUpdate Previous darkMode props: ' + prevProps.darkMode)
   return null;
  }
  componentDidUpdate() {
  
    // Displaying the current value of the state
 console.log('componentDidUpdate current state: ' + this.state.darkMode)
  }

  shouldComponentUpdate(nextProps,nextState) {
    // Rendering the component only if 
    // passed props value is changed
    if ((nextProps.darkMode !== this.props.darkMode)||(nextState.darkMode !== this.state.darkMode)||(nextState.mount !== this.state.mount)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidMount() {
    // Changing the state after 5 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({...this.state, darkMode: true });
    }, 5000);
  }
  
  render() {
    console.log("Constructor component is renderd");
    return (
      <>
        <div className={`card mt-2 ${(this.state.darkMode) ? 'bg-secondary text-white' : ''} `} style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" onClick={() => this.setState({...this.state, darkMode: 
              !this.state.darkMode })}>Dark Mode {(this.state.darkMode) ? 'Off' : 'On'}</button>
          </div>
          <button className='btn btn-danger' onClick={this.mount}>{(this.state.mount)?"UnMount":"Mount"}</button>
          {
            (this.state.mount)?<ChildComp/>:<p></p>
          }
        </div>

      </>
    )
  }
}
