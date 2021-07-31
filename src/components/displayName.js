import React from 'react';

class displayName extends React.Component{
    state = {
        name: ''
    }

    onTxtChangeHandler = (e) =>{
            this.setState({
                name:e.target.value,
            })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }
        

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" onChange={this.onTxtChangeHandler} />
                    <h1>{this.state.name} </h1>
                </form>
            </div>
        );
    }
}

export default displayName;