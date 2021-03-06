/**
 * @file SearchBar.js
 * @description MUI textField component used as the search bar to display a pokemon when submitted.
 */

import * as React from 'react';
import { Button, TextField, Box } from '@mui/material';

export default function SearchBar(props) {
	return (

		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
				// py: 3,
				// px: 100,
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				onChange={props.handleSearch}
				// This prevents the user from hitting enter and submitting it, since it's technically a form
				onKeyPress={(e) => {
					e.key === 'Enter' && e.preventDefault();
				}}
			/>
			<Button
				onClick={props.displayFavorites}
				variant="contained"
				sx={{
					minWidth: '28ch',
					bgcolor: '#591ba4',
					'&.MuiButtonBase-root:hover': { bgcolor: '#945bc4' },
				}}
			>
				Favorites
			</Button>
		</Box>
	);
}
