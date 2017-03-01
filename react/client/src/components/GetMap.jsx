import React from 'react'
import ReactDOM from 'react-dom'

class GetMap extends React.Component {

 constructor(props) {
  super(props)
  this.state = {
    map: null,
    marker: null,
    infoWindow: null
  }
}

render() {
  return(

   <div className="GMap">
   <div className= "GMap" ref="map_canvas">
   </div>
   </div>
   )
}

componentDidMount(){
  var newMap = this.createMap();
  this.setState({map: newMap}, this.createMarker)
  // this.createMarker();
}


createMap() {
  var coords = this.props.coords
  var mapOptions = {
    minZoom: 9,
    zoom: 10,
    center: new google.maps.LatLng(coords.lat, coords.lon)}

    return new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas), mapOptions)
  }

  createMarker() {
   var marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon),
    map: this.state.map,
    title: "hello"})

 }
}


export default GetMap



