import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import logo from '../../img/logo/logo.png';
import Carousel from './Carousel';

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
						<div className={classes.tagline}>
							<a href='/'>
								<img
									style={{ width: '250px', paddingTop: '10' }}
									src={logo}
									alt=''
								/>
							</a>
						</div>
						<Typography
							variant='subtitle2'
							style={{
								color: 'darkgrey',
								textTransform: 'capitalize',
								fontFamily: 'Montserrat',
							}}
						>
							All the information regarding your favorite Crypto Currencies at
							your fingertips.
						</Typography>
					</div>
					<Carousel />
				</Container>
			</div>
		</>
	);
};

export default Banner;
