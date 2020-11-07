import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import picture from './circle-cropped.png';
import Education from './education';
import Skills from './skills'

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
						<p>I am Mohit Sangwan,a 18 year old web and app developer based in NEW DELHI who loves to code and design websites.I love working with different teams to understand the different points of view and improve my team work skill.I'm absolutely passionate about coding. I love to identify, to challenge and to solve problems by setting up cutting-edge and personalized solutions.More broadly, i'm very interested in learning new technonogies and human behaviour, i try to learn about these topics as much as i can !. I'm Good at Django, Python, Java. Love to create real life projects. I'm basically concentrating more on Django and React JS projects.</p>
						<hr style={{borderTop: '3px solid #833bf2', width: '50%'}} />
						<h5>Address</h5>
						<p>No. 39/17, 1st floor, 2nd cross, Krishnappa Garden, BHEL Layout, Jayanagar east, near Mecca Masjid, Bangalore-560011.</p>
						<h5>Phone</h5>
						<p>(+91) 88801-04380</p>
						<h5>Email</h5>
						<p>mohsinsait23@gmail.com</p>
						<h5>Website</h5>
						<p>mywebsite.com</p>
						<hr style={{borderTop: '3px solid #833bf2', width: '50%'}} />
					</Cell>



					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2016}
							endYear={2020}
							collegeName="Vemana Institute of Technology"
							collegeDes="Vemana Institute of Technology is an Engineering college in Koramangala, Bangalore. It was established in the year 1999. It is affiliated to Visvesvaraya Technological University." 
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2>Skills</h2>
						<Skills
							skill="Python"
							progress={80} 
						/>
						<Skills
							skill="HTML/CSS"
							progress={75} 
						/>
						<Skills
							skill="JavaScript"
							progress={50} 
						/>
						<Skills
							skill="JQuery"
							progress={40} 
						/>
						<Skills
							skill="React JS"
							progress={50} 
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2>Interests</h2>
						<List>
  							<ListItem style={{color: 'white'}}>Fellow, Full Stack Maker Track @Bridge Student Accelerator Program.</ListItem>
  							<ListItem style={{color: 'white'}}>Keen interest in completing The 90day challenge @Speckbit containing Python based algorithms.</ListItem>
  							<ListItem style={{color: 'white'}}>Holding a rank of 51,750 at HackerRank in Python based problems.</ListItem>
  							<ListItem style={{color: 'white'}}>Able to solve Rubik's Cube in a span of 2 minutes and 14 seconds.</ListItem>
						</List>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2>Key Skills</h2>
						<List>
  							<ListItem style={{color: 'white'}}>-Web Application Development.</ListItem>
  							<ListItem style={{color: 'white'}}>-Frontend Development.</ListItem>
  							<ListItem style={{color: 'white'}}>-Quick Prototyping MVPs.</ListItem>
  							<ListItem style={{color: 'white'}}>-Scripting.</ListItem>
  							<ListItem style={{color: 'white'}}>-Object oriented Programming.</ListItem>
						</List>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2>Achievements</h2>
						<List>
  							<ListItem style={{color: 'white'}}>Winner at Treasure Hunt  @ Vemana Institute of Technology '17.</ListItem>
  							<ListItem style={{color: 'white'}}>Secured 60 marks for Completion of Python Training offered by Spoken Tutorial Project, IIT Bombay.</ListItem>
						</List>
					</Cell>
				</Grid>
			</div>
		)
		
	}
}

export default Resume;