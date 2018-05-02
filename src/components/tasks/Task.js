import React from "react"

class Task extends React.Component {

  displayCheck(complete, priority){
    if(complete && priority){
      return <i className='fal fa-check-square'></i>
    } else if(priority) {
      return <i className='fas fa-exclamation-square'></i>
    } else if(complete){
      return <i className='fal fa-check-square'></i>
    } else {
      return <i className='fal fa-square'></i>
    }
  }
  render(){
    const {name, complete, priority} = this.props.attributes
    return (
      <p className='well'>{this.displayCheck(complete, priority)}&nbsp;&nbsp;{name}</p>
    )
  }
}

export default Task
