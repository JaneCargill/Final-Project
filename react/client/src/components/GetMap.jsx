import React from 'react'
import ReactDOM from 'react-dom'

class GetMap extends React.Component {

 constructor(props) {
  super(props)
  this.state = {
    map: null,
    coords: null
   
  }
}

componentWillReceiveProps(nextprops) {

    this.setState({coords: nextprops.coords}, this.createMapAndMarker)
}

render() {
 
    console.log(this.props.friends)
  return(
   <div className="GMap">
   <div className= "GMap" ref="map_canvas">
   </div>
   </div>
   )
}

componentDidMount(){
  this.createMapAndMarker();
 
}

createMapAndMarker() {
  var newMap = this.createMap();
  this.setState({map: newMap}, this.createMarker);

}


createMap() {
  var coords = this.props.coords
  var mapOptions = {
    minZoom: 10,
    zoom: 2,
    center: new google.maps.LatLng(coords.lat, coords.lon)}

    return new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas), mapOptions)
  }

  createMarker() {
   var marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.state.coords.lat, this.state.coords.lon),
    map: this.state.map,
    title: "hello"})
   // // marker.setMap(this.createMap());
   // console.log('marker:', marker)
 }
}


export default GetMap



