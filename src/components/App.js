import React from 'react';
import Navbar from './Navbar';
import Strips from './Strips';
import Cover from './Cover';
import AppStyle from './styles/AppStyles';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<AppStyle>
				<Navbar />
				<Cover />
				<Strips />
				<Footer />
			</AppStyle>
		);
	}
}

export default App;