import React from 'react';
import Tilt from 'react-tilt'
import brain from '../Logo/brain.png';
import './Logo.css'

const Logo = () => {
	return(
		<nav className = 'm4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 			<div className="Tilt-inner"><img style={{paddingTop: '5px'}} alt='Logo' src={brain}/></div>
			</Tilt>
		</nav>
		)
}

export default Logo;