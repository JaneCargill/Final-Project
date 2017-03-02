import React from 'react'
import ReactDOM from 'react-dom'

class UpdateLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      input: null,
      newLocation: null
    }
  }

  // componentWillUpdate() {
  //   console.log('new loc', this.state.newLocation)
  //   console.log('new email', this.props.email)
  //   console.log('new name', this.props.userName)
  //       var url = 'http://localhost:5000/users.json'
  //       const request = new XMLHttpRequest();
  //       request.open('PUT', url );
  //       request.setRequestHeader('Content-Type', 'application/json');
  //       request.withCredentials = true;

  //       request.onload = () => {
  //         if (request.status === 201) {
  //           const user = JSON.parse(request.responseText);
  //           console.log('user amended: ', user);
  //           // this.state.friend(user);
  //         }
  //       }
  //       console.log('newloc', this.state.newLocation)
  //       const data = {
  //         users: {
  //           location: this.state.newLocation}
  //         }
      
  //     request.send(JSON.stringify(data))
    
  // }

  

  handleOnChangeLocation(event) {
     this.setState({ input: event.target.value})
  }
  handleClick() {
    var newLoc = this.state.input
    this.setState({newLocation: newLoc});
  }

  render() {
    console.log('nl', this.state.newLocation)
    return( 
      <div className='update-location'>
      <input className='add-location' type='text' placeholder='Postcode Location' onChange={this.handleOnChangeLocation.bind(this)}/>
      <p id='change-location' onClick={this.handleClick.bind(this)}>Change Location</p>
      </div>)
  }
}


  export default UpdateLocation
