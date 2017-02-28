import React from 'react'
import { Link, browserHistory } from 'react-router'
import Friend from './Friend'
import GetFriend from './GetFriend'
import AddFriend from './AddFriend'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      friends: [],
      addFriend: null,
      currentUserID: null
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    var url = 'http://localhost:5000/api/friends'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { friends: data, currentUserID: data[0].user_id} )
    console.log('friends id: ', data)
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
        console.log('user to add: ', user);
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
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>Meeter Upper</Link>
          
        </nav>

        <div className='friends-container'>
        <input className='search-box' type='text' placeholder='Search Friends...' value={this.state.searchQuery} onChange={this.doSearch} />
          {
            this.state.friends.filter((friend) => `${friend.friend}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((friend, index) => (
              <Friend { ...friend } key={index}/>
            ))

          }
            
            <GetFriend selectFriend={this.setFriendToAdd.bind(this)}/>
            <button id='add-button' onClick={this.selectFriendToAdd.bind(this)}>Add Friend</button>
        </div>
      
      </div>
    )
  }

}

export default Listing