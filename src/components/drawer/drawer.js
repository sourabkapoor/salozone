import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import Button from '@material-ui/core/Button';

const Drawer = ({close}) => {
	return (
		<div>
			<h1 className='ma4'>Login</h1>
			<p className='ma4'>enter your phone number to login.</p>
			<br />
			<div className='ma3 pa3 r25'>
			<MuiPhoneNumber className='pa2' defaultCountry={'in'} regions={['america', 'europe', 'asia', 'africa']}/>
			</div>
			<div className='ma4 '>
				<Button variant="contained" style={{backgroundColor: `#48C9B0`}} 
				onClick={close}>
				  Login
				</Button>
			</div>
		</div>
	)
}

export default Drawer;