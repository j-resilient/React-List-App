import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
    }

    handleClick() {
	     // Implement this function!
       const tmpColor = (this.state.color === 'black') ? 'gray' : 'black';
       this.setState({ color: tmpColor });
    }

  render() {
    // there is no this.props.item.name???
    // var item = this.props.item;
    // var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{this.props.item}</strong>
      </span>
    );

  }

}
export default ListItem;
