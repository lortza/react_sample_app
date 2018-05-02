import React from "react";
import FlashMessage from './FlashMessage.js'

class StopAndGo extends React.Component {
  constructor(){
    super()
    this.state = {
      color: 'success',
      message: 'GO',
      image: '/images/go.png'
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.toggleSign(), 3000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  toggleSign = () => {
    if(this.state.color === 'success'){
      this.setState({
        color: 'danger',
        message: 'STOP',
        image: '/images/stop.gif'
      })
    } else {
      this.setState({
        color: 'success',
        message: 'GO',
        image: '/images/go.png'
      })
    }
  }

  render(){
    const {color, image, message} = this.state
    return (
      <FlashMessage color={color} image={image}>{message}</FlashMessage>
    )
  }
}

export default StopAndGo;
