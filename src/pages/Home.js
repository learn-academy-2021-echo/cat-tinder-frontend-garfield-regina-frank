import React, { Component } from 'react'
import raisins from '../assets/Garfieldand_friends.png'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Welcome to Garfield's Friends App!</h3>
        <br />
        <h4>Garfield and friends.</h4>
        <br />
        <img src={raisins} alt="portrait of a flat-faced cat" className="raisins" />
      </div>
    )
  }
}
export default Home