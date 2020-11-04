import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picture from './circle-cropped.png';

class Landing extends Component {
	render() {
		return(
			<div style={{width:'100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
							src={picture} 
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Keen Interest in Frontend Developement</h1>
							<hr/>
						</div>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;