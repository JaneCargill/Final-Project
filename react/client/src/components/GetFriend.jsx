import React from 'react'
import { Link, browserHistory } from 'react-router'
import Friend from './Friend'

class GetFriend extends React.Component {

  constructor(props) {
    super(props)
    this.state = {  
      users: [],
      selectedIndex: 0
    }
  }

  handleChange(event) {
    var newIndex = event.target.value;
    console.log('index', newIndex)
    this.setState({selectedIndex: newIndex});
    this.props.selectFriend(this.state.users[newIndex])
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/users/shows'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        // console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { users: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }


  render(){
    // console.log('state', this.state.selectedIndex)
    var options = this.state.users.map(function(user, index) {
    return <option value={index} key={index}>{user.name}</option>
        });
    return (
      <select id='users' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      );
  }
}

export default GetFriend