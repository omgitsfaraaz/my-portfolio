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
				<div className="project-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.etimg.com/thumb/msid-78516741,width-1200,height-900/magazines/panache/instagram-turns-10-launches-new-well-being-features.jpg) center / cover'}}>Instagram-clone</CardTitle>
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

					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.etimg.com/thumb/msid-78516741,width-1200,height-900/magazines/panache/instagram-turns-10-launches-new-well-being-features.jpg) center / cover'}}>Instagram-clone</CardTitle>
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

					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.etimg.com/thumb/msid-78516741,width-1200,height-900/magazines/panache/instagram-turns-10-launches-new-well-being-features.jpg) center / cover'}}>Instagram-clone</CardTitle>
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
				</div>
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

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Project;