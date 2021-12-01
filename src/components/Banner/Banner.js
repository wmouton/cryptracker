import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	banner: {
		backgroundImage: 'url(./banner2.jpg)',
		backgroundSize: 'cover',
	},
	bannerContent: {
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 25,
		justifyContent: 'space-around',
	},
}));

const Banner = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.banner}>
				<Container className={classes.bannerContent}></Container>
			</div>
		</>
	);
};

export default Banner;
