import ReactDOM from 'react-dom';
import React from 'react';

var App = React.createClass({
	getInitialState() {
		return {
			name: 'Joshua',
			email: 'developer@baert.io',
			friends: [
				{name: 'Brian'},
				{name: 'Sterling'},
				{name: 'Gustav'},
				{name: 'Josh'},
				{name: 'Elisha'},
			
			],
		}
	},
	render() {
		return (
			<div>
				{this.state.name}<br/>
				{this.state.email}<br/>
				<button onClick={this.clickHandler}>
					Update State
				</button>
				<input onChange={this.inputHandler}/>
				{this.state.friends
					.filter(ele => {
						return ele.name !== 'Brian'
					})
					.map((ele, i) => {
						return (
							<div
								onClick={this.friendNamer.bind(this, ele.name)}
								key={ele.name}>
								{ele.name}
							</div>
						)
					})}
			</div>
		)
	},
	inputHandler(event) {
		this.setState({
			name: event.target.value,
		})
	},
	clickHandler() {
		this.setState({
			name: 'greg',
		})
	},
	friendNamer(name) {
		this.setState({
			name: name
		})
	},
});



ReactDOM.render(<App />, document.getElementById("app"));
