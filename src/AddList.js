import React, { Component } from 'react';

class AddList extends Component {
  // why do I need a state here??? I don't understand
  state = {
    listName: ''
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      // Implement the rest of this function here!
      this.setState({ listName: e.target[0].value });
      this.props.addList(e.target[0].value);
      e.target.reset();
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id='addList'>
            <label>What will be on your next list?&nbsp;
              <input type='text' ref='id' id='newID'
              ></input>
            </label>
          </div><br />
        <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
