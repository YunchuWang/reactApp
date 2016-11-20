import React from 'react';
import ReactDOM from 'react-dom'

var DevSidebarTodolistTab = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div style={bodystyle}>
				<TodoBanner/>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

var TodoBanner = React.createClass({
	render: function(){
		return (
			<h3 style={h3style}>TODO</h3>
		);
	}
});

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul style={ulstyle}>{this.props.items.map(createItem)}</ul>;
	}
});

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li style={listyle}>{this.props.children}</li>
		);
	}
});

var TodoForm = React.createClass ({
   getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
        
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		ReactDOM.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
                    placeholder="enter task"
                    type='text' ref='item' onChange={this.onChange} value={this.state.item}
                    style={intext}/>
				<input 
                    type='button' value='Add'
                    style={button}/>
			</form>
		);
	}
})

var bodystyle = {
    padding: 50,
    backgroundColor: '#66CCFF',
    fontFamily: 'Lucida Grande, sans-serif'
}

var h3style = {
    background: "#346",
    textAlign: "center",
    color: "#fff",
    padding: 5,
    borderRadius: 2
}

var intext={
    paddingTop: 7,
    paddingRight: 5,
    fontSize: 15,
    width: 250,
    fontSize: 14
}

var button={
    backgroundColor: '#0066FF',
    border: "none",
    borderRadius: 5,
    color:"#FFF",
    fontSize: '1em',
    textAlign: "center",
    margin: 15,
    paddingTop: 8,
    paddingRight: 10,
    width: 50
   
    
}

var listyle={
    color: "#333",
    backgroundColor: "rgba(255,255,255,.5)",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5
}

var ulstyle = {
    listStyleType: 'square',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 15,
    marginLeft: 0,
    lineHeight: 1.5
}

module.exports = DevSidebarTodolistTab;