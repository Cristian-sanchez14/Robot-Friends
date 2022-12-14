import React, { Component } from 'react'
import CardList from '../components/CardList'
import { robots } from '../components/Robots'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

// props
// state
// The Component Lifecycle
// children

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    console.log('component')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: robots }))
    console.log('componentDidMount')
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  //
  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log('render')

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RobotFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
         <h1 className="f2">by Cristian Sanchez</h1>
      </div>
    )
  }
}

export default App
