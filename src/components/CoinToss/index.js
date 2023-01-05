// Write your code here
import {Component} from 'react'
import './index.css'

const IMAGE_HEADS = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const IMAGE_TAILS = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinTossin extends Component {
  state = {image: IMAGE_HEADS, headsCount: 0, tailsCount: 0}

  onButtonClick = () => {
    const {image, headsCount, tailsCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult === 0) {
      this.setState({image: IMAGE_HEADS})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({image: IMAGE_TAILS})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {image, headsCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="img" />
          <button type="button" className="button" onClick={this.onButtonClick}>
            Toss Coin
          </button>
          <div className="list-of-items">
            <p className="para1">Total: {headsCount + tailsCount}</p>
            <p className="para1">Heads: {headsCount}</p>
            <p className="para1">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinTossin
