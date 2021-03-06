/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography} from '@material-ui/core/';
import Cart from './Cart';



const Header = () => {
	return (
		<Grid
			container
			direction='row'
			justify='space-around'
			alignItems='center'
			xs={12}
			
		>
			<Typography variant='h3' color='secondary'>
				Gil Shopping
			</Typography>
			<Link to='/' underline='hover'>
				<Button color='secondary'>Home</Button>
			</Link>
			<Link to='/contato' underline='hover'>
				<Button color='secondary'>Contato</Button>
			</Link>
			<Cart />
		</Grid>
	);
};

export default Header;
