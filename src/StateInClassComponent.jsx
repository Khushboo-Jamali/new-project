import React, {Component} from 'react';
  class StateInClasslComponent extends Component {
    constructor(){
        super();
        this.state={
            // name:'Hussain'
            name:0

        }
    }
    updateName(){
        // alert('Hi')
        // this.setState({name:'Aliya'})
        this.setState({name:this.state.name+1})

    }
  render (){
    return(
        <>
        <h3>State In Class Component {this.state.name}</h3>
        <button onClick={()=>this.updateName()}>Click Me</button>
        </>
    )
  }
    
}
export default StateInClasslComponent;