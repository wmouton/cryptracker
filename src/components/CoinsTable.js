import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import {
	Container,
	createTheme,
	MuiThemeProvider,
	TextField,
	Typography,
} from '@material-ui/core';

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CoinsTable = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');

	const { currency, symbol } = CryptoState();

	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));
		console.log(data);

		setCoins(data);
		setLoading(false);
	};

	console.log(coins);

	useEffect(() => {
		fetchCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			type: 'dark',
		},
	});

	return (
		<>
			<MuiThemeProvider theme={darkTheme}>
				<Container style={{ textAlign: 'center' }}>
					<Typography
						variant='h4'
						style={{ margin: 18, fontFamily: 'Montserrat' }}
					>
						Cryptocurrency Prices by Market Cap
					</Typography>
					<TextField
						label='Search For a Crypto Currency..'
						variant='outlined'
						style={{ marginBottom: 20, width: '100%' }}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</Container>
			</MuiThemeProvider>
		</>
	);
};

export default CoinsTable;
