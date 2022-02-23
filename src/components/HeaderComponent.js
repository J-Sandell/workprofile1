import React, { Component } from "react";
import { Nav, NavLink, NavItem, Navbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutComponent';
import './HomeComponent';


class Header extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center shadow">
				<Navbar>
					<Nav>
						<NavItem>
							<NavLink href="./HomeComponent">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="./AboutComponent.js">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Contact</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				</div>
		)
	}

}

export default Header;