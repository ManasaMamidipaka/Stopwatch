// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  renderInMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderInSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerID = setInterval(this.startClock, 1000)
  }

  startClock = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  stopButton = () => {
    clearInterval(this.timerID)
  }

  resetButton = () => {
    this.setState({timerInSeconds: 0})
    clearInterval(this.timerID)
  }

  render() {
    const displayTime = `${this.renderInMinutes()}:${this.renderInSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading"> Stopwatch </h1>
          <div className="stopwatch-card">
            <div className="stop-watch-card-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="clock-img"
                alt="stopwatch"
              />
              <p className="timer-heading"> Timer </p>
            </div>
            <h1 className="timer-display" data-testid="timer">
              {displayTime}
            </h1>
            <div className="buttons-container">
              <button
                className="start-button button"
                type="button"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.resetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
