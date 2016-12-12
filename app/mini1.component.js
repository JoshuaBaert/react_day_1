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
		}
	},
	render() {
		return (
			<div>
				{this.state.friends
					.map((ele, i) => {
						return (
							<div key={ele.name}>
								{ele.name} <span> {ele.email} </span>
							</div>
						)
					})}
			</div>
		)
	},
});


ReactDom.render(<Mini/>, document.getElementById('app'));