// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="main-container">
        <h1>Show/Hide</h1>
        <div className="container">
          <div>
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="name-container">Joe</p>}
          </div>
          <div className="lastname-container">
            <button type="button" className="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name-container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
