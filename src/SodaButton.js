import React from 'react';

class SodaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false
    }

    this.chooseMe = this.chooseMe.bind(this);
  }

  chooseMe() {
    if (window.confirm("You chose " + this.props.name + ", Are you sure? Click OK to vend!")) {
      this.props.itemChosen(this);
    } else {
      return;
    }
  }

  render() {
    return(
      <div className={`sodaButton ${this.state.chosen ? "chosen" : ""} `}>
        <h3>{this.props.name}</h3>
        <img src={this.props.image} />
        <div className="price">{this.props.price} ¢</div>
        <button onClick={this.chooseMe}>Choose Item</button>
      </div>
    )
  }
}

export default SodaButton;