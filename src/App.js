import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    // create conditional statements in rendering function
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton} {/* calling the function */}
      </div>
    )
  }
}

export default App
