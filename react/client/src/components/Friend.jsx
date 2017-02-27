import React from 'react'

const Friend = (props) => (
  <div className='friend'>
    <div className='friend-details'>
    <h3 className='friend-title'>Friends</h3>
      <p className='friend-name'>{props.friend}</p>
    </div>
  </div>
)

const { string, number } = React.PropTypes

Friend.propTypes = {
  friend: string,
}


export default Friend