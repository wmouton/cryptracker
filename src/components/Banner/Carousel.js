import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	carousel: {
		height: '50%',
		display: 'flex',
		alignItems: 'center',
	},
	carouselItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		textTransform: 'uppercase',
		color: 'white',
	},
}));

const Carousel = () => {
	const classes = useStyles();
	return <div className={classes.carousel}>carousel</div>;
};

export default Carousel;
