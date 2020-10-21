import React from 'react';
class CoinSlot extends React.Component {
  allowedCoins = [5, 10, 25];

  constructor(props) {
    super(props);
    this.state = {
      coinInput: ""
    };

    this.insertCoin = this.insertCoin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.refundCoins = this.refundCoins.bind(this);
  }
  refundCoins(e) {
    if (window.confirm("Are you sure you want your money back instead of getting a delicious soda?  Push ok to refund")) {
      this.props.refundCoins();
    }
  }

  insertCoin(e) {
    var coinValue = parseInt(this.state.coinInput);
    if (this.allowedCoins.includes(coinValue)) {
      this.props.coinInserted(coinValue);
      this.setState({
        errorMessage: null
      });
    } else {
      this.setState({errorMessage: "No wooden nickels allowed!"})
    }

  }

  onInputChange(e) {
    this.setState({coinInput: e.target.value});
  }

  render() {
    return(
      <div className="coin-slot">
        Insert Coins: <input onChange={this.onInputChange} name="coins" />
        <button onClick={this.insertCoin}>Insert</button>
        <button onClick={this.refundCoins}>Refund</button>
        {
          this.state.errorMessage &&
            <div className="error">{this.state.errorMessage}</div>
        }
      </div>
    )
  }
}

export default CoinSlot;