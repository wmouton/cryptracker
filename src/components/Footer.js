import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
	return (
		<>
			<footer>
				<Container style={{ textAlign: 'center', paddingTop: '100px' }}>
					<Typography
						variant='h6'
						style={{ margin: 18, fontFamily: 'Montserrat' }}
					>
						© 2021, Cryptracer, Inc
					</Typography>
					<Typography
						variant='h6'
						style={{ margin: 18, fontFamily: 'Marienda', fontSize: '15px' }}
					>
						wmouton.go@gmail.com
					</Typography>
					<Typography
						variant='h6'
						style={{ margin: 18, fontFamily: 'Montserrat' }}
					>
						Designed & Developed by WMouton
					</Typography>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
