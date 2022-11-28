import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, context) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.props.hasError) {
      return <h1>Ooops. That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
