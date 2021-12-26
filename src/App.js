import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {
	const useStyles = makeStyles({
		App: {
			backgroundColor: '#14161a',
			color: 'white',
			minHeight: '100vh',
		},
	});
	console.log(process.env)

	const classes = useStyles();

	return (
		<React.Fragment>
			<Router>
				<div className={classes.App}>
					<Header />
					<Routes>
						<Route exact path='/' element={<HomePage />} />
						<Route exact path='/coins/:id' element={<CoinPage />} />
					</Routes>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
