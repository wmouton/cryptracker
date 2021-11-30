import React from 'react';
import { Container, makeStyles, MenuItem, Select } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
		text: 1,
		color: 'cyan',
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
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
						<Typography variant='h6' className={classes.title}>
							Cryptracer
						</Typography>
						<Select
							variant='outlined'
							style={{ width: 100, height: 40, marginLeft: 15 }}
						>
							<MenuItem value={'USD'}>USD</MenuItem>
							<MenuItem value={'ZAR'}>ZAR</MenuItem>
						</Select>
						<Button color='inherit'>Login</Button>
						<Button color='inherit'>Signup</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Header;
