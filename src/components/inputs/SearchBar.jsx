import React from "react"
import {Search,Button} from "semantic-ui-react"
import axios from "axios";

export  class SearchBar extends React.Component{
	state = {
		data: {
			"search_keyword": ""
		},
		"autosearch_results":[],
		"loading":false
	}
	handleResultSelect = (e, { result }) =>{
		this.setState({
	      data: { ...this.state.data, "search_keyword": result.title }
	    });
	   } 
	getAutoSuggestion = (e) => {
		const value = e.target.value
		this.setState({
	      data: { ...this.state.data, "search_keyword": value },
	    });
		if(value==null || value.length < 2){
			return false
		}
		this.setState({
			autosearch_results:[],
	     	loading:true
		})
		// const url = "https://django-ml-backend.herokuapp.com/api/timetracker/autosuggestion"
		const url = "https://django-ml-backend.herokuapp.com/api/product_scrapper/s/autosuggestion?query="+this.state.data.search_keyword
		axios({
			url:url
		}).then((res)=>{
			this.setState({
				"autosearch_results":res.data.results,
				"loading":false
			})
		})
	}
	searchClick = (e) => {
		const value = this.state.data.search_keyword
		if(value==null || value.length < 3){
			return false
		}
		this.props.fetch_keywords(value)
	}
	
	render(){
		const data = this.state
		return(
			<div>
			 	<Search  size='huge'  name="search_keyword"
				            onResultSelect={this.handleResultSelect}
				           	onSearchChange={this.getAutoSuggestion}
				            results={this.state.autosearch_results}
				            value={data.search_keyword}
				            loading={this.state.loading}
				            {...this.props}
				          />
				<Button onClick={this.searchClick} color="green">Search</Button>
			</div>
		)
	}
}