/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography} from '@material-ui/core/';
import Cart from './Cart';



const Footer = () => {
	return (
		<Grid
			container
			direction='row'
			justify='center'
			alignItems='center'
			xs={12}
		>
			<Typography mt='2' variant='p' color='primary'>
				Desenvolvido por:
			</Typography>
			<Link to='/' underline='hover'>
				<Button color='primary'>Gilberto A Leite</Button>
			</Link>
		</Grid>
	);
};

export default Footer;
