// Optional: Add destructured Component to import
import React, {Component} from 'react'

class FlashMessage extends Component {

  render() {
    const {color, image, children} = this.props
    return (
      <div
        className={`alert alert-${color} sign`}
        role="alert"
      >
        <img src={image} alt={children} className="sign-image"/>
        <p>{children}</p>
      </div>
    )
  }
}

export default FlashMessage;
