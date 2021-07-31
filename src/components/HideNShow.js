import React from 'react';

class HideNSHow extends React.Component{
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    state = {
        divContainer :false,
    }
    onChangeHandler = (e) => {
        this.setState({
                divContainer : !this.state.divContainer
            });
            
        
    }

    
    

    render(){
        
        const x = this.state.divContainer;
        console.log(x)
        return(
            <div>
                <center>
                    <h1>    how to hide and show div</h1>
                    <h3>ReactJs Component</h3>
                    <hr/>
                    <button onClick={this.onChangeHandler} >{x? 'Hide' : 'Show'}</button>
                    { x && <div><h2>hello my name is kaumil patel</h2></div>}
                   
                </center>
               
        </div>
        );
    }
}

export default HideNSHow;