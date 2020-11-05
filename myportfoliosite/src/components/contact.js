import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picture from './circle-cropped.png';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Mohammed Mohsin Sait</h2>
						<img 
							src={picture} 
							alt="avatar"
							style={{height: '250px'}}
						/>
					</Cell>


					<Cell col={6}>half page</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;