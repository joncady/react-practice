import React, { Component } from 'react'; //import React Component
import './style.css'
import { groupBy, find } from 'lodash' 

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = { pets: props.pets };
	}
	
	render() {
		return (
			<div>

			</div>
		);
	}

}


export default App;