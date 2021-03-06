import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term : '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);

	}

	onInputChange(event){
		this.setState({ term : event.target.value });
	}

	onSubmitForm(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render(){
		return(
			<form onSubmit={this.onSubmitForm} className='input-group'>
				<input
					placeholder='Please enter city name to see the weather in it.'
					className = 'form-control'
					value = {this.state.term}
					onChange = {this.onInputChange}
					/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
