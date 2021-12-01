import React from 'react';

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CoinsTable = () => {
	return <div>CoinsTable</div>;
};

export default CoinsTable;
