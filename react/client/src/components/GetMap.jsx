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

    console.log('props coord', nextprops.coords)
    this.setState({coords: nextprops.coords}, this.createMapAndMarker)
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
  console.log('state2', this.state)
  this.createMapAndMarker();
  // var newMap = this.createMap();
  // this.setState({map: newMap});
  // this.createMarker();
}

createMapAndMarker() {
  var newMap = this.createMap();
  this.setState({map: newMap}, this.createMarker);
  // this.createMap();
  // this.createMarker();
}


createMap() {
    console.log('state', this.state.coords) 
  var coords = this.props.coords
  var mapOptions = {
    minZoom: 10,
    zoom: 2,
    center: new google.maps.LatLng(coords.lat, coords.lon)}

    return new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas), mapOptions)
  }

  createMarker() {
    console.log('help', this.state)
   var marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.state.coords.lat, this.state.coords.lon),
    map: this.state.map,
    title: "hello"})
   // // marker.setMap(this.createMap());
   // console.log('marker:', marker)
 }
}


export default GetMap



