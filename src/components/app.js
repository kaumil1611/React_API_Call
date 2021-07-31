import React from 'react';
 
// import axios from 'axios';
import unSplash from '../api/unsplash';

import SearchBar from './SearchBar';
// import HideNSHow from './HideNShow';
// import DisplayName from './displayName';
import ImageList from './imageList';

const Style = {
    margin : "0.1rem",
    padding : "0.5rem"
}
class App extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.onSearchSubmit = this.onSearchSubmit.bind(this); 
    // }

    /* USING AXIOS
     onSearchSubmit = (term) =>{
        axios.get('https://api.unsplash.com/search/photos',{
            params: {query : term},
            headers: {
                Authorization: 'Client-ID xqs4Oxtv9YVJlhdxAwWuQeYJ2fy3K2N4oiI4_R1vvOg'
            }
        }).then((response)=> {
                console.log(response.data.results);
        })
    } */
    /*  USING AXIOS WITH ASYNC KEYWORD */
    state = {
        images : [],
        totalLength : 0
    }
    
    // this method call when we used bind a this keyword in a constructor
  /*  async onSearchSubmit(term){
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query : term},
            headers: {
                Authorization: 'Client-ID xqs4Oxtv9YVJlhdxAwWuQeYJ2fy3K2N4oiI4_R1vvOg'
            }
        });
         console.log(response.data.results);
        this.setState({
            images: response.data.results
        });
    }  */

    /* this is used if we can not bind this keyword in a constructor */
     onSearchSubmit = async(term) =>{
        const response = await unSplash.get('/search/photos',{
             params: {query : term},
             
         });
          console.log(response.data.results);
         this.setState({
             images: response.data.results,
         });
         this.imageLengthHandler();
     } 
     imageLengthHandler = (e) =>{
        this.setState({
            totalLength :  this.state.images.length
        })
    }
    /*  USING FETCH METHOD
    onSearchSubmit = (term) =>{
        fetch(`https://api.unsplash.com/search/photos?query=${term}`,{
            headers :{
                Authorization : 'Client-ID 7wcdubU5PJFLwmIZxkYA4Qp1Z6KUhyw7VgnBK4T9PAE'
            }
        }).then((res)=> res.json()).then((data) => console.log(data.results)).catch(data=>console.log("error",data));
    } */

    render(){
        return(
           <div className = " ui container" style={Style}>
               <SearchBar  onSubmit={this.onSearchSubmit } />
               <h2>FOUND : {this.state.totalLength} images</h2> 
               <ImageList images={this.state.images}/>
               {/* <HideNSHow />
               <DisplayName /> */}
           </div>
        );
    }
}

export default App;