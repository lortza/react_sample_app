import React from "react"
import Alert from '../elements/Alert'
import Showable from '../elements/Showable'

class TaskForm extends React.Component {
  render(){
    const {onSubmit, errorMsg} = this.props
    return (
      <form onSubmit={onSubmit} >
        <div className="row">
          <Showable errorMsg={errorMsg}>
            <Alert type="danger">
              Oops, there was a problem...
            </Alert>
          </Showable>

          <div className="col-xs-5">
            <label>Task Name</label>
            <input type='text' name='name' className='form-control'/>
          </div>

          <div className="col-xs-2">
            <label>User ID</label>
            <input type='text' name='user_id' className='form-control'/>
          </div>

          <div className="col-xs-2">
            <label>Complete?</label><br/>
            <input type='checkbox' name='complete'/>
          </div>

          <div className="col-xs-2">
            <label>Priority?</label><br/>
            <input type='checkbox' name='priority'/>
          </div>
          <div className="col-xs-1">
            <button type='submit' className='btn btn-xs btn-primary' onSubmit={onSubmit}>Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default TaskForm
