import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picture from './circle-cropped.png';


class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell className="resume-left-col" col={4}>
						<div style={{textAlign: 'center'}}>
							<img 
								src={picture} 
								alt="avatar"
								style={{height: '200px'}}
							/>
						</div>

						<h2 style={{paddingTop: '2em'}}>Mohammed Mohsin Sait</h2>
						<h4 style={{color: 'grey'}}>Keen interest in Frontend Development</h4>
						<hr style={{borderTop: '3px solid #833bf2', width: '50%'}} />
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
						<hr style={{borderTop: '3px solid #833bf2', width: '50%'}} />
						<h5>Address</h5>
						<p>No. 39/17, 1st floor, 2nd cross, Krishnappa Gardden, BHEL Layout, Jayanagar east, near Mecca Masjid, Bangalore-560011.</p>
						<h5>Phone</h5>
						<p>(+91) 88801-04380</p>
						<h5>Email</h5>
						<p>mohsinsait23@gmail.com</p>
						<h5>Website</h5>
						<p>mywebsite.com</p>
						<hr style={{borderTop: '3px solid #833bf2', width: '50%'}} />
					</Cell>



					<Cell className="resume-right-col" col={8}>Right side</Cell>
				</Grid>
			</div>
		)
		
	}
}

export default Resume;