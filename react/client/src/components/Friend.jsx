import React from 'react'

const Friend = (props) => (
  <div className='friend'>
    <div className='friend-details'>
    <h3 className='friend-title'></h3>
      <p className='friend-name'>{props.friend}</p>
      <p className='get-location'>Get Location</p>
    </div>
  </div>
)

const { string, number } = React.PropTypes

Friend.propTypes = {
  friend: string,
}


export default Friend