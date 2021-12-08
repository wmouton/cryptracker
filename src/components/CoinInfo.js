import { makeStyles, MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinInfo = ({ coin }) => {
	const [historicData, setHistoricData] = useState();
	const [days, setDays] = useState(1);
	const { currency } = CryptoState();

	const useStyles = makeStyles((theme) => ({}));

	const classes = useStyles();

	const fetchHistoricData = async () => {
		const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

		setHistoricData(data.prices);
	};

	useEffect(() => {
		fetchHistoricData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [days]);

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			type: 'dark',
		},
	});

	return (
		<MuiThemeProvider theme={darkTheme}>
			<div className={classes.container}></div>
		</MuiThemeProvider>
	);
};

export default CoinInfo;
