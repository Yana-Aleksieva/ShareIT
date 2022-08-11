import { Component } from "react";

export class ErrorBoundary extends Component {


  constructor(props) {

    super(props)

    this.state = {

      error: null
    }
  }

  static getDerivedStateFromError(error) {

    console.log(error.message)
    return { error: error.message }
  }

  componentDidCatch(error, errorInfo) {
    console.log('cccc', error, errorInfo)
  }

  render() {

    if (this.state.error) {

      return <h1>Went wrong</h1>
    }

    return this.props.children
  }
}
export default ErrorBoundary;