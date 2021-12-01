import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
		<BrowserRouter>
			<div className={classes.App}>
				<Header />
				<Routes>
					<Route path='/' component={Homepage} exact />
					<Route path='/coins/:id' component={Coinpage} exact />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
