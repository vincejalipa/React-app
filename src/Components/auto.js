import React, { Component } from 'react';
import LangList from '../json/Languages.json';


class AutoText extends Component {
    constructor(props) {
        super(props);
        this.items = LangList.map ((langDetail, index)=>{return (langDetail.label)})
        this.state = {
            suggestions: [],
            text : '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0)
        {
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions, text: value}));
    }


    suggestionSelected(value) {
        this.setState (() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if (suggestions.length === 0)
        {
            return null;
        }
        return(
                <ul>
                    {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
                </ul>
        )
    }
    render() { 
        const { text } = this.state;
        return ( 
            <div className="AutoCompleteText">
                <input placeholder='Search Languages here!' value ={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
         );
    }
}
 
export default AutoText;