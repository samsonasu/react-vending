import React from 'react';
import logo from './vending.webp';
import coke from './coke.jpeg';
import pepsi from './pepsi.jpg';
import orange from './orange.jpg';
import './App.scss';
import CoinSlot from './CoinSlot.js'
import SodaButton from './SodaButton.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      successMessage: "",
      errorMessage: ""
    }

    this.itemChosen = this.itemChosen.bind(this);
    this.coinInserted = this.coinInserted.bind(this);
    this.refundCoins = this.refundCoins.bind(this);
  }

  itemChosen(sodaButton) {
    if (sodaButton.props.price <= this.state.total) {
      sodaButton.setState({
        chosen: true
      })
      var change = this.state.total - sodaButton.props.price;
      var changeMessage = change > 0 ? "Here is " + change + " cents change!" : "";
      this.setState({
        successMessage: "Here's your " + sodaButton.props.name + "! " + changeMessage
      })
    } else {
      var difference = sodaButton.props.price - this.state.total;
      this.setState({
        errorMessage: "Not enough Money!  You need to add " + difference + " more cents!"
      })
    }
  }
  coinInserted(coinValue) {
    this.setState({total: this.state.total + coinValue});
  }
  refundCoins() {
    this.setState({
      successMessage: "Here's your " + this.state.total + " cents back!",
      total: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, Vending Machine!
          </p>
        </header>
        {
          this.state.errorMessage &&
            <div className="error">{this.state.errorMessage}</div>
        }
        {
          this.state.successMessage &&
            <div className="success">{this.state.successMessage}</div>
        }
        <div className="sodaButtons">
          <SodaButton name="Coca Cola" image={coke} price={25} itemChosen={this.itemChosen}/>
          <SodaButton name="Pepsi" image={pepsi} price={35} itemChosen={this.itemChosen}/>
          <SodaButton name="Orange Crush" image={orange} price={45} itemChosen={this.itemChosen}/>
        </div>
        <CoinSlot coinInserted={this.coinInserted} refundCoins={this.refundCoins} />
        <h2 className="total">{this.state.total} ¢</h2>
      </div>
    );
  }
}

export default App;
