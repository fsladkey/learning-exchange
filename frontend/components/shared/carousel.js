import React, { Component } from 'react'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedIdx: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const numSlides = this.props.children.length
      const selectedIdx = (this.state.selectedIdx + 1) % numSlides
      this.setState({ selectedIdx })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  currentFrame() {
    return this.props.children[this.state.selectedIdx]
  }

  render() {
    const { children } = this.props;
    return (
      <div className="carousel">
        { this.currentFrame() }
      </div>
    )
  }
}
