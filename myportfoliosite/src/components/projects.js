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
							This is an Instagram-clone built with react js and firebase.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/omgitsfaraaz/insta-clone" target="_blank">Github</Button>
							<Button colored href="https://instagram-clone-react-6d594.web.app/" target="_blank">Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/e1/0d/0a/e10d0aae2a11670b5d9cdb4db677b28d.jpg) center / cover'}}>Todo App</CardTitle>
						<CardText>
							This is a Todo App made from django. Used Heroku to host it online.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/omgitsfaraaz/codedaddies_list" target="_blank">Github</Button>
							<Button colored href="https://todo-app-mohsin.herokuapp.com/" target="_blank">Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.indianexpress.com/2020/03/Coronavirus-759-4.jpg) center / cover'}}>Covid-19 tracker</CardTitle>
						<CardText>
							This is covid-19 tracker which shows number of cases, recovered cases and deaths worldwide live.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/omgitsfaraaz/covid-19-tracker" target="_blank">Github</Button>
							<Button colored href="https://covid-19-tracker-a9bd0.web.app/" target="_blank">Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.corp-site.envato.com/cdn-cgi/image/width=1200,quality=95,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png) center / cover'}}>Personal Portfolio</CardTitle>
						<CardText>
							This is my personal portfolio made using React Js. Used Google firebase to host it. 
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/omgitsfaraaz/my-portfolio" target="_blank">Github</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			)
		} else if(this.state.activeTab === 1) {
			return(
				<div className="django-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://avivdigital.in/wp-content/uploads/2018/07/parts-of-a-classified-ad.png) center / cover'}}>SearchKaro!</CardTitle>
						<CardText>
							SearchKaro! is an alternative to Craiglist which is an American classified advertisement website with sections devoted to jobs, housing, for sale, items wanted, services, community service, gigs, resumes and discussion forums.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/omgitsfaraaz/codedaddies_list" target="_blank">Github</Button>
							<Button colored href="https://searchkaro.herokuapp.com/" target="_blank">Live Demo</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
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