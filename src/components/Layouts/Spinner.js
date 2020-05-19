import React from 'react'

function Spinner() {
    return (
		<img src='/assets/img/spinner.gif' alt="spinner..." style={spinnerStyle}/>
	)
}

export default Spinner

const spinnerStyle = {
	paddingTop: '100px',
	paddingBottom: '100px',
	width: '100px',
	margin: 'auto',
	display: 'block'
}
