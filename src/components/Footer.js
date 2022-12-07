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
					style={{ margin: 18, fontFamily: 'Marienda', fontSize: '15px' }}
				>
					<a href='mailto:wmouton.dev@gmail.com'>wmouton.dev@gmail.com</a>
				</Typography>
				<Typography
					variant='h6'
					style={{
						paddingTop: 18,
						paddingBottom: 20,
						fontFamily: 'Montserrat',
					}}
				>
					Developed by{' '}
					<a href='https://github.com/l33th'>WMouton</a><br/>
					Copyright © 2022, Cryptracker	
				</Typography>
			</Container>
		</footer>
	);
};

export default Footer;
