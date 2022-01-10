import React from "react";


class SearchBar extends React.Component{
 State = {term: ''}


    render(){
        return(
            <div className="Search-bar ui segment ">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input className="ui input" type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;