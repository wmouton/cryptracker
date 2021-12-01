import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import logo from '../../img/logo/logo.png';

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
	tagline: {
		display: 'flex',
		height: '40%',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
}));

const Banner = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.banner}>
				<Container className={classes.bannerContent}>
					<div className={classes.tagline}>
						<a href='/'>
							<img
								style={{ width: '500px', paddingTop: '10' }}
								src={logo}
								alt=''
							/>
						</a>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Banner;
