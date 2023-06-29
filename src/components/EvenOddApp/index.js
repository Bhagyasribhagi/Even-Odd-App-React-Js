// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  increament = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      let numtype
      if (num % 2 === 0) {
        numtype = true
      } else {
        numtype = false
      }
      return {isEven: numtype, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const content = isEven ? 'Even' : 'Odd'
    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p className="para">Count is {content}</p>
          <button className="btn" type="button" onClick={this.increament}>
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
