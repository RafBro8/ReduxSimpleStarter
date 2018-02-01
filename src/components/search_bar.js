import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        //constructor is used to initialize class, methods, variables, state
        //also used when new Class instance is created or rendered

        super(props);
        //super means calling parent method(like calling Component class)

        this.state = { term: ''};
        //state creates object with properties in it when initialized
        //functional components do not have state, only Class components have state

         this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
            <input value={this.state.term}
                   //adding above line makes input be a controlled component
                //controlled component has it's value set by state
                //so the value changes when state changes
                onChange={this.onInputChange} />
               {/*Value of the input: {this.state.term}*/}
            </div>
            //ES Arrow function syntax----
            // return (<input onChange={e => console.log(e.target.value)} />;
            //this ES6 Arrow syntax helps get rid of onInputChange(e) line of code below
        );
    }

    onInputChange(e) {
         this.setState({ term: e.target.value});
         // console.log(e.target.value);
        //this will console out whatever you put into input box on the page

    }
}

export default SearchBar;


//onChange is Event, //onImputChange is Event handler

//e.target.value will equal to what is typed inside input box on page