import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
	return (
		<footer>
			<Container
				style={{
					textAlign: 'center',
					paddingTop: '100px',
				}}
			>
				<Typography
					variant='h6'
					style={{ margin: 18, fontFamily: 'Montserrat' }}
				>
					© 2021, Cryptracker
				</Typography>
				<Typography
					variant='h6'
					style={{ margin: 18, fontFamily: 'Marienda', fontSize: '15px' }}
				>
					<a href='mailto:wmouton.go@gmail.com'>wmouton.go@gmail.com</a>
				</Typography>
				<Typography
					variant='h6'
					style={{
						paddingTop: 18,
						paddingBottom: 20,
						fontFamily: 'Montserrat',
					}}
				>
					Designed & Developed by{' '}
					<a href='https://wmouton.netlify.app'>WMouton</a>
				</Typography>
			</Container>
		</footer>
	);
};

export default Footer;
