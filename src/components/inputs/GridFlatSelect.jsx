import React from "react"
import {Image,Select} from "semantic-ui-react"
export class GridFlatSelect extends React.Component{
	state = {
		'grid_src': "../grid_false.png",
		'flat_src': "../flat_true.png",
	}

	grid_click = (data) => {
		if(this.state.grid_src === "../grid_false.png"){
			this.setState({
				'grid_src':"../grid_true.png",
				'flat_src':"../flat_false.png",
			})
			this.props.updateViewType(3)
		}
		else{
			this.setState({
				'grid_src':"../grid_false.png",
				'flat_src':"../flat_true.png",
			})
			this.props.updateViewType(1)
		}
	}
	flat_click = (data) => {
		if(this.state.flat_src === "../flat_true.png"){
			this.setState({
				'flat_src':"../flat_false.png",
				'grid_src':"../grid_true.png",
			})
			this.props.updateViewType(3)


		}
		else{
			this.setState({
				'flat_src':"../flat_true.png",
				'grid_src':"../grid_false.png",
			})
			this.props.updateViewType(1)
		}
	}

	ChangeSelect = (e,data) => {
		this.props.updateSelect(data.value)
	}

	render(){
		return(
			<span>
							<Select onChange={this.ChangeSelect}  selection defaultValue='relevance' options={
				      			[
				      				{'key':'relevance','value':'relevance','text':'Relevance','selected':true},
				      				{'key':'h-l','value':'h-l','text':'Price: High to Low'},
				      				{'key':'l-h','value':'l-h','text':'Price: Low to High'},
				      				{'key':'rating','value':'rating','text':'Rating Score'},
				      			]
				      		}></Select>
							<Image size='mini'  onClick={()=>this.grid_click()} floated='right' src={this.state.grid_src}/>
				      		<Image size='mini' onClick={()=>this.flat_click()} floated='right' src={this.state.flat_src}/>
			</span>
		)
	}
}