import React from "react"
import {Card,Grid,Image,Header} from "semantic-ui-react"
export const Product = (props) => {
	var width;
	if(props.view_type === 1){
		width=2
	}else{
		width=10
	}
	
	return(
								<Card fluid stackable>
									<Card.Content>
												<Grid stackable columns={2}>
							      			<Grid.Row>
							      				<Grid.Column width={width}>
							      					<Image  small src={props.item.image}/>
							      				</Grid.Column>
							      				<Grid.Column width={12}>
							      					<Header as="h3">{props.item.title}</Header>
							      					<Header>₹{props.item.price} <a  rel="noopener noreferrer" target="_blank"href={props.item.url}>{props.item.vender_type}</a></Header>
							      					<p>Selling Price: {props.item.mrp}</p>
							      					<p>Discount: {props.item.discount}</p>
							      					<p>Rating: {props.item.rating}/5</p>
							      					<p>Rating Count: {props.item.rating_count}</p>
							      				</Grid.Column>
							      			</Grid.Row>
							      		</Grid>
						      		</Card.Content>
						      	</Card>
	)
}