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
							<p>HTML/CSS | Bootstrap | JavaScript | React JS | NodeJS | MongoDB</p>
							<div className="social-links">
								{/* Linkedin */}
								<a href="https://linkedin.com/in/mohammed-mohsin-sait-935a8b184" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true"></i>
								</a>

								{/* Github */}
								<a href="https://github.com/omgitsfaraaz" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true"></i>
								</a>

								{/* Instagram */}
								<a href="https://www.instagram.com/omgitsfaraaz/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-instagram" aria-hidden="true"></i>
								</a>

								{/* Skype */}
								<a href="https://join.skype.com/invite/lvDM95cw8VmS" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-skype" aria-hidden="true"></i>
								</a>
							</div>
						</div>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;