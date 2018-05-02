import React from "react"

class UserCard extends React.Component {
  render(){
    const {first_name, last_name, avatar} = this.props.user
    return (
      <div className="UserCard card" style={{maxWidth: `128px`}} >
        <img
          className="card-img-top img-fluid"
          src={avatar}
          alt="user avatar"
        />
        <div className="card-block">
          <h4>{first_name} {last_name}</h4>
        </div>
      </div>
    )//return
  }//render
}

export default UserCard
