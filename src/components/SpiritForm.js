import React from "react";


const Input = ({name, value, onChange}) => {
  return (
    <label>
      {name}
      <input className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

const Showable = ({show, children}) => {
  if (!show) {
    return null
  }
  return <div>{children}</div>
}

class SpiritForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      spiritAnimal: ''
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  // Prevent default submit behavior, then log state
  onSubmitForm(e) {
    e.preventDefault()
    console.log(this.state)
  }

  // Change the value of correct field in state
  // based on input name
  onInputChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  render(){
    const {name, spiritAnimal} = this.state
    const showButton = name.length > 0 && spiritAnimal.length > 0
    return (
      <React.Fragment>
        <p>Submit button appears after both fields have content.</p>
        <form onSubmit={this.onSubmitForm}>
          <Input
            name="name"
            value={name}
            onChange={this.onInputChange}
          />
          <Input
            name="spiritAnimal"
            value={spiritAnimal}
            onChange={this.onInputChange}
          />
          <Showable show={showButton}>
            <br />
            <button type="submit" className="btn btn-xs btn-success">Submit</button>
          </Showable>
        </form>
      </React.Fragment>
    )
  }
}

export default SpiritForm;
