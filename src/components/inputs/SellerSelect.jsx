import React from "react"
import {Header,Container} from "semantic-ui-react"



export class SellerSelect extends React.Component{
	render(){
		return(
			<div>
							<Header as='h2'>
			      				Seller
			      			</Header>
			      			<Container >
			      				<table className="ui table celled unstackable">
			      					<tr>
			      						<td>All</td>
			      						<td><input defaultChecked type="radio" name="vendor_select" value="all" onChange={this.props.RadioChange}  /></td>
			      					</tr>
			      					<tr>
			      						<td>Flipkart</td>
			      						<td><input type="radio" name="vendor_select" value="flipkart" onChange={this.props.RadioChange} /></td>
			      					</tr>
			      					<tr>
			      						<td>Amazon</td>
			      						<td><input type="radio" name="vendor_select" value="amazon" onChange={this.props.RadioChange} /></td>
			      					</tr>
			      					<tr>
			      						<td>TataCliq</td>
			      						<td><input type="radio" name="vendor_select" value="tatacliq" onChange={this.props.RadioChange} /></td>
			      					</tr>
			      					<tr>
			      						<td>Snapdeal</td>
			      						<td><input  type="radio" name="vendor_select" value="snapdeal" onChange={this.props.RadioChange} /></td>
			      					</tr>
			      				</table>
			      			</Container>
			</div>
		)
	}
}