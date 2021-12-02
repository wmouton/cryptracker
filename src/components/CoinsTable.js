import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import {
	Container,
	createTheme,
	LinearProgress,
	makeStyles,
	MuiThemeProvider,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CoinsTable = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');

	const navigate = useNavigate();

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

	const handleSearch = () => {
		return coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(search) ||
				coin.symbol.toLowerCase().includes(search)
		);
	};

	const useStyles = makeStyles({
		row: {
			backgroundColor: '#16171a',
			cursor: 'pointer',
			'&:hover': {
				backgroundColor: '#131111',
			},
		},
	});
	const classes = useStyles();

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

					<TableContainer component={Paper}>
						{loading ? (
							<LinearProgress style={{ backgroundColor: 'steelblue' }} />
						) : (
							<Table aria-label='simple table'>
								<TableHead style={{ backgroundColor: '#1dbdee' }}>
									<TableRow>
										{['Coin', 'Price', '24h Change', 'Market Cap'].map(
											(head) => (
												<TableCell
													style={{
														color: 'black',
														fontWeight: '700',
														fontFamily: 'Montserrat',
													}}
													key={head}
													align={head === 'Coin' ? '' : 'right'}
												>
													{head}
												</TableCell>
											)
										)}
									</TableRow>
								</TableHead>
								<TableBody>
									{handleSearch().map((row) => {
										const profit = row.price_change_percentage_24h > 0;
										return (
											<TableRow
												onClick={() => navigate(`/coins/${row.id}`)}
												className={classes.row}
												key={row.name}
											>
												<TableCell
													component='th'
													scope='row'
													style={{
														display: 'flex',
														gap: 15,
													}}
												>
													<img
														src={row?.image}
														alt={row.name}
														height='50'
														style={{ marginBottom: 10 }}
													/>
													<div
														style={{ display: 'flex', flexDirection: 'column' }}
													>
														<span
															style={{
																textTransform: 'uppercase',
																fontSize: 22,
															}}
														>
															{row.symbol}
														</span>
														<span style={{ color: 'darkgrey' }}>
															{row.name}
														</span>
													</div>
												</TableCell>
												<TableCell align='right'>
													{symbol}{' '}
													{numberWithCommas(row.current_price.toFixed(2))}
												</TableCell>
												<TableCell
													align='right'
													style={{
														color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
														fontWeight: 500,
													}}
												>
													{profit && '+'}
													{row.price_change_percentage_24h.toFixed(2)}%
												</TableCell>
												<TableCell align='right'>
													{symbol} {numberWithCommas(row.market_cap.toString())}
													{/* {symbol}{' '}
													{numberWithCommas(
														row.market_cap.toString().slice(0, 6)
													)} */}
													{/* M */}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						)}
					</TableContainer>
				</Container>
			</MuiThemeProvider>
		</>
	);
};

export default CoinsTable;
