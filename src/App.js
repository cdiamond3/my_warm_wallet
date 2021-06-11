import { Component } from 'react';
import './App.css';
import SearchCoinsForm from "./Components/SearchCoinsForm"
import CoinsCardContainer from "./Containers/CoinCardContainers"
const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1H"

export default class App extends Component {

  state = {
    allCoins: [],
    filteredCoins: [],
    submitInput: [],
    userInput: "",
    likeCount: 0
  }

  componentDidMount() {
    fetch(coinUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ allCoins: data})
      this.setState({filteredCoins: data})
    })
  }
  
  filterCoins = (event) => {
    const filterCoins = this.state.allCoins 
    .filter(
      coin => (
        coin.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        )
        this.setState({filteredCoins: filterCoins})
      }

      incrementLike = () => {
        this.setState({
          likeCount: this.state.likeCount + 1
        })
      }
      decrmentLike = () => {
        this.setState({
          likeCount: this.state.likeCount - 1
        })
      }
      


  render() {
    return (
      <div>
        <h1>My Warm Wallet!</h1>
        <CoinsCardContainer 
        coinData={this.state.allCoins} 
        filterCoins={this.filterCoins} 
        handleIncrement={this.incrementLike} 
        handleDecrement={this.decrmentLike}
        likes={this.state.likeCount}
        />
      </div>
    )
  }
}
