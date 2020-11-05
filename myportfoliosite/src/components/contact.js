import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
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

						<List>
						  <ListItem>
						    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
						    	<i className="fa fa-phone-square"></i>+91 88801 04380
						    </ListItemContent>
						  </ListItem>
						  <ListItem>
						    <ListItemContent icon="person">Aaron Paul</ListItemContent>
						  </ListItem>
						  <ListItem>
						    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
						  </ListItem>
						</List>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;