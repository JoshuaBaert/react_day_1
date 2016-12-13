/**
 * Created by Joshua Baert on 12/13/2016.
 */

import React from 'react';

export default React.createClass({
	render() {
		return (
			<div>
				Child Input <input type="text" onKeyDown={this.keyDownhandler}/>
				<br/>
				{this.props.sendName}
			</div>
		)
	},
	keyDownhandler(event) {
		if(event.keyCode === 13) {
			this.props.changeName(event.target.value);
		}
	},
})