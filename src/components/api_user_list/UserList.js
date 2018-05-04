import React from "react"
import UserCard from './UserCard'


class UserList extends React.Component {
  constructor() {
    super()
    // Initialize users in state as an empty array
    this.state = {
      users: [],
      loading: '/images/loading3.gif',
      isFetching: false
    }
    this.getAllUsers = this.getAllUsers.bind(this)

  }

  getAllUsers(){
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // Call the API to get the users, then update state
    // which triggers re-render
    // fetch('https://reqres.in/api/users?delay=2')
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: json.data,
          isFetching: false
        })
      })
  }

  deleteUser(e){
    e.preventDefault()
    let userId = e.target.id

    const options = {
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin',
      mode: 'cors',
      method: 'DELETE'
    }

    fetch(`https://reqres.in/api/user/${userId}`, options)
      .then( (response) => {
        if(response.status === 204){
          console.log('yay. deleted.')
        }
      })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  render(){
    const {users, loading, isFetching} = this.state
    const userList = users.map((user) => {
      return <UserCard user={user} key={user.id} deleteUser={this.deleteUser}/>
    })

    return (
      <div className="container">
        <div className="card-group">
          {isFetching ? <img className='loading-spinner' src={loading} alt='Loading...'/> : userList}
        </div>
      </div>
    )//return
  }//render

}//class

export default UserList
