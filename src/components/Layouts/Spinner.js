import React from 'react'
import spinner from './spinner.gif';

function Spinner() {
    return (
		<img src={spinner} alt="spinner..." style={spinnerStyle}/>
	)
}

export default Spinner


const spinnerStyle = {
	paddingTop: '10px',
	paddingBottom: '100px',
	width: '200px',
	margin: 'auto',
	display: 'block'
}
