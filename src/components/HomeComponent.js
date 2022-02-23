import React, { Component } from "react";
import { CardHeader, Card, CardBody } from "reactstrap";

function Home() {
	return (
		<div>
			<Card className="">
				<CardHeader><h1>Hello My Name is Jeffrey</h1></CardHeader>
				<CardBody>I want to be a fullstack engineer</CardBody>
			</Card>
		</div>
	);
}

export default Home;