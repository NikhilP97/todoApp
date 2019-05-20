import React, { Component } from "react";
import doneLogo from './doneLogo.jpg';
import notDoneLogo from './notDoneLogo.jpg';
class Home extends Component {
	render() {
		console.log("Home props: ", this.props);
		return (
			<div className="landing-copy col s12 center-align">
				
				{this.props.authenticated ? (
					<div>
						<h3>
					      Welcome to <b>Qtodo</b>, {this.props.authenticated.displayName} 
					    </h3>
						<h4>
							<img src={doneLogo} alt="doneLogo" />
							<div className="flow-text grey-text text-darken-1">
								Go ahead and jot down your tasks so that you don't forget them! 
							</div>
							<div className="flow-text grey-text text-darken-2">
								Use the red delete button to delete all <b>checked</b> todo's 
							</div>
					    </h4>
				    </div>
					) : (
					<div>
						<h3>
					      Welcome to <b>Qtodo</b>
					    </h3>
					    <h4>
							<img src={notDoneLogo} alt="notDoneLogo" />
							<div className="flow-text grey-text text-darken-1">
								If you have an account get started by logging in right away. 
							</div>
							<div className="flow-text grey-text text-darken-2">
								If you don't, create an Account and Register yourself. 
							</div>
					    </h4>
				    </div>
				)}
			</div>
		);
  	}
};

export default Home;
