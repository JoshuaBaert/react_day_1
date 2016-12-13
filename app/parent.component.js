/**
 * Created by Joshua Baert on 12/13/2016.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import Child from './child.component'

const Parent = React.createClass({
	getInitialState() {
		return {
			name: 'Wesley',
			sendName: 'Daniel',
		}
	},
	render() {
		return (
			<div>
				<Child
					changeName={this.changeName.bind(this)}
					sendName={this.state.sendName}/> <br/>
				<hr/>
				
				{this.state.name} <br/>
				Parent Input <input type="text" onKeyDown={this.keyDownhandler}/>
			</div>
		)
	},
	keyDownhandler(event) {
		if (event.keyCode === 13) {
			this.setState({
				sendName: event.target.value,
			})
		}
	},
	changeName(name) {
		this.setState({
			name: name,
		})
	}
});

ReactDOM.render(<Parent />, document.getElementById('app'));