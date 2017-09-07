import React from 'react';

class FlashCardsForm extends React.Component {
	state = { name: '' } 

	handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }
	
	render() {
  return (
    <form onSubmit={this.addCard}>
      <input 
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        placeholder="Add a todo item" 
      />
    </form>
    )
  }
}



export default FlashCardsForm;