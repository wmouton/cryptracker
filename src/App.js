import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';

function App() {
	const useStyles = makeStyles({
		App: {
			backgroundColor: '#14161a',
			color: 'white',
			minHeight: '100vh',
		},
	});

	const classes = useStyles();

	return (
		<React.Fragment>
			<Router>
				<div className={classes.App}>
					<Header />
					<Routes>
						<Route exact path='/' element={<Homepage />} />
						<Route exact path='/coins/:id' element={<Coinpage />} />
					</Routes>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
