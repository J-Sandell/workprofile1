import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';





class Footer extends Component {
	render() {
		return (
			<footer>
				<div className='container fixed-bottom'>
					<div className='row offset-1'>
						<div className='col'>
							<h3>links</h3>
							<ul className='list-unstyled'>
								<li>Home</li>
								<li>About</li>
								<li>Projects</li>
								<li>Contact</li>
							</ul>
						</div>
						<div className='col'>
							<h3>Social</h3>
							
							<ul className='list-unstyled'>
								
								<li>Linkden</li>
								<li>Instagram</li>
							</ul>
						</div>
						<div className='col'>
							<h3>Contact</h3>
							<ul className='list-unstyled'>
								<li>Email</li>
							</ul>
						</div>

					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;