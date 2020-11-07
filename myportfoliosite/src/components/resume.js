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
					</Cell>



					<Cell className="resume-right-col" col={8}>Right side</Cell>
				</Grid>
			</div>
		)
		
	}
}

export default Resume;