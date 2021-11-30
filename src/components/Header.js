import React from 'react';
import {
	Container,
	createTheme,
	makeStyles,
	MenuItem,
	Select,
	ThemeProvider,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	title: {
		// flexGrow: 1,
		flex: 1,
		color: 'cyan',
		fontFamily: 'MontserratAlternates',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
	menuButton: {
		marginRight: theme.spacing(0.1),
	},
}));

const Header = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			type: 'dark',
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<div className={classes.root}>
				<AppBar color='transparent' position='static'>
					<Container>
						<Toolbar>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
							>
								<MenuIcon />
							</IconButton>
							<Typography
								onClick={() => navigate('/')}
								variant='h6'
								className={classes.title}
							>
								Cryptracer
							</Typography>
							<Select
								variant='outlined'
								style={{
									width: 90,
									height: 40,
									marginLeft: 15,
								}}
							>
								<MenuItem value={'USD'}>USD</MenuItem>
								<MenuItem value={'ZAR'}>ZAR</MenuItem>
							</Select>
						</Toolbar>
					</Container>
				</AppBar>
			</div>
		</ThemeProvider>
	);
};

export default Header;
