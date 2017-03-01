import React from 'react'
import { Link, browserHistory } from 'react-router'
import Friend from './Friend'
import GetFriend from './GetFriend'
import GetMap from './GetMap'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      friends: [],
      addFriend: null,
      currentUserID: null,
      currentUser: null,
      coords: {lat: 56.838555, lon: -2.544076},
      location: null
    }
  }

  componentDidMount(){
    this.getData();
      var url = 'http://localhost:5000/api/users'
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          // console.log("user data ", data)
          this.setState( { currentUser: data.name, currentUserID: data.id } )
         } else{
          console.log("Uh oh you're not logged in!")
          browserHistory.goBack()
         }
      }
      request.send(null)
    }

  getData() {
    var url = 'http://localhost:5000/api/friends'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        // console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
    // console.log('friends id: ', data)
        this.setState( { friends: data })
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }

  selectFriendToAdd(event){
    var url = 'http://localhost:5000/api/friends.json'
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open('POST', url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201) {
        const user = JSON.parse(request.responseText);
        // console.log('user to add: ', user);
        this.state.friend(user);
      }
    }
    const data = {
      friends: {
        friend: this.state.addFriend,
        user_id: this.state.currentUserID}
      }
  
  request.send(JSON.stringify(data))
  this.getData();
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  setFriendToAdd(user) {
    this.setState({addFriend: user.name});

  }

  render(){
    // console.log('current friends', this.state.currentUser)
    // console.log('add friend', this.state.addFriend)
    return(
      <div >
        <nav>
          <Link to='/' className='title'>Meeter Upper</Link>
          
        </nav>
        <div className="listing">
        <div className='friends-container'>
        <input className='search-box' type='text' placeholder='Search Friends...' value={this.state.searchQuery} onChange={this.doSearch} />
          {
            this.state.friends.filter((friend) => `${friend.friend}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((friend, index) => (
              <Friend { ...friend } key={index}/>
            ))

          }
            
            <GetFriend friends={this.state.friends} currentUser={this.state.currentUser} selectFriend={this.setFriendToAdd.bind(this)}/>
            <button id='add-button' onClick={this.selectFriendToAdd.bind(this)}>Add Friend</button>
        </div>
        <div className='map-container'>
          <GetMap coords={this.state.coords}/>
        </div>
      </div>
      </div>
    )
  }

}

export default Listing