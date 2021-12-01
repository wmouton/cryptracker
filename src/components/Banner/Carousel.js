import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { TrendingCoins } from '../../config/api';
import axios from 'axios';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles((theme) => ({
	carousel: {
		height: '50%',
		display: 'flex',
		alignItems: 'center',
	},
}));

const Carousel = () => {
	const classes = useStyles();

	const [trending, setTrending] = useState([]);
	const { currency } = CryptoState();

	const fetchTrendingCoins = async () => {
		const { data } = await axios.get(TrendingCoins(currency));

		console.log(data);
		setTrending(data);
	};

	console.log(trending);

	useEffect(() => {
		fetchTrendingCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	return <div className={classes.carousel}>carousel</div>;
};

export default Carousel;
