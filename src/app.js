import React from 'react';
import ContactsList from './ContactsList';
import Contact from './Contact';

let contacts = [{
	id: 1,
	name: "Seth",
	phone: "555 333 5555"
}, {
	id: 2,
	name: "Robert",
	phone: "213 444, 4445"
}, {
	id: 3,
	name: "Jimmy",
	phone: "215 574, 4845"
}];

class App extends React.Component {
	render() {
	//	console.log(this.props.contacts);
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

React.render(<App contacts={contacts}/>, document.getElementById('app'));