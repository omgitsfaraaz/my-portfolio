import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props)
		this.state = { activeTab: 0 }
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<div><h1>This is React JS</h1></div>
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
					{this.toggleCategories()}
				</section>
			</div>
		)
	}
}

export default Project;