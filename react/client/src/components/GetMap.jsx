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
            var create = this.createMap();
            this.setState({map: create})
      }
   

  createMap() {
    var coords = this.props.coords
    var mapOptions = {
      minZoom: 9,
      zoom: 10,
      center: new google.maps.LatLng(coords.lat, coords.lon)}

    new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas), mapOptions)
  }
}

export default GetMap



