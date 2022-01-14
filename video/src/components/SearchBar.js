import React from "react";


class SearchBar extends React.Component{
   State = { term: ''};

// onInputChange = event => {
   //  this.setState({ term: event.target.value});

// };
  onFormSubmit = event => {
    event.preventDefault();
      this.props.onSubmit(this.state.term)
  }

    render(){
        return(
            <div className="Search-bar ui segment ">
                <form  onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input className="ui input"
                         type="text" 
                         value={this.state.term}
                         onChange={(e) => this.setState ( {term: e.target.value})}
                         />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;