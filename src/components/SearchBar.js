import React from 'react';

class SearchBar extends React.Component{

    state = {
        term : '',
    }
   
    onSubmitForm = (e) =>{
            e.preventDefault();
            // console.log(this.state.term);
            this.props.onSubmit(this.state.term);   
    }
    render(){
        return(
            <div className="container-xl p-3 my-3 border">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <h1>{this.state.term}</h1>
                        <input type="text" value={this.state.term} placeholder="search ......" onChange={(e) => this.setState({ term : e.target.value})}  />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;