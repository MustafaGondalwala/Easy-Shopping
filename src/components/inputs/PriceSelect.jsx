import React from "react"

import {Header,Container,Radio} from "semantic-ui-react"

export class PriceSelect extends React.Component{
	render(){
		return(
				<div>
							<Header as='h2'>
			      				Price
			      			</Header>
			      			<Container>
			      				<table className="ui table celled unstackable">
			      					<tr>
			      						<td>250 - 300</td>
			      						<td><Radio></Radio></td>
			      					</tr>
			      					<tr>
			      						<td>300 - 500</td>
			      						<td><Radio></Radio></td>
			      					</tr>
			      					<tr>
			      						<td>500 - 1090</td>
			      						<td><Radio></Radio></td>
			      					</tr>
			      					<tr>
			      						<td>Go up 1000</td>
			      						<td><Radio></Radio></td>
			      					</tr>
			      				</table>
			      			</Container>
				</div>
		)
	}
}