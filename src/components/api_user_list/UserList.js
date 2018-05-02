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
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // After component mounts, call the API to get the
    // users, then update state which triggers re-render
    fetch('https://reqres.in/api/users?delay=2')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: json.data,
          isFetching: false
        })
      })
  }

  render(){
    const {users, loading, isFetching} = this.state
    const userList = users.map((user) => {
      return <UserCard user={user} key={user.id} />
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
