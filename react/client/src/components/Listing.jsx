import React from 'react'
import { Link, browserHistory } from 'react-router'
import Friend from './Friend'
import AddFriend from './AddFriend'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      friends: [],
      addFriend: null
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/friends'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        // console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { friends: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  setFriendToAdd(user) {
    this.setState({addFriend: user});
  }

  handleClick() {
    var friend = this.state.addFriend;
    this.state.friends.push(friend);
  }

  render(){
    console.log('friends: ', this.state.friends)
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>Meeter Upper</Link>
          
        </nav>

        <div className='friends-container'>
        <input className='search-box' type='text' placeholder='Search Friends...' value={this.state.searchQuery} onChange={this.doSearch} />
          {
            this.state.friends.filter((friend) => `${friend.friend}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((friend) => (
              <Friend { ...friend } key={friend.user_id}/>
            ))

          }
            <button onClick={this.handleClick.bind(this)}>Add Friend</button>
            <AddFriend selectFriend={this.setFriendToAdd.bind(this)}/>
        </div>
      
      </div>
    )
  }

}

export default Listing