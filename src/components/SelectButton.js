import { makeStyles } from '@material-ui/core';
import React from 'react';

const SelectButton = ({ children, selected, onClick }) => {
	const useStyles = makeStyles({});

	const classes = useStyles();

	return (
		<span onClick={onClick} className={classes.selectbutton}>
			{children}
		</span>
	);
};

export default SelectButton;
