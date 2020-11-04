import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props)
		this.state = { activeTab: 0 }
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: 'black', height: '176px', background: 'url(https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/Instagram400x230.png) center / cover'}}>Instagram-clone</CardTitle>
					<CardText>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			)
		} else if(this.state.activeTab === 1) {
			return(
				<div><h1>This is Django</h1></div>
			)
		}
	}


	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React JS</Tab>
					<Tab>Django</Tab>
				</Tabs>

				<section className="project-grid">
					<Grid className="project-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		)
	}
}

export default Project;