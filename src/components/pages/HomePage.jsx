import React from "react"
import {Grid,Segment} from "semantic-ui-react"
import {SearchBar} from "../inputs/SearchBar"
import {Product} from "../inputs/Product"
import {SellerSelect} from "../inputs/SellerSelect"
import {GridFlatSelect} from "../inputs/GridFlatSelect"
import axios from "axios"

export default class HomePage extends React.Component{
	state = {
		"search_value":"",
		"load_new_products_loading":false,
		"products":[],
		"select_vendor": "all",
		"view_type":1,
		"filter_select":"relevance"
	}
	
	
	updateViewType = (view_type) => {
		this.setState({
			view_type:view_type
		})
	}
	updateSelect = (filter) => {
		this.setState({
			"filter_select":filter
		})
		this.sleep(10).then(() => {
			this.fetch_keywords(this.state.search_value)
		})
	}

	fetch_keywords = (value) => {
		this.setState({
			products: [],
			search_value:value
		})
		var url = ""
		var list = []
		if(this.state.select_vendor === "all")
			 list = ["all"]
		else
			 list = [this.state.select_vendor]
		
		list.map((item)=>{
			value = (value.replace(" ","%20"))
			 url = "https://django-ml-backend.herokuapp.com/api/product_scrapper/scrape/"+item+"?keyword="+value+"&filter="+this.state.filter_select;
			axios({
				url:url
			}).then(res => {
				var products = this.state.products;
				res.data.results.map(eachItem => {
					eachItem['vendor'] = item
					products.push(eachItem)
					return false
				})
				this.setState({
					products:products
				})
			})
			return false
		})
	}	

	
	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	};

	RadioChange = (e) => {
		this.setState({
			"select_vendor": e.target.value
		})
		this.sleep(10).then(() => {
			this.fetch_keywords(this.state.search_value)
		})
	}
	render(){
		return(
			<div>
			<h1>Easy Shopping</h1>
			<SearchBar fetch_keywords = {this.fetch_keywords} />
			<Grid  padded stackable>
			    <Grid.Row>
			      <Grid.Column width={3}>
			    
			      	<Segment>
			      			<SellerSelect RadioChange={this.RadioChange} />
			      	</Segment>
			      </Grid.Column>
			      <Grid.Column  width={13}>
			      	<Grid width={13}>
			      		<Grid.Row>
				      		<Grid.Column textAlign={'right'}>
				      		
				      		<GridFlatSelect updateSelect = {this.updateSelect} updateViewType={this.updateViewType} view_type={this.state.view_type} />
				      		</Grid.Column>
			      		</Grid.Row>
			      	</Grid>
			      	<Grid.Column>
			      	<Grid stretched stackable columns={this.state.view_type}>
			      		{ this.state.products &&
			      			this.state.products.map((item,i) => {
			      				return (
			      					<Grid.Column>
			      						<Product key={i}  view_type={this.state.view_type} item={item}/>
			      					</Grid.Column>
			      				)
			      			})
				      	}
				    </Grid>
			      	</Grid.Column>
			      </Grid.Column>
			    </Grid.Row>

			    
			  </Grid>
			</div>
		)
	}
}