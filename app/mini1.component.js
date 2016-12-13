/**
 * Created by Joshua Baert on 12/12/2016.
 */
// Display list of friends
// Show "active" friend's info
// Be able to switch between friends

import ReactDom from 'react-dom';
import React from 'react';


var Mini = React.createClass({
	getInitialState() {
		return {
			name: 'Me',
			friends: [
				{name: 'James', email: 'james@something.com'},
				{name: 'Geoff', email: 'Geoff@some.io'},
				{name: 'Sammy', email: 'Hello@james.com'},
				{name: 'Leroy', email: 'jenkins@yep.io'},
				{name: 'Fred', email: 'whynot@whoknows.com'},
			],
			activeFriend: {
				name: 'me',
				email: 'developer@baert.io',
			},
		}
	},
	render() {
		return (
			<div>
				<button onClick={this.toggleEmails}>Show Email</button>
				<div>
					{this.state.activeFriend.name}
					<br/>
					{this.state.activeFriend.email}
					<hr/>
				</div>
				
				{this.state.friends
					.map((ele, i) => {
						return (
							<div
								key={ele.email}
								onClick={this.chooseActive.bind(null, ele)}>
								{ele.name} | {this.state.showEmail ? ele.email : null}
							</div>
						)
					})}
			</div>
		)
	},
	toggleEmails() {
		this.setState({
			showEmail: !this.state.showEmail
		})
	},
	chooseActive(friend) {
		this.setState({
			activeFriend: friend
		})
	}
});


ReactDom.render(<Mini/>, document.getElementById('app'));