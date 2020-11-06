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
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Good at Django, Python, Java. Love to create real life projects. I'm basically concentrating more on Django and React JS projects.</p>
					</Cell>


					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="personal-no">
							<i className="fa fa-phone-square" aria-hidden="true" /><p>+91 88801 04380</p>
						</div>

						<div className="personal-email">
							<i className="fa fa-envelope-square" aria-hidden="true" /><p>mohsinsait23@gmail.com</p>
						</div>

						<div className="skype-id">
							<i className="fa fa-skype" aria-hidden="true" /><p>mohsin6738</p>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;