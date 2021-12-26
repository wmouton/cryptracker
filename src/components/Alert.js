import { Snackbar } from '@material-ui/core';
import React from 'react'
import { CryptoState } from '../CryptoContext';

const Alert = () => {
    const { alert, setAlert } = CryptoState();

    return (
        <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    ></Snackbar>
    )
}

export default Alert
