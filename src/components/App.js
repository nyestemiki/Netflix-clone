import React from 'react';
import Navbar from './Navbar';
import Strips from './Strips';

class App extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				{/* cover movie */}
				<Strips />
			</>
		);
	}
}

export default App;