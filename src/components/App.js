import React from 'react';
import Navbar from './Navbar';
import Strips from './Strips';
import Cover from './Cover';
import AppStyle from './styles/AppStyles';

class App extends React.Component {
	render() {
		return (
			<AppStyle>
				<Navbar />
				<Cover />
				<Strips />
			</AppStyle>
		);
	}
}

export default App;