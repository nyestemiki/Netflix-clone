import React from 'react';
import Navbar from './Navbar';
import Strips from './Strips';
import Cover from './Cover';

class App extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<Cover />
				<Strips />
			</>
		);
	}
}

export default App;