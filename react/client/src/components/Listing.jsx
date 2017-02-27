import React from 'react'
import { Link, browserHistory } from 'react-router'
import Friend from './Friend'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      friends: [] 
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
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        console.log('state', data)
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

  render(){
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>Meeter Upper</Link>
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>

        <div className='friends-container'>
          {
            this.state.friends.filter((friend) => `${friend.friend}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((friend) => (
              <Friend { ...friend } key={friend.user_id}/>
            ))

          }
        </div>
      
      </div>
    )
  }

}

export default Listing